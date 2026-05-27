/**
 * CodeGraph MCP Server
 *
 * Model Context Protocol server that exposes CodeGraph functionality
 * as tools for AI assistants like Claude.
 *
 * @module mcp
 *
 * @example
 * ```typescript
 * import { MCPServer } from 'codegraph';
 *
 * const server = new MCPServer('/path/to/project');
 * await server.start();
 * ```
 */

import * as fs from 'fs';
import * as path from 'path';
import CodeGraph, { findNearestCodeGraphRoot, findNearestMonorepoRoot, isInitialized, loadProjectEntries } from '../index';
import { StdioTransport, JsonRpcRequest, JsonRpcNotification, ErrorCodes } from './transport';
import { tools, ToolHandler } from './tools';
import { buildInstructions } from './server-instructions';

/**
 * Convert a file:// URI to a filesystem path.
 * Handles URL encoding and Windows drive letter paths.
 */
function fileUriToPath(uri: string): string {
  try {
    const url = new URL(uri);
    let filePath = decodeURIComponent(url.pathname);
    // On Windows, file:///C:/path produces pathname /C:/path — strip leading /
    if (process.platform === 'win32' && /^\/[a-zA-Z]:/.test(filePath)) {
      filePath = filePath.slice(1);
    }
    return path.resolve(filePath);
  } catch {
    // Fallback for non-standard URIs
    return uri.replace(/^file:\/\/\/?/, '');
  }
}

/**
 * MCP Server Info
 */
const SERVER_INFO = {
  name: 'codegraph',
  version: '0.1.0',
};

/**
 * MCP Protocol Version
 */
const PROTOCOL_VERSION = '2024-11-05';

/**
 * MCP Server for CodeGraph
 *
 * Implements the Model Context Protocol to expose CodeGraph
 * functionality as tools that can be called by AI assistants.
 */
export class MCPServer {
  private transport: StdioTransport;
  private cg: CodeGraph | null = null;
  private toolHandler: ToolHandler;
  private projectPath: string | null;
  private projectsJsonWatcher: fs.FSWatcher | null = null;
  private projectsReloadTimer: ReturnType<typeof setTimeout> | null = null;
  // Absolute paths of sub-projects loaded from projects.json — tracked
  // separately from ToolHandler.projectCache so we know which cached
  // entries came from the registry (and should be removed when their
  // path is taken out of projects.json) vs. lazily opened via projectPath.
  private registeredSubProjects: Set<string> = new Set();

  constructor(projectPath?: string) {
    this.projectPath = projectPath || null;
    this.transport = new StdioTransport();
    // Create ToolHandler eagerly — cross-project queries work even without a default project
    this.toolHandler = new ToolHandler(null);
  }

  /**
   * Start the MCP server
   *
   * Note: CodeGraph initialization is deferred until the initialize request
   * is received, which includes the rootUri from the client.
   */
  async start(): Promise<void> {
    // Start listening for messages immediately - don't check initialization yet
    // We'll get the project path from the initialize request's rootUri
    this.transport.start(this.handleMessage.bind(this));

    // Keep the process running
    process.on('SIGINT', () => this.stop());
    process.on('SIGTERM', () => this.stop());

    // When the parent process (Claude Code) exits, stdin closes.
    // Detect this and shut down gracefully to prevent orphaned processes.
    process.stdin.on('end', () => this.stop());
    process.stdin.on('close', () => this.stop());
  }

  /**
   * Try to initialize CodeGraph for the default project.
   *
   * Walks up parent directories to find the nearest .codegraph/ folder,
   * similar to how git finds .git/ directories.
   *
   * If initialization fails, the error is recorded but the server continues
   * to work — cross-project queries and retries on subsequent tool calls
   * are still possible.
   */
  private async tryInitializeDefault(projectPath: string): Promise<void> {
    // Walk up parent directories to find nearest .codegraph/
    const resolvedRoot = findNearestCodeGraphRoot(projectPath);

    if (!resolvedRoot) {
      // No indexed root — check if this is a monorepo container (has projects.json)
      const monorepoRoot = findNearestMonorepoRoot(projectPath);
      if (monorepoRoot) {
        this.projectPath = monorepoRoot;
        this.toolHandler.setProjectRoot(monorepoRoot);
        await this.loadSubProjects(monorepoRoot);
        this.watchProjectsJson(monorepoRoot);
      } else {
        this.projectPath = projectPath;
      }
      return;
    }

    this.projectPath = resolvedRoot;

    try {
      this.cg = await CodeGraph.open(resolvedRoot);
      this.toolHandler.setDefaultCodeGraph(this.cg);
      this.toolHandler.setProjectRoot(resolvedRoot);
      await this.loadSubProjects(resolvedRoot);
      this.watchProjectsJson(resolvedRoot);
      this.startWatching();
    } catch (err) {
      // Log the error so transient failures are diagnosable (see issue #47)
      const msg = err instanceof Error ? err.message : String(err);
      process.stderr.write(`[CodeGraph MCP] Failed to open project at ${resolvedRoot}: ${msg}\n`);
    }
  }

  /**
   * Open and cache any registered sub-projects not already cached.
   * Closes and unwatches any sub-projects that are no longer in
   * projects.json (e.g. removed or path renamed).
   * Idempotent — safe to call multiple times when projects.json changes.
   */
  private async loadSubProjects(projectRoot: string): Promise<void> {
    const entries = loadProjectEntries(projectRoot);
    const newPaths = new Set<string>();
    for (const e of entries) {
      newPaths.add(path.resolve(projectRoot, e.path));
    }

    // Remove sub-projects that disappeared from projects.json
    let removed = 0;
    for (const absPath of this.registeredSubProjects) {
      if (!newPaths.has(absPath)) {
        this.toolHandler.removeProject(absPath);
        this.registeredSubProjects.delete(absPath);
        removed++;
      }
    }

    // Open new sub-projects
    let opened = 0;
    for (const entry of entries) {
      const absPath = path.resolve(projectRoot, entry.path);
      this.registeredSubProjects.add(absPath);
      if (this.toolHandler.hasProject(absPath)) continue;
      if (!isInitialized(absPath)) continue;

      try {
        const subCg = CodeGraph.openSync(absPath);
        this.toolHandler.addToCache(absPath, subCg);
        this.toolHandler.startWatcherFor(entry.name, absPath, subCg);
        opened++;
      } catch (err) {
        process.stderr.write(
          `[CodeGraph MCP] Failed to open sub-project "${entry.name}": ${err}\n`
        );
      }
    }

    if (opened > 0 || removed > 0) {
      const parts: string[] = [];
      if (opened > 0) parts.push(`loaded ${opened}`);
      if (removed > 0) parts.push(`removed ${removed}`);
      process.stderr.write(`[CodeGraph MCP] Sub-projects: ${parts.join(', ')}\n`);
    }
  }

  /**
   * Watch the monorepo's projects.json so sub-projects added during the
   * MCP session (e.g. via `codegraph project add`) are picked up without a
   * server restart.
   *
   * We watch the parent .codegraph/ directory rather than the file itself
   * because saveProjects() does an atomic temp-file + rename, which breaks
   * single-file watchers on Windows. Reload is debounced 500ms to coalesce
   * the tmp-create + rename event pair.
   */
  private watchProjectsJson(projectRoot: string): void {
    if (this.projectsJsonWatcher) return;
    const cgDir = path.join(projectRoot, '.codegraph');
    if (!fs.existsSync(cgDir)) return;

    try {
      this.projectsJsonWatcher = fs.watch(cgDir, (_eventType, filename) => {
        if (filename !== 'projects.json' && filename !== 'projects.json.tmp') return;
        if (this.projectsReloadTimer) clearTimeout(this.projectsReloadTimer);
        this.projectsReloadTimer = setTimeout(() => {
          this.projectsReloadTimer = null;
          this.loadSubProjects(projectRoot).catch((err) => {
            process.stderr.write(
              `[CodeGraph MCP] Failed to reload sub-projects after projects.json change: ${err}\n`
            );
          });
        }, 500);
      });
      this.projectsJsonWatcher.on('error', (err) => {
        process.stderr.write(`[CodeGraph MCP] projects.json watcher error: ${err}\n`);
      });
    } catch (err) {
      process.stderr.write(`[CodeGraph MCP] Could not watch projects.json: ${err}\n`);
    }
  }

  /**
   * Retry initialization of the default project if it previously failed.
   * Called lazily on tool calls that need the default project.
   * Re-walks parent directories each time so it picks up projects
   * initialized after the MCP server started.
   */
  private retryInitIfNeeded(): void {
    // Already initialized successfully
    if (this.toolHandler.hasDefaultCodeGraph()) return;
    // No project path to retry with
    if (!this.projectPath) return;

    const resolvedRoot = findNearestCodeGraphRoot(this.projectPath);
    if (!resolvedRoot) {
      // Check if it became a monorepo root since last attempt
      const monorepoRoot = findNearestMonorepoRoot(this.projectPath);
      if (monorepoRoot && monorepoRoot !== this.projectPath) {
        this.projectPath = monorepoRoot;
        this.toolHandler.setProjectRoot(monorepoRoot);
        this.loadSubProjects(monorepoRoot).catch(() => {});
        this.watchProjectsJson(monorepoRoot);
      }
      return;
    }

    try {
      if (this.cg) {
        try { this.cg.close(); } catch { /* ignore */ }
        this.cg = null;
      }
      this.cg = CodeGraph.openSync(resolvedRoot);
      this.projectPath = resolvedRoot;
      this.toolHandler.setDefaultCodeGraph(this.cg);
      this.toolHandler.setProjectRoot(resolvedRoot);
      this.startWatching();
    } catch {
      // Still failing — will retry on next tool call
    }
  }

  /**
   * Start file watching on the active CodeGraph instance.
   * Logs sync activity to stderr for diagnostics.
   */
  private startWatching(): void {
    if (!this.cg) return;

    const started = this.cg.watch({
      onSyncComplete: (result) => {
        if (result.filesChanged > 0) {
          process.stderr.write(
            `[CodeGraph MCP] Auto-synced ${result.filesChanged} file(s) in ${result.durationMs}ms\n`
          );
        }
      },
      onSyncError: (err) => {
        process.stderr.write(`[CodeGraph MCP] Auto-sync error: ${err.message}\n`);
      },
    });

    if (started) {
      process.stderr.write('[CodeGraph MCP] File watcher active — graph will auto-sync on changes\n');
    }
  }

  /**
   * Stop the server
   */
  stop(): void {
    // Stop projects.json watcher and any pending reload
    if (this.projectsReloadTimer) {
      clearTimeout(this.projectsReloadTimer);
      this.projectsReloadTimer = null;
    }
    if (this.projectsJsonWatcher) {
      this.projectsJsonWatcher.close();
      this.projectsJsonWatcher = null;
    }

    // Close all cached cross-project connections first
    this.toolHandler.closeAll();
    // Close the main CodeGraph instance
    if (this.cg) {
      this.cg.close();
      this.cg = null;
    }
    this.transport.stop();
    process.exit(0);
  }

  /**
   * Handle incoming JSON-RPC messages
   */
  private async handleMessage(message: JsonRpcRequest | JsonRpcNotification): Promise<void> {
    // Check if it's a request (has id) or notification (no id)
    const isRequest = 'id' in message;

    switch (message.method) {
      case 'initialize':
        if (isRequest) {
          await this.handleInitialize(message as JsonRpcRequest);
        }
        break;

      case 'initialized':
        // Notification that client has finished initialization
        // No action needed - the client is ready
        break;

      case 'tools/list':
        if (isRequest) {
          await this.handleToolsList(message as JsonRpcRequest);
        }
        break;

      case 'tools/call':
        if (isRequest) {
          await this.handleToolsCall(message as JsonRpcRequest);
        }
        break;

      case 'ping':
        if (isRequest) {
          this.transport.sendResult((message as JsonRpcRequest).id, {});
        }
        break;

      default:
        if (isRequest) {
          this.transport.sendError(
            (message as JsonRpcRequest).id,
            ErrorCodes.MethodNotFound,
            `Method not found: ${message.method}`
          );
        }
    }
  }

  /**
   * Handle initialize request
   */
  private async handleInitialize(request: JsonRpcRequest): Promise<void> {
    const params = request.params as {
      rootUri?: string;
      workspaceFolders?: Array<{ uri: string; name: string }>;
    } | undefined;

    // Extract project path from rootUri or workspaceFolders
    let projectPath = this.projectPath;

    if (params?.rootUri) {
      projectPath = fileUriToPath(params.rootUri);
    } else if (params?.workspaceFolders?.[0]?.uri) {
      projectPath = fileUriToPath(params.workspaceFolders[0].uri);
    }

    // Fall back to current working directory if no path provided
    if (!projectPath) {
      projectPath = process.cwd();
    }

    // Try to initialize the default project (non-fatal if it fails)
    await this.tryInitializeDefault(projectPath);

    // Build instructions: append monorepo section if sub-projects are registered
    const projectEntries = this.projectPath ? loadProjectEntries(this.projectPath) : [];

    // We accept the client's protocol version but respond with our supported version.
    // The `instructions` field is surfaced by MCP clients in the agent's system
    // prompt automatically — it's the right place for the universal tool-selection
    // playbook, ahead of individual tool descriptions.
    this.transport.sendResult(request.id, {
      protocolVersion: PROTOCOL_VERSION,
      capabilities: {
        tools: {},
      },
      serverInfo: SERVER_INFO,
      instructions: buildInstructions(projectEntries),
    });
  }

  /**
   * Handle tools/list request
   */
  private async handleToolsList(request: JsonRpcRequest): Promise<void> {
    this.retryInitIfNeeded();
    this.transport.sendResult(request.id, {
      tools: this.toolHandler.getTools(),
    });
  }

  /**
   * Handle tools/call request
   */
  private async handleToolsCall(request: JsonRpcRequest): Promise<void> {
    const params = request.params as {
      name: string;
      arguments?: Record<string, unknown>;
    };

    if (!params || !params.name) {
      this.transport.sendError(
        request.id,
        ErrorCodes.InvalidParams,
        'Missing tool name'
      );
      return;
    }

    const toolName = params.name;
    const toolArgs = params.arguments || {};

    // Validate tool exists
    const tool = tools.find(t => t.name === toolName);
    if (!tool) {
      this.transport.sendError(
        request.id,
        ErrorCodes.InvalidParams,
        `Unknown tool: ${toolName}`
      );
      return;
    }

    // If the default project isn't initialized yet, retry in case it was
    // initialized after the MCP server started (e.g. user ran codegraph init)
    this.retryInitIfNeeded();

    const result = await this.toolHandler.execute(toolName, toolArgs);

    this.transport.sendResult(request.id, result);
  }
}

// Export for use in CLI
export { StdioTransport } from './transport';
export { tools, ToolHandler } from './tools';
