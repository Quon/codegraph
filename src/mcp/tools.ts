/**
 * MCP Tool Definitions
 *
 * Defines the tools exposed by the CodeGraph MCP server.
 */

import CodeGraph, { findNearestCodeGraphRoot, isInitialized, loadProjectEntries } from '../index';
import type { Node, Edge, SearchResult, Subgraph, TaskContext, NodeKind } from '../types';
import { createHash } from 'crypto';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { clamp, validatePathWithinRoot } from '../utils';
import { tmpdir } from 'os';
import { join, resolve as resolvePath } from 'path';
import { WASM_FALLBACK_FIX_RECIPE } from '../db';
import { FileWatcher } from '../sync';

/** Maximum output length to prevent context bloat (characters) */
const MAX_OUTPUT_LENGTH = 15000;

/**
 * Calculate the recommended number of codegraph_explore calls based on project size.
 * Larger codebases need more exploration calls to cover their surface area,
 * but smaller ones should use fewer to avoid unnecessary overhead.
 */
export function getExploreBudget(fileCount: number): number {
  if (fileCount < 500) return 1;
  if (fileCount < 5000) return 2;
  if (fileCount < 15000) return 3;
  if (fileCount < 25000) return 4;
  return 5;
}

/**
 * Mark a Claude session as having consulted MCP tools.
 * This enables Grep/Glob/Bash commands that would otherwise be blocked.
 */
function markSessionConsulted(sessionId: string): void {
  try {
    const hash = createHash('md5').update(sessionId).digest('hex').slice(0, 16);
    const markerPath = join(tmpdir(), `codegraph-consulted-${hash}`);
    writeFileSync(markerPath, new Date().toISOString(), 'utf8');
  } catch {
    // Silently fail - don't break MCP on marker write failure
  }
}

/**
 * MCP Tool definition
 */
export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: 'object';
    properties: Record<string, PropertySchema>;
    required?: string[];
  };
}

interface PropertySchema {
  type: string;
  description: string;
  enum?: string[];
  default?: unknown;
}

/**
 * Tool execution result
 */
export interface ToolResult {
  content: Array<{
    type: 'text';
    text: string;
  }>;
  isError?: boolean;
}

/**
 * Common projectPath property for cross-project queries
 */
const projectPathProperty: PropertySchema = {
  type: 'string',
  description: 'Path to a different project with .codegraph/ initialized. If omitted, uses current project. Use this to query other codebases.',
};

/**
 * Common project parameter for registered sub-projects.
 * Overrides projectPath when both are provided.
 */
const projectProperty: PropertySchema = {
  type: 'string',
  description: 'Registered sub-project name (e.g. "packages/foo") or "*" for all projects. Uses root project if omitted.',
};

/**
 * All CodeGraph MCP tools
 *
 * Designed for minimal context usage - use codegraph_context as the primary tool,
 * and only use other tools for targeted follow-up queries.
 *
 * All tools support cross-project queries via the optional `projectPath` parameter.
 */
export const tools: ToolDefinition[] = [
  {
    name: 'codegraph_search',
    description: 'Quick symbol search by name. Returns locations only (no code). Use codegraph_context instead for comprehensive task context.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Symbol name or partial name (e.g., "auth", "signIn", "UserService")',
        },
        kind: {
          type: 'string',
          description: 'Filter by node kind',
          enum: ['function', 'method', 'class', 'interface', 'type', 'variable', 'route', 'component'],
        },
        limit: {
          type: 'number',
          description: 'Maximum results (default: 10)',
          default: 10,
        },
        projectPath: projectPathProperty,
        project: projectProperty,
      },
      required: ['query'],
    },
  },
  {
    name: 'codegraph_context',
    description: 'PRIMARY TOOL: Build comprehensive context for a task. Returns entry points, related symbols, and key code - often enough to understand the codebase without additional tool calls. NOTE: This provides CODE context, not product requirements. For new features, still clarify UX/behavior questions with the user before implementing.',
    inputSchema: {
      type: 'object',
      properties: {
        task: {
          type: 'string',
          description: 'Description of the task, bug, or feature to build context for',
        },
        maxNodes: {
          type: 'number',
          description: 'Maximum symbols to include (default: 20)',
          default: 20,
        },
        includeCode: {
          type: 'boolean',
          description: 'Include code snippets for key symbols (default: true)',
          default: true,
        },
        projectPath: projectPathProperty,
        project: projectProperty,
      },
      required: ['task'],
    },
  },
  {
    name: 'codegraph_callers',
    description: 'Find all functions/methods that call a specific symbol. Useful for understanding usage patterns and impact of changes.',
    inputSchema: {
      type: 'object',
      properties: {
        symbol: {
          type: 'string',
          description: 'Name of the function, method, or class to find callers for',
        },
        limit: {
          type: 'number',
          description: 'Maximum number of callers to return (default: 20)',
          default: 20,
        },
        projectPath: projectPathProperty,
        project: projectProperty,
      },
      required: ['symbol'],
    },
  },
  {
    name: 'codegraph_callees',
    description: 'Find all functions/methods that a specific symbol calls. Useful for understanding dependencies and code flow.',
    inputSchema: {
      type: 'object',
      properties: {
        symbol: {
          type: 'string',
          description: 'Name of the function, method, or class to find callees for',
        },
        limit: {
          type: 'number',
          description: 'Maximum number of callees to return (default: 20)',
          default: 20,
        },
        projectPath: projectPathProperty,
        project: projectProperty,
      },
      required: ['symbol'],
    },
  },
  {
    name: 'codegraph_impact',
    description: 'Analyze the impact radius of changing a symbol. Shows what code could be affected by modifications.',
    inputSchema: {
      type: 'object',
      properties: {
        symbol: {
          type: 'string',
          description: 'Name of the symbol to analyze impact for',
        },
        depth: {
          type: 'number',
          description: 'How many levels of dependencies to traverse (default: 2)',
          default: 2,
        },
        projectPath: projectPathProperty,
        project: projectProperty,
      },
      required: ['symbol'],
    },
  },
  {
    name: 'codegraph_node',
    description: 'Get detailed information about a specific code symbol. Use includeCode=true only when you need the full source code - otherwise just get location and signature to minimize context usage.',
    inputSchema: {
      type: 'object',
      properties: {
        symbol: {
          type: 'string',
          description: 'Name of the symbol to get details for',
        },
        includeCode: {
          type: 'boolean',
          description: 'Include full source code (default: false to minimize context)',
          default: false,
        },
        projectPath: projectPathProperty,
        project: projectProperty,
      },
      required: ['symbol'],
    },
  },
  {
    name: 'codegraph_explore',
    description: 'Deep exploration tool — returns comprehensive context for a topic in a SINGLE call. Groups all relevant source code by file (contiguous sections, not snippets), includes a relationship map, and uses deeper graph traversal. Designed to replace multiple codegraph_node + file Read calls. Use this instead of codegraph_context when you need thorough understanding. IMPORTANT: Use specific symbol names, file names, or short code terms in your query — NOT natural language sentences. Before calling this, use codegraph_search to discover relevant symbol names, then include those names in your query. Bad: "how are agent prompts loaded and passed to the CLI". Good: "readAgentsFromDirectory createClaudeSession chat-manager agents.ts".',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Symbol names, file names, or short code terms to explore (e.g., "AuthService loginUser session-manager", "GraphTraverser BFS impact traversal.ts"). Use codegraph_search first to find relevant names.',
        },
        maxFiles: {
          type: 'number',
          description: 'Maximum number of files to include source code from (default: 12)',
          default: 12,
        },
        projectPath: projectPathProperty,
        project: projectProperty,
      },
      required: ['query'],
    },
  },
  {
    name: 'codegraph_status',
    description: 'Get the status of the CodeGraph index, including statistics about indexed files, nodes, and edges.',
    inputSchema: {
      type: 'object',
      properties: {
        projectPath: projectPathProperty,
        project: projectProperty,
      },
    },
  },
  {
    name: 'codegraph_files',
    description: 'REQUIRED for file/folder exploration. Get the project file structure from the CodeGraph index. Returns a tree view of all indexed files with metadata (language, symbol count). Much faster than Glob/filesystem scanning. Use this FIRST when exploring project structure, finding files, or understanding codebase organization.',
    inputSchema: {
      type: 'object',
      properties: {
        path: {
          type: 'string',
          description: 'Filter to files under this directory path (e.g., "src/components"). Returns all files if not specified.',
        },
        pattern: {
          type: 'string',
          description: 'Filter files matching this glob pattern (e.g., "*.tsx", "**/*.test.ts")',
        },
        format: {
          type: 'string',
          description: 'Output format: "tree" (hierarchical, default), "flat" (simple list), "grouped" (by language)',
          enum: ['tree', 'flat', 'grouped'],
          default: 'tree',
        },
        includeMetadata: {
          type: 'boolean',
          description: 'Include file metadata like language and symbol count (default: true)',
          default: true,
        },
        maxDepth: {
          type: 'number',
          description: 'Maximum directory depth to show (default: unlimited)',
        },
        projectPath: projectPathProperty,
        project: projectProperty,
      },
    },
  },
  {
    name: 'codegraph_projects',
    description: 'List registered sub-projects with initialization status. In a monorepo, call this first to discover available sub-project names, then pass the name as the `project` parameter to any other tool.',
    inputSchema: {
      type: 'object',
      properties: {
        status: {
          type: 'boolean',
          description: 'Whether to check initialization status (default: true)',
          default: true,
        },
      },
      required: [],
    },
  },
];

/**
 * Tool handler that executes tools against a CodeGraph instance
 *
 * Supports cross-project queries via the projectPath parameter.
 * Other projects are opened on-demand and cached for performance.
 */
export class ToolHandler {
  // Cache of opened CodeGraph instances for cross-project queries
  private projectCache: Map<string, CodeGraph> = new Map();
  private projectRoot: string | null = null;
  private watchers: Map<string, FileWatcher> = new Map();

  // Serialize sub-project syncs across watchers — prevents N watchers from
  // each spawning a parse worker process simultaneously when multiple
  // sub-projects see file changes at the same time.
  private syncQueue: Promise<unknown> = Promise.resolve();

  constructor(private cg: CodeGraph | null) {}

  /**
   * Run an async sync operation serialized against all other watchers.
   * Failures don't block the queue — the chain catches and continues.
   */
  private serializeSync<T>(fn: () => Promise<T>): Promise<T> {
    const next = this.syncQueue.then(fn);
    this.syncQueue = next.catch(() => {});
    return next;
  }

  /**
   * Update the default CodeGraph instance (e.g. after lazy initialization)
   */
  setDefaultCodeGraph(cg: CodeGraph): void {
    this.cg = cg;
  }

  /**
   * Whether a default CodeGraph instance is available
   */
  hasDefaultCodeGraph(): boolean {
    return this.cg !== null;
  }

  /**
   * Set the root project path (for loading the projects registry)
   */
  setProjectRoot(root: string): void {
    this.projectRoot = root;
  }

  /**
   * Add a CodeGraph instance to the project cache (used by MCP server startup)
   */
  addToCache(projectPath: string, cg: CodeGraph): void {
    this.projectCache.set(projectPath, cg);
  }

  /**
   * Whether a project at the given absolute path is already cached.
   * Used to make incremental sub-project loading idempotent.
   */
  hasProject(projectPath: string): boolean {
    return this.projectCache.has(projectPath);
  }

  /**
   * All currently cached project absolute paths.
   * Used to detect sub-projects removed from projects.json.
   */
  getProjectPaths(): string[] {
    return [...this.projectCache.keys()];
  }

  /**
   * Stop watching and close a cached sub-project. No-op if not cached.
   */
  removeProject(absPath: string): void {
    const watcher = this.watchers.get(absPath);
    if (watcher) {
      watcher.stop();
      this.watchers.delete(absPath);
    }
    const cg = this.projectCache.get(absPath);
    if (cg) {
      try { cg.close(); } catch { /* already closed */ }
      this.projectCache.delete(absPath);
    }
  }

  /**
   * Resolve a project identifier to one or more CodeGraph instances.
   */
  private resolveProjects(project?: string, projectPath?: string): Map<string, CodeGraph> {
    // Root project only
    if (!project || project === '.') {
      if (projectPath) {
        const cg = this.getCodeGraph(projectPath);
        return new Map([[projectPath, cg]]);
      }
      if (!this.cg) throw new Error('CodeGraph not initialized for this project.');
      return new Map([['.', this.cg]]);
    }

    // Resolve from registry
    if (!this.projectRoot) throw new Error('No project root configured. Cannot resolve sub-projects.');

    const entries = loadProjectEntries(this.projectRoot);

    if (project === '*') {
      const map = new Map<string, CodeGraph>();
      if (this.cg) map.set('.', this.cg);

      for (const entry of entries) {
        const absPath = resolvePath(this.projectRoot, entry.path);
        const cached = this.projectCache.get(absPath);
        if (cached) {
          map.set(entry.name, cached);
          continue;
        }
        try {
          const subCg = CodeGraph.openSync(absPath);
          this.projectCache.set(absPath, subCg);
          this.startWatcherFor(entry.name, absPath, subCg);
          map.set(entry.name, subCg);
        } catch (err) {
          process.stderr.write(`[CodeGraph MCP] Failed to open sub-project "${entry.name}": ${err}\n`);
        }
      }
      return map;
    }

    // Look up by name first, then by path
    const entry = entries.find((e) => e.name === project || e.path === project);
    const resolvedPath = entry ? entry.path : project;
    const label = entry ? entry.name : project;

    const absPath = resolvePath(this.projectRoot, resolvedPath);
    if (!validatePathWithinRoot(this.projectRoot, absPath)) {
      throw new Error(`Project "${project}" is outside the project root`);
    }
    const cached = this.projectCache.get(absPath);
    if (cached) return new Map([[label, cached]]);

    const subCg = CodeGraph.openSync(absPath);
    this.projectCache.set(absPath, subCg);
    this.startWatcherFor(label, absPath, subCg);
    return new Map([[label, subCg]]);
  }

  /**
   * Start a watcher for a sub-project.
   * Public so MCP server startup can call it.
   */
  startWatcherFor(name: string, absPath: string, cg: CodeGraph): void {
    if (this.watchers.has(absPath)) return;
    const watcher = new FileWatcher(
      absPath,
      cg.getConfig(),
      // Serialize across all sub-project watchers so concurrent file
      // changes don't spawn N parse worker processes at once.
      () => this.serializeSync(async () => {
        const result = await cg.sync();
        const filesChanged = result.filesAdded + result.filesModified + result.filesRemoved;
        return { filesChanged, durationMs: result.durationMs };
      }),
      {
        onSyncComplete: (result) => {
          if (result.filesChanged > 0) {
            process.stderr.write(
              `[CodeGraph MCP] Auto-synced "${name}" — ${result.filesChanged} file(s) in ${result.durationMs}ms\n`
            );
          }
        },
        onSyncError: (err) => {
          process.stderr.write(`[CodeGraph MCP] Auto-sync error for "${name}": ${err.message}\n`);
        },
      }
    );
    if (watcher.start()) {
      this.watchers.set(absPath, watcher);
    } else {
      // Recursive fs.watch failed (e.g. Linux < Node 19). Surface this so
      // users know auto-sync is disabled — otherwise it fails silently.
      process.stderr.write(
        `[CodeGraph MCP] Auto-sync disabled for "${name}" — recursive fs.watch unsupported on this platform. ` +
        `Run \`codegraph sync\` manually after file changes.\n`
      );
    }
  }

  /**
   * Get tool definitions with dynamic descriptions based on project size.
   * The codegraph_explore tool description includes a budget recommendation
   * scaled to the number of indexed files.
   */
  getTools(): ToolDefinition[] {
    if (!this.cg) return tools;

    try {
      const stats = this.cg.getStats();
      const budget = getExploreBudget(stats.fileCount);

      // Build dynamic project description if sub-projects are registered
      const registeredEntries = this.projectRoot ? loadProjectEntries(this.projectRoot) : [];
      const projectDesc = registeredEntries.length > 0
        ? `Sub-project name or "*" for all. Uses root if omitted. Available: ${registeredEntries.map(e => `"${e.name}" (${e.path})`).join(', ')}.`
        : projectProperty.description;

      return tools.map(tool => {
        const patches: Partial<ToolDefinition> = {};

        if (tool.name === 'codegraph_explore') {
          patches.description = `${tool.description} Budget: make at most ${budget} calls for this project (${stats.fileCount.toLocaleString()} files indexed).`;
        }

        if (registeredEntries.length > 0 && tool.inputSchema.properties?.project) {
          patches.inputSchema = {
            ...tool.inputSchema,
            properties: {
              ...tool.inputSchema.properties,
              project: { ...tool.inputSchema.properties.project, description: projectDesc },
            },
          };
        }

        return Object.keys(patches).length > 0 ? { ...tool, ...patches } : tool;
      });
    } catch {
      return tools;
    }
  }

  /**
   * Get CodeGraph instance for a project
   *
   * If projectPath is provided, opens that project's CodeGraph (cached).
   * Otherwise returns the default CodeGraph instance.
   *
   * Walks up parent directories to find the nearest .codegraph/ folder,
   * similar to how git finds .git/ directories.
   */
  private getCodeGraph(projectPath?: string): CodeGraph {
    if (!projectPath) {
      if (!this.cg) {
        throw new Error('CodeGraph not initialized for this project. Run \'codegraph init\' first.');
      }
      return this.cg;
    }

    // Check cache first (using original path as key)
    if (this.projectCache.has(projectPath)) {
      return this.projectCache.get(projectPath)!;
    }

    // Walk up parent directories to find nearest .codegraph/
    const resolvedRoot = findNearestCodeGraphRoot(projectPath);

    if (!resolvedRoot) {
      throw new Error(`CodeGraph not initialized in ${projectPath}. Run 'codegraph init' in that project first.`);
    }

    // If resolved root matches the default instance, reuse it instead of opening
    // a second SQLite connection to the same database.
    if (this.cg && this.cg.getProjectRoot() === resolvedRoot) {
      this.projectCache.set(projectPath, this.cg);
      return this.cg;
    }

    // Check if we already have this resolved root cached (different path, same project)
    if (this.projectCache.has(resolvedRoot)) {
      const cg = this.projectCache.get(resolvedRoot)!;
      // Cache under original path too for faster future lookups
      this.projectCache.set(projectPath, cg);
      return cg;
    }

    // Open and cache under both paths
    const cg = CodeGraph.openSync(resolvedRoot);
    this.projectCache.set(resolvedRoot, cg);
    if (projectPath !== resolvedRoot) {
      this.projectCache.set(projectPath, cg);
    }
    return cg;
  }

  /**
   * Close all cached project connections
   */
  closeAll(): void {
    // Stop all sub-project watchers first
    for (const watcher of this.watchers.values()) {
      watcher.stop();
    }
    this.watchers.clear();

    // Close all cached project connections
    for (const cg of this.projectCache.values()) {
      cg.close();
    }
    this.projectCache.clear();
  }

  /**
   * Validate that a value is a non-empty string
   */
  private validateString(value: unknown, name: string): string | ToolResult {
    if (typeof value !== 'string' || value.length === 0) {
      return this.errorResult(`${name} must be a non-empty string`);
    }
    return value;
  }

  /**
   * Execute a tool by name
   */
  async execute(toolName: string, args: Record<string, unknown>): Promise<ToolResult> {
    try {
      switch (toolName) {
        case 'codegraph_search':
          return await this.handleSearch(args);
        case 'codegraph_context':
          return await this.handleContext(args);
        case 'codegraph_callers':
          return await this.handleCallers(args);
        case 'codegraph_callees':
          return await this.handleCallees(args);
        case 'codegraph_impact':
          return await this.handleImpact(args);
        case 'codegraph_explore':
          return await this.handleExplore(args);
        case 'codegraph_node':
          return await this.handleNode(args);
        case 'codegraph_status':
          return await this.handleStatus(args);
        case 'codegraph_files':
          return await this.handleFiles(args);
        case 'codegraph_projects':
          return await this.handleProjects(args);
        default:
          return this.errorResult(`Unknown tool: ${toolName}`);
      }
    } catch (err) {
      return this.errorResult(`Tool execution failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  /**
   * Handle codegraph_search
   */
  private async handleSearch(args: Record<string, unknown>): Promise<ToolResult> {
    const query = this.validateString(args.query, 'query');
    if (typeof query !== 'string') return query;

    const projectArg = args.project as string | undefined;
    const projectPathArg = args.projectPath as string | undefined;

    // Single project (default behavior, or specific named project)
    if (!projectArg || projectArg === '.') {
      const cg = this.getCodeGraph(projectPathArg);
      const kind = args.kind as string | undefined;
      const rawLimit = Number(args.limit) || 10;
      const limit = clamp(rawLimit, 1, 100);
      const results = cg.searchNodes(query, { limit, kinds: kind ? [kind as NodeKind] : undefined });
      if (results.length === 0) {
        return this.textResult(`No results found for "${query}"`);
      }
      return this.textResult(this.truncateOutput(this.formatSearchResults(results)));
    }

    // "*" or specific named project — use resolveProjects
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const allResults: Array<Record<string, unknown>> = [];
    for (const [label, cg] of projects) {
      const kind = args.kind as string | undefined;
      const rawLimit = Number(args.limit) || 10;
      const limit = clamp(rawLimit, 1, 100);
      const results = cg.searchNodes(query, { limit, kinds: kind ? [kind as NodeKind] : undefined });
      for (const r of results) {
        allResults.push({ project: label, ...r as unknown as Record<string, unknown> });
      }
    }
    if (allResults.length === 0) {
      return this.textResult(`No results found for "${query}" in any project`);
    }
    return this.textResult(this.truncateOutput(JSON.stringify(allResults, null, 2)));
  }

  /**
   * Handle codegraph_context
   */
  private async handleContext(args: Record<string, unknown>): Promise<ToolResult> {
    const task = this.validateString(args.task, 'task');
    if (typeof task !== 'string') return task;

    // Mark session as consulted (enables Grep/Glob/Bash)
    const sessionId = process.env.CLAUDE_SESSION_ID;
    if (sessionId) {
      markSessionConsulted(sessionId);
    }

    const projectArg = args.project as string | undefined;
    const projectPathArg = args.projectPath as string | undefined;

    const maxNodes = (args.maxNodes as number) || 20;
    const includeCode = args.includeCode !== false;

    // Single project (default behavior)
    if (!projectArg || projectArg === '.') {
      const cg = this.getCodeGraph(projectPathArg);
      const context = await cg.buildContext(task, {
        maxNodes,
        includeCode,
        format: 'markdown',
      });

      // Detect if this looks like a feature request (vs bug fix or exploration)
      const isFeatureQuery = this.looksLikeFeatureRequest(task);
      const reminder = isFeatureQuery
        ? '\n\n⚠️ **Ask user:** UX preferences, edge cases, acceptance criteria'
        : '';

      // buildContext returns string when format is 'markdown'
      if (typeof context === 'string') {
        return this.textResult(context + reminder);
      }

      // If it returns TaskContext, format it
      return this.textResult(this.formatTaskContext(context) + reminder);
    }

    // "*" or specific named project — build context for each
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const sections: string[] = [];
    for (const [label, cg] of projects) {
      const context = await cg.buildContext(task, {
        maxNodes,
        includeCode,
        format: 'markdown',
      });
      const text = typeof context === 'string' ? context : this.formatTaskContext(context);
      sections.push(`## Project: ${label}\n\n${text}`);
    }
    return this.textResult(sections.join('\n\n---\n\n'));
  }

  /**
   * Heuristic to detect if a query looks like a feature request
   */
  private looksLikeFeatureRequest(task: string): boolean {
    const featureKeywords = [
      'add', 'create', 'implement', 'build', 'enable', 'allow',
      'new feature', 'support for', 'ability to', 'want to',
      'should be able', 'need to add', 'swap', 'edit', 'modify'
    ];
    const bugKeywords = [
      'fix', 'bug', 'error', 'broken', 'crash', 'issue', 'problem',
      'not working', 'fails', 'undefined', 'null'
    ];
    const explorationKeywords = [
      'how does', 'where is', 'what is', 'find', 'show me',
      'explain', 'understand', 'explore'
    ];

    const lowerTask = task.toLowerCase();

    // If it's clearly a bug or exploration, not a feature
    if (bugKeywords.some(k => lowerTask.includes(k))) return false;
    if (explorationKeywords.some(k => lowerTask.includes(k))) return false;

    // If it matches feature keywords, it's likely a feature request
    return featureKeywords.some(k => lowerTask.includes(k));
  }

  /**
   * Handle codegraph_callers
   */
  private async handleCallers(args: Record<string, unknown>): Promise<ToolResult> {
    const symbol = this.validateString(args.symbol, 'symbol');
    if (typeof symbol !== 'string') return symbol;

    const projectArg = args.project as string | undefined;
    const projectPathArg = args.projectPath as string | undefined;
    const limit = clamp((args.limit as number) || 20, 1, 100);

    // Single project (default behavior)
    if (!projectArg || projectArg === '.') {
      const cg = this.getCodeGraph(projectPathArg);
      const allMatches = this.findAllSymbols(cg, symbol);
      if (allMatches.nodes.length === 0) {
        return this.textResult(`Symbol "${symbol}" not found in the codebase`);
      }

      // Aggregate callers across all matching symbols
      const seen = new Set<string>();
      const allCallers: Node[] = [];
      for (const node of allMatches.nodes) {
        for (const c of cg.getCallers(node.id)) {
          if (!seen.has(c.node.id)) {
            seen.add(c.node.id);
            allCallers.push(c.node);
          }
        }
      }

      if (allCallers.length === 0) {
        return this.textResult(`No callers found for "${symbol}"${allMatches.note}`);
      }

      const formatted = this.formatNodeList(allCallers.slice(0, limit), `Callers of ${symbol}`) + allMatches.note;
      return this.textResult(this.truncateOutput(formatted));
    }

    // "*" or specific named project — aggregate across projects
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const sections: string[] = [];
    for (const [label, cg] of projects) {
      const allMatches = this.findAllSymbols(cg, symbol);
      if (allMatches.nodes.length === 0) continue;

      const seen = new Set<string>();
      const allCallers: Node[] = [];
      for (const node of allMatches.nodes) {
        for (const c of cg.getCallers(node.id)) {
          if (!seen.has(c.node.id)) {
            seen.add(c.node.id);
            allCallers.push(c.node);
          }
        }
      }
      if (allCallers.length === 0) continue;
      const formatted = this.formatNodeList(allCallers.slice(0, limit), `Callers of ${symbol} in ${label}`);
      sections.push(`## Project: ${label}\n\n${formatted}`);
    }
    if (sections.length === 0) {
      return this.textResult(`No callers found for "${symbol}" in any project`);
    }
    return this.textResult(this.truncateOutput(sections.join('\n\n---\n\n')));
  }

  /**
   * Handle codegraph_callees
   */
  private async handleCallees(args: Record<string, unknown>): Promise<ToolResult> {
    const symbol = this.validateString(args.symbol, 'symbol');
    if (typeof symbol !== 'string') return symbol;

    const projectArg = args.project as string | undefined;
    const projectPathArg = args.projectPath as string | undefined;
    const limit = clamp((args.limit as number) || 20, 1, 100);

    // Single project (default behavior)
    if (!projectArg || projectArg === '.') {
      const cg = this.getCodeGraph(projectPathArg);
      const allMatches = this.findAllSymbols(cg, symbol);
      if (allMatches.nodes.length === 0) {
        return this.textResult(`Symbol "${symbol}" not found in the codebase`);
      }

      // Aggregate callees across all matching symbols
      const seen = new Set<string>();
      const allCallees: Node[] = [];
      for (const node of allMatches.nodes) {
        for (const c of cg.getCallees(node.id)) {
          if (!seen.has(c.node.id)) {
            seen.add(c.node.id);
            allCallees.push(c.node);
          }
        }
      }

      if (allCallees.length === 0) {
        return this.textResult(`No callees found for "${symbol}"${allMatches.note}`);
      }

      const formatted = this.formatNodeList(allCallees.slice(0, limit), `Callees of ${symbol}`) + allMatches.note;
      return this.textResult(this.truncateOutput(formatted));
    }

    // "*" or specific named project — aggregate across projects
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const sections: string[] = [];
    for (const [label, cg] of projects) {
      const allMatches = this.findAllSymbols(cg, symbol);
      if (allMatches.nodes.length === 0) continue;

      const seen = new Set<string>();
      const allCallees: Node[] = [];
      for (const node of allMatches.nodes) {
        for (const c of cg.getCallees(node.id)) {
          if (!seen.has(c.node.id)) {
            seen.add(c.node.id);
            allCallees.push(c.node);
          }
        }
      }
      if (allCallees.length === 0) continue;
      const formatted = this.formatNodeList(allCallees.slice(0, limit), `Callees of ${symbol} in ${label}`);
      sections.push(`## Project: ${label}\n\n${formatted}`);
    }
    if (sections.length === 0) {
      return this.textResult(`No callees found for "${symbol}" in any project`);
    }
    return this.textResult(this.truncateOutput(sections.join('\n\n---\n\n')));
  }

  /**
   * Handle codegraph_impact
   */
  private async handleImpact(args: Record<string, unknown>): Promise<ToolResult> {
    const symbol = this.validateString(args.symbol, 'symbol');
    if (typeof symbol !== 'string') return symbol;

    const projectArg = args.project as string | undefined;
    const projectPathArg = args.projectPath as string | undefined;
    const depth = clamp((args.depth as number) || 2, 1, 10);

    // Single project (default behavior)
    if (!projectArg || projectArg === '.') {
      const cg = this.getCodeGraph(projectPathArg);
      const allMatches = this.findAllSymbols(cg, symbol);
      if (allMatches.nodes.length === 0) {
        return this.textResult(`Symbol "${symbol}" not found in the codebase`);
      }

      // Aggregate impact across all matching symbols
      const mergedNodes = new Map<string, Node>();
      const mergedEdges: Edge[] = [];
      const seenEdges = new Set<string>();

      for (const node of allMatches.nodes) {
        const impact = cg.getImpactRadius(node.id, depth);
        for (const [id, n] of impact.nodes) {
          mergedNodes.set(id, n);
        }
        for (const e of impact.edges) {
          const key = `${e.source}->${e.target}:${e.kind}`;
          if (!seenEdges.has(key)) {
            seenEdges.add(key);
            mergedEdges.push(e);
          }
        }
      }

      const mergedImpact = {
        nodes: mergedNodes,
        edges: mergedEdges,
        roots: allMatches.nodes.map(n => n.id),
      };

      const formatted = this.formatImpact(symbol, mergedImpact) + allMatches.note;
      return this.textResult(this.truncateOutput(formatted));
    }

    // "*" or specific named project — aggregate across projects
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const sections: string[] = [];
    for (const [label, cg] of projects) {
      const allMatches = this.findAllSymbols(cg, symbol);
      if (allMatches.nodes.length === 0) continue;

      const mergedNodes = new Map<string, Node>();
      const mergedEdges: Edge[] = [];
      const seenEdges = new Set<string>();

      for (const node of allMatches.nodes) {
        const impact = cg.getImpactRadius(node.id, depth);
        for (const [id, n] of impact.nodes) {
          mergedNodes.set(id, n);
        }
        for (const e of impact.edges) {
          const key = `${e.source}->${e.target}:${e.kind}`;
          if (!seenEdges.has(key)) {
            seenEdges.add(key);
            mergedEdges.push(e);
          }
        }
      }

      const mergedImpact = {
        nodes: mergedNodes,
        edges: mergedEdges,
        roots: allMatches.nodes.map(n => n.id),
      };
      const formatted = this.formatImpact(`${symbol} (${label})`, mergedImpact);
      sections.push(`## Project: ${label}\n\n${formatted}`);
    }
    if (sections.length === 0) {
      return this.textResult(`Symbol "${symbol}" not found in any project`);
    }
    return this.textResult(this.truncateOutput(sections.join('\n\n---\n\n')));
  }

  /** Maximum output for explore tool — sized to stay under MCP client token limits (~10k tokens) */
  private static readonly EXPLORE_MAX_OUTPUT = 35000;

  /**
   * Handle codegraph_explore — deep exploration in a single call
   *
   * Strategy: find relevant symbols via graph traversal, group by file,
   * then read contiguous file sections covering all symbols per file.
   * This replaces multiple codegraph_node + Read calls.
   */
  private async handleExplore(args: Record<string, unknown>): Promise<ToolResult> {
    const query = this.validateString(args.query, 'query');
    if (typeof query !== 'string') return query;

    const projectArg = args.project as string | undefined;
    const projectPathArg = args.projectPath as string | undefined;
    const maxFiles = clamp((args.maxFiles as number) || 12, 1, 20);

    // Single project (default behavior)
    if (!projectArg || projectArg === '.') {
      const cg = this.getCodeGraph(projectPathArg);
      const resultMarkdown = await this.runExplore(cg, query, maxFiles);
      return this.textResult(resultMarkdown);
    }

    // "*" or specific named project — explore each
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const sections: string[] = [];
    for (const [label, cg] of projects) {
      const resultMarkdown = await this.runExplore(cg, query, maxFiles, label);
      if (resultMarkdown) {
        sections.push(resultMarkdown);
      }
    }
    if (sections.length === 0) {
      return this.textResult(`No relevant code found for "${query}" in any project`);
    }
    return this.textResult(sections.join('\n\n---\n\n'));
  }

  /**
   * Run the explore logic for a single CodeGraph instance.
   * Returns markdown string. When label is provided, prefixes with project header.
   */
  private async runExplore(cg: CodeGraph, query: string, maxFiles: number, label?: string): Promise<string> {
    const projectRoot = cg.getProjectRoot();

    // Step 1: Find relevant context with generous parameters.
    // Use a large maxNodes budget — explore has its own 35k char output limit
    // that prevents context bloat, so more nodes just means better coverage
    // across entry points (especially for large files like Svelte components).
    const subgraph = await cg.findRelevantContext(query, {
      searchLimit: 8,
      traversalDepth: 3,
      maxNodes: 200,
      minScore: 0.2,
    });

    if (subgraph.nodes.size === 0) {
      return '';
    }

    // Step 2: Group nodes by file, score by relevance
    const fileGroups = new Map<string, { nodes: Node[]; score: number }>();
    const entryNodeIds = new Set(subgraph.roots);

    // Build a set of nodes directly connected to entry points (depth 1)
    const connectedToEntry = new Set<string>();
    for (const edge of subgraph.edges) {
      if (entryNodeIds.has(edge.source)) connectedToEntry.add(edge.target);
      if (entryNodeIds.has(edge.target)) connectedToEntry.add(edge.source);
    }

    for (const node of subgraph.nodes.values()) {
      // Skip import/export nodes — they add noise without information
      if (node.kind === 'import' || node.kind === 'export') continue;

      const group = fileGroups.get(node.filePath) || { nodes: [], score: 0 };
      group.nodes.push(node);
      // Score: entry point nodes worth 10, directly connected worth 3, others worth 1
      if (entryNodeIds.has(node.id)) {
        group.score += 10;
      } else if (connectedToEntry.has(node.id)) {
        group.score += 3;
      } else {
        group.score += 1;
      }
      fileGroups.set(node.filePath, group);
    }

    // Only include files that have entry points or nodes directly connected to entry points
    const relevantFiles = [...fileGroups.entries()].filter(([, group]) => group.score >= 3);

    // Extract query terms for relevance checking
    const queryTerms = query.toLowerCase().split(/\s+/).filter(t => t.length >= 3);

    // Sort files: highest relevance first, deprioritize low-value files
    const sortedFiles = relevantFiles.sort((a, b) => {
      const aPath = a[0].toLowerCase();
      const bPath = b[0].toLowerCase();

      // Check if any node name or file path relates to query terms
      const hasQueryRelevance = (filePath: string, nodes: Node[]) => {
        const fp = filePath.toLowerCase();
        if (queryTerms.some(t => fp.includes(t))) return true;
        return nodes.some(n => queryTerms.some(t => n.name.toLowerCase().includes(t)));
      };

      const aRelevant = hasQueryRelevance(aPath, a[1].nodes);
      const bRelevant = hasQueryRelevance(bPath, b[1].nodes);
      if (aRelevant !== bRelevant) return aRelevant ? -1 : 1;

      // Deprioritize test files, icon files, and i18n files
      const isLowValue = (p: string) =>
        /\/(tests?|__tests?__|spec)\//i.test(p) ||
        /\bicons?\b/i.test(p) ||
        /\bi18n\b/i.test(p);
      const aLow = isLowValue(aPath);
      const bLow = isLowValue(bPath);
      if (aLow !== bLow) return aLow ? 1 : -1;

      if (a[1].score !== b[1].score) return b[1].score - a[1].score;
      return b[1].nodes.length - a[1].nodes.length;
    });

    // Step 3: Build relationship map
    const lines: string[] = [
      `## Exploration: ${query}`,
      '',
      `Found ${subgraph.nodes.size} symbols across ${fileGroups.size} files.`,
      '',
    ];

    // Relationship map — show how symbols connect
    const significantEdges = subgraph.edges.filter(e =>
      e.kind !== 'contains' // skip contains — it's implied by file grouping
    );

    if (significantEdges.length > 0) {
      lines.push('### Relationships');
      lines.push('');

      // Group edges by kind for readability
      const byKind = new Map<string, Array<{ source: string; target: string }>>();
      for (const edge of significantEdges) {
        const sourceNode = subgraph.nodes.get(edge.source);
        const targetNode = subgraph.nodes.get(edge.target);
        if (!sourceNode || !targetNode) continue;

        const group = byKind.get(edge.kind) || [];
        group.push({ source: sourceNode.name, target: targetNode.name });
        byKind.set(edge.kind, group);
      }

      for (const [kind, edges] of byKind) {
        // Show up to 15 relationships per kind
        const shown = edges.slice(0, 15);
        lines.push(`**${kind}:**`);
        for (const e of shown) {
          lines.push(`- ${e.source} → ${e.target}`);
        }
        if (edges.length > 15) {
          lines.push(`- ... and ${edges.length - 15} more`);
        }
        lines.push('');
      }
    }

    // Step 4: Read contiguous file sections
    lines.push('### Source Code');
    lines.push('');

    let totalChars = lines.join('\n').length;
    let filesIncluded = 0;

    for (const [filePath, group] of sortedFiles) {
      if (filesIncluded >= maxFiles) break;
      if (totalChars > ToolHandler.EXPLORE_MAX_OUTPUT * 0.9) break;

      const absPath = validatePathWithinRoot(projectRoot, filePath);
      if (!absPath || !existsSync(absPath)) continue;

      let fileContent: string;
      try {
        fileContent = readFileSync(absPath, 'utf-8');
      } catch {
        continue;
      }

      const fileLines = fileContent.split('\n');
      const lang = group.nodes[0]?.language || '';

      // Cluster nearby symbols to avoid reading huge gaps between distant symbols.
      // Sort by start line, then merge overlapping/adjacent ranges (within 15 lines).
      // Include both node ranges AND edge source locations so template sections
      // with component usages/calls are covered (not just script block symbols).
      const ranges: Array<{ start: number; end: number; name: string; kind: string }> = group.nodes
        .filter(n => n.startLine > 0 && n.endLine > 0)
        // Skip file/component nodes that span the entire file — they'd create one giant cluster
        .filter(n => !(n.kind === 'component' && n.startLine === 1 && n.endLine >= fileLines.length - 1))
        .map(n => ({ start: n.startLine, end: n.endLine, name: n.name, kind: n.kind }));

      // Add edge source locations in this file — captures template references
      // (component usages, event handlers) that aren't nodes themselves.
      // Query edges directly from the DB (not just the subgraph) because BFS
      // traversal may have pruned template reference targets due to node budget.
      const edgeLines = new Set<string>(); // dedup by "line:name"
      for (const node of group.nodes) {
        const outgoing = cg.getOutgoingEdges(node.id);
        for (const edge of outgoing) {
          if (!edge.line || edge.line <= 0 || edge.kind === 'contains') continue;
          const key = `${edge.line}:${edge.target}`;
          if (edgeLines.has(key)) continue;
          edgeLines.add(key);
          // Look up target name from subgraph first, fall back to edge kind
          const targetNode = subgraph.nodes.get(edge.target);
          const targetName = targetNode?.name ?? edge.kind;
          ranges.push({ start: edge.line, end: edge.line, name: targetName, kind: edge.kind });
        }
      }

      ranges.sort((a, b) => a.start - b.start);

      if (ranges.length === 0) continue;

      const GAP_THRESHOLD = 15; // merge sections within 15 lines of each other
      const clusters: Array<{ start: number; end: number; symbols: string[] }> = [];
      let current = { start: ranges[0]!.start, end: ranges[0]!.end, symbols: [`${ranges[0]!.name}(${ranges[0]!.kind})`] };

      for (let i = 1; i < ranges.length; i++) {
        const r = ranges[i]!;
        if (r.start <= current.end + GAP_THRESHOLD) {
          current.end = Math.max(current.end, r.end);
          current.symbols.push(`${r.name}(${r.kind})`);
        } else {
          clusters.push(current);
          current = { start: r.start, end: r.end, symbols: [`${r.name}(${r.kind})`] };
        }
      }
      clusters.push(current);

      // Build file section output from clusters
      const contextPadding = 3;
      let fileSection = '';
      const allSymbols: string[] = [];

      for (const cluster of clusters) {
        const startIdx = Math.max(0, cluster.start - 1 - contextPadding);
        const endIdx = Math.min(fileLines.length, cluster.end + contextPadding);
        const section = fileLines.slice(startIdx, endIdx).join('\n');

        if (fileSection.length > 0) {
          fileSection += '\n\n// ... (gap) ...\n\n';
        }
        fileSection += section;
        allSymbols.push(...cluster.symbols);
      }

      // Skip if this section would blow the output limit
      if (totalChars + fileSection.length + 200 > ToolHandler.EXPLORE_MAX_OUTPUT) {
        const budget = ToolHandler.EXPLORE_MAX_OUTPUT - totalChars - 200;
        if (budget < 500) break;
        const trimmed = fileSection.slice(0, budget) + '\n// ... trimmed ...';

        lines.push(`#### ${filePath} — ${allSymbols.join(', ')}`);
        lines.push('');
        lines.push('```' + lang);
        lines.push(trimmed);
        lines.push('```');
        lines.push('');
        totalChars += trimmed.length + 200;
        filesIncluded++;
        break;
      }

      lines.push(`#### ${filePath} — ${allSymbols.join(', ')}`);
      lines.push('');
      lines.push('```' + lang);
      lines.push(fileSection);
      lines.push('```');
      lines.push('');

      totalChars += fileSection.length + 200;
      filesIncluded++;
    }

    // Add remaining files as references (from both relevant and peripheral files)
    const remainingRelevant = sortedFiles.slice(filesIncluded);
    const peripheralFiles = [...fileGroups.entries()]
      .filter(([, group]) => group.score < 3)
      .sort((a, b) => b[1].score - a[1].score);
    const remainingFiles = [...remainingRelevant, ...peripheralFiles];
    if (remainingFiles.length > 0) {
      lines.push('### Additional relevant files (not shown)');
      lines.push('');
      for (const [filePath, group] of remainingFiles.slice(0, 10)) {
        const symbols = group.nodes.map(n => `${n.name}:${n.startLine}`).join(', ');
        lines.push(`- ${filePath}: ${symbols}`);
      }
      if (remainingFiles.length > 10) {
        lines.push(`- ... and ${remainingFiles.length - 10} more files`);
      }
    }

    // Add completeness signal so agents know they don't need to re-read these files
    lines.push('');
    lines.push('---');
    lines.push(`> **Complete source code is included above for ${filesIncluded} files.** You do NOT need to re-read these files — the relevant sections are already shown in full. Only use Read/Grep for files listed under "Additional relevant files" if you need more detail.`);

    // Add explore budget note based on project size
    try {
      const stats = cg.getStats();
      const budget = getExploreBudget(stats.fileCount);
      lines.push('');
      lines.push(`> **Explore budget: ${budget} calls max for this project (${stats.fileCount.toLocaleString()} files indexed).** Stop exploring and synthesize your answer once you've used ${budget} calls — do NOT make additional explore calls beyond this budget.`);
    } catch {
      // Stats unavailable — skip budget note
    }

    const result = lines.join('\n');
    return label
      ? `## Project: ${label}\n\n${result}`
      : result;
  }

  /**
   * Handle codegraph_node
   */
  private async handleNode(args: Record<string, unknown>): Promise<ToolResult> {
    const symbol = this.validateString(args.symbol, 'symbol');
    if (typeof symbol !== 'string') return symbol;

    const projectArg = args.project as string | undefined;
    const projectPathArg = args.projectPath as string | undefined;
    // Default to false to minimize context usage
    const includeCode = args.includeCode === true;

    // Single project (default behavior)
    if (!projectArg || projectArg === '.') {
      const cg = this.getCodeGraph(projectPathArg);
      const match = this.findSymbol(cg, symbol);
      if (!match) {
        return this.textResult(`Symbol "${symbol}" not found in the codebase`);
      }

      let code: string | null = null;

      if (includeCode) {
        code = await cg.getCode(match.node.id);
      }

      const formatted = this.formatNodeDetails(match.node, code) + match.note;
      return this.textResult(this.truncateOutput(formatted));
    }

    // "*" or specific named project — return array of { project, result }
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const allResults: Array<Record<string, unknown>> = [];
    for (const [label, cg] of projects) {
      const match = this.findSymbol(cg, symbol);
      if (!match) {
        allResults.push({ project: label, found: false });
        continue;
      }
      let code: string | null = null;
      if (includeCode) {
        code = await cg.getCode(match.node.id);
      }
      allResults.push({
        project: label,
        found: true,
        node: match.node as unknown as Record<string, unknown>,
        code,
        note: match.note,
      });
    }
    return this.textResult(this.truncateOutput(JSON.stringify(allResults, null, 2)));
  }

  /**
   * Handle codegraph_status
   */
  private async handleStatus(args: Record<string, unknown>): Promise<ToolResult> {
    const projectArg = args.project as string | undefined;
    const projectPathArg = args.projectPath as string | undefined;

    // Single project (default behavior)
    if (!projectArg || projectArg === '.') {
      const cg = this.getCodeGraph(projectPathArg);
      return this.textResult(this.buildStatusOutput(cg));
    }

    // "*" or specific named project — aggregate across projects
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const sections: string[] = [];
    for (const [label, cg] of projects) {
      sections.push(`## ${label}\n\n${this.buildStatusOutput(cg)}`);
    }
    return this.textResult(sections.join('\n\n---\n\n'));
  }

  /**
   * Build status output string for a single CodeGraph instance
   */
  private buildStatusOutput(cg: CodeGraph): string {
    const stats = cg.getStats();

    const lines: string[] = [
      '## CodeGraph Status',
      '',
      `**Files indexed:** ${stats.fileCount}`,
      `**Total nodes:** ${stats.nodeCount}`,
      `**Total edges:** ${stats.edgeCount}`,
      `**Database size:** ${(stats.dbSizeBytes / 1024 / 1024).toFixed(2)} MB`,
    ];

    // Surface the active SQLite backend. Without this, users on the
    // silent WASM fallback (better-sqlite3 install failed) see "slow"
    // indexing and DB-lock errors with no signal of why.
    const backend = cg.getBackend();
    if (backend === 'native') {
      lines.push(`**Backend:** native (better-sqlite3)`);
    } else {
      lines.push(
        `**Backend:** ⚠ wasm (better-sqlite3 unavailable) — ` +
        `5-10x slower than native. Fix: ${WASM_FALLBACK_FIX_RECIPE}`
      );
    }

    lines.push('', '### Nodes by Kind:');

    for (const [kind, count] of Object.entries(stats.nodesByKind)) {
      if ((count as number) > 0) {
        lines.push(`- ${kind}: ${count}`);
      }
    }

    lines.push('', '### Languages:');
    for (const [lang, count] of Object.entries(stats.filesByLanguage)) {
      if ((count as number) > 0) {
        lines.push(`- ${lang}: ${count}`);
      }
    }

    return lines.join('\n');
  }

  /**
   * Handle codegraph_files - get project file structure from the index
   */
  private async handleFiles(args: Record<string, unknown>): Promise<ToolResult> {
    const projectArg = args.project as string | undefined;
    const projectPathArg = args.projectPath as string | undefined;
    const pathFilter = args.path as string | undefined;
    const pattern = args.pattern as string | undefined;
    const format = (args.format as 'tree' | 'flat' | 'grouped') || 'tree';
    const includeMetadata = args.includeMetadata !== false;
    const maxDepth = args.maxDepth != null ? clamp(args.maxDepth as number, 1, 20) : undefined;

    // Single project (default behavior)
    if (!projectArg || projectArg === '.') {
      const cg = this.getCodeGraph(projectPathArg);
      const output = this.buildFilesOutput(cg, pathFilter, pattern, format, includeMetadata, maxDepth);
      return this.textResult(this.truncateOutput(output));
    }

    // "*" or specific named project — aggregate across projects
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const sections: string[] = [];
    for (const [label, cg] of projects) {
      const output = this.buildFilesOutput(cg, pathFilter, pattern, format, includeMetadata, maxDepth);
      sections.push(`## ${label}\n\n${output}`);
    }
    return this.textResult(this.truncateOutput(sections.join('\n\n---\n\n')));
  }

  /**
   * Build files output for a single CodeGraph instance
   */
  private buildFilesOutput(
    cg: CodeGraph,
    pathFilter?: string,
    pattern?: string,
    format?: string,
    includeMetadata?: boolean,
    maxDepth?: number
  ): string {
    const fmt = (format as 'tree' | 'flat' | 'grouped') || 'tree';
    const meta = includeMetadata !== false;

    // Get all files from the index
    const allFiles = cg.getFiles();

    if (allFiles.length === 0) {
      return 'No files indexed. Run `codegraph index` first.';
    }

    // Filter by path prefix
    let files = pathFilter
      ? allFiles.filter(f => f.path.startsWith(pathFilter) || f.path.startsWith('./' + pathFilter))
      : allFiles;

    // Filter by glob pattern
    if (pattern) {
      const regex = this.globToRegex(pattern);
      files = files.filter(f => regex.test(f.path));
    }

    if (files.length === 0) {
      return 'No files found matching the criteria.';
    }

    // Format output
    let output: string;
    switch (fmt) {
      case 'flat':
        output = this.formatFilesFlat(files, meta);
        break;
      case 'grouped':
        output = this.formatFilesGrouped(files, meta);
        break;
      case 'tree':
      default:
        output = this.formatFilesTree(files, meta, maxDepth);
        break;
    }

    return output;
  }

  /**
   * Convert glob pattern to regex
   */
  private globToRegex(pattern: string): RegExp {
    const escaped = pattern
      .replace(/[.+^${}()|[\]\\]/g, '\\$&')  // Escape special regex chars except * and ?
      .replace(/\*\*/g, '{{GLOBSTAR}}')       // Temp placeholder for **
      .replace(/\*/g, '[^/]*')                // * matches anything except /
      .replace(/\?/g, '[^/]')                 // ? matches single char except /
      .replace(/\{\{GLOBSTAR\}\}/g, '.*');    // ** matches anything including /
    return new RegExp(escaped);
  }

  /**
   * Format files as a flat list
   */
  private formatFilesFlat(files: { path: string; language: string; nodeCount: number }[], includeMetadata: boolean): string {
    const lines: string[] = [`## Files (${files.length})`, ''];

    for (const file of files.sort((a, b) => a.path.localeCompare(b.path))) {
      if (includeMetadata) {
        lines.push(`- ${file.path} (${file.language}, ${file.nodeCount} symbols)`);
      } else {
        lines.push(`- ${file.path}`);
      }
    }

    return lines.join('\n');
  }

  /**
   * Format files grouped by language
   */
  private formatFilesGrouped(files: { path: string; language: string; nodeCount: number }[], includeMetadata: boolean): string {
    const byLang = new Map<string, typeof files>();

    for (const file of files) {
      const existing = byLang.get(file.language) || [];
      existing.push(file);
      byLang.set(file.language, existing);
    }

    const lines: string[] = [`## Files by Language (${files.length} total)`, ''];

    // Sort languages by file count (descending)
    const sortedLangs = [...byLang.entries()].sort((a, b) => b[1].length - a[1].length);

    for (const [lang, langFiles] of sortedLangs) {
      lines.push(`### ${lang} (${langFiles.length})`);
      for (const file of langFiles.sort((a, b) => a.path.localeCompare(b.path))) {
        if (includeMetadata) {
          lines.push(`- ${file.path} (${file.nodeCount} symbols)`);
        } else {
          lines.push(`- ${file.path}`);
        }
      }
      lines.push('');
    }

    return lines.join('\n');
  }

  /**
   * Format files as a tree structure
   */
  private formatFilesTree(
    files: { path: string; language: string; nodeCount: number }[],
    includeMetadata: boolean,
    maxDepth?: number
  ): string {
    // Build tree structure
    interface TreeNode {
      name: string;
      children: Map<string, TreeNode>;
      file?: { language: string; nodeCount: number };
    }

    const root: TreeNode = { name: '', children: new Map() };

    for (const file of files) {
      const parts = file.path.split('/');
      let current = root;

      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (!part) continue;

        if (!current.children.has(part)) {
          current.children.set(part, { name: part, children: new Map() });
        }
        current = current.children.get(part)!;

        // If this is the last part, it's a file
        if (i === parts.length - 1) {
          current.file = { language: file.language, nodeCount: file.nodeCount };
        }
      }
    }

    // Render tree
    const lines: string[] = [`## Project Structure (${files.length} files)`, ''];

    const renderNode = (node: TreeNode, prefix: string, isLast: boolean, depth: number): void => {
      if (maxDepth !== undefined && depth > maxDepth) return;

      const connector = isLast ? '└── ' : '├── ';
      const childPrefix = isLast ? '    ' : '│   ';

      if (node.name) {
        let line = prefix + connector + node.name;
        if (node.file && includeMetadata) {
          line += ` (${node.file.language}, ${node.file.nodeCount} symbols)`;
        }
        lines.push(line);
      }

      const children = [...node.children.values()];
      // Sort: directories first, then files, both alphabetically
      children.sort((a, b) => {
        const aIsDir = a.children.size > 0 && !a.file;
        const bIsDir = b.children.size > 0 && !b.file;
        if (aIsDir !== bIsDir) return aIsDir ? -1 : 1;
        return a.name.localeCompare(b.name);
      });

      for (let i = 0; i < children.length; i++) {
        const child = children[i]!;
        const nextPrefix = node.name ? prefix + childPrefix : prefix;
        renderNode(child, nextPrefix, i === children.length - 1, depth + 1);
      }
    };

    renderNode(root, '', true, 0);

    return lines.join('\n');
  }

  /**
   * Handle codegraph_projects — list registered sub-projects
   */
  private async handleProjects(args: Record<string, unknown>): Promise<ToolResult> {
    if (!this.projectRoot) {
      return this.textResult(JSON.stringify({ rootProject: null, projects: [] }, null, 2));
    }

    const checkStatus = args.status !== false;
    const entries = loadProjectEntries(this.projectRoot);

    const projectEntries: Array<Record<string, unknown>> = [];
    for (const entry of entries) {
      const absPath = resolvePath(this.projectRoot, entry.path);
      const result: Record<string, unknown> = {
        name: entry.name,
        path: entry.path,
        initialized: isInitialized(absPath),
      };
      if (checkStatus && result.initialized) {
        try {
          const subCg = CodeGraph.openSync(absPath);
          const stats = subCg.getStats();
          result.symbolCount = stats.nodeCount;
          result.fileCount = stats.fileCount;
          subCg.close();
        } catch { /* skip stats on error */ }
      }
      projectEntries.push(result);
    }

    return this.textResult(JSON.stringify({ rootProject: this.projectRoot, projects: projectEntries }, null, 2));
  }

  // =========================================================================
  // Symbol resolution helpers
  // =========================================================================

  /**
   * Find a symbol by name, handling disambiguation when multiple matches exist.
   * Returns the best match and a note about alternatives if any.
   */
  /**
   * Check if a node matches a symbol query, supporting both simple names and
   * qualified "Parent.child" notation (e.g., "Session.request" matches a method
   * named "request" inside a class named "Session").
   */
  private matchesSymbol(node: Node, symbol: string): boolean {
    // Simple name match
    if (node.name === symbol) return true;
    // File basename match (e.g., "product-card" matches "product-card.liquid")
    if (node.kind === 'file' && node.name.replace(/\.[^.]+$/, '') === symbol) return true;

    // Qualified name match: "Parent.child" → look for "::Parent::child" in qualified_name
    if (symbol.includes('.')) {
      const parts = symbol.split('.');
      const qualifiedSuffix = parts.join('::');
      if (node.qualifiedName.includes(qualifiedSuffix)) return true;
    }

    return false;
  }

  private findSymbol(cg: CodeGraph, symbol: string): { node: Node; note: string } | null {
    // Use higher limit for qualified lookups (e.g., "Session.request") since the
    // target may rank lower in FTS when there are many partial matches
    const limit = symbol.includes('.') ? 50 : 10;
    const results = cg.searchNodes(symbol, { limit });

    if (results.length === 0 || !results[0]) {
      return null;
    }

    const exactMatches = results.filter(r => this.matchesSymbol(r.node, symbol));

    if (exactMatches.length === 1) {
      return { node: exactMatches[0]!.node, note: '' };
    }

    if (exactMatches.length > 1) {
      // Multiple exact matches - pick first, note the others
      const picked = exactMatches[0]!.node;
      const others = exactMatches.slice(1).map(r =>
        `${r.node.name} (${r.node.kind}) at ${r.node.filePath}:${r.node.startLine}`
      );
      const note = `\n\n> **Note:** ${exactMatches.length} symbols named "${symbol}". Showing results for \`${picked.filePath}:${picked.startLine}\`. Others: ${others.join(', ')}`;
      return { node: picked, note };
    }

    // No exact match, use best fuzzy match
    return { node: results[0]!.node, note: '' };
  }

  /**
   * Find ALL symbols matching a name. Used by callers/callees/impact to aggregate
   * results across all matching symbols (e.g., multiple classes with an `execute` method).
   */
  private findAllSymbols(cg: CodeGraph, symbol: string): { nodes: Node[]; note: string } {
    const results = cg.searchNodes(symbol, { limit: 50 });

    if (results.length === 0) {
      return { nodes: [], note: '' };
    }

    const exactMatches = results.filter(r => this.matchesSymbol(r.node, symbol));

    if (exactMatches.length <= 1) {
      const node = exactMatches[0]?.node ?? results[0]!.node;
      return { nodes: [node], note: '' };
    }

    const locations = exactMatches.map(r =>
      `${r.node.kind} at ${r.node.filePath}:${r.node.startLine}`
    );
    const note = `\n\n> **Note:** Aggregated results across ${exactMatches.length} symbols named "${symbol}": ${locations.join(', ')}`;
    return { nodes: exactMatches.map(r => r.node), note };
  }

  /**
   * Truncate output if it exceeds the maximum length
   */
  private truncateOutput(text: string): string {
    if (text.length <= MAX_OUTPUT_LENGTH) return text;
    const truncated = text.slice(0, MAX_OUTPUT_LENGTH);
    const lastNewline = truncated.lastIndexOf('\n');
    const cutPoint = lastNewline > MAX_OUTPUT_LENGTH * 0.8 ? lastNewline : MAX_OUTPUT_LENGTH;
    return truncated.slice(0, cutPoint) + '\n\n... (output truncated)';
  }

  // =========================================================================
  // Formatting helpers (compact by default to reduce context usage)
  // =========================================================================

  private formatSearchResults(results: SearchResult[]): string {
    const lines: string[] = [`## Search Results (${results.length} found)`, ''];

    for (const result of results) {
      const { node } = result;
      const location = node.startLine ? `:${node.startLine}` : '';
      // Compact format: one line per result with key info
      lines.push(`### ${node.name} (${node.kind})`);
      lines.push(`${node.filePath}${location}`);
      if (node.signature) lines.push(`\`${node.signature}\``);
      lines.push('');
    }

    return lines.join('\n');
  }

  private formatNodeList(nodes: Node[], title: string): string {
    const lines: string[] = [`## ${title} (${nodes.length} found)`, ''];

    for (const node of nodes) {
      const location = node.startLine ? `:${node.startLine}` : '';
      // Compact: just name, kind, location
      lines.push(`- ${node.name} (${node.kind}) - ${node.filePath}${location}`);
    }

    return lines.join('\n');
  }

  private formatImpact(symbol: string, impact: Subgraph): string {
    const nodeCount = impact.nodes.size;

    // Compact format: just list affected symbols grouped by file
    const lines: string[] = [
      `## Impact: "${symbol}" affects ${nodeCount} symbols`,
      '',
    ];

    // Group by file
    const byFile = new Map<string, Node[]>();
    for (const node of impact.nodes.values()) {
      const existing = byFile.get(node.filePath) || [];
      existing.push(node);
      byFile.set(node.filePath, existing);
    }

    for (const [file, nodes] of byFile) {
      lines.push(`**${file}:**`);
      // Compact: inline list
      const nodeList = nodes.map(n => `${n.name}:${n.startLine}`).join(', ');
      lines.push(nodeList);
      lines.push('');
    }

    return lines.join('\n');
  }

  private formatNodeDetails(node: Node, code: string | null): string {
    const location = node.startLine ? `:${node.startLine}` : '';
    const lines: string[] = [
      `## ${node.name} (${node.kind})`,
      '',
      `**Location:** ${node.filePath}${location}`,
    ];

    if (node.signature) {
      lines.push(`**Signature:** \`${node.signature}\``);
    }

    // Only include docstring if it's short and useful
    if (node.docstring && node.docstring.length < 200) {
      lines.push('', node.docstring);
    }

    if (code) {
      lines.push('', '```' + node.language, code, '```');
    }

    return lines.join('\n');
  }

  private formatTaskContext(context: TaskContext): string {
    return context.summary || 'No context found';
  }

  private textResult(text: string): ToolResult {
    return {
      content: [{ type: 'text', text }],
    };
  }

  private errorResult(message: string): ToolResult {
    return {
      content: [{ type: 'text', text: `Error: ${message}` }],
      isError: true,
    };
  }
}
