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
exports.fileUriToPath = fileUriToPath;
exports.resolveInitializeExplicitPath = resolveInitializeExplicitPath;
exports.buildInitializeInstructionContext = buildInitializeInstructionContext;
const path = __importStar(require("path"));
const directory_1 = require("../directory");
const monorepo_instructions_1 = require("./monorepo-instructions");
const server_instructions_1 = require("./server-instructions");
/** Convert the MCP/LSP file URI shapes used for workspace roots to a path. */
function fileUriToPath(uri) {
    try {
        const url = new URL(uri);
        let filePath = decodeURIComponent(url.pathname);
        if (process.platform === 'win32' && /^\/[a-zA-Z]:/.test(filePath)) {
            filePath = filePath.slice(1);
        }
        return path.resolve(filePath);
    }
    catch {
        return path.resolve(uri.replace(/^file:\/\/\/?/, ''));
    }
}
/** Resolve only client-provided location data, strongest signal first. */
function resolveInitializeExplicitPath(params) {
    if (params?.rootUri)
        return fileUriToPath(params.rootUri);
    if (params?.workspaceFolders?.[0]?.uri)
        return fileUriToPath(params.workspaceFolders[0].uri);
    return null;
}
/**
 * Build the cheap, synchronous initialize instructions shared by direct
 * sessions and the local-handshake proxy. Performs filesystem metadata reads
 * only; it never opens a CodeGraph database or waits for the daemon.
 */
function buildInitializeInstructionContext(params, fallbackPath) {
    const candidatePath = resolveInitializeExplicitPath(params) ?? path.resolve(fallbackPath);
    const indexed = (0, directory_1.findNearestCodeGraphRoot)(candidatePath) !== null;
    const baseInstructions = indexed ? server_instructions_1.SERVER_INSTRUCTIONS : server_instructions_1.SERVER_INSTRUCTIONS_NO_ROOT_INDEX;
    const monorepoInstructions = (0, monorepo_instructions_1.buildMonorepoInstructions)(candidatePath);
    return {
        candidatePath,
        instructions: monorepoInstructions
            ? `${baseInstructions.trimEnd()}\n\n${monorepoInstructions}`
            : baseInstructions,
    };
}
//# sourceMappingURL=initialize-instructions.js.map