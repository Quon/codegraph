import fs from 'fs';
import path from 'path';

// Directories that need schema.sql — one per esbuild output __dirname
const schemaDirs = ['dist/db', 'dist/bin', 'dist'];

// Directories that need the WASM grammar files
const wasmDirs = ['dist/extraction/wasm', 'dist/bin/wasm', 'dist/wasm'];

for (const dir of [...schemaDirs, ...wasmDirs]) {
  fs.mkdirSync(dir, { recursive: true });
}

for (const dir of schemaDirs) {
  fs.copyFileSync('src/db/schema.sql', path.join(dir, 'schema.sql'));
}

for (const file of fs.readdirSync('src/extraction/wasm').filter(f => f.endsWith('.wasm'))) {
  for (const dir of wasmDirs) {
    fs.copyFileSync(path.join('src/extraction/wasm', file), path.join(dir, file));
  }
}
