/**
 * SQLite Adapter
 *
 * Provides a unified interface over better-sqlite3 (native) and
 * node-sqlite3-wasm (WASM fallback) for universal cross-platform support.
 */
export interface SqliteStatement {
    run(...params: any[]): {
        changes: number;
        lastInsertRowid: number | bigint;
    };
    get(...params: any[]): any;
    all(...params: any[]): any[];
}
export interface SqliteDatabase {
    prepare(sql: string): SqliteStatement;
    exec(sql: string): void;
    pragma(str: string): any;
    transaction<T>(fn: (...args: any[]) => T): (...args: any[]) => T;
    close(): void;
    readonly open: boolean;
}
export type SqliteBackend = 'native' | 'wasm';
/**
 * One-line summary of the recovery steps shown when WASM fallback is
 * active. Single source of truth so the recipe can't drift between the
 * stderr banner and the MCP status formatter.
 */
export declare const WASM_FALLBACK_FIX_RECIPE: string;
/**
 * Multi-line banner shown to stderr when `createDatabase` falls back to
 * WASM. Replaces a one-line `console.warn` that MCP transports (which
 * take stdout for the protocol) typically swallow, leaving users on a
 * 5-10x slower backend with no signal.
 *
 * Exported for unit testing — pinning the recipe content prevents
 * future edits from silently stripping the recovery commands.
 */
export declare function buildWasmFallbackBanner(nativeError?: string): string;
/**
 * Create a database connection. Tries native better-sqlite3 first,
 * falls back to node-sqlite3-wasm. Returns the active backend
 * alongside the db so each `DatabaseConnection` can report its own
 * backend per-instance — MCP can open multiple project DBs in one
 * process (`tools.ts` getCodeGraph cache), so a process-global would
 * race / overwrite.
 */
export declare function createDatabase(dbPath: string): {
    db: SqliteDatabase;
    backend: SqliteBackend;
};
//# sourceMappingURL=sqlite-adapter.d.ts.map