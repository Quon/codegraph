"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// node_modules/picomatch/lib/constants.js
var require_constants = __commonJS({
  "node_modules/picomatch/lib/constants.js"(exports2, module2) {
    "use strict";
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DEFAULT_MAX_EXTGLOB_RECURSION = 0;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var SEP = "/";
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR,
      SEP
    };
    var WINDOWS_CHARS = {
      ...POSIX_CHARS,
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`,
      SEP: "\\"
    };
    var POSIX_REGEX_SOURCE = {
      __proto__: null,
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module2.exports = {
      DEFAULT_MAX_EXTGLOB_RECURSION,
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      // regular expressions
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      // Replace globs with equivalent patterns to reduce parsing time.
      REPLACEMENTS: {
        __proto__: null,
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      // Digits
      CHAR_0: 48,
      /* 0 */
      CHAR_9: 57,
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: 65,
      /* A */
      CHAR_LOWERCASE_A: 97,
      /* a */
      CHAR_UPPERCASE_Z: 90,
      /* Z */
      CHAR_LOWERCASE_Z: 122,
      /* z */
      CHAR_LEFT_PARENTHESES: 40,
      /* ( */
      CHAR_RIGHT_PARENTHESES: 41,
      /* ) */
      CHAR_ASTERISK: 42,
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: 38,
      /* & */
      CHAR_AT: 64,
      /* @ */
      CHAR_BACKWARD_SLASH: 92,
      /* \ */
      CHAR_CARRIAGE_RETURN: 13,
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: 94,
      /* ^ */
      CHAR_COLON: 58,
      /* : */
      CHAR_COMMA: 44,
      /* , */
      CHAR_DOT: 46,
      /* . */
      CHAR_DOUBLE_QUOTE: 34,
      /* " */
      CHAR_EQUAL: 61,
      /* = */
      CHAR_EXCLAMATION_MARK: 33,
      /* ! */
      CHAR_FORM_FEED: 12,
      /* \f */
      CHAR_FORWARD_SLASH: 47,
      /* / */
      CHAR_GRAVE_ACCENT: 96,
      /* ` */
      CHAR_HASH: 35,
      /* # */
      CHAR_HYPHEN_MINUS: 45,
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: 60,
      /* < */
      CHAR_LEFT_CURLY_BRACE: 123,
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: 91,
      /* [ */
      CHAR_LINE_FEED: 10,
      /* \n */
      CHAR_NO_BREAK_SPACE: 160,
      /* \u00A0 */
      CHAR_PERCENT: 37,
      /* % */
      CHAR_PLUS: 43,
      /* + */
      CHAR_QUESTION_MARK: 63,
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      /* > */
      CHAR_RIGHT_CURLY_BRACE: 125,
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      /* ] */
      CHAR_SEMICOLON: 59,
      /* ; */
      CHAR_SINGLE_QUOTE: 39,
      /* ' */
      CHAR_SPACE: 32,
      /*   */
      CHAR_TAB: 9,
      /* \t */
      CHAR_UNDERSCORE: 95,
      /* _ */
      CHAR_VERTICAL_LINE: 124,
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      /* \uFEFF */
      /**
       * Create EXTGLOB_CHARS
       */
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      /**
       * Create GLOB_CHARS
       */
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});

// node_modules/picomatch/lib/utils.js
var require_utils = __commonJS({
  "node_modules/picomatch/lib/utils.js"(exports2) {
    "use strict";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants();
    exports2.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports2.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports2.isRegexChar = (str) => str.length === 1 && exports2.hasRegexChars(str);
    exports2.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports2.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports2.isWindows = () => {
      if (typeof navigator !== "undefined" && navigator.platform) {
        const platform = navigator.platform.toLowerCase();
        return platform === "win32" || platform === "windows";
      }
      if (typeof process !== "undefined" && process.platform) {
        return process.platform === "win32";
      }
      return false;
    };
    exports2.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports2.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1) return input;
      if (input[idx - 1] === "\\") return exports2.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports2.removePrefix = (input, state = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
      }
      return output;
    };
    exports2.wrapOutput = (input, state = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
    exports2.basename = (path3, { windows } = {}) => {
      const segs = path3.split(windows ? /[\\/]/ : "/");
      const last = segs[segs.length - 1];
      if (last === "") {
        return segs[segs.length - 2];
      }
      return last;
    };
  }
});

// node_modules/picomatch/lib/scan.js
var require_scan = __commonJS({
  "node_modules/picomatch/lib/scan.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    var {
      CHAR_ASTERISK,
      /* * */
      CHAR_AT,
      /* @ */
      CHAR_BACKWARD_SLASH,
      /* \ */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_EXCLAMATION_MARK,
      /* ! */
      CHAR_FORWARD_SLASH,
      /* / */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_PLUS,
      /* + */
      CHAR_QUESTION_MARK,
      /* ? */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_RIGHT_SQUARE_BRACKET
      /* ] */
    } = require_constants();
    var isPathSeparator = (code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };
    var depth = (token) => {
      if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
      }
    };
    var scan = (input, options) => {
      const opts = options || {};
      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];
      let str = input;
      let index = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token = { value: "", depth: 0, isGlob: false };
      const eos = () => index >= length;
      const peek = () => str.charCodeAt(index + 1);
      const advance = () => {
        prev = code;
        return str.charCodeAt(++index);
      };
      while (index < length) {
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          code = advance();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token);
          token = { value: "", depth: 0, isGlob: false };
          if (finished === true) continue;
          if (prev === CHAR_DOT && index === start + 1) {
            start += 2;
            continue;
          }
          lastIndex = index + 1;
          continue;
        }
        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            isExtglob = token.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index === start) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token.isBracket = true;
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
          negated = token.negated = true;
          start++;
          continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob) glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token);
        }
        state.tokens = tokens;
      }
      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value;
            }
            depth(tokens[idx]);
            state.maxDepth += tokens[idx].depth;
          }
          if (idx !== 0 || value !== "") {
            parts.push(value);
          }
          prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);
          if (opts.tokens) {
            tokens[tokens.length - 1].value = value;
            depth(tokens[tokens.length - 1]);
            state.maxDepth += tokens[tokens.length - 1].depth;
          }
        }
        state.slashes = slashes;
        state.parts = parts;
      }
      return state;
    };
    module2.exports = scan;
  }
});

// node_modules/picomatch/lib/parse.js
var require_parse = __commonJS({
  "node_modules/picomatch/lib/parse.js"(exports2, module2) {
    "use strict";
    var constants = require_constants();
    var utils = require_utils();
    var {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants;
    var expandRange = (args, options) => {
      if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils.escapeRegex(v)).join("..");
      }
      return value;
    };
    var syntaxError = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };
    var splitTopLevel = (input) => {
      const parts = [];
      let bracket = 0;
      let paren = 0;
      let quote = 0;
      let value = "";
      let escaped = false;
      for (const ch of input) {
        if (escaped === true) {
          value += ch;
          escaped = false;
          continue;
        }
        if (ch === "\\") {
          value += ch;
          escaped = true;
          continue;
        }
        if (ch === '"') {
          quote = quote === 1 ? 0 : 1;
          value += ch;
          continue;
        }
        if (quote === 0) {
          if (ch === "[") {
            bracket++;
          } else if (ch === "]" && bracket > 0) {
            bracket--;
          } else if (bracket === 0) {
            if (ch === "(") {
              paren++;
            } else if (ch === ")" && paren > 0) {
              paren--;
            } else if (ch === "|" && paren === 0) {
              parts.push(value);
              value = "";
              continue;
            }
          }
        }
        value += ch;
      }
      parts.push(value);
      return parts;
    };
    var isPlainBranch = (branch) => {
      let escaped = false;
      for (const ch of branch) {
        if (escaped === true) {
          escaped = false;
          continue;
        }
        if (ch === "\\") {
          escaped = true;
          continue;
        }
        if (/[?*+@!()[\]{}]/.test(ch)) {
          return false;
        }
      }
      return true;
    };
    var normalizeSimpleBranch = (branch) => {
      let value = branch.trim();
      let changed = true;
      while (changed === true) {
        changed = false;
        if (/^@\([^\\()[\]{}|]+\)$/.test(value)) {
          value = value.slice(2, -1);
          changed = true;
        }
      }
      if (!isPlainBranch(value)) {
        return;
      }
      return value.replace(/\\(.)/g, "$1");
    };
    var hasRepeatedCharPrefixOverlap = (branches) => {
      const values = branches.map(normalizeSimpleBranch).filter(Boolean);
      for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
          const a = values[i];
          const b = values[j];
          const char = a[0];
          if (!char || a !== char.repeat(a.length) || b !== char.repeat(b.length)) {
            continue;
          }
          if (a === b || a.startsWith(b) || b.startsWith(a)) {
            return true;
          }
        }
      }
      return false;
    };
    var parseRepeatedExtglob = (pattern, requireEnd = true) => {
      if (pattern[0] !== "+" && pattern[0] !== "*" || pattern[1] !== "(") {
        return;
      }
      let bracket = 0;
      let paren = 0;
      let quote = 0;
      let escaped = false;
      for (let i = 1; i < pattern.length; i++) {
        const ch = pattern[i];
        if (escaped === true) {
          escaped = false;
          continue;
        }
        if (ch === "\\") {
          escaped = true;
          continue;
        }
        if (ch === '"') {
          quote = quote === 1 ? 0 : 1;
          continue;
        }
        if (quote === 1) {
          continue;
        }
        if (ch === "[") {
          bracket++;
          continue;
        }
        if (ch === "]" && bracket > 0) {
          bracket--;
          continue;
        }
        if (bracket > 0) {
          continue;
        }
        if (ch === "(") {
          paren++;
          continue;
        }
        if (ch === ")") {
          paren--;
          if (paren === 0) {
            if (requireEnd === true && i !== pattern.length - 1) {
              return;
            }
            return {
              type: pattern[0],
              body: pattern.slice(2, i),
              end: i
            };
          }
        }
      }
    };
    var getStarExtglobSequenceOutput = (pattern) => {
      let index = 0;
      const chars = [];
      while (index < pattern.length) {
        const match = parseRepeatedExtglob(pattern.slice(index), false);
        if (!match || match.type !== "*") {
          return;
        }
        const branches = splitTopLevel(match.body).map((branch2) => branch2.trim());
        if (branches.length !== 1) {
          return;
        }
        const branch = normalizeSimpleBranch(branches[0]);
        if (!branch || branch.length !== 1) {
          return;
        }
        chars.push(branch);
        index += match.end + 1;
      }
      if (chars.length < 1) {
        return;
      }
      const source = chars.length === 1 ? utils.escapeRegex(chars[0]) : `[${chars.map((ch) => utils.escapeRegex(ch)).join("")}]`;
      return `${source}*`;
    };
    var repeatedExtglobRecursion = (pattern) => {
      let depth = 0;
      let value = pattern.trim();
      let match = parseRepeatedExtglob(value);
      while (match) {
        depth++;
        value = match.body.trim();
        match = parseRepeatedExtglob(value);
      }
      return depth;
    };
    var analyzeRepeatedExtglob = (body, options) => {
      if (options.maxExtglobRecursion === false) {
        return { risky: false };
      }
      const max = typeof options.maxExtglobRecursion === "number" ? options.maxExtglobRecursion : constants.DEFAULT_MAX_EXTGLOB_RECURSION;
      const branches = splitTopLevel(body).map((branch) => branch.trim());
      if (branches.length > 1) {
        if (branches.some((branch) => branch === "") || branches.some((branch) => /^[*?]+$/.test(branch)) || hasRepeatedCharPrefixOverlap(branches)) {
          return { risky: true };
        }
      }
      for (const branch of branches) {
        const safeOutput = getStarExtglobSequenceOutput(branch);
        if (safeOutput) {
          return { risky: true, safeOutput };
        }
        if (repeatedExtglobRecursion(branch) > max) {
          return { risky: true };
        }
      }
      return { risky: false };
    };
    var parse = (input, options) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts.prepend || "" };
      const tokens = [bos];
      const capture = opts.capture ? "" : "?:";
      const PLATFORM_CHARS = constants.globChars(opts.windows);
      const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;
      const globstar = (opts2) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const nodot = opts.dot ? "" : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
      }
      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };
      input = utils.removePrefix(input, state);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;
      const eos = () => state.index === len - 1;
      const peek = state.peek = (n = 1) => input[state.index + n];
      const advance = state.advance = () => input[++state.index] || "";
      const remaining = () => input.slice(state.index + 1);
      const consume = (value2 = "", num = 0) => {
        state.consumed += value2;
        state.index += num;
      };
      const append = (token) => {
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
      };
      const negate = () => {
        let count = 1;
        while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
          advance();
          state.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state.negated = true;
        state.start++;
        return true;
      };
      const increment = (type) => {
        state[type]++;
        stack.push(type);
      };
      const decrement = (type) => {
        state[type]--;
        stack.pop();
      };
      const push = (tok) => {
        if (prev.type === "globstar") {
          const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output) append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.output = (prev.output || prev.value) + tok.value;
          prev.value += tok.value;
          return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      };
      const extglobOpen = (type, value2) => {
        const token = { ...EXTGLOB_CHARS[value2], conditions: 1, inner: "" };
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        token.startIndex = state.index;
        token.tokensIndex = tokens.length;
        const output = (opts.capture ? "(" : "") + token.open;
        increment("parens");
        push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
        push({ type: "paren", extglob: true, value: advance(), output });
        extglobs.push(token);
      };
      const extglobClose = (token) => {
        const literal = input.slice(token.startIndex, state.index + 1);
        const body = input.slice(token.startIndex + 2, state.index);
        const analysis = analyzeRepeatedExtglob(body, opts);
        if ((token.type === "plus" || token.type === "star") && analysis.risky) {
          const safeOutput = analysis.safeOutput ? (token.output ? "" : ONE_CHAR) + (opts.capture ? `(${analysis.safeOutput})` : analysis.safeOutput) : void 0;
          const open = tokens[token.tokensIndex];
          open.type = "text";
          open.value = literal;
          open.output = safeOutput || utils.escapeRegex(literal);
          for (let i = token.tokensIndex + 1; i < tokens.length; i++) {
            tokens[i].value = "";
            tokens[i].output = "";
            delete tokens[i].suffix;
          }
          state.output = token.output + open.output;
          state.backtrack = true;
          push({ type: "paren", extglob: true, value, output: "" });
          decrement("parens");
          return;
        }
        let output = token.close + (opts.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
          let extglobStar = star;
          if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token.close = `)$))${extglobStar}`;
          }
          if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            const expression = parse(rest, { ...options, fastpaths: false }).output;
            output = token.close = `)${expression})${extglobStar})`;
          }
          if (token.prev.type === "bos") {
            state.negatedExtglob = true;
          }
        }
        push({ type: "paren", extglob: true, value, output });
        decrement("parens");
      };
      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts.unescape === true) {
            output = output.replace(/\\/g, "");
          } else {
            output = output.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output === input && opts.contains === true) {
          state.output = input;
          return state;
        }
        state.output = utils.wrapOutput(output, state, options);
        return state;
      }
      while (!eos()) {
        value = advance();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next = peek();
          if (next === "/" && opts.bash !== true) {
            continue;
          }
          if (next === "." || next === ";") {
            continue;
          }
          if (!next) {
            value += "\\";
            push({ type: "text", value });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts.unescape === true) {
            value = advance();
          } else {
            value += advance();
          }
          if (state.brackets === 0) {
            push({ type: "text", value });
            continue;
          }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance();
                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({ value });
          continue;
        }
        if (state.quotes === 1 && value !== '"') {
          value = utils.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }
        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push({ type: "text", value });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push({ type: "paren", value });
          continue;
        }
        if (value === ")") {
          if (state.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts.nobracket === true || !remaining().includes("]")) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push({ type: "bracket", value });
          continue;
        }
        if (value === "]") {
          if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          if (state.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "["));
            }
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({ value });
          if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);
          if (opts.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }
        if (value === "{" && opts.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };
          braces.push(open);
          push(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts.nobrace === true || !brace) {
            push({ type: "text", value, output: value });
            continue;
          }
          let output = ")";
          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output = expandRange(range, opts);
            state.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output = "\\}";
            state.output = out;
            for (const t of toks) {
              state.output += t.output || t.value;
            }
          }
          push({ type: "brace", value, output });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === ",") {
          let output = value;
          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === "braces") {
            brace.comma = true;
            output = "|";
          }
          push({ type: "comma", value, output });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = "";
            state.output = "";
            tokens.pop();
            prev = bos;
            continue;
          }
          push({ type: "slash", value, output: SLASH_LITERAL });
          continue;
        }
        if (value === ".") {
          if (state.braces > 0 && prev.type === "dot") {
            if (prev.value === ".") prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push({ type: "text", value, output: DOT_LITERAL });
            continue;
          }
          push({ type: "dot", value, output: DOT_LITERAL });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next = peek();
            let output = value;
            if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output = `\\${value}`;
            }
            push({ type: "text", value, output });
            continue;
          }
          if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push({ type: "qmark", value, output: QMARK_NO_DOT });
            continue;
          }
          push({ type: "qmark", value, output: QMARK });
          continue;
        }
        if (value === "!") {
          if (opts.noextglob !== true && peek() === "(") {
            if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts.regex === false) {
            push({ type: "plus", value, output: PLUS_LITERAL });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
            push({ type: "plus", value });
            continue;
          }
          push({ type: "plus", value: PLUS_LITERAL });
          continue;
        }
        if (value === "@") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            push({ type: "at", extglob: true, value, output: "" });
            continue;
          }
          push({ type: "text", value });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }
          push({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push({ type: "star", value, output: "" });
            continue;
          }
          const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push({ type: "star", value, output: "" });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state.output += prior.output + prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts);
          prev.value += value;
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        const token = { type: "star", value, output: star };
        if (opts.bash === true) {
          token.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token.output = nodot + token.output;
          }
          push(token);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
          token.output = value;
          push(token);
          continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state.output += nodot;
            prev.output += nodot;
          }
          if (peek() !== "*") {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push(token);
      }
      while (state.brackets > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
        state.output = utils.escapeLast(state.output, "[");
        decrement("brackets");
      }
      while (state.parens > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
        state.output = utils.escapeLast(state.output, "(");
        decrement("parens");
      }
      while (state.braces > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
        state.output = utils.escapeLast(state.output, "{");
        decrement("braces");
      }
      if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
      }
      if (state.backtrack === true) {
        state.output = "";
        for (const token of state.tokens) {
          state.output += token.output != null ? token.output : token.value;
          if (token.suffix) {
            state.output += token.suffix;
          }
        }
      }
      return state;
    };
    parse.fastpaths = (input, options) => {
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants.globChars(opts.windows);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state = { negated: false, prefix: "" };
      let star = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      const globstar = (opts2) => {
        if (opts2.noglobstar === true) return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match) return;
            const source2 = create(match[1]);
            if (!source2) return;
            return source2 + DOT_LITERAL + match[2];
          }
        }
      };
      const output = utils.removePrefix(input, state);
      let source = create(output);
      if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }
      return source;
    };
    module2.exports = parse;
  }
});

// node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
  "node_modules/picomatch/lib/picomatch.js"(exports2, module2) {
    "use strict";
    var scan = require_scan();
    var parse = require_parse();
    var utils = require_utils();
    var constants = require_constants();
    var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch2 = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch2(input, options, returnState));
        const arrayMatcher = (str) => {
          for (const isMatch of fns) {
            const state2 = isMatch(str);
            if (state2) return state2;
          }
          return false;
        };
        return arrayMatcher;
      }
      const isState = isObject(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options || {};
      const posix = opts.windows;
      const regex = isState ? picomatch2.compileRe(glob, options) : picomatch2.makeRe(glob, options, false, true);
      const state = regex.state;
      delete regex.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
        isIgnored = picomatch2(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch2.test(input, regex, options, { glob, posix });
        const result = { glob, state, regex, posix, input, output, match, isMatch };
        if (typeof opts.onResult === "function") {
          opts.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored(input)) {
          if (typeof opts.onIgnore === "function") {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      };
      if (returnState) {
        matcher.state = state;
      }
      return matcher;
    };
    picomatch2.test = (input, regex, options, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options || {};
      const format = opts.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob;
      let output = match && format ? format(input) : input;
      if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
      }
      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch2.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output);
        }
      }
      return { isMatch: Boolean(match), match, output };
    };
    picomatch2.matchBase = (input, glob, options) => {
      const regex = glob instanceof RegExp ? glob : picomatch2.makeRe(glob, options);
      return regex.test(utils.basename(input));
    };
    picomatch2.isMatch = (str, patterns, options) => picomatch2(patterns, options)(str);
    picomatch2.parse = (pattern, options) => {
      if (Array.isArray(pattern)) return pattern.map((p) => picomatch2.parse(p, options));
      return parse(pattern, { ...options, fastpaths: false });
    };
    picomatch2.scan = (input, options) => scan(input, options);
    picomatch2.compileRe = (state, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state.output;
      }
      const opts = options || {};
      const prepend = opts.contains ? "" : "^";
      const append = opts.contains ? "" : "$";
      let source = `${prepend}(?:${state.output})${append}`;
      if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
      }
      const regex = picomatch2.toRegex(source, options);
      if (returnState === true) {
        regex.state = state;
      }
      return regex;
    };
    picomatch2.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse(input, options);
      }
      return picomatch2.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch2.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true) throw err;
        return /$^/;
      }
    };
    picomatch2.constants = constants;
    module2.exports = picomatch2;
  }
});

// node_modules/picomatch/index.js
var require_picomatch2 = __commonJS({
  "node_modules/picomatch/index.js"(exports2, module2) {
    "use strict";
    var pico = require_picomatch();
    var utils = require_utils();
    function picomatch2(glob, options, returnState = false) {
      if (options && (options.windows === null || options.windows === void 0)) {
        options = { ...options, windows: utils.isWindows() };
      }
      return pico(glob, options, returnState);
    }
    Object.assign(picomatch2, pico);
    module2.exports = picomatch2;
  }
});

// src/extraction/parse-worker.ts
var import_worker_threads = require("worker_threads");

// src/extraction/tree-sitter.ts
var path2 = __toESM(require("path"));

// src/extraction/grammars.ts
var path = __toESM(require("path"));
var import_web_tree_sitter = require("web-tree-sitter");
var WASM_GRAMMAR_FILES = {
  typescript: "tree-sitter-typescript.wasm",
  tsx: "tree-sitter-tsx.wasm",
  javascript: "tree-sitter-javascript.wasm",
  jsx: "tree-sitter-javascript.wasm",
  python: "tree-sitter-python.wasm",
  go: "tree-sitter-go.wasm",
  rust: "tree-sitter-rust.wasm",
  java: "tree-sitter-java.wasm",
  c: "tree-sitter-c.wasm",
  cpp: "tree-sitter-cpp.wasm",
  csharp: "tree-sitter-c_sharp.wasm",
  php: "tree-sitter-php.wasm",
  ruby: "tree-sitter-ruby.wasm",
  swift: "tree-sitter-swift.wasm",
  kotlin: "tree-sitter-kotlin.wasm",
  dart: "tree-sitter-dart.wasm",
  pascal: "tree-sitter-pascal.wasm",
  scala: "tree-sitter-scala.wasm"
};
var EXTENSION_MAP = {
  ".ts": "typescript",
  ".tsx": "tsx",
  ".js": "javascript",
  ".mjs": "javascript",
  ".cjs": "javascript",
  ".jsx": "jsx",
  ".py": "python",
  ".pyw": "python",
  ".go": "go",
  ".rs": "rust",
  ".java": "java",
  ".c": "c",
  ".h": "c",
  // Could also be C++, defaulting to C
  ".cpp": "cpp",
  ".cc": "cpp",
  ".cxx": "cpp",
  ".hpp": "cpp",
  ".hxx": "cpp",
  ".cs": "csharp",
  ".php": "php",
  ".rb": "ruby",
  ".rake": "ruby",
  ".swift": "swift",
  ".kt": "kotlin",
  ".kts": "kotlin",
  ".dart": "dart",
  ".liquid": "liquid",
  ".svelte": "svelte",
  ".vue": "vue",
  ".pas": "pascal",
  ".dpr": "pascal",
  ".dpk": "pascal",
  ".lpr": "pascal",
  ".dfm": "pascal",
  ".fmx": "pascal",
  ".scala": "scala",
  ".sc": "scala"
};
var parserCache = /* @__PURE__ */ new Map();
var languageCache = /* @__PURE__ */ new Map();
var unavailableGrammarErrors = /* @__PURE__ */ new Map();
var parserInitialized = false;
var initPromise = null;
var loadQueue = Promise.resolve();
var loadingPromises = /* @__PURE__ */ new Map();
async function initGrammars() {
  if (parserInitialized) return;
  if (!initPromise) {
    initPromise = import_web_tree_sitter.Parser.init().then(() => {
      parserInitialized = true;
    });
  }
  await initPromise;
}
async function loadGrammarsForLanguages(languages) {
  if (!parserInitialized) {
    await initGrammars();
  }
  const toLoad = [...new Set(languages)].filter(
    (lang) => lang in WASM_GRAMMAR_FILES && !languageCache.has(lang) && !unavailableGrammarErrors.has(lang)
  );
  if (toLoad.length === 0) return;
  const promises = toLoad.map((lang) => {
    if (loadingPromises.has(lang)) {
      return loadingPromises.get(lang);
    }
    const p = loadQueue.then(async () => {
      if (languageCache.has(lang) || unavailableGrammarErrors.has(lang)) return;
      const wasmFile = WASM_GRAMMAR_FILES[lang];
      try {
        const wasmPath = lang === "pascal" || lang === "scala" ? path.join(__dirname, "wasm", wasmFile) : require.resolve(`tree-sitter-wasms/out/${wasmFile}`);
        const language = await import_web_tree_sitter.Language.load(wasmPath);
        languageCache.set(lang, language);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.warn(
          `[CodeGraph] Failed to load ${lang} grammar \u2014 parsing will be unavailable: ${message}`
        );
        unavailableGrammarErrors.set(lang, message);
      }
    }).finally(() => {
      loadingPromises.delete(lang);
    });
    loadQueue = p.catch(() => {
    });
    loadingPromises.set(lang, p);
    return p;
  });
  await Promise.all(promises);
}
function getParser(language) {
  if (parserCache.has(language)) {
    return parserCache.get(language);
  }
  const lang = languageCache.get(language);
  if (!lang) {
    return null;
  }
  const parser = new import_web_tree_sitter.Parser();
  parser.setLanguage(lang);
  parserCache.set(language, parser);
  return parser;
}
function detectLanguage(filePath, source) {
  const ext = filePath.substring(filePath.lastIndexOf(".")).toLowerCase();
  const lang = EXTENSION_MAP[ext] || "unknown";
  if (lang === "c" && ext === ".h" && source) {
    if (looksLikeCpp(source)) return "cpp";
  }
  return lang;
}
function looksLikeCpp(source) {
  const sample = source.substring(0, 8192);
  return /\bnamespace\b|\bclass\s+\w+\s*[:{]|\btemplate\s*<|\b(?:public|private|protected)\s*:|\bvirtual\b|\busing\s+(?:namespace\b|\w+\s*=)/.test(sample);
}
function isLanguageSupported(language) {
  if (language === "svelte") return true;
  if (language === "vue") return true;
  if (language === "liquid") return true;
  if (language === "unknown") return false;
  return language in WASM_GRAMMAR_FILES;
}
function resetParser(language) {
  const old = parserCache.get(language);
  if (old) {
    old.delete();
    parserCache.delete(language);
  }
}

// src/extraction/tree-sitter-helpers.ts
var crypto = __toESM(require("crypto"));
function generateNodeId(filePath, kind, name, line) {
  const hash = crypto.createHash("sha256").update(`${filePath}:${kind}:${name}:${line}`).digest("hex").substring(0, 32);
  return `${kind}:${hash}`;
}
function getNodeText(node, source) {
  return source.substring(node.startIndex, node.endIndex);
}
function getChildByField(node, fieldName) {
  return node.childForFieldName(fieldName);
}
function getPrecedingDocstring(node, source) {
  let sibling = node.previousNamedSibling;
  const comments = [];
  while (sibling) {
    if (sibling.type === "comment" || sibling.type === "line_comment" || sibling.type === "block_comment" || sibling.type === "documentation_comment") {
      comments.unshift(getNodeText(sibling, source));
      sibling = sibling.previousNamedSibling;
    } else {
      break;
    }
  }
  if (comments.length === 0) return void 0;
  return comments.map(
    (c) => c.replace(/^\/\*\*?|\*\/$/g, "").replace(/^\/\/\s?/gm, "").replace(/^\s*\*\s?/gm, "").trim()
  ).join("\n").trim();
}

// src/extraction/languages/typescript.ts
var typescriptExtractor = {
  functionTypes: ["function_declaration", "arrow_function", "function_expression"],
  classTypes: ["class_declaration", "abstract_class_declaration"],
  methodTypes: ["method_definition", "public_field_definition"],
  interfaceTypes: ["interface_declaration"],
  structTypes: [],
  enumTypes: ["enum_declaration"],
  enumMemberTypes: ["property_identifier", "enum_assignment"],
  typeAliasTypes: ["type_alias_declaration"],
  importTypes: ["import_statement"],
  callTypes: ["call_expression"],
  variableTypes: ["lexical_declaration", "variable_declaration"],
  nameField: "name",
  bodyField: "body",
  resolveBody: (node, bodyField) => {
    if (node.type === "public_field_definition") {
      for (let i = 0; i < node.namedChildCount; i++) {
        const child = node.namedChild(i);
        if (!child) continue;
        if (child.type === "arrow_function" || child.type === "function_expression") {
          return getChildByField(child, bodyField);
        }
        if (child.type === "call_expression") {
          const args = getChildByField(child, "arguments");
          if (args) {
            for (let j = 0; j < args.namedChildCount; j++) {
              const arg = args.namedChild(j);
              if (arg && (arg.type === "arrow_function" || arg.type === "function_expression")) {
                return getChildByField(arg, bodyField);
              }
            }
          }
        }
      }
    }
    return null;
  },
  paramsField: "parameters",
  returnField: "return_type",
  getSignature: (node, source) => {
    const params = getChildByField(node, "parameters");
    const returnType = getChildByField(node, "return_type");
    if (!params) return void 0;
    let sig = getNodeText(params, source);
    if (returnType) {
      sig += ": " + getNodeText(returnType, source).replace(/^:\s*/, "");
    }
    return sig;
  },
  getVisibility: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "accessibility_modifier") {
        const text = child.text;
        if (text === "public") return "public";
        if (text === "private") return "private";
        if (text === "protected") return "protected";
      }
    }
    return void 0;
  },
  isExported: (node, _source) => {
    let current = node.parent;
    while (current) {
      if (current.type === "export_statement") return true;
      current = current.parent;
    }
    return false;
  },
  isAsync: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "async") return true;
    }
    return false;
  },
  isStatic: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "static") return true;
    }
    return false;
  },
  isConst: (node) => {
    if (node.type === "lexical_declaration") {
      for (let i = 0; i < node.childCount; i++) {
        const child = node.child(i);
        if (child?.type === "const") return true;
      }
    }
    return false;
  },
  extractImport: (node, source) => {
    const sourceField = node.childForFieldName("source");
    if (sourceField) {
      const moduleName = source.substring(sourceField.startIndex, sourceField.endIndex).replace(/['"]/g, "");
      if (moduleName) {
        return { moduleName, signature: source.substring(node.startIndex, node.endIndex).trim() };
      }
    }
    return null;
  }
};

// src/extraction/languages/javascript.ts
var javascriptExtractor = {
  functionTypes: ["function_declaration", "arrow_function", "function_expression"],
  classTypes: ["class_declaration"],
  methodTypes: ["method_definition", "field_definition"],
  interfaceTypes: [],
  structTypes: [],
  enumTypes: [],
  typeAliasTypes: [],
  importTypes: ["import_statement"],
  callTypes: ["call_expression"],
  variableTypes: ["lexical_declaration", "variable_declaration"],
  nameField: "name",
  bodyField: "body",
  resolveBody: (node, bodyField) => {
    if (node.type === "field_definition") {
      for (let i = 0; i < node.namedChildCount; i++) {
        const child = node.namedChild(i);
        if (!child) continue;
        if (child.type === "arrow_function" || child.type === "function_expression") {
          return getChildByField(child, bodyField);
        }
        if (child.type === "call_expression") {
          const args = getChildByField(child, "arguments");
          if (args) {
            for (let j = 0; j < args.namedChildCount; j++) {
              const arg = args.namedChild(j);
              if (arg && (arg.type === "arrow_function" || arg.type === "function_expression")) {
                return getChildByField(arg, bodyField);
              }
            }
          }
        }
      }
    }
    return null;
  },
  paramsField: "parameters",
  getSignature: (node, source) => {
    const params = getChildByField(node, "parameters");
    return params ? getNodeText(params, source) : void 0;
  },
  isExported: (node, _source) => {
    let current = node.parent;
    while (current) {
      if (current.type === "export_statement") return true;
      current = current.parent;
    }
    return false;
  },
  isAsync: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "async") return true;
    }
    return false;
  },
  isConst: (node) => {
    if (node.type === "lexical_declaration") {
      for (let i = 0; i < node.childCount; i++) {
        const child = node.child(i);
        if (child?.type === "const") return true;
      }
    }
    return false;
  },
  extractImport: (node, source) => {
    const sourceField = node.childForFieldName("source");
    if (sourceField) {
      const moduleName = source.substring(sourceField.startIndex, sourceField.endIndex).replace(/['"]/g, "");
      if (moduleName) {
        return { moduleName, signature: source.substring(node.startIndex, node.endIndex).trim() };
      }
    }
    return null;
  }
};

// src/extraction/languages/python.ts
var pythonExtractor = {
  functionTypes: ["function_definition"],
  classTypes: ["class_definition"],
  methodTypes: ["function_definition"],
  // Methods are functions inside classes
  interfaceTypes: [],
  structTypes: [],
  enumTypes: [],
  typeAliasTypes: [],
  importTypes: ["import_statement", "import_from_statement"],
  callTypes: ["call"],
  variableTypes: ["assignment"],
  // Python uses assignment for variable declarations
  nameField: "name",
  bodyField: "body",
  paramsField: "parameters",
  returnField: "return_type",
  getSignature: (node, source) => {
    const params = getChildByField(node, "parameters");
    const returnType = getChildByField(node, "return_type");
    if (!params) return void 0;
    let sig = getNodeText(params, source);
    if (returnType) {
      sig += " -> " + getNodeText(returnType, source);
    }
    return sig;
  },
  isAsync: (node) => {
    const prev = node.previousSibling;
    return prev?.type === "async";
  },
  isStatic: (node) => {
    const prev = node.previousNamedSibling;
    if (prev?.type === "decorator") {
      const text = prev.text;
      return text.includes("staticmethod");
    }
    return false;
  },
  extractImport: (node, source) => {
    const importText = source.substring(node.startIndex, node.endIndex).trim();
    if (node.type === "import_from_statement") {
      const moduleNode = node.childForFieldName("module_name");
      if (moduleNode) {
        return { moduleName: source.substring(moduleNode.startIndex, moduleNode.endIndex), signature: importText };
      }
    }
    return null;
  }
};

// src/extraction/languages/go.ts
var goExtractor = {
  functionTypes: ["function_declaration"],
  classTypes: [],
  // Go doesn't have classes
  methodTypes: ["method_declaration"],
  interfaceTypes: [],
  // Handled via type_spec → resolveTypeAliasKind
  structTypes: [],
  // Handled via type_spec → resolveTypeAliasKind
  enumTypes: [],
  typeAliasTypes: ["type_spec"],
  // Go type declarations
  importTypes: ["import_declaration"],
  callTypes: ["call_expression"],
  variableTypes: ["var_declaration", "short_var_declaration", "const_declaration"],
  methodsAreTopLevel: true,
  nameField: "name",
  bodyField: "body",
  paramsField: "parameters",
  returnField: "result",
  getSignature: (node, source) => {
    const params = getChildByField(node, "parameters");
    const result = getChildByField(node, "result");
    if (!params) return void 0;
    let sig = getNodeText(params, source);
    if (result) {
      sig += " " + getNodeText(result, source);
    }
    return sig;
  },
  resolveTypeAliasKind: (node, _source) => {
    const typeChild = getChildByField(node, "type");
    if (!typeChild) return void 0;
    if (typeChild.type === "struct_type") return "struct";
    if (typeChild.type === "interface_type") return "interface";
    return void 0;
  },
  getReceiverType: (node, source) => {
    const receiver = getChildByField(node, "receiver");
    if (!receiver) return void 0;
    const text = getNodeText(receiver, source);
    const match = text.match(/\*?\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)/);
    return match?.[1];
  }
};

// src/extraction/languages/rust.ts
var rustExtractor = {
  functionTypes: ["function_item"],
  classTypes: [],
  // Rust has impl blocks
  methodTypes: ["function_item"],
  // Methods are functions in impl blocks
  interfaceTypes: ["trait_item"],
  structTypes: ["struct_item"],
  enumTypes: ["enum_item"],
  enumMemberTypes: ["enum_variant"],
  typeAliasTypes: ["type_item"],
  // Rust type aliases
  importTypes: ["use_declaration"],
  callTypes: ["call_expression"],
  variableTypes: ["let_declaration", "const_item", "static_item"],
  interfaceKind: "trait",
  nameField: "name",
  bodyField: "body",
  paramsField: "parameters",
  returnField: "return_type",
  getSignature: (node, source) => {
    const params = getChildByField(node, "parameters");
    const returnType = getChildByField(node, "return_type");
    if (!params) return void 0;
    let sig = getNodeText(params, source);
    if (returnType) {
      sig += " -> " + getNodeText(returnType, source);
    }
    return sig;
  },
  isAsync: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "async") return true;
    }
    return false;
  },
  getVisibility: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "visibility_modifier") {
        return child.text.includes("pub") ? "public" : "private";
      }
    }
    return "private";
  },
  getReceiverType: (node, source) => {
    let parent = node.parent;
    while (parent) {
      if (parent.type === "impl_item") {
        const children = parent.namedChildren;
        const typeIdents = children.filter(
          (c) => c.type === "type_identifier"
        );
        if (typeIdents.length > 0) {
          const typeNode = typeIdents[typeIdents.length - 1];
          return source.substring(typeNode.startIndex, typeNode.endIndex);
        }
        const genericType = children.find(
          (c) => c.type === "generic_type"
        );
        if (genericType) {
          const innerType = genericType.namedChildren.find(
            (c) => c.type === "type_identifier"
          );
          if (innerType) {
            return source.substring(innerType.startIndex, innerType.endIndex);
          }
        }
        return void 0;
      }
      parent = parent.parent;
    }
    return void 0;
  },
  extractImport: (node, source) => {
    const importText = source.substring(node.startIndex, node.endIndex).trim();
    const getRootModule = (scopedNode) => {
      const firstChild = scopedNode.namedChild(0);
      if (!firstChild) return source.substring(scopedNode.startIndex, scopedNode.endIndex);
      if (firstChild.type === "identifier" || firstChild.type === "crate" || firstChild.type === "super" || firstChild.type === "self") {
        return source.substring(firstChild.startIndex, firstChild.endIndex);
      } else if (firstChild.type === "scoped_identifier") {
        return getRootModule(firstChild);
      }
      return source.substring(firstChild.startIndex, firstChild.endIndex);
    };
    const useArg = node.namedChildren.find(
      (c) => c.type === "scoped_use_list" || c.type === "scoped_identifier" || c.type === "use_list" || c.type === "identifier"
    );
    if (useArg) {
      return { moduleName: getRootModule(useArg), signature: importText };
    }
    return null;
  }
};

// src/extraction/languages/java.ts
var javaExtractor = {
  functionTypes: [],
  classTypes: ["class_declaration"],
  methodTypes: ["method_declaration", "constructor_declaration"],
  interfaceTypes: ["interface_declaration"],
  structTypes: [],
  enumTypes: ["enum_declaration"],
  enumMemberTypes: ["enum_constant"],
  typeAliasTypes: [],
  importTypes: ["import_declaration"],
  callTypes: ["method_invocation"],
  variableTypes: ["local_variable_declaration"],
  fieldTypes: ["field_declaration"],
  nameField: "name",
  bodyField: "body",
  paramsField: "parameters",
  returnField: "type",
  getSignature: (node, source) => {
    const params = getChildByField(node, "parameters");
    const returnType = getChildByField(node, "type");
    if (!params) return void 0;
    const paramsText = getNodeText(params, source);
    return returnType ? getNodeText(returnType, source) + " " + paramsText : paramsText;
  },
  getVisibility: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "modifiers") {
        const text = child.text;
        if (text.includes("public")) return "public";
        if (text.includes("private")) return "private";
        if (text.includes("protected")) return "protected";
      }
    }
    return void 0;
  },
  isStatic: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "modifiers" && child.text.includes("static")) {
        return true;
      }
    }
    return false;
  },
  extractImport: (node, source) => {
    const importText = source.substring(node.startIndex, node.endIndex).trim();
    const scopedId = node.namedChildren.find((c) => c.type === "scoped_identifier");
    if (scopedId) {
      const moduleName = source.substring(scopedId.startIndex, scopedId.endIndex);
      return { moduleName, signature: importText };
    }
    return null;
  }
};

// src/extraction/languages/c-cpp.ts
var cExtractor = {
  functionTypes: ["function_definition"],
  classTypes: [],
  methodTypes: [],
  interfaceTypes: [],
  structTypes: ["struct_specifier"],
  enumTypes: ["enum_specifier"],
  enumMemberTypes: ["enumerator"],
  typeAliasTypes: ["type_definition"],
  // typedef
  importTypes: ["preproc_include"],
  callTypes: ["call_expression"],
  variableTypes: ["declaration"],
  nameField: "declarator",
  bodyField: "body",
  paramsField: "parameters",
  resolveTypeAliasKind: (node, _source) => {
    for (let i = 0; i < node.namedChildCount; i++) {
      const child = node.namedChild(i);
      if (!child) continue;
      if (child.type === "enum_specifier" && getChildByField(child, "body")) return "enum";
      if (child.type === "struct_specifier" && getChildByField(child, "body")) return "struct";
    }
    return void 0;
  },
  extractImport: (node, source) => {
    const importText = source.substring(node.startIndex, node.endIndex).trim();
    const systemLib = node.namedChildren.find((c) => c.type === "system_lib_string");
    if (systemLib) {
      return { moduleName: getNodeText(systemLib, source).replace(/^<|>$/g, ""), signature: importText };
    }
    const stringLiteral = node.namedChildren.find((c) => c.type === "string_literal");
    if (stringLiteral) {
      const stringContent = stringLiteral.namedChildren.find((c) => c.type === "string_content");
      if (stringContent) {
        return { moduleName: getNodeText(stringContent, source), signature: importText };
      }
    }
    return null;
  }
};
var cppExtractor = {
  functionTypes: ["function_definition"],
  classTypes: ["class_specifier"],
  methodTypes: ["function_definition"],
  interfaceTypes: [],
  structTypes: ["struct_specifier"],
  enumTypes: ["enum_specifier"],
  enumMemberTypes: ["enumerator"],
  typeAliasTypes: ["type_definition", "alias_declaration"],
  // typedef and using
  importTypes: ["preproc_include"],
  callTypes: ["call_expression"],
  variableTypes: ["declaration"],
  nameField: "declarator",
  bodyField: "body",
  paramsField: "parameters",
  getVisibility: (node) => {
    const parent = node.parent;
    if (parent) {
      for (let i = 0; i < parent.childCount; i++) {
        const child = parent.child(i);
        if (child?.type === "access_specifier") {
          const text = child.text;
          if (text.includes("public")) return "public";
          if (text.includes("private")) return "private";
          if (text.includes("protected")) return "protected";
        }
      }
    }
    return void 0;
  },
  resolveTypeAliasKind: (node, _source) => {
    for (let i = 0; i < node.namedChildCount; i++) {
      const child = node.namedChild(i);
      if (!child) continue;
      if (child.type === "enum_specifier" && getChildByField(child, "body")) return "enum";
      if (child.type === "struct_specifier" && getChildByField(child, "body")) return "struct";
    }
    return void 0;
  },
  isMisparsedFunction: (name) => {
    if (name.startsWith("namespace")) return true;
    const cppKeywords = ["switch", "if", "for", "while", "do", "case", "return"];
    return cppKeywords.includes(name);
  },
  extractImport: (node, source) => {
    const importText = source.substring(node.startIndex, node.endIndex).trim();
    const systemLib = node.namedChildren.find((c) => c.type === "system_lib_string");
    if (systemLib) {
      return { moduleName: getNodeText(systemLib, source).replace(/^<|>$/g, ""), signature: importText };
    }
    const stringLiteral = node.namedChildren.find((c) => c.type === "string_literal");
    if (stringLiteral) {
      const stringContent = stringLiteral.namedChildren.find((c) => c.type === "string_content");
      if (stringContent) {
        return { moduleName: getNodeText(stringContent, source), signature: importText };
      }
    }
    return null;
  }
};

// src/extraction/languages/csharp.ts
var csharpExtractor = {
  functionTypes: [],
  classTypes: ["class_declaration"],
  methodTypes: ["method_declaration", "constructor_declaration"],
  interfaceTypes: ["interface_declaration"],
  structTypes: ["struct_declaration"],
  enumTypes: ["enum_declaration"],
  enumMemberTypes: ["enum_member_declaration"],
  typeAliasTypes: [],
  importTypes: ["using_directive"],
  callTypes: ["invocation_expression"],
  variableTypes: ["local_declaration_statement"],
  fieldTypes: ["field_declaration"],
  propertyTypes: ["property_declaration"],
  nameField: "name",
  bodyField: "body",
  paramsField: "parameter_list",
  getVisibility: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "modifier") {
        const text = child.text;
        if (text === "public") return "public";
        if (text === "private") return "private";
        if (text === "protected") return "protected";
        if (text === "internal") return "internal";
      }
    }
    return "private";
  },
  isStatic: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "modifier" && child.text === "static") {
        return true;
      }
    }
    return false;
  },
  isAsync: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "modifier" && child.text === "async") {
        return true;
      }
    }
    return false;
  },
  extractImport: (node, source) => {
    const importText = source.substring(node.startIndex, node.endIndex).trim();
    const qualifiedName = node.namedChildren.find((c) => c.type === "qualified_name");
    if (qualifiedName) {
      return { moduleName: getNodeText(qualifiedName, source), signature: importText };
    }
    const identifier = node.namedChildren.find((c) => c.type === "identifier");
    if (identifier) {
      return { moduleName: getNodeText(identifier, source), signature: importText };
    }
    return null;
  }
};

// src/extraction/languages/php.ts
var phpExtractor = {
  functionTypes: ["function_definition"],
  classTypes: ["class_declaration", "trait_declaration"],
  methodTypes: ["method_declaration"],
  interfaceTypes: ["interface_declaration"],
  structTypes: [],
  enumTypes: ["enum_declaration"],
  enumMemberTypes: ["enum_case"],
  typeAliasTypes: [],
  importTypes: ["namespace_use_declaration"],
  callTypes: ["function_call_expression", "member_call_expression", "scoped_call_expression"],
  variableTypes: ["const_declaration"],
  fieldTypes: ["property_declaration"],
  nameField: "name",
  bodyField: "body",
  paramsField: "parameters",
  returnField: "return_type",
  classifyClassNode: (node) => {
    return node.type === "trait_declaration" ? "trait" : "class";
  },
  getVisibility: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "visibility_modifier") {
        const text = child.text;
        if (text === "public") return "public";
        if (text === "private") return "private";
        if (text === "protected") return "protected";
      }
    }
    return "public";
  },
  isStatic: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "static_modifier") return true;
    }
    return false;
  },
  visitNode: (node, ctx) => {
    if (node.type === "const_declaration") {
      const constElements = node.namedChildren.filter((c) => c.type === "const_element");
      for (const elem of constElements) {
        const nameNode = elem.namedChildren.find((c) => c.type === "name");
        if (!nameNode) continue;
        const name = getNodeText(nameNode, ctx.source);
        ctx.createNode("constant", name, elem, {});
      }
      return true;
    }
    if (node.type === "use_declaration") {
      const names = node.namedChildren.filter((c) => c.type === "name" || c.type === "qualified_name");
      const parentId = ctx.nodeStack.length > 0 ? ctx.nodeStack[ctx.nodeStack.length - 1] : void 0;
      if (parentId) {
        for (const nameNode of names) {
          const traitName = getNodeText(nameNode, ctx.source);
          ctx.addUnresolvedReference({
            fromNodeId: parentId,
            referenceName: traitName,
            referenceKind: "implements",
            filePath: ctx.filePath,
            line: node.startPosition.row + 1,
            column: node.startPosition.column
          });
        }
      }
      return true;
    }
    return false;
  },
  extractImport: (node, source) => {
    const importText = source.substring(node.startIndex, node.endIndex).trim();
    const namespacePrefix = node.namedChildren.find((c) => c.type === "namespace_name");
    const useGroup = node.namedChildren.find((c) => c.type === "namespace_use_group");
    if (namespacePrefix && useGroup) {
      return null;
    }
    const useClause = node.namedChildren.find((c) => c.type === "namespace_use_clause");
    if (useClause) {
      const qualifiedName = useClause.namedChildren.find((c) => c.type === "qualified_name");
      if (qualifiedName) {
        return { moduleName: getNodeText(qualifiedName, source), signature: importText };
      }
      const name = useClause.namedChildren.find((c) => c.type === "name");
      if (name) {
        return { moduleName: getNodeText(name, source), signature: importText };
      }
    }
    return null;
  }
};

// src/extraction/languages/ruby.ts
var rubyExtractor = {
  functionTypes: ["method"],
  classTypes: ["class"],
  methodTypes: ["method", "singleton_method"],
  interfaceTypes: [],
  // Ruby uses modules (handled via visitNode hook)
  structTypes: [],
  enumTypes: [],
  typeAliasTypes: [],
  importTypes: ["call"],
  // require/require_relative
  callTypes: ["call", "method_call"],
  variableTypes: ["assignment"],
  // Ruby uses assignment like Python
  nameField: "name",
  bodyField: "body",
  paramsField: "parameters",
  visitNode: (node, ctx) => {
    if (node.type !== "module") return false;
    const nameNode = node.childForFieldName("name");
    if (!nameNode) return false;
    const name = nameNode.text;
    const moduleNode = ctx.createNode("module", name, node);
    if (!moduleNode) return false;
    ctx.pushScope(moduleNode.id);
    const body = node.childForFieldName("body");
    if (body) {
      for (let i = 0; i < body.namedChildCount; i++) {
        const child = body.namedChild(i);
        if (child) ctx.visitNode(child);
      }
    }
    ctx.popScope();
    return true;
  },
  extractBareCall: (node, _source) => {
    if (node.type !== "identifier") return void 0;
    const parent = node.parent;
    if (!parent) return void 0;
    const BLOCK_PARENTS = /* @__PURE__ */ new Set([
      "body_statement",
      "then",
      "else",
      "do",
      "begin",
      "rescue",
      "ensure",
      "when"
    ]);
    if (!BLOCK_PARENTS.has(parent.type)) return void 0;
    const name = node.text;
    const SKIP = /* @__PURE__ */ new Set([
      "true",
      "false",
      "nil",
      "self",
      "super",
      "__FILE__",
      "__LINE__",
      "__dir__"
    ]);
    if (SKIP.has(name)) return void 0;
    if (name.length > 0 && name.charCodeAt(0) >= 65 && name.charCodeAt(0) <= 90) return void 0;
    return name;
  },
  getVisibility: (node) => {
    let sibling = node.previousNamedSibling;
    while (sibling) {
      if (sibling.type === "call") {
        const methodName = getChildByField(sibling, "method");
        if (methodName) {
          const text = methodName.text;
          if (text === "private") return "private";
          if (text === "protected") return "protected";
          if (text === "public") return "public";
        }
      }
      sibling = sibling.previousNamedSibling;
    }
    return "public";
  },
  extractImport: (node, source) => {
    const importText = source.substring(node.startIndex, node.endIndex).trim();
    const identifier = node.namedChildren.find((c) => c.type === "identifier");
    if (!identifier) return null;
    const methodName = getNodeText(identifier, source);
    if (methodName !== "require" && methodName !== "require_relative") {
      return null;
    }
    const argList = node.namedChildren.find((c) => c.type === "argument_list");
    if (argList) {
      const stringNode = argList.namedChildren.find((c) => c.type === "string");
      if (stringNode) {
        const stringContent = stringNode.namedChildren.find((c) => c.type === "string_content");
        if (stringContent) {
          return { moduleName: getNodeText(stringContent, source), signature: importText };
        }
      }
    }
    return null;
  }
};

// src/extraction/languages/swift.ts
var swiftExtractor = {
  functionTypes: ["function_declaration"],
  classTypes: ["class_declaration"],
  methodTypes: ["function_declaration"],
  // Methods are functions inside classes
  interfaceTypes: ["protocol_declaration"],
  structTypes: ["struct_declaration"],
  enumTypes: ["enum_declaration"],
  enumMemberTypes: ["enum_entry"],
  typeAliasTypes: ["typealias_declaration"],
  importTypes: ["import_declaration"],
  callTypes: ["call_expression"],
  variableTypes: ["property_declaration", "constant_declaration"],
  nameField: "name",
  bodyField: "body",
  paramsField: "parameter",
  returnField: "return_type",
  getSignature: (node, source) => {
    const params = getChildByField(node, "parameter");
    const returnType = getChildByField(node, "return_type");
    if (!params) return void 0;
    let sig = getNodeText(params, source);
    if (returnType) {
      sig += " -> " + getNodeText(returnType, source);
    }
    return sig;
  },
  getVisibility: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "modifiers") {
        const text = child.text;
        if (text.includes("public")) return "public";
        if (text.includes("private")) return "private";
        if (text.includes("internal")) return "internal";
        if (text.includes("fileprivate")) return "private";
      }
    }
    return "internal";
  },
  isStatic: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "modifiers") {
        if (child.text.includes("static") || child.text.includes("class")) {
          return true;
        }
      }
    }
    return false;
  },
  classifyClassNode: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "struct") return "struct";
      if (child?.type === "enum") return "enum";
    }
    return "class";
  },
  isAsync: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "modifiers" && child.text.includes("async")) {
        return true;
      }
    }
    return false;
  },
  extractImport: (node, source) => {
    const importText = source.substring(node.startIndex, node.endIndex).trim();
    const identifier = node.namedChildren.find((c) => c.type === "identifier");
    if (identifier) {
      return { moduleName: source.substring(identifier.startIndex, identifier.endIndex), signature: importText };
    }
    return null;
  }
};

// src/extraction/languages/kotlin.ts
function isFunInterfaceNode(node) {
  let hasFun = false;
  let hasInterfaceType = false;
  for (let i = 0; i < node.childCount; i++) {
    const child = node.child(i);
    if (!child) continue;
    if (child.type === "fun" && !child.isNamed) hasFun = true;
    if (child.type === "user_type") {
      const typeId = child.namedChildren.find((c) => c.type === "type_identifier");
      if (typeId && typeId.text === "interface") hasInterfaceType = true;
    }
    if (child.type === "ERROR") {
      for (let j = 0; j < child.childCount; j++) {
        const gc = child.child(j);
        if (gc && gc.type === "user_type") {
          const typeId = gc.namedChildren.find((c) => c.type === "type_identifier");
          if (typeId && typeId.text === "interface") hasInterfaceType = true;
        }
      }
    }
  }
  return hasFun && hasInterfaceType;
}
var kotlinExtractor = {
  functionTypes: ["function_declaration"],
  classTypes: ["class_declaration"],
  methodTypes: ["function_declaration"],
  // Methods are functions inside classes
  interfaceTypes: [],
  // Handled via classifyClassNode
  structTypes: [],
  // Kotlin uses data classes
  enumTypes: [],
  // Handled via classifyClassNode
  enumMemberTypes: ["enum_entry"],
  typeAliasTypes: ["type_alias"],
  importTypes: ["import_header"],
  callTypes: ["call_expression"],
  variableTypes: ["property_declaration"],
  fieldTypes: ["property_declaration"],
  extraClassNodeTypes: ["object_declaration"],
  nameField: "simple_identifier",
  bodyField: "function_body",
  visitNode: (node, ctx) => {
    if (node.type === "lambda_literal") {
      const prev = node.previousSibling;
      if (prev && prev.type === "ERROR" && isFunInterfaceNode(prev)) return true;
      return false;
    }
    if (node.type !== "ERROR" && node.type !== "function_declaration") return false;
    if (node.type === "ERROR") {
      const firstChild = node.child(0);
      if (firstChild && firstChild.type === "{") return false;
    }
    if (!isFunInterfaceNode(node)) return false;
    let nameText = null;
    if (node.type === "function_declaration") {
      for (let i = 0; i < node.childCount; i++) {
        const child = node.child(i);
        if (child && child.type === "ERROR") {
          for (let j = 0; j < child.childCount; j++) {
            const gc = child.child(j);
            if (gc && gc.type === "simple_identifier") {
              nameText = gc.text;
              break;
            }
          }
          if (nameText) break;
        }
      }
    }
    if (!nameText) {
      for (let i = 0; i < node.childCount; i++) {
        const child = node.child(i);
        if (child && child.type === "simple_identifier") {
          nameText = child.text;
          break;
        }
      }
    }
    if (!nameText) return false;
    const ifaceNode = ctx.createNode("interface", nameText, node);
    if (!ifaceNode) return false;
    ctx.pushScope(ifaceNode.id);
    if (node.type === "ERROR") {
      const nextSibling = node.nextSibling;
      if (nextSibling && nextSibling.type === "lambda_literal") {
        for (let i = 0; i < nextSibling.namedChildCount; i++) {
          const child = nextSibling.namedChild(i);
          if (child && child.type === "statements") {
            for (let j = 0; j < child.namedChildCount; j++) {
              const stmt = child.namedChild(j);
              if (stmt) ctx.visitNode(stmt);
            }
          }
        }
      }
    }
    ctx.popScope();
    return true;
  },
  paramsField: "function_value_parameters",
  returnField: "type",
  resolveBody: (node, _bodyField) => {
    for (let i = 0; i < node.namedChildCount; i++) {
      const child = node.namedChild(i);
      if (child && child.type === "ERROR") {
        const firstChild = child.child(0);
        if (firstChild && firstChild.type === "{") {
          return child;
        }
      }
      if (child && (child.type === "function_body" || child.type === "class_body" || child.type === "enum_class_body")) {
        return child;
      }
    }
    return null;
  },
  classifyClassNode: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (!child) continue;
      if (child.type === "interface") return "interface";
      if (child.type === "enum") return "enum";
    }
    return "class";
  },
  getReceiverType: (node, source) => {
    let foundUserType = null;
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (!child) continue;
      if (child.type === "user_type") {
        foundUserType = child;
      } else if (child.type === "." && foundUserType) {
        const typeId = foundUserType.namedChildren.find((c) => c.type === "type_identifier");
        return typeId ? getNodeText(typeId, source) : getNodeText(foundUserType, source);
      } else if (child.type === "simple_identifier" || child.type === "function_value_parameters") {
        break;
      }
    }
    return void 0;
  },
  getSignature: (node, source) => {
    const params = getChildByField(node, "function_value_parameters");
    const returnType = getChildByField(node, "type");
    if (!params) return void 0;
    let sig = getNodeText(params, source);
    if (returnType) {
      sig += ": " + getNodeText(returnType, source);
    }
    return sig;
  },
  getVisibility: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "modifiers") {
        const text = child.text;
        if (text.includes("public")) return "public";
        if (text.includes("private")) return "private";
        if (text.includes("protected")) return "protected";
        if (text.includes("internal")) return "internal";
      }
    }
    return "public";
  },
  isStatic: (_node) => {
    return false;
  },
  isAsync: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      const child = node.child(i);
      if (child?.type === "modifiers" && child.text.includes("suspend")) {
        return true;
      }
    }
    return false;
  },
  extractImport: (node, source) => {
    const importText = source.substring(node.startIndex, node.endIndex).trim();
    const identifier = node.namedChildren.find((c) => c.type === "identifier");
    if (identifier) {
      return { moduleName: source.substring(identifier.startIndex, identifier.endIndex), signature: importText };
    }
    return null;
  }
};

// src/extraction/languages/dart.ts
var dartExtractor = {
  functionTypes: ["function_signature"],
  classTypes: ["class_definition"],
  methodTypes: ["method_signature"],
  interfaceTypes: [],
  structTypes: [],
  enumTypes: ["enum_declaration"],
  enumMemberTypes: ["enum_constant"],
  typeAliasTypes: ["type_alias"],
  importTypes: ["import_or_export"],
  callTypes: [],
  // Dart calls use identifier+selector, handled via extractBareCall
  variableTypes: [],
  extraClassNodeTypes: ["mixin_declaration", "extension_declaration"],
  resolveBody: (node, bodyField) => {
    if (node.type === "function_signature" || node.type === "method_signature") {
      const next = node.nextNamedSibling;
      if (next?.type === "function_body") return next;
      return null;
    }
    const standard = node.childForFieldName(bodyField);
    if (standard) return standard;
    return node.namedChildren.find(
      (c) => c.type === "class_body" || c.type === "extension_body"
    ) || null;
  },
  nameField: "name",
  bodyField: "body",
  // class_definition uses 'body' field
  paramsField: "formal_parameter_list",
  returnField: "type",
  getSignature: (node, source) => {
    let sig = node;
    if (node.type === "method_signature") {
      const inner = node.namedChildren.find(
        (c) => c.type === "function_signature" || c.type === "getter_signature" || c.type === "setter_signature"
      );
      if (inner) sig = inner;
    }
    const params = sig.namedChildren.find((c) => c.type === "formal_parameter_list");
    const retType = sig.namedChildren.find(
      (c) => c.type === "type_identifier" || c.type === "void_type"
    );
    if (!params && !retType) return void 0;
    let result = "";
    if (retType) result += getNodeText(retType, source) + " ";
    if (params) result += getNodeText(params, source);
    return result.trim() || void 0;
  },
  getVisibility: (node) => {
    let nameNode = null;
    if (node.type === "method_signature") {
      const inner = node.namedChildren.find(
        (c) => c.type === "function_signature" || c.type === "getter_signature" || c.type === "setter_signature"
      );
      if (inner) nameNode = inner.namedChildren.find((c) => c.type === "identifier") || null;
    } else {
      nameNode = node.childForFieldName("name");
    }
    if (nameNode && nameNode.text.startsWith("_")) return "private";
    return "public";
  },
  isAsync: (node) => {
    const nextSibling = node.nextNamedSibling;
    if (nextSibling?.type === "function_body") {
      for (let i = 0; i < nextSibling.childCount; i++) {
        const child = nextSibling.child(i);
        if (child?.type === "async") return true;
      }
    }
    return false;
  },
  isStatic: (node) => {
    if (node.type === "method_signature") {
      for (let i = 0; i < node.childCount; i++) {
        const child = node.child(i);
        if (child?.type === "static") return true;
      }
    }
    return false;
  },
  extractImport: (node, source) => {
    const importText = source.substring(node.startIndex, node.endIndex).trim();
    let moduleName = "";
    const libraryImport = node.namedChildren.find((c) => c.type === "library_import");
    if (libraryImport) {
      const importSpec = libraryImport.namedChildren.find((c) => c.type === "import_specification");
      if (importSpec) {
        const configurableUri = importSpec.namedChildren.find((c) => c.type === "configurable_uri");
        if (configurableUri) {
          const uri = configurableUri.namedChildren.find((c) => c.type === "uri");
          if (uri) {
            const stringLiteral = uri.namedChildren.find((c) => c.type === "string_literal");
            if (stringLiteral) {
              moduleName = getNodeText(stringLiteral, source).replace(/['"]/g, "");
            }
          }
        }
      }
    }
    if (!moduleName) {
      const libraryExport = node.namedChildren.find((c) => c.type === "library_export");
      if (libraryExport) {
        const configurableUri = libraryExport.namedChildren.find((c) => c.type === "configurable_uri");
        if (configurableUri) {
          const uri = configurableUri.namedChildren.find((c) => c.type === "uri");
          if (uri) {
            const stringLiteral = uri.namedChildren.find((c) => c.type === "string_literal");
            if (stringLiteral) {
              moduleName = getNodeText(stringLiteral, source).replace(/['"]/g, "");
            }
          }
        }
      }
    }
    if (moduleName) {
      return { moduleName, signature: importText };
    }
    return null;
  },
  extractBareCall: (node, _source) => {
    if (node.type === "selector") {
      const hasArgPart = node.namedChildren.some((c) => c.type === "argument_part");
      if (!hasArgPart) return void 0;
      const prev = node.previousNamedSibling;
      if (!prev) return void 0;
      if (prev.type === "identifier") {
        return prev.text;
      }
      if (prev.type === "selector") {
        const accessor = prev.namedChildren.find(
          (c) => c.type === "unconditional_assignable_selector" || c.type === "conditional_assignable_selector"
        );
        if (accessor) {
          const methodId = accessor.namedChildren.find((c) => c.type === "identifier");
          if (methodId) {
            const accessorPrev = prev.previousNamedSibling;
            if (accessorPrev?.type === "identifier") {
              return accessorPrev.text + "." + methodId.text;
            }
            return methodId.text;
          }
        }
      }
      if (prev.type === "unconditional_assignable_selector" || prev.type === "conditional_assignable_selector") {
        const methodId = prev.namedChildren.find((c) => c.type === "identifier");
        if (methodId) return methodId.text;
      }
      return void 0;
    }
    if (node.type === "new_expression") {
      const typeId = node.namedChildren.find((c) => c.type === "type_identifier");
      if (typeId) return typeId.text;
      return void 0;
    }
    if (node.type === "const_object_expression") {
      const typeId = node.namedChildren.find((c) => c.type === "type_identifier");
      const nameId = node.namedChildren.find((c) => c.type === "identifier");
      if (typeId && nameId) return typeId.text + "." + nameId.text;
      if (typeId) return typeId.text;
      return void 0;
    }
    return void 0;
  }
};

// src/extraction/languages/pascal.ts
var pascalExtractor = {
  functionTypes: ["declProc"],
  classTypes: ["declClass"],
  methodTypes: ["declProc"],
  interfaceTypes: ["declIntf"],
  structTypes: [],
  enumTypes: ["declEnum"],
  typeAliasTypes: ["declType"],
  importTypes: ["declUses"],
  callTypes: ["exprCall"],
  variableTypes: ["declField", "declConst"],
  nameField: "name",
  bodyField: "body",
  paramsField: "args",
  returnField: "type",
  getSignature: (node, source) => {
    const args = getChildByField(node, "args");
    const returnType = node.namedChildren.find(
      (c) => c.type === "typeref"
    );
    if (!args && !returnType) return void 0;
    let sig = "";
    if (args) sig = getNodeText(args, source);
    if (returnType) {
      sig += ": " + getNodeText(returnType, source);
    }
    return sig || void 0;
  },
  getVisibility: (node) => {
    let current = node.parent;
    while (current) {
      if (current.type === "declSection") {
        for (let i = 0; i < current.childCount; i++) {
          const child = current.child(i);
          if (child?.type === "kPublic" || child?.type === "kPublished")
            return "public";
          if (child?.type === "kPrivate") return "private";
          if (child?.type === "kProtected") return "protected";
        }
      }
      current = current.parent;
    }
    return void 0;
  },
  isExported: (_node, _source) => {
    return false;
  },
  isStatic: (node) => {
    for (let i = 0; i < node.childCount; i++) {
      if (node.child(i)?.type === "kClass") return true;
    }
    return false;
  },
  isConst: (node) => {
    return node.type === "declConst";
  }
};

// src/extraction/languages/scala.ts
function getValVarName(node, source) {
  const patternNode = node.childForFieldName("pattern");
  if (!patternNode) return null;
  if (patternNode.type === "identifier") return getNodeText(patternNode, source);
  const identChild = patternNode.namedChildren.find((c) => c.type === "identifier");
  return identChild ? getNodeText(identChild, source) : null;
}
function extractVisibility(node) {
  for (let i = 0; i < node.namedChildCount; i++) {
    const child = node.namedChild(i);
    if (!child) continue;
    if (child.type === "modifiers" || child.type === "access_modifier") {
      const text = child.text;
      if (text.includes("private")) return "private";
      if (text.includes("protected")) return "protected";
    }
  }
  return "public";
}
var scalaExtractor = {
  // top-level function_definition is handled via methodTypes (same pattern as Kotlin)
  functionTypes: [],
  classTypes: ["class_definition", "object_definition", "trait_definition"],
  methodTypes: ["function_definition", "function_declaration"],
  interfaceTypes: [],
  structTypes: [],
  enumTypes: ["enum_definition"],
  enumMemberTypes: [],
  // handled in visitNode — enum_case_definitions wraps the cases
  typeAliasTypes: ["type_definition"],
  importTypes: ["import_declaration"],
  callTypes: ["call_expression"],
  variableTypes: [],
  // val/var handled in visitNode (use `pattern` field, not `name`)
  fieldTypes: [],
  extraClassNodeTypes: [],
  nameField: "name",
  bodyField: "body",
  paramsField: "parameters",
  returnField: "return_type",
  interfaceKind: "trait",
  classifyClassNode: (node) => {
    if (node.type === "trait_definition") return "trait";
    return "class";
  },
  getSignature: (node, source) => {
    const params = node.childForFieldName("parameters");
    const returnType = node.childForFieldName("return_type");
    if (!params && !returnType) return void 0;
    let sig = params ? getNodeText(params, source) : "";
    if (returnType) sig += ": " + getNodeText(returnType, source);
    return sig || void 0;
  },
  getVisibility: (node) => extractVisibility(node),
  isAsync: () => false,
  isStatic: (node) => {
    for (let i = 0; i < node.namedChildCount; i++) {
      const child = node.namedChild(i);
      if (child?.type === "modifiers" && child.text.includes("static")) return true;
    }
    return false;
  },
  visitNode: (node, ctx) => {
    const t = node.type;
    if (t === "val_definition" || t === "var_definition") {
      const name = getValVarName(node, ctx.source);
      if (!name) return false;
      const isInClass = ctx.nodeStack.length > 0 && (() => {
        const parentId = ctx.nodeStack[ctx.nodeStack.length - 1];
        const parentNode = ctx.nodes.find((n) => n.id === parentId);
        return parentNode != null && (parentNode.kind === "class" || parentNode.kind === "trait" || parentNode.kind === "interface" || parentNode.kind === "struct" || parentNode.kind === "enum" || parentNode.kind === "module");
      })();
      const kind = isInClass ? "field" : t === "val_definition" ? "constant" : "variable";
      const typeNode = node.childForFieldName("type");
      const sig = typeNode ? `${t === "val_definition" ? "val" : "var"} ${name}: ${getNodeText(typeNode, ctx.source)}` : void 0;
      ctx.createNode(kind, name, node, { signature: sig, visibility: extractVisibility(node) });
      return true;
    }
    if (t === "enum_case_definitions") {
      for (let i = 0; i < node.namedChildCount; i++) {
        const child = node.namedChild(i);
        if (!child) continue;
        if (child.type === "simple_enum_case" || child.type === "full_enum_case") {
          const nameNode = child.childForFieldName("name");
          if (nameNode) ctx.createNode("enum_member", getNodeText(nameNode, ctx.source), child);
        }
      }
      return true;
    }
    if (t === "extension_definition") {
      const body = node.childForFieldName("body");
      if (body) {
        for (let i = 0; i < body.namedChildCount; i++) {
          const child = body.namedChild(i);
          if (child) ctx.visitNode(child);
        }
      }
      return true;
    }
    return false;
  },
  extractImport: (node, source) => {
    const importText = getNodeText(node, source).trim();
    const pathNode = node.childForFieldName("path");
    if (pathNode) return { moduleName: getNodeText(pathNode, source), signature: importText };
    for (let i = 0; i < node.namedChildCount; i++) {
      const child = node.namedChild(i);
      if (child?.type === "identifier" || child?.type === "stable_identifier") {
        return { moduleName: getNodeText(child, source), signature: importText };
      }
    }
    return null;
  }
};

// src/extraction/languages/index.ts
var EXTRACTORS = {
  typescript: typescriptExtractor,
  tsx: typescriptExtractor,
  javascript: javascriptExtractor,
  jsx: javascriptExtractor,
  python: pythonExtractor,
  go: goExtractor,
  rust: rustExtractor,
  java: javaExtractor,
  c: cExtractor,
  cpp: cppExtractor,
  csharp: csharpExtractor,
  php: phpExtractor,
  ruby: rubyExtractor,
  swift: swiftExtractor,
  kotlin: kotlinExtractor,
  dart: dartExtractor,
  pascal: pascalExtractor,
  scala: scalaExtractor
};

// src/extraction/liquid-extractor.ts
var LiquidExtractor = class {
  filePath;
  source;
  nodes = [];
  edges = [];
  unresolvedReferences = [];
  errors = [];
  constructor(filePath, source) {
    this.filePath = filePath;
    this.source = source;
  }
  /**
   * Extract from Liquid source
   */
  extract() {
    const startTime = Date.now();
    try {
      const fileNode = this.createFileNode();
      this.extractSnippetReferences(fileNode.id);
      this.extractSectionReferences(fileNode.id);
      this.extractSchema(fileNode.id);
      this.extractAssignments(fileNode.id);
    } catch (error) {
      this.errors.push({
        message: `Liquid extraction error: ${error instanceof Error ? error.message : String(error)}`,
        severity: "error",
        code: "parse_error"
      });
    }
    return {
      nodes: this.nodes,
      edges: this.edges,
      unresolvedReferences: this.unresolvedReferences,
      errors: this.errors,
      durationMs: Date.now() - startTime
    };
  }
  /**
   * Create a file node for the Liquid template
   */
  createFileNode() {
    const lines = this.source.split("\n");
    const id = generateNodeId(this.filePath, "file", this.filePath, 1);
    const fileNode = {
      id,
      kind: "file",
      name: this.filePath.split("/").pop() || this.filePath,
      qualifiedName: this.filePath,
      filePath: this.filePath,
      language: "liquid",
      startLine: 1,
      endLine: lines.length,
      startColumn: 0,
      endColumn: lines[lines.length - 1]?.length || 0,
      updatedAt: Date.now()
    };
    this.nodes.push(fileNode);
    return fileNode;
  }
  /**
   * Extract {% render 'snippet' %} and {% include 'snippet' %} references
   */
  extractSnippetReferences(fileNodeId) {
    const renderRegex = /\{%[-]?\s*(render|include)\s+['"]([^'"]+)['"]/g;
    let match;
    while ((match = renderRegex.exec(this.source)) !== null) {
      const [fullMatch, tagType, snippetName] = match;
      const line = this.getLineNumber(match.index);
      const importNodeId = generateNodeId(this.filePath, "import", snippetName, line);
      const importNode = {
        id: importNodeId,
        kind: "import",
        name: snippetName,
        qualifiedName: `${this.filePath}::import:${snippetName}`,
        filePath: this.filePath,
        language: "liquid",
        signature: fullMatch,
        startLine: line,
        endLine: line,
        startColumn: match.index - this.getLineStart(line),
        endColumn: match.index - this.getLineStart(line) + fullMatch.length,
        updatedAt: Date.now()
      };
      this.nodes.push(importNode);
      this.edges.push({
        source: fileNodeId,
        target: importNodeId,
        kind: "contains"
      });
      const nodeId = generateNodeId(this.filePath, "component", `${tagType}:${snippetName}`, line);
      const node = {
        id: nodeId,
        kind: "component",
        name: snippetName,
        qualifiedName: `${this.filePath}::${tagType}:${snippetName}`,
        filePath: this.filePath,
        language: "liquid",
        startLine: line,
        endLine: line,
        startColumn: match.index - this.getLineStart(line),
        endColumn: match.index - this.getLineStart(line) + fullMatch.length,
        updatedAt: Date.now()
      };
      this.nodes.push(node);
      this.edges.push({
        source: fileNodeId,
        target: nodeId,
        kind: "contains"
      });
      this.unresolvedReferences.push({
        fromNodeId: fileNodeId,
        referenceName: `snippets/${snippetName}.liquid`,
        referenceKind: "references",
        line,
        column: match.index - this.getLineStart(line)
      });
    }
  }
  /**
   * Extract {% section 'name' %} references
   */
  extractSectionReferences(fileNodeId) {
    const sectionRegex = /\{%[-]?\s*section\s+['"]([^'"]+)['"]/g;
    let match;
    while ((match = sectionRegex.exec(this.source)) !== null) {
      const [fullMatch, sectionName] = match;
      const line = this.getLineNumber(match.index);
      const importNodeId = generateNodeId(this.filePath, "import", sectionName, line);
      const importNode = {
        id: importNodeId,
        kind: "import",
        name: sectionName,
        qualifiedName: `${this.filePath}::import:${sectionName}`,
        filePath: this.filePath,
        language: "liquid",
        signature: fullMatch,
        startLine: line,
        endLine: line,
        startColumn: match.index - this.getLineStart(line),
        endColumn: match.index - this.getLineStart(line) + fullMatch.length,
        updatedAt: Date.now()
      };
      this.nodes.push(importNode);
      this.edges.push({
        source: fileNodeId,
        target: importNodeId,
        kind: "contains"
      });
      const nodeId = generateNodeId(this.filePath, "component", `section:${sectionName}`, line);
      const node = {
        id: nodeId,
        kind: "component",
        name: sectionName,
        qualifiedName: `${this.filePath}::section:${sectionName}`,
        filePath: this.filePath,
        language: "liquid",
        startLine: line,
        endLine: line,
        startColumn: match.index - this.getLineStart(line),
        endColumn: match.index - this.getLineStart(line) + fullMatch.length,
        updatedAt: Date.now()
      };
      this.nodes.push(node);
      this.edges.push({
        source: fileNodeId,
        target: nodeId,
        kind: "contains"
      });
      this.unresolvedReferences.push({
        fromNodeId: fileNodeId,
        referenceName: `sections/${sectionName}.liquid`,
        referenceKind: "references",
        line,
        column: match.index - this.getLineStart(line)
      });
    }
  }
  /**
   * Extract {% schema %}...{% endschema %} blocks
   */
  extractSchema(fileNodeId) {
    const schemaRegex = /\{%[-]?\s*schema\s*[-]?%\}([\s\S]*?)\{%[-]?\s*endschema\s*[-]?%\}/g;
    let match;
    while ((match = schemaRegex.exec(this.source)) !== null) {
      const [fullMatch, schemaContent] = match;
      const startLine = this.getLineNumber(match.index);
      const endLine = this.getLineNumber(match.index + fullMatch.length);
      let schemaName = "schema";
      try {
        const schemaJson = JSON.parse(schemaContent);
        if (schemaJson.name) {
          schemaName = typeof schemaJson.name === "string" ? schemaJson.name : schemaJson.name.en || Object.values(schemaJson.name)[0] || "schema";
        }
      } catch {
      }
      const nodeId = generateNodeId(this.filePath, "constant", `schema:${schemaName}`, startLine);
      const node = {
        id: nodeId,
        kind: "constant",
        name: schemaName,
        qualifiedName: `${this.filePath}::schema:${schemaName}`,
        filePath: this.filePath,
        language: "liquid",
        startLine,
        endLine,
        startColumn: match.index - this.getLineStart(startLine),
        endColumn: 0,
        docstring: schemaContent?.trim().substring(0, 200),
        // Store first 200 chars as docstring
        updatedAt: Date.now()
      };
      this.nodes.push(node);
      this.edges.push({
        source: fileNodeId,
        target: nodeId,
        kind: "contains"
      });
    }
  }
  /**
   * Extract {% assign var = value %} statements
   */
  extractAssignments(fileNodeId) {
    const assignRegex = /\{%[-]?\s*assign\s+(\w+)\s*=/g;
    let match;
    while ((match = assignRegex.exec(this.source)) !== null) {
      const [, variableName] = match;
      const line = this.getLineNumber(match.index);
      const nodeId = generateNodeId(this.filePath, "variable", variableName, line);
      const node = {
        id: nodeId,
        kind: "variable",
        name: variableName,
        qualifiedName: `${this.filePath}::${variableName}`,
        filePath: this.filePath,
        language: "liquid",
        startLine: line,
        endLine: line,
        startColumn: match.index - this.getLineStart(line),
        endColumn: match.index - this.getLineStart(line) + match[0].length,
        updatedAt: Date.now()
      };
      this.nodes.push(node);
      this.edges.push({
        source: fileNodeId,
        target: nodeId,
        kind: "contains"
      });
    }
  }
  /**
   * Get the line number for a character index
   */
  getLineNumber(index) {
    const substring = this.source.substring(0, index);
    return (substring.match(/\n/g) || []).length + 1;
  }
  /**
   * Get the character index of the start of a line
   */
  getLineStart(lineNumber) {
    const lines = this.source.split("\n");
    let index = 0;
    for (let i = 0; i < lineNumber - 1 && i < lines.length; i++) {
      index += lines[i].length + 1;
    }
    return index;
  }
};

// src/extraction/svelte-extractor.ts
var SVELTE_RUNES = /* @__PURE__ */ new Set([
  "$props",
  "$state",
  "$derived",
  "$effect",
  "$bindable",
  "$inspect",
  "$host",
  "$snippet"
]);
var SvelteExtractor = class {
  filePath;
  source;
  nodes = [];
  edges = [];
  unresolvedReferences = [];
  errors = [];
  constructor(filePath, source) {
    this.filePath = filePath;
    this.source = source;
  }
  /**
   * Extract from Svelte source
   */
  extract() {
    const startTime = Date.now();
    try {
      const componentNode = this.createComponentNode();
      const scriptBlocks = this.extractScriptBlocks();
      for (const block of scriptBlocks) {
        this.processScriptBlock(block, componentNode.id);
      }
      this.extractTemplateCalls(componentNode.id, scriptBlocks);
      this.extractTemplateComponents(componentNode.id);
      this.unresolvedReferences = this.unresolvedReferences.filter(
        (ref) => !SVELTE_RUNES.has(ref.referenceName)
      );
    } catch (error) {
      this.errors.push({
        message: `Svelte extraction error: ${error instanceof Error ? error.message : String(error)}`,
        severity: "error",
        code: "parse_error"
      });
    }
    return {
      nodes: this.nodes,
      edges: this.edges,
      unresolvedReferences: this.unresolvedReferences,
      errors: this.errors,
      durationMs: Date.now() - startTime
    };
  }
  /**
   * Create a component node for the .svelte file
   */
  createComponentNode() {
    const lines = this.source.split("\n");
    const fileName = this.filePath.split(/[/\\]/).pop() || this.filePath;
    const componentName = fileName.replace(/\.svelte$/, "");
    const id = generateNodeId(this.filePath, "component", componentName, 1);
    const node = {
      id,
      kind: "component",
      name: componentName,
      qualifiedName: `${this.filePath}::${componentName}`,
      filePath: this.filePath,
      language: "svelte",
      startLine: 1,
      endLine: lines.length,
      startColumn: 0,
      endColumn: lines[lines.length - 1]?.length || 0,
      isExported: true,
      // Svelte components are always importable
      updatedAt: Date.now()
    };
    this.nodes.push(node);
    return node;
  }
  /**
   * Extract <script> blocks from the Svelte source
   */
  extractScriptBlocks() {
    const blocks = [];
    const scriptRegex = /<script(\s[^>]*)?>(?<content>[\s\S]*?)<\/script>/g;
    let match;
    while ((match = scriptRegex.exec(this.source)) !== null) {
      const attrs = match[1] || "";
      const content = match.groups?.content || match[2] || "";
      const isTypeScript = /lang\s*=\s*["'](ts|typescript)["']/.test(attrs);
      const isModule = /context\s*=\s*["']module["']/.test(attrs);
      const beforeScript = this.source.substring(0, match.index);
      const scriptTagLine = (beforeScript.match(/\n/g) || []).length;
      const openingTag = match[0].substring(0, match[0].indexOf(">") + 1);
      const openingTagLines = (openingTag.match(/\n/g) || []).length;
      const contentStartLine = scriptTagLine + openingTagLines + 1;
      blocks.push({
        content,
        startLine: contentStartLine,
        isModule,
        isTypeScript
      });
    }
    return blocks;
  }
  /**
   * Process a script block by delegating to TreeSitterExtractor
   */
  processScriptBlock(block, componentNodeId) {
    const scriptLanguage = block.isTypeScript ? "typescript" : "javascript";
    if (!isLanguageSupported(scriptLanguage)) {
      this.errors.push({
        message: `Parser for ${scriptLanguage} not available, cannot parse Svelte script block`,
        severity: "warning"
      });
      return;
    }
    const extractor = new TreeSitterExtractor(this.filePath, block.content, scriptLanguage);
    const result = extractor.extract();
    for (const node of result.nodes) {
      node.startLine += block.startLine;
      node.endLine += block.startLine;
      node.language = "svelte";
      this.nodes.push(node);
      this.edges.push({
        source: componentNodeId,
        target: node.id,
        kind: "contains"
      });
    }
    for (const edge of result.edges) {
      if (edge.line) {
        edge.line += block.startLine;
      }
      this.edges.push(edge);
    }
    for (const ref of result.unresolvedReferences) {
      ref.line += block.startLine;
      ref.filePath = this.filePath;
      ref.language = "svelte";
      this.unresolvedReferences.push(ref);
    }
    for (const error of result.errors) {
      if (error.line) {
        error.line += block.startLine;
      }
      this.errors.push(error);
    }
  }
  /**
   * Extract function calls from Svelte template expressions.
   *
   * In Svelte, many function calls happen in markup (e.g., `class={cn(...)}`),
   * not inside `<script>` blocks. We scan the template portion for `{expression}`
   * blocks and extract call patterns from them.
   */
  extractTemplateCalls(componentNodeId, _scriptBlocks) {
    const coveredRanges = [];
    const tagRegex = /<(script|style)(\s[^>]*)?>[\s\S]*?<\/\1>/g;
    let tagMatch;
    while ((tagMatch = tagRegex.exec(this.source)) !== null) {
      const startLine = (this.source.substring(0, tagMatch.index).match(/\n/g) || []).length;
      const endLine = startLine + (tagMatch[0].match(/\n/g) || []).length;
      coveredRanges.push([startLine, endLine]);
    }
    const lines = this.source.split("\n");
    const exprRegex = /\{([^}#/:@][^}]*)\}/g;
    for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
      if (coveredRanges.some(([start, end]) => lineIdx >= start && lineIdx <= end)) continue;
      const line = lines[lineIdx];
      let exprMatch;
      while ((exprMatch = exprRegex.exec(line)) !== null) {
        const expr = exprMatch[1];
        const callRegex = /\b([a-zA-Z_$][\w$.]*)\s*\(/g;
        let callMatch;
        while ((callMatch = callRegex.exec(expr)) !== null) {
          const calleeName = callMatch[1];
          if (SVELTE_RUNES.has(calleeName)) continue;
          if (calleeName === "if" || calleeName === "else" || calleeName === "each" || calleeName === "await") continue;
          this.unresolvedReferences.push({
            fromNodeId: componentNodeId,
            referenceName: calleeName,
            referenceKind: "calls",
            line: lineIdx + 1,
            // 1-indexed
            column: exprMatch.index + callMatch.index,
            filePath: this.filePath,
            language: "svelte"
          });
        }
      }
    }
  }
  /**
   * Extract component usages from the Svelte template.
   *
   * PascalCase tags like <Modal>, <Button />, <DevServerPreview> represent
   * component instantiations — analogous to function calls in imperative code.
   * Capturing these creates graph edges from parent to child components and
   * gives codegraph_explore anchor points in the template markup.
   */
  extractTemplateComponents(componentNodeId) {
    const coveredRanges = [];
    const tagRegex = /<(script|style)(\s[^>]*)?>[\s\S]*?<\/\1>/g;
    let tagMatch;
    while ((tagMatch = tagRegex.exec(this.source)) !== null) {
      const startLine = (this.source.substring(0, tagMatch.index).match(/\n/g) || []).length;
      const endLine = startLine + (tagMatch[0].match(/\n/g) || []).length;
      coveredRanges.push([startLine, endLine]);
    }
    const lines = this.source.split("\n");
    const componentTagRegex = /<([A-Z][a-zA-Z0-9_$]*)\b/g;
    for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
      if (coveredRanges.some(([start, end]) => lineIdx >= start && lineIdx <= end)) continue;
      const line = lines[lineIdx];
      let match;
      while ((match = componentTagRegex.exec(line)) !== null) {
        const componentName = match[1];
        this.unresolvedReferences.push({
          fromNodeId: componentNodeId,
          referenceName: componentName,
          referenceKind: "references",
          line: lineIdx + 1,
          // 1-indexed
          column: match.index + 1,
          filePath: this.filePath,
          language: "svelte"
        });
      }
    }
  }
};

// src/extraction/dfm-extractor.ts
var DfmExtractor = class {
  filePath;
  source;
  nodes = [];
  edges = [];
  unresolvedReferences = [];
  errors = [];
  constructor(filePath, source) {
    this.filePath = filePath;
    this.source = source;
  }
  /**
   * Extract components and event handler references from DFM/FMX source
   */
  extract() {
    const startTime = Date.now();
    try {
      const fileNode = this.createFileNode();
      this.parseComponents(fileNode.id);
    } catch (error) {
      this.errors.push({
        message: `DFM extraction error: ${error instanceof Error ? error.message : String(error)}`,
        severity: "error",
        code: "parse_error"
      });
    }
    return {
      nodes: this.nodes,
      edges: this.edges,
      unresolvedReferences: this.unresolvedReferences,
      errors: this.errors,
      durationMs: Date.now() - startTime
    };
  }
  /** Create a file node for the DFM form file */
  createFileNode() {
    const lines = this.source.split("\n");
    const id = generateNodeId(this.filePath, "file", this.filePath, 1);
    const fileNode = {
      id,
      kind: "file",
      name: this.filePath.split("/").pop() || this.filePath,
      qualifiedName: this.filePath,
      filePath: this.filePath,
      language: "pascal",
      startLine: 1,
      endLine: lines.length,
      startColumn: 0,
      endColumn: lines[lines.length - 1]?.length || 0,
      updatedAt: Date.now()
    };
    this.nodes.push(fileNode);
    return fileNode;
  }
  /** Parse object/end blocks and extract components + event handlers */
  parseComponents(fileNodeId) {
    const lines = this.source.split("\n");
    const stack = [fileNodeId];
    const objectPattern = /^\s*(object|inherited|inline)\s+(\w+)\s*:\s*(\w+)/;
    const eventPattern = /^\s*(On\w+)\s*=\s*(\w+)\s*$/;
    const endPattern = /^\s*end\s*$/;
    const multiLineStart = /=\s*\(\s*$/;
    const multiLineItemStart = /=\s*<\s*$/;
    let inMultiLine = false;
    let multiLineEndChar = ")";
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNum = i + 1;
      if (inMultiLine) {
        if (line.trimEnd().endsWith(multiLineEndChar)) inMultiLine = false;
        continue;
      }
      if (multiLineStart.test(line)) {
        inMultiLine = true;
        multiLineEndChar = ")";
        continue;
      }
      if (multiLineItemStart.test(line)) {
        inMultiLine = true;
        multiLineEndChar = ">";
        continue;
      }
      const objMatch = line.match(objectPattern);
      if (objMatch) {
        const [, , name, typeName] = objMatch;
        const nodeId = generateNodeId(this.filePath, "component", name, lineNum);
        this.nodes.push({
          id: nodeId,
          kind: "component",
          name,
          qualifiedName: `${this.filePath}#${name}`,
          filePath: this.filePath,
          language: "pascal",
          startLine: lineNum,
          endLine: lineNum,
          startColumn: 0,
          endColumn: line.length,
          signature: typeName,
          updatedAt: Date.now()
        });
        this.edges.push({
          source: stack[stack.length - 1],
          target: nodeId,
          kind: "contains"
        });
        stack.push(nodeId);
        continue;
      }
      const eventMatch = line.match(eventPattern);
      if (eventMatch) {
        const [, , methodName] = eventMatch;
        this.unresolvedReferences.push({
          fromNodeId: stack[stack.length - 1],
          referenceName: methodName,
          referenceKind: "references",
          line: lineNum,
          column: 0
        });
        continue;
      }
      if (endPattern.test(line)) {
        if (stack.length > 1) stack.pop();
      }
    }
  }
};

// src/extraction/vue-extractor.ts
var VueExtractor = class {
  filePath;
  source;
  nodes = [];
  edges = [];
  unresolvedReferences = [];
  errors = [];
  constructor(filePath, source) {
    this.filePath = filePath;
    this.source = source;
  }
  /**
   * Extract from Vue source
   */
  extract() {
    const startTime = Date.now();
    try {
      const componentNode = this.createComponentNode();
      const scriptBlocks = this.extractScriptBlocks();
      for (const block of scriptBlocks) {
        this.processScriptBlock(block, componentNode.id);
      }
    } catch (error) {
      this.errors.push({
        message: `Vue extraction error: ${error instanceof Error ? error.message : String(error)}`,
        severity: "error"
      });
    }
    return {
      nodes: this.nodes,
      edges: this.edges,
      unresolvedReferences: this.unresolvedReferences,
      errors: this.errors,
      durationMs: Date.now() - startTime
    };
  }
  /**
   * Create a component node for the .vue file
   */
  createComponentNode() {
    const lines = this.source.split("\n");
    const fileName = this.filePath.split(/[/\\]/).pop() || this.filePath;
    const componentName = fileName.replace(/\.vue$/, "");
    const id = generateNodeId(this.filePath, "component", componentName, 1);
    const node = {
      id,
      kind: "component",
      name: componentName,
      qualifiedName: `${this.filePath}::${componentName}`,
      filePath: this.filePath,
      language: "vue",
      startLine: 1,
      endLine: lines.length,
      startColumn: 0,
      endColumn: lines[lines.length - 1]?.length || 0,
      isExported: true,
      // Vue components are always importable
      updatedAt: Date.now()
    };
    this.nodes.push(node);
    return node;
  }
  /**
   * Extract <script> and <script setup> blocks from the Vue source
   */
  extractScriptBlocks() {
    const blocks = [];
    const scriptRegex = /<script(\s[^>]*)?>(?<content>[\s\S]*?)<\/script>/g;
    let match;
    while ((match = scriptRegex.exec(this.source)) !== null) {
      const attrs = match[1] || "";
      const content = match.groups?.content || match[2] || "";
      const isTypeScript = /lang\s*=\s*["'](ts|typescript)["']/.test(attrs);
      const isSetup = /\bsetup\b/.test(attrs);
      const beforeScript = this.source.substring(0, match.index);
      const scriptTagLine = (beforeScript.match(/\n/g) || []).length;
      const openingTag = match[0].substring(0, match[0].indexOf(">") + 1);
      const openingTagLines = (openingTag.match(/\n/g) || []).length;
      const contentStartLine = scriptTagLine + openingTagLines + 1;
      blocks.push({
        content,
        startLine: contentStartLine,
        isSetup,
        isTypeScript
      });
    }
    return blocks;
  }
  /**
   * Process a script block by delegating to TreeSitterExtractor
   */
  processScriptBlock(block, componentNodeId) {
    const scriptLanguage = block.isTypeScript ? "typescript" : "javascript";
    if (!isLanguageSupported(scriptLanguage)) {
      this.errors.push({
        message: `Parser for ${scriptLanguage} not available, cannot parse Vue script block`,
        severity: "warning"
      });
      return;
    }
    const extractor = new TreeSitterExtractor(this.filePath, block.content, scriptLanguage);
    const result = extractor.extract();
    for (const node of result.nodes) {
      node.startLine += block.startLine;
      node.endLine += block.startLine;
      node.language = "vue";
      this.nodes.push(node);
      this.edges.push({
        source: componentNodeId,
        target: node.id,
        kind: "contains"
      });
    }
    for (const edge of result.edges) {
      if (edge.line) {
        edge.line += block.startLine;
      }
      this.edges.push(edge);
    }
    for (const ref of result.unresolvedReferences) {
      ref.line += block.startLine;
      ref.filePath = this.filePath;
      ref.language = "vue";
      this.unresolvedReferences.push(ref);
    }
    for (const error of result.errors) {
      if (error.line) {
        error.line += block.startLine;
      }
      this.errors.push(error);
    }
  }
};

// src/resolution/strip-comments.ts
function stripCommentsForRegex(content, lang) {
  switch (lang) {
    case "python":
      return stripPython(content);
    case "ruby":
      return stripRuby(content);
    case "rust":
      return stripRust(content);
    case "php":
      return stripPhp(content);
    case "go":
      return stripGo(content);
    case "javascript":
    case "typescript":
    case "java":
    case "csharp":
    case "swift":
      return stripCStyle(
        content,
        /* allowSingleQuoteStrings */
        lang === "javascript" || lang === "typescript"
      );
    default:
      return content;
  }
}
function blankRange(buf, start, end, src) {
  for (let i = start; i < end; i++) {
    buf[i] = src[i] === "\n" ? "\n" : " ";
  }
}
function stripPython(src) {
  const out = src.split("");
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    const c2 = src[i + 1] ?? "";
    const c3 = src[i + 2] ?? "";
    if ((c === '"' || c === "'") && c2 === c && c3 === c) {
      const quote = c;
      const start = i;
      i += 3;
      while (i < n) {
        if (src[i] === "\\" && i + 1 < n) {
          i += 2;
          continue;
        }
        if (src[i] === quote && src[i + 1] === quote && src[i + 2] === quote) {
          i += 3;
          break;
        }
        i++;
      }
      blankRange(out, start, i, src);
      continue;
    }
    if (c === '"' || c === "'") {
      const quote = c;
      i++;
      while (i < n && src[i] !== quote) {
        if (src[i] === "\\" && i + 1 < n) {
          i += 2;
          continue;
        }
        if (src[i] === "\n") break;
        i++;
      }
      if (i < n && src[i] === quote) i++;
      continue;
    }
    if (c === "#") {
      const start = i;
      while (i < n && src[i] !== "\n") i++;
      blankRange(out, start, i, src);
      continue;
    }
    i++;
  }
  return out.join("");
}
function stripRuby(src) {
  const out = src.split("");
  let i = 0;
  const n = src.length;
  let atLineStart = true;
  while (i < n) {
    const c = src[i];
    if (atLineStart && c === "=" && src.startsWith("=begin", i)) {
      const start = i;
      i += "=begin".length;
      while (i < n) {
        if (src[i] === "\n") {
          let j = i + 1;
          while (j < n && (src[j] === " " || src[j] === "	")) j++;
          if (src.startsWith("=end", j)) {
            i = j + "=end".length;
            while (i < n && src[i] !== "\n") i++;
            break;
          }
        }
        i++;
      }
      blankRange(out, start, i, src);
      atLineStart = i > 0 && src[i - 1] === "\n";
      continue;
    }
    if (c === '"' || c === "'") {
      const quote = c;
      i++;
      while (i < n && src[i] !== quote) {
        if (src[i] === "\\" && i + 1 < n) {
          i += 2;
          continue;
        }
        if (src[i] === "\n") break;
        i++;
      }
      if (i < n && src[i] === quote) i++;
      atLineStart = false;
      continue;
    }
    if (c === "#") {
      const start = i;
      while (i < n && src[i] !== "\n") i++;
      blankRange(out, start, i, src);
      atLineStart = false;
      continue;
    }
    if (c === "\n") {
      atLineStart = true;
      i++;
      continue;
    }
    if (c === " " || c === "	") {
      i++;
      continue;
    }
    atLineStart = false;
    i++;
  }
  return out.join("");
}
function stripCStyle(src, allowSingleQuoteStrings) {
  const out = src.split("");
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    const c2 = src[i + 1] ?? "";
    if (c === "/" && c2 === "*") {
      const start = i;
      i += 2;
      while (i < n && !(src[i] === "*" && src[i + 1] === "/")) i++;
      if (i < n) i += 2;
      blankRange(out, start, i, src);
      continue;
    }
    if (c === "/" && c2 === "/") {
      const start = i;
      while (i < n && src[i] !== "\n") i++;
      blankRange(out, start, i, src);
      continue;
    }
    if (c === '"' || allowSingleQuoteStrings && c === "'" || c === "`") {
      const quote = c;
      i++;
      while (i < n && src[i] !== quote) {
        if (src[i] === "\\" && i + 1 < n) {
          i += 2;
          continue;
        }
        if (quote !== "`" && src[i] === "\n") break;
        i++;
      }
      if (i < n && src[i] === quote) i++;
      continue;
    }
    i++;
  }
  return out.join("");
}
function stripPhp(src) {
  const out = src.split("");
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    const c2 = src[i + 1] ?? "";
    if (c === "/" && c2 === "*") {
      const start = i;
      i += 2;
      while (i < n && !(src[i] === "*" && src[i + 1] === "/")) i++;
      if (i < n) i += 2;
      blankRange(out, start, i, src);
      continue;
    }
    if (c === "/" && c2 === "/") {
      const start = i;
      while (i < n && src[i] !== "\n") i++;
      blankRange(out, start, i, src);
      continue;
    }
    if (c === "#") {
      const start = i;
      while (i < n && src[i] !== "\n") i++;
      blankRange(out, start, i, src);
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      const quote = c;
      i++;
      while (i < n && src[i] !== quote) {
        if (src[i] === "\\" && i + 1 < n) {
          i += 2;
          continue;
        }
        if (src[i] === "\n") break;
        i++;
      }
      if (i < n && src[i] === quote) i++;
      continue;
    }
    i++;
  }
  return out.join("");
}
function stripGo(src) {
  const out = src.split("");
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    const c2 = src[i + 1] ?? "";
    if (c === "/" && c2 === "*") {
      const start = i;
      i += 2;
      while (i < n && !(src[i] === "*" && src[i + 1] === "/")) i++;
      if (i < n) i += 2;
      blankRange(out, start, i, src);
      continue;
    }
    if (c === "/" && c2 === "/") {
      const start = i;
      while (i < n && src[i] !== "\n") i++;
      blankRange(out, start, i, src);
      continue;
    }
    if (c === "`") {
      i++;
      while (i < n && src[i] !== "`") i++;
      if (i < n) i++;
      continue;
    }
    if (c === '"') {
      i++;
      while (i < n && src[i] !== '"') {
        if (src[i] === "\\" && i + 1 < n) {
          i += 2;
          continue;
        }
        if (src[i] === "\n") break;
        i++;
      }
      if (i < n && src[i] === '"') i++;
      continue;
    }
    if (c === "'") {
      i++;
      while (i < n && src[i] !== "'") {
        if (src[i] === "\\" && i + 1 < n) {
          i += 2;
          continue;
        }
        if (src[i] === "\n") break;
        i++;
      }
      if (i < n && src[i] === "'") i++;
      continue;
    }
    i++;
  }
  return out.join("");
}
function stripRust(src) {
  const out = src.split("");
  let i = 0;
  const n = src.length;
  while (i < n) {
    const c = src[i];
    const c2 = src[i + 1] ?? "";
    if (c === "/" && c2 === "*") {
      const start = i;
      i += 2;
      let depth = 1;
      while (i < n && depth > 0) {
        if (src[i] === "/" && src[i + 1] === "*") {
          depth++;
          i += 2;
        } else if (src[i] === "*" && src[i + 1] === "/") {
          depth--;
          i += 2;
        } else {
          i++;
        }
      }
      blankRange(out, start, i, src);
      continue;
    }
    if (c === "/" && c2 === "/") {
      const start = i;
      while (i < n && src[i] !== "\n") i++;
      blankRange(out, start, i, src);
      continue;
    }
    if (c === '"') {
      i++;
      while (i < n && src[i] !== '"') {
        if (src[i] === "\\" && i + 1 < n) {
          i += 2;
          continue;
        }
        i++;
      }
      if (i < n && src[i] === '"') i++;
      continue;
    }
    if (c === "'") {
      i++;
      while (i < n && src[i] !== "'") {
        if (src[i] === "\\" && i + 1 < n) {
          i += 2;
          continue;
        }
        if (src[i] === "\n") break;
        i++;
      }
      if (i < n && src[i] === "'") i++;
      continue;
    }
    i++;
  }
  return out.join("");
}

// src/resolution/frameworks/laravel.ts
var laravelResolver = {
  name: "laravel",
  languages: ["php"],
  detect(context) {
    return context.fileExists("artisan") || context.fileExists("app/Http/Kernel.php");
  },
  resolve(ref, context) {
    const modelMatch = ref.referenceName.match(/^([A-Z][a-zA-Z]+)::(\w+)$/);
    if (modelMatch) {
      const [, className, methodName] = modelMatch;
      const result = resolveModelCall(className, methodName, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.85,
          resolvedBy: "framework"
        };
      }
    }
    const facadeMatch = ref.referenceName.match(/^(Auth|Cache|DB|Log|Mail|Queue|Session|Storage|Validator|Route|Request|Response)::(\w+)$/);
    if (facadeMatch) {
      return null;
    }
    if (["route", "view", "config", "env", "app", "abort", "redirect", "response", "request", "session", "url", "asset", "mix"].includes(ref.referenceName)) {
      return null;
    }
    const controllerMatch = ref.referenceName.match(/^([A-Z][a-zA-Z]+Controller)@(\w+)$/);
    if (controllerMatch) {
      const [, controller, method] = controllerMatch;
      const result = resolveControllerMethod(controller, method, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.9,
          resolvedBy: "framework"
        };
      }
    }
    return null;
  },
  extract(filePath, content) {
    if (!filePath.endsWith(".php")) return { nodes: [], references: [] };
    const nodes = [];
    const references = [];
    const now = Date.now();
    const safe = stripCommentsForRegex(content, "php");
    const routeRegex = /Route::(get|post|put|patch|delete|options|any)\s*\(\s*['"]([^'"]+)['"]\s*,\s*([^)]+)\)/g;
    let match;
    while ((match = routeRegex.exec(safe)) !== null) {
      const [, method, routePath, handlerExpr] = match;
      const line = safe.slice(0, match.index).split("\n").length;
      const upper = method.toUpperCase();
      const routeNode = {
        id: `route:${filePath}:${line}:${upper}:${routePath}`,
        kind: "route",
        name: `${upper} ${routePath}`,
        qualifiedName: `${filePath}::route:${routePath}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: match[0].length,
        language: "php",
        updatedAt: now
      };
      nodes.push(routeNode);
      const handlerName = extractLaravelHandler(handlerExpr);
      if (handlerName) {
        references.push({
          fromNodeId: routeNode.id,
          referenceName: handlerName,
          referenceKind: "references",
          line,
          column: 0,
          filePath,
          language: "php"
        });
      }
    }
    const resourceRegex = /Route::(resource|apiResource)\s*\(\s*['"]([^'"]+)['"]\s*(?:,\s*([^)]+))?\)/g;
    while ((match = resourceRegex.exec(safe)) !== null) {
      const [, _fn, resourceName, handlerExpr] = match;
      const line = safe.slice(0, match.index).split("\n").length;
      const routeNode = {
        id: `route:${filePath}:${line}:RESOURCE:${resourceName}`,
        kind: "route",
        name: `resource:${resourceName}`,
        qualifiedName: `${filePath}::route:${resourceName}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: match[0].length,
        language: "php",
        updatedAt: now
      };
      nodes.push(routeNode);
      if (handlerExpr) {
        const controllerName = extractLaravelHandler(handlerExpr);
        if (controllerName) {
          references.push({
            fromNodeId: routeNode.id,
            referenceName: controllerName,
            referenceKind: "imports",
            line,
            column: 0,
            filePath,
            language: "php"
          });
        }
      }
    }
    return { nodes, references };
  }
};
function extractLaravelHandler(expr) {
  const trimmed = expr.trim();
  const tupleMatch = trimmed.match(/^\[\s*[^,]+,\s*['"]([^'"]+)['"]\s*\]/);
  if (tupleMatch) return tupleMatch[1];
  const atMatch = trimmed.match(/^['"]([^'"@]+)@([^'"]+)['"]$/);
  if (atMatch) return atMatch[2];
  const classMatch = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)::class/);
  if (classMatch) return classMatch[1];
  return null;
}
function resolveModelCall(className, methodName, context) {
  let modelPath = `app/Models/${className}.php`;
  if (context.fileExists(modelPath)) {
    const nodes = context.getNodesInFile(modelPath);
    const methodNode = nodes.find(
      (n) => n.kind === "method" && n.name === methodName
    );
    if (methodNode) {
      return methodNode.id;
    }
    const classNode = nodes.find(
      (n) => n.kind === "class" && n.name === className
    );
    if (classNode) {
      return classNode.id;
    }
  }
  modelPath = `app/${className}.php`;
  if (context.fileExists(modelPath)) {
    const nodes = context.getNodesInFile(modelPath);
    const methodNode = nodes.find(
      (n) => n.kind === "method" && n.name === methodName
    );
    if (methodNode) {
      return methodNode.id;
    }
    const classNode = nodes.find(
      (n) => n.kind === "class" && n.name === className
    );
    if (classNode) {
      return classNode.id;
    }
  }
  return null;
}
function resolveControllerMethod(controller, method, context) {
  const controllerPath = `app/Http/Controllers/${controller}.php`;
  if (context.fileExists(controllerPath)) {
    const nodes = context.getNodesInFile(controllerPath);
    const methodNode = nodes.find(
      (n) => n.kind === "method" && n.name === method
    );
    if (methodNode) {
      return methodNode.id;
    }
  }
  const controllerCandidates = context.getNodesByName(controller);
  for (const ctrl of controllerCandidates) {
    if (ctrl.kind === "class" && ctrl.filePath.includes("Controllers")) {
      const nodesInFile = context.getNodesInFile(ctrl.filePath);
      const methodNode = nodesInFile.find(
        (n) => n.kind === "method" && n.name === method
      );
      if (methodNode) {
        return methodNode.id;
      }
    }
  }
  return null;
}

// src/resolution/frameworks/express.ts
function extractTailIdent(expr) {
  const cleaned = expr.replace(/\s+/g, "").replace(/\(\)$/, "");
  const m = cleaned.match(/(?:\.|^)([A-Za-z_][A-Za-z0-9_]*)$/);
  return m ? m[1] : null;
}
var expressResolver = {
  name: "express",
  languages: ["javascript", "typescript"],
  detect(context) {
    const packageJson = context.readFile("package.json");
    if (packageJson) {
      try {
        const pkg = JSON.parse(packageJson);
        const deps = { ...pkg.dependencies, ...pkg.devDependencies };
        if (deps.express || deps.fastify || deps.koa || deps.hapi) {
          return true;
        }
      } catch {
      }
    }
    const allFiles = context.getAllFiles();
    for (const file of allFiles) {
      if (file.includes("routes") || file.includes("controllers") || file.includes("middleware")) {
        const content = context.readFile(file);
        if (content && (content.includes("express") || content.includes("app.get") || content.includes("router.get"))) {
          return true;
        }
      }
    }
    return false;
  },
  resolve(ref, context) {
    if (isMiddlewareName(ref.referenceName)) {
      const result = resolveMiddleware(ref.referenceName, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    const controllerMatch = ref.referenceName.match(/^(\w+)Controller\.(\w+)$/);
    if (controllerMatch) {
      const [, controller, method] = controllerMatch;
      const result = resolveControllerMethod2(controller, method, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.85,
          resolvedBy: "framework"
        };
      }
    }
    const serviceMatch = ref.referenceName.match(/^(\w+)(Service|Helper|Utils?)\.(\w+)$/);
    if (serviceMatch) {
      const [, name, suffix, method] = serviceMatch;
      const result = resolveServiceMethod(name + suffix, method, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    return null;
  },
  extract(filePath, content) {
    if (!/\.(m?js|tsx?|cjs)$/.test(filePath)) return { nodes: [], references: [] };
    const nodes = [];
    const references = [];
    const now = Date.now();
    const lang = detectLanguage2(filePath);
    const safe = stripCommentsForRegex(content, lang);
    const regex = /\b(app|router)\.(get|post|put|patch|delete|all|use)\s*\(\s*['"]([^'"]+)['"]\s*,\s*([^)]+)\)/g;
    let match;
    while ((match = regex.exec(safe)) !== null) {
      const [, _obj, method, routePath, handlers] = match;
      if (method === "use" && !routePath.startsWith("/")) continue;
      const line = safe.slice(0, match.index).split("\n").length;
      const routeNode = {
        id: `route:${filePath}:${line}:${method.toUpperCase()}:${routePath}`,
        kind: "route",
        name: `${method.toUpperCase()} ${routePath}`,
        qualifiedName: `${filePath}::${method.toUpperCase()}:${routePath}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: match[0].length,
        language: detectLanguage2(filePath),
        updatedAt: now
      };
      nodes.push(routeNode);
      const parts = handlers.split(",").map((s) => s.trim()).filter(Boolean);
      const last = parts[parts.length - 1];
      const handlerName = last ? extractTailIdent(last) : null;
      if (handlerName) {
        references.push({
          fromNodeId: routeNode.id,
          referenceName: handlerName,
          referenceKind: "references",
          line,
          column: 0,
          filePath,
          language: detectLanguage2(filePath)
        });
      }
    }
    return { nodes, references };
  }
};
function isMiddlewareName(name) {
  const middlewarePatterns = [
    /^auth$/i,
    /^authenticate$/i,
    /^authorization$/i,
    /^validate/i,
    /^sanitize/i,
    /^rateLimit/i,
    /^cors$/i,
    /^helmet$/i,
    /^logger$/i,
    /^errorHandler$/i,
    /^notFound$/i,
    /Middleware$/i
  ];
  return middlewarePatterns.some((p) => p.test(name));
}
function resolveMiddleware(name, context) {
  const candidates = context.getNodesByName(name);
  const match = candidates.find(
    (n) => n.name.toLowerCase() === name.toLowerCase() || n.name.toLowerCase() === name.replace(/Middleware$/i, "").toLowerCase()
  );
  if (match) return match.id;
  const baseName = name.replace(/Middleware$/i, "");
  if (baseName !== name) {
    const baseCandidates = context.getNodesByName(baseName);
    const MIDDLEWARE_DIRS2 = ["/middleware/", "/middlewares/"];
    const preferred = baseCandidates.filter(
      (n) => MIDDLEWARE_DIRS2.some((d) => n.filePath.includes(d))
    );
    if (preferred.length > 0) return preferred[0].id;
    if (baseCandidates.length > 0) return baseCandidates[0].id;
  }
  return null;
}
function resolveControllerMethod2(controller, method, context) {
  const methodCandidates = context.getNodesByName(method);
  const methodNodes = methodCandidates.filter(
    (n) => (n.kind === "method" || n.kind === "function") && n.filePath.toLowerCase().includes(controller.toLowerCase())
  );
  if (methodNodes.length > 0) return methodNodes[0].id;
  const controllerName = controller + "Controller";
  const controllerCandidates = context.getNodesByName(controllerName);
  for (const ctrl of controllerCandidates) {
    const nodesInFile = context.getNodesInFile(ctrl.filePath);
    const methodNode = nodesInFile.find(
      (n) => (n.kind === "method" || n.kind === "function") && n.name === method
    );
    if (methodNode) return methodNode.id;
  }
  return null;
}
function resolveServiceMethod(serviceName, method, context) {
  const methodCandidates = context.getNodesByName(method);
  const stripped = serviceName.replace(/(Service|Helper|Utils?)$/i, "").toLowerCase();
  const methodNodes = methodCandidates.filter(
    (n) => (n.kind === "method" || n.kind === "function") && n.filePath.toLowerCase().includes(stripped)
  );
  if (methodNodes.length > 0) return methodNodes[0].id;
  return null;
}
function detectLanguage2(filePath) {
  if (filePath.endsWith(".ts") || filePath.endsWith(".tsx")) {
    return "typescript";
  }
  return "javascript";
}

// src/resolution/frameworks/react.ts
var reactResolver = {
  name: "react",
  languages: ["javascript", "typescript"],
  detect(context) {
    const packageJson = context.readFile("package.json");
    if (packageJson) {
      try {
        const pkg = JSON.parse(packageJson);
        const deps = { ...pkg.dependencies, ...pkg.devDependencies };
        if (deps.react || deps.next || deps["react-native"]) {
          return true;
        }
      } catch {
      }
    }
    const allFiles = context.getAllFiles();
    return allFiles.some((f) => f.endsWith(".jsx") || f.endsWith(".tsx"));
  },
  resolve(ref, context) {
    if (isPascalCase(ref.referenceName) && !isBuiltInType(ref.referenceName)) {
      const result = resolveComponent(ref.referenceName, ref.filePath, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.startsWith("use") && ref.referenceName.length > 3) {
      const result = resolveHook(ref.referenceName, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.85,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("Context") || ref.referenceName.endsWith("Provider")) {
      const result = resolveContext(ref.referenceName, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    return null;
  },
  extract(filePath, content) {
    const nodes = [];
    const now = Date.now();
    const componentPatterns = [
      // Function components
      /(?:export\s+)?function\s+([A-Z][a-zA-Z0-9]*)\s*\(/g,
      // Arrow function components
      /(?:export\s+)?(?:const|let)\s+([A-Z][a-zA-Z0-9]*)\s*=\s*(?:\([^)]*\)|[a-zA-Z_][a-zA-Z0-9_]*)\s*=>/g,
      // forwardRef components
      /(?:export\s+)?(?:const|let)\s+([A-Z][a-zA-Z0-9]*)\s*=\s*(?:React\.)?forwardRef/g,
      // memo components
      /(?:export\s+)?(?:const|let)\s+([A-Z][a-zA-Z0-9]*)\s*=\s*(?:React\.)?memo/g
    ];
    for (const pattern of componentPatterns) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const [fullMatch, name] = match;
        const line = content.slice(0, match.index).split("\n").length;
        const afterMatch = content.slice(match.index + fullMatch.length, match.index + fullMatch.length + 500);
        const hasJSX = afterMatch.includes("<") && (afterMatch.includes("/>") || afterMatch.includes("</"));
        if (hasJSX) {
          nodes.push({
            id: `component:${filePath}:${name}:${line}`,
            kind: "component",
            name,
            qualifiedName: `${filePath}::${name}`,
            filePath,
            startLine: line,
            endLine: line,
            startColumn: 0,
            endColumn: fullMatch.length,
            language: filePath.endsWith(".tsx") ? "tsx" : "jsx",
            isExported: fullMatch.includes("export"),
            updatedAt: now
          });
        }
      }
    }
    const hookPattern = /(?:export\s+)?(?:function|const|let)\s+(use[A-Z][a-zA-Z0-9]*)\s*[=(]/g;
    let hookMatch;
    while ((hookMatch = hookPattern.exec(content)) !== null) {
      const [fullMatch, name] = hookMatch;
      const line = content.slice(0, hookMatch.index).split("\n").length;
      nodes.push({
        id: `hook:${filePath}:${name}:${line}`,
        kind: "function",
        name,
        qualifiedName: `${filePath}::${name}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: fullMatch.length,
        language: filePath.endsWith(".ts") || filePath.endsWith(".tsx") ? "typescript" : "javascript",
        isExported: fullMatch.includes("export"),
        updatedAt: now
      });
    }
    if (filePath.includes("pages/") || filePath.includes("app/")) {
      if (content.includes("export default")) {
        const routePath = filePathToRoute(filePath);
        if (routePath) {
          const line = content.indexOf("export default");
          const lineNum = content.slice(0, line).split("\n").length;
          nodes.push({
            id: `route:${filePath}:${routePath}:${lineNum}`,
            kind: "route",
            name: routePath,
            qualifiedName: `${filePath}::route:${routePath}`,
            filePath,
            startLine: lineNum,
            endLine: lineNum,
            startColumn: 0,
            endColumn: 0,
            language: filePath.endsWith(".tsx") ? "tsx" : filePath.endsWith(".ts") ? "typescript" : "javascript",
            updatedAt: now
          });
        }
      }
    }
    return { nodes, references: [] };
  }
};
function isPascalCase(str) {
  return /^[A-Z][a-zA-Z0-9]*$/.test(str);
}
function isBuiltInType(name) {
  return BUILT_IN_TYPES.has(name);
}
var BUILT_IN_TYPES = /* @__PURE__ */ new Set([
  "Array",
  "Boolean",
  "Date",
  "Error",
  "Function",
  "JSON",
  "Math",
  "Number",
  "Object",
  "Promise",
  "RegExp",
  "String",
  "Symbol",
  "Map",
  "Set",
  "WeakMap",
  "WeakSet",
  "React",
  "Component",
  "Fragment",
  "Suspense",
  "StrictMode"
]);
var COMPONENT_KINDS = /* @__PURE__ */ new Set(["component", "function", "class"]);
function resolveComponent(name, fromFile, context) {
  const candidates = context.getNodesByName(name);
  if (candidates.length === 0) return null;
  const components = candidates.filter((n) => COMPONENT_KINDS.has(n.kind));
  if (components.length === 0) return null;
  const fromDir = fromFile.substring(0, fromFile.lastIndexOf("/"));
  const sameDir = components.filter((n) => n.filePath.startsWith(fromDir));
  if (sameDir.length > 0) return sameDir[0].id;
  const COMPONENT_DIRS2 = ["/components/", "/src/components/", "/app/components/", "/pages/", "/src/pages/", "/views/", "/src/views/"];
  const preferred = components.filter(
    (n) => COMPONENT_DIRS2.some((d) => n.filePath.includes(d))
  );
  if (preferred.length > 0) return preferred[0].id;
  return components[0].id;
}
function resolveHook(name, context) {
  const candidates = context.getNodesByName(name);
  if (candidates.length === 0) return null;
  const hooks = candidates.filter((n) => n.kind === "function" && n.name.startsWith("use"));
  if (hooks.length === 0) return null;
  const HOOK_DIRS = ["/hooks/", "/src/hooks/", "/lib/hooks/", "/utils/hooks/"];
  const preferred = hooks.filter(
    (n) => HOOK_DIRS.some((d) => n.filePath.includes(d))
  );
  if (preferred.length > 0) return preferred[0].id;
  return hooks[0].id;
}
function resolveContext(name, context) {
  const candidates = context.getNodesByName(name);
  if (candidates.length === 0) {
    const baseName = name.replace(/Context$|Provider$/, "");
    if (baseName !== name) {
      const baseCandidates = context.getNodesByName(baseName);
      if (baseCandidates.length > 0) return baseCandidates[0].id;
    }
    return null;
  }
  const CONTEXT_DIRS = ["/context/", "/contexts/", "/src/context/", "/src/contexts/", "/providers/", "/src/providers/"];
  const preferred = candidates.filter(
    (n) => CONTEXT_DIRS.some((d) => n.filePath.includes(d))
  );
  if (preferred.length > 0) return preferred[0].id;
  return candidates[0].id;
}
function filePathToRoute(filePath) {
  if (filePath.includes("pages/")) {
    let route = filePath.replace(/^.*pages\//, "/").replace(/\/index\.(tsx?|jsx?)$/, "").replace(/\.(tsx?|jsx?)$/, "").replace(/\[([^\]]+)\]/g, ":$1");
    if (route === "") route = "/";
    return route;
  }
  if (filePath.includes("app/")) {
    if (!filePath.includes("page.")) {
      return null;
    }
    let route = filePath.replace(/^.*app\//, "/").replace(/\/page\.(tsx?|jsx?)$/, "").replace(/\[([^\]]+)\]/g, ":$1");
    if (route === "") route = "/";
    return route;
  }
  return null;
}

// src/resolution/frameworks/svelte.ts
var SVELTE_RUNES2 = /* @__PURE__ */ new Set([
  "$state",
  "$state.raw",
  "$state.snapshot",
  "$derived",
  "$derived.by",
  "$effect",
  "$effect.pre",
  "$effect.root",
  "$effect.tracking",
  "$props",
  "$bindable",
  "$inspect",
  "$host"
]);
var SVELTEKIT_MODULE_PREFIXES = [
  "$app/navigation",
  "$app/stores",
  "$app/environment",
  "$app/forms",
  "$app/paths",
  "$env/static/private",
  "$env/static/public",
  "$env/dynamic/private",
  "$env/dynamic/public"
];
var svelteResolver = {
  name: "svelte",
  languages: ["svelte"],
  detect(context) {
    const packageJson = context.readFile("package.json");
    if (packageJson) {
      try {
        const pkg = JSON.parse(packageJson);
        const deps = { ...pkg.dependencies, ...pkg.devDependencies };
        if (deps.svelte || deps["@sveltejs/kit"]) {
          return true;
        }
      } catch {
      }
    }
    const allFiles = context.getAllFiles();
    return allFiles.some((f) => f.endsWith(".svelte"));
  },
  resolve(ref, context) {
    if (isRuneReference(ref.referenceName)) {
      return {
        original: ref,
        targetNodeId: ref.fromNodeId,
        confidence: 1,
        resolvedBy: "framework"
      };
    }
    if (ref.referenceName.startsWith("$") && !ref.referenceName.startsWith("$$")) {
      const storeName = ref.referenceName.substring(1);
      const storeNode = context.getNodesByName(storeName).find(
        (n) => n.kind === "variable" || n.kind === "constant"
      );
      if (storeNode) {
        return {
          original: ref,
          targetNodeId: storeNode.id,
          confidence: 0.85,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceKind === "imports" && ref.referenceName.startsWith("$")) {
      if (ref.referenceName.startsWith("$lib/")) {
        const libPath = ref.referenceName.replace("$lib/", "src/lib/");
        for (const ext of ["", ".ts", ".js", ".svelte", "/index.ts", "/index.js"]) {
          const fullPath = libPath + ext;
          if (context.fileExists(fullPath)) {
            const nodes = context.getNodesInFile(fullPath);
            if (nodes.length > 0) {
              return {
                original: ref,
                targetNodeId: nodes[0].id,
                confidence: 0.9,
                resolvedBy: "framework"
              };
            }
          }
        }
      }
      if (SVELTEKIT_MODULE_PREFIXES.some((prefix) => ref.referenceName.startsWith(prefix))) {
        return {
          original: ref,
          targetNodeId: ref.fromNodeId,
          confidence: 1,
          resolvedBy: "framework"
        };
      }
    }
    if (isPascalCase2(ref.referenceName) && ref.referenceKind === "calls") {
      const result = resolveComponent2(ref.referenceName, ref.filePath, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    return null;
  },
  extract(filePath, _content) {
    const nodes = [];
    const now = Date.now();
    const fileName = filePath.split(/[/\\]/).pop() || "";
    const routeMatch = getSvelteKitRouteInfo(fileName);
    if (routeMatch) {
      const routePath = filePathToSvelteKitRoute(filePath);
      if (routePath) {
        nodes.push({
          id: `route:${filePath}:${routePath}:1`,
          kind: "route",
          name: routePath,
          qualifiedName: `${filePath}::route:${routePath}`,
          filePath,
          startLine: 1,
          endLine: 1,
          startColumn: 0,
          endColumn: 0,
          language: filePath.endsWith(".svelte") ? "svelte" : "typescript",
          updatedAt: now
        });
      }
    }
    return { nodes, references: [] };
  }
};
function isRuneReference(name) {
  if (SVELTE_RUNES2.has(name)) return true;
  if (name === "$state" || name === "$derived" || name === "$effect") return true;
  return false;
}
function isPascalCase2(str) {
  return /^[A-Z][a-zA-Z0-9]*$/.test(str);
}
function resolveComponent2(name, fromFile, context) {
  const candidates = context.getNodesByName(name);
  const components = candidates.filter((n) => n.kind === "component");
  if (components.length === 0) return null;
  const fromDir = fromFile.substring(0, fromFile.lastIndexOf("/"));
  const sameDir = components.filter((n) => n.filePath.startsWith(fromDir));
  if (sameDir.length > 0) return sameDir[0].id;
  return components[0].id;
}
var SVELTEKIT_ROUTE_FILES = {
  "+page.svelte": "page",
  "+page.ts": "page-load",
  "+page.js": "page-load",
  "+page.server.ts": "page-server-load",
  "+page.server.js": "page-server-load",
  "+layout.svelte": "layout",
  "+layout.ts": "layout-load",
  "+layout.js": "layout-load",
  "+layout.server.ts": "layout-server-load",
  "+layout.server.js": "layout-server-load",
  "+server.ts": "api-endpoint",
  "+server.js": "api-endpoint",
  "+error.svelte": "error-page"
};
function getSvelteKitRouteInfo(fileName) {
  return SVELTEKIT_ROUTE_FILES[fileName] || null;
}
function filePathToSvelteKitRoute(filePath) {
  const normalized = filePath.replace(/\\/g, "/");
  const routesIndex = normalized.indexOf("/routes/");
  if (routesIndex === -1) return null;
  const afterRoutes = normalized.substring(routesIndex + "/routes/".length);
  const lastSlash = afterRoutes.lastIndexOf("/");
  const dirPath = lastSlash === -1 ? "" : afterRoutes.substring(0, lastSlash);
  let route = "/" + dirPath.replace(/\[\.\.\.([^\]]+)\]/g, "*$1").replace(/\[{2}([^\]]+)\]{2}/g, ":$1?").replace(/\[([^\]]+)\]/g, ":$1");
  if (route === "/") return "/";
  return route.replace(/\/$/, "");
}

// src/resolution/frameworks/vue.ts
var VUE_COMPILER_MACROS = /* @__PURE__ */ new Set([
  "defineProps",
  "defineEmits",
  "defineExpose",
  "defineOptions",
  "defineSlots",
  "defineModel",
  "withDefaults"
]);
var NUXT_AUTO_IMPORTS = /* @__PURE__ */ new Set([
  // Routing
  "useRoute",
  "useRouter",
  "navigateTo",
  "abortNavigation",
  // Data fetching
  "useFetch",
  "useAsyncData",
  "useLazyFetch",
  "useLazyAsyncData",
  "refreshNuxtData",
  // State
  "useState",
  "clearNuxtState",
  // Head
  "useHead",
  "useSeoMeta",
  "useServerSeoMeta",
  // Runtime
  "useRuntimeConfig",
  "useAppConfig",
  "useNuxtApp",
  // Cookies
  "useCookie",
  // Error
  "useError",
  "createError",
  "showError",
  "clearError",
  // Page/layout
  "definePageMeta",
  "defineNuxtConfig",
  "defineNuxtPlugin",
  "defineNuxtRouteMiddleware",
  // Request
  "useRequestHeaders",
  "useRequestEvent",
  "useRequestFetch",
  "useRequestURL"
]);
var NUXT_VIRTUAL_MODULES = [
  "#imports",
  "#components",
  "#app",
  "#build",
  "#head"
];
var vueResolver = {
  name: "vue",
  detect(context) {
    const packageJson = context.readFile("package.json");
    if (packageJson) {
      try {
        const pkg = JSON.parse(packageJson);
        const deps = { ...pkg.dependencies, ...pkg.devDependencies };
        if (deps.vue || deps.nuxt || deps["@nuxt/kit"]) {
          return true;
        }
      } catch {
      }
    }
    const allFiles = context.getAllFiles();
    return allFiles.some((f) => f.endsWith(".vue"));
  },
  resolve(ref, context) {
    if (VUE_COMPILER_MACROS.has(ref.referenceName)) {
      return {
        original: ref,
        targetNodeId: ref.fromNodeId,
        confidence: 1,
        resolvedBy: "framework"
      };
    }
    if (NUXT_AUTO_IMPORTS.has(ref.referenceName)) {
      return {
        original: ref,
        targetNodeId: ref.fromNodeId,
        confidence: 1,
        resolvedBy: "framework"
      };
    }
    if (ref.referenceKind === "imports" && ref.referenceName.startsWith("#")) {
      if (NUXT_VIRTUAL_MODULES.some((prefix) => ref.referenceName.startsWith(prefix))) {
        return {
          original: ref,
          targetNodeId: ref.fromNodeId,
          confidence: 1,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceKind === "imports" && ref.referenceName.startsWith("@/")) {
      const aliasPath = ref.referenceName.replace("@/", "src/");
      for (const ext of ["", ".ts", ".js", ".vue", "/index.ts", "/index.js", "/index.vue"]) {
        const fullPath = aliasPath + ext;
        if (context.fileExists(fullPath)) {
          const nodes = context.getNodesInFile(fullPath);
          if (nodes.length > 0) {
            return {
              original: ref,
              targetNodeId: nodes[0].id,
              confidence: 0.9,
              resolvedBy: "framework"
            };
          }
        }
      }
    }
    if (ref.referenceKind === "imports" && ref.referenceName.startsWith("~/")) {
      const aliasPath = ref.referenceName.replace("~/", "src/");
      for (const ext of ["", ".ts", ".js", ".vue", "/index.ts", "/index.js", "/index.vue"]) {
        const fullPath = aliasPath + ext;
        if (context.fileExists(fullPath)) {
          const nodes = context.getNodesInFile(fullPath);
          if (nodes.length > 0) {
            return {
              original: ref,
              targetNodeId: nodes[0].id,
              confidence: 0.9,
              resolvedBy: "framework"
            };
          }
        }
      }
    }
    if (isPascalCase3(ref.referenceName) && ref.referenceKind === "calls") {
      const result = resolveComponent3(ref.referenceName, ref.filePath, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    return null;
  },
  extract(filePath, _content) {
    const nodes = [];
    const now = Date.now();
    const normalized = filePath.replace(/\\/g, "/");
    const pagesIndex = normalized.indexOf("/pages/");
    if (pagesIndex !== -1 && normalized.endsWith(".vue")) {
      const routePath = filePathToNuxtRoute(normalized, pagesIndex + "/pages/".length);
      if (routePath !== null) {
        nodes.push({
          id: `route:${filePath}:${routePath}:1`,
          kind: "route",
          name: routePath,
          qualifiedName: `${filePath}::route:${routePath}`,
          filePath,
          startLine: 1,
          endLine: 1,
          startColumn: 0,
          endColumn: 0,
          language: "vue",
          updatedAt: now
        });
      }
    }
    const apiIndex = normalized.indexOf("/server/api/");
    if (apiIndex !== -1) {
      const afterApi = normalized.substring(apiIndex + "/server/api/".length);
      const routeName = afterApi.replace(/\.[^/.]+$/, "").replace(/\/index$/, "");
      const apiRoute = "/api/" + routeName;
      nodes.push({
        id: `route:${filePath}:${apiRoute}:1`,
        kind: "route",
        name: apiRoute,
        qualifiedName: `${filePath}::route:${apiRoute}`,
        filePath,
        startLine: 1,
        endLine: 1,
        startColumn: 0,
        endColumn: 0,
        language: normalized.endsWith(".vue") ? "vue" : "typescript",
        updatedAt: now
      });
    }
    const middlewareIndex = normalized.indexOf("/middleware/");
    if (middlewareIndex !== -1) {
      const afterMiddleware = normalized.substring(middlewareIndex + "/middleware/".length);
      const middlewareName = afterMiddleware.replace(/\.[^/.]+$/, "");
      nodes.push({
        id: `middleware:${filePath}:${middlewareName}:1`,
        kind: "function",
        name: middlewareName,
        qualifiedName: `${filePath}::middleware:${middlewareName}`,
        filePath,
        startLine: 1,
        endLine: 1,
        startColumn: 0,
        endColumn: 0,
        language: normalized.endsWith(".vue") ? "vue" : "typescript",
        updatedAt: now
      });
    }
    return { nodes, references: [] };
  }
};
function isPascalCase3(str) {
  return /^[A-Z][a-zA-Z0-9]*$/.test(str);
}
function resolveComponent3(name, fromFile, context) {
  const allFiles = context.getAllFiles();
  const vueFiles = allFiles.filter((f) => f.endsWith(".vue"));
  for (const file of vueFiles) {
    const fileName = file.split(/[/\\]/).pop() || "";
    const componentName = fileName.replace(/\.vue$/, "");
    if (componentName === name) {
      const nodes = context.getNodesInFile(file);
      const component = nodes.find((n) => n.kind === "component" && n.name === name);
      if (component) {
        return component.id;
      }
    }
  }
  const fromDir = fromFile.substring(0, fromFile.lastIndexOf("/"));
  for (const file of vueFiles) {
    if (file.startsWith(fromDir)) {
      const fileName = file.split(/[/\\]/).pop() || "";
      const componentName = fileName.replace(/\.vue$/, "");
      if (componentName === name) {
        const nodes = context.getNodesInFile(file);
        const component = nodes.find((n) => n.kind === "component");
        if (component) {
          return component.id;
        }
      }
    }
  }
  return null;
}
function filePathToNuxtRoute(normalized, afterPagesStart) {
  const afterPages = normalized.substring(afterPagesStart);
  const withoutExt = afterPages.replace(/\.vue$/, "");
  const withoutIndex = withoutExt.replace(/\/index$/, "");
  let route = "/" + withoutIndex.replace(/\[\.\.\.([^\]]+)\]/g, "*$1").replace(/\[{2}([^\]]+)\]{2}/g, ":$1?").replace(/\[([^\]]+)\]/g, ":$1");
  if (route === "/") return "/";
  return route.replace(/\/$/, "");
}

// src/resolution/frameworks/python.ts
var djangoResolver = {
  name: "django",
  languages: ["python"],
  detect(context) {
    const requirements = context.readFile("requirements.txt");
    if (requirements && requirements.toLowerCase().includes("django")) return true;
    const setup = context.readFile("setup.py");
    if (setup && setup.toLowerCase().includes("django")) return true;
    const pyproject = context.readFile("pyproject.toml");
    if (pyproject && pyproject.toLowerCase().includes("django")) return true;
    return context.fileExists("manage.py");
  },
  resolve(ref, context) {
    if (ref.referenceName.endsWith("Model") || /^[A-Z][a-z]+$/.test(ref.referenceName)) {
      const result = resolveByNameAndKind(ref.referenceName, CLASS_KINDS, MODEL_DIRS, context);
      if (result) return { original: ref, targetNodeId: result, confidence: 0.8, resolvedBy: "framework" };
    }
    if (ref.referenceName.endsWith("View") || ref.referenceName.endsWith("ViewSet")) {
      const result = resolveByNameAndKind(ref.referenceName, VIEW_KINDS, VIEW_DIRS, context);
      if (result) return { original: ref, targetNodeId: result, confidence: 0.8, resolvedBy: "framework" };
    }
    if (ref.referenceName.endsWith("Form")) {
      const result = resolveByNameAndKind(ref.referenceName, CLASS_KINDS, FORM_DIRS, context);
      if (result) return { original: ref, targetNodeId: result, confidence: 0.8, resolvedBy: "framework" };
    }
    return null;
  },
  extract(filePath, content) {
    if (!filePath.endsWith(".py")) return { nodes: [], references: [] };
    const nodes = [];
    const references = [];
    const now = Date.now();
    const safe = stripCommentsForRegex(content, "python");
    const routeRegex = /\b(path|re_path|url)\s*\(\s*r?['"]([^'"]+)['"]\s*,\s*([\w.]+(?:\s*\([^)]*\))?)/g;
    let match;
    while ((match = routeRegex.exec(safe)) !== null) {
      const [, _fn, urlPath, handlerExpr] = match;
      const line = safe.slice(0, match.index).split("\n").length;
      const routeNode = {
        id: `route:${filePath}:${line}:${urlPath}`,
        kind: "route",
        name: urlPath,
        qualifiedName: `${filePath}::route:${urlPath}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: match[0].length,
        language: "python",
        updatedAt: now
      };
      nodes.push(routeNode);
      const handler = handlerExpr.trim();
      const target = resolveHandlerName(handler);
      if (target) {
        references.push({
          fromNodeId: routeNode.id,
          referenceName: target.name,
          referenceKind: target.kind,
          line,
          column: 0,
          filePath,
          language: "python"
        });
      }
    }
    return { nodes, references };
  }
};
function resolveHandlerName(expr) {
  const includeMatch = expr.match(/^include\s*\(\s*['"]([^'"]+)['"]/);
  if (includeMatch) return { name: includeMatch[1], kind: "imports" };
  let head = expr.replace(/\.as_view\s*\([^)]*\)\s*$/, "");
  head = head.replace(/\.\w+\s*\([^)]*\)\s*$/, "");
  const dotted = head.split(".").filter(Boolean);
  if (dotted.length === 0) return null;
  const last = dotted[dotted.length - 1];
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(last)) return null;
  return { name: last, kind: "references" };
}
var flaskResolver = {
  name: "flask",
  languages: ["python"],
  detect(context) {
    const requirements = context.readFile("requirements.txt");
    if (requirements && /\bflask\b/i.test(requirements)) return true;
    const pyproject = context.readFile("pyproject.toml");
    if (pyproject && /\bflask\b/i.test(pyproject)) return true;
    for (const file of ["app.py", "application.py", "main.py", "__init__.py"]) {
      const content = context.readFile(file);
      if (content && content.includes("Flask(__name__)")) return true;
    }
    return false;
  },
  resolve(ref, context) {
    if (ref.referenceName.endsWith("_bp") || ref.referenceName.endsWith("_blueprint")) {
      const result = resolveByNameAndKind(ref.referenceName, VARIABLE_KINDS, [], context);
      if (result) return { original: ref, targetNodeId: result, confidence: 0.8, resolvedBy: "framework" };
    }
    return null;
  },
  extract(filePath, content) {
    if (!filePath.endsWith(".py")) return { nodes: [], references: [] };
    return extractDecoratorRoutes(filePath, stripCommentsForRegex(content, "python"), {
      // Flask: @x.route('/path', methods=[...])
      decoratorRegex: /@(\w+)\.route\s*\(\s*['"]([^'"]+)['"](?:\s*,\s*methods\s*=\s*\[([^\]]+)\])?\s*\)\s*\n\s*(?:async\s+)?def\s+(\w+)/g,
      defaultMethod: "GET",
      methodFromGroup: 3,
      pathGroup: 2,
      handlerGroup: 4,
      language: "python"
    });
  }
};
var fastapiResolver = {
  name: "fastapi",
  languages: ["python"],
  detect(context) {
    const requirements = context.readFile("requirements.txt");
    if (requirements && /\bfastapi\b/i.test(requirements)) return true;
    const pyproject = context.readFile("pyproject.toml");
    if (pyproject && /\bfastapi\b/i.test(pyproject)) return true;
    for (const file of ["app.py", "main.py", "api.py"]) {
      const content = context.readFile(file);
      if (content && content.includes("FastAPI(")) return true;
    }
    return false;
  },
  resolve(ref, context) {
    if (ref.referenceName.endsWith("_router") || ref.referenceName === "router") {
      const result = resolveByNameAndKind(ref.referenceName, VARIABLE_KINDS, ROUTER_DIRS, context);
      if (result) return { original: ref, targetNodeId: result, confidence: 0.8, resolvedBy: "framework" };
    }
    if (ref.referenceName.startsWith("get_") || ref.referenceName.startsWith("Depends")) {
      const result = resolveByNameAndKind(ref.referenceName, FUNCTION_KINDS, DEP_DIRS, context);
      if (result) return { original: ref, targetNodeId: result, confidence: 0.75, resolvedBy: "framework" };
    }
    return null;
  },
  extract(filePath, content) {
    if (!filePath.endsWith(".py")) return { nodes: [], references: [] };
    return extractDecoratorRoutes(filePath, stripCommentsForRegex(content, "python"), {
      // FastAPI: @x.METHOD('/path') -> handler on the next def line
      decoratorRegex: /@(\w+)\.(get|post|put|patch|delete|options|head)\s*\(\s*['"]([^'"]+)['"]/g,
      defaultMethod: "",
      methodGroup: 2,
      pathGroup: 3,
      findHandler: true,
      language: "python"
    });
  }
};
function extractDecoratorRoutes(filePath, content, opts) {
  const nodes = [];
  const references = [];
  const now = Date.now();
  let match;
  while ((match = opts.decoratorRegex.exec(content)) !== null) {
    const routePath = match[opts.pathGroup];
    let method = opts.defaultMethod;
    if (opts.methodGroup && match[opts.methodGroup]) {
      method = match[opts.methodGroup].toUpperCase();
    } else if (opts.methodFromGroup && match[opts.methodFromGroup]) {
      const m = match[opts.methodFromGroup].match(/['"]([A-Z]+)['"]/i);
      if (m) method = m[1].toUpperCase();
    }
    const line = content.slice(0, match.index).split("\n").length;
    const name = method ? `${method} ${routePath}` : routePath;
    const routeNode = {
      id: `route:${filePath}:${line}:${method}:${routePath}`,
      kind: "route",
      name,
      qualifiedName: `${filePath}::${method}:${routePath}`,
      filePath,
      startLine: line,
      endLine: line,
      startColumn: 0,
      endColumn: match[0].length,
      language: opts.language,
      updatedAt: now
    };
    nodes.push(routeNode);
    let handlerName;
    if (opts.handlerGroup && match[opts.handlerGroup]) {
      handlerName = match[opts.handlerGroup];
    } else if (opts.findHandler) {
      const tail = content.slice(match.index + match[0].length);
      const defMatch = tail.match(/\n\s*(?:async\s+)?def\s+(\w+)/);
      if (defMatch) handlerName = defMatch[1];
    }
    if (handlerName) {
      references.push({
        fromNodeId: routeNode.id,
        referenceName: handlerName,
        referenceKind: "references",
        line,
        column: 0,
        filePath,
        language: "python"
      });
    }
  }
  return { nodes, references };
}
var MODEL_DIRS = ["models", "app/models", "src/models"];
var VIEW_DIRS = ["views", "app/views", "src/views", "api/views"];
var FORM_DIRS = ["forms", "app/forms", "src/forms"];
var ROUTER_DIRS = ["/routers/", "/api/", "/routes/", "/endpoints/"];
var DEP_DIRS = ["/dependencies/", "/deps/", "/core/"];
var CLASS_KINDS = /* @__PURE__ */ new Set(["class"]);
var VIEW_KINDS = /* @__PURE__ */ new Set(["class", "function"]);
var VARIABLE_KINDS = /* @__PURE__ */ new Set(["variable"]);
var FUNCTION_KINDS = /* @__PURE__ */ new Set(["function"]);
function resolveByNameAndKind(name, kinds, preferredDirPatterns, context) {
  const candidates = context.getNodesByName(name);
  if (candidates.length === 0) return null;
  const kindFiltered = candidates.filter((n) => kinds.has(n.kind));
  if (kindFiltered.length === 0) return null;
  if (preferredDirPatterns.length > 0) {
    const preferred = kindFiltered.filter(
      (n) => preferredDirPatterns.some((d) => n.filePath.includes(d))
    );
    if (preferred.length > 0) return preferred[0].id;
  }
  return kindFiltered[0].id;
}

// src/resolution/frameworks/ruby.ts
var railsResolver = {
  name: "rails",
  languages: ["ruby"],
  detect(context) {
    const gemfile = context.readFile("Gemfile");
    if (gemfile && gemfile.includes("'rails'")) {
      return true;
    }
    if (context.fileExists("config/application.rb")) {
      return true;
    }
    return context.fileExists("app/controllers/application_controller.rb") || context.fileExists("config/routes.rb");
  },
  resolve(ref, context) {
    if (/^[A-Z][a-zA-Z]+$/.test(ref.referenceName)) {
      const result = resolveModel(ref.referenceName, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("Controller")) {
      const result = resolveController(ref.referenceName, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.85,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("Helper")) {
      const result = resolveHelper(ref.referenceName, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("Service") || ref.referenceName.endsWith("Job")) {
      const result = resolveService(ref.referenceName, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    return null;
  },
  extract(filePath, content) {
    if (!filePath.endsWith(".rb")) return { nodes: [], references: [] };
    const nodes = [];
    const references = [];
    const now = Date.now();
    const safe = stripCommentsForRegex(content, "ruby");
    const routeRegex = /\b(get|post|put|patch|delete|match)\s+['"]([^'"]+)['"]\s*(?:,\s*to:\s*|=>\s*)['"]([^#'"]+)#([^'"]+)['"]/g;
    let match;
    while ((match = routeRegex.exec(safe)) !== null) {
      const [, method, routePath, _controller, action] = match;
      const line = safe.slice(0, match.index).split("\n").length;
      const upper = method.toUpperCase();
      const routeNode = {
        id: `route:${filePath}:${line}:${upper}:${routePath}`,
        kind: "route",
        name: `${upper} ${routePath}`,
        qualifiedName: `${filePath}::route:${routePath}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: match[0].length,
        language: "ruby",
        updatedAt: now
      };
      nodes.push(routeNode);
      references.push({
        fromNodeId: routeNode.id,
        referenceName: action,
        referenceKind: "references",
        line,
        column: 0,
        filePath,
        language: "ruby"
      });
    }
    return { nodes, references };
  }
};
function resolveModel(name, context) {
  const snakeName = name.replace(/([A-Z])/g, "_$1").toLowerCase().slice(1);
  const possiblePaths = [
    `app/models/${snakeName}.rb`,
    `app/models/concerns/${snakeName}.rb`
  ];
  for (const modelPath of possiblePaths) {
    if (context.fileExists(modelPath)) {
      const nodes = context.getNodesInFile(modelPath);
      const modelNode2 = nodes.find(
        (n) => n.kind === "class" && n.name === name
      );
      if (modelNode2) {
        return modelNode2.id;
      }
    }
  }
  const candidates = context.getNodesByName(name);
  const modelNode = candidates.find(
    (n) => n.kind === "class" && n.filePath.includes("app/models/")
  );
  if (modelNode) return modelNode.id;
  return null;
}
function resolveController(name, context) {
  const snakeName = name.replace(/([A-Z])/g, "_$1").toLowerCase().slice(1);
  const possiblePaths = [
    `app/controllers/${snakeName}.rb`,
    `app/controllers/api/${snakeName}.rb`,
    `app/controllers/api/v1/${snakeName}.rb`
  ];
  for (const controllerPath of possiblePaths) {
    if (context.fileExists(controllerPath)) {
      const nodes = context.getNodesInFile(controllerPath);
      const controllerNode2 = nodes.find(
        (n) => n.kind === "class" && n.name === name
      );
      if (controllerNode2) {
        return controllerNode2.id;
      }
    }
  }
  const candidates = context.getNodesByName(name);
  const controllerNode = candidates.find(
    (n) => n.kind === "class" && n.filePath.includes("controllers/")
  );
  if (controllerNode) return controllerNode.id;
  return null;
}
function resolveHelper(name, context) {
  const snakeName = name.replace(/([A-Z])/g, "_$1").toLowerCase().slice(1);
  const helperPath = `app/helpers/${snakeName}.rb`;
  if (context.fileExists(helperPath)) {
    const nodes = context.getNodesInFile(helperPath);
    const helperNode = nodes.find(
      (n) => n.kind === "module" && n.name === name
    );
    if (helperNode) {
      return helperNode.id;
    }
  }
  return null;
}
function resolveService(name, context) {
  const snakeName = name.replace(/([A-Z])/g, "_$1").toLowerCase().slice(1);
  const possiblePaths = [
    `app/services/${snakeName}.rb`,
    `app/jobs/${snakeName}.rb`,
    `app/workers/${snakeName}.rb`
  ];
  for (const servicePath of possiblePaths) {
    if (context.fileExists(servicePath)) {
      const nodes = context.getNodesInFile(servicePath);
      const serviceNode = nodes.find(
        (n) => n.kind === "class" && n.name === name
      );
      if (serviceNode) {
        return serviceNode.id;
      }
    }
  }
  return null;
}

// src/resolution/frameworks/java.ts
var springResolver = {
  name: "spring",
  languages: ["java"],
  detect(context) {
    const pomXml = context.readFile("pom.xml");
    if (pomXml && (pomXml.includes("spring-boot") || pomXml.includes("springframework"))) {
      return true;
    }
    const buildGradle = context.readFile("build.gradle");
    if (buildGradle && (buildGradle.includes("spring-boot") || buildGradle.includes("springframework"))) {
      return true;
    }
    const buildGradleKts = context.readFile("build.gradle.kts");
    if (buildGradleKts && (buildGradleKts.includes("spring-boot") || buildGradleKts.includes("springframework"))) {
      return true;
    }
    const allFiles = context.getAllFiles();
    for (const file of allFiles) {
      if (file.endsWith(".java")) {
        const content = context.readFile(file);
        if (content && (content.includes("@SpringBootApplication") || content.includes("@RestController") || content.includes("@Service") || content.includes("@Repository"))) {
          return true;
        }
      }
    }
    return false;
  },
  resolve(ref, context) {
    if (ref.referenceName.endsWith("Service")) {
      const result = resolveByNameAndKind2(ref.referenceName, SERVICE_KINDS, SERVICE_DIRS, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.85,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("Repository")) {
      const result = resolveByNameAndKind2(ref.referenceName, SERVICE_KINDS, REPO_DIRS, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.85,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("Controller")) {
      const result = resolveByNameAndKind2(ref.referenceName, CLASS_KINDS2, CONTROLLER_DIRS, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.85,
          resolvedBy: "framework"
        };
      }
    }
    if (/^[A-Z][a-zA-Z]+$/.test(ref.referenceName)) {
      const result = resolveByNameAndKind2(ref.referenceName, CLASS_KINDS2, ENTITY_DIRS, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.7,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("Component") || ref.referenceName.endsWith("Config")) {
      const result = resolveByNameAndKind2(ref.referenceName, CLASS_KINDS2, COMPONENT_DIRS, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    return null;
  },
  extract(filePath, content) {
    if (!filePath.endsWith(".java")) return { nodes: [], references: [] };
    const nodes = [];
    const references = [];
    const now = Date.now();
    const safe = stripCommentsForRegex(content, "java");
    const mappingRegex = /@(GetMapping|PostMapping|PutMapping|PatchMapping|DeleteMapping|RequestMapping)\s*\(\s*(?:value\s*=\s*|path\s*=\s*)?["']([^"']+)["'][^)]*\)/g;
    let match;
    while ((match = mappingRegex.exec(safe)) !== null) {
      const [, mappingName, routePath] = match;
      const line = safe.slice(0, match.index).split("\n").length;
      const method = mappingName === "RequestMapping" ? "ANY" : mappingName.replace(/Mapping$/, "").toUpperCase();
      const routeNode = {
        id: `route:${filePath}:${line}:${method}:${routePath}`,
        kind: "route",
        name: `${method} ${routePath}`,
        qualifiedName: `${filePath}::route:${routePath}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: match[0].length,
        language: "java",
        updatedAt: now
      };
      nodes.push(routeNode);
      const tail = safe.slice(match.index + match[0].length);
      const methodMatch = tail.match(/\b(?:public|private|protected)\s+[^;{]*?\s+(\w+)\s*\(/);
      if (methodMatch) {
        references.push({
          fromNodeId: routeNode.id,
          referenceName: methodMatch[1],
          referenceKind: "references",
          line,
          column: 0,
          filePath,
          language: "java"
        });
      }
    }
    return { nodes, references };
  }
};
var SERVICE_DIRS = ["/service/", "/services/"];
var REPO_DIRS = ["/repository/", "/repositories/"];
var CONTROLLER_DIRS = ["/controller/", "/controllers/"];
var ENTITY_DIRS = ["/entity/", "/entities/", "/model/", "/models/", "/domain/"];
var COMPONENT_DIRS = ["/component/", "/components/", "/config/"];
var CLASS_KINDS2 = /* @__PURE__ */ new Set(["class"]);
var SERVICE_KINDS = /* @__PURE__ */ new Set(["class", "interface"]);
function resolveByNameAndKind2(name, kinds, preferredDirPatterns, context) {
  const candidates = context.getNodesByName(name);
  if (candidates.length === 0) return null;
  const kindFiltered = candidates.filter((n) => kinds.has(n.kind));
  if (kindFiltered.length === 0) return null;
  const preferred = kindFiltered.filter(
    (n) => preferredDirPatterns.some((d) => n.filePath.includes(d))
  );
  if (preferred.length > 0) return preferred[0].id;
  return kindFiltered[0].id;
}

// src/resolution/frameworks/go.ts
var goResolver = {
  name: "go",
  languages: ["go"],
  detect(context) {
    const goMod = context.readFile("go.mod");
    if (goMod) {
      return true;
    }
    const allFiles = context.getAllFiles();
    return allFiles.some((f) => f.endsWith(".go"));
  },
  resolve(ref, context) {
    if (ref.referenceName.endsWith("Handler") || ref.referenceName.startsWith("Handle")) {
      const result = resolveByNameAndKind3(ref.referenceName, "function", HANDLER_DIRS, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("Service") || ref.referenceName.endsWith("Repository") || ref.referenceName.endsWith("Store")) {
      const result = resolveByNameAndKind3(ref.referenceName, null, SERVICE_DIRS2, context, SERVICE_KINDS2);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("Middleware") || ref.referenceName.startsWith("Auth") || ref.referenceName.startsWith("Log")) {
      const result = resolveByNameAndKind3(ref.referenceName, "function", MIDDLEWARE_DIRS, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.75,
          resolvedBy: "framework"
        };
      }
    }
    if (/^[A-Z][a-zA-Z]+$/.test(ref.referenceName)) {
      const result = resolveByNameAndKind3(ref.referenceName, "struct", MODEL_DIRS2, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.7,
          resolvedBy: "framework"
        };
      }
    }
    return null;
  },
  extract(filePath, content) {
    if (!filePath.endsWith(".go")) return { nodes: [], references: [] };
    const nodes = [];
    const references = [];
    const now = Date.now();
    const safe = stripCommentsForRegex(content, "go");
    const routeRegex = /\b(?:router|r|mux|app|e)\.(GET|POST|PUT|PATCH|DELETE|OPTIONS|HEAD|Get|Post|Put|Patch|Delete|Handle|HandleFunc)\s*\(\s*"([^"]+)"\s*,\s*([^)]+)\)/g;
    let match;
    while ((match = routeRegex.exec(safe)) !== null) {
      const [, rawMethod, routePath, handlerExpr] = match;
      const line = safe.slice(0, match.index).split("\n").length;
      const method = rawMethod === "Handle" || rawMethod === "HandleFunc" ? "ANY" : rawMethod.toUpperCase();
      const routeNode = {
        id: `route:${filePath}:${line}:${method}:${routePath}`,
        kind: "route",
        name: `${method} ${routePath}`,
        qualifiedName: `${filePath}::route:${routePath}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: match[0].length,
        language: "go",
        updatedAt: now
      };
      nodes.push(routeNode);
      const handlerName = extractGoTailIdent(handlerExpr);
      if (handlerName) {
        references.push({
          fromNodeId: routeNode.id,
          referenceName: handlerName,
          referenceKind: "references",
          line,
          column: 0,
          filePath,
          language: "go"
        });
      }
    }
    return { nodes, references };
  }
};
function extractGoTailIdent(expr) {
  const cleaned = expr.trim().replace(/\s+/g, "").replace(/\(\)$/, "");
  const m = cleaned.match(/(?:\.|^)([A-Za-z_][A-Za-z0-9_]*)$/);
  return m ? m[1] : null;
}
var HANDLER_DIRS = ["handler", "handlers", "api", "routes", "controller", "controllers"];
var SERVICE_DIRS2 = ["service", "services", "repository", "store", "pkg"];
var MIDDLEWARE_DIRS = ["middleware", "middlewares"];
var MODEL_DIRS2 = ["model", "models", "entity", "entities", "domain", "pkg"];
var SERVICE_KINDS2 = /* @__PURE__ */ new Set(["struct", "interface"]);
function resolveByNameAndKind3(name, kind, preferredDirs, context, kinds) {
  const candidates = context.getNodesByName(name);
  if (candidates.length === 0) return null;
  const kindFiltered = candidates.filter((n) => {
    if (kinds) return kinds.has(n.kind);
    if (kind) return n.kind === kind;
    return true;
  });
  if (kindFiltered.length === 0) return null;
  const preferred = kindFiltered.filter(
    (n) => preferredDirs.some((d) => n.filePath.includes(`/${d}/`))
  );
  if (preferred.length > 0) return preferred[0].id;
  return kindFiltered[0].id;
}

// src/resolution/frameworks/cargo-workspace.ts
var import_picomatch = __toESM(require_picomatch2());
var GLOB_CHARS = /[*?[\]{}!]/;
var SKIP_DIRS = /* @__PURE__ */ new Set(["target", "node_modules", ".git", "dist", "build"]);
var MAX_GLOB_WALK_DEPTH = 5;
function getSection(content, sectionName) {
  const lines = content.split("\n");
  let inSection = false;
  const sectionLines = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!inSection) {
      if (trimmed === `[${sectionName}]`) {
        inSection = true;
      }
      continue;
    }
    if (/^\[[^\]]+\]$/.test(trimmed)) {
      break;
    }
    sectionLines.push(line);
  }
  if (!inSection) return null;
  return sectionLines.join("\n");
}
function extractQuotedValues(valueList) {
  const values = [];
  let quote = null;
  let escaped = false;
  let current = "";
  for (const ch of valueList) {
    if (!quote) {
      if (ch === '"' || ch === "'") {
        quote = ch;
        current = "";
      }
      continue;
    }
    if (escaped) {
      current += ch;
      escaped = false;
      continue;
    }
    if (ch === "\\") {
      escaped = true;
      continue;
    }
    if (ch === quote) {
      values.push(current.trim());
      quote = null;
      current = "";
      continue;
    }
    current += ch;
  }
  return values.filter(Boolean);
}
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getArrayValue(section, key) {
  const keyRegex = new RegExp(`\\b${escapeRegExp(key)}\\b\\s*=`, "m");
  const keyMatch = keyRegex.exec(section);
  if (!keyMatch) return null;
  let i = keyMatch.index + keyMatch[0].length;
  while (i < section.length && /\s/.test(section.charAt(i))) i++;
  if (section.charAt(i) !== "[") return null;
  i++;
  let inQuote = null;
  let escaped = false;
  let depth = 1;
  const start = i;
  while (i < section.length) {
    const ch = section.charAt(i);
    if (inQuote) {
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === inQuote) {
        inQuote = null;
      }
      i++;
      continue;
    }
    if (ch === '"' || ch === "'") {
      inQuote = ch;
      i++;
      continue;
    }
    if (ch === "[") {
      depth++;
      i++;
      continue;
    }
    if (ch === "]") {
      depth--;
      if (depth === 0) {
        return section.slice(start, i);
      }
      i++;
      continue;
    }
    i++;
  }
  return null;
}
function parseWorkspaceMembers(cargoToml) {
  const workspaceSection = getSection(cargoToml, "workspace");
  if (!workspaceSection) return [];
  const membersValue = getArrayValue(workspaceSection, "members");
  if (!membersValue) return [];
  return extractQuotedValues(membersValue);
}
function parsePackageName(cargoToml) {
  const packageSection = getSection(cargoToml, "package");
  if (!packageSection) return null;
  const packageNameMatch = packageSection.match(/name\s*=\s*["']([^"'\n]+)["']/);
  return packageNameMatch?.[1]?.trim() ?? null;
}
function addCrateAlias(map, crateName, memberPath) {
  const normalized = crateName.replace(/-/g, "_");
  map.set(crateName, memberPath);
  if (normalized !== crateName) {
    map.set(normalized, memberPath);
  }
}
function cleanPath(memberPath) {
  return memberPath.replace(/\\/g, "/").replace(/\/$/, "");
}
function expandGlobMember(member, context) {
  if (!context.listDirectories) return [];
  const firstGlobIdx = member.search(GLOB_CHARS);
  const staticPrefix = member.slice(0, firstGlobIdx).replace(/[^/]*$/, "").replace(/\/$/, "");
  const matcher = (0, import_picomatch.default)(member, { dot: false });
  const matches = [];
  const seen = /* @__PURE__ */ new Set();
  function walk(dir, depth) {
    if (depth > MAX_GLOB_WALK_DEPTH) return;
    const children = context.listDirectories(dir);
    for (const child of children) {
      if (SKIP_DIRS.has(child) || child.startsWith(".")) continue;
      const rel = dir === "." ? child : `${dir}/${child}`;
      if (matcher(rel) && !seen.has(rel)) {
        seen.add(rel);
        matches.push(rel);
      }
      walk(rel, depth + 1);
    }
  }
  walk(staticPrefix || ".", 0);
  return matches;
}
function expandMembers(members, context) {
  const expanded = [];
  const seen = /* @__PURE__ */ new Set();
  for (const member of members) {
    const candidates = GLOB_CHARS.test(member) ? expandGlobMember(member, context) : [member];
    for (const candidate of candidates) {
      const cleaned = cleanPath(candidate);
      if (seen.has(cleaned)) continue;
      seen.add(cleaned);
      expanded.push(cleaned);
    }
  }
  return expanded;
}
function getCargoWorkspaceCrateMap(context) {
  const result = /* @__PURE__ */ new Map();
  const rootCargoToml = context.readFile("Cargo.toml");
  if (!rootCargoToml) return result;
  const rawMembers = parseWorkspaceMembers(rootCargoToml);
  const members = expandMembers(rawMembers, context);
  for (const memberPath of members) {
    const memberCargoPath = `${memberPath}/Cargo.toml`;
    const memberCargoToml = context.readFile(memberCargoPath);
    if (!memberCargoToml) continue;
    const packageName = parsePackageName(memberCargoToml);
    if (!packageName) continue;
    addCrateAlias(result, packageName, memberPath);
  }
  return result;
}

// src/resolution/frameworks/rust.ts
var cargoWorkspaceMapCache = /* @__PURE__ */ new WeakMap();
function getCachedCargoWorkspaceCrateMap(context) {
  const cached = cargoWorkspaceMapCache.get(context);
  if (cached) return cached;
  const map = getCargoWorkspaceCrateMap(context);
  cargoWorkspaceMapCache.set(context, map);
  return map;
}
var rustResolver = {
  name: "rust",
  languages: ["rust"],
  detect(context) {
    return context.fileExists("Cargo.toml");
  },
  resolve(ref, context) {
    if (ref.referenceName.endsWith("_handler") || ref.referenceName.startsWith("handle_")) {
      const result = resolveByNameAndKind4(ref.referenceName, FUNCTION_KINDS2, HANDLER_DIRS2, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("Service") || ref.referenceName.endsWith("Repository")) {
      const result = resolveByNameAndKind4(ref.referenceName, SERVICE_KINDS3, SERVICE_DIRS3, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    if (/^[A-Z][a-zA-Z]+$/.test(ref.referenceName)) {
      const result = resolveByNameAndKind4(ref.referenceName, STRUCT_KINDS, MODEL_DIRS3, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.7,
          resolvedBy: "framework"
        };
      }
    }
    if (/^[a-z_]+$/.test(ref.referenceName)) {
      const result = resolveModule(ref.referenceName, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result.targetId,
          confidence: result.fromWorkspace ? 0.95 : 0.6,
          resolvedBy: "framework"
        };
      }
    }
    return null;
  },
  extract(filePath, content) {
    if (!filePath.endsWith(".rs")) return { nodes: [], references: [] };
    const nodes = [];
    const references = [];
    const now = Date.now();
    const safe = stripCommentsForRegex(content, "rust");
    const attrRegex = /#\[(get|post|put|patch|delete|head|options)\s*\(\s*["']([^"']+)["'][^\]]*\)\]/g;
    let match;
    while ((match = attrRegex.exec(safe)) !== null) {
      const [, method, routePath] = match;
      const line = safe.slice(0, match.index).split("\n").length;
      const upper = method.toUpperCase();
      const routeNode = {
        id: `route:${filePath}:${line}:${upper}:${routePath}`,
        kind: "route",
        name: `${upper} ${routePath}`,
        qualifiedName: `${filePath}::route:${routePath}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: match[0].length,
        language: "rust",
        updatedAt: now
      };
      nodes.push(routeNode);
      const tail = safe.slice(match.index + match[0].length);
      const fnMatch = tail.match(/\n\s*(?:pub\s+)?(?:async\s+)?fn\s+(\w+)/);
      if (fnMatch) {
        references.push({
          fromNodeId: routeNode.id,
          referenceName: fnMatch[1],
          referenceKind: "references",
          line,
          column: 0,
          filePath,
          language: "rust"
        });
      }
    }
    const axumRegex = /\.route\s*\(\s*"([^"]+)"\s*,\s*(get|post|put|patch|delete)\s*\(\s*(\w+)/g;
    while ((match = axumRegex.exec(safe)) !== null) {
      const [, routePath, method, handler] = match;
      const line = safe.slice(0, match.index).split("\n").length;
      const upper = method.toUpperCase();
      const routeNode = {
        id: `route:${filePath}:${line}:${upper}:${routePath}`,
        kind: "route",
        name: `${upper} ${routePath}`,
        qualifiedName: `${filePath}::route:${routePath}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: match[0].length,
        language: "rust",
        updatedAt: now
      };
      nodes.push(routeNode);
      references.push({
        fromNodeId: routeNode.id,
        referenceName: handler,
        referenceKind: "references",
        line,
        column: 0,
        filePath,
        language: "rust"
      });
    }
    return { nodes, references };
  }
};
var HANDLER_DIRS2 = ["/handlers/", "/handler/", "/api/", "/routes/", "/controllers/"];
var SERVICE_DIRS3 = ["/services/", "/service/", "/repository/", "/domain/"];
var MODEL_DIRS3 = ["/models/", "/model/", "/entities/", "/entity/", "/domain/", "/types/"];
var FUNCTION_KINDS2 = /* @__PURE__ */ new Set(["function"]);
var SERVICE_KINDS3 = /* @__PURE__ */ new Set(["struct", "trait"]);
var STRUCT_KINDS = /* @__PURE__ */ new Set(["struct"]);
function resolveByNameAndKind4(name, kinds, preferredDirPatterns, context) {
  const candidates = context.getNodesByName(name);
  if (candidates.length === 0) return null;
  const kindFiltered = candidates.filter((n) => kinds.has(n.kind));
  if (kindFiltered.length === 0) return null;
  const preferred = kindFiltered.filter(
    (n) => preferredDirPatterns.some((d) => n.filePath.includes(d))
  );
  if (preferred.length > 0) return preferred[0].id;
  return kindFiltered[0].id;
}
function resolveModule(name, context) {
  const localPaths = [`src/${name}.rs`, `src/${name}/mod.rs`];
  const workspaceCrates = getCachedCargoWorkspaceCrateMap(context);
  const cratePath = workspaceCrates.get(name);
  const workspacePaths = cratePath ? [`${cratePath}/src/lib.rs`, `${cratePath}/src/main.rs`] : [];
  const candidates = [
    ...localPaths.map((path3) => ({ path: path3, fromWorkspace: false })),
    ...workspacePaths.map((path3) => ({ path: path3, fromWorkspace: true }))
  ];
  for (const { path: modPath, fromWorkspace } of candidates) {
    if (!context.fileExists(modPath)) continue;
    const nodes = context.getNodesInFile(modPath);
    const modNode = nodes.find((n) => n.kind === "module");
    if (modNode) return { targetId: modNode.id, fromWorkspace };
    if (nodes.length > 0) return { targetId: nodes[0].id, fromWorkspace };
  }
  return null;
}

// src/resolution/frameworks/csharp.ts
var aspnetResolver = {
  name: "aspnet",
  languages: ["csharp"],
  detect(context) {
    const allFiles = context.getAllFiles();
    for (const file of allFiles) {
      if (file.endsWith(".csproj")) {
        const content = context.readFile(file);
        if (content && (content.includes("Microsoft.AspNetCore") || content.includes("Microsoft.NET.Sdk.Web") || content.includes("System.Web.Mvc"))) {
          return true;
        }
      }
    }
    const programCs = context.readFile("Program.cs");
    if (programCs && (programCs.includes("WebApplication") || programCs.includes("CreateHostBuilder") || programCs.includes("UseStartup"))) {
      return true;
    }
    if (context.fileExists("Startup.cs")) {
      return true;
    }
    return allFiles.some((f) => f.includes("/Controllers/") && f.endsWith("Controller.cs"));
  },
  resolve(ref, context) {
    if (ref.referenceName.endsWith("Controller")) {
      const result = resolveByNameAndKind5(ref.referenceName, CLASS_KINDS3, CONTROLLER_DIRS2, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.85,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("Service") || ref.referenceName.startsWith("I") && ref.referenceName.length > 1) {
      const result = resolveByNameAndKind5(ref.referenceName, SERVICE_KINDS4, SERVICE_DIRS4, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.85,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("Repository")) {
      const result = resolveByNameAndKind5(ref.referenceName, SERVICE_KINDS4, REPO_DIRS2, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.85,
          resolvedBy: "framework"
        };
      }
    }
    if (/^[A-Z][a-zA-Z]+$/.test(ref.referenceName)) {
      const result = resolveByNameAndKind5(ref.referenceName, CLASS_KINDS3, MODEL_DIRS4, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.7,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("ViewModel") || ref.referenceName.endsWith("Dto")) {
      const result = resolveByNameAndKind5(ref.referenceName, CLASS_KINDS3, VIEWMODEL_DIRS, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    return null;
  },
  extract(filePath, content) {
    if (!filePath.endsWith(".cs")) return { nodes: [], references: [] };
    const nodes = [];
    const references = [];
    const now = Date.now();
    const safe = stripCommentsForRegex(content, "csharp");
    const attrRegex = /\[(HttpGet|HttpPost|HttpPut|HttpPatch|HttpDelete)\s*\(\s*"([^"]+)"\s*\)\]/g;
    let match;
    while ((match = attrRegex.exec(safe)) !== null) {
      const [, verb, routePath] = match;
      const method = verb.replace(/^Http/, "").toUpperCase();
      const line = safe.slice(0, match.index).split("\n").length;
      const routeNode = {
        id: `route:${filePath}:${line}:${method}:${routePath}`,
        kind: "route",
        name: `${method} ${routePath}`,
        qualifiedName: `${filePath}::route:${routePath}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: match[0].length,
        language: "csharp",
        updatedAt: now
      };
      nodes.push(routeNode);
      const tail = safe.slice(match.index + match[0].length);
      const methodMatch = tail.match(/(?:public|private|protected|internal)\s+[\w<>,\s\[\]]+?\s+(\w+)\s*\(/);
      if (methodMatch) {
        references.push({
          fromNodeId: routeNode.id,
          referenceName: methodMatch[1],
          referenceKind: "references",
          line,
          column: 0,
          filePath,
          language: "csharp"
        });
      }
    }
    const minimalRegex = /\.Map(Get|Post|Put|Patch|Delete)\s*\(\s*"([^"]+)"\s*,\s*([^,)]+)/g;
    while ((match = minimalRegex.exec(safe)) !== null) {
      const [, verb, routePath, handlerExpr] = match;
      const method = verb.toUpperCase();
      const line = safe.slice(0, match.index).split("\n").length;
      const routeNode = {
        id: `route:${filePath}:${line}:${method}:${routePath}`,
        kind: "route",
        name: `${method} ${routePath}`,
        qualifiedName: `${filePath}::route:${routePath}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: match[0].length,
        language: "csharp",
        updatedAt: now
      };
      nodes.push(routeNode);
      const handlerName = extractCSharpTailIdent(handlerExpr);
      if (handlerName) {
        references.push({
          fromNodeId: routeNode.id,
          referenceName: handlerName,
          referenceKind: "references",
          line,
          column: 0,
          filePath,
          language: "csharp"
        });
      }
    }
    return { nodes, references };
  }
};
function extractCSharpTailIdent(expr) {
  const cleaned = expr.trim().replace(/\s+/g, "");
  const m = cleaned.match(/(?:\.|^)([A-Za-z_][A-Za-z0-9_]*)$/);
  return m ? m[1] : null;
}
var CONTROLLER_DIRS2 = ["/Controllers/"];
var SERVICE_DIRS4 = ["/Services/", "/Service/", "/Application/"];
var REPO_DIRS2 = ["/Repositories/", "/Repository/", "/Data/", "/Infrastructure/"];
var MODEL_DIRS4 = ["/Models/", "/Model/", "/Entities/", "/Entity/", "/Domain/"];
var VIEWMODEL_DIRS = ["/ViewModels/", "/ViewModel/", "/DTOs/", "/Dto/"];
var CLASS_KINDS3 = /* @__PURE__ */ new Set(["class"]);
var SERVICE_KINDS4 = /* @__PURE__ */ new Set(["class", "interface"]);
function resolveByNameAndKind5(name, kinds, preferredDirPatterns, context) {
  const candidates = context.getNodesByName(name);
  if (candidates.length === 0) return null;
  const kindFiltered = candidates.filter((n) => kinds.has(n.kind));
  if (kindFiltered.length === 0) return null;
  const preferred = kindFiltered.filter(
    (n) => preferredDirPatterns.some((d) => n.filePath.includes(d))
  );
  if (preferred.length > 0) return preferred[0].id;
  return kindFiltered[0].id;
}

// src/resolution/frameworks/swift.ts
var swiftUIResolver = {
  name: "swiftui",
  languages: ["swift"],
  detect(context) {
    const allFiles = context.getAllFiles();
    for (const file of allFiles) {
      if (file.endsWith(".swift")) {
        const content = context.readFile(file);
        if (content && content.includes("import SwiftUI")) {
          return true;
        }
      }
    }
    for (const file of allFiles) {
      if (file.endsWith(".xcodeproj") || file.endsWith(".xcworkspace")) {
        return true;
      }
    }
    return false;
  },
  resolve(ref, context) {
    if (ref.referenceName.endsWith("View") && /^[A-Z]/.test(ref.referenceName)) {
      const result = resolveByNameAndKind6(ref.referenceName, VIEW_KINDS2, VIEW_DIRS2, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.85,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("ViewModel") || ref.referenceName.endsWith("Store") || ref.referenceName.endsWith("Manager")) {
      const result = resolveByNameAndKind6(ref.referenceName, CLASS_KINDS4, VIEWMODEL_DIRS2, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.85,
          resolvedBy: "framework"
        };
      }
    }
    if (/^[A-Z][a-zA-Z]+$/.test(ref.referenceName)) {
      const result = resolveByNameAndKind6(ref.referenceName, MODEL_KINDS, MODEL_DIRS5, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.7,
          resolvedBy: "framework"
        };
      }
    }
    return null;
  },
  extract(filePath, content) {
    if (!filePath.endsWith(".swift")) return { nodes: [], references: [] };
    const nodes = [];
    const now = Date.now();
    const safe = stripCommentsForRegex(content, "swift");
    const viewPattern = /struct\s+(\w+)\s*:\s*(?:\w+\s*,\s*)*View/g;
    let match;
    while ((match = viewPattern.exec(safe)) !== null) {
      const [, viewName] = match;
      const line = safe.slice(0, match.index).split("\n").length;
      nodes.push({
        id: `view:${filePath}:${viewName}:${line}`,
        kind: "component",
        name: viewName,
        qualifiedName: `${filePath}::${viewName}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: match[0].length,
        language: "swift",
        updatedAt: now
      });
    }
    const appPattern = /@main\s+struct\s+(\w+)\s*:\s*App/g;
    while ((match = appPattern.exec(safe)) !== null) {
      const [, appName] = match;
      const line = safe.slice(0, match.index).split("\n").length;
      nodes.push({
        id: `app:${filePath}:${appName}:${line}`,
        kind: "class",
        name: appName,
        qualifiedName: `${filePath}::${appName}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: match[0].length,
        language: "swift",
        updatedAt: now
      });
    }
    return { nodes, references: [] };
  }
};
var uikitResolver = {
  name: "uikit",
  languages: ["swift"],
  detect(context) {
    const allFiles = context.getAllFiles();
    for (const file of allFiles) {
      if (file.endsWith(".swift")) {
        const content = context.readFile(file);
        if (content && (content.includes("import UIKit") || content.includes("UIViewController") || content.includes("UIView"))) {
          return true;
        }
      }
    }
    return false;
  },
  resolve(ref, context) {
    if (ref.referenceName.endsWith("ViewController")) {
      const result = resolveByNameAndKind6(ref.referenceName, CLASS_KINDS4, VC_DIRS, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.85,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("View") && !ref.referenceName.endsWith("ViewController")) {
      const result = resolveByNameAndKind6(ref.referenceName, CLASS_KINDS4, UIVIEW_DIRS, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("Cell")) {
      const result = resolveByNameAndKind6(ref.referenceName, CLASS_KINDS4, CELL_DIRS, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.85,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("Delegate") || ref.referenceName.endsWith("DataSource")) {
      const result = resolveByNameAndKind6(ref.referenceName, PROTOCOL_KINDS, [], context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    return null;
  },
  extract(filePath, content) {
    if (!filePath.endsWith(".swift")) return { nodes: [], references: [] };
    const nodes = [];
    const now = Date.now();
    const safe = stripCommentsForRegex(content, "swift");
    const vcPattern = /class\s+(\w+)\s*:\s*(?:\w+\s*,\s*)*UIViewController/g;
    let match;
    while ((match = vcPattern.exec(safe)) !== null) {
      const [, vcName] = match;
      const line = safe.slice(0, match.index).split("\n").length;
      nodes.push({
        id: `viewcontroller:${filePath}:${vcName}:${line}`,
        kind: "class",
        name: vcName,
        qualifiedName: `${filePath}::${vcName}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: match[0].length,
        language: "swift",
        updatedAt: now
      });
    }
    const viewPattern = /class\s+(\w+)\s*:\s*(?:\w+\s*,\s*)*UIView[^C]/g;
    while ((match = viewPattern.exec(safe)) !== null) {
      const [, viewName] = match;
      const line = safe.slice(0, match.index).split("\n").length;
      nodes.push({
        id: `uiview:${filePath}:${viewName}:${line}`,
        kind: "class",
        name: viewName,
        qualifiedName: `${filePath}::${viewName}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: match[0].length,
        language: "swift",
        updatedAt: now
      });
    }
    return { nodes, references: [] };
  }
};
var vaporResolver = {
  name: "vapor",
  languages: ["swift"],
  detect(context) {
    const packageSwift = context.readFile("Package.swift");
    if (packageSwift && packageSwift.includes("vapor")) {
      return true;
    }
    const allFiles = context.getAllFiles();
    for (const file of allFiles) {
      if (file.endsWith(".swift")) {
        const content = context.readFile(file);
        if (content && content.includes("import Vapor")) {
          return true;
        }
      }
    }
    return false;
  },
  resolve(ref, context) {
    if (ref.referenceName.endsWith("Controller")) {
      const result = resolveByNameAndKind6(ref.referenceName, VAPOR_CONTROLLER_KINDS, VAPOR_CONTROLLER_DIRS, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.85,
          resolvedBy: "framework"
        };
      }
    }
    if (/^[A-Z][a-zA-Z]+$/.test(ref.referenceName)) {
      const result = resolveByNameAndKind6(ref.referenceName, CLASS_KINDS4, FLUENT_MODEL_DIRS, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.75,
          resolvedBy: "framework"
        };
      }
    }
    if (ref.referenceName.endsWith("Middleware")) {
      const result = resolveByNameAndKind6(ref.referenceName, VAPOR_CONTROLLER_KINDS, VAPOR_MIDDLEWARE_DIRS, context);
      if (result) {
        return {
          original: ref,
          targetNodeId: result,
          confidence: 0.8,
          resolvedBy: "framework"
        };
      }
    }
    return null;
  },
  extract(filePath, content) {
    if (!filePath.endsWith(".swift")) return { nodes: [], references: [] };
    const nodes = [];
    const references = [];
    const now = Date.now();
    const safe = stripCommentsForRegex(content, "swift");
    const routeRegex = /\b(?:app|router|routes)\.(get|post|put|patch|delete)\s*\(\s*"([^"]+)"\s*,\s*use:\s*([A-Za-z_][A-Za-z0-9_.]*)/g;
    let match;
    while ((match = routeRegex.exec(safe)) !== null) {
      const [, method, routePath, handlerExpr] = match;
      const line = safe.slice(0, match.index).split("\n").length;
      const upper = method.toUpperCase();
      const routeNode = {
        id: `route:${filePath}:${line}:${upper}:${routePath}`,
        kind: "route",
        name: `${upper} ${routePath}`,
        qualifiedName: `${filePath}::route:${routePath}`,
        filePath,
        startLine: line,
        endLine: line,
        startColumn: 0,
        endColumn: match[0].length,
        language: "swift",
        updatedAt: now
      };
      nodes.push(routeNode);
      const parts = handlerExpr.split(".");
      const handlerName = parts[parts.length - 1];
      if (handlerName) {
        references.push({
          fromNodeId: routeNode.id,
          referenceName: handlerName,
          referenceKind: "references",
          line,
          column: 0,
          filePath,
          language: "swift"
        });
      }
    }
    return { nodes, references };
  }
};
var VIEW_DIRS2 = ["/Views/", "/View/", "/Screens/", "/Components/", "/UI/"];
var VIEWMODEL_DIRS2 = ["/ViewModels/", "/ViewModel/", "/Stores/", "/Managers/", "/Services/"];
var MODEL_DIRS5 = ["/Models/", "/Model/", "/Entities/", "/Domain/"];
var VC_DIRS = ["/ViewControllers/", "/ViewController/", "/Controllers/", "/Screens/"];
var UIVIEW_DIRS = ["/Views/", "/View/", "/UI/", "/Components/"];
var CELL_DIRS = ["/Cells/", "/Cell/", "/Views/", "/TableViewCells/", "/CollectionViewCells/"];
var VAPOR_CONTROLLER_DIRS = ["/Controllers/", "/Controller/", "/Routes/"];
var FLUENT_MODEL_DIRS = ["/Models/", "/Model/", "/Entities/", "/Database/"];
var VAPOR_MIDDLEWARE_DIRS = ["/Middleware/", "/Middlewares/"];
var VIEW_KINDS2 = /* @__PURE__ */ new Set(["struct", "component"]);
var CLASS_KINDS4 = /* @__PURE__ */ new Set(["class"]);
var MODEL_KINDS = /* @__PURE__ */ new Set(["struct", "class"]);
var PROTOCOL_KINDS = /* @__PURE__ */ new Set(["protocol"]);
var VAPOR_CONTROLLER_KINDS = /* @__PURE__ */ new Set(["class", "struct"]);
function resolveByNameAndKind6(name, kinds, preferredDirPatterns, context) {
  const candidates = context.getNodesByName(name);
  if (candidates.length === 0) return null;
  const kindFiltered = candidates.filter((n) => kinds.has(n.kind));
  if (kindFiltered.length === 0) return null;
  if (preferredDirPatterns.length > 0) {
    const preferred = kindFiltered.filter(
      (n) => preferredDirPatterns.some((d) => n.filePath.includes(d))
    );
    if (preferred.length > 0) return preferred[0].id;
  }
  return kindFiltered[0].id;
}

// src/resolution/frameworks/index.ts
var FRAMEWORK_RESOLVERS = [
  // PHP
  laravelResolver,
  // JavaScript/TypeScript
  expressResolver,
  reactResolver,
  svelteResolver,
  vueResolver,
  // Python
  djangoResolver,
  flaskResolver,
  fastapiResolver,
  // Ruby
  railsResolver,
  // Java
  springResolver,
  // Go
  goResolver,
  // Rust
  rustResolver,
  // C#
  aspnetResolver,
  // Swift
  swiftUIResolver,
  uikitResolver,
  vaporResolver
];
function getAllFrameworkResolvers() {
  return FRAMEWORK_RESOLVERS;
}
function getApplicableFrameworks(detected, language) {
  return detected.filter(
    (fw) => !fw.languages || fw.languages.includes(language)
  );
}

// src/extraction/tree-sitter.ts
function extractName(node, source, extractor) {
  const nameNode = getChildByField(node, extractor.nameField);
  if (nameNode) {
    let resolved = nameNode;
    while (resolved.type === "pointer_declarator") {
      const inner = getChildByField(resolved, "declarator") || resolved.namedChild(0);
      if (!inner) break;
      resolved = inner;
    }
    if (resolved.type === "function_declarator" || resolved.type === "declarator") {
      const innerName = getChildByField(resolved, "declarator") || resolved.namedChild(0);
      return innerName ? getNodeText(innerName, source) : getNodeText(resolved, source);
    }
    return getNodeText(resolved, source);
  }
  if (node.type === "method_signature") {
    for (let i = 0; i < node.namedChildCount; i++) {
      const child = node.namedChild(i);
      if (child && (child.type === "function_signature" || child.type === "getter_signature" || child.type === "setter_signature" || child.type === "constructor_signature" || child.type === "factory_constructor_signature")) {
        for (let j = 0; j < child.namedChildCount; j++) {
          const inner = child.namedChild(j);
          if (inner?.type === "identifier") {
            return getNodeText(inner, source);
          }
        }
      }
    }
  }
  if (node.type === "arrow_function" || node.type === "function_expression") {
    return "<anonymous>";
  }
  for (let i = 0; i < node.namedChildCount; i++) {
    const child = node.namedChild(i);
    if (child && (child.type === "identifier" || child.type === "type_identifier" || child.type === "simple_identifier" || child.type === "constant")) {
      return getNodeText(child, source);
    }
  }
  return "<anonymous>";
}
var INSTANTIATION_KINDS = /* @__PURE__ */ new Set([
  "new_expression",
  // typescript / javascript / tsx / jsx
  "object_creation_expression",
  // java / c#
  "instance_creation_expression"
  // some grammars
]);
var TreeSitterExtractor = class {
  filePath;
  language;
  source;
  tree = null;
  nodes = [];
  edges = [];
  unresolvedReferences = [];
  errors = [];
  extractor = null;
  nodeStack = [];
  // Stack of parent node IDs
  methodIndex = null;
  // lookup key → node ID for Pascal defProc lookup
  constructor(filePath, source, language) {
    this.filePath = filePath;
    this.source = source;
    this.language = language || detectLanguage(filePath, source);
    this.extractor = EXTRACTORS[this.language] || null;
  }
  /**
   * Parse and extract from the source code
   */
  extract() {
    const startTime = Date.now();
    if (!isLanguageSupported(this.language)) {
      return {
        nodes: [],
        edges: [],
        unresolvedReferences: [],
        errors: [
          {
            message: `Unsupported language: ${this.language}`,
            filePath: this.filePath,
            severity: "error",
            code: "unsupported_language"
          }
        ],
        durationMs: Date.now() - startTime
      };
    }
    const parser = getParser(this.language);
    if (!parser) {
      return {
        nodes: [],
        edges: [],
        unresolvedReferences: [],
        errors: [
          {
            message: `Failed to get parser for language: ${this.language}`,
            filePath: this.filePath,
            severity: "error",
            code: "parser_error"
          }
        ],
        durationMs: Date.now() - startTime
      };
    }
    try {
      this.tree = parser.parse(this.source) ?? null;
      if (!this.tree) {
        throw new Error("Parser returned null tree");
      }
      const fileNode = {
        id: `file:${this.filePath}`,
        kind: "file",
        name: path2.basename(this.filePath),
        qualifiedName: this.filePath,
        filePath: this.filePath,
        language: this.language,
        startLine: 1,
        endLine: this.source.split("\n").length,
        startColumn: 0,
        endColumn: 0,
        isExported: false,
        updatedAt: Date.now()
      };
      this.nodes.push(fileNode);
      this.nodeStack.push(fileNode.id);
      this.visitNode(this.tree.rootNode);
      this.nodeStack.pop();
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      if (msg.includes("memory access out of bounds") || msg.includes("out of memory")) {
        throw error;
      }
      this.errors.push({
        message: `Parse error: ${msg}`,
        filePath: this.filePath,
        severity: "error",
        code: "parse_error"
      });
    } finally {
      if (this.tree) {
        this.tree.delete();
        this.tree = null;
      }
      this.source = "";
    }
    return {
      nodes: this.nodes,
      edges: this.edges,
      unresolvedReferences: this.unresolvedReferences,
      errors: this.errors,
      durationMs: Date.now() - startTime
    };
  }
  /**
   * Visit a node and extract information
   */
  visitNode(node) {
    if (!this.extractor) return;
    const nodeType = node.type;
    let skipChildren = false;
    if (this.extractor.visitNode) {
      const ctx = this.makeExtractorContext();
      const handled = this.extractor.visitNode(node, ctx);
      if (handled) return;
    }
    if (this.language === "pascal") {
      skipChildren = this.visitPascalNode(node);
      if (skipChildren) return;
    }
    if (this.extractor.functionTypes.includes(nodeType)) {
      if (this.isInsideClassLikeNode() && this.extractor.methodTypes.includes(nodeType)) {
        this.extractMethod(node);
        skipChildren = true;
      } else {
        this.extractFunction(node);
        skipChildren = true;
      }
    } else if (this.extractor.classTypes.includes(nodeType)) {
      const classification = this.extractor.classifyClassNode?.(node) ?? "class";
      if (classification === "struct") {
        this.extractStruct(node);
      } else if (classification === "enum") {
        this.extractEnum(node);
      } else if (classification === "interface") {
        this.extractInterface(node);
      } else if (classification === "trait") {
        this.extractClass(node, "trait");
      } else {
        this.extractClass(node);
      }
      skipChildren = true;
    } else if (this.extractor.extraClassNodeTypes?.includes(nodeType)) {
      this.extractClass(node);
      skipChildren = true;
    } else if (this.extractor.methodTypes.includes(nodeType)) {
      this.extractMethod(node);
      skipChildren = true;
    } else if (this.extractor.interfaceTypes.includes(nodeType)) {
      this.extractInterface(node);
      skipChildren = true;
    } else if (this.extractor.structTypes.includes(nodeType)) {
      this.extractStruct(node);
      skipChildren = true;
    } else if (this.extractor.enumTypes.includes(nodeType)) {
      this.extractEnum(node);
      skipChildren = true;
    } else if (this.extractor.typeAliasTypes.includes(nodeType)) {
      skipChildren = this.extractTypeAlias(node);
    } else if (this.extractor.propertyTypes?.includes(nodeType) && this.isInsideClassLikeNode()) {
      this.extractProperty(node);
      skipChildren = true;
    } else if (this.extractor.fieldTypes?.includes(nodeType) && this.isInsideClassLikeNode()) {
      this.extractField(node);
      skipChildren = true;
    } else if (this.extractor.variableTypes.includes(nodeType) && !this.isInsideClassLikeNode()) {
      this.extractVariable(node);
      skipChildren = true;
    } else if (this.extractor.importTypes.includes(nodeType)) {
      this.extractImport(node);
    } else if (this.extractor.callTypes.includes(nodeType)) {
      this.extractCall(node);
    } else if (INSTANTIATION_KINDS.has(nodeType)) {
      this.extractInstantiation(node);
    } else if (nodeType === "impl_item") {
      this.extractRustImplItem(node);
    }
    if (!skipChildren) {
      for (let i = 0; i < node.namedChildCount; i++) {
        const child = node.namedChild(i);
        if (child) {
          this.visitNode(child);
        }
      }
    }
  }
  /**
   * Create a Node object
   */
  createNode(kind, name, node, extra) {
    if (!name) {
      return null;
    }
    const id = generateNodeId(this.filePath, kind, name, node.startPosition.row + 1);
    const newNode = {
      id,
      kind,
      name,
      qualifiedName: this.buildQualifiedName(name),
      filePath: this.filePath,
      language: this.language,
      startLine: node.startPosition.row + 1,
      endLine: node.endPosition.row + 1,
      startColumn: node.startPosition.column,
      endColumn: node.endPosition.column,
      updatedAt: Date.now(),
      ...extra
    };
    this.nodes.push(newNode);
    if (this.nodeStack.length > 0) {
      const parentId = this.nodeStack[this.nodeStack.length - 1];
      if (parentId) {
        this.edges.push({
          source: parentId,
          target: id,
          kind: "contains"
        });
      }
    }
    return newNode;
  }
  /**
   * Find first named child whose type is in the given list.
   * Used to locate inner type nodes (e.g. enum_specifier inside a typedef).
   */
  findChildByTypes(node, types) {
    for (let i = 0; i < node.namedChildCount; i++) {
      const child = node.namedChild(i);
      if (child && types.includes(child.type)) return child;
    }
    return null;
  }
  /**
   * Build qualified name from node stack
   */
  buildQualifiedName(name) {
    const parts = [];
    for (const nodeId of this.nodeStack) {
      const node = this.nodes.find((n) => n.id === nodeId);
      if (node && node.kind !== "file") {
        parts.push(node.name);
      }
    }
    parts.push(name);
    return parts.join("::");
  }
  /**
   * Build an ExtractorContext for passing to language-specific visitNode hooks.
   */
  makeExtractorContext() {
    const self = this;
    return {
      createNode: (kind, name, node, extra) => self.createNode(kind, name, node, extra),
      visitNode: (node) => self.visitNode(node),
      visitFunctionBody: (body, functionId) => self.visitFunctionBody(body, functionId),
      addUnresolvedReference: (ref) => self.unresolvedReferences.push(ref),
      pushScope: (nodeId) => self.nodeStack.push(nodeId),
      popScope: () => self.nodeStack.pop(),
      get filePath() {
        return self.filePath;
      },
      get source() {
        return self.source;
      },
      get nodeStack() {
        return self.nodeStack;
      },
      get nodes() {
        return self.nodes;
      }
    };
  }
  /**
   * Check if the current node stack indicates we are inside a class-like node
   * (class, struct, interface, trait). File nodes do not count as class-like.
   */
  isInsideClassLikeNode() {
    if (this.nodeStack.length === 0) return false;
    const parentId = this.nodeStack[this.nodeStack.length - 1];
    if (!parentId) return false;
    const parentNode = this.nodes.find((n) => n.id === parentId);
    if (!parentNode) return false;
    return parentNode.kind === "class" || parentNode.kind === "struct" || parentNode.kind === "interface" || parentNode.kind === "trait" || parentNode.kind === "enum" || parentNode.kind === "module";
  }
  /**
   * Extract a function
   */
  extractFunction(node) {
    if (!this.extractor) return;
    if (this.extractor.getReceiverType?.(node, this.source)) {
      this.extractMethod(node);
      return;
    }
    let name = extractName(node, this.source, this.extractor);
    if (name === "<anonymous>" && (node.type === "arrow_function" || node.type === "function_expression")) {
      const parent = node.parent;
      if (parent?.type === "variable_declarator") {
        const varName = getChildByField(parent, "name");
        if (varName) {
          name = getNodeText(varName, this.source);
        }
      }
    }
    if (name === "<anonymous>") return;
    if (this.extractor.isMisparsedFunction?.(name, node)) {
      const body2 = this.extractor.resolveBody?.(node, this.extractor.bodyField) ?? getChildByField(node, this.extractor.bodyField);
      if (body2) {
        this.visitFunctionBody(body2, "");
      }
      return;
    }
    const docstring = getPrecedingDocstring(node, this.source);
    const signature = this.extractor.getSignature?.(node, this.source);
    const visibility = this.extractor.getVisibility?.(node);
    const isExported = this.extractor.isExported?.(node, this.source);
    const isAsync = this.extractor.isAsync?.(node);
    const isStatic = this.extractor.isStatic?.(node);
    const funcNode = this.createNode("function", name, node, {
      docstring,
      signature,
      visibility,
      isExported,
      isAsync,
      isStatic
    });
    if (!funcNode) return;
    this.extractTypeAnnotations(node, funcNode.id);
    this.extractDecoratorsFor(node, funcNode.id);
    this.nodeStack.push(funcNode.id);
    const body = this.extractor.resolveBody?.(node, this.extractor.bodyField) ?? getChildByField(node, this.extractor.bodyField);
    if (body) {
      this.visitFunctionBody(body, funcNode.id);
    }
    this.nodeStack.pop();
  }
  /**
   * Extract a class
   */
  extractClass(node, kind = "class") {
    if (!this.extractor) return;
    const name = extractName(node, this.source, this.extractor);
    const docstring = getPrecedingDocstring(node, this.source);
    const visibility = this.extractor.getVisibility?.(node);
    const isExported = this.extractor.isExported?.(node, this.source);
    const classNode = this.createNode(kind, name, node, {
      docstring,
      visibility,
      isExported
    });
    if (!classNode) return;
    this.extractInheritance(node, classNode.id);
    this.extractDecoratorsFor(node, classNode.id);
    this.nodeStack.push(classNode.id);
    let body = this.extractor.resolveBody?.(node, this.extractor.bodyField) ?? getChildByField(node, this.extractor.bodyField);
    if (!body) body = node;
    for (let i = 0; i < body.namedChildCount; i++) {
      const child = body.namedChild(i);
      if (child) {
        this.visitNode(child);
      }
    }
    this.nodeStack.pop();
  }
  /**
   * Extract a method
   */
  extractMethod(node) {
    if (!this.extractor) return;
    const receiverType = this.extractor.getReceiverType?.(node, this.source);
    if (!this.isInsideClassLikeNode() && !this.extractor.methodsAreTopLevel && !receiverType) {
      if (node.parent?.type === "object" || node.parent?.type === "object_expression") {
        return;
      }
      this.extractFunction(node);
      return;
    }
    const name = extractName(node, this.source, this.extractor);
    if (this.extractor.isMisparsedFunction?.(name, node)) {
      const body2 = this.extractor.resolveBody?.(node, this.extractor.bodyField) ?? getChildByField(node, this.extractor.bodyField);
      if (body2) {
        this.visitFunctionBody(body2, "");
      }
      return;
    }
    const docstring = getPrecedingDocstring(node, this.source);
    const signature = this.extractor.getSignature?.(node, this.source);
    const visibility = this.extractor.getVisibility?.(node);
    const isAsync = this.extractor.isAsync?.(node);
    const isStatic = this.extractor.isStatic?.(node);
    const extraProps = {
      docstring,
      signature,
      visibility,
      isAsync,
      isStatic
    };
    if (receiverType) {
      extraProps.qualifiedName = `${receiverType}::${name}`;
    }
    const methodNode = this.createNode("method", name, node, extraProps);
    if (!methodNode) return;
    if (receiverType && !this.isInsideClassLikeNode()) {
      const ownerNode = this.nodes.find(
        (n) => n.name === receiverType && n.filePath === this.filePath && (n.kind === "struct" || n.kind === "class" || n.kind === "enum" || n.kind === "trait")
      );
      if (ownerNode) {
        this.edges.push({
          source: ownerNode.id,
          target: methodNode.id,
          kind: "contains"
        });
      }
    }
    this.extractTypeAnnotations(node, methodNode.id);
    this.extractDecoratorsFor(node, methodNode.id);
    this.nodeStack.push(methodNode.id);
    const body = this.extractor.resolveBody?.(node, this.extractor.bodyField) ?? getChildByField(node, this.extractor.bodyField);
    if (body) {
      this.visitFunctionBody(body, methodNode.id);
    }
    this.nodeStack.pop();
  }
  /**
   * Extract an interface/protocol/trait
   */
  extractInterface(node) {
    if (!this.extractor) return;
    const name = extractName(node, this.source, this.extractor);
    const docstring = getPrecedingDocstring(node, this.source);
    const isExported = this.extractor.isExported?.(node, this.source);
    const kind = this.extractor.interfaceKind ?? "interface";
    const interfaceNode = this.createNode(kind, name, node, {
      docstring,
      isExported
    });
    if (!interfaceNode) return;
    this.extractInheritance(node, interfaceNode.id);
    this.nodeStack.push(interfaceNode.id);
    let body = this.extractor.resolveBody?.(node, this.extractor.bodyField) ?? getChildByField(node, this.extractor.bodyField);
    if (!body) body = node;
    for (let i = 0; i < body.namedChildCount; i++) {
      const child = body.namedChild(i);
      if (child) {
        this.visitNode(child);
      }
    }
    this.nodeStack.pop();
  }
  /**
   * Extract a struct
   */
  extractStruct(node) {
    if (!this.extractor) return;
    const body = getChildByField(node, this.extractor.bodyField);
    if (!body) return;
    const name = extractName(node, this.source, this.extractor);
    const docstring = getPrecedingDocstring(node, this.source);
    const visibility = this.extractor.getVisibility?.(node);
    const isExported = this.extractor.isExported?.(node, this.source);
    const structNode = this.createNode("struct", name, node, {
      docstring,
      visibility,
      isExported
    });
    if (!structNode) return;
    this.extractInheritance(node, structNode.id);
    this.nodeStack.push(structNode.id);
    for (let i = 0; i < body.namedChildCount; i++) {
      const child = body.namedChild(i);
      if (child) {
        this.visitNode(child);
      }
    }
    this.nodeStack.pop();
  }
  /**
   * Extract an enum
   */
  extractEnum(node) {
    if (!this.extractor) return;
    const body = this.extractor.resolveBody?.(node, this.extractor.bodyField) ?? getChildByField(node, this.extractor.bodyField);
    if (!body) return;
    const name = extractName(node, this.source, this.extractor);
    const docstring = getPrecedingDocstring(node, this.source);
    const visibility = this.extractor.getVisibility?.(node);
    const isExported = this.extractor.isExported?.(node, this.source);
    const enumNode = this.createNode("enum", name, node, {
      docstring,
      visibility,
      isExported
    });
    if (!enumNode) return;
    this.extractInheritance(node, enumNode.id);
    this.nodeStack.push(enumNode.id);
    const memberTypes = this.extractor.enumMemberTypes;
    for (let i = 0; i < body.namedChildCount; i++) {
      const child = body.namedChild(i);
      if (!child) continue;
      if (memberTypes?.includes(child.type)) {
        this.extractEnumMembers(child);
      } else {
        this.visitNode(child);
      }
    }
    this.nodeStack.pop();
  }
  /**
   * Extract enum member names from an enum member node.
   * Handles multi-case declarations (Swift: `case put, delete`) and single-case patterns.
   */
  extractEnumMembers(node) {
    const nameNode = getChildByField(node, "name");
    if (nameNode) {
      this.createNode("enum_member", getNodeText(nameNode, this.source), node);
      return;
    }
    let found = false;
    for (let i = 0; i < node.namedChildCount; i++) {
      const child = node.namedChild(i);
      if (child && (child.type === "simple_identifier" || child.type === "identifier" || child.type === "property_identifier")) {
        this.createNode("enum_member", getNodeText(child, this.source), child);
        found = true;
      }
    }
    if (!found && node.namedChildCount === 0) {
      this.createNode("enum_member", getNodeText(node, this.source), node);
    }
  }
  /**
   * Extract a class property declaration (e.g. C# `public string Name { get; set; }`).
   * Extracts as 'property' kind node inside the owning class.
   */
  extractProperty(node) {
    if (!this.extractor) return;
    const docstring = getPrecedingDocstring(node, this.source);
    const visibility = this.extractor.getVisibility?.(node);
    const isStatic = this.extractor.isStatic?.(node) ?? false;
    const nameNode = getChildByField(node, "name") || node.namedChildren.find((c) => c.type === "identifier");
    if (!nameNode) return;
    const name = getNodeText(nameNode, this.source);
    const typeNode = node.namedChildren.find(
      (c) => c.type !== "modifier" && c.type !== "modifiers" && c.type !== "identifier" && c.type !== "accessor_list" && c.type !== "accessors" && c.type !== "equals_value_clause"
    );
    const typeText = typeNode ? getNodeText(typeNode, this.source) : void 0;
    const signature = typeText ? `${typeText} ${name}` : name;
    const propNode = this.createNode("property", name, node, {
      docstring,
      signature,
      visibility,
      isStatic
    });
    if (propNode) {
      this.extractDecoratorsFor(node, propNode.id);
    }
  }
  /**
   * Extract a class field declaration (e.g. Java field_declaration, C# field_declaration).
   * Extracts each declarator as a 'field' kind node inside the owning class.
   */
  extractField(node) {
    if (!this.extractor) return;
    const docstring = getPrecedingDocstring(node, this.source);
    const visibility = this.extractor.getVisibility?.(node);
    const isStatic = this.extractor.isStatic?.(node) ?? false;
    let declarators = node.namedChildren.filter(
      (c) => c.type === "variable_declarator"
    );
    if (declarators.length === 0) {
      const varDecl = node.namedChildren.find((c) => c.type === "variable_declaration");
      if (varDecl) {
        declarators = varDecl.namedChildren.filter((c) => c.type === "variable_declarator");
      }
    }
    if (declarators.length === 0) {
      const propElements = node.namedChildren.filter((c) => c.type === "property_element");
      if (propElements.length > 0) {
        const typeNode = node.namedChildren.find(
          (c) => c.type !== "visibility_modifier" && c.type !== "static_modifier" && c.type !== "readonly_modifier" && c.type !== "property_element" && c.type !== "var_modifier"
        );
        const typeText = typeNode ? getNodeText(typeNode, this.source) : void 0;
        for (const elem of propElements) {
          const varName = elem.namedChildren.find((c) => c.type === "variable_name");
          const nameNode = varName?.namedChildren.find((c) => c.type === "name");
          if (!nameNode) continue;
          const name = getNodeText(nameNode, this.source);
          const signature = typeText ? `${typeText} $${name}` : `$${name}`;
          this.createNode("field", name, elem, {
            docstring,
            signature,
            visibility,
            isStatic
          });
        }
        return;
      }
    }
    if (declarators.length > 0) {
      const varDecl = node.namedChildren.find((c) => c.type === "variable_declaration");
      const typeSearchNode = varDecl ?? node;
      const typeNode = typeSearchNode.namedChildren.find(
        (c) => c.type !== "modifiers" && c.type !== "modifier" && c.type !== "variable_declarator" && c.type !== "variable_declaration" && c.type !== "marker_annotation" && c.type !== "annotation"
      );
      const typeText = typeNode ? getNodeText(typeNode, this.source) : void 0;
      for (const decl of declarators) {
        const nameNode = getChildByField(decl, "name") || decl.namedChildren.find((c) => c.type === "identifier");
        if (!nameNode) continue;
        const name = getNodeText(nameNode, this.source);
        const signature = typeText ? `${typeText} ${name}` : name;
        const fieldNode = this.createNode("field", name, decl, {
          docstring,
          signature,
          visibility,
          isStatic
        });
        if (fieldNode) this.extractDecoratorsFor(node, fieldNode.id);
      }
    } else {
      const nameNode = getChildByField(node, "name") || node.namedChildren.find((c) => c.type === "identifier");
      if (nameNode) {
        const name = getNodeText(nameNode, this.source);
        this.createNode("field", name, node, {
          docstring,
          visibility,
          isStatic
        });
      }
    }
  }
  /**
   * Extract a variable declaration (const, let, var, etc.)
   *
   * Extracts top-level and module-level variable declarations.
   * Captures the variable name and first 100 chars of initializer in signature for searchability.
   */
  extractVariable(node) {
    if (!this.extractor) return;
    const isConst = this.extractor.isConst?.(node) ?? false;
    const kind = isConst ? "constant" : "variable";
    const docstring = getPrecedingDocstring(node, this.source);
    const isExported = this.extractor.isExported?.(node, this.source) ?? false;
    if (this.language === "typescript" || this.language === "javascript" || this.language === "tsx" || this.language === "jsx") {
      for (let i = 0; i < node.namedChildCount; i++) {
        const child = node.namedChild(i);
        if (child?.type === "variable_declarator") {
          const nameNode = getChildByField(child, "name");
          const valueNode = getChildByField(child, "value");
          if (nameNode) {
            if (nameNode.type === "object_pattern" || nameNode.type === "array_pattern") {
              continue;
            }
            const name = getNodeText(nameNode, this.source);
            if (valueNode && (valueNode.type === "arrow_function" || valueNode.type === "function_expression")) {
              this.extractFunction(valueNode);
              continue;
            }
            const initValue = valueNode ? getNodeText(valueNode, this.source).slice(0, 100) : void 0;
            const initSignature = initValue ? `= ${initValue}${initValue.length >= 100 ? "..." : ""}` : void 0;
            const varNode = this.createNode(kind, name, child, {
              docstring,
              signature: initSignature,
              isExported
            });
            if (varNode) {
              this.extractVariableTypeAnnotation(child, varNode.id);
            }
          }
        }
      }
    } else if (this.language === "python" || this.language === "ruby") {
      const left = getChildByField(node, "left") || node.namedChild(0);
      const right = getChildByField(node, "right") || node.namedChild(1);
      if (left && left.type === "identifier") {
        const name = getNodeText(left, this.source);
        const initValue = right ? getNodeText(right, this.source).slice(0, 100) : void 0;
        const initSignature = initValue ? `= ${initValue}${initValue.length >= 100 ? "..." : ""}` : void 0;
        this.createNode(kind, name, node, {
          docstring,
          signature: initSignature
        });
      }
    } else if (this.language === "go") {
      const specs = node.namedChildren.filter(
        (c) => c.type === "var_spec" || c.type === "const_spec"
      );
      for (const spec of specs) {
        const nameNode = spec.namedChild(0);
        if (nameNode && nameNode.type === "identifier") {
          const name = getNodeText(nameNode, this.source);
          const valueNode = spec.namedChildCount > 1 ? spec.namedChild(spec.namedChildCount - 1) : null;
          const initValue = valueNode ? getNodeText(valueNode, this.source).slice(0, 100) : void 0;
          const initSignature = initValue ? `= ${initValue}${initValue.length >= 100 ? "..." : ""}` : void 0;
          this.createNode(node.type === "const_declaration" ? "constant" : "variable", name, spec, {
            docstring,
            signature: initSignature
          });
        }
      }
      if (node.type === "short_var_declaration") {
        const left = getChildByField(node, "left");
        const right = getChildByField(node, "right");
        if (left) {
          const identifiers = left.type === "expression_list" ? left.namedChildren.filter((c) => c.type === "identifier") : [left];
          for (const id of identifiers) {
            const name = getNodeText(id, this.source);
            const initValue = right ? getNodeText(right, this.source).slice(0, 100) : void 0;
            const initSignature = initValue ? `= ${initValue}${initValue.length >= 100 ? "..." : ""}` : void 0;
            this.createNode("variable", name, node, {
              docstring,
              signature: initSignature
            });
          }
        }
      }
    } else {
      for (let i = 0; i < node.namedChildCount; i++) {
        const child = node.namedChild(i);
        if (child?.type === "identifier" || child?.type === "variable_declarator") {
          const name = child.type === "identifier" ? getNodeText(child, this.source) : extractName(child, this.source, this.extractor);
          if (name && name !== "<anonymous>") {
            this.createNode(kind, name, child, {
              docstring,
              isExported
            });
          }
        }
      }
    }
  }
  /**
   * Extract a type alias (e.g. `export type X = ...` in TypeScript).
   * For languages like Go, resolveTypeAliasKind detects when the type_spec
   * wraps a struct or interface definition and creates the correct node kind.
   * Returns true if children should be skipped (struct/interface handled body visiting).
   */
  extractTypeAlias(node) {
    if (!this.extractor) return false;
    const name = extractName(node, this.source, this.extractor);
    if (name === "<anonymous>") return false;
    const docstring = getPrecedingDocstring(node, this.source);
    const isExported = this.extractor.isExported?.(node, this.source);
    const resolvedKind = this.extractor.resolveTypeAliasKind?.(node, this.source);
    if (resolvedKind === "struct") {
      const structNode = this.createNode("struct", name, node, { docstring, isExported });
      if (!structNode) return true;
      this.nodeStack.push(structNode.id);
      const typeChild = getChildByField(node, "type") || this.findChildByTypes(node, this.extractor.structTypes);
      if (typeChild) {
        this.extractInheritance(typeChild, structNode.id);
        const body = getChildByField(typeChild, this.extractor.bodyField) || typeChild;
        for (let i = 0; i < body.namedChildCount; i++) {
          const child = body.namedChild(i);
          if (child) this.visitNode(child);
        }
      }
      this.nodeStack.pop();
      return true;
    }
    if (resolvedKind === "enum") {
      const enumNode = this.createNode("enum", name, node, { docstring, isExported });
      if (!enumNode) return true;
      this.nodeStack.push(enumNode.id);
      const innerEnum = this.findChildByTypes(node, this.extractor.enumTypes);
      if (innerEnum) {
        this.extractInheritance(innerEnum, enumNode.id);
        const body = this.extractor.resolveBody?.(innerEnum, this.extractor.bodyField) ?? getChildByField(innerEnum, this.extractor.bodyField);
        if (body) {
          const memberTypes = this.extractor.enumMemberTypes;
          for (let i = 0; i < body.namedChildCount; i++) {
            const child = body.namedChild(i);
            if (!child) continue;
            if (memberTypes?.includes(child.type)) {
              this.extractEnumMembers(child);
            } else {
              this.visitNode(child);
            }
          }
        }
      }
      this.nodeStack.pop();
      return true;
    }
    if (resolvedKind === "interface") {
      const kind = this.extractor.interfaceKind ?? "interface";
      const interfaceNode = this.createNode(kind, name, node, { docstring, isExported });
      if (!interfaceNode) return true;
      const typeChild = getChildByField(node, "type");
      if (typeChild) this.extractInheritance(typeChild, interfaceNode.id);
      return true;
    }
    const typeAliasNode = this.createNode("type_alias", name, node, {
      docstring,
      isExported
    });
    if (typeAliasNode && this.TYPE_ANNOTATION_LANGUAGES.has(this.language)) {
      const value = getChildByField(node, "value");
      if (value) {
        this.extractTypeRefsFromSubtree(value, typeAliasNode.id);
      }
    }
    return false;
  }
  // extractExportedVariables removed — the walker now descends into
  // export_statement children and the inner declaration's dedicated
  // extractor (extractVariable, extractFunction, extractClass, etc.)
  // handles the symbol with isExported=true via parent-walk in the
  // language extractor's isExported predicate.
  /**
   * Extract an import
   *
   * Creates an import node with the full import statement stored in signature for searchability.
   * Also creates unresolved references for resolution purposes.
   */
  extractImport(node) {
    if (!this.extractor) return;
    const importText = getNodeText(node, this.source).trim();
    if (this.extractor.extractImport) {
      const info = this.extractor.extractImport(node, this.source);
      if (info) {
        this.createNode("import", info.moduleName, node, {
          signature: info.signature
        });
        if (!info.handledRefs && info.moduleName && this.nodeStack.length > 0) {
          const parentId = this.nodeStack[this.nodeStack.length - 1];
          if (parentId) {
            this.unresolvedReferences.push({
              fromNodeId: parentId,
              referenceName: info.moduleName,
              referenceKind: "imports",
              line: node.startPosition.row + 1,
              column: node.startPosition.column
            });
          }
        }
        return;
      }
    }
    if (this.language === "python" && node.type === "import_statement") {
      for (let i = 0; i < node.namedChildCount; i++) {
        const child = node.namedChild(i);
        if (child?.type === "dotted_name") {
          this.createNode("import", getNodeText(child, this.source), node, {
            signature: importText
          });
        } else if (child?.type === "aliased_import") {
          const dottedName = child.namedChildren.find((c) => c.type === "dotted_name");
          if (dottedName) {
            this.createNode("import", getNodeText(dottedName, this.source), node, {
              signature: importText
            });
          }
        }
      }
      return;
    }
    if (this.language === "go") {
      const parentId = this.nodeStack.length > 0 ? this.nodeStack[this.nodeStack.length - 1] : null;
      const extractFromSpec = (spec) => {
        const stringLiteral = spec.namedChildren.find((c) => c.type === "interpreted_string_literal");
        if (stringLiteral) {
          const importPath = getNodeText(stringLiteral, this.source).replace(/['"]/g, "");
          if (importPath) {
            this.createNode("import", importPath, spec, {
              signature: getNodeText(spec, this.source).trim()
            });
            if (parentId) {
              this.unresolvedReferences.push({
                fromNodeId: parentId,
                referenceName: importPath,
                referenceKind: "imports",
                line: spec.startPosition.row + 1,
                column: spec.startPosition.column
              });
            }
          }
        }
      };
      const importSpecList = node.namedChildren.find((c) => c.type === "import_spec_list");
      if (importSpecList) {
        for (const spec of importSpecList.namedChildren.filter((c) => c.type === "import_spec")) {
          extractFromSpec(spec);
        }
      } else {
        const importSpec = node.namedChildren.find((c) => c.type === "import_spec");
        if (importSpec) {
          extractFromSpec(importSpec);
        }
      }
      return;
    }
    if (this.language === "php") {
      const namespacePrefix = node.namedChildren.find((c) => c.type === "namespace_name");
      const useGroup = node.namedChildren.find((c) => c.type === "namespace_use_group");
      if (namespacePrefix && useGroup) {
        const prefix = getNodeText(namespacePrefix, this.source);
        const useClauses = useGroup.namedChildren.filter(
          (c) => c.type === "namespace_use_group_clause" || c.type === "namespace_use_clause"
        );
        for (const clause of useClauses) {
          const nsName = clause.namedChildren.find((c) => c.type === "namespace_name");
          const name = nsName ? nsName.namedChildren.find((c) => c.type === "name") : clause.namedChildren.find((c) => c.type === "name");
          if (name) {
            const fullPath = `${prefix}\\${getNodeText(name, this.source)}`;
            this.createNode("import", fullPath, node, {
              signature: importText
            });
          }
        }
        return;
      }
    }
    if (this.extractor.extractImport) return;
    this.createNode("import", importText, node, {
      signature: importText
    });
  }
  /**
   * Extract a function call
   */
  extractCall(node) {
    if (this.nodeStack.length === 0) return;
    const callerId = this.nodeStack[this.nodeStack.length - 1];
    if (!callerId) return;
    let calleeName = "";
    const nameField = getChildByField(node, "name");
    const objectField = getChildByField(node, "object") || getChildByField(node, "scope");
    if (nameField && objectField && (node.type === "method_invocation" || node.type === "member_call_expression" || node.type === "scoped_call_expression")) {
      const methodName = getNodeText(nameField, this.source);
      let receiverName = getNodeText(objectField, this.source);
      receiverName = receiverName.replace(/^\$/, "");
      if (methodName) {
        const SKIP_RECEIVERS = /* @__PURE__ */ new Set(["self", "this", "cls", "super", "parent", "static"]);
        if (SKIP_RECEIVERS.has(receiverName)) {
          calleeName = methodName;
        } else {
          calleeName = `${receiverName}.${methodName}`;
        }
      }
    } else {
      const func = getChildByField(node, "function") || node.namedChild(0);
      if (func) {
        if (func.type === "member_expression" || func.type === "attribute" || func.type === "selector_expression" || func.type === "navigation_expression") {
          let property = getChildByField(func, "property") || getChildByField(func, "field");
          if (!property) {
            const child1 = func.namedChild(1);
            if (child1?.type === "navigation_suffix") {
              property = child1.namedChildren.find((c) => c.type === "simple_identifier") ?? child1;
            } else {
              property = child1;
            }
          }
          if (property) {
            const methodName = getNodeText(property, this.source);
            const receiver = getChildByField(func, "object") || getChildByField(func, "operand") || func.namedChild(0);
            const SKIP_RECEIVERS = /* @__PURE__ */ new Set(["self", "this", "cls", "super"]);
            if (receiver && (receiver.type === "identifier" || receiver.type === "simple_identifier")) {
              const receiverName = getNodeText(receiver, this.source);
              if (!SKIP_RECEIVERS.has(receiverName)) {
                calleeName = `${receiverName}.${methodName}`;
              } else {
                calleeName = methodName;
              }
            } else {
              calleeName = methodName;
            }
          }
        } else if (func.type === "scoped_identifier" || func.type === "scoped_call_expression") {
          calleeName = getNodeText(func, this.source);
        } else {
          calleeName = getNodeText(func, this.source);
        }
      }
    }
    if (calleeName) {
      this.unresolvedReferences.push({
        fromNodeId: callerId,
        referenceName: calleeName,
        referenceKind: "calls",
        line: node.startPosition.row + 1,
        column: node.startPosition.column
      });
    }
  }
  /**
   * `new Foo(...)` / `Foo::new(...)` / object_creation_expression —
   * emit an `instantiates` reference to the class name. The resolver
   * then links it to the class node, producing the `instantiates`
   * edge that powers "what creates instances of X" queries.
   *
   * Children are still walked so nested calls inside the constructor
   * arguments (`new Foo(bar())`) get their own `calls` references.
   */
  extractInstantiation(node) {
    if (this.nodeStack.length === 0) return;
    const fromId = this.nodeStack[this.nodeStack.length - 1];
    if (!fromId) return;
    const ctor = getChildByField(node, "constructor") || getChildByField(node, "type") || getChildByField(node, "name") || node.namedChild(0);
    if (!ctor) return;
    let className = getNodeText(ctor, this.source);
    const ltIdx = className.indexOf("<");
    if (ltIdx > 0) className = className.slice(0, ltIdx);
    const lastDot = Math.max(
      className.lastIndexOf("."),
      className.lastIndexOf("::")
    );
    if (lastDot >= 0) className = className.slice(lastDot + 1).replace(/^[:.]/, "");
    className = className.trim();
    if (className) {
      this.unresolvedReferences.push({
        fromNodeId: fromId,
        referenceName: className,
        referenceKind: "instantiates",
        line: node.startPosition.row + 1,
        column: node.startPosition.column
      });
    }
  }
  /**
   * Scan `declNode` and its preceding siblings (within the parent's
   * named children) for decorator nodes, emitting a `decorates`
   * reference from `decoratedId` to each decorator's function name.
   *
   * Why preceding siblings: in TypeScript, `@Foo class Bar {}` parses
   * as an `export_statement` (or top-level wrapper) with the
   * `decorator` as a child *before* the `class_declaration` — so the
   * decorator isn't a child of the class itself. For methods/
   * properties, the decorator IS a direct child of the declaration,
   * so we also scan declNode.namedChildren.
   *
   * Idempotent across grammars: if neither location yields decorators
   * (most non-decorator-using languages), the function is a no-op.
   */
  extractDecoratorsFor(declNode, decoratedId) {
    const consider = (n) => {
      if (!n) return;
      if (n.type !== "decorator" && n.type !== "annotation" && n.type !== "marker_annotation") {
        return;
      }
      let target = null;
      for (let i = 0; i < n.namedChildCount; i++) {
        const child = n.namedChild(i);
        if (!child) continue;
        if (child.type === "call_expression") {
          const fn = getChildByField(child, "function") ?? child.namedChild(0);
          if (fn) target = fn;
          if (target) break;
        }
        if (child.type === "identifier" || child.type === "member_expression" || child.type === "scoped_identifier" || child.type === "navigation_expression") {
          target = child;
          break;
        }
      }
      if (!target) return;
      let name = getNodeText(target, this.source);
      const lastDot = Math.max(name.lastIndexOf("."), name.lastIndexOf("::"));
      if (lastDot >= 0) name = name.slice(lastDot + 1).replace(/^[:.]/, "");
      if (!name) return;
      this.unresolvedReferences.push({
        fromNodeId: decoratedId,
        referenceName: name,
        referenceKind: "decorates",
        line: n.startPosition.row + 1,
        column: n.startPosition.column
      });
    };
    for (let i = 0; i < declNode.namedChildCount; i++) {
      consider(declNode.namedChild(i));
    }
    const parent = declNode.parent;
    if (parent) {
      const declStart = declNode.startIndex;
      let declIdx = -1;
      for (let i = 0; i < parent.namedChildCount; i++) {
        const sibling = parent.namedChild(i);
        if (sibling && sibling.startIndex === declStart) {
          declIdx = i;
          break;
        }
      }
      if (declIdx > 0) {
        for (let j = declIdx - 1; j >= 0; j--) {
          const sibling = parent.namedChild(j);
          if (!sibling) continue;
          if (sibling.type !== "decorator" && sibling.type !== "annotation" && sibling.type !== "marker_annotation") {
            break;
          }
          consider(sibling);
        }
      }
    }
  }
  /**
   * Visit function body and extract calls (and structural nodes).
   *
   * In addition to call expressions, this also detects class/struct/enum
   * definitions inside function bodies. This handles two cases:
   *   1. Local class/struct/enum definitions (valid in C++, Java, etc.)
   *   2. C++ macro misparsing — macros like NLOHMANN_JSON_NAMESPACE_BEGIN cause
   *      tree-sitter to interpret the namespace block as a function_definition,
   *      hiding real class/struct/enum nodes inside the "function body".
   */
  visitFunctionBody(body, _functionId) {
    if (!this.extractor) return;
    const visitForCallsAndStructure = (node) => {
      const nodeType = node.type;
      if (this.extractor.callTypes.includes(nodeType)) {
        this.extractCall(node);
      } else if (INSTANTIATION_KINDS.has(nodeType)) {
        this.extractInstantiation(node);
      } else if (this.extractor.extractBareCall) {
        const calleeName = this.extractor.extractBareCall(node, this.source);
        if (calleeName && this.nodeStack.length > 0) {
          const callerId = this.nodeStack[this.nodeStack.length - 1];
          if (callerId) {
            this.unresolvedReferences.push({
              fromNodeId: callerId,
              referenceName: calleeName,
              referenceKind: "calls",
              line: node.startPosition.row + 1,
              column: node.startPosition.column
            });
          }
        }
      }
      if (this.extractor.classTypes.includes(nodeType)) {
        const classification = this.extractor.classifyClassNode?.(node) ?? "class";
        if (classification === "struct") this.extractStruct(node);
        else if (classification === "enum") this.extractEnum(node);
        else if (classification === "interface") this.extractInterface(node);
        else if (classification === "trait") this.extractClass(node, "trait");
        else this.extractClass(node);
        return;
      }
      if (this.extractor.structTypes.includes(nodeType)) {
        this.extractStruct(node);
        return;
      }
      if (this.extractor.enumTypes.includes(nodeType)) {
        this.extractEnum(node);
        return;
      }
      if (this.extractor.interfaceTypes.includes(nodeType)) {
        this.extractInterface(node);
        return;
      }
      for (let i = 0; i < node.namedChildCount; i++) {
        const child = node.namedChild(i);
        if (child) {
          visitForCallsAndStructure(child);
        }
      }
    };
    visitForCallsAndStructure(body);
  }
  /**
   * Extract inheritance relationships
   */
  extractInheritance(node, classId) {
    for (let i = 0; i < node.namedChildCount; i++) {
      const child = node.namedChild(i);
      if (!child) continue;
      if (child.type === "extends_clause" || child.type === "superclass" || child.type === "base_clause" || // PHP class extends
      child.type === "extends_interfaces") {
        const typeList = child.namedChildren.find((c) => c.type === "type_list");
        const targets = typeList ? typeList.namedChildren : [child.namedChild(0)];
        for (const target of targets) {
          if (target) {
            const name = getNodeText(target, this.source);
            this.unresolvedReferences.push({
              fromNodeId: classId,
              referenceName: name,
              referenceKind: "extends",
              line: target.startPosition.row + 1,
              column: target.startPosition.column
            });
          }
        }
      }
      if (child.type === "implements_clause" || child.type === "class_interface_clause" || child.type === "super_interfaces" || // Java class implements
      child.type === "interfaces") {
        const typeList = child.namedChildren.find((c) => c.type === "type_list");
        const targets = typeList ? typeList.namedChildren : child.namedChildren;
        for (const iface of targets) {
          if (iface) {
            const name = getNodeText(iface, this.source);
            this.unresolvedReferences.push({
              fromNodeId: classId,
              referenceName: name,
              referenceKind: "implements",
              line: iface.startPosition.row + 1,
              column: iface.startPosition.column
            });
          }
        }
      }
      if (child.type === "argument_list" && node.type === "class_definition") {
        for (const arg of child.namedChildren) {
          if (arg.type === "identifier" || arg.type === "attribute") {
            const name = getNodeText(arg, this.source);
            this.unresolvedReferences.push({
              fromNodeId: classId,
              referenceName: name,
              referenceKind: "extends",
              line: arg.startPosition.row + 1,
              column: arg.startPosition.column
            });
          }
        }
      }
      if (child.type === "constraint_elem") {
        const typeId = child.namedChildren.find((c) => c.type === "type_identifier");
        if (typeId) {
          const name = getNodeText(typeId, this.source);
          this.unresolvedReferences.push({
            fromNodeId: classId,
            referenceName: name,
            referenceKind: "extends",
            line: typeId.startPosition.row + 1,
            column: typeId.startPosition.column
          });
        }
      }
      if (child.type === "field_declaration") {
        const hasFieldIdentifier = child.namedChildren.some((c) => c.type === "field_identifier");
        if (!hasFieldIdentifier) {
          const typeId = child.namedChildren.find((c) => c.type === "type_identifier");
          if (typeId) {
            const name = getNodeText(typeId, this.source);
            this.unresolvedReferences.push({
              fromNodeId: classId,
              referenceName: name,
              referenceKind: "extends",
              line: typeId.startPosition.row + 1,
              column: typeId.startPosition.column
            });
          }
        }
      }
      if (child.type === "trait_bounds") {
        for (const bound of child.namedChildren) {
          let typeName;
          let posNode;
          if (bound.type === "type_identifier") {
            typeName = getNodeText(bound, this.source);
            posNode = bound;
          } else if (bound.type === "generic_type") {
            const inner = bound.namedChildren.find((c) => c.type === "type_identifier");
            if (inner) {
              typeName = getNodeText(inner, this.source);
              posNode = inner;
            }
          } else if (bound.type === "higher_ranked_trait_bound") {
            const generic = bound.namedChildren.find((c) => c.type === "generic_type");
            const typeId = generic?.namedChildren.find((c) => c.type === "type_identifier") ?? bound.namedChildren.find((c) => c.type === "type_identifier");
            if (typeId) {
              typeName = getNodeText(typeId, this.source);
              posNode = typeId;
            }
          }
          if (typeName && posNode) {
            this.unresolvedReferences.push({
              fromNodeId: classId,
              referenceName: typeName,
              referenceKind: "extends",
              line: posNode.startPosition.row + 1,
              column: posNode.startPosition.column
            });
          }
        }
      }
      if (child.type === "base_list") {
        for (const baseType of child.namedChildren) {
          if (baseType) {
            const name = baseType.type === "generic_name" ? getNodeText(baseType.namedChildren.find((c) => c.type === "identifier") ?? baseType, this.source) : getNodeText(baseType, this.source);
            this.unresolvedReferences.push({
              fromNodeId: classId,
              referenceName: name,
              referenceKind: "extends",
              line: baseType.startPosition.row + 1,
              column: baseType.startPosition.column
            });
          }
        }
      }
      if (child.type === "delegation_specifier") {
        const userType = child.namedChildren.find((c) => c.type === "user_type");
        const constructorInvocation = child.namedChildren.find((c) => c.type === "constructor_invocation");
        const target = userType ?? constructorInvocation;
        if (target) {
          const typeId = target.type === "user_type" ? target.namedChildren.find((c) => c.type === "type_identifier") ?? target : target.namedChildren.find((c) => c.type === "user_type")?.namedChildren.find((c) => c.type === "type_identifier") ?? target.namedChildren.find((c) => c.type === "user_type") ?? target;
          const name = getNodeText(typeId, this.source);
          this.unresolvedReferences.push({
            fromNodeId: classId,
            referenceName: name,
            referenceKind: "extends",
            line: typeId.startPosition.row + 1,
            column: typeId.startPosition.column
          });
        }
      }
      if (child.type === "inheritance_specifier") {
        const userType = child.namedChildren.find((c) => c.type === "user_type");
        const typeId = userType?.namedChildren.find((c) => c.type === "type_identifier");
        if (typeId) {
          const name = getNodeText(typeId, this.source);
          this.unresolvedReferences.push({
            fromNodeId: classId,
            referenceName: name,
            referenceKind: "extends",
            line: typeId.startPosition.row + 1,
            column: typeId.startPosition.column
          });
        }
      }
      if ((child.type === "identifier" || child.type === "type_identifier") && node.type === "class_heritage") {
        const name = getNodeText(child, this.source);
        this.unresolvedReferences.push({
          fromNodeId: classId,
          referenceName: name,
          referenceKind: "extends",
          line: child.startPosition.row + 1,
          column: child.startPosition.column
        });
      }
      if (child.type === "field_declaration_list" || child.type === "class_heritage") {
        this.extractInheritance(child, classId);
      }
    }
  }
  /**
   * Rust `impl Trait for Type` — creates an implements edge from Type to Trait.
   * For plain `impl Type { ... }` (no trait), no inheritance edge is needed.
   */
  extractRustImplItem(node) {
    const hasFor = node.children.some(
      (c) => c.type === "for" && !c.isNamed
    );
    if (!hasFor) return;
    const typeIdents = node.namedChildren.filter(
      (c) => c.type === "type_identifier" || c.type === "generic_type" || c.type === "scoped_type_identifier"
    );
    if (typeIdents.length < 2) return;
    const traitNode = typeIdents[0];
    const typeNode = typeIdents[typeIdents.length - 1];
    const traitName = traitNode.type === "scoped_type_identifier" ? this.source.substring(traitNode.startIndex, traitNode.endIndex) : getNodeText(traitNode, this.source);
    let typeName;
    if (typeNode.type === "generic_type") {
      const inner = typeNode.namedChildren.find(
        (c) => c.type === "type_identifier"
      );
      typeName = inner ? getNodeText(inner, this.source) : getNodeText(typeNode, this.source);
    } else {
      typeName = getNodeText(typeNode, this.source);
    }
    const typeNodeId = this.findNodeByName(typeName);
    if (typeNodeId) {
      this.unresolvedReferences.push({
        fromNodeId: typeNodeId,
        referenceName: traitName,
        referenceKind: "implements",
        line: traitNode.startPosition.row + 1,
        column: traitNode.startPosition.column
      });
    }
  }
  /**
   * Find a previously-extracted node by name (used for back-references like impl blocks)
   */
  findNodeByName(name) {
    for (const node of this.nodes) {
      if (node.name === name && (node.kind === "struct" || node.kind === "enum" || node.kind === "class")) {
        return node.id;
      }
    }
    return void 0;
  }
  /**
   * Languages that support type annotations (TypeScript, etc.)
   */
  TYPE_ANNOTATION_LANGUAGES = /* @__PURE__ */ new Set([
    "typescript",
    "tsx",
    "dart",
    "kotlin",
    "swift",
    "rust",
    "go",
    "java",
    "csharp"
  ]);
  /**
   * Built-in/primitive type names that shouldn't create references
   */
  BUILTIN_TYPES = /* @__PURE__ */ new Set([
    "string",
    "number",
    "boolean",
    "void",
    "null",
    "undefined",
    "never",
    "any",
    "unknown",
    "object",
    "symbol",
    "bigint",
    "true",
    "false",
    // Rust
    "str",
    "bool",
    "i8",
    "i16",
    "i32",
    "i64",
    "i128",
    "isize",
    "u8",
    "u16",
    "u32",
    "u64",
    "u128",
    "usize",
    "f32",
    "f64",
    "char",
    // Java/C#
    "int",
    "long",
    "short",
    "byte",
    "float",
    "double",
    "char",
    // Go
    "int8",
    "int16",
    "int32",
    "int64",
    "uint8",
    "uint16",
    "uint32",
    "uint64",
    "float32",
    "float64",
    "complex64",
    "complex128",
    "rune",
    "error"
  ]);
  /**
   * Extract type references from type annotations on a function/method/field node.
   * Creates 'references' edges for parameter types, return types, and field types.
   */
  extractTypeAnnotations(node, nodeId) {
    if (!this.extractor) return;
    if (!this.TYPE_ANNOTATION_LANGUAGES.has(this.language)) return;
    const params = getChildByField(node, this.extractor.paramsField || "parameters");
    if (params) {
      this.extractTypeRefsFromSubtree(params, nodeId);
    }
    const returnType = getChildByField(node, this.extractor.returnField || "return_type");
    if (returnType) {
      this.extractTypeRefsFromSubtree(returnType, nodeId);
    }
    const typeAnnotation = node.namedChildren.find(
      (c) => c.type === "type_annotation"
    );
    if (typeAnnotation) {
      this.extractTypeRefsFromSubtree(typeAnnotation, nodeId);
    }
  }
  /**
   * Extract type references from a variable's type annotation.
   */
  extractVariableTypeAnnotation(node, nodeId) {
    if (!this.TYPE_ANNOTATION_LANGUAGES.has(this.language)) return;
    const typeAnnotation = node.namedChildren.find(
      (c) => c.type === "type_annotation"
    );
    if (typeAnnotation) {
      this.extractTypeRefsFromSubtree(typeAnnotation, nodeId);
    }
  }
  /**
   * Recursively walk a subtree and extract all type_identifier references.
   * Handles unions, intersections, generics, arrays, etc.
   */
  extractTypeRefsFromSubtree(node, fromNodeId) {
    if (node.type === "type_identifier") {
      const typeName = getNodeText(node, this.source);
      if (typeName && !this.BUILTIN_TYPES.has(typeName)) {
        this.unresolvedReferences.push({
          fromNodeId,
          referenceName: typeName,
          referenceKind: "references",
          line: node.startPosition.row + 1,
          column: node.startPosition.column
        });
      }
      return;
    }
    for (let i = 0; i < node.namedChildCount; i++) {
      const child = node.namedChild(i);
      if (child) {
        this.extractTypeRefsFromSubtree(child, fromNodeId);
      }
    }
  }
  /**
   * Handle Pascal-specific AST structures.
   * Returns true if the node was fully handled and children should be skipped.
   */
  visitPascalNode(node) {
    const nodeType = node.type;
    if (nodeType === "unit" || nodeType === "program" || nodeType === "library") {
      const moduleNameNode = node.namedChildren.find(
        (c) => c.type === "moduleName"
      );
      const name = moduleNameNode ? getNodeText(moduleNameNode, this.source) : "";
      const moduleName = name || path2.basename(this.filePath).replace(/\.[^.]+$/, "");
      this.createNode("module", moduleName, node);
      for (let i = 0; i < node.namedChildCount; i++) {
        const child = node.namedChild(i);
        if (child) this.visitNode(child);
      }
      return true;
    }
    if (nodeType === "declType") {
      this.extractPascalDeclType(node);
      return true;
    }
    if (nodeType === "declUses") {
      this.extractPascalUses(node);
      return true;
    }
    if (nodeType === "declConsts") {
      for (let i = 0; i < node.namedChildCount; i++) {
        const child = node.namedChild(i);
        if (child?.type === "declConst") {
          this.extractPascalConst(child);
        }
      }
      return true;
    }
    if (nodeType === "declConst") {
      this.extractPascalConst(node);
      return true;
    }
    if (nodeType === "declTypes") {
      for (let i = 0; i < node.namedChildCount; i++) {
        const child = node.namedChild(i);
        if (child) this.visitNode(child);
      }
      return true;
    }
    if (nodeType === "declVars") {
      for (let i = 0; i < node.namedChildCount; i++) {
        const child = node.namedChild(i);
        if (child?.type === "declVar") {
          const nameNode = getChildByField(child, "name");
          if (nameNode) {
            const name = getNodeText(nameNode, this.source);
            this.createNode("variable", name, child);
          }
        }
      }
      return true;
    }
    if (nodeType === "defProc") {
      this.extractPascalDefProc(node);
      return true;
    }
    if (nodeType === "declProp") {
      const nameNode = getChildByField(node, "name");
      if (nameNode) {
        const name = getNodeText(nameNode, this.source);
        const visibility = this.extractor.getVisibility?.(node);
        this.createNode("property", name, node, { visibility });
      }
      return true;
    }
    if (nodeType === "declField") {
      const nameNode = getChildByField(node, "name");
      if (nameNode) {
        const name = getNodeText(nameNode, this.source);
        const visibility = this.extractor.getVisibility?.(node);
        this.createNode("field", name, node, { visibility });
      }
      return true;
    }
    if (nodeType === "declSection") {
      for (let i = 0; i < node.namedChildCount; i++) {
        const child = node.namedChild(i);
        if (child) this.visitNode(child);
      }
      return true;
    }
    if (nodeType === "exprCall") {
      this.extractPascalCall(node);
      return true;
    }
    if (nodeType === "interface" || nodeType === "implementation") {
      for (let i = 0; i < node.namedChildCount; i++) {
        const child = node.namedChild(i);
        if (child) this.visitNode(child);
      }
      return true;
    }
    if (nodeType === "block") {
      this.visitPascalBlock(node);
      return true;
    }
    return false;
  }
  /**
   * Extract a Pascal declType node (class, interface, enum, or type alias)
   */
  extractPascalDeclType(node) {
    const nameNode = getChildByField(node, "name");
    if (!nameNode) return;
    const name = getNodeText(nameNode, this.source);
    const declClass = node.namedChildren.find(
      (c) => c.type === "declClass"
    );
    const declIntf = node.namedChildren.find(
      (c) => c.type === "declIntf"
    );
    const typeChild = node.namedChildren.find(
      (c) => c.type === "type"
    );
    if (declClass) {
      const classNode = this.createNode("class", name, node);
      if (classNode) {
        this.extractPascalInheritance(declClass, classNode.id);
        this.nodeStack.push(classNode.id);
        for (let i = 0; i < declClass.namedChildCount; i++) {
          const child = declClass.namedChild(i);
          if (child) this.visitNode(child);
        }
        this.nodeStack.pop();
      }
    } else if (declIntf) {
      const ifaceNode = this.createNode("interface", name, node);
      if (ifaceNode) {
        this.nodeStack.push(ifaceNode.id);
        for (let i = 0; i < declIntf.namedChildCount; i++) {
          const child = declIntf.namedChild(i);
          if (child) this.visitNode(child);
        }
        this.nodeStack.pop();
      }
    } else if (typeChild) {
      const declEnum = typeChild.namedChildren.find(
        (c) => c.type === "declEnum"
      );
      if (declEnum) {
        const enumNode = this.createNode("enum", name, node);
        if (enumNode) {
          this.nodeStack.push(enumNode.id);
          for (let i = 0; i < declEnum.namedChildCount; i++) {
            const child = declEnum.namedChild(i);
            if (child?.type === "declEnumValue") {
              const memberName = getChildByField(child, "name");
              if (memberName) {
                this.createNode("enum_member", getNodeText(memberName, this.source), child);
              }
            }
          }
          this.nodeStack.pop();
        }
      } else {
        this.createNode("type_alias", name, node);
      }
    } else {
      this.createNode("type_alias", name, node);
    }
  }
  /**
   * Extract Pascal uses clause into individual import nodes
   */
  extractPascalUses(node) {
    const importText = getNodeText(node, this.source).trim();
    for (let i = 0; i < node.namedChildCount; i++) {
      const child = node.namedChild(i);
      if (child?.type === "moduleName") {
        const unitName = getNodeText(child, this.source);
        this.createNode("import", unitName, child, {
          signature: importText
        });
        if (this.nodeStack.length > 0) {
          const parentId = this.nodeStack[this.nodeStack.length - 1];
          if (parentId) {
            this.unresolvedReferences.push({
              fromNodeId: parentId,
              referenceName: unitName,
              referenceKind: "imports",
              line: child.startPosition.row + 1,
              column: child.startPosition.column
            });
          }
        }
      }
    }
  }
  /**
   * Extract a Pascal constant declaration
   */
  extractPascalConst(node) {
    const nameNode = getChildByField(node, "name");
    if (!nameNode) return;
    const name = getNodeText(nameNode, this.source);
    const defaultValue = node.namedChildren.find(
      (c) => c.type === "defaultValue"
    );
    const sig = defaultValue ? getNodeText(defaultValue, this.source) : void 0;
    this.createNode("constant", name, node, { signature: sig });
  }
  /**
   * Extract Pascal inheritance (extends/implements) from declClass typeref children
   */
  extractPascalInheritance(declClass, classId) {
    const typerefs = declClass.namedChildren.filter(
      (c) => c.type === "typeref"
    );
    for (let i = 0; i < typerefs.length; i++) {
      const ref = typerefs[i];
      const name = getNodeText(ref, this.source);
      this.unresolvedReferences.push({
        fromNodeId: classId,
        referenceName: name,
        referenceKind: i === 0 ? "extends" : "implements",
        line: ref.startPosition.row + 1,
        column: ref.startPosition.column
      });
    }
  }
  /**
   * Extract calls and resolve method context from a Pascal defProc (implementation body).
   * Does not create a new node — the declaration was already captured from the interface section.
   */
  extractPascalDefProc(node) {
    const declProc = node.namedChildren.find(
      (c) => c.type === "declProc"
    );
    if (!declProc) return;
    const nameNode = getChildByField(declProc, "name");
    if (!nameNode) return;
    const fullName = getNodeText(nameNode, this.source).trim();
    const shortName = fullName.includes(".") ? fullName.split(".").pop() : fullName;
    const fullNameKey = fullName.toLowerCase();
    const shortNameKey = shortName.toLowerCase();
    if (!this.methodIndex) {
      this.methodIndex = /* @__PURE__ */ new Map();
      for (const n of this.nodes) {
        if (n.kind === "method" || n.kind === "function") {
          const nameKey = n.name.toLowerCase();
          if (!this.methodIndex.has(nameKey)) {
            this.methodIndex.set(nameKey, n.id);
          }
          if (n.kind === "method") {
            const qualifiedParts = n.qualifiedName.split("::");
            if (qualifiedParts.length >= 2) {
              for (let i = 0; i < qualifiedParts.length - 1; i++) {
                const scopedName = qualifiedParts.slice(i).join(".").toLowerCase();
                this.methodIndex.set(scopedName, n.id);
              }
            }
          }
        }
      }
    }
    const parentId = this.methodIndex.get(fullNameKey) || this.methodIndex.get(shortNameKey) || this.nodeStack[this.nodeStack.length - 1];
    if (!parentId) return;
    const block = node.namedChildren.find(
      (c) => c.type === "block"
    );
    if (block) {
      this.nodeStack.push(parentId);
      this.visitPascalBlock(block);
      this.nodeStack.pop();
    }
  }
  /**
   * Extract function calls from a Pascal expression
   */
  extractPascalCall(node) {
    if (this.nodeStack.length === 0) return;
    const callerId = this.nodeStack[this.nodeStack.length - 1];
    if (!callerId) return;
    const firstChild = node.namedChild(0);
    if (!firstChild) return;
    let calleeName = "";
    if (firstChild.type === "exprDot") {
      const identifiers = firstChild.namedChildren.filter(
        (c) => c.type === "identifier"
      );
      if (identifiers.length > 0) {
        calleeName = identifiers.map((id) => getNodeText(id, this.source)).join(".");
      }
    } else if (firstChild.type === "identifier") {
      calleeName = getNodeText(firstChild, this.source);
    }
    if (calleeName) {
      this.unresolvedReferences.push({
        fromNodeId: callerId,
        referenceName: calleeName,
        referenceKind: "calls",
        line: node.startPosition.row + 1,
        column: node.startPosition.column
      });
    }
    const args = node.namedChildren.find(
      (c) => c.type === "exprArgs"
    );
    if (args) {
      this.visitPascalBlock(args);
    }
  }
  /**
   * Recursively visit a Pascal block/statement tree for call expressions
   */
  visitPascalBlock(node) {
    for (let i = 0; i < node.namedChildCount; i++) {
      const child = node.namedChild(i);
      if (!child) continue;
      if (child.type === "exprCall") {
        this.extractPascalCall(child);
      } else if (child.type === "exprDot") {
        for (let j = 0; j < child.namedChildCount; j++) {
          const grandchild = child.namedChild(j);
          if (grandchild?.type === "exprCall") {
            this.extractPascalCall(grandchild);
          }
        }
      } else {
        this.visitPascalBlock(child);
      }
    }
  }
};
function extractFromSource(filePath, source, language, frameworkNames) {
  const detectedLanguage = language || detectLanguage(filePath, source);
  const fileExtension = path2.extname(filePath).toLowerCase();
  let result;
  if (detectedLanguage === "svelte") {
    const extractor = new SvelteExtractor(filePath, source);
    result = extractor.extract();
  } else if (detectedLanguage === "vue") {
    const extractor = new VueExtractor(filePath, source);
    result = extractor.extract();
  } else if (detectedLanguage === "liquid") {
    const extractor = new LiquidExtractor(filePath, source);
    result = extractor.extract();
  } else if (detectedLanguage === "pascal" && (fileExtension === ".dfm" || fileExtension === ".fmx")) {
    const extractor = new DfmExtractor(filePath, source);
    result = extractor.extract();
  } else {
    const extractor = new TreeSitterExtractor(filePath, source, detectedLanguage);
    result = extractor.extract();
  }
  if (frameworkNames && frameworkNames.length > 0) {
    const allResolvers = getAllFrameworkResolvers();
    const applicable = getApplicableFrameworks(
      allResolvers.filter((r) => frameworkNames.includes(r.name)),
      detectedLanguage
    );
    for (const fw of applicable) {
      if (!fw.extract) continue;
      try {
        const fwResult = fw.extract(filePath, source);
        result.nodes.push(...fwResult.nodes);
        result.unresolvedReferences.push(...fwResult.references);
      } catch (err) {
        result.errors.push({
          message: `Framework extractor '${fw.name}' failed: ${err instanceof Error ? err.message : String(err)}`,
          filePath,
          severity: "warning"
        });
      }
    }
  }
  return result;
}

// src/extraction/parse-worker.ts
{
  const realWrite = process.stderr.write.bind(process.stderr);
  process.stderr.write = ((chunk, encoding, cb) => {
    const s = typeof chunk === "string" ? chunk : Buffer.from(chunk).toString("utf-8");
    if (s.startsWith("Aborted(") || s.includes("Build with -sASSERTIONS for more info")) {
      if (typeof encoding === "function") encoding();
      else if (cb) cb();
      return true;
    }
    return realWrite(chunk, encoding, cb);
  });
}
var PARSER_RESET_INTERVAL = 5e3;
var parseCounts = /* @__PURE__ */ new Map();
var RECYCLE_RSS_THRESHOLD_MB = 400;
import_worker_threads.parentPort.on("message", async (msg) => {
  if (msg.type === "parse") {
    const { id, filePath, content, frameworkNames } = msg;
    try {
      const language = detectLanguage(filePath, content);
      await loadGrammarsForLanguages([language]);
      const result = extractFromSource(filePath, content, language, frameworkNames);
      const count = (parseCounts.get(language) ?? 0) + 1;
      parseCounts.set(language, count);
      if (count % PARSER_RESET_INTERVAL === 0) {
        resetParser(language);
      }
      const rssMb = process.memoryUsage().rss / 1024 / 1024;
      const shouldRecycle = rssMb > RECYCLE_RSS_THRESHOLD_MB;
      import_worker_threads.parentPort.postMessage({ type: "parse-result", id, result, shouldRecycle });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      if (message.includes("memory access out of bounds") || message.includes("out of memory")) {
        process.exit(1);
      }
      import_worker_threads.parentPort.postMessage({
        type: "parse-result",
        id,
        result: {
          nodes: [],
          edges: [],
          unresolvedReferences: [],
          errors: [{ message: `Parse worker error: ${message}`, filePath, severity: "error", code: "parse_error" }],
          durationMs: 0
        }
      });
    }
  } else if (msg.type === "shutdown") {
    import_worker_threads.parentPort.postMessage({ type: "shutdown-ack" });
  }
});
