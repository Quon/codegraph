/**
 * Node.js version compatibility check.
 *
 * Node 25.x has a V8 turboshaft WASM JIT Zone allocator bug that
 * reliably crashes CodeGraph with `Fatal process out of memory: Zone`
 * during tree-sitter grammar compilation. This module owns the
 * user-facing banner shown before exit. Kept side-effect-free so it's
 * safe to import from tests without triggering CLI bootstrap.
 *
 * Node 26+ ships with a fixed V8 and should not hit this bug. If a
 * new V8 issue is confirmed in a future major, add it here.
 */
/**
 * Build the bordered banner shown when CodeGraph detects a blocked
 * Node.js major version. Pinned via unit test so the recovery commands
 * and override instructions can't be silently stripped by future edits.
 */
export declare function buildNodeBlockBanner(nodeVersion: string): string;
//# sourceMappingURL=node-version-check.d.ts.map