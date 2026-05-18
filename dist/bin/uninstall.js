#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/bin/uninstall.ts
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));
var os = __toESM(require("os"));
var CODEGRAPH_SECTION_START = "<!-- CODEGRAPH_START -->";
var CODEGRAPH_SECTION_END = "<!-- CODEGRAPH_END -->";
function readJson(filePath) {
  try {
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return null;
  }
}
function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n");
}
function removeMcpConfig() {
  const filePath = path.join(os.homedir(), ".claude.json");
  const config = readJson(filePath);
  if (!config?.mcpServers?.codegraph) return;
  delete config.mcpServers.codegraph;
  if (Object.keys(config.mcpServers).length === 0) {
    delete config.mcpServers;
  }
  writeJson(filePath, config);
}
function removeSettings() {
  const filePath = path.join(os.homedir(), ".claude", "settings.json");
  const settings = readJson(filePath);
  if (!settings) return;
  if (Array.isArray(settings.permissions?.allow)) {
    const before = settings.permissions.allow.length;
    settings.permissions.allow = settings.permissions.allow.filter(
      (p) => !p.startsWith("mcp__codegraph__")
    );
    if (settings.permissions.allow.length === before) return;
    if (settings.permissions.allow.length === 0) {
      delete settings.permissions.allow;
    }
    if (Object.keys(settings.permissions).length === 0) {
      delete settings.permissions;
    }
    writeJson(filePath, settings);
  }
}
function removeClaudeMd() {
  const filePath = path.join(os.homedir(), ".claude", "CLAUDE.md");
  try {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, "utf-8");
    const startIdx = content.indexOf(CODEGRAPH_SECTION_START);
    const endIdx = content.indexOf(CODEGRAPH_SECTION_END);
    if (startIdx !== -1 && endIdx > startIdx) {
      const before = content.substring(0, startIdx).trimEnd();
      const after = content.substring(endIdx + CODEGRAPH_SECTION_END.length).trimStart();
      content = before + (before && after ? "\n\n" : "") + after;
      if (content.trim() === "") {
        fs.unlinkSync(filePath);
      } else {
        fs.writeFileSync(filePath, content.trim() + "\n");
      }
    }
  } catch {
  }
}
try {
  removeMcpConfig();
} catch {
}
try {
  removeSettings();
} catch {
}
try {
  removeClaudeMd();
} catch {
}
