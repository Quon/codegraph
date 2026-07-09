/**
 * Database Layer
 *
 * Handles SQLite database initialization and connection management.
 */
import { SqliteDatabase, SqliteBackend } from './sqlite-adapter';
import { SchemaVersion } from '../types';
export { SqliteDatabase, SqliteBackend } from './sqlite-adapter';
/**
 * Database connection wrapper with lifecycle management
 */
export declare class DatabaseConnection {
    private db;
    private dbPath;
    private backend;
    /**
     * `dev:ino` of the DB file at the moment we opened it (or null when the
     * platform/filesystem reports no usable inode). Lets us notice when the file
     * we hold open has been unlinked and REPLACED by a new file at the same path
     * — a git worktree removed and re-added, or `.codegraph/` deleted and
     * re-`init`ed under a long-lived server — at which point our fd reads a now
     * dead inode forever (#925). See `isReplacedOnDisk`.
     */
    private openedInode;
    private constructor();
    /**
     * Initialize a new database at the given path
     */
    static initialize(dbPath: string): DatabaseConnection;
    /**
     * Open an existing database
     */
    static open(dbPath: string): DatabaseConnection;
    /**
     * Get the underlying database instance
     */
    getDb(): SqliteDatabase;
    /**
     * Get the SQLite backend serving this connection. Per-instance so
     * MCP cross-project queries report the right backend even when
     * multiple project DBs are open in the same process.
     */
    getBackend(): SqliteBackend;
    /**
     * Get database file path
     */
    getPath(): string;
    /**
     * The journal mode actually in effect (e.g. 'wal', 'delete').
     *
     * SQLite silently keeps the prior mode if WAL can't be enabled — e.g. on
     * filesystems without shared-memory support (some network/virtualized mounts,
     * WSL2 /mnt). So the effective mode can differ
     * from what `configureConnection` requested. Surfaced in `codegraph status` so
     * a "database is locked" report is triageable: 'wal' ⇒ readers never block on a
     * writer; anything else ⇒ they can. See issue #238.
     */
    getJournalMode(): string;
    /**
     * Get current schema version
     */
    getSchemaVersion(): SchemaVersion | null;
    /**
     * Execute a function within a transaction
     */
    transaction<T>(fn: () => T): T;
    /**
     * Get database file size in bytes
     */
    getSize(): number;
    /**
     * Optimize database (vacuum and analyze)
     */
    optimize(): void;
    /**
     * Lightweight, non-blocking maintenance to run after bulk writes
     * (indexAll, sync). Two operations:
     *
     *   - `PRAGMA optimize` — incremental ANALYZE; SQLite only re-analyzes
     *     tables whose row counts changed materially since the last
     *     ANALYZE. Without it, the query planner has no statistics on the
     *     freshly-bulk-loaded tables and can pick suboptimal indexes.
     *
     *   - `PRAGMA wal_checkpoint(PASSIVE)` — fold pending WAL pages back
     *     into the main database file so the WAL file doesn't grow
     *     unboundedly between automatic checkpoints (auto-fires at 1000
     *     pages by default; large indexAll runs blow past that).
     *
     * Both operations are silently swallowed on failure — they're a
     * best-effort optimization, never load-bearing for correctness.
     */
    runMaintenance(): void;
    /**
     * Close the database connection
     */
    close(): void;
    /**
     * Check if the database connection is open
     */
    isOpen(): boolean;
    /**
     * True when the DB file at our path has been REPLACED on disk since we opened
     * it — a different inode now lives at the same path, so the fd we still hold
     * points at a now-unlinked inode that can never receive new writes (#925).
     * The trigger is removing and recreating `.codegraph/` at the same path under
     * a long-lived process (`git worktree remove` + re-add, or `rm -rf
     * .codegraph` + `codegraph init`). Returns false when the inode is unchanged,
     * when the file is momentarily absent (mid-recreate — nothing to reopen onto
     * yet), or when the platform doesn't report a usable inode (Windows can't
     * unlink an open file and its st_ino is unreliable, so this never fires there).
     */
    isReplacedOnDisk(): boolean;
}
/**
 * Default database filename
 */
export declare const DATABASE_FILENAME = "codegraph.db";
/**
 * Get the default database path for a project
 */
export declare function getDatabasePath(projectRoot: string): string;
/**
 * Delete a database file and its WAL sidecars (`-wal`/`-shm`).
 *
 * This is how a FULL re-index discards an existing database — rather than
 * opening the old graph and DELETE-ing every row. On a large or pre-fix
 * poisoned index (e.g. an old graph that scanned an ignored gitlink corpus into
 * ~1.6M nodes with a multi-GB WAL, #1065) the per-row `nodes_fts` delete-trigger
 * churn blocks the main thread long enough to trip the #850 liveness watchdog
 * before indexing even starts, so the rebuild could never recover the bad state
 * (#1067). Unlinking is O(1) regardless of DB size and also reclaims the disk
 * the bloated WAL would otherwise keep.
 *
 * POSIX removes the directory entry even while another process (a daemon/MCP
 * server) still holds the file open; that holder heals via `reopenIfReplaced`
 * (#925). On Windows a live holder can make the unlink fail with EBUSY/EPERM —
 * that is thrown for the caller to surface ("stop the other process and retry").
 * The `-wal`/`-shm` sidecars are best-effort: SQLite recreates them on the next
 * open, so a leftover sidecar is harmless.
 */
export declare function removeDatabaseFiles(dbPath: string): void;
//# sourceMappingURL=index.d.ts.map