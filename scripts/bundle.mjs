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
      'src/bin/codegraph.ts',
      'src/bin/node-version-check.ts',
      'src/bin/uninstall.ts',
    ],
    outdir: 'dist/bin',
  }),
  build({
    ...common,
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.js',
  }),
]);
