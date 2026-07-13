export interface InitializeLocationParams {
    rootUri?: string;
    workspaceFolders?: Array<{
        uri: string;
        name?: string;
    }>;
}
export interface InitializeInstructionContext {
    candidatePath: string;
    instructions: string;
}
/** Convert the MCP/LSP file URI shapes used for workspace roots to a path. */
export declare function fileUriToPath(uri: string): string;
/** Resolve only client-provided location data, strongest signal first. */
export declare function resolveInitializeExplicitPath(params: InitializeLocationParams | undefined): string | null;
/**
 * Build the cheap, synchronous initialize instructions shared by direct
 * sessions and the local-handshake proxy. Performs filesystem metadata reads
 * only; it never opens a CodeGraph database or waits for the daemon.
 */
export declare function buildInitializeInstructionContext(params: InitializeLocationParams | undefined, fallbackPath: string): InitializeInstructionContext;
//# sourceMappingURL=initialize-instructions.d.ts.map