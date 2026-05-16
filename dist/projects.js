"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROJECTS_FILENAME = void 0;
exports.getProjectsPath = getProjectsPath;
exports.loadProjects = loadProjects;
exports.saveProjects = saveProjects;
exports.addProject = addProject;
exports.removeProject = removeProject;
exports.scanForProjects = scanForProjects;
exports.syncProjects = syncProjects;
/**
 * Projects Registry
 *
 * Manages the `.codegraph/projects.json` file that tracks registered
 * sub-projects in a monorepo. Each sub-project has its own `.codegraph/`
 * directory initialized independently. The registry stores relative paths
 * from the monorepo root.
 */
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const directory_1 = require("./directory");
/** Filename for the projects registry */
exports.PROJECTS_FILENAME = 'projects.json';
/**
 * Get the full path to the projects.json file
 */
function getProjectsPath(projectRoot) {
    return path.join(projectRoot, directory_1.CODEGRAPH_DIR, exports.PROJECTS_FILENAME);
}
/**
 * Load the projects registry.
 * Returns an empty array if the file doesn't exist or is malformed.
 * Malformed JSON is logged to stderr for diagnostics.
 */
function loadProjects(projectRoot) {
    const filePath = getProjectsPath(projectRoot);
    try {
        if (!fs.existsSync(filePath))
            return [];
        const content = fs.readFileSync(filePath, 'utf-8');
        const parsed = JSON.parse(content);
        if (!Array.isArray(parsed))
            return [];
        // Filter to strings only
        return parsed.filter((p) => typeof p === 'string');
    }
    catch (err) {
        process.stderr.write(`[CodeGraph] Failed to load projects.json: ${err instanceof Error ? err.message : String(err)}\n`);
        return [];
    }
}
/**
 * Save the projects registry atomically (temp file + rename)
 */
function saveProjects(projectRoot, projects) {
    const filePath = getProjectsPath(projectRoot);
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    // Deduplicate and sort for consistent file output
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
function addProject(projectRoot, projectPath) {
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
function removeProject(projectRoot, projectPath) {
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
function scanForProjects(root, maxDepth = 3) {
    const results = [];
    // BFS: queue of [dirPath, depth]
    const queue = [[root, 0]];
    while (queue.length > 0) {
        const [currentDir, depth] = queue.shift();
        // Check this directory first
        if (depth > 0 && (0, directory_1.isInitialized)(currentDir)) {
            const relative = path.relative(root, currentDir).replace(/\\/g, '/');
            results.push(relative);
        }
        // Stop walking deeper once past maxDepth
        // Projects at exactly maxDepth+1 are still checked but their
        // children are not enqueued. This way a project at "packages/foo"
        // (depth 2) is found when maxDepth=1, but "packages/group/deep"
        // (depth 3) is not.
        if (depth > maxDepth)
            continue;
        // Enqueue sub-directories
        try {
            const entries = fs.readdirSync(currentDir, { withFileTypes: true });
            for (const entry of entries) {
                if (entry.isDirectory() && !SCAN_SKIP_DIRS.has(entry.name)) {
                    queue.push([path.join(currentDir, entry.name), depth + 1]);
                }
            }
        }
        catch {
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
function syncProjects(root, maxDepth) {
    const existing = loadProjects(root);
    const discovered = scanForProjects(root, maxDepth);
    const merged = [...new Set([...existing, ...discovered])].sort();
    saveProjects(root, merged);
    return merged;
}
//# sourceMappingURL=projects.js.map