# AGENTS.md

This file provides guidance to Codex and other coding agents when working in this repository.

## Project Overview

CodeGraph is a local-first code intelligence system that builds a semantic knowledge graph from any codebase. It provides structural understanding of code relationships using tree-sitter for AST parsing and SQLite for storage.

Key characteristics:
- Headless library with no UI; it exposes an API, CLI, and MCP server.
- Node.js runtime, usable standalone or in Node-based environments.
- Per-project data is stored in a `.codegraph/` directory.
- Extraction is deterministic from ASTs, not AI-generated summaries.

## Commands

Use `rtk` when running shell commands in this repo.

```bash
# Build
rtk npm run build

# Test
rtk npm test
rtk npm run test:watch

# Single test file
rtk npx vitest run __tests__/extraction.test.ts
rtk npx vitest run __tests__/extraction.test.ts -t "TypeScript"

# Clean generated output
rtk npm run clean
```

## Architecture

Core source layout:

```text
src/
|-- index.ts              # Main CodeGraph class and public API entry point
|-- types.ts              # TypeScript interfaces and shared types
|-- db/                   # SQLite database layer
|   |-- index.ts          # DatabaseConnection
|   |-- queries.ts        # QueryBuilder with prepared statements
|   `-- schema.sql        # Tables, indexes, and FTS5 search
|-- extraction/           # Tree-sitter AST parsing and language extractors
|   |-- index.ts          # ExtractionOrchestrator
|   |-- tree-sitter.ts    # Universal parser wrapper
|   `-- grammars.ts       # Language detection and grammar loading
|-- resolution/           # Reference resolver
|   |-- index.ts          # ReferenceResolver orchestrator
|   |-- import-resolver.ts
|   |-- name-matcher.ts
|   `-- frameworks/       # Framework-specific patterns
|-- graph/                # Graph traversal and graph queries
|   |-- index.ts          # GraphQueryManager
|   |-- traversal.ts      # GraphTraverser
|   `-- queries.ts        # High-level graph queries
|-- context/              # Context building for AI assistants
|-- sync/                 # Incremental update and file watching
|-- installer/            # Interactive installer and config writers
|-- mcp/                  # Model Context Protocol server and tools
`-- bin/codegraph.ts      # CLI entry point
```

Key classes:
- `CodeGraph` in `src/index.ts`: lifecycle, indexing, sync, graph queries, and context building.
- `ExtractionOrchestrator` in `src/extraction/index.ts`: file scanning, parsing, and storing.
- `ReferenceResolver` in `src/resolution/index.ts`: unresolved reference resolution through framework patterns, imports, and name matching.
- `GraphTraverser` in `src/graph/traversal.ts`: BFS/DFS traversal, call graphs, impact radius, and path finding.
- `MCPServer` in `src/mcp/index.ts`: stdio MCP server for CodeGraph tools.

## Data Model

SQLite database tables include:
- `nodes`: code symbols such as files, classes, functions, methods, imports, routes, and components.
- `edges`: relationships such as `contains`, `calls`, `imports`, `extends`, `implements`, and `references`.
- `files`: tracked source files with content hashes and indexing metadata.
- `unresolved_refs`: references pending post-index resolution.
- `nodes_fts`: FTS5 index for node search.

Supported languages include TypeScript, JavaScript, TSX, JSX, Svelte, Vue, Python, Go, Rust, Java, C, C++, C#, PHP, Ruby, Swift, Kotlin, Dart, Liquid, Pascal, and Scala.

## CLI Usage

```bash
codegraph init [path]       # Initialize in project
codegraph index [path]      # Full index
codegraph sync [path]       # Incremental update
codegraph status [path]     # Show statistics
codegraph query <search>    # Search symbols
codegraph context <task>    # Build context for AI
codegraph affected [files]  # Find affected tests/files
codegraph serve --mcp       # Start MCP server
```

## CodeGraph MCP Guidance

If this repository's CodeGraph MCP server is available, prefer it for code exploration before broad filesystem searches.

Useful tools:
- `codegraph_explore`: deep exploration for a specific symbol, file, or topic.
- `codegraph_context`: task-oriented context with relevant symbols and code.
- `codegraph_search`: symbol search by name.
- `codegraph_callers` and `codegraph_callees`: call flow.
- `codegraph_impact`: impact analysis before changing a symbol.
- `codegraph_node`: details and optional source for a single symbol.
- `codegraph_files`: indexed file tree and metadata.

CodeGraph provides code context, not product requirements. For new features, still clarify user-facing behavior, edge cases, and acceptance criteria when they are not already specified.

## Pre-Push Privacy Review

Before pushing to a public repository, conduct a privacy review. Check for:
- Hardcoded secrets, API keys, tokens, or credentials.
- Personal information such as real names, emails, and internal usernames.
- Internal hostnames, IPs, or infrastructure URLs.
- `.env` files or credential files not covered by `.gitignore`.
- Debug or scratch scripts committed to the repo root.
- Stale package names, GitHub URLs, or author identity references in source, docs, and `dist/`.
- Internal planning documents under `docs/` that should not be public.

Do not push or publish until all Medium-severity and above findings are resolved.

## Releases

Releases are published to npm and mirrored as GitHub Releases. `CHANGELOG.md` is the source of truth.

When writing a changelog entry for a new version:
1. Add `## [X.Y.Z] - YYYY-MM-DD` at the top of `CHANGELOG.md`, directly under the intro and above the previous version.
2. Group changes under standard headings such as `Added`, `Changed`, `Fixed`, `Removed`, `Deprecated`, and `Security`. Only include sections with entries.
3. Write entries from the user's perspective. Lead with the observable symptom or capability, and mention internals only when useful.
4. Add the link reference at the bottom: `[X.Y.Z]: https://github.com/colbymchenry/codegraph/releases/tag/vX.Y.Z`.

Do not run `npm publish`, `git tag`, `git push`, or `gh release create` unless the user explicitly asks for those shared-state operations.

## Tests

Tests live in `__tests__/` and mirror the major modules:
- `foundation.test.ts`: database, config, and directory management.
- `extraction.test.ts`: tree-sitter parsing and language extraction.
- `resolution.test.ts`: reference resolution.
- `graph.test.ts`: traversal and graph queries.
- `context.test.ts`: context building.
- `sync.test.ts` and `watcher.test.ts`: incremental updates and file watching.
- `installer.test.ts`: installer/config writing.
- `projects.test.ts`: monorepo sub-project registry.

Tests use temporary directories created with `fs.mkdtempSync` and clean them up after each test.
