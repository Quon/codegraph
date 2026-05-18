/**
 * Projects Registry
 *
 * Manages the `.codegraph/projects.json` file that tracks registered
 * sub-projects in a monorepo. Each entry has a `name` (short alias used in
 * MCP tool calls) and a `path` (relative path from the monorepo root).
 *
 * File format (backwards compatible — plain strings are auto-migrated):
 *   [ { "name": "foo", "path": "packages/foo" }, ... ]
 */
import * as fs from 'fs';
import * as path from 'path';
import { isInitialized, CODEGRAPH_DIR } from './directory';

/** Filename for the projects registry */
export const PROJECTS_FILENAME = 'projects.json';

/** A registered sub-project entry */
export interface ProjectEntry {
  /** Short alias used in MCP `project` parameter (e.g. "foo") */
  name: string;
  /** Relative path from the monorepo root (e.g. "packages/foo") */
  path: string;
}

/**
 * Derive a project name from its relative path (last non-empty segment).
 * "packages/foo" → "foo", "apps/web" → "web"
 */
function nameFromPath(relPath: string): string {
  const segments = relPath.replace(/\\/g, '/').split('/').filter(Boolean);
  return segments[segments.length - 1] ?? relPath;
}

/**
 * Parse a raw JSON entry into a ProjectEntry.
 * Accepts both the legacy string format and the new object format.
 */
function parseEntry(raw: unknown): ProjectEntry | null {
  if (typeof raw === 'string' && raw) {
    return { name: nameFromPath(raw), path: raw };
  }
  if (raw && typeof raw === 'object') {
    const obj = raw as Record<string, unknown>;
    const p = typeof obj.path === 'string' ? obj.path : null;
    if (!p) return null;
    const n = typeof obj.name === 'string' && obj.name ? obj.name : nameFromPath(p);
    return { name: n, path: p };
  }
  return null;
}

/**
 * Get the full path to the projects.json file
 */
export function getProjectsPath(projectRoot: string): string {
  return path.join(projectRoot, CODEGRAPH_DIR, PROJECTS_FILENAME);
}

/**
 * Load the projects registry as structured entries.
 * Returns an empty array if the file doesn't exist or is malformed.
 * Legacy plain-string entries are automatically converted.
 */
export function loadProjectEntries(projectRoot: string): ProjectEntry[] {
  const filePath = getProjectsPath(projectRoot);
  try {
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(content);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(parseEntry).filter((e): e is ProjectEntry => e !== null);
  } catch (err) {
    process.stderr.write(
      `[CodeGraph] Failed to load projects.json: ${err instanceof Error ? err.message : String(err)}\n`
    );
    return [];
  }
}

/**
 * Load registered project paths (string array).
 * Kept for backwards compatibility with internal callers that only need paths.
 */
export function loadProjects(projectRoot: string): string[] {
  return loadProjectEntries(projectRoot).map((e) => e.path);
}

/**
 * Save the projects registry atomically (temp file + rename).
 * Deduplicates by path and sorts by name for consistent output.
 */
export function saveProjects(projectRoot: string, entries: ProjectEntry[]): void {
  const filePath = getProjectsPath(projectRoot);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  // Deduplicate by path, keep last occurrence
  const byPath = new Map<string, ProjectEntry>();
  for (const e of entries) byPath.set(e.path, e);
  const unique = [...byPath.values()].sort((a, b) => a.name.localeCompare(b.name));
  const content = JSON.stringify(unique, null, 2);
  const tmpPath = filePath + '.tmp';
  fs.writeFileSync(tmpPath, content, 'utf-8');
  fs.renameSync(tmpPath, filePath);
}

/**
 * Add a project to the registry (deduplicated by path).
 * Name defaults to the last segment of the path if not provided.
 * Returns the updated entry list.
 */
export function addProject(
  projectRoot: string,
  projectPath: string,
  name?: string
): ProjectEntry[] {
  const entries = loadProjectEntries(projectRoot);
  const resolvedName = name || nameFromPath(projectPath);
  const existing = entries.findIndex((e) => e.path === projectPath);
  if (existing >= 0) {
    entries[existing] = { name: resolvedName, path: projectPath };
  } else {
    entries.push({ name: resolvedName, path: projectPath });
  }
  saveProjects(projectRoot, entries);
  return entries;
}

/**
 * Remove a project from the registry by path or name.
 * Returns the updated entry list.
 */
export function removeProject(projectRoot: string, pathOrName: string): ProjectEntry[] {
  const entries = loadProjectEntries(projectRoot).filter(
    (e) => e.path !== pathOrName && e.name !== pathOrName
  );
  saveProjects(projectRoot, entries);
  return entries;
}

/**
 * Directories to skip during auto-discovery scan
 */
const SCAN_SKIP_DIRS = new Set(['.codegraph', '.git', 'node_modules']);

/**
 * Scan sub-directories for initialized CodeGraph projects.
 *
 * Performs a BFS walk up to `maxDepth` levels, checking each directory
 * with `isInitialized()`. Returns entries sorted by name, with names
 * auto-derived from the last path segment.
 *
 * @param root - The monorepo root to scan from
 * @param maxDepth - Maximum directory nesting (default: 3)
 */
export function scanForProjects(root: string, maxDepth: number = 3): ProjectEntry[] {
  const results: ProjectEntry[] = [];

  const queue: Array<[string, number]> = [[root, 0]];

  while (queue.length > 0) {
    const [currentDir, depth] = queue.shift()!;

    if (depth > 0 && isInitialized(currentDir)) {
      const relPath = path.relative(root, currentDir).replace(/\\/g, '/');
      results.push({ name: nameFromPath(relPath), path: relPath });
    }

    if (depth > maxDepth) continue;

    try {
      const dirEntries = fs.readdirSync(currentDir, { withFileTypes: true });
      for (const entry of dirEntries) {
        if (entry.isDirectory() && !SCAN_SKIP_DIRS.has(entry.name)) {
          queue.push([path.join(currentDir, entry.name), depth + 1]);
        }
      }
    } catch {
      // Permission error or deleted directory — skip silently
    }
  }

  // Deduplicate by path
  const byPath = new Map<string, ProjectEntry>();
  for (const e of results) byPath.set(e.path, e);
  return [...byPath.values()].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Walk up from startPath looking for the nearest directory that has a
 * non-empty .codegraph/projects.json (a monorepo root without a root db).
 */
export function findNearestMonorepoRoot(startPath: string): string | null {
  let current = path.resolve(startPath);
  const fsRoot = path.parse(current).root;

  while (current !== fsRoot) {
    if (loadProjectEntries(current).length > 0) return current;
    const parent = path.dirname(current);
    if (parent === current) break;
    current = parent;
  }

  if (loadProjectEntries(current).length > 0) return current;
  return null;
}

/**
 * Sync the registry with auto-discovery.
 * Merges scan results with existing entries — existing entries win on name
 * conflict so manually assigned names are preserved.
 * Returns the merged and saved entry list.
 */
export function syncProjects(root: string, maxDepth?: number): ProjectEntry[] {
  const existing = loadProjectEntries(root);
  const discovered = scanForProjects(root, maxDepth);

  // Merge: existing entries take precedence (preserve custom names)
  const byPath = new Map<string, ProjectEntry>();
  for (const e of discovered) byPath.set(e.path, e);
  for (const e of existing) byPath.set(e.path, e); // overwrite with existing

  const merged = [...byPath.values()].sort((a, b) => a.name.localeCompare(b.name));
  saveProjects(root, merged);
  return merged;
}
