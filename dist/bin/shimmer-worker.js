"use strict";

// src/ui/shimmer-worker.ts
var import_worker_threads = require("worker_threads");
var import_fs = require("fs");
function writeStdout(s) {
  (0, import_fs.writeSync)(1, s);
}
var SPINNER_GLYPHS = ["\xB7", "\u2722", "\u2733", "\u2736", "\u273B", "\u273D"];
var ANIM_INTERVAL = 150;
var FRAMES_PER_GLYPH = 3;
var RST = "\x1B[0m";
var DM = "\x1B[2m";
var GRN = "\x1B[32m";
var BOLD = "\x1B[1m";
var startTime = import_worker_threads.workerData.startTime;
function animFrame() {
  return Math.floor((Date.now() - startTime) / ANIM_INTERVAL);
}
function lerp(a, b, t) {
  return Math.round(a + (b - a) * t);
}
function shimmerColor(frame) {
  const t = (Math.sin(frame * 2 * Math.PI / 13) + 1) / 2;
  const r = lerp(160, 251, t);
  const g = lerp(100, 191, t);
  const b = lerp(9, 36, t);
  return `\x1B[38;2;${r};${g};${b}m${BOLD}`;
}
function formatNumber(n) {
  return n.toLocaleString();
}
function renderBar(frame, filled, empty) {
  if (filled === 0) return `${DM}${"\u2591".repeat(empty)}${RST}`;
  const cycleFrames = 24;
  const shimmerPos = frame % cycleFrames / cycleFrames * (filled + 6) - 3;
  const shimmerWidth = 3;
  let bar = "";
  for (let i = 0; i < filled; i++) {
    const dist = Math.abs(i - shimmerPos);
    const t = Math.max(0, 1 - dist / shimmerWidth);
    const r = lerp(160, 251, t);
    const g = lerp(100, 191, t);
    const b = lerp(9, 36, t);
    bar += `\x1B[38;2;${r};${g};${b}m${BOLD}\u2588`;
  }
  bar += `${RST}${DM}${"\u2591".repeat(empty)}${RST}`;
  return bar;
}
var currentMessage = "";
var currentPercent = -1;
var currentCount = 0;
function render() {
  if (!currentMessage) return;
  const frame = animFrame();
  const glyphIdx = Math.floor(frame / FRAMES_PER_GLYPH) % SPINNER_GLYPHS.length;
  const glyph = SPINNER_GLYPHS[glyphIdx] ?? "\xB7";
  const color = shimmerColor(frame);
  let line;
  if (currentPercent >= 0) {
    const barWidth = 25;
    const filled = Math.round(barWidth * currentPercent / 100);
    const empty = barWidth - filled;
    line = `${DM}\u2502${RST}  ${color}${glyph}${RST} ${currentMessage}  ${renderBar(frame, filled, empty)}  ${currentPercent}%`;
  } else if (currentCount > 0) {
    line = `${DM}\u2502${RST}  ${color}${glyph}${RST} ${currentMessage}... ${formatNumber(currentCount)} found`;
  } else {
    line = `${DM}\u2502${RST}  ${color}${glyph}${RST} ${currentMessage}...`;
  }
  writeStdout(`\r\x1B[K${line}`);
}
function finishPhase() {
  if (!currentMessage) return;
  writeStdout(`\r\x1B[K`);
  let detail = "";
  if (currentPercent >= 0) detail = " \u2014 done";
  else if (currentCount > 0) detail = ` \u2014 ${formatNumber(currentCount)} found`;
  writeStdout(`${DM}\u2502${RST}  ${GRN}\u25C6${RST} ${currentMessage}${detail}
`);
  currentMessage = "";
  currentPercent = -1;
  currentCount = 0;
}
var tickInterval = setInterval(render, 50);
import_worker_threads.parentPort.on("message", (msg) => {
  if (msg.type === "update") {
    currentMessage = msg.phaseName;
    currentPercent = msg.percent;
    currentCount = msg.count;
  } else if (msg.type === "finish-phase") {
    finishPhase();
  } else if (msg.type === "stop") {
    clearInterval(tickInterval);
    finishPhase();
    import_worker_threads.parentPort.postMessage({ type: "stopped" });
  }
});
