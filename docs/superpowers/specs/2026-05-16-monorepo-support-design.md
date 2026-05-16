# Monorepo Native Support

**Date:** 2026-05-16
**Status:** Ready for Review

## Problem

CodeGraph currently assumes a single project root. All `.codegraph/` data lives in one
directory, the database stores relative paths against a single `rootDir`, and the MCP
server only opens one project. In a monorepo with many packages, users want to:

- Run `codegraph init` independently in sub-packages
- Have the MCP server discover all sub-package `.codegraph/` directories automatically
- Query across all sub-packages from a single MCP session

## Design

### Philosophy: Decentralized, Not Centralized

Each package manages its own `.codegraph/` independently. The root `.codegraph/` acts as
a *registry* — it knows where the sub-projects live but doesn't own their data. This
matches the user's workflow: they `cd packages/foo && codegraph init -i` as part of
their normal setup. The MCP server then discovers all registered sub-projects and opens
them lazily into its project cache.

```
monorepo-root/
├── .codegraph/
│   ├── codegraph.db          ← Root project's graph (may be empty)
│   ├── config.json           ← Root project config
│   └── projects.json         ← NEW: sub-project registry
├── packages/
│   ├── foo/.codegraph/       ← User ran `codegraph init` here
│   ├── bar/.codegraph/       ← User ran `codegraph init` here
│   └── baz/                  ← Not initialized, not in registry
├── apps/
│   └── web/.codegraph/       ← User ran `codegraph init` here
└── libs/
    └── shared/.codegraph/    ← User ran `codegraph init` here
```

### Component: Projects Registry (`projects.json`)

A new file at `.codegraph/projects.json` stores relative paths of registered sub-projects:

```json
["packages/foo", "packages/bar", "apps/web", "libs/shared"]
```

**Rules:**
- Paths are relative to the directory containing `.codegraph/` (the monorepo root)
- The file is **optional** — absent means no sub-projects registered
- Paths are not validated for existence on read (a package may have been deleted)
- Written atomically (temp file + rename, same as `config.json`)

### Component: Project Registry Module (`src/projects.ts`)

New module with these exports:

| Export | Signature | Purpose |
|--------|-----------|---------|
| `PROJECTS_FILENAME` | `'projects.json'` | Filename constant |
| `getProjectsPath(root)` | `(root: string) => string` | Full path to projects.json |
| `loadProjects(root)` | `(root: string) => string[]` | Load registry, returns `[]` if absent |
| `saveProjects(root, projects)` | `(root: string, projects: string[]) => void` | Save registry atomically |
| `addProject(root, projectPath)` | `(root: string, projectPath: string) => string[]` | Add one entry, deduplicate, save |
| `removeProject(root, projectPath)` | `(root: string, projectPath: string) => string[]` | Remove one entry, save |
| `scanForProjects(root, maxDepth?)` | `(root: string, maxDepth?: number) => string[]` | Walk subdirs up to maxDepth looking for `.codegraph/` |
| `syncProjects(root)` | `(root: string) => string[]` | scan + merge into registry, return merged list |

### Component: Auto-Discovery (`scanForProjects`)

**Algorithm:**
1. BFS walk directories from `root`, up to `maxDepth` levels (default: 3)
2. At each directory, call `isInitialized(dir)` (checks for `.codegraph/codegraph.db`)
3. Skip: `.codegraph/` itself, `.git/`, `node_modules/` (standard exclude patterns)
4. When a match is found, record it but **continue** walking its children (a parent + child
   may both be valid projects, though unusual)
5. Convert matching dirs to relative paths from root
6. Return sorted, deduplicated list

`maxDepth` is checked as directory nesting level: root = 0, `packages/` = 1,
`packages/foo/` = 2. Default 3 covers `packages/foo/bar` depth.

**`syncProjects`** merges scan results with existing registry:
- Newly discovered projects → appended
- Existing entries kept (user may have manually added a project that scan won't find)
- No auto-removal (user must explicitly remove via CLI)

### CLI Commands

New `codegraph project` sub-command group:

```
codegraph project list                    List registered sub-projects with status
codegraph project add <path>              Register a sub-project
codegraph project remove <path>           Unregister a sub-project
codegraph project scan                    Auto-discover and merge into registry
```

**`project list` output:**

```
Registered projects (root: /home/user/project):

  packages/foo     ✓  (87 symbols, 14 files)
  packages/bar     ✓  (234 symbols, 32 files)
  apps/web         ✗  (not initialized)
  libs/shared      ✓  (45 symbols, 8 files)

  3 of 4 projects available
```

Status check uses `isInitialized()` for each resolved absolute path.

### MCP Server Changes

#### Startup Flow (`src/mcp/index.ts`)

Current:
```
tryInitializeDefault(rootPath)
  → findNearestCodeGraphRoot(rootPath)
  → CodeGraph.open(resolvedRoot)
  → startWatching()
```

New:
```
tryInitializeDefault(rootPath)
  → findNearestCodeGraphRoot(rootPath)
  → CodeGraph.open(resolvedRoot)
  → loadProjects(resolvedRoot)              ← NEW
  → if projects.length <= 20:
      for each project:
        resolve relative → absolute
        if isInitialized(path):
          try CodeGraph.openSync(path)
          cache in projectCache
  → startWatching()
```

**Eager vs lazy rules:**
- ≤ 20 projects: all opened eagerly at startup
- > 20 projects: only root project opened at startup; sub-projects opened on first
  tool call that uses `project: "*"` or `project: "<name>"` (one-time, then cached)

This prevents slow startup on large monorepos while keeping small ones snappy.
Each `openSync()` call is ~5-10ms on an indexed project, so 20 projects = ~100-200ms,
well within acceptable startup time.

File watching stays on the root project only (sub-projects don't get individual watchers).

#### New MCP Tool: `codegraph_projects`

```
Tool: codegraph_projects
Purpose: List registered sub-projects with metadata
Input: { status?: boolean }  // whether to check initialization status (default: true)
Output:
  {
    rootProject: string,          // absolute path
    projects: [
      {
        name: string,             // relative path from root (e.g. "packages/foo")
        path: string,             // absolute path
        initialized: boolean,
        symbolCount?: number,
        fileCount?: number
      }
    ]
  }
```

#### Existing Tool Enhancement: `project` Parameter

Every MCP tool gets a new optional `project` parameter for registered projects:

- **`project: "packages/foo"`** — query only the named sub-project
- **`project: "*"`** — query ALL registered projects, aggregate results
- **`project: "."`** — root project only (default behavior)
- **`projectPath: "/some/other/path"`** — existing behavior (unchanged)

**`project` vs `projectPath` precedence:**
- If both are provided → `project` wins, `projectPath` is ignored
- If neither → root project (existing behavior)
- `projectPath` stays for truly external (non-registered) projects

For `*` queries, the tool handler iterates the registry, runs the query against each
open project, and merges results with source tagging.

#### Tool Handler Changes (`src/mcp/tools.ts`)

`ToolHandler` gains:

```typescript
// Resolve a project identifier to a CodeGraph instance (or instances)
private resolveProjects(
  project?: string,
  projectPath?: string
): Map<string, CodeGraph>  // Map<projectLabel, CodeGraph>
```

Returns a map to support `project: "*"` (multi-result). When there's a single result,
the map has one entry. The execute methods iterate this map and aggregate results.

### Cross-Project Query with `project: "*"`

When `project: "*"` is used:

1. Load registry from root project's `.codegraph/projects.json`
2. For each registered path:
   - Check cache → use cached instance
   - Try `CodeGraph.openSync()` → cache it
   - On error → skip, include error in results
3. Run the query against each available project
4. Aggregate: concatenate results, each result tagged with `{ project: "packages/foo" }`
5. Return aggregated results

**Result format for tools that return arrays** (e.g., `codegraph_search`):

Each result item gets tagged with the project it came from. The array is flat across
all projects — the client doesn't need to unwrap nested result groups.

```json
[
  { "project": "packages/foo", "name": "authMiddleware", "kind": "function", ... },
  { "project": "packages/bar", "name": "authHelpers", "kind": "module", ... }
]
```

**For tools that return single objects** (e.g., `codegraph_node`), `"*"` returns
an array of `{ project: "...", result: { ... } }` — one entry per matching project.

### Error Handling

| Scenario | Behavior |
|----------|----------|
| projects.json missing | Treated as empty list — no error |
| Registered project deleted from disk | Listed as "not initialized" in `project list`; skipped on `*` query (warning logged) |
| Registered project's `.codegraph/` deleted (but project directory exists) | `isInitialized()` returns false; listed as "not initialized" |
| Lock contention on sub-project | Skipped with logged warning |
| Corrupted projects.json | Falls back to empty list, error logged to stderr |
| Circular references (project pointing inside .codegraph/) | Prevented by path validation |

### Files Changed

| File | Change |
|------|--------|
| `src/projects.ts` | **NEW** — ProjectsRegistry module |
| `src/types.ts` | `ProjectsConfig` type (if needed for config integration) |
| `src/directory.ts` | Re-export or reference `CODEGRAPH_DIR` constant |
| `src/index.ts` | Export new functions from `projects.ts` |
| `src/bin/codegraph.ts` | Add `project` sub-command group |
| `src/mcp/index.ts` | Startup: load and open sub-projects |
| `src/mcp/tools.ts` | Add `codegraph_projects` tool; enhance existing tools with `project` param |
| `docs/superpowers/specs/2026-05-16-monorepo-support-design.md` | This document |

### Non-Goals

- **No aggregate database**: We do not merge sub-project databases into a single
  root database. Query aggregation happens at the MCP tool layer.
- **No workspace auto-init**: The user still runs `codegraph init` in each package.
  We discover, not initialize.
- **No shared config**: Each sub-project keeps its own `.codegraph/config.json`.
  Root config does not inherit to sub-projects.
- **No cross-package resolution**: Reference resolution (e.g., resolving imports
  from `packages/foo` to symbols in `packages/bar`) is out of scope for now.
  Cross-project queries at the MCP tool layer are the only cross-package feature.

### Testing

| Area | Approach |
|------|----------|
| `projects.ts` | Unit tests for load/save/add/remove/scan with temp directory fixtures |
| CLI commands | Integration tests that init a "monorepo" with sub-dirs, run project add/remove/list/scan |
| MCP startup | Mock filesystem to verify projects.json is loaded and sub-projects are cached |
| `project: "*"` query | Mock multiple CodeGraph instances, verify aggregation + source tagging |
| Error handling | Empty projects.json, corrupted JSON, deleted sub-project, lock contention |
