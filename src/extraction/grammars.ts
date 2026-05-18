/**
 * Grammar Loading and Caching
 *
 * Uses web-tree-sitter (WASM) for universal cross-platform support.
 * Grammars are loaded lazily — only languages actually present in the project
 * are compiled, keeping V8 WASM memory pressure low on large codebases.
 */

import * as path from 'path';
import { Parser, Language as WasmLanguage } from 'web-tree-sitter';
import { Language } from '../types';

export type GrammarLanguage = Exclude<Language, 'svelte' | 'vue' | 'liquid' | 'unknown'>;

/**
 * WASM filename map — maps each language to its .wasm grammar file
 * in the tree-sitter-wasms package.
 */
const WASM_GRAMMAR_FILES: Record<GrammarLanguage, string> = {
  typescript: 'tree-sitter-typescript.wasm',
  tsx: 'tree-sitter-tsx.wasm',
  javascript: 'tree-sitter-javascript.wasm',
  jsx: 'tree-sitter-javascript.wasm',
  python: 'tree-sitter-python.wasm',
  go: 'tree-sitter-go.wasm',
  rust: 'tree-sitter-rust.wasm',
  java: 'tree-sitter-java.wasm',
  c: 'tree-sitter-c.wasm',
  cpp: 'tree-sitter-cpp.wasm',
  csharp: 'tree-sitter-c_sharp.wasm',
  php: 'tree-sitter-php.wasm',
  ruby: 'tree-sitter-ruby.wasm',
  swift: 'tree-sitter-swift.wasm',
  kotlin: 'tree-sitter-kotlin.wasm',
  dart: 'tree-sitter-dart.wasm',
  pascal: 'tree-sitter-pascal.wasm',
  scala: 'tree-sitter-scala.wasm',
};

/**
 * File extension to Language mapping
 */
export const EXTENSION_MAP: Record<string, Language> = {
  '.ts': 'typescript',
  '.tsx': 'tsx',
  '.js': 'javascript',
  '.mjs': 'javascript',
  '.cjs': 'javascript',
  '.jsx': 'jsx',
  '.py': 'python',
  '.pyw': 'python',
  '.go': 'go',
  '.rs': 'rust',
  '.java': 'java',
  '.c': 'c',
  '.h': 'c', // Could also be C++, defaulting to C
  '.cpp': 'cpp',
  '.cc': 'cpp',
  '.cxx': 'cpp',
  '.hpp': 'cpp',
  '.hxx': 'cpp',
  '.cs': 'csharp',
  '.php': 'php',
  '.rb': 'ruby',
  '.rake': 'ruby',
  '.swift': 'swift',
  '.kt': 'kotlin',
  '.kts': 'kotlin',
  '.dart': 'dart',
  '.liquid': 'liquid',
  '.svelte': 'svelte',
  '.vue': 'vue',
  '.pas': 'pascal',
  '.dpr': 'pascal',
  '.dpk': 'pascal',
  '.lpr': 'pascal',
  '.dfm': 'pascal',
  '.fmx': 'pascal',
  '.scala': 'scala',
  '.sc': 'scala',
};

/**
 * Caches for loaded grammars and parsers
 */
const parserCache = new Map<Language, Parser>();
const languageCache = new Map<Language, WasmLanguage>();
const unavailableGrammarErrors = new Map<Language, string>();

let parserInitialized = false;

// Deduplicate concurrent initGrammars() calls
let initPromise: Promise<void> | null = null;

// Global WASM load queue — web-tree-sitter is not safe for concurrent
// WasmLanguage.load() calls on Node 20+ (https://github.com/tree-sitter/tree-sitter/issues/2338).
// All grammar loads are chained onto this promise so they execute one at a time.
let loadQueue: Promise<void> = Promise.resolve();

// Per-language in-progress promise — concurrent callers for the same language
// join the existing promise instead of starting a duplicate load.
const loadingPromises = new Map<GrammarLanguage, Promise<void>>();

/**
 * Initialize the tree-sitter WASM runtime. Must be called before loading grammars.
 * Does NOT load any grammar WASM files — use loadGrammarsForLanguages() for that.
 * Idempotent — safe to call multiple times.
 */
export async function initGrammars(): Promise<void> {
  if (parserInitialized) return;
  if (!initPromise) {
    initPromise = Parser.init().then(() => { parserInitialized = true; });
  }
  await initPromise;
}

/**
 * Load grammar WASM files for specific languages only.
 * Skips languages that are already loaded or have no WASM grammar.
 * Must be called after initGrammars().
 */
export async function loadGrammarsForLanguages(languages: Language[]): Promise<void> {
  if (!parserInitialized) {
    await initGrammars();
  }

  const toLoad = [...new Set(languages)].filter(
    (lang): lang is GrammarLanguage =>
      lang in WASM_GRAMMAR_FILES &&
      !languageCache.has(lang) &&
      !unavailableGrammarErrors.has(lang)
  );

  if (toLoad.length === 0) return;

  // For each language, join an existing in-progress load or schedule a new one.
  // All loads are chained onto loadQueue so they execute strictly one at a time
  // (web-tree-sitter WASM race condition on Node 20+).
  //
  // Note: loadingPromises is populated synchronously before any await, so a
  // second concurrent caller that checks the map after the first caller's
  // synchronous setup will always find the entry and reuse it.
  const promises = toLoad.map((lang) => {
    if (loadingPromises.has(lang)) {
      return loadingPromises.get(lang)!;
    }

    const p = loadQueue.then(async () => {
      // Re-check after waiting in queue: an earlier entry may have loaded this
      if (languageCache.has(lang) || unavailableGrammarErrors.has(lang)) return;

      const wasmFile = WASM_GRAMMAR_FILES[lang];
      try {
        const wasmPath =
          lang === 'pascal' || lang === 'scala'
            ? path.join(__dirname, 'wasm', wasmFile)
            : require.resolve(`tree-sitter-wasms/out/${wasmFile}`);
        const language = await WasmLanguage.load(wasmPath);
        languageCache.set(lang, language);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.warn(
          `[CodeGraph] Failed to load ${lang} grammar — parsing will be unavailable: ${message}`
        );
        unavailableGrammarErrors.set(lang, message);
      }
    }).finally(() => {
      loadingPromises.delete(lang);
    });

    // Advance the global queue (swallow errors so one bad load doesn't block the chain)
    loadQueue = p.catch(() => {});
    loadingPromises.set(lang, p);
    return p;
  });

  await Promise.all(promises);
}

/**
 * Load ALL grammar WASM files. Convenience function for tests and
 * backward compatibility. Prefer loadGrammarsForLanguages() in production.
 */
export async function loadAllGrammars(): Promise<void> {
  const allLanguages = Object.keys(WASM_GRAMMAR_FILES) as GrammarLanguage[];
  await loadGrammarsForLanguages(allLanguages);
}

/**
 * Check if grammars have been initialized
 */
export function isGrammarsInitialized(): boolean {
  return parserInitialized;
}

/**
 * Get a parser for the specified language.
 * Returns synchronously from pre-loaded cache.
 */
export function getParser(language: Language): Parser | null {
  if (parserCache.has(language)) {
    return parserCache.get(language)!;
  }

  const lang = languageCache.get(language);
  if (!lang) {
    return null;
  }

  const parser = new Parser();
  parser.setLanguage(lang);
  parserCache.set(language, parser);
  return parser;
}

/**
 * Detect language from file extension
 */
export function detectLanguage(filePath: string, source?: string): Language {
  const ext = filePath.substring(filePath.lastIndexOf('.')).toLowerCase();
  const lang = EXTENSION_MAP[ext] || 'unknown';

  // .h files could be C or C++ — check source content for C++ features
  if (lang === 'c' && ext === '.h' && source) {
    if (looksLikeCpp(source)) return 'cpp';
  }

  return lang;
}

/**
 * Heuristic: does a .h file contain C++ constructs?
 * Checks the first ~8KB for patterns that are unique to C++ and never valid C.
 */
function looksLikeCpp(source: string): boolean {
  const sample = source.substring(0, 8192);
  return /\bnamespace\b|\bclass\s+\w+\s*[:{]|\btemplate\s*<|\b(?:public|private|protected)\s*:|\bvirtual\b|\busing\s+(?:namespace\b|\w+\s*=)/.test(sample);
}

/**
 * Check if a language is supported (has a grammar defined).
 * Returns true if the grammar exists, even if not yet loaded.
 */
export function isLanguageSupported(language: Language): boolean {
  if (language === 'svelte') return true; // custom extractor (script block delegation)
  if (language === 'vue') return true; // custom extractor (script block delegation)
  if (language === 'liquid') return true; // custom regex extractor
  if (language === 'unknown') return false;
  return language in WASM_GRAMMAR_FILES;
}

/**
 * Check if a grammar has been loaded and is ready for parsing.
 */
export function isGrammarLoaded(language: Language): boolean {
  if (language === 'svelte' || language === 'vue' || language === 'liquid') return true;
  return languageCache.has(language);
}

/**
 * Get all supported languages (those with grammar definitions).
 */
export function getSupportedLanguages(): Language[] {
  return [...(Object.keys(WASM_GRAMMAR_FILES) as GrammarLanguage[]), 'svelte', 'vue', 'liquid'];
}

/**
 * Reset the cached parser for a language to reclaim WASM heap memory.
 * The tree-sitter WASM runtime accumulates fragmented memory over thousands
 * of parses. Deleting and recreating the Parser instance forces the WASM
 * heap to reset, preventing "memory access out of bounds" crashes in
 * large repos.
 */
export function resetParser(language: Language): void {
  const old = parserCache.get(language);
  if (old) {
    old.delete();
    parserCache.delete(language);
  }
}

/**
 * Clear parser/grammar caches (useful for testing)
 */
export function clearParserCache(): void {
  for (const parser of parserCache.values()) {
    parser.delete();
  }
  parserCache.clear();
  // Note: languageCache is NOT cleared — WASM languages persist.
  // To fully re-init, set parserInitialized = false and call initGrammars() again.
  unavailableGrammarErrors.clear();
}

/**
 * Report grammars that failed to load.
 */
export function getUnavailableGrammarErrors(): Partial<Record<Language, string>> {
  const out: Partial<Record<Language, string>> = {};
  for (const [language, message] of unavailableGrammarErrors.entries()) {
    out[language] = message;
  }
  return out;
}

/**
 * Get language display name
 */
export function getLanguageDisplayName(language: Language): string {
  const names: Record<Language, string> = {
    typescript: 'TypeScript',
    javascript: 'JavaScript',
    tsx: 'TypeScript (TSX)',
    jsx: 'JavaScript (JSX)',
    python: 'Python',
    go: 'Go',
    rust: 'Rust',
    java: 'Java',
    c: 'C',
    cpp: 'C++',
    csharp: 'C#',
    php: 'PHP',
    ruby: 'Ruby',
    swift: 'Swift',
    kotlin: 'Kotlin',
    dart: 'Dart',
    svelte: 'Svelte',
    vue: 'Vue',
    liquid: 'Liquid',
    pascal: 'Pascal / Delphi',
    scala: 'Scala',
    unknown: 'Unknown',
  };
  return names[language] || language;
}
