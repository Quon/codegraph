# Monorepo Native Support Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) for syntax tracking.

**Goal:** Allow MCP server to discover, open, watch, and query multiple independently-initialized CodeGraph sub-projects in a monorepo.

**Architecture:** A new `src/projects.ts` module manages a `.codegraph/projects.json` registry file. A new `codegraph project` CLI sub-command group lets users add/remove/list/scan sub-projects. The MCP ToolHandler opens sub-projects on startup (≤20) or lazily, starts a per-project FileWatcher, and routes queries via a new `project` parameter that supports single-project or `"*"` (aggregate-all) queries.

**Tech Stack:** TypeScript, commander (CLI), vitest (tests), JSON file for registry, existing FileWatcher from `src/sync/watcher.ts`

---

## File Structure

### Created
| File | Purpose |
|------|---------|
| `src/projects.ts` | Projects registry module: load/save/add/remove/scan/sync |
| `__tests__/projects.test.ts` | Unit tests for projects.ts |

### Modified
| File | Change |
|------|--------|
| `src/index.ts` | Export `src/projects.ts` functions |
| `src/bin/codegraph.ts` | Add `codegraph project` sub-commands (add/remove/list/scan) |
| `src/mcp/tools.ts` | Add `codegraph_projects` tool, `project` parameter on all tools, `resolveProjects()` method, per-project watcher tracking |
| `src/mcp/index.ts` | Load projects.json at startup, open sub-projects, pass to ToolHandler |

### Unchanged
| File | Reason |
|------|--------|
| `src/sync/watcher.ts` | FileWatcher already accepts projectRoot + config — no changes needed |
| `src/directory.ts` | `isInitialized`, `CODEGRAPH_DIR` already exist and are reused |
| `src/config.ts` | Config loading/storing unchanged; projects.json is separate |

---

### Task 1: Projects Registry Module (`src/projects.ts`)

**Files:**
- Create: `src/projects.ts`
- Test: `__tests__/projects.test.ts`

- [ ] **Step 1: Write the failing test for load/save/add/remove**

```typescript
// __tests__/projects.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import {
  PROJECTS_FILENAME,
  getProjectsPath,
  loadProjects,
  saveProjects,
  addProject,
  removeProject,
  scanForProjects,
  syncProjects,
} from '../src/projects';

function createTempDir(): string {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'monorepo-test-'));
}

function cleanupTempDir(dir: string): void {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function createProject(root: string, sub: string): void {
  const dir = path.join(root, sub);
  fs.mkdirSync(dir, { recursive: true });
  // Create a minimal .codegraph/codegraph.db to satisfy isInitialized()
  const cgDir = path.join(dir, '.codegraph');
  fs.mkdirSync(cgDir, { recursive: true });
  fs.writeFileSync(path.join(cgDir, 'codegraph.db'), '', 'utf-8');
}

describe('Projects Registry', () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = createTempDir();
  });

  afterEach(() => {
    cleanupTempDir(tempDir);
  });

  describe('loadProjects', () => {
    it('should return empty array when projects.json does not exist', () => {
      const result = loadProjects(tempDir);
      expect(result).toEqual([]);
    });

    it('should return empty array when projects.json has invalid JSON', () => {
      const cgDir = path.join(tempDir, '.codegraph');
      fs.mkdirSync(cgDir, { recursive: true });
      fs.writeFileSync(path.join(cgDir, PROJECTS_FILENAME), 'not json', 'utf-8');
      const result = loadProjects(tempDir);
      expect(result).toEqual([]);
    });

    it('should load projects from projects.json', () => {
      const cgDir = path.join(tempDir, '.codegraph');
      fs.mkdirSync(cgDir, { recursive: true });
      fs.writeFileSync(
        path.join(cgDir, PROJECTS_FILENAME),
        JSON.stringify(['packages/foo', 'packages/bar']),
        'utf-8'
      );
      const result = loadProjects(tempDir);
      expect(result).toEqual(['packages/foo', 'packages/bar']);
    });
  });

  describe('saveProjects', () => {
    it('should save projects to projects.json', () => {
      saveProjects(tempDir, ['packages/foo', 'packages/bar']);
      const cgDir = path.join(tempDir, '.codegraph');
      const content = fs.readFileSync(path.join(cgDir, PROJECTS_FILENAME), 'utf-8');
      expect(JSON.parse(content)).toEqual(['packages/foo', 'packages/bar']);
    });

    it('should write atomically (temp file + rename)', () => {
      saveProjects(tempDir, ['packages/foo']);
      const cgDir = path.join(tempDir, '.codegraph');
      // No .tmp file should remain after write
      const files = fs.readdirSync(cgDir);
      expect(files.filter(f => f.endsWith('.tmp'))).toEqual([]);
    });
  });

  describe('addProject', () => {
    it('should add a project to the registry', () => {
      const result = addProject(tempDir, 'packages/foo');
      expect(result).toEqual(['packages/foo']);
      // Verify persisted
      expect(loadProjects(tempDir)).toEqual(['packages/foo']);
    });

    it('should deduplicate when adding existing project', () => {
      addProject(tempDir, 'packages/foo');
      const result = addProject(tempDir, 'packages/foo');
      expect(result).toEqual(['packages/foo']);
    });

    it('should append to existing projects', () => {
      addProject(tempDir, 'packages/foo');
      const result = addProject(tempDir, 'packages/bar');
      expect(result).toEqual(['packages/foo', 'packages/bar']);
    });
  });

  describe('removeProject', () => {
    it('should remove a project from the registry', () => {
      addProject(tempDir, 'packages/foo');
      addProject(tempDir, 'packages/bar');
      const result = removeProject(tempDir, 'packages/foo');
      expect(result).toEqual(['packages/bar']);
    });

    it('should do nothing when removing non-existent project', () => {
      addProject(tempDir, 'packages/foo');
      const result = removeProject(tempDir, 'packages/nonexistent');
      expect(result).toEqual(['packages/foo']);
    });
  });

  describe('scanForProjects', () => {
    it('should discover initialized sub-projects', () => {
      createProject(tempDir, 'packages/foo');
      createProject(tempDir, 'packages/bar');
      const result = scanForProjects(tempDir);
      expect(result.sort()).toEqual(['packages/bar', 'packages/foo']);
    });

    it('should respect maxDepth', () => {
      createProject(tempDir, 'packages/foo');
      createProject(tempDir, 'packages/group/deep');
      const result = scanForProjects(tempDir, 1);
      expect(result).toEqual(['packages/foo']);
    });

    it('should skip .codegraph/, .git/, node_modules/', () => {
      createProject(tempDir, '.codegraph'); // <-- inside root .codegraph
      createProject(tempDir, 'node_modules/pkg');
      createProject(tempDir, '.git/hooks');
      createProject(tempDir, 'packages/real');
      const result = scanForProjects(tempDir);
      expect(result).toEqual(['packages/real']);
    });

    it('should return empty array when no sub-projects exist', () => {
      const result = scanForProjects(tempDir);
      expect(result).toEqual([]);
    });
  });

  describe('syncProjects', () => {
    it('should merge discovered projects with existing registry', () => {
      // Pre-register a project that scan will not find
      addProject(tempDir, 'legacy/manual');
      // Create discoverable projects
      createProject(tempDir, 'packages/foo');
      const result = syncProjects(tempDir);
      expect(result).toContain('legacy/manual');
      expect(result).toContain('packages/foo');
    });
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run __tests__/projects.test.ts`
Expected: FAIL with "Cannot find module '../src/projects'" (module doesn't exist yet)

- [ ] **Step 3: Write the minimal implementation in `src/projects.ts`**

```typescript
/**
 * Projects Registry
 *
 * Manages the `.codegraph/projects.json` file that tracks registered
 * sub-projects in a monorepo. Each sub-project has its own `.codegraph/`
 * directory initialized independently. The registry stores relative paths
 * from the monorepo root.
 */
import * as fs from 'fs';
import * as path from 'path';
import { isInitialized, CODEGRAPH_DIR } from './directory';

/** Filename for the projects registry */
export const PROJECTS_FILENAME = 'projects.json';

/**
 * Get the full path to the projects.json file
 */
export function getProjectsPath(projectRoot: string): string {
  return path.join(projectRoot, CODEGRAPH_DIR, PROJECTS_FILENAME);
}

/**
 * Load the projects registry.
 * Returns an empty array if the file doesn't exist or is malformed.
 * Malformed JSON is logged to stderr for diagnostics.
 */
export function loadProjects(projectRoot: string): string[] {
  const filePath = getProjectsPath(projectRoot);
  try {
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(content);
    if (!Array.isArray(parsed)) return [];
    // Filter to strings only
    return parsed.filter((p): p is string => typeof p === 'string');
  } catch (err) {
    process.stderr.write(
      `[CodeGraph] Failed to load projects.json: ${err instanceof Error ? err.message : String(err)}\n`
    );
    return [];
  }
}

/**
 * Save the projects registry atomically (temp file + rename)
 */
export function saveProjects(projectRoot: string, projects: string[]): void {
  const filePath = getProjectsPath(projectRoot);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  // Deduplicate and sort
  const unique = [...new Set(projects)].sort();
  const content = JSON.stringify(unique, null, 2);
  const tmpPath = filePath + '.tmp';
  fs.writeFileSync(tmpPath, content, 'utf-8');
  fs.renameSync(tmpPath, filePath);
}

/**
 * Add a project path to the registry (deduplicated).
 * Returns the updated project list.
 */
export function addProject(projectRoot: string, projectPath: string): string[] {
  const projects = loadProjects(projectRoot);
  if (!projects.includes(projectPath)) {
    projects.push(projectPath);
  }
  saveProjects(projectRoot, projects);
  return projects;
}

/**
 * Remove a project path from the registry.
 * Returns the updated project list.
 */
export function removeProject(projectRoot: string, projectPath: string): string[] {
  const projects = loadProjects(projectRoot).filter((p) => p !== projectPath);
  saveProjects(projectRoot, projects);
  return projects;
}

/**
 * Directories to skip during auto-discovery scan
 */
const SCAN_SKIP_DIRS = new Set([
  '.codegraph',
  '.git',
  'node_modules',
]);

/**
 * Scan sub-directories for initialized CodeGraph projects.
 *
 * Performs a BFS walk up to `maxDepth` levels, checking each directory
 * with `isInitialized()`. Returns relative paths sorted alphabetically.
 *
 * @param root - The monorepo root to scan from
 * @param maxDepth - Maximum directory nesting (default: 3; root=0, packages/=1, packages/foo/=2)
 */
export function scanForProjects(root: string, maxDepth: number = 3): string[] {
  const results: string[] = [];

  // BFS: queue of [dirPath, depth]
  const queue: Array<[string, number]> = [[root, 0]];

  while (queue.length > 0) {
    const [currentDir, depth] = queue.shift()!;

    // Check this directory first
    if (depth > 0 && isInitialized(currentDir)) {
      const relative = path.relative(root, currentDir).replace(/\\/g, '/');
      results.push(relative);
    }

    // Stop walking deeper if at maxDepth
    if (depth >= maxDepth) continue;

    // Enqueue sub-directories
    try {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory() && !SCAN_SKIP_DIRS.has(entry.name)) {
          queue.push([path.join(currentDir, entry.name), depth + 1]);
        }
      }
    } catch {
      // Permission error or deleted directory — skip silently
    }
  }

  return [...new Set(results)].sort();
}

/**
 * Sync the registry with auto-discovery.
 * Merges scan results with existing entries (keeps manually added projects).
 * Returns the merged and saved project list.
 */
export function syncProjects(root: string): string[] {
  const existing = loadProjects(root);
  const discovered = scanForProjects(root);
  const merged = [...new Set([...existing, ...discovered])].sort();
  saveProjects(root, merged);
  return merged;
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run __tests__/projects.test.ts`
Expected: ALL PASS

- [ ] **Step 5: Commit**

```bash
git add src/projects.ts __tests__/projects.test.ts
git commit -m "feat(monorepo): add projects registry module

Co-Authored-By: Claude Sonnet 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: Export from `src/index.ts`

**Files:**
- Modify: `src/index.ts` (add export line)

- [ ] **Step 1: Add export in src/index.ts**

Find the export block around line 57-62 and add the new module:

```typescript
export {
  getCodeGraphDir,
  isInitialized,
  findNearestCodeGraphRoot,
  CODEGRAPH_DIR,
} from './directory';
```

Insert after line 62:

```typescript
export {
  PROJECTS_FILENAME,
  getProjectsPath,
  loadProjects,
  saveProjects,
  addProject,
  removeProject,
  scanForProjects,
  syncProjects,
} from './projects';
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 3: Commit**

```bash
git add src/index.ts
git commit -m "feat(monorepo): export projects registry from public API

Co-Authored-By: Claude Sonnet 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: CLI `codegraph project` sub-commands

**Files:**
- Modify: `src/bin/codegraph.ts`

- [ ] **Step 1: Add imports at top of file**

Add to the existing imports around line 24:

```typescript
import { getCodeGraphDir, isInitialized } from '../directory';
import {
  loadProjects,
  addProject,
  removeProject,
  syncProjects,
  scanForProjects,
} from '../projects';
```

- [ ] **Step 2: Add the project sub-command group before `program.parse()`**

Find `program.parse()` and insert this before any existing commands (e.g., before the `install` command):

```typescript
// =============================================================================
// Project Management Commands
// =============================================================================

const projectCmd = program.command('project').description('Manage registered sub-projects');

projectCmd
  .command('list')
  .description('List registered sub-projects with initialization status')
  .action(async () => {
    const projectRoot = resolveProjectPath(process.cwd());
    if (!isInitialized(projectRoot)) {
      error('CodeGraph not initialized in this project. Run \'codegraph init\' first.');
      process.exit(1);
    }

    const projects = loadProjects(projectRoot);

    console.log(chalk.bold(`\nRegistered projects (root: ${projectRoot}):\n`));

    if (projects.length === 0) {
      console.log('  (none)');
      console.log('');
      return;
    }

    let available = 0;
    for (const relPath of projects) {
      const absPath = path.resolve(projectRoot, relPath);
      if (isInitialized(absPath)) {
        available++;
        // Get basic stats from the sub-project
        try {
          const { default: CodeGraph } = await loadCodeGraph();
          const subCg = CodeGraph.openSync(absPath);
          const stats = subCg.getStats();
          subCg.close();
          console.log(`  ${relPath.padEnd(30)} ${chalk.green('✓')}  (${formatNumber(stats.nodeCount)} symbols, ${formatNumber(stats.fileCount)} files)`);
        } catch {
          console.log(`  ${relPath.padEnd(30)} ${chalk.green('✓')}  (unable to read stats)`);
        }
      } else {
        console.log(`  ${relPath.padEnd(30)} ${chalk.red('✗')}  (not initialized)`);
      }
    }

    console.log(`\n  ${available} of ${projects.length} projects available\n`);
  });

projectCmd
  .command('add <path>')
  .description('Register a sub-project path (relative to project root)')
  .action((pathArg: string) => {
    const projectRoot = resolveProjectPath(process.cwd());
    addProject(projectRoot, pathArg);
    success(`Registered project: ${pathArg}`);
  });

projectCmd
  .command('remove <path>')
  .description('Unregister a sub-project')
  .action((pathArg: string) => {
    const projectRoot = resolveProjectPath(process.cwd());
    removeProject(projectRoot, pathArg);
    success(`Removed project: ${pathArg}`);
  });

projectCmd
  .command('scan')
  .description('Auto-discover initialized sub-projects and merge into registry')
  .option('-d, --depth <number>', 'Maximum directory depth to scan', '3')
  .action(async (options: { depth?: string }) => {
    const depth = parseInt(options.depth || '3', 10);
    const projectRoot = resolveProjectPath(process.cwd());

    info(`Scanning for initialized projects (max depth: ${depth})...`);
    const merged = syncProjects(projectRoot);

    if (merged.length === 0) {
      console.log('  No initialized sub-projects found.');
    } else {
      for (const p of merged) {
        const absPath = path.resolve(projectRoot, p);
        const status = isInitialized(absPath)
          ? chalk.green('✓')
          : chalk.yellow('(registered but not initialized)');
        console.log(`  ${p.padEnd(35)} ${status}`);
      }
    }
  });

- [ ] **Step 2: Build and verify no errors**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/bin/codegraph.ts
git commit -m "feat(monorepo): add codegraph project CLI commands

Co-Authored-By: Claude Sonnet 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: MCP ToolHandler — `resolveProjects()` and Watcher Tracking

**Files:**
- Modify: `src/mcp/tools.ts`

- [ ] **Step 1: Add imports for the new module**

At the top of `src/mcp/tools.ts`, add the import alongside the existing ones:

```typescript
import CodeGraph, { findNearestCodeGraphRoot, loadProjects } from '../index';
import { FileWatcher } from '../sync';
```

- [ ] **Step 2: Add `project` property schema**

After `projectPathProperty` (around line 83), add:

```typescript
/**
 * Common project parameter for registered sub-projects.
 * Overrides projectPath when both are provided.
 */
const projectProperty: PropertySchema = {
  type: 'string',
  description: 'Registered sub-project name (e.g. "packages/foo") or "*" for all projects. Uses root project if omitted.',
};
```

- [ ] **Step 3: Update all tool definitions to include the `project` property**

For each tool in the `tools` array, add `project: projectProperty` to the `properties` object. Example for `codegraph_search`:

```typescript
{
  name: 'codegraph_search',
  description: 'Quick symbol search by name. Returns locations only (no code). Use codegraph_context instead for comprehensive task context.',
  inputSchema: {
    type: 'object',
    properties: {
      query: { ... },
      kind: { ... },
      limit: { ... },
      projectPath: projectPathProperty,
      project: projectProperty,  // NEW
    },
    required: ['query'],
  },
},
```

Repeat for all 9 tools: `codegraph_search`, `codegraph_context`, `codegraph_callers`, `codegraph_callees`, `codegraph_impact`, `codegraph_node`, `codegraph_explore`, `codegraph_status`, `codegraph_files`.

- [ ] **Step 4: Add `codegraph_projects` tool definition to the `tools` array**

Add to the end of the `tools` array, before the closing `];`:

```typescript
{
  name: 'codegraph_projects',
  description: 'List registered sub-projects with initialization status.',
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
```

- [ ] **Step 5: Add per-project watcher tracking and `resolveProjects()` to ToolHandler**

In the `ToolHandler` class, add the watcher map field next to `projectCache`:

```typescript
export class ToolHandler {
  private projectCache: Map<string, CodeGraph> = new Map();
  private projectRoot: string | null = null;            // NEW: root project path
  private watchers: Map<string, FileWatcher> = new Map(); // NEW: per-project watchers
  private stashProjectWatchers: Array<{ path: string; cg: CodeGraph; name: string }> = []; // NEW: lazy load queue

  constructor(private cg: CodeGraph | null) {}
```

Add a setter for projectRoot:

```typescript
  /**
   * Set the root project path (for loading the projects registry)
   */
  setProjectRoot(root: string): void {
    this.projectRoot = root;
  }
```

Add the `resolveProjects()` method:

```typescript
  /**
   * Resolve a project identifier to one or more CodeGraph instances.
   *
   * @param project - Optional project name/relative path, "*" for all, or "." for root
   * @param projectPath - Optional absolute path (existing behavior, ignored if project is set)
   * @returns Map of project label → CodeGraph instance
   */
  private resolveProjects(project?: string, projectPath?: string): Map<string, CodeGraph> {
    // If project is explicitly ".", use root project
    if (project === '.') {
      if (!this.cg) throw new Error('CodeGraph not initialized for this project.');
      return new Map([['.', this.cg]]);
    }

    // If project is a named sub-project or "*", load from registry
    if (project !== undefined || projectPath === undefined) {
      // No project specified and we have a projectPath → fall through to existing logic
      if (project === undefined && projectPath !== undefined) {
        // Fall through below
      } else if (project === undefined) {
        // Neither project nor projectPath → default root
        if (!this.cg) throw new Error('CodeGraph not initialized for this project.');
        return new Map([['.', this.cg]]);
      }
    }

    // If projectPath provided and project not provided → existing behavior
    if (project === undefined && projectPath !== undefined) {
      const cg = this.getCodeGraph(projectPath);
      return new Map([[projectPath, cg]]);
    }

    // project is defined here — resolve from registry
    if (!this.projectRoot) throw new Error('No project root configured. Cannot resolve sub-projects.');

    const projects = loadProjects(this.projectRoot);

    if (project === '*') {
      // Open all registered projects
      const map = new Map<string, CodeGraph>();
      map.set('.', this.cg!); // Root project always first

      for (const name of projects) {
        const absPath = path.resolve(this.projectRoot, name);
        const cached = this.projectCache.get(absPath);
        if (cached) {
          map.set(name, cached);
          continue;
        }
        try {
          const cg = CodeGraph.openSync(absPath);
          this.projectCache.set(absPath, cg);
          this.startProjectWatcher(name, absPath, cg);
          map.set(name, cg);
        } catch (err) {
          process.stderr.write(`[CodeGraph MCP] Failed to open sub-project "${name}": ${err}\n`);
        }
      }
      return map;
    }

    // Single named project
    const absPath = path.resolve(this.projectRoot, project);
    const cached = this.projectCache.get(absPath);
    if (cached) return new Map([[project, cached]]);

    const cg = CodeGraph.openSync(absPath);
    this.projectCache.set(absPath, cg);
    this.startProjectWatcher(project, absPath, cg);
    return new Map([[project, cg]]);
  }

  /**
   * Start a FileWatcher for a sub-project
   */
  private startProjectWatcher(name: string, absPath: string, cg: CodeGraph): void {
    if (this.watchers.has(absPath)) return;
    const watcher = new FileWatcher(
      absPath,
      cg.getConfig(),
      async () => {
        const result = await cg.sync();
        const filesChanged = result.filesAdded + result.filesModified + result.filesRemoved;
        return { filesChanged, durationMs: result.durationMs };
      },
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
    }
  }
```

- [ ] **Step 6: Update `closeAll()` to stop watchers**

```typescript
  closeAll(): void {
    // Stop all sub-project watchers first
    for (const [path, watcher] of this.watchers) {
      watcher.stop();
    }
    this.watchers.clear();

    // Close all cached project connections (except default)
    for (const cg of this.projectCache.values()) {
      cg.close();
    }
    this.projectCache.clear();
  }
```

- [ ] **Step 7: Update each handler method to use `resolveProjects`**

For existing handler methods, add the `project` parameter extraction before the existing `cg` call. Example for `handleSearch`:

```typescript
  private async handleSearch(args: Record<string, unknown>): Promise<ToolResult> {
    const query = this.validateString(args.query, 'query');
    if (typeof query !== 'string') return query;

    const projectArg = args.project as string | undefined;
    const projectPathArg = args.projectPath as string | undefined;

    // Single project path
    if (!projectArg || projectArg === '.') {
      const cg = this.getCodeGraph(projectPathArg);
      const kind = args.kind as string | undefined;
      const rawLimit = Number(args.limit) || 10;
      const limit = clamp(rawLimit, 1, 100);
      const results = cg.searchNodes(query, {
        limit,
        kinds: kind ? [kind as NodeKind] : undefined,
      });
      if (results.length === 0) {
        return this.textResult(`No results found for "${query}"`);
      }
      const formatted = this.formatSearchResults(results);
      return this.textResult(this.truncateOutput(formatted));
    }

    // "*" = aggregate across all registered projects
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const allResults: Array<Record<string, unknown>> = [];
    for (const [label, cg] of projects) {
      const kind = args.kind as string | undefined;
      const rawLimit = Number(args.limit) || 10;
      const limit = clamp(rawLimit, 1, 100);
      const results = cg.searchNodes(query, {
        limit,
        kinds: kind ? [kind as NodeKind] : undefined,
      });
      for (const r of results) {
        allResults.push({ project: label, ...r as unknown as Record<string, unknown> });
      }
    }

    if (allResults.length === 0) {
      return this.textResult(`No results found for "${query}" in any project`);
    }

    return this.textResult(this.truncateOutput(JSON.stringify(allResults, null, 2)));
  }
```

Apply the same pattern to all handler methods that use `getCodeGraph`:

| Handler | Changes |
|---------|---------|
| `handleSearch` | Extract `project` param; branch for single vs `"*"`; tag results with `project` label |
| `handleContext` | Same pattern (note: `buildContext` output is markdown string, so for `"*"` prefix each section with `## Project: <name>`) |
| `handleCallers` | Same aggregation pattern |
| `handleCallees` | Same aggregation pattern |
| `handleImpact` | Same aggregation pattern |
| `handleNode` | For `"*"`, return array of `{ project, result }` |
| `handleExplore` | For `"*"`, return aggregated sections |
| `handleStatus` | For `"*"`, return per-project status objects |
| `handleFiles` | For `"*"`, aggregate file lists |

- [ ] **Step 8: Add `handleProjects` method**

```typescript
  /**
   * Handle codegraph_projects — list registered sub-projects
   */
  private async handleProjects(args: Record<string, unknown>): Promise<ToolResult> {
    if (!this.projectRoot) {
      return this.textResult(JSON.stringify({ rootProject: null, projects: [] }, null, 2));
    }

    const checkStatus = args.status !== false;
    const projects = loadProjects(this.projectRoot);

    const projectList: Array<Record<string, unknown>> = [];
    for (const name of projects) {
      const absPath = path.resolve(this.projectRoot, name);
      const entry: Record<string, unknown> = {
        name,
        path: absPath,
        initialized: isInitialized(absPath),
      };
      if (checkStatus && entry.initialized) {
        try {
          const cg = CodeGraph.openSync(absPath);
          const stats = cg.getStats();
          entry.symbolCount = stats.nodeCount;
          entry.fileCount = stats.fileCount;
          cg.close();
        } catch {
          // Can't read stats — skip
        }
      }
      projectList.push(entry);
    }

    return this.textResult(JSON.stringify({
      rootProject: this.projectRoot,
      projects: projectList,
    }, null, 2));
  }
  ```

- [ ] **Step 9: Register the handler in the `execute` method**

```typescript
  case 'codegraph_files':
    return await this.handleFiles(args);
  case 'codegraph_projects':        // NEW
    return await this.handleProjects(args);
```

- [ ] **Step 10: Build and verify**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 11: Commit**

```bash
git add src/mcp/tools.ts
git commit -m "feat(monorepo): add project param and codegraph_projects tool to MCP

Co-Authored-By: Claude Sonnet 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 5: MCP Server — Load Sub-Projects at Startup

**Files:**
- Modify: `src/mcp/index.ts`

- [ ] **Step 1: Import projects functions**

Update imports:

```typescript
import CodeGraph, { findNearestCodeGraphRoot, loadProjects, addProject } from '../index';
```

- [ ] **Step 2: Pass project root to ToolHandler after initialization**

In `tryInitializeDefault()`, after `this.projectPath = resolvedRoot;` is set and the CodeGraph instance is created, propagate it to the ToolHandler:

```typescript
private async tryInitializeDefault(projectPath: string): Promise<void> {
  const resolvedRoot = findNearestCodeGraphRoot(projectPath);

  if (!resolvedRoot) {
    this.projectPath = projectPath;
    return;
  }

  this.projectPath = resolvedRoot;

  try {
    this.cg = await CodeGraph.open(resolvedRoot);
    this.toolHandler.setDefaultCodeGraph(this.cg);
    this.toolHandler.setProjectRoot(resolvedRoot);  // NEW: register root for project lookups

    // Eagerly open sub-projects (≤20)
    const projects = loadProjects(resolvedRoot);
    if (projects.length > 0 && projects.length <= 20) {
      for (const name of projects) {
        const absPath = path.resolve(resolvedRoot, name);
        if (isInitialized(absPath)) {
          try {
            const subCg = CodeGraph.openSync(absPath);
            // Cache via existing ToolHandler mechanism
            this.toolHandler.addToCache(absPath, subCg);
            // Start watcher via existing ToolHandler mechanism
            this.toolHandler.startProjectWatcher(name, absPath, subCg);
          } catch (err) {
            process.stderr.write(
              `[CodeGraph MCP] Failed to open sub-project "${name}": ${err}\n`
            );
          }
        }
      }
    }

    this.startWatching();
  } catch (err) {
    process.stderr.write(`[CodeGraph MCP] Failed to open project at ${resolvedRoot}: ${err}\n`);
  }
}
```

- [ ] **Step 3: Expose `addToCache` and `startProjectWatcher` on ToolHandler**

In `src/mcp/tools.ts`, add these public methods to `ToolHandler`:

```typescript
  /**
   * Add a CodeGraph instance to the project cache (used by MCP server startup)
   */
  addToCache(path: string, cg: CodeGraph): void {
    this.projectCache.set(path, cg);
  }

  /**
   * Start a watcher for a sub-project (public for MCP server startup)
   */
  startProjectWatcher(name: string, absPath: string, cg: CodeGraph): void {
    this.startProjectWatcher(name, absPath, cg);
  }
```

Note: There's a naming collision with the internal `startProjectWatcher` private method. Rename the existing private one to `startWatcherInternal` and have both public and private call it:

```typescript
  /**
   * Start a FileWatcher for a sub-project (public, used by MCP server)
   */
  startProjectWatcher(name: string, absPath: string, cg: CodeGraph): void {
    this.startWatcherInternal(name, absPath, cg);
  }

  /**
   * Internal: start a FileWatcher for a sub-project
   */
  private startWatcherInternal(name: string, absPath: string, cg: CodeGraph): void {
    if (this.watchers.has(absPath)) return;
    const watcher = new FileWatcher(
      absPath,
      cg.getConfig(),
      async () => {
        const result = await cg.sync();
        const filesChanged = result.filesAdded + result.filesModified + result.filesRemoved;
        return { filesChanged, durationMs: result.durationMs };
      },
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
    }
  }
```

Then update `resolveProjects` to call `this.startWatcherInternal(...)` instead of `this.startProjectWatcher(...)`.

- [ ] **Step 4: Stop sub-project watchers on server shutdown**

In the `stop()` method of `MCPServer`:

```typescript
stop(): void {
  // Close all cached cross-project connections first (stops watchers)
  this.toolHandler.closeAll();
  // Close the main CodeGraph instance
  if (this.cg) {
    this.cg.close();
    this.cg = null;
  }
  this.transport.stop();
  process.exit(0);
}
```

The `closeAll()` method (updated in Task 4) already stops all watchers and closes cached projects. No additional changes needed here beyond what already exists.

- [ ] **Step 5: Handle `isInitialized` import**

The MCP server already has `import { findNearestCodeGraphRoot } from '../index'`. Add `isInitialized` to this import:

In `src/mcp/index.ts` line 19, change:
```typescript
import CodeGraph, { findNearestCodeGraphRoot } from '../index';
```
to:
```typescript
import CodeGraph, { findNearestCodeGraphRoot, isInitialized, loadProjects } from '../index';
```

- [ ] **Step 6: Add `path` import**

The MCP server already imports `path`. Verify it's there (line 18):
```typescript
import * as path from 'path';
```

- [ ] **Step 7: Build and verify**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 8: Commit**

```bash
git add src/mcp/index.ts src/mcp/tools.ts
git commit -m "feat(monorepo): load sub-projects at MCP server startup with per-project watchers

Co-Authored-By: Claude Sonnet 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 6: Integration Tests

**Files:**
- Modify: `__tests__/projects.test.ts` (add integration tests)

- [ ] **Step 1: Add integration tests for CLI and MCP flows**

Append to `__tests__/projects.test.ts`:

```typescript
import { CodeGraph } from '../src';

describe('Monorepo Integration', () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = createTempDir();
  });

  afterEach(() => {
    cleanupTempDir(tempDir);
  });

  it('should init sub-projects and register them', () => {
    // Create monorepo structure
    const packagesFoo = path.join(tempDir, 'packages/foo');
    const packagesBar = path.join(tempDir, 'packages/bar');
    fs.mkdirSync(packagesFoo, { recursive: true });
    fs.mkdirSync(packagesBar, { recursive: true });

    // Init root project
    const rootCg = CodeGraph.initSync(tempDir);
    rootCg.close();

    // Init sub-projects
    const fooCg = CodeGraph.initSync(packagesFoo);
    fooCg.close();
    const barCg = CodeGraph.initSync(packagesBar);
    barCg.close();

    // Register sub-projects
    addProject(tempDir, 'packages/foo');
    addProject(tempDir, 'packages/bar');

    // Verify
    const projects = loadProjects(tempDir);
    expect(projects).toContain('packages/foo');
    expect(projects).toContain('packages/bar');
  });

  it('scanForProjects should find sub-projects created after init', () => {
    // Init root
    const rootCg = CodeGraph.initSync(tempDir);
    rootCg.close();

    // No sub-projects yet
    expect(scanForProjects(tempDir)).toEqual([]);

    // Create and init a sub-project
    const sub = path.join(tempDir, 'packages/new');
    fs.mkdirSync(sub, { recursive: true });
    const subCg = CodeGraph.initSync(sub);
    subCg.close();

    // Scan should find it
    const found = scanForProjects(tempDir);
    expect(found).toContain('packages/new');
  });

  it('syncProjects preserves manually added projects during scan', () => {
    // Init root
    const rootCg = CodeGraph.initSync(tempDir);
    rootCg.close();

    // Add a manual entry (that won't be found by scan)
    addProject(tempDir, 'manual/pkg');
    // Create and init an auto-discoverable project
    const sub = path.join(tempDir, 'packages/auto');
    fs.mkdirSync(sub, { recursive: true });
    const subCg = CodeGraph.initSync(sub);
    subCg.close();

    // sync
    const merged = syncProjects(tempDir);
    expect(merged).toContain('manual/pkg');
    expect(merged).toContain('packages/auto');
  });

  it('should handle project add/remove lifecycle', () => {
    const rootCg = CodeGraph.initSync(tempDir);
    rootCg.close();

    addProject(tempDir, 'packages/foo');
    expect(loadProjects(tempDir)).toEqual(['packages/foo']);

    removeProject(tempDir, 'packages/foo');
    expect(loadProjects(tempDir)).toEqual([]);
  });

  it('should handle corrupted projects.json gracefully', () => {
    const cgDir = path.join(tempDir, '.codegraph');
    fs.mkdirSync(cgDir, { recursive: true });
    fs.writeFileSync(path.join(cgDir, 'projects.json'), '{broken json', 'utf-8');

    const result = loadProjects(tempDir);
    expect(result).toEqual([]);
  });
});
```

- [ ] **Step 2: Run all tests**

Run: `npx vitest run __tests__/projects.test.ts`
Expected: ALL PASS (all unit + integration tests)

- [ ] **Step 3: Run full test suite to check for regressions**

Run: `npm test`
Expected: ALL PASS

- [ ] **Step 4: Commit**

```bash
git add __tests__/projects.test.ts
git commit -m "test(monorepo): add integration tests for project registry and lifecycle

Co-Authored-By: Claude Sonnet 4.6 (1M context) <noreply@anthropic.com>"
```
