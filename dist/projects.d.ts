/** Filename for the projects registry */
export declare const PROJECTS_FILENAME = "projects.json";
/** A registered sub-project entry */
export interface ProjectEntry {
    /** Short alias used in MCP `project` parameter (e.g. "foo") */
    name: string;
    /** Relative path from the monorepo root (e.g. "packages/foo") */
    path: string;
}
/**
 * Get the full path to the projects.json file
 */
export declare function getProjectsPath(projectRoot: string): string;
/**
 * Load the projects registry as structured entries.
 * Returns an empty array if the file doesn't exist or is malformed.
 * Legacy plain-string entries are automatically converted.
 */
export declare function loadProjectEntries(projectRoot: string): ProjectEntry[];
/**
 * Load registered project paths (string array).
 * Kept for backwards compatibility with internal callers that only need paths.
 */
export declare function loadProjects(projectRoot: string): string[];
/**
 * Save the projects registry atomically (temp file + rename).
 * Deduplicates by path and sorts by name for consistent output.
 */
export declare function saveProjects(projectRoot: string, entries: ProjectEntry[]): void;
/**
 * Add a project to the registry (deduplicated by path).
 * Name defaults to the last segment of the path if not provided.
 * Returns the updated entry list.
 */
export declare function addProject(projectRoot: string, projectPath: string, name?: string): ProjectEntry[];
/**
 * Remove a project from the registry by path or name.
 * Returns the updated entry list.
 */
export declare function removeProject(projectRoot: string, pathOrName: string): ProjectEntry[];
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
export declare function scanForProjects(root: string, maxDepth?: number): ProjectEntry[];
/**
 * Walk up from startPath looking for the nearest directory that has a
 * non-empty .codegraph/projects.json (a monorepo root without a root db).
 */
export declare function findNearestMonorepoRoot(startPath: string): string | null;
/**
 * Sync the registry with auto-discovery.
 * Merges scan results with existing entries — existing entries win on name
 * conflict so manually assigned names are preserved.
 * Returns the merged and saved entry list.
 */
export declare function syncProjects(root: string, maxDepth?: number): ProjectEntry[];
//# sourceMappingURL=projects.d.ts.map