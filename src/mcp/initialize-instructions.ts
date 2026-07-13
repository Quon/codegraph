import * as path from 'path';
import { findNearestCodeGraphRoot } from '../directory';
import { buildMonorepoInstructions } from './monorepo-instructions';
import { SERVER_INSTRUCTIONS, SERVER_INSTRUCTIONS_NO_ROOT_INDEX } from './server-instructions';

export interface InitializeLocationParams {
  rootUri?: string;
  workspaceFolders?: Array<{ uri: string; name?: string }>;
}

export interface InitializeInstructionContext {
  candidatePath: string;
  instructions: string;
}

/** Convert the MCP/LSP file URI shapes used for workspace roots to a path. */
export function fileUriToPath(uri: string): string {
  try {
    const url = new URL(uri);
    let filePath = decodeURIComponent(url.pathname);
    if (process.platform === 'win32' && /^\/[a-zA-Z]:/.test(filePath)) {
      filePath = filePath.slice(1);
    }
    return path.resolve(filePath);
  } catch {
    return path.resolve(uri.replace(/^file:\/\/\/?/, ''));
  }
}

/** Resolve only client-provided location data, strongest signal first. */
export function resolveInitializeExplicitPath(
  params: InitializeLocationParams | undefined,
): string | null {
  if (params?.rootUri) return fileUriToPath(params.rootUri);
  if (params?.workspaceFolders?.[0]?.uri) return fileUriToPath(params.workspaceFolders[0].uri);
  return null;
}

/**
 * Build the cheap, synchronous initialize instructions shared by direct
 * sessions and the local-handshake proxy. Performs filesystem metadata reads
 * only; it never opens a CodeGraph database or waits for the daemon.
 */
export function buildInitializeInstructionContext(
  params: InitializeLocationParams | undefined,
  fallbackPath: string,
): InitializeInstructionContext {
  const candidatePath = resolveInitializeExplicitPath(params) ?? path.resolve(fallbackPath);
  const indexed = findNearestCodeGraphRoot(candidatePath) !== null;
  const baseInstructions = indexed ? SERVER_INSTRUCTIONS : SERVER_INSTRUCTIONS_NO_ROOT_INDEX;
  const monorepoInstructions = buildMonorepoInstructions(candidatePath);
  return {
    candidatePath,
    instructions: monorepoInstructions
      ? `${baseInstructions.trimEnd()}\n\n${monorepoInstructions}`
      : baseInstructions,
  };
}
