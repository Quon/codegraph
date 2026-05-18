/**
 * Server-level instructions emitted in the MCP `initialize` response.
 *
 * MCP clients (Claude Code, Cursor, opencode, LangChain, OpenAI Agent
 * SDK, …) surface this text in the agent's system prompt automatically,
 * giving the agent a high-level playbook for the codegraph toolset
 * before it sees individual tool descriptions.
 *
 * Goals when editing this:
 *   - Tool selection by intent (which tool for which question)
 *   - Common chains (refactor planning = X then Y)
 *   - Anti-patterns (don't grep when codegraph_search is faster)
 *
 * Keep it tight. The agent reads this every session — long instructions
 * burn tokens. Reference only tools that exist on `main`; gate any
 * conditional tools behind feature checks if/when they ship.
 */
import type { ProjectEntry } from '../projects';
export declare const SERVER_INSTRUCTIONS = "# Codegraph \u2014 code intelligence\n\nSQLite knowledge graph of every symbol, edge, and file. Consult it BEFORE writing code.\n\n## Tool by intent\n\n| Question | Tool |\n|---|---|\n| Find symbol by name | `codegraph_search` |\n| Understand a task/feature/area | `codegraph_context` \u2190 PRIMARY |\n| What calls this? | `codegraph_callers` |\n| What does this call? | `codegraph_callees` |\n| What breaks if I change this? | `codegraph_impact` |\n| Full source of one symbol | `codegraph_node` |\n| Survey an unfamiliar module | `codegraph_explore` |\n| Directory structure | `codegraph_files` |\n\nUse `codegraph_context` first \u2014 it composes search + callers + callees in one call.\nDon't grep for symbol names; `codegraph_search` is faster.\nDon't chain search \u2192 node when you want context \u2014 that's one `codegraph_context` call.\n";
/**
 * Build the full instructions string for the MCP initialize response.
 * Appends a monorepo section when sub-projects are registered.
 */
export declare function buildInstructions(projects: ProjectEntry[]): string;
//# sourceMappingURL=server-instructions.d.ts.map