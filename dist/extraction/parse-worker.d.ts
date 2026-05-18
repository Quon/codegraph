/**
 * Parse Worker
 *
 * Runs tree-sitter parsing in a child process so the main process
 * stays unblocked and the UI animation renders smoothly.
 * Spawned via child_process.fork() with --no-wasm-tier-up to prevent
 * V8 Zone OOM from JIT tier-up of WASM functions.
 */
export {};
//# sourceMappingURL=parse-worker.d.ts.map