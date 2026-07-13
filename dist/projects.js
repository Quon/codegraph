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
exports.loadProjectEntries = loadProjectEntries;
exports.loadProjects = loadProjects;
exports.saveProjects = saveProjects;
exports.addProject = addProject;
exports.removeProject = removeProject;
exports.scanForProjects = scanForProjects;
exports.findNearestMonorepoRoot = findNearestMonorepoRoot;
exports.syncProjects = syncProjects;
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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const directory_1 = require("./directory");
/** Filename for the projects registry */
exports.PROJECTS_FILENAME = 'projects.json';
/**
 * Derive a project name from its relative path (last non-empty segment).
 * "packages/foo" → "foo", "apps/web" → "web"
 */
function nameFromPath(relPath) {
    const segments = relPath.replace(/\\/g, '/').split('/').filter(Boolean);
    return segments[segments.length - 1] ?? relPath;
}
/**
 * Parse a raw JSON entry into a ProjectEntry.
 * Accepts both the legacy string format and the new object format.
 */
function parseEntry(raw) {
    if (typeof raw === 'string' && raw) {
        return { name: nameFromPath(raw), path: raw };
    }
    if (raw && typeof raw === 'object') {
        const obj = raw;
        const p = typeof obj.path === 'string' ? obj.path : null;
        if (!p)
            return null;
        const n = typeof obj.name === 'string' && obj.name ? obj.name : nameFromPath(p);
        return { name: n, path: p };
    }
    return null;
}
/**
 * Get the full path to the projects.json file
 */
function getProjectsPath(projectRoot) {
    return path.join(projectRoot, directory_1.CODEGRAPH_DIR, exports.PROJECTS_FILENAME);
}
/**
 * Load the projects registry as structured entries.
 * Returns an empty array if the file doesn't exist or is malformed.
 * Legacy plain-string entries are automatically converted.
 */
function loadProjectEntries(projectRoot, options = {}) {
    const filePath = getProjectsPath(projectRoot);
    try {
        if (!fs.existsSync(filePath))
            return [];
        const content = fs.readFileSync(filePath, 'utf-8');
        const parsed = JSON.parse(content);
        if (!Array.isArray(parsed))
            return [];
        return parsed.map(parseEntry).filter((e) => e !== null);
    }
    catch (err) {
        if (!options.quiet) {
            process.stderr.write(`[CodeGraph] Failed to load projects.json: ${err instanceof Error ? err.message : String(err)}\n`);
        }
        return [];
    }
}
/**
 * Load registered project paths (string array).
 * Kept for backwards compatibility with internal callers that only need paths.
 */
function loadProjects(projectRoot) {
    return loadProjectEntries(projectRoot).map((e) => e.path);
}
/**
 * Save the projects registry atomically (temp file + rename).
 * Deduplicates by path and sorts by name for consistent output.
 */
function saveProjects(projectRoot, entries) {
    const filePath = getProjectsPath(projectRoot);
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    // Deduplicate by path, keep last occurrence
    const byPath = new Map();
    for (const e of entries)
        byPath.set(e.path, e);
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
function addProject(projectRoot, projectPath, name) {
    const entries = loadProjectEntries(projectRoot);
    const resolvedName = name || nameFromPath(projectPath);
    const existing = entries.findIndex((e) => e.path === projectPath);
    if (existing >= 0) {
        entries[existing] = { name: resolvedName, path: projectPath };
    }
    else {
        entries.push({ name: resolvedName, path: projectPath });
    }
    saveProjects(projectRoot, entries);
    return entries;
}
/**
 * Remove a project from the registry by path or name.
 * Returns the updated entry list.
 */
function removeProject(projectRoot, pathOrName) {
    const entries = loadProjectEntries(projectRoot).filter((e) => e.path !== pathOrName && e.name !== pathOrName);
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
function scanForProjects(root, maxDepth = 3) {
    const results = [];
    const queue = [[root, 0]];
    while (queue.length > 0) {
        const [currentDir, depth] = queue.shift();
        if (depth > 0 && (0, directory_1.isInitialized)(currentDir)) {
            const relPath = path.relative(root, currentDir).replace(/\\/g, '/');
            results.push({ name: nameFromPath(relPath), path: relPath });
        }
        if (depth > maxDepth)
            continue;
        try {
            const dirEntries = fs.readdirSync(currentDir, { withFileTypes: true });
            for (const entry of dirEntries) {
                if (entry.isDirectory() && !SCAN_SKIP_DIRS.has(entry.name)) {
                    queue.push([path.join(currentDir, entry.name), depth + 1]);
                }
            }
        }
        catch {
            // Permission error or deleted directory — skip silently
        }
    }
    // Deduplicate by path
    const byPath = new Map();
    for (const e of results)
        byPath.set(e.path, e);
    return [...byPath.values()].sort((a, b) => a.name.localeCompare(b.name));
}
/**
 * Walk up from startPath looking for the nearest directory that has a
 * non-empty .codegraph/projects.json (a monorepo root without a root db).
 */
function findNearestMonorepoRoot(startPath) {
    let current = path.resolve(startPath);
    const fsRoot = path.parse(current).root;
    while (current !== fsRoot) {
        if (loadProjectEntries(current).length > 0)
            return current;
        const parent = path.dirname(current);
        if (parent === current)
            break;
        current = parent;
    }
    if (loadProjectEntries(current).length > 0)
        return current;
    return null;
}
/**
 * Sync the registry with auto-discovery.
 * Merges scan results with existing entries — existing entries win on name
 * conflict so manually assigned names are preserved.
 * Returns the merged and saved entry list.
 */
function syncProjects(root, maxDepth) {
    const existing = loadProjectEntries(root);
    const discovered = scanForProjects(root, maxDepth);
    // Merge: existing entries take precedence (preserve custom names)
    const byPath = new Map();
    for (const e of discovered)
        byPath.set(e.path, e);
    for (const e of existing)
        byPath.set(e.path, e); // overwrite with existing
    const merged = [...byPath.values()].sort((a, b) => a.name.localeCompare(b.name));
    saveProjects(root, merged);
    return merged;
}
//# sourceMappingURL=projects.js.map