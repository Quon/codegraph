/** Filename for the projects registry */
export declare const PROJECTS_FILENAME = "projects.json";
/**
 * Get the full path to the projects.json file
 */
export declare function getProjectsPath(projectRoot: string): string;
/**
 * Load the projects registry.
 * Returns an empty array if the file doesn't exist or is malformed.
 * Malformed JSON is logged to stderr for diagnostics.
 */
export declare function loadProjects(projectRoot: string): string[];
/**
 * Save the projects registry atomically (temp file + rename)
 */
export declare function saveProjects(projectRoot: string, projects: string[]): void;
/**
 * Add a project path to the registry (deduplicated).
 * Returns the updated project list.
 */
export declare function addProject(projectRoot: string, projectPath: string): string[];
/**
 * Remove a project path from the registry.
 * Returns the updated project list.
 */
export declare function removeProject(projectRoot: string, projectPath: string): string[];
/**
 * Scan sub-directories for initialized CodeGraph projects.
 *
 * Performs a BFS walk up to `maxDepth` levels, checking each directory
 * with `isInitialized()`. Returns relative paths sorted alphabetically.
 *
 * @param root - The monorepo root to scan from
 * @param maxDepth - Maximum directory nesting (default: 3; root=0, packages/=1, packages/foo/=2)
 */
export declare function scanForProjects(root: string, maxDepth?: number): string[];
/**
 * Walk up from startPath looking for the nearest directory that has a
 * non-empty .codegraph/projects.json (a monorepo root without a root db).
 */
export declare function findNearestMonorepoRoot(startPath: string): string | null;
/**
 * Sync the registry with auto-discovery.
 * Merges scan results with existing entries (keeps manually added projects).
 * Returns the merged and saved project list.
 */
export declare function syncProjects(root: string, maxDepth?: number): string[];
//# sourceMappingURL=projects.d.ts.map