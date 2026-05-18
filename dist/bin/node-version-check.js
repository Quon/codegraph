"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/bin/node-version-check.ts
var node_version_check_exports = {};
__export(node_version_check_exports, {
  buildNodeBlockBanner: () => buildNodeBlockBanner
});
module.exports = __toCommonJS(node_version_check_exports);
function buildNodeBlockBanner(nodeVersion) {
  const sep = "\u2500".repeat(72);
  return [
    sep,
    `[CodeGraph] Unsupported Node.js version: ${nodeVersion}`,
    sep,
    "Node.js 25.x has a V8 WASM JIT (turboshaft) Zone allocator bug that",
    "crashes with `Fatal process out of memory: Zone` when CodeGraph",
    "compiles tree-sitter grammars. CodeGraph WILL crash on this Node",
    "version mid-indexing. See https://github.com/colbymchenry/codegraph/issues/81",
    "",
    "Fix: install Node.js 22 LTS:",
    "  nvm install 22 && nvm use 22                          # nvm",
    "  brew install node@22 && brew link --overwrite --force node@22  # Homebrew",
    "",
    "To override (NOT recommended \u2014 you will likely OOM):",
    "  CODEGRAPH_ALLOW_UNSAFE_NODE=1 codegraph ...",
    sep
  ].join("\n");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  buildNodeBlockBanner
});
