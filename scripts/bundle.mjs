import { build } from 'esbuild';

const external = ['better-sqlite3', 'web-tree-sitter', 'node-sqlite3-wasm', 'tree-sitter-wasms'];

const common = {
  bundle: true,
  platform: 'node',
  target: 'node20',
  format: 'cjs',
  external,
};

await Promise.all([
  build({
    ...common,
    entryPoints: [
      { in: 'src/bin/codegraph.ts',            out: 'codegraph' },
      { in: 'src/bin/node-version-check.ts',   out: 'node-version-check' },
      { in: 'src/bin/uninstall.ts',            out: 'uninstall' },
      { in: 'src/ui/shimmer-worker.ts',        out: 'shimmer-worker' },
      { in: 'src/extraction/parse-worker.ts',  out: 'parse-worker' },
    ],
    outdir: 'dist/bin',
  }),
  build({
    ...common,
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.js',
  }),
  // parse-worker must also live alongside dist/index.js for library consumers
  build({
    ...common,
    entryPoints: ['src/extraction/parse-worker.ts'],
    outfile: 'dist/parse-worker.js',
  }),
]);
