/**
 * OpenAI Codex CLI target.
 *
 *   - MCP server entry to `$CODEX_HOME/config.toml` when `CODEX_HOME`
 *     is set, otherwise `~/.codex/config.toml`, as the dotted-key
 *     table `[mcp_servers.codegraph]`. TOML — not JSON — handled by
 *     the narrow serializer in `./toml.ts`.
 *   - Instructions to the matching `AGENTS.md`.
 *
 * Codex CLI as of 2026-05 has no project-local config concept —
 * everything lives under the Codex home dir. `supportsLocation('local')`
 * returns false; the orchestrator skips Codex when the user picks
 * the local install location.
 *
 * No permissions concept.
 */
import { AgentTarget } from './types';
export declare const codexTarget: AgentTarget;
//# sourceMappingURL=codex.d.ts.map