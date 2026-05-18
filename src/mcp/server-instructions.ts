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

export const SERVER_INSTRUCTIONS = `# Codegraph — code intelligence

SQLite knowledge graph of every symbol, edge, and file. Consult it BEFORE writing code.

## Tool by intent

| Question | Tool |
|---|---|
| Find symbol by name | \`codegraph_search\` |
| Understand a task/feature/area | \`codegraph_context\` ← PRIMARY |
| What calls this? | \`codegraph_callers\` |
| What does this call? | \`codegraph_callees\` |
| What breaks if I change this? | \`codegraph_impact\` |
| Full source of one symbol | \`codegraph_node\` |
| Survey an unfamiliar module | \`codegraph_explore\` |
| Directory structure | \`codegraph_files\` |

Use \`codegraph_context\` first — it composes search + callers + callees in one call.
Don't grep for symbol names; \`codegraph_search\` is faster.
Don't chain search → node when you want context — that's one \`codegraph_context\` call.
`;

/**
 * Build the full instructions string for the MCP initialize response.
 * Appends a monorepo section when sub-projects are registered.
 */
export function buildInstructions(projects: ProjectEntry[]): string {
  if (projects.length === 0) return SERVER_INSTRUCTIONS;

  return SERVER_INSTRUCTIONS + `
## Monorepo

This workspace has multiple indexed sub-projects. Pass \`project: "<name>"\` to any tool to target one, or \`project: "*"\` for all.

${projects.map((e) => `- **${e.name}** → \`${e.path}\``).join('\n')}
`;
}

