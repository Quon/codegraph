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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

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
    exports2.basename = (path16, { windows } = {}) => {
      const segs = path16.split(windows ? /[\\/]/ : "/");
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
    var parse3 = (input, options) => {
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
            const expression = parse3(rest, { ...options, fastpaths: false }).output;
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
    parse3.fastpaths = (input, options) => {
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
    module2.exports = parse3;
  }
});

// node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
  "node_modules/picomatch/lib/picomatch.js"(exports2, module2) {
    "use strict";
    var scan = require_scan();
    var parse3 = require_parse();
    var utils = require_utils();
    var constants = require_constants();
    var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch3 = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch3(input, options, returnState));
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
      const regex = isState ? picomatch3.compileRe(glob, options) : picomatch3.makeRe(glob, options, false, true);
      const state = regex.state;
      delete regex.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
        isIgnored = picomatch3(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch3.test(input, regex, options, { glob, posix });
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
    picomatch3.test = (input, regex, options, { glob, posix } = {}) => {
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
          match = picomatch3.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output);
        }
      }
      return { isMatch: Boolean(match), match, output };
    };
    picomatch3.matchBase = (input, glob, options) => {
      const regex = glob instanceof RegExp ? glob : picomatch3.makeRe(glob, options);
      return regex.test(utils.basename(input));
    };
    picomatch3.isMatch = (str, patterns, options) => picomatch3(patterns, options)(str);
    picomatch3.parse = (pattern, options) => {
      if (Array.isArray(pattern)) return pattern.map((p) => picomatch3.parse(p, options));
      return parse3(pattern, { ...options, fastpaths: false });
    };
    picomatch3.scan = (input, options) => scan(input, options);
    picomatch3.compileRe = (state, options, returnOutput = false, returnState = false) => {
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
      const regex = picomatch3.toRegex(source, options);
      if (returnState === true) {
        regex.state = state;
      }
      return regex;
    };
    picomatch3.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse3.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse3(input, options);
      }
      return picomatch3.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch3.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true) throw err;
        return /$^/;
      }
    };
    picomatch3.constants = constants;
    module2.exports = picomatch3;
  }
});

// node_modules/picomatch/index.js
var require_picomatch2 = __commonJS({
  "node_modules/picomatch/index.js"(exports2, module2) {
    "use strict";
    var pico = require_picomatch();
    var utils = require_utils();
    function picomatch3(glob, options, returnState = false) {
      if (options && (options.windows === null || options.windows === void 0)) {
        options = { ...options, windows: utils.isWindows() };
      }
      return pico(glob, options, returnState);
    }
    Object.assign(picomatch3, pico);
    module2.exports = picomatch3;
  }
});

// src/index.ts
var index_exports = {};
__export(index_exports, {
  CODEGRAPH_DIR: () => CODEGRAPH_DIR,
  CodeGraph: () => CodeGraph,
  CodeGraphError: () => CodeGraphError,
  ConfigError: () => ConfigError,
  DEFAULT_CONFIG: () => DEFAULT_CONFIG,
  DatabaseError: () => DatabaseError,
  FileError: () => FileError,
  FileLock: () => FileLock,
  FileWatcher: () => FileWatcher,
  LANGUAGES: () => LANGUAGES,
  MCPServer: () => MCPServer,
  MemoryMonitor: () => MemoryMonitor,
  Mutex: () => Mutex,
  NODE_KINDS: () => NODE_KINDS,
  PROJECTS_FILENAME: () => PROJECTS_FILENAME,
  ParseError: () => ParseError,
  SearchError: () => SearchError,
  VectorError: () => VectorError,
  addProject: () => addProject,
  debounce: () => debounce,
  default: () => index_default,
  defaultLogger: () => defaultLogger,
  detectLanguage: () => detectLanguage,
  findNearestCodeGraphRoot: () => findNearestCodeGraphRoot,
  findNearestMonorepoRoot: () => findNearestMonorepoRoot,
  getCodeGraphDir: () => getCodeGraphDir,
  getConfigPath: () => getConfigPath,
  getDatabasePath: () => getDatabasePath,
  getLogger: () => getLogger,
  getProjectsPath: () => getProjectsPath,
  getSupportedLanguages: () => getSupportedLanguages,
  initGrammars: () => initGrammars,
  isGrammarLoaded: () => isGrammarLoaded,
  isInitialized: () => isInitialized,
  isLanguageSupported: () => isLanguageSupported,
  loadAllGrammars: () => loadAllGrammars,
  loadGrammarsForLanguages: () => loadGrammarsForLanguages,
  loadProjectEntries: () => loadProjectEntries,
  loadProjects: () => loadProjects,
  processInBatches: () => processInBatches,
  removeProject: () => removeProject,
  saveProjects: () => saveProjects,
  scanForProjects: () => scanForProjects,
  setLogger: () => setLogger,
  silentLogger: () => silentLogger,
  syncProjects: () => syncProjects,
  throttle: () => throttle
});
module.exports = __toCommonJS(index_exports);
var path15 = __toESM(require("path"));

// src/db/sqlite-adapter.ts
var WASM_FALLBACK_FIX_RECIPE = "`xcode-select --install` (macOS) or `apt install build-essential` (Debian/Ubuntu), then `npm rebuild better-sqlite3`, or `npm install better-sqlite3 --save` to force-include it.";
function buildWasmFallbackBanner(nativeError) {
  const sep3 = "\u2500".repeat(72);
  const lines = [
    sep3,
    "[CodeGraph] WASM SQLite fallback active (better-sqlite3 unavailable)",
    sep3,
    "Indexing and sync will be 5-10x slower than the native backend.",
    "",
    "Fix on macOS:",
    "  xcode-select --install        # install C build tools",
    "  npm rebuild better-sqlite3    # rebuild native binding for current Node",
    "",
    "Fix on Linux:",
    "  sudo apt install build-essential python3 make    # Debian/Ubuntu",
    '  # or: sudo yum groupinstall "Development Tools"  # RHEL/Fedora',
    "  npm rebuild better-sqlite3",
    "",
    "Or force-include as a hard dependency on any platform:",
    "  npm install better-sqlite3 --save",
    "",
    "Verify after fix: `codegraph status` should show `Backend: native`."
  ];
  if (nativeError) {
    lines.push("", `Native load error: ${nativeError}`);
  }
  lines.push(sep3);
  return lines.join("\n");
}
function translateNamedParams(sql) {
  const paramOrder = [];
  const rewritten = sql.replace(/@(\w+)/g, (_match, name) => {
    paramOrder.push(name);
    return "?";
  });
  if (paramOrder.length === 0) {
    return { sql, paramOrder: null };
  }
  return { sql: rewritten, paramOrder };
}
function resolveParams(params, paramOrder) {
  if (params.length === 0) return void 0;
  if (paramOrder && params.length === 1 && params[0] !== null && typeof params[0] === "object" && !Array.isArray(params[0]) && !(params[0] instanceof Buffer) && !(params[0] instanceof Uint8Array)) {
    const obj = params[0];
    return paramOrder.map((name) => obj[name]);
  }
  if (params.length === 1) return params[0];
  return params;
}
var WasmDatabaseAdapter = class {
  _db;
  // Track raw WASM statements so we can finalize them on close.
  // node-sqlite3-wasm won't release its file lock if statements are left open.
  _openStmts = /* @__PURE__ */ new Set();
  constructor(dbPath) {
    const { Database } = require("node-sqlite3-wasm");
    this._db = new Database(dbPath);
  }
  get open() {
    return this._db.isOpen;
  }
  prepare(sql) {
    const { sql: rewrittenSql, paramOrder } = translateNamedParams(sql);
    const stmt = this._db.prepare(rewrittenSql);
    this._openStmts.add(stmt);
    return {
      run(...params) {
        const resolved = resolveParams(params, paramOrder);
        const result = resolved !== void 0 ? stmt.run(resolved) : stmt.run();
        return {
          changes: result?.changes ?? 0,
          lastInsertRowid: result?.lastInsertRowid ?? 0
        };
      },
      get(...params) {
        const resolved = resolveParams(params, paramOrder);
        return resolved !== void 0 ? stmt.get(resolved) : stmt.get();
      },
      all(...params) {
        const resolved = resolveParams(params, paramOrder);
        return resolved !== void 0 ? stmt.all(resolved) : stmt.all();
      }
    };
  }
  exec(sql) {
    this._db.exec(sql);
  }
  pragma(str) {
    const trimmed = str.trim();
    if (trimmed.includes("=")) {
      const eqIdx = trimmed.indexOf("=");
      const key = trimmed.substring(0, eqIdx).trim();
      const value = trimmed.substring(eqIdx + 1).trim();
      if (key === "journal_mode" && value.toUpperCase() === "WAL") {
        this._db.exec("PRAGMA journal_mode = DELETE");
        return;
      }
      if (key === "mmap_size") {
        return;
      }
      if (key === "synchronous" && value.toUpperCase() === "NORMAL") {
        this._db.exec("PRAGMA synchronous = FULL");
        return;
      }
      this._db.exec(`PRAGMA ${key} = ${value}`);
      return;
    }
    const stmt = this._db.prepare(`PRAGMA ${trimmed}`);
    const result = stmt.get();
    stmt.finalize();
    return result;
  }
  transaction(fn) {
    return (...args) => {
      this._db.exec("BEGIN");
      try {
        const result = fn(...args);
        this._db.exec("COMMIT");
        return result;
      } catch (error) {
        this._db.exec("ROLLBACK");
        throw error;
      }
    };
  }
  close() {
    for (const stmt of this._openStmts) {
      try {
        stmt.finalize();
      } catch {
      }
    }
    this._openStmts.clear();
    this._db.close();
  }
};
function createDatabase(dbPath) {
  let nativeError;
  let wasmError;
  try {
    const Database = require("better-sqlite3");
    const db = new Database(dbPath);
    return { db, backend: "native" };
  } catch (error) {
    nativeError = error instanceof Error ? error.message : String(error);
  }
  try {
    const db = new WasmDatabaseAdapter(dbPath);
    console.warn(buildWasmFallbackBanner(nativeError));
    return { db, backend: "wasm" };
  } catch (error) {
    wasmError = error instanceof Error ? error.message : String(error);
  }
  throw new Error(
    `Failed to load any SQLite backend.
  Native (better-sqlite3): ${nativeError}
  WASM (node-sqlite3-wasm): ${wasmError}`
  );
}

// src/db/index.ts
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));

// src/db/migrations.ts
var CURRENT_SCHEMA_VERSION = 4;
var migrations = [
  {
    version: 2,
    description: "Add project metadata, provenance tracking, and unresolved ref context",
    up: (db) => {
      db.exec(`
        CREATE TABLE IF NOT EXISTS unresolved_refs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          from_node_id TEXT NOT NULL,
          reference_name TEXT NOT NULL,
          reference_kind TEXT NOT NULL,
          line INTEGER NOT NULL,
          col INTEGER NOT NULL,
          candidates TEXT,
          FOREIGN KEY (from_node_id) REFERENCES nodes(id) ON DELETE CASCADE
        );
        CREATE TABLE IF NOT EXISTS project_metadata (
          key TEXT PRIMARY KEY,
          value TEXT NOT NULL,
          updated_at INTEGER NOT NULL
        );
      `);
      const unresCols = new Set(
        db.prepare("PRAGMA table_info(unresolved_refs)").all().map(
          (c) => c.name
        )
      );
      if (!unresCols.has("file_path")) {
        db.exec(`ALTER TABLE unresolved_refs ADD COLUMN file_path TEXT NOT NULL DEFAULT '';`);
      }
      if (!unresCols.has("language")) {
        db.exec(
          `ALTER TABLE unresolved_refs ADD COLUMN language TEXT NOT NULL DEFAULT 'unknown';`
        );
      }
      const edgeCols = new Set(
        db.prepare("PRAGMA table_info(edges)").all().map(
          (c) => c.name
        )
      );
      if (!edgeCols.has("provenance")) {
        db.exec(`ALTER TABLE edges ADD COLUMN provenance TEXT DEFAULT NULL;`);
      }
      db.exec(`
        CREATE INDEX IF NOT EXISTS idx_unresolved_file_path ON unresolved_refs(file_path);
        CREATE INDEX IF NOT EXISTS idx_edges_provenance ON edges(provenance);
      `);
    }
  },
  {
    version: 3,
    description: "Add lower(name) expression index for memory-efficient case-insensitive lookups",
    up: (db) => {
      db.exec(`
        CREATE INDEX IF NOT EXISTS idx_nodes_lower_name ON nodes(lower(name));
      `);
    }
  },
  {
    version: 4,
    description: "Drop redundant idx_edges_source / idx_edges_target (covered by source_kind / target_kind composites)",
    up: (db) => {
      db.exec(`
        DROP INDEX IF EXISTS idx_edges_source;
        DROP INDEX IF EXISTS idx_edges_target;
      `);
    }
  }
];
function getCurrentVersion(db) {
  try {
    const row = db.prepare("SELECT MAX(version) as version FROM schema_versions").get();
    return row?.version ?? 0;
  } catch {
    return 0;
  }
}
function recordMigration(db, version, description) {
  db.prepare(
    "INSERT INTO schema_versions (version, applied_at, description) VALUES (?, ?, ?)"
  ).run(version, Date.now(), description);
}
function runMigrations(db, fromVersion) {
  const pending = migrations.filter((m) => m.version > fromVersion);
  if (pending.length === 0) {
    return;
  }
  pending.sort((a, b) => a.version - b.version);
  for (const migration of pending) {
    db.transaction(() => {
      migration.up(db);
      recordMigration(db, migration.version, migration.description);
    })();
  }
}

// src/db/index.ts
var DatabaseConnection = class _DatabaseConnection {
  db;
  dbPath;
  backend;
  constructor(db, dbPath, backend) {
    this.db = db;
    this.dbPath = dbPath;
    this.backend = backend;
  }
  /**
   * Initialize a new database at the given path
   */
  static initialize(dbPath) {
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const { db, backend } = createDatabase(dbPath);
    db.pragma("foreign_keys = ON");
    db.pragma("journal_mode = WAL");
    db.pragma("busy_timeout = 120000");
    db.pragma("synchronous = NORMAL");
    db.pragma("cache_size = -64000");
    db.pragma("temp_store = MEMORY");
    db.pragma("mmap_size = 268435456");
    const schemaPath = path.join(__dirname, "schema.sql");
    const schema = fs.readFileSync(schemaPath, "utf-8");
    db.exec(schema);
    const currentVersion = getCurrentVersion(db);
    if (currentVersion < CURRENT_SCHEMA_VERSION) {
      db.prepare(
        "INSERT OR IGNORE INTO schema_versions (version, applied_at, description) VALUES (?, ?, ?)"
      ).run(CURRENT_SCHEMA_VERSION, Date.now(), "Initial schema includes all migrations");
    }
    return new _DatabaseConnection(db, dbPath, backend);
  }
  /**
   * Open an existing database
   */
  static open(dbPath) {
    if (!fs.existsSync(dbPath)) {
      throw new Error(`Database not found: ${dbPath}`);
    }
    const { db, backend } = createDatabase(dbPath);
    db.pragma("foreign_keys = ON");
    db.pragma("journal_mode = WAL");
    db.pragma("busy_timeout = 120000");
    db.pragma("synchronous = NORMAL");
    db.pragma("cache_size = -64000");
    db.pragma("temp_store = MEMORY");
    db.pragma("mmap_size = 268435456");
    const conn = new _DatabaseConnection(db, dbPath, backend);
    const currentVersion = getCurrentVersion(db);
    if (currentVersion < CURRENT_SCHEMA_VERSION) {
      runMigrations(db, currentVersion);
    }
    return conn;
  }
  /**
   * Get the underlying database instance
   */
  getDb() {
    return this.db;
  }
  /**
   * Get the SQLite backend serving this connection. Per-instance so
   * MCP cross-project queries report the right backend even when
   * multiple project DBs are open in the same process.
   */
  getBackend() {
    return this.backend;
  }
  /**
   * Get database file path
   */
  getPath() {
    return this.dbPath;
  }
  /**
   * Get current schema version
   */
  getSchemaVersion() {
    const row = this.db.prepare("SELECT version, applied_at, description FROM schema_versions ORDER BY version DESC LIMIT 1").get();
    if (!row) return null;
    return {
      version: row.version,
      appliedAt: row.applied_at,
      description: row.description ?? void 0
    };
  }
  /**
   * Execute a function within a transaction
   */
  transaction(fn) {
    return this.db.transaction(fn)();
  }
  /**
   * Get database file size in bytes
   */
  getSize() {
    const stats = fs.statSync(this.dbPath);
    return stats.size;
  }
  /**
   * Optimize database (vacuum and analyze)
   */
  optimize() {
    this.db.exec("VACUUM");
    this.db.exec("ANALYZE");
  }
  /**
   * Close the database connection
   */
  close() {
    this.db.close();
  }
  /**
   * Check if the database connection is open
   */
  isOpen() {
    return this.db.open;
  }
};
var DATABASE_FILENAME = "codegraph.db";
function getDatabasePath(projectRoot) {
  return path.join(projectRoot, ".codegraph", DATABASE_FILENAME);
}

// src/utils.ts
var fs2 = __toESM(require("fs"));
var path2 = __toESM(require("path"));
function validatePathWithinRoot(projectRoot, filePath) {
  const resolved = path2.resolve(projectRoot, filePath);
  const normalizedRoot = path2.resolve(projectRoot);
  if (!resolved.startsWith(normalizedRoot + path2.sep) && resolved !== normalizedRoot) {
    return null;
  }
  return resolved;
}
function safeJsonParse(value, fallback) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function normalizePath(filePath) {
  return filePath.replace(/\\/g, "/");
}
var FileLock = class _FileLock {
  lockPath;
  held = false;
  /** Locks older than this are considered stale regardless of PID status */
  static STALE_TIMEOUT_MS = 2 * 60 * 1e3;
  // 2 minutes
  constructor(lockPath) {
    this.lockPath = lockPath;
  }
  /**
   * Acquire the lock. Throws if the lock is held by another live process.
   */
  acquire() {
    if (fs2.existsSync(this.lockPath)) {
      try {
        const content = fs2.readFileSync(this.lockPath, "utf-8").trim();
        const pid = parseInt(content, 10);
        const stat2 = fs2.statSync(this.lockPath);
        const lockAge = Date.now() - stat2.mtimeMs;
        if (lockAge < _FileLock.STALE_TIMEOUT_MS && !isNaN(pid) && this.isProcessAlive(pid)) {
          throw new Error(
            `CodeGraph database is locked by another process (PID ${pid}). If this is stale, run 'codegraph unlock' or delete ${this.lockPath}`
          );
        }
        fs2.unlinkSync(this.lockPath);
      } catch (err) {
        if (err instanceof Error && err.message.includes("locked by another")) {
          throw err;
        }
        try {
          fs2.unlinkSync(this.lockPath);
        } catch {
        }
      }
    }
    try {
      fs2.writeFileSync(this.lockPath, String(process.pid), { flag: "wx" });
      this.held = true;
    } catch (err) {
      if (err.code === "EEXIST") {
        throw new Error(
          `CodeGraph database is locked by another process. If this is stale, run 'codegraph unlock' or delete ${this.lockPath}`
        );
      }
      throw err;
    }
  }
  /**
   * Release the lock
   */
  release() {
    if (!this.held) return;
    try {
      const content = fs2.readFileSync(this.lockPath, "utf-8").trim();
      if (parseInt(content, 10) === process.pid) {
        fs2.unlinkSync(this.lockPath);
      }
    } catch {
    }
    this.held = false;
  }
  /**
   * Execute a function while holding the lock
   */
  withLock(fn) {
    this.acquire();
    try {
      return fn();
    } finally {
      this.release();
    }
  }
  /**
   * Execute an async function while holding the lock
   */
  async withLockAsync(fn) {
    this.acquire();
    try {
      return await fn();
    } finally {
      this.release();
    }
  }
  /**
   * Check if a process is still running
   */
  isProcessAlive(pid) {
    try {
      process.kill(pid, 0);
      return true;
    } catch {
      return false;
    }
  }
};
async function processInBatches(items, batchSize, processor, onBatchComplete) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, Math.min(i + batchSize, items.length));
    const batchResults = await Promise.all(
      batch.map((item, idx) => processor(item, i + idx))
    );
    results.push(...batchResults);
    if (onBatchComplete) {
      onBatchComplete(Math.min(i + batchSize, items.length), items.length);
    }
    if (global.gc) {
      global.gc();
    }
  }
  return results;
}
var Mutex = class {
  locked = false;
  waitQueue = [];
  /**
   * Acquire the lock
   *
   * @returns A release function to call when done
   */
  async acquire() {
    while (this.locked) {
      await new Promise((resolve9) => {
        this.waitQueue.push(resolve9);
      });
    }
    this.locked = true;
    return () => {
      this.locked = false;
      const next = this.waitQueue.shift();
      if (next) {
        next();
      }
    };
  }
  /**
   * Execute a function while holding the lock
   */
  async withLock(fn) {
    const release = await this.acquire();
    try {
      return await fn();
    } finally {
      release();
    }
  }
  /**
   * Check if the lock is currently held
   */
  isLocked() {
    return this.locked;
  }
};
function debounce(fn, delay) {
  let timeoutId = null;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
      timeoutId = null;
    }, delay);
  };
}
function throttle(fn, limit) {
  let lastCall = 0;
  let timeoutId = null;
  return (...args) => {
    const now = Date.now();
    const remaining = limit - (now - lastCall);
    if (remaining <= 0) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastCall = now;
      fn(...args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        timeoutId = null;
        fn(...args);
      }, remaining);
    }
  };
}
var MemoryMonitor = class {
  checkInterval = null;
  peakUsage = 0;
  threshold;
  onThresholdExceeded;
  constructor(thresholdMB = 500, onThresholdExceeded) {
    this.threshold = thresholdMB * 1024 * 1024;
    this.onThresholdExceeded = onThresholdExceeded;
  }
  /**
   * Start monitoring memory usage
   */
  start(intervalMs = 1e3) {
    this.stop();
    this.peakUsage = 0;
    this.checkInterval = setInterval(() => {
      const usage = process.memoryUsage().heapUsed;
      if (usage > this.peakUsage) {
        this.peakUsage = usage;
      }
      if (usage > this.threshold && this.onThresholdExceeded) {
        this.onThresholdExceeded(usage);
      }
    }, intervalMs);
  }
  /**
   * Stop monitoring
   */
  stop() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
  }
  /**
   * Get peak memory usage in bytes
   */
  getPeakUsage() {
    return this.peakUsage;
  }
  /**
   * Get current memory usage in bytes
   */
  getCurrentUsage() {
    return process.memoryUsage().heapUsed;
  }
};

// src/search/query-utils.ts
var path3 = __toESM(require("path"));
var STOP_WORDS = /* @__PURE__ */ new Set([
  // English
  "the",
  "a",
  "an",
  "and",
  "or",
  "but",
  "in",
  "on",
  "at",
  "to",
  "for",
  "of",
  "with",
  "by",
  "from",
  "is",
  "it",
  "that",
  "this",
  "are",
  "was",
  "be",
  "has",
  "had",
  "have",
  "do",
  "does",
  "did",
  "will",
  "would",
  "could",
  "should",
  "may",
  "might",
  "can",
  "shall",
  "not",
  "no",
  "all",
  "each",
  "every",
  "how",
  "what",
  "where",
  "when",
  "who",
  "which",
  "why",
  "i",
  "me",
  "my",
  "we",
  "our",
  "you",
  "your",
  "he",
  "she",
  "they",
  "show",
  "give",
  "tell",
  "been",
  "done",
  "made",
  "used",
  "using",
  "work",
  "works",
  "found",
  "also",
  "into",
  "then",
  "than",
  "just",
  "more",
  "some",
  "such",
  "over",
  "only",
  "out",
  "its",
  "so",
  "up",
  "as",
  "if",
  "look",
  "need",
  "needs",
  "want",
  "happen",
  "happens",
  "affect",
  "affected",
  "break",
  "breaks",
  "failing",
  "implemented",
  "implement",
  // Code-specific noise (avoid filtering common symbol names like get/set/add/build/find/list)
  "code",
  "file",
  "files",
  "function",
  "method",
  "class",
  "type",
  "fix",
  "bug",
  "called"
]);
function getStemVariants(term) {
  const variants = /* @__PURE__ */ new Set();
  const t = term.toLowerCase();
  if (t.endsWith("ing") && t.length > 5) {
    const base = t.slice(0, -3);
    variants.add(base);
    variants.add(base + "e");
    if (base.length >= 2 && base[base.length - 1] === base[base.length - 2]) {
      variants.add(base.slice(0, -1));
    }
  }
  if ((t.endsWith("tion") || t.endsWith("sion")) && t.length > 5) {
    variants.add(t.slice(0, -3));
  }
  if (t.endsWith("ment") && t.length > 6) {
    variants.add(t.slice(0, -4));
  }
  if (t.endsWith("ies") && t.length > 4) {
    variants.add(t.slice(0, -3) + "y");
  } else if (t.endsWith("es") && t.length > 4) {
    variants.add(t.slice(0, -2));
  } else if (t.endsWith("s") && !t.endsWith("ss") && t.length > 4) {
    variants.add(t.slice(0, -1));
  }
  if (t.endsWith("ed") && !t.endsWith("eed") && t.length > 4) {
    variants.add(t.slice(0, -1));
    variants.add(t.slice(0, -2));
    if (t.endsWith("ied") && t.length > 5) {
      variants.add(t.slice(0, -3) + "y");
    }
  }
  if (t.endsWith("er") && t.length > 4) {
    const base = t.slice(0, -2);
    variants.add(base);
    variants.add(base + "e");
    if (base.length >= 2 && base[base.length - 1] === base[base.length - 2]) {
      variants.add(base.slice(0, -1));
    }
  }
  return [...variants].filter((v) => v.length >= 3 && v !== t);
}
function extractSearchTerms(query, options) {
  const includeStems = options?.stems !== false;
  const tokens = /* @__PURE__ */ new Set();
  const compoundPattern = /\b([a-zA-Z][a-zA-Z0-9]*(?:[A-Z][a-z]+)+|[A-Z][a-z]+(?:[A-Z][a-z]*)+)\b/g;
  let match;
  while ((match = compoundPattern.exec(query)) !== null) {
    if (match[1] && match[1].length >= 3) {
      tokens.add(match[1].toLowerCase());
    }
  }
  const snakePattern = /\b([a-zA-Z][a-zA-Z0-9]*(?:_[a-zA-Z0-9]+)+)\b/g;
  while ((match = snakePattern.exec(query)) !== null) {
    if (match[1] && match[1].length >= 3) {
      tokens.add(match[1].toLowerCase());
    }
  }
  const camelSplit = query.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
  const normalised = camelSplit.replace(/[_.]+/g, " ");
  const words = normalised.split(/[^a-zA-Z0-9]+/).filter(Boolean);
  for (const word of words) {
    const lower = word.toLowerCase();
    if (lower.length < 3) continue;
    if (STOP_WORDS.has(lower)) continue;
    tokens.add(lower);
  }
  if (includeStems) {
    const stems = /* @__PURE__ */ new Set();
    for (const token of tokens) {
      for (const variant of getStemVariants(token)) {
        if (!tokens.has(variant) && !STOP_WORDS.has(variant)) {
          stems.add(variant);
        }
      }
    }
    for (const stem of stems) {
      tokens.add(stem);
    }
  }
  return [...tokens];
}
function scorePathRelevance(filePath, query) {
  const terms = extractSearchTerms(query, { stems: false });
  if (terms.length === 0) return 0;
  const pathLower = filePath.toLowerCase();
  const fileName = path3.basename(filePath).toLowerCase();
  const dirName = path3.dirname(filePath).toLowerCase();
  let score = 0;
  for (const term of terms) {
    if (fileName.includes(term)) score += 10;
    if (dirName.includes(term)) score += 5;
    else if (pathLower.includes(term)) score += 3;
  }
  const queryLower = query.toLowerCase();
  const isTestQuery = queryLower.includes("test") || queryLower.includes("spec");
  if (!isTestQuery && isTestFile(filePath)) {
    score -= 15;
  }
  return score;
}
function isTestFile(filePath) {
  const lower = filePath.toLowerCase();
  const fileName = path3.basename(lower);
  return fileName.startsWith("test_") || fileName.startsWith("test.") || fileName.endsWith(".test.ts") || fileName.endsWith(".test.js") || fileName.endsWith(".test.tsx") || fileName.endsWith(".test.jsx") || fileName.endsWith(".spec.ts") || fileName.endsWith(".spec.js") || fileName.endsWith("_test.go") || fileName.endsWith("_test.py") || fileName.endsWith("_test.rs") || fileName.endsWith("Tests.java") || fileName.endsWith("Test.java") || fileName.endsWith("Tester.java") || fileName.endsWith("TestCase.java") || lower.includes("/tests/") || lower.includes("/test/") || lower.includes("/__tests__/") || lower.includes("/spec/") || lower.includes("/testlib/") || lower.includes("/testing/") || // Non-production directories: examples, samples, benchmarks, fixtures, demos.
  // Check both mid-path (/integration/) and start-of-path (integration/) since
  // file paths may be stored as relative paths without a leading slash.
  matchesNonProductionDir(lower);
}
function matchesNonProductionDir(lowerPath) {
  const dirs = [
    "integration",
    "sample",
    "samples",
    "example",
    "examples",
    "fixture",
    "fixtures",
    "benchmark",
    "benchmarks",
    "demo",
    "demos"
  ];
  for (const dir of dirs) {
    if (lowerPath.includes("/" + dir + "/") || lowerPath.startsWith(dir + "/")) {
      return true;
    }
  }
  return false;
}
function nameMatchBonus(nodeName, query) {
  const nameLower = nodeName.toLowerCase();
  const rawTerms = query.replace(/([a-z])([A-Z])/g, "$1 $2").split(/[\s_.\-]+/).map((t) => t.toLowerCase()).filter((t) => t.length >= 2);
  const queryTokens = query.split(/\s+/).map((t) => t.toLowerCase()).filter((t) => t.length >= 2);
  const queryLower = query.replace(/[\s]+/g, "").toLowerCase();
  if (nameLower === queryLower) return 80;
  if (queryTokens.length > 1 && queryTokens.includes(nameLower)) return 60;
  if (nameLower.startsWith(queryLower)) {
    const ratio = queryLower.length / nameLower.length;
    return Math.round(10 + 30 * ratio);
  }
  if (rawTerms.length > 1) {
    const allMatch = rawTerms.every((t) => nameLower.includes(t));
    if (allMatch) return 15;
  }
  if (nameLower.includes(queryLower)) return 10;
  return 0;
}
function kindBonus(kind) {
  const bonuses = {
    function: 10,
    method: 10,
    class: 8,
    interface: 9,
    type_alias: 6,
    struct: 6,
    trait: 9,
    enum: 5,
    component: 8,
    route: 9,
    module: 4,
    property: 3,
    field: 3,
    variable: 2,
    constant: 3,
    import: 1,
    export: 1,
    parameter: 0,
    namespace: 4,
    file: 0,
    protocol: 9,
    enum_member: 3
  };
  return bonuses[kind] ?? 0;
}

// src/types.ts
var NODE_KINDS = [
  "file",
  "module",
  "class",
  "struct",
  "interface",
  "trait",
  "protocol",
  "function",
  "method",
  "property",
  "field",
  "variable",
  "constant",
  "enum",
  "enum_member",
  "type_alias",
  "namespace",
  "parameter",
  "import",
  "export",
  "route",
  "component"
];
var LANGUAGES = [
  "typescript",
  "javascript",
  "tsx",
  "jsx",
  "python",
  "go",
  "rust",
  "java",
  "c",
  "cpp",
  "csharp",
  "php",
  "ruby",
  "swift",
  "kotlin",
  "dart",
  "svelte",
  "vue",
  "liquid",
  "pascal",
  "scala",
  "unknown"
];
var DEFAULT_CONFIG = {
  version: 1,
  rootDir: ".",
  include: [
    // TypeScript/JavaScript
    "**/*.ts",
    "**/*.tsx",
    "**/*.js",
    "**/*.jsx",
    // Python
    "**/*.py",
    // Go
    "**/*.go",
    // Rust
    "**/*.rs",
    // Java
    "**/*.java",
    // C/C++
    "**/*.c",
    "**/*.h",
    "**/*.cpp",
    "**/*.hpp",
    "**/*.cc",
    "**/*.cxx",
    // C#
    "**/*.cs",
    // PHP
    "**/*.php",
    // Ruby
    "**/*.rb",
    // Swift
    "**/*.swift",
    // Kotlin
    "**/*.kt",
    "**/*.kts",
    // Dart
    "**/*.dart",
    // Svelte
    "**/*.svelte",
    // Vue
    "**/*.vue",
    // Liquid (Shopify themes)
    "**/*.liquid",
    // Pascal / Delphi
    "**/*.pas",
    "**/*.dpr",
    "**/*.dpk",
    "**/*.lpr",
    "**/*.dfm",
    "**/*.fmx",
    // Scala
    "**/*.scala",
    "**/*.sc"
  ],
  exclude: [
    // Version control
    "**/.git/**",
    // Dependencies
    "**/node_modules/**",
    "**/vendor/**",
    "**/Pods/**",
    // Generic build outputs
    "**/dist/**",
    "**/build/**",
    "**/out/**",
    "**/bin/**",
    "**/obj/**",
    "**/target/**",
    // JavaScript/TypeScript
    "**/*.min.js",
    "**/*.bundle.js",
    "**/.next/**",
    "**/.nuxt/**",
    "**/.svelte-kit/**",
    "**/.output/**",
    "**/.turbo/**",
    "**/.cache/**",
    "**/.parcel-cache/**",
    "**/.vite/**",
    "**/.astro/**",
    "**/.docusaurus/**",
    "**/.gatsby/**",
    "**/.webpack/**",
    "**/.nx/**",
    "**/.yarn/cache/**",
    "**/.pnpm-store/**",
    "**/storybook-static/**",
    // React Native / Expo
    "**/.expo/**",
    "**/web-build/**",
    "**/ios/Pods/**",
    "**/ios/build/**",
    "**/android/build/**",
    "**/android/.gradle/**",
    // Python
    "**/__pycache__/**",
    "**/.venv/**",
    "**/venv/**",
    "**/site-packages/**",
    "**/dist-packages/**",
    "**/.pytest_cache/**",
    "**/.mypy_cache/**",
    "**/.ruff_cache/**",
    "**/.tox/**",
    "**/.nox/**",
    "**/*.egg-info/**",
    "**/.eggs/**",
    // Go
    "**/go/pkg/mod/**",
    // Rust
    "**/target/debug/**",
    "**/target/release/**",
    // Java/Kotlin/Gradle
    "**/.gradle/**",
    "**/.m2/**",
    "**/generated-sources/**",
    "**/.kotlin/**",
    // Dart/Flutter
    "**/.dart_tool/**",
    // C#/.NET
    "**/.vs/**",
    "**/.nuget/**",
    "**/artifacts/**",
    "**/publish/**",
    // C/C++
    "**/cmake-build-*/**",
    "**/CMakeFiles/**",
    "**/bazel-*/**",
    "**/vcpkg_installed/**",
    "**/.conan/**",
    "**/Debug/**",
    "**/Release/**",
    "**/x64/**",
    "**/.pio/**",
    // Platform.io (IoT/embedded build artifacts and library deps)
    // Electron
    "**/release/**",
    "**/*.app/**",
    "**/*.asar",
    // Swift/iOS/Xcode
    "**/DerivedData/**",
    "**/.build/**",
    "**/.swiftpm/**",
    "**/xcuserdata/**",
    "**/Carthage/Build/**",
    "**/SourcePackages/**",
    // Delphi/Pascal
    "**/__history/**",
    "**/__recovery/**",
    "**/*.dcu",
    // PHP
    "**/.composer/**",
    "**/storage/framework/**",
    "**/bootstrap/cache/**",
    // Ruby
    "**/.bundle/**",
    "**/tmp/cache/**",
    "**/public/assets/**",
    "**/public/packs/**",
    "**/.yardoc/**",
    // Testing/Coverage
    "**/coverage/**",
    "**/htmlcov/**",
    "**/.nyc_output/**",
    "**/test-results/**",
    "**/.coverage/**",
    // IDE/Editor
    "**/.idea/**",
    // Logs and temp
    "**/logs/**",
    "**/tmp/**",
    "**/temp/**",
    // Documentation build output
    "**/_build/**",
    "**/docs/_build/**",
    "**/site/**"
  ],
  languages: [],
  frameworks: [],
  maxFileSize: 1024 * 1024,
  // 1MB
  extractDocstrings: true,
  trackCallSites: true
};

// src/search/query-parser.ts
var KIND_VALUES = new Set(NODE_KINDS);
var LANGUAGE_VALUES = new Set(LANGUAGES);
function unquote(s) {
  if (s.length >= 2 && s.startsWith('"') && s.endsWith('"')) return s.slice(1, -1);
  return s;
}
function parseQuery(raw) {
  const out = {
    text: "",
    kinds: [],
    languages: [],
    pathFilters: [],
    nameFilters: []
  };
  const tokens = [];
  let i = 0;
  while (i < raw.length) {
    while (i < raw.length && /\s/.test(raw[i])) i++;
    if (i >= raw.length) break;
    const start = i;
    while (i < raw.length && !/\s/.test(raw[i])) {
      if (raw[i] === '"') {
        const end = raw.indexOf('"', i + 1);
        if (end === -1) {
          i = raw.length;
          break;
        }
        i = end + 1;
        continue;
      }
      i++;
    }
    tokens.push(raw.slice(start, i));
  }
  const textParts = [];
  for (const tok of tokens) {
    const colon = tok.indexOf(":");
    if (colon <= 0 || colon === tok.length - 1) {
      textParts.push(tok);
      continue;
    }
    const key = tok.slice(0, colon).toLowerCase();
    const valueRaw = unquote(tok.slice(colon + 1));
    if (!valueRaw) {
      textParts.push(tok);
      continue;
    }
    switch (key) {
      case "kind": {
        if (KIND_VALUES.has(valueRaw)) {
          out.kinds.push(valueRaw);
        } else {
          textParts.push(tok);
        }
        break;
      }
      case "lang":
      case "language": {
        const lower = valueRaw.toLowerCase();
        if (LANGUAGE_VALUES.has(lower)) {
          out.languages.push(lower);
        } else {
          textParts.push(tok);
        }
        break;
      }
      case "path":
        out.pathFilters.push(valueRaw);
        break;
      case "name":
        out.nameFilters.push(valueRaw);
        break;
      default:
        textParts.push(tok);
    }
  }
  out.text = textParts.join(" ").trim();
  return out;
}
function boundedEditDistance(a, b, maxDist) {
  if (a === b) return 0;
  const al = a.length;
  const bl = b.length;
  if (Math.abs(al - bl) > maxDist) return maxDist + 1;
  if (al === 0) return bl;
  if (bl === 0) return al;
  let prev = new Array(bl + 1);
  let cur = new Array(bl + 1);
  for (let j = 0; j <= bl; j++) prev[j] = j;
  for (let i = 1; i <= al; i++) {
    cur[0] = i;
    let rowMin = cur[0];
    for (let j = 1; j <= bl; j++) {
      const cost = a.charCodeAt(i - 1) === b.charCodeAt(j - 1) ? 0 : 1;
      const insertion = cur[j - 1] + 1;
      const deletion = prev[j] + 1;
      const substitution = prev[j - 1] + cost;
      cur[j] = Math.min(insertion, deletion, substitution);
      if (cur[j] < rowMin) rowMin = cur[j];
    }
    if (rowMin > maxDist) return maxDist + 1;
    [prev, cur] = [cur, prev];
  }
  return prev[bl];
}

// src/db/queries.ts
function rowToNode(row) {
  return {
    id: row.id,
    kind: row.kind,
    name: row.name,
    qualifiedName: row.qualified_name,
    filePath: row.file_path,
    language: row.language,
    startLine: row.start_line,
    endLine: row.end_line,
    startColumn: row.start_column,
    endColumn: row.end_column,
    docstring: row.docstring ?? void 0,
    signature: row.signature ?? void 0,
    visibility: row.visibility,
    isExported: row.is_exported === 1,
    isAsync: row.is_async === 1,
    isStatic: row.is_static === 1,
    isAbstract: row.is_abstract === 1,
    decorators: row.decorators ? safeJsonParse(row.decorators, void 0) : void 0,
    typeParameters: row.type_parameters ? safeJsonParse(row.type_parameters, void 0) : void 0,
    updatedAt: row.updated_at
  };
}
function rowToEdge(row) {
  return {
    source: row.source,
    target: row.target,
    kind: row.kind,
    metadata: row.metadata ? safeJsonParse(row.metadata, void 0) : void 0,
    line: row.line ?? void 0,
    column: row.col ?? void 0,
    provenance: row.provenance
  };
}
function rowToFileRecord(row) {
  return {
    path: row.path,
    contentHash: row.content_hash,
    language: row.language,
    size: row.size,
    modifiedAt: row.modified_at,
    indexedAt: row.indexed_at,
    nodeCount: row.node_count,
    errors: row.errors ? safeJsonParse(row.errors, void 0) : void 0
  };
}
var QueryBuilder = class {
  db;
  // Node cache for frequently accessed nodes (LRU-style, max 1000 entries)
  nodeCache = /* @__PURE__ */ new Map();
  maxCacheSize = 1e3;
  // Prepared statements (lazily initialized)
  stmts = {};
  constructor(db) {
    this.db = db;
  }
  // ===========================================================================
  // Node Operations
  // ===========================================================================
  /**
   * Insert a new node
   */
  insertNode(node) {
    if (!this.stmts.insertNode) {
      this.stmts.insertNode = this.db.prepare(`
        INSERT OR REPLACE INTO nodes (
          id, kind, name, qualified_name, file_path, language,
          start_line, end_line, start_column, end_column,
          docstring, signature, visibility,
          is_exported, is_async, is_static, is_abstract,
          decorators, type_parameters, updated_at
        ) VALUES (
          @id, @kind, @name, @qualifiedName, @filePath, @language,
          @startLine, @endLine, @startColumn, @endColumn,
          @docstring, @signature, @visibility,
          @isExported, @isAsync, @isStatic, @isAbstract,
          @decorators, @typeParameters, @updatedAt
        )
      `);
    }
    if (!node.id || !node.kind || !node.name || !node.filePath || !node.language) {
      console.error("[CodeGraph] Skipping node with missing required fields:", {
        id: node.id,
        kind: node.kind,
        name: node.name,
        filePath: node.filePath,
        language: node.language
      });
      return;
    }
    try {
      this.stmts.insertNode.run({
        id: node.id,
        kind: node.kind,
        name: node.name,
        qualifiedName: node.qualifiedName ?? node.name,
        filePath: node.filePath,
        language: node.language,
        startLine: node.startLine ?? 0,
        endLine: node.endLine ?? 0,
        startColumn: node.startColumn ?? 0,
        endColumn: node.endColumn ?? 0,
        docstring: node.docstring ?? null,
        signature: node.signature ?? null,
        visibility: node.visibility ?? null,
        isExported: node.isExported ? 1 : 0,
        isAsync: node.isAsync ? 1 : 0,
        isStatic: node.isStatic ? 1 : 0,
        isAbstract: node.isAbstract ? 1 : 0,
        decorators: node.decorators ? JSON.stringify(node.decorators) : null,
        typeParameters: node.typeParameters ? JSON.stringify(node.typeParameters) : null,
        updatedAt: node.updatedAt ?? Date.now()
      });
    } catch (error) {
      throw error;
    }
  }
  /**
   * Insert multiple nodes in a transaction
   */
  insertNodes(nodes) {
    this.db.transaction(() => {
      for (const node of nodes) {
        this.insertNode(node);
      }
    })();
  }
  /**
   * Update an existing node
   */
  updateNode(node) {
    if (!this.stmts.updateNode) {
      this.stmts.updateNode = this.db.prepare(`
        UPDATE nodes SET
          kind = @kind,
          name = @name,
          qualified_name = @qualifiedName,
          file_path = @filePath,
          language = @language,
          start_line = @startLine,
          end_line = @endLine,
          start_column = @startColumn,
          end_column = @endColumn,
          docstring = @docstring,
          signature = @signature,
          visibility = @visibility,
          is_exported = @isExported,
          is_async = @isAsync,
          is_static = @isStatic,
          is_abstract = @isAbstract,
          decorators = @decorators,
          type_parameters = @typeParameters,
          updated_at = @updatedAt
        WHERE id = @id
      `);
    }
    this.nodeCache.delete(node.id);
    if (!node.id || !node.kind || !node.name || !node.filePath || !node.language) {
      console.error("[CodeGraph] Skipping node update with missing required fields:", node.id);
      return;
    }
    this.stmts.updateNode.run({
      id: node.id,
      kind: node.kind,
      name: node.name,
      qualifiedName: node.qualifiedName ?? node.name,
      filePath: node.filePath,
      language: node.language,
      startLine: node.startLine ?? 0,
      endLine: node.endLine ?? 0,
      startColumn: node.startColumn ?? 0,
      endColumn: node.endColumn ?? 0,
      docstring: node.docstring ?? null,
      signature: node.signature ?? null,
      visibility: node.visibility ?? null,
      isExported: node.isExported ? 1 : 0,
      isAsync: node.isAsync ? 1 : 0,
      isStatic: node.isStatic ? 1 : 0,
      isAbstract: node.isAbstract ? 1 : 0,
      decorators: node.decorators ? JSON.stringify(node.decorators) : null,
      typeParameters: node.typeParameters ? JSON.stringify(node.typeParameters) : null,
      updatedAt: node.updatedAt ?? Date.now()
    });
  }
  /**
   * Delete a node by ID
   */
  deleteNode(id) {
    if (!this.stmts.deleteNode) {
      this.stmts.deleteNode = this.db.prepare("DELETE FROM nodes WHERE id = ?");
    }
    this.nodeCache.delete(id);
    this.stmts.deleteNode.run(id);
  }
  /**
   * Delete all nodes for a file
   */
  deleteNodesByFile(filePath) {
    if (!this.stmts.deleteNodesByFile) {
      this.stmts.deleteNodesByFile = this.db.prepare("DELETE FROM nodes WHERE file_path = ?");
    }
    for (const [id, node] of this.nodeCache) {
      if (node.filePath === filePath) {
        this.nodeCache.delete(id);
      }
    }
    this.stmts.deleteNodesByFile.run(filePath);
  }
  /**
   * Get a node by ID
   */
  getNodeById(id) {
    if (this.nodeCache.has(id)) {
      const cached = this.nodeCache.get(id);
      this.nodeCache.delete(id);
      this.nodeCache.set(id, cached);
      return cached;
    }
    if (!this.stmts.getNodeById) {
      this.stmts.getNodeById = this.db.prepare("SELECT * FROM nodes WHERE id = ?");
    }
    const row = this.stmts.getNodeById.get(id);
    if (!row) {
      return null;
    }
    const node = rowToNode(row);
    this.cacheNode(node);
    return node;
  }
  /**
   * Add a node to the cache, evicting oldest if needed
   */
  cacheNode(node) {
    if (this.nodeCache.size >= this.maxCacheSize) {
      const firstKey = this.nodeCache.keys().next().value;
      if (firstKey) {
        this.nodeCache.delete(firstKey);
      }
    }
    this.nodeCache.set(node.id, node);
  }
  /**
   * Clear the node cache
   */
  clearCache() {
    this.nodeCache.clear();
  }
  /**
   * Get all nodes in a file
   */
  getNodesByFile(filePath) {
    if (!this.stmts.getNodesByFile) {
      this.stmts.getNodesByFile = this.db.prepare(
        "SELECT * FROM nodes WHERE file_path = ? ORDER BY start_line"
      );
    }
    const rows = this.stmts.getNodesByFile.all(filePath);
    return rows.map(rowToNode);
  }
  /**
   * Get all nodes of a specific kind
   */
  getNodesByKind(kind) {
    if (!this.stmts.getNodesByKind) {
      this.stmts.getNodesByKind = this.db.prepare("SELECT * FROM nodes WHERE kind = ?");
    }
    const rows = this.stmts.getNodesByKind.all(kind);
    return rows.map(rowToNode);
  }
  /**
   * Get all nodes in the database
   */
  getAllNodes() {
    const rows = this.db.prepare("SELECT * FROM nodes").all();
    return rows.map(rowToNode);
  }
  /**
   * Get nodes by exact name match (uses idx_nodes_name index)
   */
  getNodesByName(name) {
    if (!this.stmts.getNodesByName) {
      this.stmts.getNodesByName = this.db.prepare("SELECT * FROM nodes WHERE name = ?");
    }
    const rows = this.stmts.getNodesByName.all(name);
    return rows.map(rowToNode);
  }
  /**
   * Get nodes by exact qualified name match (uses idx_nodes_qualified_name index)
   */
  getNodesByQualifiedNameExact(qualifiedName) {
    if (!this.stmts.getNodesByQualifiedNameExact) {
      this.stmts.getNodesByQualifiedNameExact = this.db.prepare(
        "SELECT * FROM nodes WHERE qualified_name = ?"
      );
    }
    const rows = this.stmts.getNodesByQualifiedNameExact.all(qualifiedName);
    return rows.map(rowToNode);
  }
  /**
   * Get nodes by lowercase name match (uses idx_nodes_lower_name expression index)
   */
  getNodesByLowerName(lowerName) {
    if (!this.stmts.getNodesByLowerName) {
      this.stmts.getNodesByLowerName = this.db.prepare(
        "SELECT * FROM nodes WHERE lower(name) = ?"
      );
    }
    const rows = this.stmts.getNodesByLowerName.all(lowerName);
    return rows.map(rowToNode);
  }
  /**
   * Search nodes by name using FTS with fallback to LIKE for better matching
   *
   * Search strategy:
   * 1. Try FTS5 prefix match (query*) for word-start matching
   * 2. If no results, try LIKE for substring matching (e.g., "signIn" finds "signInWithGoogle")
   * 3. Score results based on match quality
   */
  searchNodes(query, options = {}) {
    const { limit = 100, offset = 0 } = options;
    const parsed = parseQuery(query);
    const mergedKinds = parsed.kinds.length > 0 ? Array.from(/* @__PURE__ */ new Set([...options.kinds ?? [], ...parsed.kinds])) : options.kinds;
    const mergedLanguages = parsed.languages.length > 0 ? Array.from(/* @__PURE__ */ new Set([...options.languages ?? [], ...parsed.languages])) : options.languages;
    const pathFilters = parsed.pathFilters;
    const nameFilters = parsed.nameFilters;
    const text = parsed.text;
    const kinds = mergedKinds;
    const languages = mergedLanguages;
    let results = text ? this.searchNodesFTS(text, { kinds, languages, limit, offset }) : this.searchAllByFilters({ kinds, languages, limit: limit * 5 });
    if (results.length === 0 && text.length >= 2) {
      results = this.searchNodesLike(text, { kinds, languages, limit, offset });
    }
    if (results.length === 0 && text.length >= 3) {
      results = this.searchNodesFuzzy(text, { kinds, languages, limit });
    }
    if (results.length > 0 && query) {
      const existingIds = new Set(results.map((r) => r.node.id));
      const maxFtsScore = Math.max(...results.map((r) => r.score));
      const terms = query.split(/\s+/).filter((t) => t.length >= 2);
      for (const term of terms) {
        let sql = "SELECT * FROM nodes WHERE name = ? COLLATE NOCASE";
        const params = [term];
        if (kinds && kinds.length > 0) {
          sql += ` AND kind IN (${kinds.map(() => "?").join(",")})`;
          params.push(...kinds);
        }
        if (languages && languages.length > 0) {
          sql += ` AND language IN (${languages.map(() => "?").join(",")})`;
          params.push(...languages);
        }
        sql += " LIMIT 20";
        const rows = this.db.prepare(sql).all(...params);
        for (const row of rows) {
          if (!existingIds.has(row.id)) {
            results.push({ node: rowToNode(row), score: maxFtsScore });
            existingIds.add(row.id);
          }
        }
      }
    }
    if (results.length > 0 && (text || query)) {
      const scoringQuery = text || query;
      results = results.map((r) => ({
        ...r,
        score: r.score + kindBonus(r.node.kind) + scorePathRelevance(r.node.filePath, scoringQuery) + nameMatchBonus(r.node.name, scoringQuery)
      }));
      results.sort((a, b) => b.score - a.score);
      if (results.length > limit) {
        results = results.slice(0, limit);
      }
    }
    if (pathFilters.length > 0) {
      const lowered = pathFilters.map((p) => p.toLowerCase());
      results = results.filter((r) => {
        const fp = r.node.filePath.toLowerCase();
        return lowered.some((p) => fp.includes(p));
      });
    }
    if (nameFilters.length > 0) {
      const lowered = nameFilters.map((n) => n.toLowerCase());
      results = results.filter((r) => {
        const nm = r.node.name.toLowerCase();
        return lowered.some((n) => nm.includes(n));
      });
    }
    return results;
  }
  /**
   * Match-everything path used when the user supplied only field
   * filters (`kind:function lang:typescript`) with no text. Returns
   * candidates ordered by name; the caller's filter pass narrows to
   * what was asked for.
   */
  searchAllByFilters(options) {
    const { kinds, languages, limit } = options;
    let sql = "SELECT * FROM nodes WHERE 1=1";
    const params = [];
    if (kinds && kinds.length > 0) {
      sql += ` AND kind IN (${kinds.map(() => "?").join(",")})`;
      params.push(...kinds);
    }
    if (languages && languages.length > 0) {
      sql += ` AND language IN (${languages.map(() => "?").join(",")})`;
      params.push(...languages);
    }
    sql += " ORDER BY name LIMIT ?";
    params.push(limit);
    const rows = this.db.prepare(sql).all(...params);
    return rows.map((row) => ({ node: rowToNode(row), score: 1 }));
  }
  /**
   * Fuzzy fallback: when zero FTS/LIKE hits, try an edit-distance
   * sweep over the distinct symbol-name set. Caps `maxDist` at 2 so
   * `getUssr` finds `getUser` but `process` doesn't match `prosody`.
   * Bounded edit distance keeps each comparison cheap; the per-query
   * scan is O(distinct-name-count) which is far smaller than total
   * node count on any real codebase.
   */
  searchNodesFuzzy(text, options) {
    const { kinds, languages, limit } = options;
    const lowered = text.toLowerCase();
    const maxDist = lowered.length <= 4 ? 1 : 2;
    const allNames = this.getAllNodeNames();
    const candidates = [];
    for (const name of allNames) {
      const dist = boundedEditDistance(name.toLowerCase(), lowered, maxDist);
      if (dist <= maxDist) candidates.push({ name, dist });
    }
    candidates.sort((a, b) => a.dist - b.dist);
    const FUZZY_FOLLOWUP_CAP = Math.max(limit * 2, 50);
    const cappedCandidates = candidates.slice(0, FUZZY_FOLLOWUP_CAP);
    const results = [];
    const seen = /* @__PURE__ */ new Set();
    for (const c of cappedCandidates) {
      if (results.length >= limit) break;
      let sql = "SELECT * FROM nodes WHERE name = ?";
      const params = [c.name];
      if (kinds && kinds.length > 0) {
        sql += ` AND kind IN (${kinds.map(() => "?").join(",")})`;
        params.push(...kinds);
      }
      if (languages && languages.length > 0) {
        sql += ` AND language IN (${languages.map(() => "?").join(",")})`;
        params.push(...languages);
      }
      sql += " LIMIT 5";
      const rows = this.db.prepare(sql).all(...params);
      for (const row of rows) {
        if (seen.has(row.id)) continue;
        seen.add(row.id);
        results.push({ node: rowToNode(row), score: 1 / (1 + c.dist) });
        if (results.length >= limit) break;
      }
    }
    return results;
  }
  /**
   * FTS5 search with prefix matching
   */
  searchNodesFTS(query, options) {
    const { kinds, languages, limit = 100, offset = 0 } = options;
    const ftsQuery = query.replace(/['"*():^]/g, "").split(/\s+/).filter((term) => term.length > 0).filter((term) => !/^(AND|OR|NOT|NEAR)$/i.test(term)).map((term) => `"${term}"*`).join(" OR ");
    if (!ftsQuery) {
      return [];
    }
    const ftsLimit = Math.max(limit * 5, 100);
    let sql = `
      SELECT nodes.*, bm25(nodes_fts, 0, 20, 5, 1, 2) as score
      FROM nodes_fts
      JOIN nodes ON nodes_fts.id = nodes.id
      WHERE nodes_fts MATCH ?
    `;
    const params = [ftsQuery];
    if (kinds && kinds.length > 0) {
      sql += ` AND nodes.kind IN (${kinds.map(() => "?").join(",")})`;
      params.push(...kinds);
    }
    if (languages && languages.length > 0) {
      sql += ` AND nodes.language IN (${languages.map(() => "?").join(",")})`;
      params.push(...languages);
    }
    sql += " ORDER BY score LIMIT ? OFFSET ?";
    params.push(ftsLimit, offset);
    try {
      const rows = this.db.prepare(sql).all(...params);
      return rows.map((row) => ({
        node: rowToNode(row),
        score: Math.abs(row.score)
        // bm25 returns negative scores
      }));
    } catch {
      return [];
    }
  }
  /**
   * LIKE-based substring search for cases where FTS doesn't match
   * Useful for camelCase matching (e.g., "signIn" finds "signInWithGoogle")
   */
  searchNodesLike(query, options) {
    const { kinds, languages, limit = 100, offset = 0 } = options;
    let sql = `
      SELECT nodes.*,
        CASE
          WHEN name = ? THEN 1.0
          WHEN name LIKE ? THEN 0.9
          WHEN name LIKE ? THEN 0.8
          WHEN qualified_name LIKE ? THEN 0.7
          ELSE 0.5
        END as score
      FROM nodes
      WHERE (
        name LIKE ? OR
        qualified_name LIKE ? OR
        name LIKE ?
      )
    `;
    const exactMatch = query;
    const startsWith = `${query}%`;
    const contains = `%${query}%`;
    const params = [
      exactMatch,
      // Exact match score
      startsWith,
      // Starts with score
      contains,
      // Contains score
      contains,
      // Qualified name score
      contains,
      // WHERE: name contains
      contains,
      // WHERE: qualified_name contains
      startsWith
      // WHERE: name starts with
    ];
    if (kinds && kinds.length > 0) {
      sql += ` AND kind IN (${kinds.map(() => "?").join(",")})`;
      params.push(...kinds);
    }
    if (languages && languages.length > 0) {
      sql += ` AND language IN (${languages.map(() => "?").join(",")})`;
      params.push(...languages);
    }
    sql += " ORDER BY score DESC, length(name) ASC LIMIT ? OFFSET ?";
    params.push(limit, offset);
    const rows = this.db.prepare(sql).all(...params);
    return rows.map((row) => ({
      node: rowToNode(row),
      score: row.score
    }));
  }
  /**
   * Find nodes by exact name match
   *
   * Used for hybrid search - looks up symbols by exact name or case-insensitive match.
   * Returns high-confidence matches for known symbol names extracted from query.
   *
   * @param names - Array of symbol names to look up
   * @param options - Search options (kinds, languages, limit)
   * @returns SearchResult array with exact matches scored at 1.0
   */
  findNodesByExactName(names, options = {}) {
    if (names.length === 0) return [];
    const { kinds, languages, limit = 50 } = options;
    const nameToFiles = /* @__PURE__ */ new Map();
    for (const name of names) {
      let sql = "SELECT DISTINCT file_path FROM nodes WHERE name COLLATE NOCASE = ?";
      const params = [name];
      if (kinds && kinds.length > 0) {
        sql += ` AND kind IN (${kinds.map(() => "?").join(",")})`;
        params.push(...kinds);
      }
      sql += " LIMIT 100";
      const rows = this.db.prepare(sql).all(...params);
      nameToFiles.set(name.toLowerCase(), new Set(rows.map((r) => r.file_path)));
    }
    const distinctiveFiles = /* @__PURE__ */ new Set();
    for (const [, files] of nameToFiles) {
      if (files.size > 0 && files.size < 10) {
        for (const f of files) distinctiveFiles.add(f);
      }
    }
    const perNameLimit = Math.max(8, Math.ceil(limit / names.length));
    const allResults = [];
    const seenIds = /* @__PURE__ */ new Set();
    for (const name of names) {
      let sql = `
        SELECT nodes.*, 1.0 as score
        FROM nodes
        WHERE name COLLATE NOCASE = ?
      `;
      const params = [name];
      if (kinds && kinds.length > 0) {
        sql += ` AND kind IN (${kinds.map(() => "?").join(",")})`;
        params.push(...kinds);
      }
      if (languages && languages.length > 0) {
        sql += ` AND language IN (${languages.map(() => "?").join(",")})`;
        params.push(...languages);
      }
      sql += " LIMIT ?";
      params.push(Math.max(perNameLimit * 3, 50));
      const rows = this.db.prepare(sql).all(...params);
      const nameResults = [];
      for (const row of rows) {
        const node = rowToNode(row);
        if (seenIds.has(node.id)) continue;
        const coLocationBoost = distinctiveFiles.has(node.filePath) ? 20 : 0;
        nameResults.push({ node, score: row.score + coLocationBoost });
      }
      nameResults.sort((a, b) => b.score - a.score);
      for (const r of nameResults.slice(0, perNameLimit)) {
        seenIds.add(r.node.id);
        allResults.push(r);
      }
    }
    allResults.sort((a, b) => b.score - a.score);
    return allResults.slice(0, limit);
  }
  /**
   * Find nodes whose name contains a substring (LIKE-based).
   * Useful for CamelCase-part matching where FTS fails because
   * e.g. "TransportSearchAction" is one FTS token, not matchable by "Search"*.
   *
   * Results are ordered by name length (shorter = more likely to be the core type).
   */
  findNodesByNameSubstring(substring, options = {}) {
    const { kinds, languages, limit = 30, excludePrefix } = options;
    let sql = `
      SELECT nodes.*, 1.0 as score
      FROM nodes
      WHERE name LIKE ?
    `;
    const params = [`%${substring}%`];
    if (excludePrefix) {
      sql += ` AND name NOT LIKE ?`;
      params.push(`${substring}%`);
    }
    if (kinds && kinds.length > 0) {
      sql += ` AND kind IN (${kinds.map(() => "?").join(",")})`;
      params.push(...kinds);
    }
    if (languages && languages.length > 0) {
      sql += ` AND language IN (${languages.map(() => "?").join(",")})`;
      params.push(...languages);
    }
    sql += " ORDER BY length(name) ASC LIMIT ?";
    params.push(limit);
    const rows = this.db.prepare(sql).all(...params);
    return rows.map((row) => ({
      node: rowToNode(row),
      score: row.score
    }));
  }
  // ===========================================================================
  // Edge Operations
  // ===========================================================================
  /**
   * Insert a new edge
   */
  insertEdge(edge) {
    if (!this.stmts.insertEdge) {
      this.stmts.insertEdge = this.db.prepare(`
        INSERT OR IGNORE INTO edges (source, target, kind, metadata, line, col, provenance)
        VALUES (@source, @target, @kind, @metadata, @line, @col, @provenance)
      `);
    }
    this.stmts.insertEdge.run({
      source: edge.source,
      target: edge.target,
      kind: edge.kind,
      metadata: edge.metadata ? JSON.stringify(edge.metadata) : null,
      line: edge.line ?? null,
      col: edge.column ?? null,
      provenance: edge.provenance ?? null
    });
  }
  /**
   * Insert multiple edges in a transaction
   */
  insertEdges(edges) {
    this.db.transaction(() => {
      for (const edge of edges) {
        this.insertEdge(edge);
      }
    })();
  }
  /**
   * Delete all edges from a source node
   */
  deleteEdgesBySource(sourceId) {
    if (!this.stmts.deleteEdgesBySource) {
      this.stmts.deleteEdgesBySource = this.db.prepare("DELETE FROM edges WHERE source = ?");
    }
    this.stmts.deleteEdgesBySource.run(sourceId);
  }
  /**
   * Get outgoing edges from a node
   */
  getOutgoingEdges(sourceId, kinds, provenance) {
    if (kinds && kinds.length > 0 || provenance) {
      let sql = "SELECT * FROM edges WHERE source = ?";
      const params = [sourceId];
      if (kinds && kinds.length > 0) {
        sql += ` AND kind IN (${kinds.map(() => "?").join(",")})`;
        params.push(...kinds);
      }
      if (provenance) {
        sql += " AND provenance = ?";
        params.push(provenance);
      }
      const rows2 = this.db.prepare(sql).all(...params);
      return rows2.map(rowToEdge);
    }
    if (!this.stmts.getEdgesBySource) {
      this.stmts.getEdgesBySource = this.db.prepare("SELECT * FROM edges WHERE source = ?");
    }
    const rows = this.stmts.getEdgesBySource.all(sourceId);
    return rows.map(rowToEdge);
  }
  /**
   * Get incoming edges to a node
   */
  getIncomingEdges(targetId, kinds) {
    if (kinds && kinds.length > 0) {
      const sql = `SELECT * FROM edges WHERE target = ? AND kind IN (${kinds.map(() => "?").join(",")})`;
      const rows2 = this.db.prepare(sql).all(targetId, ...kinds);
      return rows2.map(rowToEdge);
    }
    if (!this.stmts.getEdgesByTarget) {
      this.stmts.getEdgesByTarget = this.db.prepare("SELECT * FROM edges WHERE target = ?");
    }
    const rows = this.stmts.getEdgesByTarget.all(targetId);
    return rows.map(rowToEdge);
  }
  /**
   * Find all edges where both source and target are in the given node set.
   * Useful for recovering inter-node connectivity after BFS.
   */
  findEdgesBetweenNodes(nodeIds, kinds) {
    if (nodeIds.length === 0) return [];
    const idsJson = JSON.stringify(nodeIds);
    let sql = `SELECT * FROM edges WHERE source IN (SELECT value FROM json_each(?)) AND target IN (SELECT value FROM json_each(?))`;
    const params = [idsJson, idsJson];
    if (kinds && kinds.length > 0) {
      sql += ` AND kind IN (${kinds.map(() => "?").join(",")})`;
      params.push(...kinds);
    }
    const rows = this.db.prepare(sql).all(...params);
    return rows.map(rowToEdge);
  }
  // ===========================================================================
  // File Operations
  // ===========================================================================
  /**
   * Insert or update a file record
   */
  upsertFile(file) {
    if (!this.stmts.upsertFile) {
      this.stmts.upsertFile = this.db.prepare(`
        INSERT INTO files (path, content_hash, language, size, modified_at, indexed_at, node_count, errors)
        VALUES (@path, @contentHash, @language, @size, @modifiedAt, @indexedAt, @nodeCount, @errors)
        ON CONFLICT(path) DO UPDATE SET
          content_hash = @contentHash,
          language = @language,
          size = @size,
          modified_at = @modifiedAt,
          indexed_at = @indexedAt,
          node_count = @nodeCount,
          errors = @errors
      `);
    }
    this.stmts.upsertFile.run({
      path: file.path,
      contentHash: file.contentHash,
      language: file.language,
      size: file.size,
      modifiedAt: file.modifiedAt,
      indexedAt: file.indexedAt,
      nodeCount: file.nodeCount,
      errors: file.errors ? JSON.stringify(file.errors) : null
    });
  }
  /**
   * Delete a file record and its nodes
   */
  deleteFile(filePath) {
    this.db.transaction(() => {
      this.deleteNodesByFile(filePath);
      if (!this.stmts.deleteFile) {
        this.stmts.deleteFile = this.db.prepare("DELETE FROM files WHERE path = ?");
      }
      this.stmts.deleteFile.run(filePath);
    })();
  }
  /**
   * Get a file record by path
   */
  getFileByPath(filePath) {
    if (!this.stmts.getFileByPath) {
      this.stmts.getFileByPath = this.db.prepare("SELECT * FROM files WHERE path = ?");
    }
    const row = this.stmts.getFileByPath.get(filePath);
    return row ? rowToFileRecord(row) : null;
  }
  /**
   * Get all tracked files
   */
  getAllFiles() {
    if (!this.stmts.getAllFiles) {
      this.stmts.getAllFiles = this.db.prepare("SELECT * FROM files ORDER BY path");
    }
    const rows = this.stmts.getAllFiles.all();
    return rows.map(rowToFileRecord);
  }
  /**
   * Get files that need re-indexing (hash changed)
   */
  getStaleFiles(currentHashes) {
    const files = this.getAllFiles();
    return files.filter((f) => {
      const currentHash = currentHashes.get(f.path);
      return currentHash && currentHash !== f.contentHash;
    });
  }
  // ===========================================================================
  // Unresolved References
  // ===========================================================================
  /**
   * Insert an unresolved reference
   */
  insertUnresolvedRef(ref) {
    if (!this.stmts.insertUnresolved) {
      this.stmts.insertUnresolved = this.db.prepare(`
        INSERT INTO unresolved_refs (from_node_id, reference_name, reference_kind, line, col, candidates, file_path, language)
        VALUES (@fromNodeId, @referenceName, @referenceKind, @line, @col, @candidates, @filePath, @language)
      `);
    }
    this.stmts.insertUnresolved.run({
      fromNodeId: ref.fromNodeId,
      referenceName: ref.referenceName,
      referenceKind: ref.referenceKind,
      line: ref.line,
      col: ref.column,
      candidates: ref.candidates ? JSON.stringify(ref.candidates) : null,
      filePath: ref.filePath ?? "",
      language: ref.language ?? "unknown"
    });
  }
  /**
   * Insert multiple unresolved references in a transaction
   */
  insertUnresolvedRefsBatch(refs) {
    if (refs.length === 0) return;
    const insert = this.db.transaction(() => {
      for (const ref of refs) {
        this.insertUnresolvedRef(ref);
      }
    });
    insert();
  }
  /**
   * Delete unresolved references from a node
   */
  deleteUnresolvedByNode(nodeId) {
    if (!this.stmts.deleteUnresolvedByNode) {
      this.stmts.deleteUnresolvedByNode = this.db.prepare(
        "DELETE FROM unresolved_refs WHERE from_node_id = ?"
      );
    }
    this.stmts.deleteUnresolvedByNode.run(nodeId);
  }
  /**
   * Get unresolved references by name (for resolution)
   */
  getUnresolvedByName(name) {
    if (!this.stmts.getUnresolvedByName) {
      this.stmts.getUnresolvedByName = this.db.prepare(
        "SELECT * FROM unresolved_refs WHERE reference_name = ?"
      );
    }
    const rows = this.stmts.getUnresolvedByName.all(name);
    return rows.map((row) => ({
      fromNodeId: row.from_node_id,
      referenceName: row.reference_name,
      referenceKind: row.reference_kind,
      line: row.line,
      column: row.col,
      candidates: row.candidates ? safeJsonParse(row.candidates, void 0) : void 0,
      filePath: row.file_path,
      language: row.language
    }));
  }
  /**
   * Get all unresolved references
   */
  getUnresolvedReferences() {
    const rows = this.db.prepare("SELECT * FROM unresolved_refs").all();
    return rows.map((row) => ({
      fromNodeId: row.from_node_id,
      referenceName: row.reference_name,
      referenceKind: row.reference_kind,
      line: row.line,
      column: row.col,
      candidates: row.candidates ? safeJsonParse(row.candidates, void 0) : void 0,
      filePath: row.file_path,
      language: row.language
    }));
  }
  /**
   * Get the count of unresolved references without loading them into memory
   */
  getUnresolvedReferencesCount() {
    if (!this.stmts.getUnresolvedCount) {
      this.stmts.getUnresolvedCount = this.db.prepare(
        "SELECT COUNT(*) as count FROM unresolved_refs"
      );
    }
    const row = this.stmts.getUnresolvedCount.get();
    return row.count;
  }
  /**
   * Get a batch of unresolved references using LIMIT/OFFSET pagination.
   * Used to process references in bounded memory chunks.
   */
  getUnresolvedReferencesBatch(offset, limit) {
    if (!this.stmts.getUnresolvedBatch) {
      this.stmts.getUnresolvedBatch = this.db.prepare(
        "SELECT * FROM unresolved_refs LIMIT ? OFFSET ?"
      );
    }
    const rows = this.stmts.getUnresolvedBatch.all(limit, offset);
    return rows.map((row) => ({
      fromNodeId: row.from_node_id,
      referenceName: row.reference_name,
      referenceKind: row.reference_kind,
      line: row.line,
      column: row.col,
      candidates: row.candidates ? safeJsonParse(row.candidates, void 0) : void 0,
      filePath: row.file_path,
      language: row.language
    }));
  }
  /**
   * Get all tracked file paths (lightweight — no full FileRecord objects)
   */
  getAllFilePaths() {
    if (!this.stmts.getAllFilePaths) {
      this.stmts.getAllFilePaths = this.db.prepare("SELECT path FROM files ORDER BY path");
    }
    const rows = this.stmts.getAllFilePaths.all();
    return rows.map((r) => r.path);
  }
  /**
   * Get all distinct node names (lightweight — just name strings for pre-filtering)
   */
  getAllNodeNames() {
    if (!this.stmts.getAllNodeNames) {
      this.stmts.getAllNodeNames = this.db.prepare("SELECT DISTINCT name FROM nodes");
    }
    const rows = this.stmts.getAllNodeNames.all();
    return rows.map((r) => r.name);
  }
  /**
   * Get unresolved references scoped to specific file paths.
   * Uses the idx_unresolved_file_path index for efficient lookup.
   */
  getUnresolvedReferencesByFiles(filePaths) {
    if (filePaths.length === 0) return [];
    const placeholders = filePaths.map(() => "?").join(",");
    const rows = this.db.prepare(`SELECT * FROM unresolved_refs WHERE file_path IN (${placeholders})`).all(...filePaths);
    return rows.map((row) => ({
      fromNodeId: row.from_node_id,
      referenceName: row.reference_name,
      referenceKind: row.reference_kind,
      line: row.line,
      column: row.col,
      candidates: row.candidates ? safeJsonParse(row.candidates, void 0) : void 0,
      filePath: row.file_path,
      language: row.language
    }));
  }
  /**
   * Delete all unresolved references (after resolution)
   */
  clearUnresolvedReferences() {
    this.db.exec("DELETE FROM unresolved_refs");
  }
  /**
   * Delete resolved references by their IDs
   */
  deleteResolvedReferences(fromNodeIds) {
    if (fromNodeIds.length === 0) return;
    const placeholders = fromNodeIds.map(() => "?").join(",");
    this.db.prepare(`DELETE FROM unresolved_refs WHERE from_node_id IN (${placeholders})`).run(...fromNodeIds);
  }
  /**
   * Delete specific resolved references by (fromNodeId, referenceName, referenceKind) tuples.
   * More precise than deleteResolvedReferences — only removes refs that were actually resolved.
   */
  deleteSpecificResolvedReferences(refs) {
    if (refs.length === 0) return;
    const stmt = this.db.prepare(
      "DELETE FROM unresolved_refs WHERE from_node_id = ? AND reference_name = ? AND reference_kind = ?"
    );
    const deleteMany = this.db.transaction((items) => {
      for (const ref of items) {
        stmt.run(ref.fromNodeId, ref.referenceName, ref.referenceKind);
      }
    });
    deleteMany(refs);
  }
  // ===========================================================================
  // Statistics
  // ===========================================================================
  /**
   * Get graph statistics
   */
  getStats() {
    const counts = this.db.prepare(`
      SELECT
        (SELECT COUNT(*) FROM nodes) AS node_count,
        (SELECT COUNT(*) FROM edges) AS edge_count,
        (SELECT COUNT(*) FROM files) AS file_count
    `).get();
    const nodesByKind = {};
    const nodeKindRows = this.db.prepare("SELECT kind, COUNT(*) as count FROM nodes GROUP BY kind").all();
    for (const row of nodeKindRows) {
      nodesByKind[row.kind] = row.count;
    }
    const edgesByKind = {};
    const edgeKindRows = this.db.prepare("SELECT kind, COUNT(*) as count FROM edges GROUP BY kind").all();
    for (const row of edgeKindRows) {
      edgesByKind[row.kind] = row.count;
    }
    const filesByLanguage = {};
    const languageRows = this.db.prepare("SELECT language, COUNT(*) as count FROM files GROUP BY language").all();
    for (const row of languageRows) {
      filesByLanguage[row.language] = row.count;
    }
    return {
      nodeCount: counts.node_count,
      edgeCount: counts.edge_count,
      fileCount: counts.file_count,
      nodesByKind,
      edgesByKind,
      filesByLanguage,
      dbSizeBytes: 0,
      // Set by caller using DatabaseConnection.getSize()
      lastUpdated: Date.now()
    };
  }
  // ===========================================================================
  // Project Metadata
  // ===========================================================================
  /**
   * Get a metadata value by key
   */
  getMetadata(key) {
    const row = this.db.prepare("SELECT value FROM project_metadata WHERE key = ?").get(key);
    return row?.value ?? null;
  }
  /**
   * Set a metadata key-value pair (upsert)
   */
  setMetadata(key, value) {
    this.db.prepare(
      "INSERT INTO project_metadata (key, value, updated_at) VALUES (?, ?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at"
    ).run(key, value, Date.now());
  }
  /**
   * Get all metadata as a key-value record
   */
  getAllMetadata() {
    const rows = this.db.prepare("SELECT key, value FROM project_metadata").all();
    const result = {};
    for (const row of rows) {
      result[row.key] = row.value;
    }
    return result;
  }
  /**
   * Clear all data from the database
   */
  clear() {
    this.nodeCache.clear();
    this.db.transaction(() => {
      this.db.exec("DELETE FROM unresolved_refs");
      this.db.exec("DELETE FROM edges");
      this.db.exec("DELETE FROM nodes");
      this.db.exec("DELETE FROM files");
    })();
  }
};

// src/config.ts
var fs3 = __toESM(require("fs"));
var path4 = __toESM(require("path"));
var CONFIG_FILENAME = "config.json";
function getConfigPath(projectRoot) {
  return path4.join(projectRoot, ".codegraph", CONFIG_FILENAME);
}
function isSafeRegex(pattern) {
  if (pattern.length > 500) return false;
  if (/([+*}])\s*[+*{]/.test(pattern)) return false;
  if (/\([^)]*[+*][^)]*\)[+*{]/.test(pattern)) return false;
  try {
    new RegExp(pattern);
    return true;
  } catch {
    return false;
  }
}
function validateConfig(config) {
  if (typeof config !== "object" || config === null) {
    return false;
  }
  const c = config;
  if (typeof c.version !== "number") return false;
  if (typeof c.rootDir !== "string") return false;
  if (!Array.isArray(c.include)) return false;
  if (!Array.isArray(c.exclude)) return false;
  if (!Array.isArray(c.languages)) return false;
  if (!Array.isArray(c.frameworks)) return false;
  if (typeof c.maxFileSize !== "number") return false;
  if (typeof c.extractDocstrings !== "boolean") return false;
  if (typeof c.trackCallSites !== "boolean") return false;
  if (!c.include.every((p) => typeof p === "string")) return false;
  if (!c.exclude.every((p) => typeof p === "string")) return false;
  const validLanguages = [
    "typescript",
    "javascript",
    "python",
    "go",
    "rust",
    "java",
    "svelte",
    "unknown"
  ];
  if (!c.languages.every((l) => validLanguages.includes(l))) return false;
  for (const fw of c.frameworks) {
    if (typeof fw !== "object" || fw === null) return false;
    const framework = fw;
    if (typeof framework.name !== "string") return false;
  }
  if (c.customPatterns !== void 0) {
    if (!Array.isArray(c.customPatterns)) return false;
    for (const pattern of c.customPatterns) {
      if (typeof pattern !== "object" || pattern === null) return false;
      const p = pattern;
      if (typeof p.name !== "string") return false;
      if (typeof p.pattern !== "string") return false;
      if (typeof p.kind !== "string") return false;
      if (!isSafeRegex(p.pattern)) return false;
    }
  }
  return true;
}
function mergeConfig(defaults, overrides) {
  return {
    version: overrides.version ?? defaults.version,
    rootDir: overrides.rootDir ?? defaults.rootDir,
    include: overrides.include ?? defaults.include,
    exclude: overrides.exclude ?? defaults.exclude,
    languages: overrides.languages ?? defaults.languages,
    frameworks: overrides.frameworks ?? defaults.frameworks,
    maxFileSize: overrides.maxFileSize ?? defaults.maxFileSize,
    extractDocstrings: overrides.extractDocstrings ?? defaults.extractDocstrings,
    trackCallSites: overrides.trackCallSites ?? defaults.trackCallSites,
    customPatterns: overrides.customPatterns ?? defaults.customPatterns
  };
}
function loadConfig(projectRoot) {
  const configPath = getConfigPath(projectRoot);
  if (!fs3.existsSync(configPath)) {
    return {
      ...DEFAULT_CONFIG,
      rootDir: projectRoot
    };
  }
  try {
    const content = fs3.readFileSync(configPath, "utf-8");
    const parsed = JSON.parse(content);
    const merged = mergeConfig(DEFAULT_CONFIG, parsed);
    merged.rootDir = projectRoot;
    if (!validateConfig(merged)) {
      throw new Error("Invalid configuration format");
    }
    return merged;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`Invalid JSON in config file: ${configPath}`);
    }
    throw error;
  }
}
function saveConfig(projectRoot, config) {
  const configPath = getConfigPath(projectRoot);
  const dir = path4.dirname(configPath);
  if (!fs3.existsSync(dir)) {
    fs3.mkdirSync(dir, { recursive: true });
  }
  const toSave = { ...config };
  delete toSave.rootDir;
  const content = JSON.stringify(toSave, null, 2);
  const tmpPath = configPath + ".tmp";
  fs3.writeFileSync(tmpPath, content, "utf-8");
  fs3.renameSync(tmpPath, configPath);
}
function createDefaultConfig(projectRoot) {
  return {
    ...DEFAULT_CONFIG,
    rootDir: projectRoot
  };
}

// src/directory.ts
var fs4 = __toESM(require("fs"));
var path5 = __toESM(require("path"));
var CODEGRAPH_DIR = ".codegraph";
function getCodeGraphDir(projectRoot) {
  return path5.join(projectRoot, CODEGRAPH_DIR);
}
function isInitialized(projectRoot) {
  const codegraphDir = getCodeGraphDir(projectRoot);
  if (!fs4.existsSync(codegraphDir) || !fs4.statSync(codegraphDir).isDirectory()) {
    return false;
  }
  const dbPath = path5.join(codegraphDir, "codegraph.db");
  return fs4.existsSync(dbPath);
}
function findNearestCodeGraphRoot(startPath) {
  let current = path5.resolve(startPath);
  const root = path5.parse(current).root;
  while (current !== root) {
    if (isInitialized(current)) {
      return current;
    }
    const parent = path5.dirname(current);
    if (parent === current) break;
    current = parent;
  }
  if (isInitialized(current)) {
    return current;
  }
  return null;
}
function createDirectory(projectRoot) {
  const codegraphDir = getCodeGraphDir(projectRoot);
  const dbPath = path5.join(codegraphDir, "codegraph.db");
  if (fs4.existsSync(dbPath)) {
    throw new Error(`CodeGraph already initialized in ${projectRoot}`);
  }
  fs4.mkdirSync(codegraphDir, { recursive: true });
  const gitignorePath = path5.join(codegraphDir, ".gitignore");
  if (!fs4.existsSync(gitignorePath)) {
    const gitignoreContent = `# CodeGraph data files
# These are local to each machine and should not be committed

# Database
*.db
*.db-wal
*.db-shm

# Cache
cache/

# Logs
*.log

# Hook markers
.dirty
`;
    fs4.writeFileSync(gitignorePath, gitignoreContent, "utf-8");
  }
}
function removeDirectory(projectRoot) {
  const codegraphDir = getCodeGraphDir(projectRoot);
  if (!fs4.existsSync(codegraphDir)) {
    return;
  }
  const lstat = fs4.lstatSync(codegraphDir);
  if (lstat.isSymbolicLink()) {
    fs4.unlinkSync(codegraphDir);
    return;
  }
  if (!lstat.isDirectory()) {
    fs4.unlinkSync(codegraphDir);
    return;
  }
  fs4.rmSync(codegraphDir, { recursive: true, force: true });
}
function validateDirectory(projectRoot) {
  const errors = [];
  const codegraphDir = getCodeGraphDir(projectRoot);
  if (!fs4.existsSync(codegraphDir)) {
    errors.push("CodeGraph directory does not exist");
    return { valid: false, errors };
  }
  if (!fs4.statSync(codegraphDir).isDirectory()) {
    errors.push(".codegraph exists but is not a directory");
    return { valid: false, errors };
  }
  const gitignorePath = path5.join(codegraphDir, ".gitignore");
  if (!fs4.existsSync(gitignorePath)) {
    try {
      const gitignoreContent = `# CodeGraph data files
# These are local to each machine and should not be committed

# Database
*.db
*.db-wal
*.db-shm

# Cache
cache/

# Logs
*.log

# Hook markers
.dirty
`;
      fs4.writeFileSync(gitignorePath, gitignoreContent, "utf-8");
    } catch {
      errors.push(".gitignore missing in .codegraph directory and could not be created");
    }
  }
  return {
    valid: errors.length === 0,
    errors
  };
}

// src/extraction/index.ts
var fs5 = __toESM(require("fs"));
var fsp = __toESM(require("fs/promises"));
var path8 = __toESM(require("path"));
var crypto2 = __toESM(require("crypto"));
var import_child_process = require("child_process");

// src/extraction/tree-sitter.ts
var path7 = __toESM(require("path"));

// src/extraction/grammars.ts
var path6 = __toESM(require("path"));
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
        const wasmPath = lang === "pascal" || lang === "scala" ? path6.join(__dirname, "wasm", wasmFile) : require.resolve(`tree-sitter-wasms/out/${wasmFile}`);
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
async function loadAllGrammars() {
  const allLanguages = Object.keys(WASM_GRAMMAR_FILES);
  await loadGrammarsForLanguages(allLanguages);
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
function isGrammarLoaded(language) {
  if (language === "svelte" || language === "vue" || language === "liquid") return true;
  return languageCache.has(language);
}
function getSupportedLanguages() {
  return [...Object.keys(WASM_GRAMMAR_FILES), "svelte", "vue", "liquid"];
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
    ...localPaths.map((path16) => ({ path: path16, fromWorkspace: false })),
    ...workspacePaths.map((path16) => ({ path: path16, fromWorkspace: true }))
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
function detectFrameworks(context) {
  return FRAMEWORK_RESOLVERS.filter((resolver) => {
    try {
      return resolver.detect(context);
    } catch {
      return false;
    }
  });
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
        name: path7.basename(this.filePath),
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
      const moduleName = name || path7.basename(this.filePath).replace(/\.[^.]+$/, "");
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
  const fileExtension = path7.extname(filePath).toLowerCase();
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

// src/errors.ts
var CodeGraphError = class extends Error {
  /** Error code for categorization (e.g., 'FILE_ERROR', 'PARSE_ERROR') */
  code;
  /** Additional context about the error */
  context;
  constructor(message, code, context) {
    super(message);
    this.name = "CodeGraphError";
    this.code = code;
    this.context = context;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};
var FileError = class extends CodeGraphError {
  filePath;
  constructor(message, filePath, cause) {
    super(message, "FILE_ERROR", { filePath, cause: cause?.message });
    this.name = "FileError";
    this.filePath = filePath;
    if (cause) {
      this.cause = cause;
    }
  }
};
var ParseError = class extends CodeGraphError {
  filePath;
  line;
  column;
  constructor(message, filePath, options) {
    super(message, "PARSE_ERROR", {
      filePath,
      line: options?.line,
      column: options?.column,
      cause: options?.cause?.message
    });
    this.name = "ParseError";
    this.filePath = filePath;
    this.line = options?.line;
    this.column = options?.column;
    if (options?.cause) {
      this.cause = options.cause;
    }
  }
};
var DatabaseError = class extends CodeGraphError {
  operation;
  constructor(message, operation, cause) {
    super(message, "DATABASE_ERROR", { operation, cause: cause?.message });
    this.name = "DatabaseError";
    this.operation = operation;
    if (cause) {
      this.cause = cause;
    }
  }
};
var SearchError = class extends CodeGraphError {
  query;
  constructor(message, query, cause) {
    super(message, "SEARCH_ERROR", { query, cause: cause?.message });
    this.name = "SearchError";
    this.query = query;
    if (cause) {
      this.cause = cause;
    }
  }
};
var VectorError = class extends CodeGraphError {
  constructor(message, operation, cause) {
    super(message, "VECTOR_ERROR", { operation, cause: cause?.message });
    this.name = "VectorError";
    if (cause) {
      this.cause = cause;
    }
  }
};
var ConfigError = class extends CodeGraphError {
  constructor(message, details) {
    super(message, "CONFIG_ERROR", details);
    this.name = "ConfigError";
  }
};
var defaultLogger = {
  debug(message, context) {
    if (process.env.CODEGRAPH_DEBUG) {
      console.debug(`[CodeGraph] ${message}`, context ?? "");
    }
  },
  warn(message, context) {
    console.warn(`[CodeGraph] ${message}`, context ?? "");
  },
  error(message, context) {
    console.error(`[CodeGraph] ${message}`, context ?? "");
  }
};
var silentLogger = {
  debug() {
  },
  warn() {
  },
  error() {
  }
};
var currentLogger = defaultLogger;
function setLogger(logger) {
  currentLogger = logger;
}
function getLogger() {
  return currentLogger;
}
function logDebug(message, context) {
  currentLogger.debug(message, context);
}
function logWarn(message, context) {
  currentLogger.warn(message, context);
}

// src/extraction/index.ts
var import_picomatch2 = __toESM(require_picomatch2());
var FILE_IO_BATCH_SIZE = 10;
var PARSE_TIMEOUT_MS = 1e4;
var WORKER_RECYCLE_INTERVAL = 150;
function hashContent(content) {
  return crypto2.createHash("sha256").update(content).digest("hex");
}
function matchesGlob(filePath, pattern) {
  filePath = normalizePath(filePath);
  return import_picomatch2.default.isMatch(filePath, pattern, { dot: true });
}
function shouldIncludeFile(filePath, config) {
  for (const pattern of config.exclude) {
    if (matchesGlob(filePath, pattern)) {
      return false;
    }
  }
  for (const pattern of config.include) {
    if (matchesGlob(filePath, pattern)) {
      return true;
    }
  }
  return false;
}
function getGitVisibleFiles(rootDir) {
  try {
    const gitRoot = (0, import_child_process.execFileSync)(
      "git",
      ["rev-parse", "--show-toplevel"],
      { cwd: rootDir, encoding: "utf-8", timeout: 5e3, stdio: ["pipe", "pipe", "pipe"] }
    ).trim();
    if (path8.resolve(gitRoot) !== path8.resolve(rootDir)) {
      try {
        (0, import_child_process.execFileSync)(
          "git",
          ["check-ignore", "-q", path8.resolve(rootDir)],
          { cwd: rootDir, encoding: "utf-8", timeout: 5e3, stdio: ["pipe", "pipe", "pipe"] }
        );
        return null;
      } catch {
      }
    }
    const files = /* @__PURE__ */ new Set();
    const gitOpts = { cwd: rootDir, encoding: "utf-8", timeout: 3e4, maxBuffer: 50 * 1024 * 1024, stdio: ["pipe", "pipe", "pipe"] };
    const tracked = (0, import_child_process.execFileSync)("git", ["ls-files", "-c", "--recurse-submodules"], gitOpts);
    for (const line of tracked.split("\n")) {
      const trimmed = line.trim();
      if (trimmed) {
        files.add(normalizePath(trimmed));
      }
    }
    const untracked = (0, import_child_process.execFileSync)("git", ["ls-files", "-o", "--exclude-standard"], gitOpts);
    for (const line of untracked.split("\n")) {
      const trimmed = line.trim();
      if (trimmed) {
        files.add(normalizePath(trimmed));
      }
    }
    return files;
  } catch {
    return null;
  }
}
function getGitChangedFiles(rootDir, config) {
  try {
    const output = (0, import_child_process.execFileSync)(
      "git",
      ["status", "--porcelain", "--no-renames"],
      { cwd: rootDir, encoding: "utf-8", timeout: 1e4, stdio: ["pipe", "pipe", "pipe"] }
    );
    const modified = [];
    const added = [];
    const deleted = [];
    for (const line of output.split("\n")) {
      if (line.length < 4) continue;
      const statusCode = line.substring(0, 2);
      const filePath = normalizePath(line.substring(3));
      if (!shouldIncludeFile(filePath, config)) continue;
      if (statusCode === "??") {
        added.push(filePath);
      } else if (statusCode.includes("D")) {
        deleted.push(filePath);
      } else {
        modified.push(filePath);
      }
    }
    return { modified, added, deleted };
  } catch {
    return null;
  }
}
var CODEGRAPH_IGNORE_MARKER = ".codegraphignore";
function scanDirectory(rootDir, config, onProgress) {
  const gitFiles = getGitVisibleFiles(rootDir);
  if (gitFiles) {
    const files = [];
    let count = 0;
    for (const filePath of gitFiles) {
      if (shouldIncludeFile(filePath, config)) {
        files.push(filePath);
        count++;
        onProgress?.(count, filePath);
      }
    }
    return files;
  }
  return scanDirectoryWalk(rootDir, config, onProgress);
}
async function scanDirectoryAsync(rootDir, config, onProgress) {
  const gitFiles = getGitVisibleFiles(rootDir);
  if (gitFiles) {
    const files = [];
    let count = 0;
    for (const filePath of gitFiles) {
      if (shouldIncludeFile(filePath, config)) {
        files.push(filePath);
        count++;
        onProgress?.(count, filePath);
        if (count % 100 === 0) {
          await new Promise((r) => setImmediate(r));
        }
      }
    }
    return files;
  }
  return scanDirectoryWalk(rootDir, config, onProgress);
}
function scanDirectoryWalk(rootDir, config, onProgress) {
  const files = [];
  let count = 0;
  const visitedDirs = /* @__PURE__ */ new Set();
  function walk(dir) {
    let realDir;
    try {
      realDir = fs5.realpathSync(dir);
    } catch {
      logDebug("Skipping unresolvable directory", { dir });
      return;
    }
    if (visitedDirs.has(realDir)) {
      logDebug("Skipping already-visited directory (symlink cycle)", { dir, realDir });
      return;
    }
    visitedDirs.add(realDir);
    const ignoreMarker = path8.join(dir, CODEGRAPH_IGNORE_MARKER);
    if (fs5.existsSync(ignoreMarker)) {
      logDebug("Skipping directory due to .codegraphignore marker", { dir });
      return;
    }
    let entries;
    try {
      entries = fs5.readdirSync(dir, { withFileTypes: true });
    } catch (error) {
      logDebug("Skipping unreadable directory", { dir, error: String(error) });
      return;
    }
    for (const entry of entries) {
      const fullPath = path8.join(dir, entry.name);
      const relativePath = normalizePath(path8.relative(rootDir, fullPath));
      if (entry.isSymbolicLink()) {
        try {
          const realTarget = fs5.realpathSync(fullPath);
          const stat2 = fs5.statSync(realTarget);
          if (stat2.isDirectory()) {
            const dirPattern = relativePath + "/";
            let excluded = false;
            for (const pattern of config.exclude) {
              if (matchesGlob(dirPattern, pattern) || matchesGlob(relativePath, pattern)) {
                excluded = true;
                break;
              }
            }
            if (!excluded) {
              walk(fullPath);
            }
          } else if (stat2.isFile()) {
            if (shouldIncludeFile(relativePath, config)) {
              files.push(relativePath);
              count++;
              onProgress?.(count, relativePath);
            }
          }
        } catch {
          logDebug("Skipping broken symlink", { path: fullPath });
        }
        continue;
      }
      if (entry.isDirectory()) {
        const dirPattern = relativePath + "/";
        let excluded = false;
        for (const pattern of config.exclude) {
          if (matchesGlob(dirPattern, pattern) || matchesGlob(relativePath, pattern)) {
            excluded = true;
            break;
          }
        }
        if (!excluded) {
          walk(fullPath);
        }
      } else if (entry.isFile()) {
        if (shouldIncludeFile(relativePath, config)) {
          files.push(relativePath);
          count++;
          onProgress?.(count, relativePath);
        }
      }
    }
  }
  walk(rootDir);
  return files;
}
var ExtractionOrchestrator = class {
  rootDir;
  config;
  queries;
  /**
   * Names of frameworks detected for this project, populated by indexAll().
   * Passed to extractFromSource so framework-specific extractors (route nodes,
   * middleware, etc.) run after the tree-sitter pass. Cleared if detection
   * hasn't run yet so single-file re-index paths can detect on the spot.
   */
  detectedFrameworkNames = null;
  constructor(rootDir, config, queries) {
    this.rootDir = rootDir;
    this.config = config;
    this.queries = queries;
  }
  /**
   * Build a filesystem-backed ResolutionContext sufficient for framework
   * detection. Graph-query methods (getNodesByName etc.) return empty because
   * the DB hasn't been populated yet, but detect() only uses readFile,
   * fileExists, and getAllFiles, so that's fine.
   */
  buildDetectionContext(files) {
    const rootDir = this.rootDir;
    return {
      getNodesInFile: () => [],
      getNodesByName: () => [],
      getNodesByQualifiedName: () => [],
      getNodesByKind: () => [],
      getNodesByLowerName: () => [],
      getImportMappings: () => [],
      getAllFiles: () => files,
      getProjectRoot: () => rootDir,
      fileExists: (relativePath) => {
        const full = validatePathWithinRoot(rootDir, relativePath);
        if (!full) return false;
        try {
          return fs5.existsSync(full);
        } catch {
          return false;
        }
      },
      readFile: (relativePath) => {
        const full = validatePathWithinRoot(rootDir, relativePath);
        if (!full) return null;
        try {
          return fs5.readFileSync(full, "utf-8");
        } catch {
          return null;
        }
      }
    };
  }
  /**
   * Detect frameworks on demand using the current scanned files (or a fresh
   * scan if none are provided). Cached on the orchestrator so repeat calls
   * inside a single run don't re-scan.
   */
  ensureDetectedFrameworks(files) {
    if (this.detectedFrameworkNames !== null) return this.detectedFrameworkNames;
    const fileList = files ?? scanDirectory(this.rootDir, this.config);
    const context = this.buildDetectionContext(fileList);
    this.detectedFrameworkNames = detectFrameworks(context).map((r) => r.name);
    return this.detectedFrameworkNames;
  }
  /**
   * Index all files in the project
   */
  async indexAll(onProgress, signal, verbose) {
    await initGrammars();
    const startTime = Date.now();
    const errors = [];
    let filesIndexed = 0;
    let filesSkipped = 0;
    let filesErrored = 0;
    let totalNodes = 0;
    let totalEdges = 0;
    const log = verbose ? (msg) => {
      console.log(`[worker] ${msg}`);
    } : (_msg) => {
    };
    onProgress?.({
      phase: "scanning",
      current: 0,
      total: 0
    });
    const files = await scanDirectoryAsync(this.rootDir, this.config, (current, file) => {
      onProgress?.({
        phase: "scanning",
        current,
        total: 0,
        currentFile: file
      });
    });
    this.detectedFrameworkNames = null;
    const frameworkNames = this.ensureDetectedFrameworks(files);
    if (signal?.aborted) {
      return {
        success: false,
        filesIndexed: 0,
        filesSkipped: 0,
        filesErrored: 0,
        nodesCreated: 0,
        edgesCreated: 0,
        errors: [{ message: "Aborted", severity: "error" }],
        durationMs: Date.now() - startTime
      };
    }
    const total = files.length;
    let processed = 0;
    onProgress?.({
      phase: "parsing",
      current: 0,
      total
    });
    await new Promise((resolve9) => setImmediate(resolve9));
    const neededLanguages = [...new Set(files.map((f) => detectLanguage(f)))];
    if (neededLanguages.includes("c") && !neededLanguages.includes("cpp")) {
      neededLanguages.push("cpp");
    }
    const parseWorkerPath = path8.join(__dirname, "parse-worker.js");
    const useForkedWorker = fs5.existsSync(parseWorkerPath);
    if (!useForkedWorker) {
      await loadGrammarsForLanguages(neededLanguages);
    }
    let parseWorker = null;
    let nextId = 0;
    let workerParseCount = 0;
    const pendingParses = /* @__PURE__ */ new Map();
    function rejectAllPending(reason) {
      for (const [id, pending] of pendingParses) {
        clearTimeout(pending.timer);
        pendingParses.delete(id);
        pending.reject(new Error(reason));
      }
    }
    function attachWorkerHandlers(w) {
      w.on("message", (msg) => {
        if (msg.type === "parse-result" && msg.id !== void 0) {
          const pending = pendingParses.get(msg.id);
          if (pending) {
            clearTimeout(pending.timer);
            pendingParses.delete(msg.id);
            pending.resolve(msg.result);
          }
          if (msg.shouldRecycle && w === parseWorker) {
            workerParseCount = WORKER_RECYCLE_INTERVAL;
          }
        }
      });
      w.on("error", (err) => {
        logWarn("Parse worker error", { error: err.message });
        rejectAllPending(`Worker error: ${err.message}`);
      });
      w.on("exit", (code) => {
        if (code !== 0 && pendingParses.size > 0) {
          logWarn("Parse worker exited unexpectedly", { code });
          rejectAllPending(`Worker exited with code ${code}`);
        }
        if (parseWorker === w) {
          parseWorker = null;
          workerParseCount = 0;
        }
      });
    }
    function ensureWorker() {
      if (parseWorker) return parseWorker;
      log("Spawning new parse worker...");
      parseWorker = (0, import_child_process.fork)(parseWorkerPath, [], {
        execArgv: ["--no-wasm-tier-up", "--max-old-space-size=4096"]
      });
      attachWorkerHandlers(parseWorker);
      return parseWorker;
    }
    if (useForkedWorker) {
      ensureWorker();
    }
    function recycleWorker() {
      if (!parseWorker) return;
      log(`Recycling worker after ${workerParseCount} parses (heap: ${Math.round(process.memoryUsage().rss / 1024 / 1024)}MB RSS)`);
      const w = parseWorker;
      parseWorker = null;
      workerParseCount = 0;
      try {
        w.kill();
      } catch {
      }
    }
    async function requestParse(filePath, content) {
      if (!useForkedWorker) {
        return extractFromSource(
          filePath,
          content,
          detectLanguage(filePath, content),
          frameworkNames
        );
      }
      if (workerParseCount >= WORKER_RECYCLE_INTERVAL) {
        recycleWorker();
      }
      const worker = ensureWorker();
      const id = nextId++;
      workerParseCount++;
      const timeoutMs = PARSE_TIMEOUT_MS + Math.floor(content.length / 1e5) * 1e4;
      return new Promise((resolve9, reject) => {
        const timer = setTimeout(() => {
          pendingParses.delete(id);
          log(`TIMEOUT: ${filePath} exceeded ${timeoutMs}ms \u2014 killing worker`);
          parseWorker = null;
          workerParseCount = 0;
          reject(new Error(`Parse timed out after ${timeoutMs}ms`));
          try {
            worker.kill();
          } catch {
          }
        }, timeoutMs);
        pendingParses.set(id, { resolve: resolve9, reject, timer });
        worker.send({ type: "parse", id, filePath, content, frameworkNames });
      });
    }
    for (let i = 0; i < files.length; i += FILE_IO_BATCH_SIZE) {
      if (signal?.aborted) {
        if (parseWorker) {
          const w = parseWorker;
          try {
            w.kill();
          } catch {
          }
        }
        return {
          success: false,
          filesIndexed,
          filesSkipped,
          filesErrored,
          nodesCreated: totalNodes,
          edgesCreated: totalEdges,
          errors: [{ message: "Aborted", severity: "error" }, ...errors],
          durationMs: Date.now() - startTime
        };
      }
      const batch = files.slice(i, i + FILE_IO_BATCH_SIZE);
      const fileContents = await Promise.all(
        batch.map(async (fp) => {
          try {
            const fullPath = validatePathWithinRoot(this.rootDir, fp);
            if (!fullPath) {
              logWarn("Path traversal blocked in batch reader", { filePath: fp });
              return { filePath: fp, content: null, stats: null, error: new Error("Path traversal blocked") };
            }
            const content = await fsp.readFile(fullPath, "utf-8");
            const stats = await fsp.stat(fullPath);
            return { filePath: fp, content, stats, error: null };
          } catch (err) {
            return { filePath: fp, content: null, stats: null, error: err };
          }
        })
      );
      for (const { filePath, content, stats, error } of fileContents) {
        if (signal?.aborted) {
          if (parseWorker) {
            const w = parseWorker;
            try {
              w.kill();
            } catch {
            }
          }
          return {
            success: false,
            filesIndexed,
            filesSkipped,
            filesErrored,
            nodesCreated: totalNodes,
            edgesCreated: totalEdges,
            errors: [{ message: "Aborted", severity: "error" }, ...errors],
            durationMs: Date.now() - startTime
          };
        }
        onProgress?.({
          phase: "parsing",
          current: processed,
          total,
          currentFile: filePath
        });
        if (error || content === null || stats === null) {
          processed++;
          filesErrored++;
          errors.push({
            message: `Failed to read file: ${error instanceof Error ? error.message : String(error)}`,
            filePath,
            severity: "error",
            code: "read_error"
          });
          continue;
        }
        if (stats.size > this.config.maxFileSize) {
          processed++;
          filesSkipped++;
          errors.push({
            message: `File exceeds max size (${stats.size} > ${this.config.maxFileSize})`,
            filePath,
            severity: "warning",
            code: "size_exceeded"
          });
          onProgress?.({ phase: "parsing", current: processed, total });
          continue;
        }
        let result;
        try {
          result = await requestParse(filePath, content);
        } catch (parseErr) {
          processed++;
          filesErrored++;
          errors.push({
            message: parseErr instanceof Error ? parseErr.message : String(parseErr),
            filePath,
            severity: "error",
            code: "parse_error"
          });
          continue;
        }
        processed++;
        if (result.nodes.length > 0 || result.errors.length === 0) {
          const language = detectLanguage(filePath, content);
          this.storeExtractionResult(filePath, content, language, stats, result);
        }
        if (result.errors.length > 0) {
          for (const err of result.errors) {
            if (!err.filePath) err.filePath = filePath;
          }
          errors.push(...result.errors);
        }
        if (result.nodes.length > 0) {
          filesIndexed++;
          totalNodes += result.nodes.length;
          totalEdges += result.edges.length;
        } else if (result.errors.some((e) => e.severity === "error")) {
          filesErrored++;
        } else {
          filesSkipped++;
        }
      }
    }
    onProgress?.({
      phase: "parsing",
      current: total,
      total
    });
    await new Promise((resolve9) => setImmediate(resolve9));
    const retryableErrors = errors.filter(
      (e) => e.code === "parse_error" && e.filePath && (e.message.includes("Worker exited") || e.message.includes("memory access out of bounds"))
    );
    if (retryableErrors.length > 0 && useForkedWorker) {
      log(`Retrying ${retryableErrors.length} files that failed due to WASM memory errors...`);
      const stillFailing = [];
      for (const errEntry of retryableErrors) {
        const filePath = errEntry.filePath;
        if (signal?.aborted) break;
        recycleWorker();
        let content;
        try {
          const fullPath = validatePathWithinRoot(this.rootDir, filePath);
          if (!fullPath) continue;
          content = await fsp.readFile(fullPath, "utf-8");
        } catch {
          continue;
        }
        let result;
        try {
          result = await requestParse(filePath, content);
        } catch {
          stillFailing.push(errEntry);
          continue;
        }
        if (result.nodes.length > 0 || result.errors.length === 0) {
          const language = detectLanguage(filePath, content);
          const stats = await fsp.stat(path8.join(this.rootDir, filePath));
          this.storeExtractionResult(filePath, content, language, stats, result);
          const idx = errors.indexOf(errEntry);
          if (idx >= 0) errors.splice(idx, 1);
          filesErrored--;
          filesIndexed++;
          totalNodes += result.nodes.length;
          totalEdges += result.edges.length;
          log(`Retry OK: ${filePath} (${result.nodes.length} nodes)`);
        }
      }
      if (stillFailing.length > 0) {
        log(`${stillFailing.length} files still failing \u2014 retrying with comments stripped...`);
        for (const errEntry of stillFailing) {
          const filePath = errEntry.filePath;
          if (signal?.aborted) break;
          recycleWorker();
          let fullContent;
          try {
            const fullPath = validatePathWithinRoot(this.rootDir, filePath);
            if (!fullPath) continue;
            fullContent = await fsp.readFile(fullPath, "utf-8");
          } catch {
            continue;
          }
          const stripped = fullContent.split("\n").map((line) => /^\s*\/\//.test(line) ? "" : line).join("\n");
          let result;
          try {
            result = await requestParse(filePath, stripped);
          } catch {
            continue;
          }
          if (result.nodes.length > 0 || result.errors.length === 0) {
            const language = detectLanguage(filePath, fullContent);
            const stats = await fsp.stat(path8.join(this.rootDir, filePath));
            this.storeExtractionResult(filePath, fullContent, language, stats, result);
            const idx = errors.indexOf(errEntry);
            if (idx >= 0) errors.splice(idx, 1);
            filesErrored--;
            filesIndexed++;
            totalNodes += result.nodes.length;
            totalEdges += result.edges.length;
            log(`Retry (stripped) OK: ${filePath} (${result.nodes.length} nodes)`);
          }
        }
      }
    }
    rejectAllPending("Indexing complete");
    if (parseWorker) {
      const w = parseWorker;
      try {
        w.kill();
      } catch {
      }
    }
    return {
      success: filesIndexed > 0 || errors.filter((e) => e.severity === "error").length === 0,
      filesIndexed,
      filesSkipped,
      filesErrored,
      nodesCreated: totalNodes,
      edgesCreated: totalEdges,
      errors,
      durationMs: Date.now() - startTime
    };
  }
  /**
   * Index specific files
   */
  async indexFiles(filePaths) {
    const startTime = Date.now();
    const errors = [];
    let filesIndexed = 0;
    let filesSkipped = 0;
    let filesErrored = 0;
    let totalNodes = 0;
    let totalEdges = 0;
    for (const filePath of filePaths) {
      const result = await this.indexFile(filePath);
      if (result.errors.length > 0) {
        errors.push(...result.errors);
      }
      if (result.nodes.length > 0) {
        filesIndexed++;
        totalNodes += result.nodes.length;
        totalEdges += result.edges.length;
      } else if (result.errors.some((e) => e.severity === "error")) {
        filesErrored++;
      } else {
        filesSkipped++;
      }
    }
    return {
      success: filesIndexed > 0 || errors.filter((e) => e.severity === "error").length === 0,
      filesIndexed,
      filesSkipped,
      filesErrored,
      nodesCreated: totalNodes,
      edgesCreated: totalEdges,
      errors,
      durationMs: Date.now() - startTime
    };
  }
  /**
   * Index a single file
   */
  async indexFile(relativePath) {
    const fullPath = validatePathWithinRoot(this.rootDir, relativePath);
    if (!fullPath) {
      return {
        nodes: [],
        edges: [],
        unresolvedReferences: [],
        errors: [{ message: `Path traversal blocked: ${relativePath}`, filePath: relativePath, severity: "error", code: "path_traversal" }],
        durationMs: 0
      };
    }
    let content;
    let stats;
    try {
      stats = await fsp.stat(fullPath);
      content = await fsp.readFile(fullPath, "utf-8");
    } catch (error) {
      return {
        nodes: [],
        edges: [],
        unresolvedReferences: [],
        errors: [
          {
            message: `Failed to read file: ${error instanceof Error ? error.message : String(error)}`,
            filePath: relativePath,
            severity: "error",
            code: "read_error"
          }
        ],
        durationMs: 0
      };
    }
    return this.indexFileWithContent(relativePath, content, stats);
  }
  /**
   * Index a single file with pre-read content and stats.
   * Used by the parallel batch reader to avoid redundant file I/O.
   */
  async indexFileWithContent(relativePath, content, stats) {
    const fullPath = validatePathWithinRoot(this.rootDir, relativePath);
    if (!fullPath) {
      logWarn("Path traversal blocked in indexFileWithContent", { relativePath });
      return {
        nodes: [],
        edges: [],
        unresolvedReferences: [],
        errors: [{ message: "Path traversal blocked", filePath: relativePath, severity: "error", code: "path_traversal" }],
        durationMs: 0
      };
    }
    if (stats.size > this.config.maxFileSize) {
      return {
        nodes: [],
        edges: [],
        unresolvedReferences: [],
        errors: [
          {
            message: `File exceeds max size (${stats.size} > ${this.config.maxFileSize})`,
            filePath: relativePath,
            severity: "warning",
            code: "size_exceeded"
          }
        ],
        durationMs: 0
      };
    }
    const language = detectLanguage(relativePath, content);
    if (!isLanguageSupported(language)) {
      return {
        nodes: [],
        edges: [],
        unresolvedReferences: [],
        errors: [],
        durationMs: 0
      };
    }
    const frameworkNames = this.ensureDetectedFrameworks();
    const result = extractFromSource(relativePath, content, language, frameworkNames);
    if (result.nodes.length > 0 || result.errors.length === 0) {
      this.storeExtractionResult(relativePath, content, language, stats, result);
    }
    return result;
  }
  /**
   * Store extraction result in database
   */
  storeExtractionResult(filePath, content, language, stats, result) {
    const contentHash = hashContent(content);
    const existingFile = this.queries.getFileByPath(filePath);
    if (existingFile && existingFile.contentHash === contentHash) {
      return;
    }
    if (existingFile) {
      this.queries.deleteFile(filePath);
    }
    const validNodes = result.nodes.filter((n) => n.id && n.kind && n.name && n.filePath && n.language);
    if (validNodes.length > 0) {
      this.queries.insertNodes(validNodes);
    }
    if (result.edges.length > 0) {
      const insertedIds = new Set(validNodes.map((n) => n.id));
      const validEdges = result.edges.filter(
        (e) => insertedIds.has(e.source) && insertedIds.has(e.target)
      );
      if (validEdges.length > 0) {
        this.queries.insertEdges(validEdges);
      }
    }
    if (result.unresolvedReferences.length > 0) {
      const insertedIds = new Set(validNodes.map((n) => n.id));
      const refsWithContext = result.unresolvedReferences.filter((ref) => insertedIds.has(ref.fromNodeId)).map((ref) => ({
        ...ref,
        filePath: ref.filePath ?? filePath,
        language: ref.language ?? language
      }));
      if (refsWithContext.length > 0) {
        this.queries.insertUnresolvedRefsBatch(refsWithContext);
      }
    }
    const fileRecord = {
      path: filePath,
      contentHash,
      language,
      size: stats.size,
      modifiedAt: stats.mtimeMs,
      indexedAt: Date.now(),
      nodeCount: result.nodes.length,
      errors: result.errors.length > 0 ? result.errors : void 0
    };
    this.queries.upsertFile(fileRecord);
  }
  /**
   * Sync with current file state.
   * Uses git status as a fast path when available, falling back to full scan.
   */
  async sync(onProgress) {
    await initGrammars();
    const startTime = Date.now();
    let filesChecked = 0;
    let filesAdded = 0;
    let filesModified = 0;
    let filesRemoved = 0;
    let nodesUpdated = 0;
    const changedFilePaths = [];
    onProgress?.({
      phase: "scanning",
      current: 0,
      total: 0
    });
    const filesToIndex = [];
    const gitChanges = getGitChangedFiles(this.rootDir, this.config);
    if (gitChanges) {
      filesChecked = gitChanges.modified.length + gitChanges.added.length + gitChanges.deleted.length;
      for (const filePath of gitChanges.deleted) {
        const tracked = this.queries.getFileByPath(filePath);
        if (tracked) {
          this.queries.deleteFile(filePath);
          filesRemoved++;
        }
      }
      for (const filePath of gitChanges.modified) {
        const fullPath = path8.join(this.rootDir, filePath);
        let content;
        try {
          content = fs5.readFileSync(fullPath, "utf-8");
        } catch (error) {
          logDebug("Skipping unreadable file during sync", { filePath, error: String(error) });
          continue;
        }
        const contentHash = hashContent(content);
        const tracked = this.queries.getFileByPath(filePath);
        if (!tracked) {
          filesToIndex.push(filePath);
          changedFilePaths.push(filePath);
          filesAdded++;
        } else if (tracked.contentHash !== contentHash) {
          filesToIndex.push(filePath);
          changedFilePaths.push(filePath);
          filesModified++;
        }
      }
      for (const filePath of gitChanges.added) {
        filesToIndex.push(filePath);
        changedFilePaths.push(filePath);
        filesAdded++;
      }
    } else {
      const currentFiles = new Set(scanDirectory(this.rootDir, this.config));
      filesChecked = currentFiles.size;
      const trackedFiles = this.queries.getAllFiles();
      const trackedMap = /* @__PURE__ */ new Map();
      for (const f of trackedFiles) {
        trackedMap.set(f.path, f);
      }
      for (const tracked of trackedFiles) {
        if (!currentFiles.has(tracked.path)) {
          this.queries.deleteFile(tracked.path);
          filesRemoved++;
        }
      }
      for (const filePath of currentFiles) {
        const fullPath = path8.join(this.rootDir, filePath);
        let content;
        try {
          content = fs5.readFileSync(fullPath, "utf-8");
        } catch (error) {
          logDebug("Skipping unreadable file during sync", { filePath, error: String(error) });
          continue;
        }
        const contentHash = hashContent(content);
        const tracked = trackedMap.get(filePath);
        if (!tracked) {
          filesToIndex.push(filePath);
          changedFilePaths.push(filePath);
          filesAdded++;
        } else if (tracked.contentHash !== contentHash) {
          filesToIndex.push(filePath);
          changedFilePaths.push(filePath);
          filesModified++;
        }
      }
    }
    if (filesToIndex.length > 0) {
      const neededLanguages = [...new Set(filesToIndex.map((f) => detectLanguage(f)))];
      if (neededLanguages.includes("c") && !neededLanguages.includes("cpp")) {
        neededLanguages.push("cpp");
      }
      await loadGrammarsForLanguages(neededLanguages);
    }
    const total = filesToIndex.length;
    for (let i = 0; i < filesToIndex.length; i++) {
      const filePath = filesToIndex[i];
      onProgress?.({
        phase: "parsing",
        current: i + 1,
        total,
        currentFile: filePath
      });
      const result = await this.indexFile(filePath);
      nodesUpdated += result.nodes.length;
    }
    return {
      filesChecked,
      filesAdded,
      filesModified,
      filesRemoved,
      nodesUpdated,
      durationMs: Date.now() - startTime,
      changedFilePaths: changedFilePaths.length > 0 ? changedFilePaths : void 0
    };
  }
  /**
   * Get files that have changed since last index.
   * Uses git status as a fast path when available, falling back to full scan.
   */
  getChangedFiles() {
    const gitChanges = getGitChangedFiles(this.rootDir, this.config);
    if (gitChanges) {
      const added2 = [];
      const modified2 = [];
      const removed2 = [];
      for (const filePath of gitChanges.deleted) {
        const tracked = this.queries.getFileByPath(filePath);
        if (tracked) {
          removed2.push(filePath);
        }
      }
      for (const filePath of gitChanges.modified) {
        const fullPath = path8.join(this.rootDir, filePath);
        let content;
        try {
          content = fs5.readFileSync(fullPath, "utf-8");
        } catch (error) {
          logDebug("Skipping unreadable file while detecting changes", { filePath, error: String(error) });
          continue;
        }
        const contentHash = hashContent(content);
        const tracked = this.queries.getFileByPath(filePath);
        if (!tracked) {
          added2.push(filePath);
        } else if (tracked.contentHash !== contentHash) {
          modified2.push(filePath);
        }
      }
      for (const filePath of gitChanges.added) {
        added2.push(filePath);
      }
      return { added: added2, modified: modified2, removed: removed2 };
    }
    const currentFiles = new Set(scanDirectory(this.rootDir, this.config));
    const trackedFiles = this.queries.getAllFiles();
    const trackedMap = /* @__PURE__ */ new Map();
    for (const f of trackedFiles) {
      trackedMap.set(f.path, f);
    }
    const added = [];
    const modified = [];
    const removed = [];
    for (const tracked of trackedFiles) {
      if (!currentFiles.has(tracked.path)) {
        removed.push(tracked.path);
      }
    }
    for (const filePath of currentFiles) {
      const fullPath = path8.join(this.rootDir, filePath);
      let content;
      try {
        content = fs5.readFileSync(fullPath, "utf-8");
      } catch (error) {
        logDebug("Skipping unreadable file while detecting changes", { filePath, error: String(error) });
        continue;
      }
      const contentHash = hashContent(content);
      const tracked = trackedMap.get(filePath);
      if (!tracked) {
        added.push(filePath);
      } else if (tracked.contentHash !== contentHash) {
        modified.push(filePath);
      }
    }
    return { added, modified, removed };
  }
};

// src/resolution/index.ts
var fs7 = __toESM(require("fs"));
var path11 = __toESM(require("path"));

// src/resolution/name-matcher.ts
function matchByFilePath(ref, context) {
  if (!ref.referenceName.includes("/")) return null;
  const fileName = ref.referenceName.split("/").pop();
  if (!fileName) return null;
  const candidates = context.getNodesByName(fileName);
  const fileNodes = candidates.filter((n) => n.kind === "file");
  if (fileNodes.length === 0) return null;
  const exactMatch = fileNodes.find((n) => n.qualifiedName === ref.referenceName || n.filePath === ref.referenceName);
  if (exactMatch) {
    return {
      original: ref,
      targetNodeId: exactMatch.id,
      confidence: 0.95,
      resolvedBy: "file-path"
    };
  }
  const suffixMatch = fileNodes.find((n) => n.qualifiedName.endsWith(ref.referenceName) || n.filePath.endsWith(ref.referenceName));
  if (suffixMatch) {
    return {
      original: ref,
      targetNodeId: suffixMatch.id,
      confidence: 0.85,
      resolvedBy: "file-path"
    };
  }
  if (fileNodes.length === 1) {
    return {
      original: ref,
      targetNodeId: fileNodes[0].id,
      confidence: 0.7,
      resolvedBy: "file-path"
    };
  }
  return null;
}
function matchByExactName(ref, context) {
  const candidates = context.getNodesByName(ref.referenceName);
  if (candidates.length === 0) {
    return null;
  }
  if (candidates.length === 1) {
    const isCrossLanguage = candidates[0].language !== ref.language;
    return {
      original: ref,
      targetNodeId: candidates[0].id,
      confidence: isCrossLanguage ? 0.5 : 0.9,
      resolvedBy: "exact-match"
    };
  }
  const bestMatch = findBestMatch(ref, candidates, context);
  if (bestMatch) {
    const proximity = computePathProximity(ref.filePath, bestMatch.filePath);
    const confidence = proximity >= 30 ? 0.7 : 0.4;
    return {
      original: ref,
      targetNodeId: bestMatch.id,
      confidence,
      resolvedBy: "exact-match"
    };
  }
  return null;
}
function matchByQualifiedName(ref, context) {
  if (!ref.referenceName.includes("::") && !ref.referenceName.includes(".")) {
    return null;
  }
  const candidates = context.getNodesByQualifiedName(ref.referenceName);
  if (candidates.length === 1) {
    return {
      original: ref,
      targetNodeId: candidates[0].id,
      confidence: 0.95,
      resolvedBy: "qualified-name"
    };
  }
  const parts = ref.referenceName.split(/[:.]/);
  const lastName = parts[parts.length - 1];
  if (lastName) {
    const partialCandidates = context.getNodesByName(lastName);
    for (const candidate of partialCandidates) {
      if (candidate.qualifiedName.endsWith(ref.referenceName)) {
        return {
          original: ref,
          targetNodeId: candidate.id,
          confidence: 0.85,
          resolvedBy: "qualified-name"
        };
      }
    }
  }
  return null;
}
function matchMethodCall(ref, context) {
  const dotMatch = ref.referenceName.match(/^(\w+)\.(\w+)$/);
  const colonMatch = ref.referenceName.match(/^(\w+)::(\w+)$/);
  const match = dotMatch || colonMatch;
  if (!match) {
    return null;
  }
  const [, objectOrClass, methodName] = match;
  const classCandidates = context.getNodesByName(objectOrClass);
  for (const classNode of classCandidates) {
    if (classNode.kind === "class" || classNode.kind === "struct" || classNode.kind === "interface") {
      if (classNode.language !== ref.language) continue;
      const nodesInFile = context.getNodesInFile(classNode.filePath);
      const methodNode = nodesInFile.find(
        (n) => n.kind === "method" && n.name === methodName && n.qualifiedName.includes(classNode.name)
      );
      if (methodNode) {
        return {
          original: ref,
          targetNodeId: methodNode.id,
          confidence: 0.85,
          resolvedBy: "qualified-name"
        };
      }
    }
  }
  const capitalizedReceiver = objectOrClass.charAt(0).toUpperCase() + objectOrClass.slice(1);
  if (capitalizedReceiver !== objectOrClass) {
    const fuzzyClassCandidates = context.getNodesByName(capitalizedReceiver);
    for (const classNode of fuzzyClassCandidates) {
      if (classNode.kind === "class" || classNode.kind === "struct" || classNode.kind === "interface") {
        if (classNode.language !== ref.language) continue;
        const nodesInFile = context.getNodesInFile(classNode.filePath);
        const methodNode = nodesInFile.find(
          (n) => n.kind === "method" && n.name === methodName && n.qualifiedName.includes(classNode.name)
        );
        if (methodNode) {
          return {
            original: ref,
            targetNodeId: methodNode.id,
            confidence: 0.8,
            resolvedBy: "instance-method"
          };
        }
      }
    }
  }
  if (methodName) {
    const methodCandidates = context.getNodesByName(methodName);
    const methods = methodCandidates.filter(
      (n) => n.kind === "method" && n.name === methodName
    );
    const sameLanguageMethods = methods.filter((m) => m.language === ref.language);
    const targetMethods = sameLanguageMethods.length > 0 ? sameLanguageMethods : methods;
    if (targetMethods.length === 1 && targetMethods[0].language === ref.language) {
      return {
        original: ref,
        targetNodeId: targetMethods[0].id,
        confidence: 0.7,
        resolvedBy: "instance-method"
      };
    }
    if (targetMethods.length > 1) {
      const receiverWords = splitCamelCase(objectOrClass);
      let bestMatch;
      let bestScore = 0;
      for (const method of targetMethods) {
        const classWords = splitCamelCase(method.qualifiedName);
        let score = receiverWords.filter(
          (w) => classWords.some((cw) => cw.toLowerCase() === w.toLowerCase())
        ).length;
        if (method.language === ref.language) score += 1;
        if (score > bestScore) {
          bestScore = score;
          bestMatch = method;
        }
      }
      if (bestMatch && bestScore >= 2) {
        return {
          original: ref,
          targetNodeId: bestMatch.id,
          confidence: 0.65,
          resolvedBy: "instance-method"
        };
      }
    }
  }
  return null;
}
function splitCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2").split(/[\s._:\/\\]+/).filter((w) => w.length > 1);
}
function computePathProximity(filePath1, filePath2) {
  const dir1 = filePath1.split("/").slice(0, -1);
  const dir2 = filePath2.split("/").slice(0, -1);
  let shared = 0;
  for (let i = 0; i < Math.min(dir1.length, dir2.length); i++) {
    if (dir1[i] === dir2[i]) {
      shared++;
    } else {
      break;
    }
  }
  return Math.min(shared * 15, 80);
}
function findBestMatch(ref, candidates, _context) {
  let bestScore = -1;
  let bestNode = null;
  for (const candidate of candidates) {
    let score = 0;
    if (candidate.filePath === ref.filePath) {
      score += 100;
    }
    score += computePathProximity(ref.filePath, candidate.filePath);
    if (candidate.language === ref.language) {
      score += 50;
    } else {
      score -= 80;
    }
    if (ref.referenceKind === "calls") {
      if (candidate.kind === "function" || candidate.kind === "method") {
        score += 25;
      }
    }
    if (ref.referenceKind === "instantiates") {
      if (candidate.kind === "class" || candidate.kind === "struct" || candidate.kind === "interface") {
        score += 25;
      }
    }
    if (ref.referenceKind === "decorates") {
      if (candidate.kind === "function" || candidate.kind === "method") {
        score += 25;
      } else if (candidate.kind === "class" || candidate.kind === "interface") {
        score += 15;
      }
    }
    if (candidate.isExported) {
      score += 10;
    }
    if (candidate.filePath === ref.filePath && candidate.startLine) {
      const distance = Math.abs(candidate.startLine - ref.line);
      score += Math.max(0, 20 - distance / 10);
    }
    if (score > bestScore) {
      bestScore = score;
      bestNode = candidate;
    }
  }
  return bestNode;
}
function matchFuzzy(ref, context) {
  const lowerName = ref.referenceName.toLowerCase();
  const candidates = context.getNodesByLowerName(lowerName);
  const callableKinds = /* @__PURE__ */ new Set(["function", "method", "class"]);
  const callableCandidates = candidates.filter((n) => callableKinds.has(n.kind));
  const sameLanguageCandidates = callableCandidates.filter((n) => n.language === ref.language);
  const finalCandidates = sameLanguageCandidates.length > 0 ? sameLanguageCandidates : callableCandidates;
  if (finalCandidates.length === 1) {
    const isCrossLanguage = finalCandidates[0].language !== ref.language;
    return {
      original: ref,
      targetNodeId: finalCandidates[0].id,
      confidence: isCrossLanguage ? 0.3 : 0.5,
      resolvedBy: "fuzzy"
    };
  }
  return null;
}
function matchReference(ref, context) {
  let result;
  result = matchByFilePath(ref, context);
  if (result) return result;
  result = matchByQualifiedName(ref, context);
  if (result) return result;
  result = matchMethodCall(ref, context);
  if (result) return result;
  result = matchByExactName(ref, context);
  if (result) return result;
  result = matchFuzzy(ref, context);
  if (result) return result;
  return null;
}

// src/resolution/import-resolver.ts
var path10 = __toESM(require("path"));

// src/resolution/path-aliases.ts
var fs6 = __toESM(require("fs"));
var path9 = __toESM(require("path"));
function stripJsonc(src) {
  let out = "";
  let i = 0;
  let inString = false;
  while (i < src.length) {
    const ch = src[i];
    if (inString) {
      out += ch;
      if (ch === "\\" && i + 1 < src.length) {
        out += src[i + 1];
        i += 2;
        continue;
      }
      if (ch === '"') inString = false;
      i++;
      continue;
    }
    if (ch === '"') {
      inString = true;
      out += ch;
      i++;
      continue;
    }
    if (ch === "/" && src[i + 1] === "/") {
      while (i < src.length && src[i] !== "\n") i++;
      continue;
    }
    if (ch === "/" && src[i + 1] === "*") {
      i += 2;
      while (i < src.length && !(src[i] === "*" && src[i + 1] === "/")) i++;
      i += 2;
      continue;
    }
    out += ch;
    i++;
  }
  return out.replace(/,(\s*[}\]])/g, "$1");
}
function readTsconfigLike(filePath) {
  try {
    const raw = fs6.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(stripJsonc(raw));
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch (err) {
    logDebug("path-aliases: failed to parse", { filePath, err: String(err) });
    return null;
  }
}
function splitWildcard(pattern) {
  const star = pattern.indexOf("*");
  if (star === -1) return { prefix: pattern, suffix: "", hasWildcard: false };
  return {
    prefix: pattern.slice(0, star),
    suffix: pattern.slice(star + 1),
    hasWildcard: true
  };
}
function loadProjectAliases(projectRoot) {
  const candidates = ["tsconfig.json", "jsconfig.json"];
  let raw = null;
  let usedFile = null;
  for (const name of candidates) {
    const p = path9.join(projectRoot, name);
    if (fs6.existsSync(p)) {
      raw = readTsconfigLike(p);
      if (raw) {
        usedFile = name;
        break;
      }
    }
  }
  if (!raw) return null;
  const co = raw.compilerOptions ?? {};
  const baseUrlRel = co.baseUrl ?? ".";
  const baseUrl = path9.resolve(projectRoot, baseUrlRel);
  const paths = co.paths;
  if (!paths || typeof paths !== "object") {
    return null;
  }
  const patterns = [];
  for (const [pattern, targets] of Object.entries(paths)) {
    if (!Array.isArray(targets) || targets.length === 0) continue;
    const filtered = targets.filter((t) => typeof t === "string");
    if (filtered.length === 0) continue;
    const { prefix, suffix, hasWildcard } = splitWildcard(pattern);
    patterns.push({ prefix, suffix, hasWildcard, replacements: filtered });
  }
  if (patterns.length === 0) return null;
  patterns.sort((a, b) => {
    if (a.prefix.length !== b.prefix.length) return b.prefix.length - a.prefix.length;
    if (a.hasWildcard !== b.hasWildcard) return a.hasWildcard ? 1 : -1;
    return 0;
  });
  logDebug("path-aliases loaded", {
    file: usedFile,
    baseUrl,
    patternCount: patterns.length
  });
  return { baseUrl, patterns };
}
function applyAliases(importPath, aliases, projectRoot) {
  for (const pat of aliases.patterns) {
    if (!importPath.startsWith(pat.prefix)) continue;
    if (pat.suffix && !importPath.endsWith(pat.suffix)) continue;
    let captured = "";
    if (pat.hasWildcard) {
      captured = importPath.slice(pat.prefix.length, importPath.length - pat.suffix.length);
    } else if (importPath !== pat.prefix) {
      continue;
    }
    const out = [];
    for (const target of pat.replacements) {
      const filled = pat.hasWildcard ? target.replace("*", captured) : target;
      const absolute = path9.resolve(aliases.baseUrl, filled);
      const relative5 = path9.relative(projectRoot, absolute);
      if (relative5.startsWith("..")) continue;
      out.push(relative5.replace(/\\/g, "/"));
    }
    return out;
  }
  return [];
}

// src/resolution/import-resolver.ts
var EXTENSION_RESOLUTION = {
  typescript: [".ts", ".tsx", ".d.ts", ".js", ".jsx", "/index.ts", "/index.tsx", "/index.js"],
  javascript: [".js", ".jsx", ".mjs", ".cjs", "/index.js", "/index.jsx"],
  tsx: [".tsx", ".ts", ".d.ts", ".js", ".jsx", "/index.tsx", "/index.ts", "/index.js"],
  jsx: [".jsx", ".js", "/index.jsx", "/index.js"],
  python: [".py", "/__init__.py"],
  go: [".go"],
  rust: [".rs", "/mod.rs"],
  java: [".java"],
  csharp: [".cs"],
  php: [".php"],
  ruby: [".rb"]
};
function resolveImportPath(importPath, fromFile, language, context) {
  if (isExternalImport(importPath, language, context)) {
    return null;
  }
  const projectRoot = context.getProjectRoot();
  const fromDir = path10.dirname(path10.join(projectRoot, fromFile));
  if (importPath.startsWith(".")) {
    return resolveRelativeImport(importPath, fromDir, language, context);
  }
  return resolveAliasedImport(importPath, projectRoot, language, context);
}
function isExternalImport(importPath, language, context) {
  if (importPath.startsWith(".")) {
    return false;
  }
  if (language === "typescript" || language === "javascript" || language === "tsx" || language === "jsx") {
    if (["fs", "path", "os", "crypto", "http", "https", "url", "util", "events", "stream", "child_process", "buffer"].includes(importPath)) {
      return true;
    }
    const aliases = context?.getProjectAliases?.();
    if (aliases) {
      for (const pat of aliases.patterns) {
        if (importPath.startsWith(pat.prefix)) return false;
      }
    }
    if (!importPath.startsWith("@/") && !importPath.startsWith("~/") && !importPath.startsWith("src/")) {
      return true;
    }
  }
  if (language === "python") {
    const stdLibs = ["os", "sys", "json", "re", "math", "datetime", "collections", "typing", "pathlib", "logging"];
    if (stdLibs.includes(importPath.split(".")[0])) {
      return true;
    }
  }
  if (language === "go") {
    if (!importPath.startsWith(".") && !importPath.includes("/internal/")) {
      return true;
    }
  }
  return false;
}
function resolveRelativeImport(importPath, fromDir, language, context) {
  const projectRoot = context.getProjectRoot();
  const extensions = EXTENSION_RESOLUTION[language] || [];
  const basePath = path10.resolve(fromDir, importPath);
  const relativePath = path10.relative(projectRoot, basePath).replace(/\\/g, "/");
  for (const ext of extensions) {
    const candidatePath = relativePath + ext;
    if (context.fileExists(candidatePath)) {
      return candidatePath;
    }
  }
  if (context.fileExists(relativePath)) {
    return relativePath;
  }
  return null;
}
function resolveAliasedImport(importPath, projectRoot, language, context) {
  const extensions = EXTENSION_RESOLUTION[language] || [];
  const tryWithExt = (basePath) => {
    for (const ext of extensions) {
      const candidate = basePath + ext;
      if (context.fileExists(candidate)) return candidate;
    }
    if (context.fileExists(basePath)) return basePath;
    return null;
  };
  const aliasMap = context.getProjectAliases?.();
  if (aliasMap) {
    const candidates = applyAliases(importPath, aliasMap, projectRoot);
    for (const c of candidates) {
      const hit = tryWithExt(c);
      if (hit) return hit;
    }
  }
  const fallbackAliases = {
    "@/": "src/",
    "~/": "src/",
    "@src/": "src/",
    "src/": "src/",
    "@app/": "app/",
    "app/": "app/"
  };
  for (const [alias, replacement] of Object.entries(fallbackAliases)) {
    if (importPath.startsWith(alias)) {
      const hit = tryWithExt(importPath.replace(alias, replacement));
      if (hit) return hit;
    }
  }
  return tryWithExt(importPath);
}
function extractImportMappings(_filePath, content, language) {
  const mappings = [];
  if (language === "typescript" || language === "javascript" || language === "tsx" || language === "jsx") {
    mappings.push(...extractJSImports(content));
  } else if (language === "python") {
    mappings.push(...extractPythonImports(content));
  } else if (language === "go") {
    mappings.push(...extractGoImports(content));
  } else if (language === "php") {
    mappings.push(...extractPHPImports(content));
  }
  return mappings;
}
function extractJSImports(content) {
  const mappings = [];
  const importRegex = /import\s+(?:(\w+)\s*,?\s*)?(?:\{([^}]+)\})?\s*(?:(\*)\s+as\s+(\w+))?\s*from\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const [, defaultImport, namedImports, star, namespaceAlias, source] = match;
    if (defaultImport) {
      mappings.push({
        localName: defaultImport,
        exportedName: "default",
        source,
        isDefault: true,
        isNamespace: false
      });
    }
    if (namedImports) {
      const names = namedImports.split(",").map((s) => s.trim());
      for (const name of names) {
        const aliasMatch = name.match(/(\w+)\s+as\s+(\w+)/);
        if (aliasMatch) {
          mappings.push({
            localName: aliasMatch[2],
            exportedName: aliasMatch[1],
            source,
            isDefault: false,
            isNamespace: false
          });
        } else if (name) {
          mappings.push({
            localName: name,
            exportedName: name,
            source,
            isDefault: false,
            isNamespace: false
          });
        }
      }
    }
    if (star && namespaceAlias) {
      mappings.push({
        localName: namespaceAlias,
        exportedName: "*",
        source,
        isDefault: false,
        isNamespace: true
      });
    }
  }
  const requireRegex = /(?:const|let|var)\s+(?:(\w+)|{([^}]+)})\s*=\s*require\(['"]([^'"]+)['"]\)/g;
  while ((match = requireRegex.exec(content)) !== null) {
    const [, defaultName, destructured, source] = match;
    if (defaultName) {
      mappings.push({
        localName: defaultName,
        exportedName: "default",
        source,
        isDefault: true,
        isNamespace: false
      });
    }
    if (destructured) {
      const names = destructured.split(",").map((s) => s.trim());
      for (const name of names) {
        const aliasMatch = name.match(/(\w+)\s*:\s*(\w+)/);
        if (aliasMatch) {
          mappings.push({
            localName: aliasMatch[2],
            exportedName: aliasMatch[1],
            source,
            isDefault: false,
            isNamespace: false
          });
        } else if (name) {
          mappings.push({
            localName: name,
            exportedName: name,
            source,
            isDefault: false,
            isNamespace: false
          });
        }
      }
    }
  }
  return mappings;
}
function extractPythonImports(content) {
  const mappings = [];
  const fromImportRegex = /from\s+([\w.]+)\s+import\s+([^#\n]+)/g;
  let match;
  while ((match = fromImportRegex.exec(content)) !== null) {
    const [, source, imports] = match;
    const names = imports.split(",").map((s) => s.trim());
    for (const name of names) {
      const aliasMatch = name.match(/(\w+)\s+as\s+(\w+)/);
      if (aliasMatch) {
        mappings.push({
          localName: aliasMatch[2],
          exportedName: aliasMatch[1],
          source,
          isDefault: false,
          isNamespace: false
        });
      } else if (name && name !== "*") {
        mappings.push({
          localName: name,
          exportedName: name,
          source,
          isDefault: false,
          isNamespace: false
        });
      }
    }
  }
  const importRegex = /^import\s+([\w.]+)(?:\s+as\s+(\w+))?/gm;
  while ((match = importRegex.exec(content)) !== null) {
    const [, source, alias] = match;
    const localName = alias || source.split(".").pop();
    mappings.push({
      localName,
      exportedName: "*",
      source,
      isDefault: false,
      isNamespace: true
    });
  }
  return mappings;
}
function extractGoImports(content) {
  const mappings = [];
  const singleImportRegex = /import\s+(?:(\w+)\s+)?["']([^"']+)["']/g;
  let match;
  while ((match = singleImportRegex.exec(content)) !== null) {
    const [, alias, source] = match;
    const packageName = source.split("/").pop();
    mappings.push({
      localName: alias || packageName,
      exportedName: "*",
      source,
      isDefault: false,
      isNamespace: true
    });
  }
  const blockImportRegex = /import\s*\(\s*([^)]+)\s*\)/gs;
  while ((match = blockImportRegex.exec(content)) !== null) {
    const block = match[1];
    const lineRegex = /(?:(\w+)\s+)?["']([^"']+)["']/g;
    let lineMatch;
    while ((lineMatch = lineRegex.exec(block)) !== null) {
      const [, alias, source] = lineMatch;
      const packageName = source.split("/").pop();
      mappings.push({
        localName: alias || packageName,
        exportedName: "*",
        source,
        isDefault: false,
        isNamespace: true
      });
    }
  }
  return mappings;
}
function extractPHPImports(content) {
  const mappings = [];
  const useRegex = /use\s+([\w\\]+)(?:\s+as\s+(\w+))?;/g;
  let match;
  while ((match = useRegex.exec(content)) !== null) {
    const [, fullPath, alias] = match;
    const className = fullPath.split("\\").pop();
    mappings.push({
      localName: alias || className,
      exportedName: className,
      source: fullPath,
      isDefault: false,
      isNamespace: false
    });
  }
  return mappings;
}
function stripJsComments(content) {
  let out = "";
  let i = 0;
  let str = null;
  while (i < content.length) {
    const ch = content[i];
    if (str !== null) {
      out += ch;
      if (ch === "\\" && i + 1 < content.length) {
        out += content[i + 1];
        i += 2;
        continue;
      }
      if (ch === str) str = null;
      i++;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      str = ch;
      out += ch;
      i++;
      continue;
    }
    if (ch === "/" && content[i + 1] === "/") {
      while (i < content.length && content[i] !== "\n") i++;
      continue;
    }
    if (ch === "/" && content[i + 1] === "*") {
      i += 2;
      while (i < content.length && !(content[i] === "*" && content[i + 1] === "/")) i++;
      i += 2;
      continue;
    }
    out += ch;
    i++;
  }
  return out;
}
function extractReExports(content, language) {
  if (language !== "typescript" && language !== "javascript" && language !== "tsx" && language !== "jsx") {
    return [];
  }
  const out = [];
  const cleaned = stripJsComments(content);
  const wildcardRe = /export\s*\*(?:\s+as\s+\w+)?\s*from\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = wildcardRe.exec(cleaned)) !== null) {
    out.push({ kind: "wildcard", source: m[1] });
  }
  const namedRe = /export\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/g;
  while ((m = namedRe.exec(cleaned)) !== null) {
    const inner = m[1];
    const source = m[2];
    for (const raw of inner.split(",")) {
      const item = raw.trim();
      if (!item) continue;
      const aliasMatch = item.match(/^(\w+)\s+as\s+(\w+)$/);
      if (aliasMatch) {
        out.push({
          kind: "named",
          exportedName: aliasMatch[2],
          originalName: aliasMatch[1],
          source
        });
      } else if (/^\w+$/.test(item)) {
        out.push({
          kind: "named",
          exportedName: item,
          originalName: item,
          source
        });
      }
    }
  }
  return out;
}
function resolveViaImport(ref, context) {
  const imports = context.getImportMappings(ref.filePath, ref.language);
  if (imports.length === 0 && !context.readFile(ref.filePath)) {
    return null;
  }
  for (const imp of imports) {
    if (imp.localName === ref.referenceName || ref.referenceName.startsWith(imp.localName + ".")) {
      const resolvedPath = resolveImportPath(
        imp.source,
        ref.filePath,
        ref.language,
        context
      );
      if (resolvedPath) {
        const exportedName = imp.isDefault ? "default" : imp.exportedName;
        const memberName = imp.isNamespace ? ref.referenceName.replace(imp.localName + ".", "") : null;
        const targetNode = findExportedSymbol(
          resolvedPath,
          { isDefault: imp.isDefault, isNamespace: imp.isNamespace, exportedName, memberName },
          ref.language,
          context,
          /* @__PURE__ */ new Set()
        );
        if (targetNode) {
          return {
            original: ref,
            targetNodeId: targetNode.id,
            confidence: 0.9,
            resolvedBy: "import"
          };
        }
      }
    }
  }
  return null;
}
var REEXPORT_MAX_DEPTH = 8;
function findExportedSymbol(filePath, want, language, context, visited, depth = 0) {
  if (depth > REEXPORT_MAX_DEPTH) return void 0;
  if (visited.has(filePath)) return void 0;
  visited.add(filePath);
  const nodesInFile = context.getNodesInFile(filePath);
  if (want.isDefault) {
    const direct = nodesInFile.find(
      (n) => n.isExported && (n.kind === "function" || n.kind === "class")
    );
    if (direct) return direct;
  } else if (want.isNamespace && want.memberName) {
    const direct = nodesInFile.find(
      (n) => n.name === want.memberName && n.isExported
    );
    if (direct) return direct;
  } else {
    const direct = nodesInFile.find(
      (n) => n.name === want.exportedName && n.isExported
    );
    if (direct) return direct;
  }
  const reExports = context.getReExports?.(filePath, language) ?? [];
  if (reExports.length === 0) return void 0;
  const targetName = want.isDefault ? "default" : want.exportedName;
  for (const rex of reExports) {
    if (rex.kind === "named" && rex.exportedName === targetName) {
      const next = resolveImportPath(rex.source, filePath, language, context);
      if (!next) continue;
      const chained = findExportedSymbol(
        next,
        {
          isDefault: rex.originalName === "default",
          isNamespace: false,
          exportedName: rex.originalName,
          memberName: null
        },
        language,
        context,
        visited,
        depth + 1
      );
      if (chained) return chained;
    }
  }
  for (const rex of reExports) {
    if (rex.kind === "wildcard") {
      const next = resolveImportPath(rex.source, filePath, language, context);
      if (!next) continue;
      const chained = findExportedSymbol(next, want, language, context, visited, depth + 1);
      if (chained) return chained;
    }
  }
  return void 0;
}

// src/resolution/index.ts
var JS_BUILT_INS = /* @__PURE__ */ new Set([
  "console",
  "window",
  "document",
  "global",
  "process",
  "Promise",
  "Array",
  "Object",
  "String",
  "Number",
  "Boolean",
  "Date",
  "Math",
  "JSON",
  "RegExp",
  "Error",
  "Map",
  "Set",
  "setTimeout",
  "setInterval",
  "clearTimeout",
  "clearInterval",
  "fetch",
  "require",
  "module",
  "exports",
  "__dirname",
  "__filename"
]);
var REACT_HOOKS = /* @__PURE__ */ new Set([
  "useState",
  "useEffect",
  "useContext",
  "useReducer",
  "useCallback",
  "useMemo",
  "useRef",
  "useLayoutEffect",
  "useImperativeHandle",
  "useDebugValue"
]);
var PYTHON_BUILT_INS = /* @__PURE__ */ new Set([
  "print",
  "len",
  "range",
  "str",
  "int",
  "float",
  "list",
  "dict",
  "set",
  "tuple",
  "open",
  "input",
  "type",
  "isinstance",
  "hasattr",
  "getattr",
  "setattr",
  "super",
  "self",
  "cls",
  "None",
  "True",
  "False"
]);
var PYTHON_BUILT_IN_TYPES = /* @__PURE__ */ new Set([
  "list",
  "dict",
  "set",
  "tuple",
  "str",
  "int",
  "float",
  "bool",
  "bytes",
  "bytearray",
  "frozenset",
  "object",
  "super"
]);
var PYTHON_BUILT_IN_METHODS = /* @__PURE__ */ new Set([
  "append",
  "extend",
  "insert",
  "remove",
  "pop",
  "clear",
  "sort",
  "reverse",
  "copy",
  "update",
  "keys",
  "values",
  "items",
  "get",
  "add",
  "discard",
  "union",
  "intersection",
  "difference",
  "split",
  "join",
  "strip",
  "lstrip",
  "rstrip",
  "replace",
  "lower",
  "upper",
  "startswith",
  "endswith",
  "find",
  "index",
  "count",
  "encode",
  "decode",
  "format",
  "isdigit",
  "isalpha",
  "isalnum",
  "read",
  "write",
  "readline",
  "readlines",
  "close",
  "flush",
  "seek"
]);
var GO_STDLIB_PACKAGES = /* @__PURE__ */ new Set([
  "fmt",
  "os",
  "io",
  "net",
  "http",
  "log",
  "math",
  "sort",
  "sync",
  "time",
  "path",
  "bytes",
  "strings",
  "strconv",
  "errors",
  "context",
  "json",
  "xml",
  "csv",
  "html",
  "template",
  "regexp",
  "reflect",
  "runtime",
  "testing",
  "flag",
  "bufio",
  "crypto",
  "encoding",
  "filepath",
  "hash",
  "mime",
  "rand",
  "signal",
  "sql",
  "syscall",
  "unicode",
  "unsafe",
  "atomic",
  "binary",
  "debug",
  "exec",
  "heap",
  "ring",
  "scanner",
  "tar",
  "zip",
  "gzip",
  "zlib",
  "tls",
  "url",
  "user",
  "pprof",
  "trace",
  "ast",
  "build",
  "parser",
  "printer",
  "token",
  "types",
  "cgo",
  "plugin",
  "race",
  "ioutil",
  // Kubernetes-common stdlib aliases
  "utilruntime",
  "utilwait",
  "utilnet"
]);
var GO_BUILT_INS = /* @__PURE__ */ new Set([
  "make",
  "new",
  "len",
  "cap",
  "append",
  "copy",
  "delete",
  "close",
  "panic",
  "recover",
  "print",
  "println",
  "complex",
  "real",
  "imag",
  "error",
  "nil",
  "true",
  "false",
  "iota",
  "int",
  "int8",
  "int16",
  "int32",
  "int64",
  "uint",
  "uint8",
  "uint16",
  "uint32",
  "uint64",
  "uintptr",
  "float32",
  "float64",
  "complex64",
  "complex128",
  "string",
  "bool",
  "byte",
  "rune",
  "any"
]);
var PASCAL_UNIT_PREFIXES = [
  "System.",
  "Winapi.",
  "Vcl.",
  "Fmx.",
  "Data.",
  "Datasnap.",
  "Soap.",
  "Xml.",
  "Web.",
  "REST.",
  "FireDAC.",
  "IBX.",
  "IdHTTP",
  "IdTCP",
  "IdSSL"
];
var PASCAL_BUILT_INS = /* @__PURE__ */ new Set([
  "System",
  "SysUtils",
  "Classes",
  "Types",
  "Variants",
  "StrUtils",
  "Math",
  "DateUtils",
  "IOUtils",
  "Generics.Collections",
  "Generics.Defaults",
  "Rtti",
  "TypInfo",
  "SyncObjs",
  "RegularExpressions",
  "SysInit",
  "Windows",
  "Messages",
  "Graphics",
  "Controls",
  "Forms",
  "Dialogs",
  "StdCtrls",
  "ExtCtrls",
  "ComCtrls",
  "Menus",
  "ActnList",
  "WriteLn",
  "Write",
  "ReadLn",
  "Read",
  "Inc",
  "Dec",
  "Ord",
  "Chr",
  "Length",
  "SetLength",
  "High",
  "Low",
  "Assigned",
  "FreeAndNil",
  "Format",
  "IntToStr",
  "StrToInt",
  "FloatToStr",
  "StrToFloat",
  "Trim",
  "UpperCase",
  "LowerCase",
  "Pos",
  "Copy",
  "Delete",
  "Insert",
  "Now",
  "Date",
  "Time",
  "DateToStr",
  "StrToDate",
  "Raise",
  "Exit",
  "Break",
  "Continue",
  "Abort",
  "True",
  "False",
  "nil",
  "Self",
  "Result",
  "Create",
  "Destroy",
  "Free",
  "TObject",
  "TComponent",
  "TPersistent",
  "TInterfacedObject",
  "TList",
  "TStringList",
  "TStrings",
  "TStream",
  "TMemoryStream",
  "TFileStream",
  "Exception",
  "EAbort",
  "EConvertError",
  "EAccessViolation",
  "IInterface",
  "IUnknown"
]);
var ReferenceResolver = class {
  projectRoot;
  queries;
  context;
  frameworks = [];
  nodeCache = /* @__PURE__ */ new Map();
  // per-file node cache (bounded)
  fileCache = /* @__PURE__ */ new Map();
  // per-file content cache (bounded)
  importMappingCache = /* @__PURE__ */ new Map();
  reExportCache = /* @__PURE__ */ new Map();
  nameCache = /* @__PURE__ */ new Map();
  // name → nodes cache
  lowerNameCache = /* @__PURE__ */ new Map();
  // lower(name) → nodes cache
  qualifiedNameCache = /* @__PURE__ */ new Map();
  // qualified_name → nodes cache
  knownNames = null;
  // all known symbol names for fast pre-filtering
  knownFiles = null;
  cachesWarmed = false;
  // tsconfig/jsconfig path-alias map. `undefined` = not yet computed,
  // `null` = computed and absent. Treated as immutable for the
  // resolver's lifetime; callers re-create the resolver if config changes.
  projectAliases = void 0;
  constructor(projectRoot, queries) {
    this.projectRoot = projectRoot;
    this.queries = queries;
    this.context = this.createContext();
  }
  /**
   * Initialize the resolver (detect frameworks, etc.)
   */
  initialize() {
    this.frameworks = detectFrameworks(this.context);
    this.clearCaches();
  }
  /**
   * Pre-build lightweight caches for resolution.
   * Node lookups are now handled by indexed SQLite queries instead of
   * loading all nodes into memory (which caused OOM on large codebases).
   * We cache the set of known symbol names for fast pre-filtering.
   */
  warmCaches() {
    if (this.cachesWarmed) return;
    this.knownFiles = new Set(this.queries.getAllFilePaths());
    this.knownNames = new Set(this.queries.getAllNodeNames());
    this.cachesWarmed = true;
  }
  /**
   * Clear internal caches
   */
  clearCaches() {
    this.nodeCache.clear();
    this.fileCache.clear();
    this.importMappingCache.clear();
    this.reExportCache.clear();
    this.nameCache.clear();
    this.lowerNameCache.clear();
    this.qualifiedNameCache.clear();
    this.knownNames = null;
    this.knownFiles = null;
    this.cachesWarmed = false;
  }
  /**
   * Create the resolution context
   */
  createContext() {
    return {
      getNodesInFile: (filePath) => {
        if (!this.nodeCache.has(filePath)) {
          this.nodeCache.set(filePath, this.queries.getNodesByFile(filePath));
        }
        return this.nodeCache.get(filePath);
      },
      getNodesByName: (name) => {
        const cached = this.nameCache.get(name);
        if (cached !== void 0) return cached;
        const result = this.queries.getNodesByName(name);
        this.nameCache.set(name, result);
        return result;
      },
      getNodesByQualifiedName: (qualifiedName) => {
        const cached = this.qualifiedNameCache.get(qualifiedName);
        if (cached !== void 0) return cached;
        const result = this.queries.getNodesByQualifiedNameExact(qualifiedName);
        this.qualifiedNameCache.set(qualifiedName, result);
        return result;
      },
      getNodesByKind: (kind) => {
        return this.queries.getNodesByKind(kind);
      },
      fileExists: (filePath) => {
        if (this.knownFiles) {
          const normalized = filePath.replace(/\\/g, "/");
          if (this.knownFiles.has(filePath) || this.knownFiles.has(normalized)) {
            return true;
          }
        }
        const fullPath = path11.join(this.projectRoot, filePath);
        try {
          return fs7.existsSync(fullPath);
        } catch (error) {
          logDebug("Error checking file existence", { filePath, error: String(error) });
          return false;
        }
      },
      readFile: (filePath) => {
        if (this.fileCache.has(filePath)) {
          return this.fileCache.get(filePath);
        }
        const fullPath = path11.join(this.projectRoot, filePath);
        try {
          const content = fs7.readFileSync(fullPath, "utf-8");
          this.fileCache.set(filePath, content);
          return content;
        } catch (error) {
          logDebug("Failed to read file for resolution", { filePath, error: String(error) });
          this.fileCache.set(filePath, null);
          return null;
        }
      },
      getProjectRoot: () => this.projectRoot,
      getAllFiles: () => {
        return this.queries.getAllFilePaths();
      },
      listDirectories: (relativePath) => {
        const target = relativePath === "." || relativePath === "" ? this.projectRoot : path11.join(this.projectRoot, relativePath);
        try {
          return fs7.readdirSync(target, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name);
        } catch (error) {
          logDebug("Failed to list directory for resolution", {
            relativePath,
            error: String(error)
          });
          return [];
        }
      },
      getNodesByLowerName: (lowerName) => {
        const cached = this.lowerNameCache.get(lowerName);
        if (cached !== void 0) return cached;
        const result = this.queries.getNodesByLowerName(lowerName);
        this.lowerNameCache.set(lowerName, result);
        return result;
      },
      getImportMappings: (filePath, language) => {
        const cacheKey = filePath;
        const cached = this.importMappingCache.get(cacheKey);
        if (cached) return cached;
        const content = this.context.readFile(filePath);
        if (!content) {
          this.importMappingCache.set(cacheKey, []);
          return [];
        }
        const mappings = extractImportMappings(filePath, content, language);
        this.importMappingCache.set(cacheKey, mappings);
        return mappings;
      },
      getProjectAliases: () => {
        if (this.projectAliases === void 0) {
          this.projectAliases = loadProjectAliases(this.projectRoot);
        }
        return this.projectAliases;
      },
      getReExports: (filePath, language) => {
        const cached = this.reExportCache.get(filePath);
        if (cached) return cached;
        const content = this.context.readFile(filePath);
        if (!content) {
          this.reExportCache.set(filePath, []);
          return [];
        }
        const reExports = extractReExports(content, language);
        this.reExportCache.set(filePath, reExports);
        return reExports;
      }
    };
  }
  /**
   * Resolve all unresolved references
   */
  resolveAll(unresolvedRefs, onProgress) {
    this.warmCaches();
    const resolved = [];
    const unresolved = [];
    const byMethod = {};
    const refs = unresolvedRefs.map((ref) => ({
      fromNodeId: ref.fromNodeId,
      referenceName: ref.referenceName,
      referenceKind: ref.referenceKind,
      line: ref.line,
      column: ref.column,
      filePath: ref.filePath || this.getFilePathFromNodeId(ref.fromNodeId),
      language: ref.language || this.getLanguageFromNodeId(ref.fromNodeId)
    }));
    const total = refs.length;
    let lastReportedPercent = -1;
    for (let i = 0; i < refs.length; i++) {
      const ref = refs[i];
      const result = this.resolveOne(ref);
      if (result) {
        resolved.push(result);
        byMethod[result.resolvedBy] = (byMethod[result.resolvedBy] || 0) + 1;
      } else {
        unresolved.push(ref);
      }
      if (onProgress) {
        const currentPercent = Math.floor(i / total * 100);
        if (currentPercent > lastReportedPercent) {
          lastReportedPercent = currentPercent;
          onProgress(i + 1, total);
        }
      }
    }
    if (onProgress && total > 0) {
      onProgress(total, total);
    }
    return {
      resolved,
      unresolved,
      stats: {
        total: refs.length,
        resolved: resolved.length,
        unresolved: unresolved.length,
        byMethod
      }
    };
  }
  /**
   * Check if a reference name has any possible match in the codebase.
   * Uses the pre-built knownNames set to skip expensive resolution
   * for names that definitely don't exist as symbols.
   */
  hasAnyPossibleMatch(name) {
    if (!this.knownNames) return true;
    if (this.knownNames.has(name)) return true;
    const dotIdx = name.indexOf(".");
    if (dotIdx > 0) {
      const receiver = name.substring(0, dotIdx);
      const member = name.substring(dotIdx + 1);
      if (this.knownNames.has(receiver) || this.knownNames.has(member)) return true;
      const capitalized = receiver.charAt(0).toUpperCase() + receiver.slice(1);
      if (this.knownNames.has(capitalized)) return true;
    }
    const colonIdx = name.indexOf("::");
    if (colonIdx > 0) {
      const receiver = name.substring(0, colonIdx);
      const member = name.substring(colonIdx + 2);
      if (this.knownNames.has(receiver) || this.knownNames.has(member)) return true;
    }
    const slashIdx = name.lastIndexOf("/");
    if (slashIdx > 0) {
      const fileName = name.substring(slashIdx + 1);
      if (this.knownNames.has(fileName)) return true;
    }
    return false;
  }
  /**
   * Does `ref.referenceName` match an import declared in its containing
   * file? Used as a pre-filter escape so re-export chain resolution
   * still gets a chance when the name has no project-wide declaration.
   */
  matchesAnyImport(ref) {
    const imports = this.context.getImportMappings(ref.filePath, ref.language);
    if (imports.length === 0) return false;
    for (const imp of imports) {
      if (imp.localName === ref.referenceName || ref.referenceName.startsWith(imp.localName + ".")) {
        return true;
      }
    }
    return false;
  }
  /**
   * Resolve a single reference
   */
  resolveOne(ref) {
    if (this.isBuiltInOrExternal(ref)) {
      return null;
    }
    if (!this.hasAnyPossibleMatch(ref.referenceName) && !this.matchesAnyImport(ref)) {
      return null;
    }
    const candidates = [];
    for (const framework of this.frameworks) {
      const result = framework.resolve(ref, this.context);
      if (result) {
        if (result.confidence >= 0.9) return result;
        candidates.push(result);
      }
    }
    const importResult = resolveViaImport(ref, this.context);
    if (importResult) {
      if (importResult.confidence >= 0.9) return importResult;
      candidates.push(importResult);
    }
    const nameResult = matchReference(ref, this.context);
    if (nameResult) {
      candidates.push(nameResult);
    }
    if (candidates.length === 0) return null;
    return candidates.reduce(
      (best, curr) => curr.confidence > best.confidence ? curr : best
    );
  }
  /**
   * Create edges from resolved references
   */
  createEdges(resolved) {
    return resolved.map((ref) => {
      let kind = ref.original.referenceKind;
      if (kind === "extends") {
        const targetNode = this.queries.getNodeById(ref.targetNodeId);
        if (targetNode && (targetNode.kind === "interface" || targetNode.kind === "protocol")) {
          const sourceNode = this.queries.getNodeById(ref.original.fromNodeId);
          if (sourceNode && sourceNode.kind !== "interface" && sourceNode.kind !== "protocol") {
            kind = "implements";
          }
        }
      }
      if (kind === "calls") {
        const targetNode = this.queries.getNodeById(ref.targetNodeId);
        if (targetNode && (targetNode.kind === "class" || targetNode.kind === "struct")) {
          kind = "instantiates";
        }
      }
      return {
        source: ref.original.fromNodeId,
        target: ref.targetNodeId,
        kind,
        line: ref.original.line,
        column: ref.original.column,
        metadata: {
          confidence: ref.confidence,
          resolvedBy: ref.resolvedBy
        }
      };
    });
  }
  /**
   * Resolve and persist edges to database
   */
  resolveAndPersist(unresolvedRefs, onProgress) {
    const result = this.resolveAll(unresolvedRefs, onProgress);
    const edges = this.createEdges(result.resolved);
    if (edges.length > 0) {
      this.queries.insertEdges(edges);
    }
    if (result.resolved.length > 0) {
      this.queries.deleteSpecificResolvedReferences(
        result.resolved.map((r) => ({
          fromNodeId: r.original.fromNodeId,
          referenceName: r.original.referenceName,
          referenceKind: r.original.referenceKind
        }))
      );
    }
    return result;
  }
  /**
   * Resolve and persist in batches to keep memory bounded.
   * Processes unresolved references in chunks, persisting edges and cleaning
   * up resolved refs after each batch to avoid accumulating large arrays.
   */
  async resolveAndPersistBatched(onProgress, batchSize = 5e3) {
    this.warmCaches();
    const total = this.queries.getUnresolvedReferencesCount();
    let processed = 0;
    const aggregateStats = {
      total: 0,
      resolved: 0,
      unresolved: 0,
      byMethod: {}
    };
    while (true) {
      const batch = this.queries.getUnresolvedReferencesBatch(0, batchSize);
      if (batch.length === 0) break;
      const result = this.resolveAll(batch);
      const edges = this.createEdges(result.resolved);
      if (edges.length > 0) {
        this.queries.insertEdges(edges);
      }
      if (result.resolved.length > 0) {
        this.queries.deleteSpecificResolvedReferences(
          result.resolved.map((r) => ({
            fromNodeId: r.original.fromNodeId,
            referenceName: r.original.referenceName,
            referenceKind: r.original.referenceKind
          }))
        );
      }
      if (result.unresolved.length > 0) {
        this.queries.deleteSpecificResolvedReferences(
          result.unresolved.map((r) => ({
            fromNodeId: r.fromNodeId,
            referenceName: r.referenceName,
            referenceKind: r.referenceKind
          }))
        );
      }
      aggregateStats.total += result.stats.total;
      aggregateStats.resolved += result.stats.resolved;
      aggregateStats.unresolved += result.stats.unresolved;
      for (const [method, count] of Object.entries(result.stats.byMethod)) {
        aggregateStats.byMethod[method] = (aggregateStats.byMethod[method] || 0) + count;
      }
      processed += batch.length;
      onProgress?.(processed, total);
      await new Promise((resolve9) => setImmediate(resolve9));
      if (result.resolved.length === 0 && result.unresolved.length === batch.length) {
        break;
      }
    }
    return {
      resolved: [],
      unresolved: [],
      stats: aggregateStats
    };
  }
  /**
   * Get detected frameworks
   */
  getDetectedFrameworks() {
    return this.frameworks.map((f) => f.name);
  }
  /**
   * Check if reference is to a built-in or external symbol
   */
  isBuiltInOrExternal(ref) {
    const name = ref.referenceName;
    const isJsTs = ref.language === "typescript" || ref.language === "javascript" || ref.language === "tsx" || ref.language === "jsx";
    if (isJsTs && JS_BUILT_INS.has(name)) {
      return true;
    }
    if (isJsTs && (name.startsWith("console.") || name.startsWith("Math.") || name.startsWith("JSON."))) {
      return true;
    }
    if (isJsTs && REACT_HOOKS.has(name)) {
      return true;
    }
    if (ref.language === "python" && PYTHON_BUILT_INS.has(name)) {
      return true;
    }
    if (ref.language === "python") {
      const dotIdx = name.indexOf(".");
      if (dotIdx > 0) {
        const receiver = name.substring(0, dotIdx);
        const method = name.substring(dotIdx + 1);
        if (PYTHON_BUILT_IN_TYPES.has(receiver)) {
          return true;
        }
        if (PYTHON_BUILT_IN_METHODS.has(method)) {
          const capitalized = receiver.charAt(0).toUpperCase() + receiver.slice(1);
          if (!this.knownNames?.has(capitalized)) {
            return true;
          }
        }
      }
      if (PYTHON_BUILT_IN_METHODS.has(name)) {
        return true;
      }
    }
    if (ref.language === "go") {
      const dotIdx = name.indexOf(".");
      if (dotIdx > 0) {
        const pkg = name.substring(0, dotIdx);
        if (GO_STDLIB_PACKAGES.has(pkg)) {
          return true;
        }
      }
      if (GO_BUILT_INS.has(name)) {
        return true;
      }
    }
    if (ref.language === "pascal") {
      if (PASCAL_UNIT_PREFIXES.some((p) => name.startsWith(p))) {
        return true;
      }
      if (PASCAL_BUILT_INS.has(name)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Get file path from node ID
   */
  getFilePathFromNodeId(nodeId) {
    const node = this.queries.getNodeById(nodeId);
    return node?.filePath || "";
  }
  /**
   * Get language from node ID
   */
  getLanguageFromNodeId(nodeId) {
    const node = this.queries.getNodeById(nodeId);
    return node?.language || "unknown";
  }
};
function createResolver(projectRoot, queries) {
  const resolver = new ReferenceResolver(projectRoot, queries);
  resolver.initialize();
  return resolver;
}

// src/graph/traversal.ts
var DEFAULT_OPTIONS = {
  maxDepth: Infinity,
  edgeKinds: [],
  nodeKinds: [],
  direction: "outgoing",
  limit: 1e3,
  includeStart: true
};
var GraphTraverser = class {
  queries;
  constructor(queries) {
    this.queries = queries;
  }
  /**
   * Traverse the graph using breadth-first search
   *
   * @param startId - Starting node ID
   * @param options - Traversal options
   * @returns Subgraph containing traversed nodes and edges
   */
  traverseBFS(startId, options = {}) {
    const opts = { ...DEFAULT_OPTIONS, ...options };
    const startNode = this.queries.getNodeById(startId);
    if (!startNode) {
      return { nodes: /* @__PURE__ */ new Map(), edges: [], roots: [] };
    }
    const nodes = /* @__PURE__ */ new Map();
    const edges = [];
    const visited = /* @__PURE__ */ new Set();
    const queue = [{ node: startNode, edge: null, depth: 0 }];
    if (opts.includeStart) {
      nodes.set(startNode.id, startNode);
    }
    while (queue.length > 0 && nodes.size < opts.limit) {
      const step = queue.shift();
      const { node, edge, depth } = step;
      if (visited.has(node.id)) {
        continue;
      }
      visited.add(node.id);
      if (edge) {
        edges.push(edge);
      }
      if (depth >= opts.maxDepth) {
        continue;
      }
      const adjacentEdges = this.getAdjacentEdges(node.id, opts.direction, opts.edgeKinds);
      adjacentEdges.sort((a, b) => {
        const priority = (e) => e.kind === "contains" ? 0 : e.kind === "calls" ? 1 : 2;
        return priority(a) - priority(b);
      });
      for (const adjEdge of adjacentEdges) {
        const nextNodeId = adjEdge.source === node.id ? adjEdge.target : adjEdge.source;
        if (visited.has(nextNodeId)) {
          continue;
        }
        const nextNode = this.queries.getNodeById(nextNodeId);
        if (!nextNode) {
          continue;
        }
        if (opts.nodeKinds && opts.nodeKinds.length > 0 && !opts.nodeKinds.includes(nextNode.kind)) {
          continue;
        }
        nodes.set(nextNode.id, nextNode);
        queue.push({ node: nextNode, edge: adjEdge, depth: depth + 1 });
      }
    }
    return {
      nodes,
      edges,
      roots: [startId]
    };
  }
  /**
   * Traverse the graph using depth-first search
   *
   * @param startId - Starting node ID
   * @param options - Traversal options
   * @returns Subgraph containing traversed nodes and edges
   */
  traverseDFS(startId, options = {}) {
    const opts = { ...DEFAULT_OPTIONS, ...options };
    const startNode = this.queries.getNodeById(startId);
    if (!startNode) {
      return { nodes: /* @__PURE__ */ new Map(), edges: [], roots: [] };
    }
    const nodes = /* @__PURE__ */ new Map();
    const edges = [];
    const visited = /* @__PURE__ */ new Set();
    if (opts.includeStart) {
      nodes.set(startNode.id, startNode);
    }
    this.dfsRecursive(startNode, 0, opts, nodes, edges, visited);
    return {
      nodes,
      edges,
      roots: [startId]
    };
  }
  /**
   * Recursive DFS helper
   */
  dfsRecursive(node, depth, opts, nodes, edges, visited) {
    if (visited.has(node.id) || nodes.size >= opts.limit || depth >= opts.maxDepth) {
      return;
    }
    visited.add(node.id);
    const adjacentEdges = this.getAdjacentEdges(node.id, opts.direction, opts.edgeKinds);
    for (const edge of adjacentEdges) {
      const nextNodeId = edge.source === node.id ? edge.target : edge.source;
      if (visited.has(nextNodeId)) {
        continue;
      }
      const nextNode = this.queries.getNodeById(nextNodeId);
      if (!nextNode) {
        continue;
      }
      if (opts.nodeKinds && opts.nodeKinds.length > 0 && !opts.nodeKinds.includes(nextNode.kind)) {
        continue;
      }
      nodes.set(nextNode.id, nextNode);
      edges.push(edge);
      this.dfsRecursive(nextNode, depth + 1, opts, nodes, edges, visited);
    }
  }
  /**
   * Get adjacent edges based on direction
   */
  getAdjacentEdges(nodeId, direction, edgeKinds) {
    const kinds = edgeKinds && edgeKinds.length > 0 ? edgeKinds : void 0;
    if (direction === "outgoing") {
      return this.queries.getOutgoingEdges(nodeId, kinds);
    } else if (direction === "incoming") {
      return this.queries.getIncomingEdges(nodeId, kinds);
    } else {
      const outgoing = this.queries.getOutgoingEdges(nodeId, kinds);
      const incoming = this.queries.getIncomingEdges(nodeId, kinds);
      return [...outgoing, ...incoming];
    }
  }
  /**
   * Find all callers of a function/method
   *
   * @param nodeId - ID of the function/method node
   * @param maxDepth - Maximum depth to traverse (default: 1)
   * @returns Array of nodes that call this function
   */
  getCallers(nodeId, maxDepth = 1) {
    const result = [];
    const visited = /* @__PURE__ */ new Set();
    this.getCallersRecursive(nodeId, maxDepth, 0, result, visited);
    return result;
  }
  getCallersRecursive(nodeId, maxDepth, currentDepth, result, visited) {
    if (currentDepth >= maxDepth || visited.has(nodeId)) {
      return;
    }
    visited.add(nodeId);
    const incomingEdges = this.queries.getIncomingEdges(nodeId, ["calls", "instantiates", "references", "imports"]);
    for (const edge of incomingEdges) {
      const callerNode = this.queries.getNodeById(edge.source);
      if (callerNode && !visited.has(callerNode.id)) {
        result.push({ node: callerNode, edge });
        this.getCallersRecursive(callerNode.id, maxDepth, currentDepth + 1, result, visited);
      }
    }
  }
  /**
   * Find all functions/methods called by a function
   *
   * @param nodeId - ID of the function/method node
   * @param maxDepth - Maximum depth to traverse (default: 1)
   * @returns Array of nodes called by this function
   */
  getCallees(nodeId, maxDepth = 1) {
    const result = [];
    const visited = /* @__PURE__ */ new Set();
    this.getCalleesRecursive(nodeId, maxDepth, 0, result, visited);
    return result;
  }
  getCalleesRecursive(nodeId, maxDepth, currentDepth, result, visited) {
    if (currentDepth >= maxDepth || visited.has(nodeId)) {
      return;
    }
    visited.add(nodeId);
    const outgoingEdges = this.queries.getOutgoingEdges(nodeId, ["calls", "references", "imports"]);
    for (const edge of outgoingEdges) {
      const calleeNode = this.queries.getNodeById(edge.target);
      if (calleeNode && !visited.has(calleeNode.id)) {
        result.push({ node: calleeNode, edge });
        this.getCalleesRecursive(calleeNode.id, maxDepth, currentDepth + 1, result, visited);
      }
    }
  }
  /**
   * Get the call graph for a function (both callers and callees)
   *
   * @param nodeId - ID of the function/method node
   * @param depth - Maximum depth in each direction (default: 2)
   * @returns Subgraph containing the call graph
   */
  getCallGraph(nodeId, depth = 2) {
    const focalNode = this.queries.getNodeById(nodeId);
    if (!focalNode) {
      return { nodes: /* @__PURE__ */ new Map(), edges: [], roots: [] };
    }
    const nodes = /* @__PURE__ */ new Map();
    const edges = [];
    nodes.set(focalNode.id, focalNode);
    const callers = this.getCallers(nodeId, depth);
    for (const { node, edge } of callers) {
      nodes.set(node.id, node);
      edges.push(edge);
    }
    const callees = this.getCallees(nodeId, depth);
    for (const { node, edge } of callees) {
      nodes.set(node.id, node);
      edges.push(edge);
    }
    return {
      nodes,
      edges,
      roots: [nodeId]
    };
  }
  /**
   * Get the type hierarchy for a class/interface
   *
   * @param nodeId - ID of the class/interface node
   * @returns Subgraph containing the type hierarchy
   */
  getTypeHierarchy(nodeId) {
    const focalNode = this.queries.getNodeById(nodeId);
    if (!focalNode) {
      return { nodes: /* @__PURE__ */ new Map(), edges: [], roots: [] };
    }
    const nodes = /* @__PURE__ */ new Map();
    const edges = [];
    const visited = /* @__PURE__ */ new Set();
    nodes.set(focalNode.id, focalNode);
    this.getTypeAncestors(nodeId, nodes, edges, visited);
    this.getTypeDescendants(nodeId, nodes, edges, visited);
    return {
      nodes,
      edges,
      roots: [nodeId]
    };
  }
  getTypeAncestors(nodeId, nodes, edges, visited) {
    if (visited.has(nodeId)) {
      return;
    }
    visited.add(nodeId);
    const outgoingEdges = this.queries.getOutgoingEdges(nodeId, ["extends", "implements"]);
    for (const edge of outgoingEdges) {
      const parentNode = this.queries.getNodeById(edge.target);
      if (parentNode && !nodes.has(parentNode.id)) {
        nodes.set(parentNode.id, parentNode);
        edges.push(edge);
        this.getTypeAncestors(parentNode.id, nodes, edges, visited);
      }
    }
  }
  getTypeDescendants(nodeId, nodes, edges, visited) {
    if (visited.has(nodeId)) {
      return;
    }
    visited.add(nodeId);
    const incomingEdges = this.queries.getIncomingEdges(nodeId, ["extends", "implements"]);
    for (const edge of incomingEdges) {
      const childNode = this.queries.getNodeById(edge.source);
      if (childNode && !nodes.has(childNode.id)) {
        nodes.set(childNode.id, childNode);
        edges.push(edge);
        this.getTypeDescendants(childNode.id, nodes, edges, visited);
      }
    }
  }
  /**
   * Find all usages of a symbol
   *
   * @param nodeId - ID of the symbol node
   * @returns Array of nodes and edges that reference this symbol
   */
  findUsages(nodeId) {
    const result = [];
    const incomingEdges = this.queries.getIncomingEdges(nodeId);
    for (const edge of incomingEdges) {
      const sourceNode = this.queries.getNodeById(edge.source);
      if (sourceNode) {
        result.push({ node: sourceNode, edge });
      }
    }
    return result;
  }
  /**
   * Calculate the impact radius of a node
   *
   * Returns all nodes that could be affected by changes to this node.
   *
   * @param nodeId - ID of the node
   * @param maxDepth - Maximum depth to traverse (default: 3)
   * @returns Subgraph containing potentially impacted nodes
   */
  getImpactRadius(nodeId, maxDepth = 3) {
    const focalNode = this.queries.getNodeById(nodeId);
    if (!focalNode) {
      return { nodes: /* @__PURE__ */ new Map(), edges: [], roots: [] };
    }
    const nodes = /* @__PURE__ */ new Map();
    const edges = [];
    const visited = /* @__PURE__ */ new Set();
    nodes.set(focalNode.id, focalNode);
    this.getImpactRecursive(nodeId, maxDepth, 0, nodes, edges, visited);
    return {
      nodes,
      edges,
      roots: [nodeId]
    };
  }
  getImpactRecursive(nodeId, maxDepth, currentDepth, nodes, edges, visited) {
    if (currentDepth >= maxDepth || visited.has(nodeId)) {
      return;
    }
    visited.add(nodeId);
    const focalNode = this.queries.getNodeById(nodeId);
    if (focalNode) {
      const containerKinds = /* @__PURE__ */ new Set(["class", "interface", "struct", "trait", "protocol", "module", "enum"]);
      if (containerKinds.has(focalNode.kind)) {
        const containsEdges = this.queries.getOutgoingEdges(nodeId, ["contains"]);
        for (const edge of containsEdges) {
          const childNode = this.queries.getNodeById(edge.target);
          if (childNode && !visited.has(childNode.id)) {
            nodes.set(childNode.id, childNode);
            edges.push(edge);
            this.getImpactRecursive(childNode.id, maxDepth, currentDepth, nodes, edges, visited);
          }
        }
      }
    }
    const incomingEdges = this.queries.getIncomingEdges(nodeId);
    for (const edge of incomingEdges) {
      const sourceNode = this.queries.getNodeById(edge.source);
      if (sourceNode && !nodes.has(sourceNode.id)) {
        nodes.set(sourceNode.id, sourceNode);
        edges.push(edge);
        this.getImpactRecursive(sourceNode.id, maxDepth, currentDepth + 1, nodes, edges, visited);
      }
    }
  }
  /**
   * Find the shortest path between two nodes
   *
   * @param fromId - Starting node ID
   * @param toId - Target node ID
   * @param edgeKinds - Edge types to consider (all if empty)
   * @returns Array of nodes and edges forming the path, or null if no path exists
   */
  findPath(fromId, toId, edgeKinds = []) {
    const fromNode = this.queries.getNodeById(fromId);
    const toNode = this.queries.getNodeById(toId);
    if (!fromNode || !toNode) {
      return null;
    }
    const visited = /* @__PURE__ */ new Set();
    const queue = [
      { nodeId: fromId, path: [{ node: fromNode, edge: null }] }
    ];
    while (queue.length > 0) {
      const { nodeId, path: path16 } = queue.shift();
      if (nodeId === toId) {
        return path16;
      }
      if (visited.has(nodeId)) {
        continue;
      }
      visited.add(nodeId);
      const outgoingEdges = this.queries.getOutgoingEdges(
        nodeId,
        edgeKinds.length > 0 ? edgeKinds : void 0
      );
      for (const edge of outgoingEdges) {
        if (!visited.has(edge.target)) {
          const nextNode = this.queries.getNodeById(edge.target);
          if (nextNode) {
            queue.push({
              nodeId: edge.target,
              path: [...path16, { node: nextNode, edge }]
            });
          }
        }
      }
    }
    return null;
  }
  /**
   * Get the containment hierarchy for a node (ancestors)
   *
   * @param nodeId - ID of the node
   * @returns Array of ancestor nodes from immediate parent to root
   */
  getAncestors(nodeId) {
    const ancestors = [];
    const visited = /* @__PURE__ */ new Set();
    let currentId = nodeId;
    while (true) {
      if (visited.has(currentId)) {
        break;
      }
      visited.add(currentId);
      const containingEdges = this.queries.getIncomingEdges(currentId, ["contains"]);
      const firstEdge = containingEdges[0];
      if (!firstEdge) {
        break;
      }
      const parentNode = this.queries.getNodeById(firstEdge.source);
      if (parentNode) {
        ancestors.push(parentNode);
        currentId = parentNode.id;
      } else {
        break;
      }
    }
    return ancestors;
  }
  /**
   * Get immediate children of a node
   *
   * @param nodeId - ID of the node
   * @returns Array of child nodes
   */
  getChildren(nodeId) {
    const containsEdges = this.queries.getOutgoingEdges(nodeId, ["contains"]);
    const children = [];
    for (const edge of containsEdges) {
      const childNode = this.queries.getNodeById(edge.target);
      if (childNode) {
        children.push(childNode);
      }
    }
    return children;
  }
};

// src/graph/queries.ts
var GraphQueryManager = class {
  queries;
  traverser;
  constructor(queries) {
    this.queries = queries;
    this.traverser = new GraphTraverser(queries);
  }
  /**
   * Get full context for a node
   *
   * Returns the focal node along with its ancestors, children,
   * and both incoming and outgoing references.
   *
   * @param nodeId - ID of the focal node
   * @returns Context object with all related information
   */
  getContext(nodeId) {
    const focal = this.queries.getNodeById(nodeId);
    if (!focal) {
      throw new Error(`Node not found: ${nodeId}`);
    }
    const ancestors = this.traverser.getAncestors(nodeId);
    const children = this.traverser.getChildren(nodeId);
    const incomingEdges = this.queries.getIncomingEdges(nodeId);
    const incomingRefs = [];
    for (const edge of incomingEdges) {
      if (edge.kind === "contains") {
        continue;
      }
      const node = this.queries.getNodeById(edge.source);
      if (node) {
        incomingRefs.push({ node, edge });
      }
    }
    const outgoingEdges = this.queries.getOutgoingEdges(nodeId);
    const outgoingRefs = [];
    for (const edge of outgoingEdges) {
      if (edge.kind === "contains") {
        continue;
      }
      const node = this.queries.getNodeById(edge.target);
      if (node) {
        outgoingRefs.push({ node, edge });
      }
    }
    const types = [];
    const typeEdgeKinds = ["type_of", "returns"];
    for (const kind of typeEdgeKinds) {
      const typeEdges = this.queries.getOutgoingEdges(nodeId, [kind]);
      for (const edge of typeEdges) {
        const typeNode = this.queries.getNodeById(edge.target);
        if (typeNode && !types.some((t) => t.id === typeNode.id)) {
          types.push(typeNode);
        }
      }
    }
    const imports = [];
    const fileNode = ancestors.find((a) => a.kind === "file");
    if (fileNode) {
      const importEdges = this.queries.getOutgoingEdges(fileNode.id, ["imports"]);
      for (const edge of importEdges) {
        const importNode = this.queries.getNodeById(edge.target);
        if (importNode) {
          imports.push(importNode);
        }
      }
    }
    return {
      focal,
      ancestors,
      children,
      incomingRefs,
      outgoingRefs,
      types,
      imports
    };
  }
  /**
   * Get dependencies of a file
   *
   * Returns all files that this file imports from.
   *
   * @param filePath - Path to the file
   * @returns Array of file paths this file depends on
   */
  getFileDependencies(filePath) {
    const nodes = this.queries.getNodesByFile(filePath);
    const fileNode = nodes.find((n) => n.kind === "file");
    if (!fileNode) {
      return [];
    }
    const dependencies = /* @__PURE__ */ new Set();
    const importEdges = this.queries.getOutgoingEdges(fileNode.id, ["imports"]);
    for (const edge of importEdges) {
      const targetNode = this.queries.getNodeById(edge.target);
      if (targetNode && targetNode.filePath !== filePath) {
        dependencies.add(targetNode.filePath);
      }
    }
    return Array.from(dependencies);
  }
  /**
   * Get dependents of a file
   *
   * Returns all files that import from this file.
   *
   * @param filePath - Path to the file
   * @returns Array of file paths that depend on this file
   */
  getFileDependents(filePath) {
    const nodes = this.queries.getNodesByFile(filePath);
    const dependents = /* @__PURE__ */ new Set();
    const fileNode = nodes.find((n) => n.kind === "file");
    if (fileNode) {
      const incomingFileEdges = this.queries.getIncomingEdges(fileNode.id, ["imports"]);
      for (const edge of incomingFileEdges) {
        const sourceNode = this.queries.getNodeById(edge.source);
        if (sourceNode && sourceNode.filePath !== filePath) {
          dependents.add(sourceNode.filePath);
        }
      }
    }
    for (const node of nodes) {
      if (node.isExported) {
        const incomingEdges = this.queries.getIncomingEdges(node.id, ["imports"]);
        for (const edge of incomingEdges) {
          const sourceNode = this.queries.getNodeById(edge.source);
          if (sourceNode && sourceNode.filePath !== filePath) {
            dependents.add(sourceNode.filePath);
          }
        }
      }
    }
    return Array.from(dependents);
  }
  /**
   * Get all symbols exported by a file
   *
   * @param filePath - Path to the file
   * @returns Array of exported nodes
   */
  getExportedSymbols(filePath) {
    const nodes = this.queries.getNodesByFile(filePath);
    return nodes.filter((n) => n.isExported);
  }
  /**
   * Find symbols by qualified name pattern
   *
   * @param pattern - Pattern to match (supports * wildcard)
   * @returns Array of matching nodes
   */
  findByQualifiedName(pattern) {
    const regexPattern = pattern.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*").replace(/\?/g, ".");
    const regex = new RegExp(`^${regexPattern}$`);
    const allNodes = [];
    const kinds = [
      "class",
      "function",
      "method",
      "interface",
      "type_alias",
      "variable",
      "constant"
    ];
    for (const kind of kinds) {
      const nodes = this.queries.getNodesByKind(kind);
      for (const node of nodes) {
        if (regex.test(node.qualifiedName)) {
          allNodes.push(node);
        }
      }
    }
    return allNodes;
  }
  /**
   * Get the module/package structure
   *
   * Returns a tree structure of files organized by directory.
   *
   * @returns Map of directory paths to contained files
   */
  getModuleStructure() {
    const files = this.queries.getAllFiles();
    const structure = /* @__PURE__ */ new Map();
    for (const file of files) {
      const parts = file.path.split("/");
      const dir = parts.slice(0, -1).join("/") || ".";
      if (!structure.has(dir)) {
        structure.set(dir, []);
      }
      structure.get(dir).push(file.path);
    }
    return structure;
  }
  /**
   * Find circular dependencies in the graph
   *
   * @returns Array of cycles, each cycle is an array of node IDs
   */
  findCircularDependencies() {
    const files = this.queries.getAllFiles();
    const cycles = [];
    const visited = /* @__PURE__ */ new Set();
    const recursionStack = /* @__PURE__ */ new Set();
    const dfs = (filePath, path16) => {
      if (recursionStack.has(filePath)) {
        const cycleStart = path16.indexOf(filePath);
        if (cycleStart !== -1) {
          cycles.push(path16.slice(cycleStart));
        }
        return;
      }
      if (visited.has(filePath)) {
        return;
      }
      visited.add(filePath);
      recursionStack.add(filePath);
      const dependencies = this.getFileDependencies(filePath);
      for (const dep of dependencies) {
        dfs(dep, [...path16, filePath]);
      }
      recursionStack.delete(filePath);
    };
    for (const file of files) {
      if (!visited.has(file.path)) {
        dfs(file.path, []);
      }
    }
    return cycles;
  }
  /**
   * Get complexity metrics for a node
   *
   * @param nodeId - ID of the node
   * @returns Object containing various complexity metrics
   */
  getNodeMetrics(nodeId) {
    const incomingEdges = this.queries.getIncomingEdges(nodeId);
    const outgoingEdges = this.queries.getOutgoingEdges(nodeId);
    const callEdges = outgoingEdges.filter((e) => e.kind === "calls");
    const callerEdges = incomingEdges.filter((e) => e.kind === "calls");
    const containsEdges = outgoingEdges.filter((e) => e.kind === "contains");
    const ancestors = this.traverser.getAncestors(nodeId);
    return {
      incomingEdgeCount: incomingEdges.length,
      outgoingEdgeCount: outgoingEdges.length,
      callCount: callEdges.length,
      callerCount: callerEdges.length,
      childCount: containsEdges.length,
      depth: ancestors.length
    };
  }
  /**
   * Find dead code (nodes with no incoming references)
   *
   * @param kinds - Node kinds to check (default: functions, methods, classes)
   * @returns Array of unreferenced nodes
   */
  findDeadCode(kinds) {
    const targetKinds = kinds || ["function", "method", "class"];
    const deadCode = [];
    for (const kind of targetKinds) {
      const nodes = this.queries.getNodesByKind(kind);
      for (const node of nodes) {
        if (node.isExported) {
          continue;
        }
        const incomingEdges = this.queries.getIncomingEdges(node.id);
        const references = incomingEdges.filter((e) => e.kind !== "contains");
        if (references.length === 0) {
          deadCode.push(node);
        }
      }
    }
    return deadCode;
  }
  /**
   * Get subgraph containing nodes matching a filter
   *
   * @param filter - Filter function to select nodes
   * @param includeEdges - Whether to include edges between matching nodes
   * @returns Subgraph containing matching nodes
   */
  getFilteredSubgraph(filter, includeEdges = true) {
    const nodes = /* @__PURE__ */ new Map();
    const edges = [];
    const kinds = [
      "file",
      "module",
      "class",
      "struct",
      "interface",
      "trait",
      "function",
      "method",
      "variable",
      "constant",
      "enum",
      "type_alias"
    ];
    for (const kind of kinds) {
      const kindNodes = this.queries.getNodesByKind(kind);
      for (const node of kindNodes) {
        if (filter(node)) {
          nodes.set(node.id, node);
        }
      }
    }
    if (includeEdges) {
      for (const nodeId of nodes.keys()) {
        const outgoing = this.queries.getOutgoingEdges(nodeId);
        for (const edge of outgoing) {
          if (nodes.has(edge.target)) {
            edges.push(edge);
          }
        }
      }
    }
    return {
      nodes,
      edges,
      roots: []
    };
  }
  /**
   * Access the underlying traverser for direct traversal operations
   */
  getTraverser() {
    return this.traverser;
  }
};

// src/context/index.ts
var fs8 = __toESM(require("fs"));
var path12 = __toESM(require("path"));

// src/context/formatter.ts
function formatContextAsMarkdown(context) {
  const lines = [];
  lines.push("## Code Context\n");
  lines.push(`**Query:** ${context.query}
`);
  if (context.entryPoints.length > 0) {
    lines.push("### Entry Points\n");
    for (const node of context.entryPoints) {
      const location = node.startLine ? `:${node.startLine}` : "";
      lines.push(`- **${node.name}** (${node.kind}) - ${node.filePath}${location}`);
      if (node.signature) {
        lines.push(`  \`${node.signature}\``);
      }
    }
    lines.push("");
  }
  const otherSymbols = Array.from(context.subgraph.nodes.values()).filter((n) => !context.entryPoints.some((e) => e.id === n.id)).slice(0, 10);
  if (otherSymbols.length > 0) {
    lines.push("### Related Symbols\n");
    const byFile = /* @__PURE__ */ new Map();
    for (const node of otherSymbols) {
      const existing = byFile.get(node.filePath) || [];
      existing.push(node);
      byFile.set(node.filePath, existing);
    }
    for (const [file, nodes] of byFile) {
      const nodeList = nodes.map((n) => `${n.name}:${n.startLine}`).join(", ");
      lines.push(`- ${file}: ${nodeList}`);
    }
    lines.push("");
  }
  if (context.codeBlocks.length > 0) {
    lines.push("### Code\n");
    for (const block of context.codeBlocks) {
      const nodeName = block.node?.name ?? "Unknown";
      lines.push(`#### ${nodeName} (${block.filePath}:${block.startLine})
`);
      lines.push("```" + block.language);
      lines.push(block.content);
      lines.push("```\n");
    }
  }
  return lines.join("\n");
}
function formatContextAsJson(context) {
  const serializable = {
    query: context.query,
    summary: context.summary,
    entryPoints: context.entryPoints.map(serializeNode),
    nodes: Array.from(context.subgraph.nodes.values()).map(serializeNode),
    edges: context.subgraph.edges.map(serializeEdge),
    codeBlocks: context.codeBlocks.map((block) => ({
      filePath: block.filePath,
      startLine: block.startLine,
      endLine: block.endLine,
      language: block.language,
      content: block.content,
      nodeName: block.node?.name,
      nodeKind: block.node?.kind
    })),
    relatedFiles: context.relatedFiles,
    stats: context.stats
  };
  return JSON.stringify(serializable, null, 2);
}
function serializeNode(node) {
  return {
    id: node.id,
    kind: node.kind,
    name: node.name,
    qualifiedName: node.qualifiedName,
    filePath: node.filePath,
    language: node.language,
    startLine: node.startLine,
    endLine: node.endLine,
    signature: node.signature,
    docstring: node.docstring,
    visibility: node.visibility,
    isExported: node.isExported,
    isAsync: node.isAsync,
    isStatic: node.isStatic
  };
}
function serializeEdge(edge) {
  return {
    source: edge.source,
    target: edge.target,
    kind: edge.kind,
    line: edge.line,
    column: edge.column
  };
}

// src/context/index.ts
function extractSymbolsFromQuery(query) {
  const symbols = /* @__PURE__ */ new Set();
  const camelCasePattern = /\b([A-Z][a-z]+(?:[A-Z][a-z]*)*|[a-z]+(?:[A-Z][a-z]*)+)\b/g;
  let match;
  while ((match = camelCasePattern.exec(query)) !== null) {
    if (match[1] && match[1].length >= 2) {
      symbols.add(match[1]);
    }
  }
  const snakeCasePattern = /\b([a-z][a-z0-9]*(?:_[a-z0-9]+)+)\b/gi;
  while ((match = snakeCasePattern.exec(query)) !== null) {
    if (match[1] && match[1].length >= 3) {
      symbols.add(match[1]);
    }
  }
  const screamingPattern = /\b([A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+)\b/g;
  while ((match = screamingPattern.exec(query)) !== null) {
    if (match[1]) {
      symbols.add(match[1]);
    }
  }
  const acronymPattern = /\b([A-Z]{2,})\b/g;
  while ((match = acronymPattern.exec(query)) !== null) {
    if (match[1]) {
      symbols.add(match[1]);
    }
  }
  const dotPattern = /\b([a-zA-Z][a-zA-Z0-9]*(?:\.[a-zA-Z][a-zA-Z0-9]*)+)\b/g;
  while ((match = dotPattern.exec(query)) !== null) {
    if (match[1]) {
      symbols.add(match[1]);
      const parts = match[1].split(".");
      for (const part of parts) {
        if (part.length >= 2) {
          symbols.add(part);
        }
      }
    }
  }
  const lowercasePattern = /\b([a-z][a-z0-9]{2,})\b/g;
  while ((match = lowercasePattern.exec(query)) !== null) {
    if (match[1]) {
      symbols.add(match[1]);
    }
  }
  const commonWords = /* @__PURE__ */ new Set([
    "the",
    "and",
    "for",
    "with",
    "from",
    "this",
    "that",
    "have",
    "been",
    "will",
    "would",
    "could",
    "should",
    "does",
    "done",
    "make",
    "made",
    "use",
    "used",
    "using",
    "work",
    "works",
    "find",
    "found",
    "show",
    "call",
    "called",
    "calling",
    "get",
    "set",
    "add",
    "all",
    "any",
    "how",
    "what",
    "when",
    "where",
    "which",
    "who",
    "why",
    "not",
    "but",
    "are",
    "was",
    "were",
    "has",
    "had",
    "its",
    "can",
    "did",
    "may",
    "also",
    "into",
    "than",
    "then",
    "them",
    "each",
    "other",
    "some",
    "such",
    "only",
    "same",
    "about",
    "after",
    "before",
    "between",
    "through",
    "during",
    "without",
    "again",
    "further",
    "once",
    "here",
    "there",
    "both",
    "just",
    "more",
    "most",
    "very",
    "being",
    "having",
    "doing",
    "system",
    "need",
    "needs",
    "want",
    "wants",
    "like",
    "look",
    "change",
    "changes",
    "changed",
    "changing",
    // Common English nouns/verbs that match thousands of unrelated code symbols
    "layer",
    "handle",
    "handles",
    "handling",
    "incoming",
    "outgoing",
    "data",
    "flow",
    "flows",
    "level",
    "levels",
    "request",
    "requests",
    "response",
    "responses",
    "implement",
    "implements",
    "implementation",
    "interface",
    "interfaces",
    "class",
    "classes",
    "method",
    "methods",
    "trigger",
    "triggers",
    "affected",
    "affect",
    "affects",
    "else",
    "code",
    "failing",
    "failed",
    "silently",
    "decide",
    "decides",
    "return",
    "returns",
    "returned",
    "take",
    "takes",
    "taken",
    "check",
    "checks",
    "checked",
    "create",
    "creates",
    "created",
    "read",
    "reads",
    "write",
    "writes",
    "written",
    "start",
    "starts",
    "stop",
    "stops",
    "run",
    "runs",
    "running"
  ]);
  return Array.from(symbols).filter((s) => !commonWords.has(s.toLowerCase()));
}
var DEFAULT_BUILD_OPTIONS = {
  maxNodes: 20,
  // Reduced from 50 - most tasks don't need 50 symbols
  maxCodeBlocks: 5,
  // Reduced from 10 - only show most relevant code
  maxCodeBlockSize: 1500,
  // Reduced from 2000
  includeCode: true,
  format: "markdown",
  searchLimit: 3,
  // Reduced from 5 - fewer entry points
  traversalDepth: 1,
  // Reduced from 2 - shallower graph expansion
  minScore: 0.3
};
var HIGH_VALUE_NODE_KINDS = [
  "function",
  "method",
  "class",
  "interface",
  "type_alias",
  "struct",
  "trait",
  "component",
  "route",
  "variable",
  "constant",
  "enum",
  "module",
  "namespace"
];
var DEFAULT_FIND_OPTIONS = {
  searchLimit: 3,
  // Reduced from 5
  traversalDepth: 1,
  // Reduced from 2
  maxNodes: 20,
  // Reduced from 50
  minScore: 0.3,
  edgeKinds: [],
  nodeKinds: HIGH_VALUE_NODE_KINDS
  // Filter out imports/exports by default
};
var ContextBuilder = class {
  projectRoot;
  queries;
  traverser;
  constructor(projectRoot, queries, traverser) {
    this.projectRoot = projectRoot;
    this.queries = queries;
    this.traverser = traverser;
  }
  /**
   * Build context for a task
   *
   * Pipeline:
   * 1. Parse task input (string or {title, description})
   * 2. Run semantic search to find entry points
   * 3. Expand graph around entry points
   * 4. Extract code blocks for key nodes
   * 5. Format output for Claude
   *
   * @param input - Task description or object with title/description
   * @param options - Build options
   * @returns TaskContext (structured) or formatted string
   */
  async buildContext(input, options = {}) {
    const opts = { ...DEFAULT_BUILD_OPTIONS, ...options };
    const query = typeof input === "string" ? input : `${input.title}${input.description ? `: ${input.description}` : ""}`;
    const subgraph = await this.findRelevantContext(query, {
      searchLimit: opts.searchLimit,
      traversalDepth: opts.traversalDepth,
      maxNodes: opts.maxNodes,
      minScore: opts.minScore
    });
    const entryPoints = this.getEntryPoints(subgraph);
    const codeBlocks = opts.includeCode ? await this.extractCodeBlocks(subgraph, opts.maxCodeBlocks, opts.maxCodeBlockSize) : [];
    const relatedFiles = this.getRelatedFiles(subgraph);
    const summary = this.generateSummary(query, subgraph, entryPoints);
    const stats = {
      nodeCount: subgraph.nodes.size,
      edgeCount: subgraph.edges.length,
      fileCount: relatedFiles.length,
      codeBlockCount: codeBlocks.length,
      totalCodeSize: codeBlocks.reduce((sum, block) => sum + block.content.length, 0)
    };
    const context = {
      query,
      subgraph,
      entryPoints,
      codeBlocks,
      relatedFiles,
      summary,
      stats
    };
    if (opts.format === "markdown") {
      return formatContextAsMarkdown(context);
    } else if (opts.format === "json") {
      return formatContextAsJson(context);
    }
    return context;
  }
  /**
   * Find relevant subgraph for a query
   *
   * Uses hybrid search combining exact symbol lookup with semantic search:
   * 1. Extract potential symbol names from query
   * 2. Look up exact matches for those symbols (high confidence)
   * 3. Use semantic search for concept matching
   * 4. Merge results, prioritizing exact matches
   * 5. Traverse graph from entry points
   *
   * @param query - Natural language query
   * @param options - Search and traversal options
   * @returns Subgraph of relevant nodes and edges
   */
  async findRelevantContext(query, options = {}) {
    const opts = { ...DEFAULT_FIND_OPTIONS, ...options };
    const nodes = /* @__PURE__ */ new Map();
    const edges = [];
    const roots = [];
    if (!query || query.trim().length === 0) {
      return { nodes, edges, roots };
    }
    const symbolsFromQuery = extractSymbolsFromQuery(query);
    logDebug("Extracted symbols from query", { query, symbols: symbolsFromQuery });
    let exactMatches = [];
    if (symbolsFromQuery.length > 0) {
      try {
        exactMatches = this.queries.findNodesByExactName(symbolsFromQuery, {
          limit: Math.ceil(opts.searchLimit * 5),
          kinds: opts.nodeKinds && opts.nodeKinds.length > 0 ? opts.nodeKinds : void 0
        });
        if (exactMatches.length > 1) {
          const fileSymbolCounts = /* @__PURE__ */ new Map();
          for (const r of exactMatches) {
            const names = fileSymbolCounts.get(r.node.filePath) || /* @__PURE__ */ new Set();
            names.add(r.node.name.toLowerCase());
            fileSymbolCounts.set(r.node.filePath, names);
          }
          exactMatches = exactMatches.map((r) => {
            const symbolCount = fileSymbolCounts.get(r.node.filePath)?.size || 1;
            return {
              ...r,
              score: symbolCount > 1 ? r.score + (symbolCount - 1) * 20 : r.score
            };
          });
          exactMatches.sort((a, b) => b.score - a.score);
        }
        exactMatches = exactMatches.slice(0, Math.ceil(opts.searchLimit * 2));
        logDebug("Exact symbol matches", { count: exactMatches.length });
      } catch (error) {
        logDebug("Exact symbol lookup failed", { error: String(error) });
      }
    }
    if (symbolsFromQuery.length > 0) {
      const definitionKinds = [
        "class",
        "interface",
        "struct",
        "trait",
        "protocol",
        "enum",
        "type_alias"
      ];
      const expandedSymbols = new Set(symbolsFromQuery);
      for (const sym of symbolsFromQuery) {
        for (const variant of getStemVariants(sym)) {
          expandedSymbols.add(variant);
        }
      }
      for (const sym of expandedSymbols) {
        const titleCased = sym.charAt(0).toUpperCase() + sym.slice(1).toLowerCase();
        if (titleCased === sym) continue;
        const prefixResults = this.queries.searchNodes(titleCased, {
          limit: 30,
          kinds: definitionKinds
        });
        const matched = [];
        for (const r of prefixResults) {
          if (r.node.name.toLowerCase().startsWith(titleCased.toLowerCase())) {
            const brevityBonus = Math.max(0, 10 - (r.node.name.length - titleCased.length) / 3);
            matched.push({ ...r, score: r.score + 15 + brevityBonus });
          }
        }
        matched.sort((a, b) => b.score - a.score);
        for (const r of matched.slice(0, Math.ceil(opts.searchLimit))) {
          const existing = exactMatches.find((e) => e.node.id === r.node.id);
          if (!existing) {
            exactMatches.push(r);
          }
        }
      }
      exactMatches.sort((a, b) => b.score - a.score);
      exactMatches = exactMatches.slice(0, Math.ceil(opts.searchLimit * 3));
    }
    let textResults = [];
    try {
      const searchTerms = extractSearchTerms(query);
      if (searchTerms.length > 0) {
        const termResultsMap = /* @__PURE__ */ new Map();
        const searchKinds = opts.nodeKinds && opts.nodeKinds.length > 0 ? opts.nodeKinds : [
          "file",
          "module",
          "class",
          "struct",
          "interface",
          "trait",
          "protocol",
          "function",
          "method",
          "property",
          "field",
          "variable",
          "constant",
          "enum",
          "enum_member",
          "type_alias",
          "namespace",
          "export",
          "route",
          "component"
        ];
        for (const term of searchTerms) {
          const termResults = this.queries.searchNodes(term, {
            limit: opts.searchLimit * 2,
            kinds: searchKinds
          });
          for (const r of termResults) {
            const existing = termResultsMap.get(r.node.id);
            if (existing) {
              existing.termHits++;
              existing.result.score = Math.max(existing.result.score, r.score);
            } else {
              termResultsMap.set(r.node.id, { result: r, termHits: 1 });
            }
          }
        }
        textResults = Array.from(termResultsMap.values()).map(({ result, termHits }) => ({
          ...result,
          score: result.score + (termHits - 1) * 5
        })).sort((a, b) => b.score - a.score).slice(0, opts.searchLimit * 2);
      }
      logDebug("Text search results", { count: textResults.length });
    } catch (error) {
      logDebug("Text search failed", { query, error: String(error) });
    }
    const resultById = /* @__PURE__ */ new Map();
    let searchResults = [];
    for (const result of exactMatches) {
      const existing = resultById.get(result.node.id);
      if (existing) {
        existing.score = Math.max(existing.score, result.score);
      } else {
        resultById.set(result.node.id, result);
        searchResults.push(result);
      }
    }
    for (const result of textResults) {
      const existing = resultById.get(result.node.id);
      if (existing) {
        existing.score = Math.max(existing.score, result.score);
      } else {
        resultById.set(result.node.id, result);
        searchResults.push(result);
      }
    }
    const queryLower = query.toLowerCase();
    const isTestQuery = queryLower.includes("test") || queryLower.includes("spec");
    if (!isTestQuery) {
      for (const result of searchResults) {
        if (isTestFile(result.node.filePath)) {
          result.score *= 0.3;
        }
      }
    }
    const queryTermsForBoost = extractSearchTerms(query);
    if (queryTermsForBoost.length >= 2) {
      const termGroups = [];
      const sorted = [...queryTermsForBoost].sort((a, b) => b.length - a.length);
      const assigned = /* @__PURE__ */ new Set();
      for (const term of sorted) {
        if (assigned.has(term)) continue;
        const group = [term];
        assigned.add(term);
        for (const other of sorted) {
          if (assigned.has(other)) continue;
          if (term.includes(other) || other.includes(term)) {
            group.push(other);
            assigned.add(other);
          }
        }
        termGroups.push(group);
      }
      const exactMatchIds = new Set(exactMatches.map((r) => r.node.id));
      for (const result of searchResults) {
        const nameLower = result.node.name.toLowerCase();
        const dirSegments = path12.dirname(result.node.filePath).toLowerCase().split("/");
        let matchCount = 0;
        for (const group of termGroups) {
          const groupMatches = group.some((term) => {
            const inName = nameLower.includes(term);
            const inDir = dirSegments.some((seg) => seg === term);
            return inName || inDir;
          });
          if (groupMatches) matchCount++;
        }
        if (matchCount >= 2) {
          result.score *= 1 + matchCount * 0.5;
        } else if (!exactMatchIds.has(result.node.id)) {
          result.score *= 0.6;
        }
      }
      searchResults.sort((a, b) => b.score - a.score);
    }
    if (symbolsFromQuery.length > 0) {
      const camelDefinitionKinds = [
        "class",
        "interface",
        "struct",
        "trait",
        "protocol",
        "enum",
        "type_alias"
      ];
      const camelSearchedTerms = /* @__PURE__ */ new Set();
      const searchIdSet = new Set(searchResults.map((r) => r.node.id));
      const camelNodeTerms = /* @__PURE__ */ new Map();
      const maxCamelPerTerm = Math.ceil(opts.searchLimit / 2);
      for (const sym of symbolsFromQuery) {
        const titleCased = sym.charAt(0).toUpperCase() + sym.slice(1).toLowerCase();
        if (titleCased.length < 3) continue;
        const termKey = titleCased.toLowerCase();
        if (camelSearchedTerms.has(termKey)) continue;
        camelSearchedTerms.add(termKey);
        const likeResults = this.queries.findNodesByNameSubstring(titleCased, {
          limit: 200,
          kinds: camelDefinitionKinds,
          excludePrefix: true
        });
        const termCandidates = [];
        for (const r of likeResults) {
          const name = r.node.name;
          const idx = name.indexOf(titleCased);
          if (idx <= 0) continue;
          if (!/[a-zA-Z]/.test(name.charAt(idx - 1))) continue;
          if (searchIdSet.has(r.node.id)) continue;
          if (isTestFile(r.node.filePath) && !isTestQuery) continue;
          const pathScore = scorePathRelevance(r.node.filePath, query);
          const brevityBonus = Math.max(0, 6 - (name.length - titleCased.length) / 4);
          termCandidates.push({ node: r.node, score: 8 + brevityBonus + pathScore });
        }
        termCandidates.sort((a, b) => b.score - a.score);
        const accumPerTerm = maxCamelPerTerm * 4;
        for (const r of termCandidates.slice(0, accumPerTerm)) {
          const existing = camelNodeTerms.get(r.node.id);
          if (existing) {
            existing.termCount++;
          } else {
            camelNodeTerms.set(r.node.id, {
              result: r,
              termCount: 1
            });
          }
        }
      }
      const camelResults = [];
      for (const [, info] of camelNodeTerms) {
        info.result.score = info.result.score * (1 + info.termCount) + (info.termCount - 1) * 30;
        camelResults.push(info.result);
      }
      camelResults.sort((a, b) => b.score - a.score);
      const maxCamelTotal = opts.searchLimit;
      for (const r of camelResults.slice(0, maxCamelTotal)) {
        searchResults.push(r);
        searchIdSet.add(r.node.id);
      }
      if (symbolsFromQuery.length >= 2) {
        const compoundTermMap = /* @__PURE__ */ new Map();
        for (const sym of symbolsFromQuery) {
          const titleCased = sym.charAt(0).toUpperCase() + sym.slice(1).toLowerCase();
          if (titleCased.length < 3) continue;
          const likeResults = this.queries.findNodesByNameSubstring(titleCased, {
            limit: 200,
            kinds: camelDefinitionKinds,
            excludePrefix: false
          });
          for (const r of likeResults) {
            if (searchIdSet.has(r.node.id)) continue;
            if (isTestFile(r.node.filePath) && !isTestQuery) continue;
            const entry = compoundTermMap.get(r.node.id);
            if (entry) {
              entry.terms.add(titleCased);
            } else {
              compoundTermMap.set(r.node.id, { node: r.node, terms: /* @__PURE__ */ new Set([titleCased]) });
            }
          }
        }
        const compoundResults = [];
        for (const [, entry] of compoundTermMap) {
          if (entry.terms.size >= 2) {
            const pathScore = scorePathRelevance(entry.node.filePath, query);
            const brevityBonus = Math.max(0, 6 - entry.node.name.length / 8);
            compoundResults.push({
              node: entry.node,
              score: 10 + (entry.terms.size - 1) * 20 + pathScore + brevityBonus
            });
          }
        }
        compoundResults.sort((a, b) => b.score - a.score);
        const maxCompound = Math.ceil(opts.searchLimit / 2);
        for (const r of compoundResults.slice(0, maxCompound)) {
          searchResults.push(r);
          searchIdSet.add(r.node.id);
        }
      }
    }
    searchResults.sort((a, b) => b.score - a.score);
    searchResults = searchResults.slice(0, opts.searchLimit * 3);
    let filteredResults = searchResults.filter((r) => r.score >= opts.minScore);
    filteredResults = this.resolveImportsToDefinitions(filteredResults);
    if (filteredResults.length > opts.searchLimit) {
      filteredResults = filteredResults.slice(0, opts.searchLimit);
    }
    for (const result of filteredResults) {
      nodes.set(result.node.id, result.node);
      roots.push(result.node.id);
    }
    const typeHierarchyKinds = /* @__PURE__ */ new Set(["class", "interface", "struct", "trait", "protocol"]);
    const maxHierarchyNodes = Math.ceil(opts.maxNodes / 4);
    let hierarchyNodesAdded = 0;
    for (const result of filteredResults) {
      if (hierarchyNodesAdded >= maxHierarchyNodes) break;
      if (typeHierarchyKinds.has(result.node.kind)) {
        const hierarchy = this.traverser.getTypeHierarchy(result.node.id);
        for (const [id, node] of hierarchy.nodes) {
          if (!nodes.has(id)) {
            nodes.set(id, node);
            hierarchyNodesAdded++;
          }
        }
        for (const edge of hierarchy.edges) {
          const exists = edges.some(
            (e) => e.source === edge.source && e.target === edge.target && e.kind === edge.kind
          );
          if (!exists) {
            edges.push(edge);
          }
        }
      }
    }
    if (hierarchyNodesAdded > 0) {
      const pass2Candidates = [...nodes.values()].filter(
        (n) => typeHierarchyKinds.has(n.kind) && !roots.includes(n.id)
      );
      for (const candidate of pass2Candidates) {
        if (hierarchyNodesAdded >= maxHierarchyNodes) break;
        const siblingHierarchy = this.traverser.getTypeHierarchy(candidate.id);
        for (const [id, node] of siblingHierarchy.nodes) {
          if (!nodes.has(id) && hierarchyNodesAdded < maxHierarchyNodes) {
            nodes.set(id, node);
            hierarchyNodesAdded++;
          }
        }
        for (const edge of siblingHierarchy.edges) {
          if (nodes.has(edge.source) && nodes.has(edge.target)) {
            const exists = edges.some(
              (e) => e.source === edge.source && e.target === edge.target && e.kind === edge.kind
            );
            if (!exists) {
              edges.push(edge);
            }
          }
        }
      }
    }
    for (const result of filteredResults) {
      const traversalResult = this.traverser.traverseBFS(result.node.id, {
        maxDepth: opts.traversalDepth,
        edgeKinds: opts.edgeKinds && opts.edgeKinds.length > 0 ? opts.edgeKinds : void 0,
        nodeKinds: opts.nodeKinds && opts.nodeKinds.length > 0 ? opts.nodeKinds : void 0,
        direction: "both",
        limit: Math.ceil(opts.maxNodes / Math.max(1, filteredResults.length))
      });
      for (const [id, node] of traversalResult.nodes) {
        if (!nodes.has(id)) {
          nodes.set(id, node);
        }
      }
      for (const edge of traversalResult.edges) {
        const exists = edges.some(
          (e) => e.source === edge.source && e.target === edge.target && e.kind === edge.kind
        );
        if (!exists) {
          edges.push(edge);
        }
      }
    }
    let finalNodes = nodes;
    let finalEdges = edges;
    if (nodes.size > opts.maxNodes) {
      const priorityIds = new Set(roots);
      for (const edge of edges) {
        if (priorityIds.has(edge.source)) {
          priorityIds.add(edge.target);
        }
        if (priorityIds.has(edge.target)) {
          priorityIds.add(edge.source);
        }
      }
      finalNodes = /* @__PURE__ */ new Map();
      for (const id of priorityIds) {
        const node = nodes.get(id);
        if (node && finalNodes.size < opts.maxNodes) {
          finalNodes.set(id, node);
        }
      }
      for (const [id, node] of nodes) {
        if (finalNodes.size >= opts.maxNodes) break;
        if (!finalNodes.has(id)) {
          finalNodes.set(id, node);
        }
      }
      finalEdges = edges.filter(
        (e) => finalNodes.has(e.source) && finalNodes.has(e.target)
      );
    }
    const maxPerFile = Math.max(5, Math.ceil(opts.maxNodes * 0.2));
    const fileCounts = /* @__PURE__ */ new Map();
    for (const [id, node] of finalNodes) {
      const ids = fileCounts.get(node.filePath) || [];
      ids.push(id);
      fileCounts.set(node.filePath, ids);
    }
    const rootSet = new Set(roots);
    for (const [, nodeIds] of fileCounts) {
      if (nodeIds.length <= maxPerFile) continue;
      const kindPriority = {
        class: 3,
        interface: 3,
        struct: 3,
        trait: 3,
        protocol: 3,
        enum: 3,
        method: 1,
        function: 1,
        property: 0,
        field: 0,
        variable: 0
      };
      nodeIds.sort((a, b) => {
        const aRoot = rootSet.has(a) ? 10 : 0;
        const bRoot = rootSet.has(b) ? 10 : 0;
        const aKind = kindPriority[finalNodes.get(a).kind] ?? 0;
        const bKind = kindPriority[finalNodes.get(b).kind] ?? 0;
        return bRoot + bKind - (aRoot + aKind);
      });
      for (const id of nodeIds.slice(maxPerFile)) {
        finalNodes.delete(id);
      }
    }
    if (!isTestQuery) {
      const maxNonProd = Math.max(3, Math.ceil(opts.maxNodes * 0.15));
      const nonProdIds = [];
      for (const [id, node] of finalNodes) {
        if (isTestFile(node.filePath)) {
          nonProdIds.push(id);
        }
      }
      if (nonProdIds.length > maxNonProd) {
        for (const id of nonProdIds.slice(maxNonProd)) {
          finalNodes.delete(id);
          const rootIdx = roots.indexOf(id);
          if (rootIdx !== -1) roots.splice(rootIdx, 1);
        }
      }
    }
    finalEdges = finalEdges.filter(
      (e) => finalNodes.has(e.source) && finalNodes.has(e.target)
    );
    const recoveryKinds = ["calls", "extends", "implements", "references", "overrides"];
    const recoveredEdges = this.queries.findEdgesBetweenNodes(
      [...finalNodes.keys()],
      recoveryKinds
    );
    const existingEdgeKeys = new Set(
      finalEdges.map((e) => `${e.source}:${e.target}:${e.kind}`)
    );
    for (const edge of recoveredEdges) {
      const key = `${edge.source}:${edge.target}:${edge.kind}`;
      if (!existingEdgeKeys.has(key)) {
        finalEdges.push(edge);
        existingEdgeKeys.add(key);
      }
    }
    return { nodes: finalNodes, edges: finalEdges, roots };
  }
  /**
   * Get the source code for a node
   *
   * Reads the file and extracts the code between startLine and endLine.
   *
   * @param nodeId - ID of the node
   * @returns Code string or null if not found
   */
  async getCode(nodeId) {
    const node = this.queries.getNodeById(nodeId);
    if (!node) {
      return null;
    }
    return this.extractNodeCode(node);
  }
  /**
   * Extract code from a node's source file
   */
  async extractNodeCode(node) {
    const filePath = validatePathWithinRoot(this.projectRoot, node.filePath);
    if (!filePath || !fs8.existsSync(filePath)) {
      return null;
    }
    try {
      const content = fs8.readFileSync(filePath, "utf-8");
      const lines = content.split("\n");
      const startIdx = Math.max(0, node.startLine - 1);
      const endIdx = Math.min(lines.length, node.endLine);
      return lines.slice(startIdx, endIdx).join("\n");
    } catch (error) {
      logDebug("Failed to extract code from node", { nodeId: node.id, filePath: node.filePath, error: String(error) });
      return null;
    }
  }
  /**
   * Get entry points from a subgraph (the root nodes)
   */
  getEntryPoints(subgraph) {
    return subgraph.roots.map((id) => subgraph.nodes.get(id)).filter((n) => n !== void 0);
  }
  /**
   * Extract code blocks for key nodes in the subgraph
   */
  async extractCodeBlocks(subgraph, maxBlocks, maxBlockSize) {
    const blocks = [];
    const priorityNodes = [];
    for (const id of subgraph.roots) {
      const node = subgraph.nodes.get(id);
      if (node) {
        priorityNodes.push(node);
      }
    }
    for (const node of subgraph.nodes.values()) {
      if (!subgraph.roots.includes(node.id)) {
        if (node.kind === "function" || node.kind === "method") {
          priorityNodes.push(node);
        }
      }
    }
    for (const node of subgraph.nodes.values()) {
      if (!subgraph.roots.includes(node.id)) {
        if (node.kind === "class") {
          priorityNodes.push(node);
        }
      }
    }
    for (const node of priorityNodes) {
      if (blocks.length >= maxBlocks) break;
      const code = await this.extractNodeCode(node);
      if (code) {
        const truncated = code.length > maxBlockSize ? code.slice(0, maxBlockSize) + "\n// ... truncated ..." : code;
        blocks.push({
          content: truncated,
          filePath: node.filePath,
          startLine: node.startLine,
          endLine: node.endLine,
          language: node.language,
          node
        });
      }
    }
    return blocks;
  }
  /**
   * Get unique files from a subgraph
   */
  getRelatedFiles(subgraph) {
    const files = /* @__PURE__ */ new Set();
    for (const node of subgraph.nodes.values()) {
      files.add(node.filePath);
    }
    return Array.from(files).sort();
  }
  /**
   * Generate a summary of the context
   */
  generateSummary(_query, subgraph, entryPoints) {
    const nodeCount = subgraph.nodes.size;
    const edgeCount = subgraph.edges.length;
    const files = this.getRelatedFiles(subgraph);
    const entryPointNames = entryPoints.slice(0, 3).map((n) => n.name).join(", ");
    const remaining = entryPoints.length > 3 ? ` and ${entryPoints.length - 3} more` : "";
    return `Found ${nodeCount} relevant code symbols across ${files.length} files. Key entry points: ${entryPointNames}${remaining}. ${edgeCount} relationships identified.`;
  }
  /**
   * Resolve import/export nodes to their actual definitions
   *
   * When search returns `import { TerminalPanel }`, users want the TerminalPanel
   * class definition, not the import statement. This follows the `imports` edge
   * to find and return the actual definition instead.
   *
   * @param results - Search results that may include import/export nodes
   * @returns Results with imports resolved to definitions where possible
   */
  resolveImportsToDefinitions(results) {
    const resolved = [];
    const seenIds = /* @__PURE__ */ new Set();
    for (const result of results) {
      const { node, score } = result;
      if (node.kind !== "import" && node.kind !== "export") {
        if (!seenIds.has(node.id)) {
          seenIds.add(node.id);
          resolved.push(result);
        }
        continue;
      }
      const edgeKind = node.kind === "import" ? "imports" : "exports";
      const outgoingEdges = this.queries.getOutgoingEdges(node.id, [edgeKind]);
      let foundDefinition = false;
      for (const edge of outgoingEdges) {
        const targetNode = this.queries.getNodeById(edge.target);
        if (targetNode && !seenIds.has(targetNode.id)) {
          seenIds.add(targetNode.id);
          resolved.push({
            node: targetNode,
            score
            // Preserve the original score
          });
          foundDefinition = true;
          logDebug("Resolved import to definition", {
            import: node.name,
            definition: targetNode.name,
            kind: targetNode.kind
          });
        }
      }
      if (!foundDefinition) {
        logDebug("Skipping unresolved import", { name: node.name, file: node.filePath });
      }
    }
    return resolved;
  }
};
function createContextBuilder(projectRoot, queries, traverser) {
  return new ContextBuilder(projectRoot, queries, traverser);
}

// src/sync/watcher.ts
var fs9 = __toESM(require("fs"));
var FileWatcher = class {
  watcher = null;
  debounceTimer = null;
  hasChanges = false;
  syncing = false;
  stopped = false;
  projectRoot;
  config;
  debounceMs;
  syncFn;
  onSyncComplete;
  onSyncError;
  constructor(projectRoot, config, syncFn, options = {}) {
    this.projectRoot = projectRoot;
    this.config = config;
    this.syncFn = syncFn;
    this.debounceMs = options.debounceMs ?? 2e3;
    this.onSyncComplete = options.onSyncComplete;
    this.onSyncError = options.onSyncError;
  }
  /**
   * Start watching for file changes.
   * Returns true if watching started successfully, false otherwise.
   */
  start() {
    if (this.watcher) return true;
    this.stopped = false;
    try {
      this.watcher = fs9.watch(
        this.projectRoot,
        { recursive: true },
        (_eventType, filename) => {
          if (!filename || this.stopped) return;
          const normalized = normalizePath(filename);
          if (normalized === ".codegraph" || normalized.startsWith(".codegraph/") || normalized.startsWith(".codegraph\\")) {
            return;
          }
          if (!shouldIncludeFile(normalized, this.config)) {
            return;
          }
          logDebug("File change detected", { file: normalized });
          this.hasChanges = true;
          this.scheduleSync();
        }
      );
      this.watcher.on("error", (err) => {
        logWarn("File watcher error", { error: String(err) });
      });
      logDebug("File watcher started", { projectRoot: this.projectRoot, debounceMs: this.debounceMs });
      return true;
    } catch (err) {
      logWarn("Could not start file watcher \u2014 recursive fs.watch not supported on this platform", { error: String(err) });
      return false;
    }
  }
  /**
   * Stop watching for file changes.
   */
  stop() {
    this.stopped = true;
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = null;
    }
    if (this.watcher) {
      this.watcher.close();
      this.watcher = null;
    }
    this.hasChanges = false;
    logDebug("File watcher stopped");
  }
  /**
   * Whether the watcher is currently active.
   */
  isActive() {
    return this.watcher !== null && !this.stopped;
  }
  /**
   * Schedule a debounced sync.
   */
  scheduleSync() {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    this.debounceTimer = setTimeout(() => {
      this.debounceTimer = null;
      this.flush();
    }, this.debounceMs);
  }
  /**
   * Flush pending changes by running sync.
   */
  async flush() {
    if (this.syncing || this.stopped) return;
    this.hasChanges = false;
    this.syncing = true;
    try {
      const result = await this.syncFn();
      this.onSyncComplete?.(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      logWarn("Watch sync failed", { error: error.message });
      this.onSyncError?.(error);
    } finally {
      this.syncing = false;
      if (this.hasChanges && !this.stopped) {
        this.scheduleSync();
      }
    }
  }
};

// src/projects.ts
var fs10 = __toESM(require("fs"));
var path13 = __toESM(require("path"));
var PROJECTS_FILENAME = "projects.json";
function nameFromPath(relPath) {
  const segments = relPath.replace(/\\/g, "/").split("/").filter(Boolean);
  return segments[segments.length - 1] ?? relPath;
}
function parseEntry(raw) {
  if (typeof raw === "string" && raw) {
    return { name: nameFromPath(raw), path: raw };
  }
  if (raw && typeof raw === "object") {
    const obj = raw;
    const p = typeof obj.path === "string" ? obj.path : null;
    if (!p) return null;
    const n = typeof obj.name === "string" && obj.name ? obj.name : nameFromPath(p);
    return { name: n, path: p };
  }
  return null;
}
function getProjectsPath(projectRoot) {
  return path13.join(projectRoot, CODEGRAPH_DIR, PROJECTS_FILENAME);
}
function loadProjectEntries(projectRoot) {
  const filePath = getProjectsPath(projectRoot);
  try {
    if (!fs10.existsSync(filePath)) return [];
    const content = fs10.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(content);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(parseEntry).filter((e) => e !== null);
  } catch (err) {
    process.stderr.write(
      `[CodeGraph] Failed to load projects.json: ${err instanceof Error ? err.message : String(err)}
`
    );
    return [];
  }
}
function loadProjects(projectRoot) {
  return loadProjectEntries(projectRoot).map((e) => e.path);
}
function saveProjects(projectRoot, entries) {
  const filePath = getProjectsPath(projectRoot);
  const dir = path13.dirname(filePath);
  if (!fs10.existsSync(dir)) {
    fs10.mkdirSync(dir, { recursive: true });
  }
  const byPath = /* @__PURE__ */ new Map();
  for (const e of entries) byPath.set(e.path, e);
  const unique = [...byPath.values()].sort((a, b) => a.name.localeCompare(b.name));
  const content = JSON.stringify(unique, null, 2);
  const tmpPath = filePath + ".tmp";
  fs10.writeFileSync(tmpPath, content, "utf-8");
  fs10.renameSync(tmpPath, filePath);
}
function addProject(projectRoot, projectPath, name) {
  const entries = loadProjectEntries(projectRoot);
  const resolvedName = name || nameFromPath(projectPath);
  const existing = entries.findIndex((e) => e.path === projectPath);
  if (existing >= 0) {
    entries[existing] = { name: resolvedName, path: projectPath };
  } else {
    entries.push({ name: resolvedName, path: projectPath });
  }
  saveProjects(projectRoot, entries);
  return entries;
}
function removeProject(projectRoot, pathOrName) {
  const entries = loadProjectEntries(projectRoot).filter(
    (e) => e.path !== pathOrName && e.name !== pathOrName
  );
  saveProjects(projectRoot, entries);
  return entries;
}
var SCAN_SKIP_DIRS = /* @__PURE__ */ new Set([".codegraph", ".git", "node_modules"]);
function scanForProjects(root, maxDepth = 3) {
  const results = [];
  const queue = [[root, 0]];
  while (queue.length > 0) {
    const [currentDir, depth] = queue.shift();
    if (depth > 0 && isInitialized(currentDir)) {
      const relPath = path13.relative(root, currentDir).replace(/\\/g, "/");
      results.push({ name: nameFromPath(relPath), path: relPath });
    }
    if (depth > maxDepth) continue;
    try {
      const dirEntries = fs10.readdirSync(currentDir, { withFileTypes: true });
      for (const entry of dirEntries) {
        if (entry.isDirectory() && !SCAN_SKIP_DIRS.has(entry.name)) {
          queue.push([path13.join(currentDir, entry.name), depth + 1]);
        }
      }
    } catch {
    }
  }
  const byPath = /* @__PURE__ */ new Map();
  for (const e of results) byPath.set(e.path, e);
  return [...byPath.values()].sort((a, b) => a.name.localeCompare(b.name));
}
function findNearestMonorepoRoot(startPath) {
  let current = path13.resolve(startPath);
  const fsRoot = path13.parse(current).root;
  while (current !== fsRoot) {
    if (loadProjectEntries(current).length > 0) return current;
    const parent = path13.dirname(current);
    if (parent === current) break;
    current = parent;
  }
  if (loadProjectEntries(current).length > 0) return current;
  return null;
}
function syncProjects(root, maxDepth) {
  const existing = loadProjectEntries(root);
  const discovered = scanForProjects(root, maxDepth);
  const byPath = /* @__PURE__ */ new Map();
  for (const e of discovered) byPath.set(e.path, e);
  for (const e of existing) byPath.set(e.path, e);
  const merged = [...byPath.values()].sort((a, b) => a.name.localeCompare(b.name));
  saveProjects(root, merged);
  return merged;
}

// src/mcp/index.ts
var path14 = __toESM(require("path"));

// src/mcp/transport.ts
var readline = __toESM(require("readline"));
var ErrorCodes = {
  ParseError: -32700,
  InvalidRequest: -32600,
  MethodNotFound: -32601,
  InvalidParams: -32602,
  InternalError: -32603
};
var StdioTransport = class {
  rl = null;
  messageHandler = null;
  /**
   * Start listening for messages on stdin
   */
  start(handler) {
    this.messageHandler = handler;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });
    this.rl.on("line", async (line) => {
      await this.handleLine(line);
    });
    this.rl.on("close", () => {
      process.exit(0);
    });
  }
  /**
   * Stop listening
   */
  stop() {
    if (this.rl) {
      this.rl.close();
      this.rl = null;
    }
  }
  /**
   * Send a response
   */
  send(response) {
    const json = JSON.stringify(response);
    process.stdout.write(json + "\n");
  }
  /**
   * Send a notification (no id)
   */
  notify(method, params) {
    const notification = {
      jsonrpc: "2.0",
      method,
      params
    };
    process.stdout.write(JSON.stringify(notification) + "\n");
  }
  /**
   * Send a success response
   */
  sendResult(id, result) {
    this.send({
      jsonrpc: "2.0",
      id,
      result
    });
  }
  /**
   * Send an error response
   */
  sendError(id, code, message, data) {
    this.send({
      jsonrpc: "2.0",
      id,
      error: { code, message, data }
    });
  }
  /**
   * Handle an incoming line of JSON
   */
  async handleLine(line) {
    const trimmed = line.trim();
    if (!trimmed) return;
    let parsed;
    try {
      parsed = JSON.parse(trimmed);
    } catch {
      this.sendError(null, ErrorCodes.ParseError, "Parse error: invalid JSON");
      return;
    }
    if (!this.isValidMessage(parsed)) {
      this.sendError(null, ErrorCodes.InvalidRequest, "Invalid Request: not a valid JSON-RPC 2.0 message");
      return;
    }
    if (this.messageHandler) {
      try {
        await this.messageHandler(parsed);
      } catch (err) {
        const message = parsed;
        if ("id" in message) {
          this.sendError(
            message.id,
            ErrorCodes.InternalError,
            `Internal error: ${err instanceof Error ? err.message : String(err)}`
          );
        }
      }
    }
  }
  /**
   * Check if message is a valid JSON-RPC 2.0 message
   */
  isValidMessage(msg) {
    if (typeof msg !== "object" || msg === null) return false;
    const obj = msg;
    if (obj.jsonrpc !== "2.0") return false;
    if (typeof obj.method !== "string") return false;
    return true;
  }
};

// src/mcp/tools.ts
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_os = require("os");
var import_path = require("path");
var MAX_OUTPUT_LENGTH = 15e3;
function getExploreBudget(fileCount) {
  if (fileCount < 500) return 1;
  if (fileCount < 5e3) return 2;
  if (fileCount < 15e3) return 3;
  if (fileCount < 25e3) return 4;
  return 5;
}
function markSessionConsulted(sessionId) {
  try {
    const hash = (0, import_crypto.createHash)("md5").update(sessionId).digest("hex").slice(0, 16);
    const markerPath = (0, import_path.join)((0, import_os.tmpdir)(), `codegraph-consulted-${hash}`);
    (0, import_fs.writeFileSync)(markerPath, (/* @__PURE__ */ new Date()).toISOString(), "utf8");
  } catch {
  }
}
var projectPathProperty = {
  type: "string",
  description: "Path to a different project with .codegraph/ initialized. If omitted, uses current project. Use this to query other codebases."
};
var projectProperty = {
  type: "string",
  description: 'Registered sub-project name (e.g. "packages/foo") or "*" for all projects. Uses root project if omitted.'
};
var tools = [
  {
    name: "codegraph_search",
    description: "Quick symbol search by name. Returns locations only (no code). Use codegraph_context instead for comprehensive task context.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: 'Symbol name or partial name (e.g., "auth", "signIn", "UserService")'
        },
        kind: {
          type: "string",
          description: "Filter by node kind",
          enum: ["function", "method", "class", "interface", "type", "variable", "route", "component"]
        },
        limit: {
          type: "number",
          description: "Maximum results (default: 10)",
          default: 10
        },
        projectPath: projectPathProperty,
        project: projectProperty
      },
      required: ["query"]
    }
  },
  {
    name: "codegraph_context",
    description: "PRIMARY TOOL: Build comprehensive context for a task. Returns entry points, related symbols, and key code - often enough to understand the codebase without additional tool calls. NOTE: This provides CODE context, not product requirements. For new features, still clarify UX/behavior questions with the user before implementing.",
    inputSchema: {
      type: "object",
      properties: {
        task: {
          type: "string",
          description: "Description of the task, bug, or feature to build context for"
        },
        maxNodes: {
          type: "number",
          description: "Maximum symbols to include (default: 20)",
          default: 20
        },
        includeCode: {
          type: "boolean",
          description: "Include code snippets for key symbols (default: true)",
          default: true
        },
        projectPath: projectPathProperty,
        project: projectProperty
      },
      required: ["task"]
    }
  },
  {
    name: "codegraph_callers",
    description: "Find all functions/methods that call a specific symbol. Useful for understanding usage patterns and impact of changes.",
    inputSchema: {
      type: "object",
      properties: {
        symbol: {
          type: "string",
          description: "Name of the function, method, or class to find callers for"
        },
        limit: {
          type: "number",
          description: "Maximum number of callers to return (default: 20)",
          default: 20
        },
        projectPath: projectPathProperty,
        project: projectProperty
      },
      required: ["symbol"]
    }
  },
  {
    name: "codegraph_callees",
    description: "Find all functions/methods that a specific symbol calls. Useful for understanding dependencies and code flow.",
    inputSchema: {
      type: "object",
      properties: {
        symbol: {
          type: "string",
          description: "Name of the function, method, or class to find callees for"
        },
        limit: {
          type: "number",
          description: "Maximum number of callees to return (default: 20)",
          default: 20
        },
        projectPath: projectPathProperty,
        project: projectProperty
      },
      required: ["symbol"]
    }
  },
  {
    name: "codegraph_impact",
    description: "Analyze the impact radius of changing a symbol. Shows what code could be affected by modifications.",
    inputSchema: {
      type: "object",
      properties: {
        symbol: {
          type: "string",
          description: "Name of the symbol to analyze impact for"
        },
        depth: {
          type: "number",
          description: "How many levels of dependencies to traverse (default: 2)",
          default: 2
        },
        projectPath: projectPathProperty,
        project: projectProperty
      },
      required: ["symbol"]
    }
  },
  {
    name: "codegraph_node",
    description: "Get detailed information about a specific code symbol. Use includeCode=true only when you need the full source code - otherwise just get location and signature to minimize context usage.",
    inputSchema: {
      type: "object",
      properties: {
        symbol: {
          type: "string",
          description: "Name of the symbol to get details for"
        },
        includeCode: {
          type: "boolean",
          description: "Include full source code (default: false to minimize context)",
          default: false
        },
        projectPath: projectPathProperty,
        project: projectProperty
      },
      required: ["symbol"]
    }
  },
  {
    name: "codegraph_explore",
    description: 'Deep exploration tool \u2014 returns comprehensive context for a topic in a SINGLE call. Groups all relevant source code by file (contiguous sections, not snippets), includes a relationship map, and uses deeper graph traversal. Designed to replace multiple codegraph_node + file Read calls. Use this instead of codegraph_context when you need thorough understanding. IMPORTANT: Use specific symbol names, file names, or short code terms in your query \u2014 NOT natural language sentences. Before calling this, use codegraph_search to discover relevant symbol names, then include those names in your query. Bad: "how are agent prompts loaded and passed to the CLI". Good: "readAgentsFromDirectory createClaudeSession chat-manager agents.ts".',
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: 'Symbol names, file names, or short code terms to explore (e.g., "AuthService loginUser session-manager", "GraphTraverser BFS impact traversal.ts"). Use codegraph_search first to find relevant names.'
        },
        maxFiles: {
          type: "number",
          description: "Maximum number of files to include source code from (default: 12)",
          default: 12
        },
        projectPath: projectPathProperty,
        project: projectProperty
      },
      required: ["query"]
    }
  },
  {
    name: "codegraph_status",
    description: "Get the status of the CodeGraph index, including statistics about indexed files, nodes, and edges.",
    inputSchema: {
      type: "object",
      properties: {
        projectPath: projectPathProperty,
        project: projectProperty
      }
    }
  },
  {
    name: "codegraph_files",
    description: "REQUIRED for file/folder exploration. Get the project file structure from the CodeGraph index. Returns a tree view of all indexed files with metadata (language, symbol count). Much faster than Glob/filesystem scanning. Use this FIRST when exploring project structure, finding files, or understanding codebase organization.",
    inputSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: 'Filter to files under this directory path (e.g., "src/components"). Returns all files if not specified.'
        },
        pattern: {
          type: "string",
          description: 'Filter files matching this glob pattern (e.g., "*.tsx", "**/*.test.ts")'
        },
        format: {
          type: "string",
          description: 'Output format: "tree" (hierarchical, default), "flat" (simple list), "grouped" (by language)',
          enum: ["tree", "flat", "grouped"],
          default: "tree"
        },
        includeMetadata: {
          type: "boolean",
          description: "Include file metadata like language and symbol count (default: true)",
          default: true
        },
        maxDepth: {
          type: "number",
          description: "Maximum directory depth to show (default: unlimited)"
        },
        projectPath: projectPathProperty,
        project: projectProperty
      }
    }
  },
  {
    name: "codegraph_projects",
    description: "List registered sub-projects with initialization status. In a monorepo, call this first to discover available sub-project names, then pass the name as the `project` parameter to any other tool.",
    inputSchema: {
      type: "object",
      properties: {
        status: {
          type: "boolean",
          description: "Whether to check initialization status (default: true)",
          default: true
        }
      },
      required: []
    }
  }
];
var ToolHandler = class _ToolHandler {
  constructor(cg) {
    this.cg = cg;
  }
  // Cache of opened CodeGraph instances for cross-project queries
  projectCache = /* @__PURE__ */ new Map();
  projectRoot = null;
  watchers = /* @__PURE__ */ new Map();
  /**
   * Update the default CodeGraph instance (e.g. after lazy initialization)
   */
  setDefaultCodeGraph(cg) {
    this.cg = cg;
  }
  /**
   * Whether a default CodeGraph instance is available
   */
  hasDefaultCodeGraph() {
    return this.cg !== null;
  }
  /**
   * Set the root project path (for loading the projects registry)
   */
  setProjectRoot(root) {
    this.projectRoot = root;
  }
  /**
   * Add a CodeGraph instance to the project cache (used by MCP server startup)
   */
  addToCache(projectPath, cg) {
    this.projectCache.set(projectPath, cg);
  }
  /**
   * Resolve a project identifier to one or more CodeGraph instances.
   */
  resolveProjects(project, projectPath) {
    if (!project || project === ".") {
      if (projectPath) {
        const cg = this.getCodeGraph(projectPath);
        return /* @__PURE__ */ new Map([[projectPath, cg]]);
      }
      if (!this.cg) throw new Error("CodeGraph not initialized for this project.");
      return /* @__PURE__ */ new Map([[".", this.cg]]);
    }
    if (!this.projectRoot) throw new Error("No project root configured. Cannot resolve sub-projects.");
    const entries = loadProjectEntries(this.projectRoot);
    if (project === "*") {
      const map = /* @__PURE__ */ new Map();
      if (this.cg) map.set(".", this.cg);
      for (const entry2 of entries) {
        const absPath2 = (0, import_path.resolve)(this.projectRoot, entry2.path);
        const cached2 = this.projectCache.get(absPath2);
        if (cached2) {
          map.set(entry2.name, cached2);
          continue;
        }
        try {
          const subCg2 = index_default.openSync(absPath2);
          this.projectCache.set(absPath2, subCg2);
          this.startWatcherFor(entry2.name, absPath2, subCg2);
          map.set(entry2.name, subCg2);
        } catch (err) {
          process.stderr.write(`[CodeGraph MCP] Failed to open sub-project "${entry2.name}": ${err}
`);
        }
      }
      return map;
    }
    const entry = entries.find((e) => e.name === project || e.path === project);
    const resolvedPath = entry ? entry.path : project;
    const label = entry ? entry.name : project;
    const absPath = (0, import_path.resolve)(this.projectRoot, resolvedPath);
    if (!validatePathWithinRoot(this.projectRoot, absPath)) {
      throw new Error(`Project "${project}" is outside the project root`);
    }
    const cached = this.projectCache.get(absPath);
    if (cached) return /* @__PURE__ */ new Map([[label, cached]]);
    const subCg = index_default.openSync(absPath);
    this.projectCache.set(absPath, subCg);
    this.startWatcherFor(label, absPath, subCg);
    return /* @__PURE__ */ new Map([[label, subCg]]);
  }
  /**
   * Start a watcher for a sub-project.
   * Public so MCP server startup can call it.
   */
  startWatcherFor(name, absPath, cg) {
    if (this.watchers.has(absPath)) return;
    const watcher = new FileWatcher(
      absPath,
      cg.getConfig(),
      async () => {
        const result = await cg.sync();
        const filesChanged = result.filesAdded + result.filesModified + result.filesRemoved;
        return { filesChanged, durationMs: result.durationMs };
      },
      {
        onSyncComplete: (result) => {
          if (result.filesChanged > 0) {
            process.stderr.write(
              `[CodeGraph MCP] Auto-synced "${name}" \u2014 ${result.filesChanged} file(s) in ${result.durationMs}ms
`
            );
          }
        },
        onSyncError: (err) => {
          process.stderr.write(`[CodeGraph MCP] Auto-sync error for "${name}": ${err.message}
`);
        }
      }
    );
    if (watcher.start()) {
      this.watchers.set(absPath, watcher);
    }
  }
  /**
   * Get tool definitions with dynamic descriptions based on project size.
   * The codegraph_explore tool description includes a budget recommendation
   * scaled to the number of indexed files.
   */
  getTools() {
    if (!this.cg) return tools;
    try {
      const stats = this.cg.getStats();
      const budget = getExploreBudget(stats.fileCount);
      const registeredEntries = this.projectRoot ? loadProjectEntries(this.projectRoot) : [];
      const projectDesc = registeredEntries.length > 0 ? `Sub-project name or "*" for all. Uses root if omitted. Available: ${registeredEntries.map((e) => `"${e.name}" (${e.path})`).join(", ")}.` : projectProperty.description;
      return tools.map((tool) => {
        const patches = {};
        if (tool.name === "codegraph_explore") {
          patches.description = `${tool.description} Budget: make at most ${budget} calls for this project (${stats.fileCount.toLocaleString()} files indexed).`;
        }
        if (registeredEntries.length > 0 && tool.inputSchema.properties?.project) {
          patches.inputSchema = {
            ...tool.inputSchema,
            properties: {
              ...tool.inputSchema.properties,
              project: { ...tool.inputSchema.properties.project, description: projectDesc }
            }
          };
        }
        return Object.keys(patches).length > 0 ? { ...tool, ...patches } : tool;
      });
    } catch {
      return tools;
    }
  }
  /**
   * Get CodeGraph instance for a project
   *
   * If projectPath is provided, opens that project's CodeGraph (cached).
   * Otherwise returns the default CodeGraph instance.
   *
   * Walks up parent directories to find the nearest .codegraph/ folder,
   * similar to how git finds .git/ directories.
   */
  getCodeGraph(projectPath) {
    if (!projectPath) {
      if (!this.cg) {
        throw new Error("CodeGraph not initialized for this project. Run 'codegraph init' first.");
      }
      return this.cg;
    }
    if (this.projectCache.has(projectPath)) {
      return this.projectCache.get(projectPath);
    }
    const resolvedRoot = findNearestCodeGraphRoot(projectPath);
    if (!resolvedRoot) {
      throw new Error(`CodeGraph not initialized in ${projectPath}. Run 'codegraph init' in that project first.`);
    }
    if (this.cg && this.cg.getProjectRoot() === resolvedRoot) {
      this.projectCache.set(projectPath, this.cg);
      return this.cg;
    }
    if (this.projectCache.has(resolvedRoot)) {
      const cg2 = this.projectCache.get(resolvedRoot);
      this.projectCache.set(projectPath, cg2);
      return cg2;
    }
    const cg = index_default.openSync(resolvedRoot);
    this.projectCache.set(resolvedRoot, cg);
    if (projectPath !== resolvedRoot) {
      this.projectCache.set(projectPath, cg);
    }
    return cg;
  }
  /**
   * Close all cached project connections
   */
  closeAll() {
    for (const watcher of this.watchers.values()) {
      watcher.stop();
    }
    this.watchers.clear();
    for (const cg of this.projectCache.values()) {
      cg.close();
    }
    this.projectCache.clear();
  }
  /**
   * Validate that a value is a non-empty string
   */
  validateString(value, name) {
    if (typeof value !== "string" || value.length === 0) {
      return this.errorResult(`${name} must be a non-empty string`);
    }
    return value;
  }
  /**
   * Execute a tool by name
   */
  async execute(toolName, args) {
    try {
      switch (toolName) {
        case "codegraph_search":
          return await this.handleSearch(args);
        case "codegraph_context":
          return await this.handleContext(args);
        case "codegraph_callers":
          return await this.handleCallers(args);
        case "codegraph_callees":
          return await this.handleCallees(args);
        case "codegraph_impact":
          return await this.handleImpact(args);
        case "codegraph_explore":
          return await this.handleExplore(args);
        case "codegraph_node":
          return await this.handleNode(args);
        case "codegraph_status":
          return await this.handleStatus(args);
        case "codegraph_files":
          return await this.handleFiles(args);
        case "codegraph_projects":
          return await this.handleProjects(args);
        default:
          return this.errorResult(`Unknown tool: ${toolName}`);
      }
    } catch (err) {
      return this.errorResult(`Tool execution failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  }
  /**
   * Handle codegraph_search
   */
  async handleSearch(args) {
    const query = this.validateString(args.query, "query");
    if (typeof query !== "string") return query;
    const projectArg = args.project;
    const projectPathArg = args.projectPath;
    if (!projectArg || projectArg === ".") {
      const cg = this.getCodeGraph(projectPathArg);
      const kind = args.kind;
      const rawLimit = Number(args.limit) || 10;
      const limit = clamp(rawLimit, 1, 100);
      const results = cg.searchNodes(query, { limit, kinds: kind ? [kind] : void 0 });
      if (results.length === 0) {
        return this.textResult(`No results found for "${query}"`);
      }
      return this.textResult(this.truncateOutput(this.formatSearchResults(results)));
    }
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const allResults = [];
    for (const [label, cg] of projects) {
      const kind = args.kind;
      const rawLimit = Number(args.limit) || 10;
      const limit = clamp(rawLimit, 1, 100);
      const results = cg.searchNodes(query, { limit, kinds: kind ? [kind] : void 0 });
      for (const r of results) {
        allResults.push({ project: label, ...r });
      }
    }
    if (allResults.length === 0) {
      return this.textResult(`No results found for "${query}" in any project`);
    }
    return this.textResult(this.truncateOutput(JSON.stringify(allResults, null, 2)));
  }
  /**
   * Handle codegraph_context
   */
  async handleContext(args) {
    const task = this.validateString(args.task, "task");
    if (typeof task !== "string") return task;
    const sessionId = process.env.CLAUDE_SESSION_ID;
    if (sessionId) {
      markSessionConsulted(sessionId);
    }
    const projectArg = args.project;
    const projectPathArg = args.projectPath;
    const maxNodes = args.maxNodes || 20;
    const includeCode = args.includeCode !== false;
    if (!projectArg || projectArg === ".") {
      const cg = this.getCodeGraph(projectPathArg);
      const context = await cg.buildContext(task, {
        maxNodes,
        includeCode,
        format: "markdown"
      });
      const isFeatureQuery = this.looksLikeFeatureRequest(task);
      const reminder = isFeatureQuery ? "\n\n\u26A0\uFE0F **Ask user:** UX preferences, edge cases, acceptance criteria" : "";
      if (typeof context === "string") {
        return this.textResult(context + reminder);
      }
      return this.textResult(this.formatTaskContext(context) + reminder);
    }
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const sections = [];
    for (const [label, cg] of projects) {
      const context = await cg.buildContext(task, {
        maxNodes,
        includeCode,
        format: "markdown"
      });
      const text = typeof context === "string" ? context : this.formatTaskContext(context);
      sections.push(`## Project: ${label}

${text}`);
    }
    return this.textResult(sections.join("\n\n---\n\n"));
  }
  /**
   * Heuristic to detect if a query looks like a feature request
   */
  looksLikeFeatureRequest(task) {
    const featureKeywords = [
      "add",
      "create",
      "implement",
      "build",
      "enable",
      "allow",
      "new feature",
      "support for",
      "ability to",
      "want to",
      "should be able",
      "need to add",
      "swap",
      "edit",
      "modify"
    ];
    const bugKeywords = [
      "fix",
      "bug",
      "error",
      "broken",
      "crash",
      "issue",
      "problem",
      "not working",
      "fails",
      "undefined",
      "null"
    ];
    const explorationKeywords = [
      "how does",
      "where is",
      "what is",
      "find",
      "show me",
      "explain",
      "understand",
      "explore"
    ];
    const lowerTask = task.toLowerCase();
    if (bugKeywords.some((k) => lowerTask.includes(k))) return false;
    if (explorationKeywords.some((k) => lowerTask.includes(k))) return false;
    return featureKeywords.some((k) => lowerTask.includes(k));
  }
  /**
   * Handle codegraph_callers
   */
  async handleCallers(args) {
    const symbol = this.validateString(args.symbol, "symbol");
    if (typeof symbol !== "string") return symbol;
    const projectArg = args.project;
    const projectPathArg = args.projectPath;
    const limit = clamp(args.limit || 20, 1, 100);
    if (!projectArg || projectArg === ".") {
      const cg = this.getCodeGraph(projectPathArg);
      const allMatches = this.findAllSymbols(cg, symbol);
      if (allMatches.nodes.length === 0) {
        return this.textResult(`Symbol "${symbol}" not found in the codebase`);
      }
      const seen = /* @__PURE__ */ new Set();
      const allCallers = [];
      for (const node of allMatches.nodes) {
        for (const c of cg.getCallers(node.id)) {
          if (!seen.has(c.node.id)) {
            seen.add(c.node.id);
            allCallers.push(c.node);
          }
        }
      }
      if (allCallers.length === 0) {
        return this.textResult(`No callers found for "${symbol}"${allMatches.note}`);
      }
      const formatted = this.formatNodeList(allCallers.slice(0, limit), `Callers of ${symbol}`) + allMatches.note;
      return this.textResult(this.truncateOutput(formatted));
    }
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const sections = [];
    for (const [label, cg] of projects) {
      const allMatches = this.findAllSymbols(cg, symbol);
      if (allMatches.nodes.length === 0) continue;
      const seen = /* @__PURE__ */ new Set();
      const allCallers = [];
      for (const node of allMatches.nodes) {
        for (const c of cg.getCallers(node.id)) {
          if (!seen.has(c.node.id)) {
            seen.add(c.node.id);
            allCallers.push(c.node);
          }
        }
      }
      if (allCallers.length === 0) continue;
      const formatted = this.formatNodeList(allCallers.slice(0, limit), `Callers of ${symbol} in ${label}`);
      sections.push(`## Project: ${label}

${formatted}`);
    }
    if (sections.length === 0) {
      return this.textResult(`No callers found for "${symbol}" in any project`);
    }
    return this.textResult(this.truncateOutput(sections.join("\n\n---\n\n")));
  }
  /**
   * Handle codegraph_callees
   */
  async handleCallees(args) {
    const symbol = this.validateString(args.symbol, "symbol");
    if (typeof symbol !== "string") return symbol;
    const projectArg = args.project;
    const projectPathArg = args.projectPath;
    const limit = clamp(args.limit || 20, 1, 100);
    if (!projectArg || projectArg === ".") {
      const cg = this.getCodeGraph(projectPathArg);
      const allMatches = this.findAllSymbols(cg, symbol);
      if (allMatches.nodes.length === 0) {
        return this.textResult(`Symbol "${symbol}" not found in the codebase`);
      }
      const seen = /* @__PURE__ */ new Set();
      const allCallees = [];
      for (const node of allMatches.nodes) {
        for (const c of cg.getCallees(node.id)) {
          if (!seen.has(c.node.id)) {
            seen.add(c.node.id);
            allCallees.push(c.node);
          }
        }
      }
      if (allCallees.length === 0) {
        return this.textResult(`No callees found for "${symbol}"${allMatches.note}`);
      }
      const formatted = this.formatNodeList(allCallees.slice(0, limit), `Callees of ${symbol}`) + allMatches.note;
      return this.textResult(this.truncateOutput(formatted));
    }
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const sections = [];
    for (const [label, cg] of projects) {
      const allMatches = this.findAllSymbols(cg, symbol);
      if (allMatches.nodes.length === 0) continue;
      const seen = /* @__PURE__ */ new Set();
      const allCallees = [];
      for (const node of allMatches.nodes) {
        for (const c of cg.getCallees(node.id)) {
          if (!seen.has(c.node.id)) {
            seen.add(c.node.id);
            allCallees.push(c.node);
          }
        }
      }
      if (allCallees.length === 0) continue;
      const formatted = this.formatNodeList(allCallees.slice(0, limit), `Callees of ${symbol} in ${label}`);
      sections.push(`## Project: ${label}

${formatted}`);
    }
    if (sections.length === 0) {
      return this.textResult(`No callees found for "${symbol}" in any project`);
    }
    return this.textResult(this.truncateOutput(sections.join("\n\n---\n\n")));
  }
  /**
   * Handle codegraph_impact
   */
  async handleImpact(args) {
    const symbol = this.validateString(args.symbol, "symbol");
    if (typeof symbol !== "string") return symbol;
    const projectArg = args.project;
    const projectPathArg = args.projectPath;
    const depth = clamp(args.depth || 2, 1, 10);
    if (!projectArg || projectArg === ".") {
      const cg = this.getCodeGraph(projectPathArg);
      const allMatches = this.findAllSymbols(cg, symbol);
      if (allMatches.nodes.length === 0) {
        return this.textResult(`Symbol "${symbol}" not found in the codebase`);
      }
      const mergedNodes = /* @__PURE__ */ new Map();
      const mergedEdges = [];
      const seenEdges = /* @__PURE__ */ new Set();
      for (const node of allMatches.nodes) {
        const impact = cg.getImpactRadius(node.id, depth);
        for (const [id, n] of impact.nodes) {
          mergedNodes.set(id, n);
        }
        for (const e of impact.edges) {
          const key = `${e.source}->${e.target}:${e.kind}`;
          if (!seenEdges.has(key)) {
            seenEdges.add(key);
            mergedEdges.push(e);
          }
        }
      }
      const mergedImpact = {
        nodes: mergedNodes,
        edges: mergedEdges,
        roots: allMatches.nodes.map((n) => n.id)
      };
      const formatted = this.formatImpact(symbol, mergedImpact) + allMatches.note;
      return this.textResult(this.truncateOutput(formatted));
    }
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const sections = [];
    for (const [label, cg] of projects) {
      const allMatches = this.findAllSymbols(cg, symbol);
      if (allMatches.nodes.length === 0) continue;
      const mergedNodes = /* @__PURE__ */ new Map();
      const mergedEdges = [];
      const seenEdges = /* @__PURE__ */ new Set();
      for (const node of allMatches.nodes) {
        const impact = cg.getImpactRadius(node.id, depth);
        for (const [id, n] of impact.nodes) {
          mergedNodes.set(id, n);
        }
        for (const e of impact.edges) {
          const key = `${e.source}->${e.target}:${e.kind}`;
          if (!seenEdges.has(key)) {
            seenEdges.add(key);
            mergedEdges.push(e);
          }
        }
      }
      const mergedImpact = {
        nodes: mergedNodes,
        edges: mergedEdges,
        roots: allMatches.nodes.map((n) => n.id)
      };
      const formatted = this.formatImpact(`${symbol} (${label})`, mergedImpact);
      sections.push(`## Project: ${label}

${formatted}`);
    }
    if (sections.length === 0) {
      return this.textResult(`Symbol "${symbol}" not found in any project`);
    }
    return this.textResult(this.truncateOutput(sections.join("\n\n---\n\n")));
  }
  /** Maximum output for explore tool — sized to stay under MCP client token limits (~10k tokens) */
  static EXPLORE_MAX_OUTPUT = 35e3;
  /**
   * Handle codegraph_explore — deep exploration in a single call
   *
   * Strategy: find relevant symbols via graph traversal, group by file,
   * then read contiguous file sections covering all symbols per file.
   * This replaces multiple codegraph_node + Read calls.
   */
  async handleExplore(args) {
    const query = this.validateString(args.query, "query");
    if (typeof query !== "string") return query;
    const projectArg = args.project;
    const projectPathArg = args.projectPath;
    const maxFiles = clamp(args.maxFiles || 12, 1, 20);
    if (!projectArg || projectArg === ".") {
      const cg = this.getCodeGraph(projectPathArg);
      const resultMarkdown = await this.runExplore(cg, query, maxFiles);
      return this.textResult(resultMarkdown);
    }
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const sections = [];
    for (const [label, cg] of projects) {
      const resultMarkdown = await this.runExplore(cg, query, maxFiles, label);
      if (resultMarkdown) {
        sections.push(resultMarkdown);
      }
    }
    if (sections.length === 0) {
      return this.textResult(`No relevant code found for "${query}" in any project`);
    }
    return this.textResult(sections.join("\n\n---\n\n"));
  }
  /**
   * Run the explore logic for a single CodeGraph instance.
   * Returns markdown string. When label is provided, prefixes with project header.
   */
  async runExplore(cg, query, maxFiles, label) {
    const projectRoot = cg.getProjectRoot();
    const subgraph = await cg.findRelevantContext(query, {
      searchLimit: 8,
      traversalDepth: 3,
      maxNodes: 200,
      minScore: 0.2
    });
    if (subgraph.nodes.size === 0) {
      return "";
    }
    const fileGroups = /* @__PURE__ */ new Map();
    const entryNodeIds = new Set(subgraph.roots);
    const connectedToEntry = /* @__PURE__ */ new Set();
    for (const edge of subgraph.edges) {
      if (entryNodeIds.has(edge.source)) connectedToEntry.add(edge.target);
      if (entryNodeIds.has(edge.target)) connectedToEntry.add(edge.source);
    }
    for (const node of subgraph.nodes.values()) {
      if (node.kind === "import" || node.kind === "export") continue;
      const group = fileGroups.get(node.filePath) || { nodes: [], score: 0 };
      group.nodes.push(node);
      if (entryNodeIds.has(node.id)) {
        group.score += 10;
      } else if (connectedToEntry.has(node.id)) {
        group.score += 3;
      } else {
        group.score += 1;
      }
      fileGroups.set(node.filePath, group);
    }
    const relevantFiles = [...fileGroups.entries()].filter(([, group]) => group.score >= 3);
    const queryTerms = query.toLowerCase().split(/\s+/).filter((t) => t.length >= 3);
    const sortedFiles = relevantFiles.sort((a, b) => {
      const aPath = a[0].toLowerCase();
      const bPath = b[0].toLowerCase();
      const hasQueryRelevance = (filePath, nodes) => {
        const fp = filePath.toLowerCase();
        if (queryTerms.some((t) => fp.includes(t))) return true;
        return nodes.some((n) => queryTerms.some((t) => n.name.toLowerCase().includes(t)));
      };
      const aRelevant = hasQueryRelevance(aPath, a[1].nodes);
      const bRelevant = hasQueryRelevance(bPath, b[1].nodes);
      if (aRelevant !== bRelevant) return aRelevant ? -1 : 1;
      const isLowValue = (p) => /\/(tests?|__tests?__|spec)\//i.test(p) || /\bicons?\b/i.test(p) || /\bi18n\b/i.test(p);
      const aLow = isLowValue(aPath);
      const bLow = isLowValue(bPath);
      if (aLow !== bLow) return aLow ? 1 : -1;
      if (a[1].score !== b[1].score) return b[1].score - a[1].score;
      return b[1].nodes.length - a[1].nodes.length;
    });
    const lines = [
      `## Exploration: ${query}`,
      "",
      `Found ${subgraph.nodes.size} symbols across ${fileGroups.size} files.`,
      ""
    ];
    const significantEdges = subgraph.edges.filter(
      (e) => e.kind !== "contains"
      // skip contains — it's implied by file grouping
    );
    if (significantEdges.length > 0) {
      lines.push("### Relationships");
      lines.push("");
      const byKind = /* @__PURE__ */ new Map();
      for (const edge of significantEdges) {
        const sourceNode = subgraph.nodes.get(edge.source);
        const targetNode = subgraph.nodes.get(edge.target);
        if (!sourceNode || !targetNode) continue;
        const group = byKind.get(edge.kind) || [];
        group.push({ source: sourceNode.name, target: targetNode.name });
        byKind.set(edge.kind, group);
      }
      for (const [kind, edges] of byKind) {
        const shown = edges.slice(0, 15);
        lines.push(`**${kind}:**`);
        for (const e of shown) {
          lines.push(`- ${e.source} \u2192 ${e.target}`);
        }
        if (edges.length > 15) {
          lines.push(`- ... and ${edges.length - 15} more`);
        }
        lines.push("");
      }
    }
    lines.push("### Source Code");
    lines.push("");
    let totalChars = lines.join("\n").length;
    let filesIncluded = 0;
    for (const [filePath, group] of sortedFiles) {
      if (filesIncluded >= maxFiles) break;
      if (totalChars > _ToolHandler.EXPLORE_MAX_OUTPUT * 0.9) break;
      const absPath = validatePathWithinRoot(projectRoot, filePath);
      if (!absPath || !(0, import_fs.existsSync)(absPath)) continue;
      let fileContent;
      try {
        fileContent = (0, import_fs.readFileSync)(absPath, "utf-8");
      } catch {
        continue;
      }
      const fileLines = fileContent.split("\n");
      const lang = group.nodes[0]?.language || "";
      const ranges = group.nodes.filter((n) => n.startLine > 0 && n.endLine > 0).filter((n) => !(n.kind === "component" && n.startLine === 1 && n.endLine >= fileLines.length - 1)).map((n) => ({ start: n.startLine, end: n.endLine, name: n.name, kind: n.kind }));
      const edgeLines = /* @__PURE__ */ new Set();
      for (const node of group.nodes) {
        const outgoing = cg.getOutgoingEdges(node.id);
        for (const edge of outgoing) {
          if (!edge.line || edge.line <= 0 || edge.kind === "contains") continue;
          const key = `${edge.line}:${edge.target}`;
          if (edgeLines.has(key)) continue;
          edgeLines.add(key);
          const targetNode = subgraph.nodes.get(edge.target);
          const targetName = targetNode?.name ?? edge.kind;
          ranges.push({ start: edge.line, end: edge.line, name: targetName, kind: edge.kind });
        }
      }
      ranges.sort((a, b) => a.start - b.start);
      if (ranges.length === 0) continue;
      const GAP_THRESHOLD = 15;
      const clusters = [];
      let current = { start: ranges[0].start, end: ranges[0].end, symbols: [`${ranges[0].name}(${ranges[0].kind})`] };
      for (let i = 1; i < ranges.length; i++) {
        const r = ranges[i];
        if (r.start <= current.end + GAP_THRESHOLD) {
          current.end = Math.max(current.end, r.end);
          current.symbols.push(`${r.name}(${r.kind})`);
        } else {
          clusters.push(current);
          current = { start: r.start, end: r.end, symbols: [`${r.name}(${r.kind})`] };
        }
      }
      clusters.push(current);
      const contextPadding = 3;
      let fileSection = "";
      const allSymbols = [];
      for (const cluster of clusters) {
        const startIdx = Math.max(0, cluster.start - 1 - contextPadding);
        const endIdx = Math.min(fileLines.length, cluster.end + contextPadding);
        const section = fileLines.slice(startIdx, endIdx).join("\n");
        if (fileSection.length > 0) {
          fileSection += "\n\n// ... (gap) ...\n\n";
        }
        fileSection += section;
        allSymbols.push(...cluster.symbols);
      }
      if (totalChars + fileSection.length + 200 > _ToolHandler.EXPLORE_MAX_OUTPUT) {
        const budget = _ToolHandler.EXPLORE_MAX_OUTPUT - totalChars - 200;
        if (budget < 500) break;
        const trimmed = fileSection.slice(0, budget) + "\n// ... trimmed ...";
        lines.push(`#### ${filePath} \u2014 ${allSymbols.join(", ")}`);
        lines.push("");
        lines.push("```" + lang);
        lines.push(trimmed);
        lines.push("```");
        lines.push("");
        totalChars += trimmed.length + 200;
        filesIncluded++;
        break;
      }
      lines.push(`#### ${filePath} \u2014 ${allSymbols.join(", ")}`);
      lines.push("");
      lines.push("```" + lang);
      lines.push(fileSection);
      lines.push("```");
      lines.push("");
      totalChars += fileSection.length + 200;
      filesIncluded++;
    }
    const remainingRelevant = sortedFiles.slice(filesIncluded);
    const peripheralFiles = [...fileGroups.entries()].filter(([, group]) => group.score < 3).sort((a, b) => b[1].score - a[1].score);
    const remainingFiles = [...remainingRelevant, ...peripheralFiles];
    if (remainingFiles.length > 0) {
      lines.push("### Additional relevant files (not shown)");
      lines.push("");
      for (const [filePath, group] of remainingFiles.slice(0, 10)) {
        const symbols = group.nodes.map((n) => `${n.name}:${n.startLine}`).join(", ");
        lines.push(`- ${filePath}: ${symbols}`);
      }
      if (remainingFiles.length > 10) {
        lines.push(`- ... and ${remainingFiles.length - 10} more files`);
      }
    }
    lines.push("");
    lines.push("---");
    lines.push(`> **Complete source code is included above for ${filesIncluded} files.** You do NOT need to re-read these files \u2014 the relevant sections are already shown in full. Only use Read/Grep for files listed under "Additional relevant files" if you need more detail.`);
    try {
      const stats = cg.getStats();
      const budget = getExploreBudget(stats.fileCount);
      lines.push("");
      lines.push(`> **Explore budget: ${budget} calls max for this project (${stats.fileCount.toLocaleString()} files indexed).** Stop exploring and synthesize your answer once you've used ${budget} calls \u2014 do NOT make additional explore calls beyond this budget.`);
    } catch {
    }
    const result = lines.join("\n");
    return label ? `## Project: ${label}

${result}` : result;
  }
  /**
   * Handle codegraph_node
   */
  async handleNode(args) {
    const symbol = this.validateString(args.symbol, "symbol");
    if (typeof symbol !== "string") return symbol;
    const projectArg = args.project;
    const projectPathArg = args.projectPath;
    const includeCode = args.includeCode === true;
    if (!projectArg || projectArg === ".") {
      const cg = this.getCodeGraph(projectPathArg);
      const match = this.findSymbol(cg, symbol);
      if (!match) {
        return this.textResult(`Symbol "${symbol}" not found in the codebase`);
      }
      let code = null;
      if (includeCode) {
        code = await cg.getCode(match.node.id);
      }
      const formatted = this.formatNodeDetails(match.node, code) + match.note;
      return this.textResult(this.truncateOutput(formatted));
    }
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const allResults = [];
    for (const [label, cg] of projects) {
      const match = this.findSymbol(cg, symbol);
      if (!match) {
        allResults.push({ project: label, found: false });
        continue;
      }
      let code = null;
      if (includeCode) {
        code = await cg.getCode(match.node.id);
      }
      allResults.push({
        project: label,
        found: true,
        node: match.node,
        code,
        note: match.note
      });
    }
    return this.textResult(this.truncateOutput(JSON.stringify(allResults, null, 2)));
  }
  /**
   * Handle codegraph_status
   */
  async handleStatus(args) {
    const projectArg = args.project;
    const projectPathArg = args.projectPath;
    if (!projectArg || projectArg === ".") {
      const cg = this.getCodeGraph(projectPathArg);
      return this.textResult(this.buildStatusOutput(cg));
    }
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const sections = [];
    for (const [label, cg] of projects) {
      sections.push(`## ${label}

${this.buildStatusOutput(cg)}`);
    }
    return this.textResult(sections.join("\n\n---\n\n"));
  }
  /**
   * Build status output string for a single CodeGraph instance
   */
  buildStatusOutput(cg) {
    const stats = cg.getStats();
    const lines = [
      "## CodeGraph Status",
      "",
      `**Files indexed:** ${stats.fileCount}`,
      `**Total nodes:** ${stats.nodeCount}`,
      `**Total edges:** ${stats.edgeCount}`,
      `**Database size:** ${(stats.dbSizeBytes / 1024 / 1024).toFixed(2)} MB`
    ];
    const backend = cg.getBackend();
    if (backend === "native") {
      lines.push(`**Backend:** native (better-sqlite3)`);
    } else {
      lines.push(
        `**Backend:** \u26A0 wasm (better-sqlite3 unavailable) \u2014 5-10x slower than native. Fix: ${WASM_FALLBACK_FIX_RECIPE}`
      );
    }
    lines.push("", "### Nodes by Kind:");
    for (const [kind, count] of Object.entries(stats.nodesByKind)) {
      if (count > 0) {
        lines.push(`- ${kind}: ${count}`);
      }
    }
    lines.push("", "### Languages:");
    for (const [lang, count] of Object.entries(stats.filesByLanguage)) {
      if (count > 0) {
        lines.push(`- ${lang}: ${count}`);
      }
    }
    return lines.join("\n");
  }
  /**
   * Handle codegraph_files - get project file structure from the index
   */
  async handleFiles(args) {
    const projectArg = args.project;
    const projectPathArg = args.projectPath;
    const pathFilter = args.path;
    const pattern = args.pattern;
    const format = args.format || "tree";
    const includeMetadata = args.includeMetadata !== false;
    const maxDepth = args.maxDepth != null ? clamp(args.maxDepth, 1, 20) : void 0;
    if (!projectArg || projectArg === ".") {
      const cg = this.getCodeGraph(projectPathArg);
      const output = this.buildFilesOutput(cg, pathFilter, pattern, format, includeMetadata, maxDepth);
      return this.textResult(this.truncateOutput(output));
    }
    const projects = this.resolveProjects(projectArg, projectPathArg);
    const sections = [];
    for (const [label, cg] of projects) {
      const output = this.buildFilesOutput(cg, pathFilter, pattern, format, includeMetadata, maxDepth);
      sections.push(`## ${label}

${output}`);
    }
    return this.textResult(this.truncateOutput(sections.join("\n\n---\n\n")));
  }
  /**
   * Build files output for a single CodeGraph instance
   */
  buildFilesOutput(cg, pathFilter, pattern, format, includeMetadata, maxDepth) {
    const fmt = format || "tree";
    const meta = includeMetadata !== false;
    const allFiles = cg.getFiles();
    if (allFiles.length === 0) {
      return "No files indexed. Run `codegraph index` first.";
    }
    let files = pathFilter ? allFiles.filter((f) => f.path.startsWith(pathFilter) || f.path.startsWith("./" + pathFilter)) : allFiles;
    if (pattern) {
      const regex = this.globToRegex(pattern);
      files = files.filter((f) => regex.test(f.path));
    }
    if (files.length === 0) {
      return "No files found matching the criteria.";
    }
    let output;
    switch (fmt) {
      case "flat":
        output = this.formatFilesFlat(files, meta);
        break;
      case "grouped":
        output = this.formatFilesGrouped(files, meta);
        break;
      case "tree":
      default:
        output = this.formatFilesTree(files, meta, maxDepth);
        break;
    }
    return output;
  }
  /**
   * Convert glob pattern to regex
   */
  globToRegex(pattern) {
    const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*\*/g, "{{GLOBSTAR}}").replace(/\*/g, "[^/]*").replace(/\?/g, "[^/]").replace(/\{\{GLOBSTAR\}\}/g, ".*");
    return new RegExp(escaped);
  }
  /**
   * Format files as a flat list
   */
  formatFilesFlat(files, includeMetadata) {
    const lines = [`## Files (${files.length})`, ""];
    for (const file of files.sort((a, b) => a.path.localeCompare(b.path))) {
      if (includeMetadata) {
        lines.push(`- ${file.path} (${file.language}, ${file.nodeCount} symbols)`);
      } else {
        lines.push(`- ${file.path}`);
      }
    }
    return lines.join("\n");
  }
  /**
   * Format files grouped by language
   */
  formatFilesGrouped(files, includeMetadata) {
    const byLang = /* @__PURE__ */ new Map();
    for (const file of files) {
      const existing = byLang.get(file.language) || [];
      existing.push(file);
      byLang.set(file.language, existing);
    }
    const lines = [`## Files by Language (${files.length} total)`, ""];
    const sortedLangs = [...byLang.entries()].sort((a, b) => b[1].length - a[1].length);
    for (const [lang, langFiles] of sortedLangs) {
      lines.push(`### ${lang} (${langFiles.length})`);
      for (const file of langFiles.sort((a, b) => a.path.localeCompare(b.path))) {
        if (includeMetadata) {
          lines.push(`- ${file.path} (${file.nodeCount} symbols)`);
        } else {
          lines.push(`- ${file.path}`);
        }
      }
      lines.push("");
    }
    return lines.join("\n");
  }
  /**
   * Format files as a tree structure
   */
  formatFilesTree(files, includeMetadata, maxDepth) {
    const root = { name: "", children: /* @__PURE__ */ new Map() };
    for (const file of files) {
      const parts = file.path.split("/");
      let current = root;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (!part) continue;
        if (!current.children.has(part)) {
          current.children.set(part, { name: part, children: /* @__PURE__ */ new Map() });
        }
        current = current.children.get(part);
        if (i === parts.length - 1) {
          current.file = { language: file.language, nodeCount: file.nodeCount };
        }
      }
    }
    const lines = [`## Project Structure (${files.length} files)`, ""];
    const renderNode = (node, prefix, isLast, depth) => {
      if (maxDepth !== void 0 && depth > maxDepth) return;
      const connector = isLast ? "\u2514\u2500\u2500 " : "\u251C\u2500\u2500 ";
      const childPrefix = isLast ? "    " : "\u2502   ";
      if (node.name) {
        let line = prefix + connector + node.name;
        if (node.file && includeMetadata) {
          line += ` (${node.file.language}, ${node.file.nodeCount} symbols)`;
        }
        lines.push(line);
      }
      const children = [...node.children.values()];
      children.sort((a, b) => {
        const aIsDir = a.children.size > 0 && !a.file;
        const bIsDir = b.children.size > 0 && !b.file;
        if (aIsDir !== bIsDir) return aIsDir ? -1 : 1;
        return a.name.localeCompare(b.name);
      });
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const nextPrefix = node.name ? prefix + childPrefix : prefix;
        renderNode(child, nextPrefix, i === children.length - 1, depth + 1);
      }
    };
    renderNode(root, "", true, 0);
    return lines.join("\n");
  }
  /**
   * Handle codegraph_projects — list registered sub-projects
   */
  async handleProjects(args) {
    if (!this.projectRoot) {
      return this.textResult(JSON.stringify({ rootProject: null, projects: [] }, null, 2));
    }
    const checkStatus = args.status !== false;
    const entries = loadProjectEntries(this.projectRoot);
    const projectEntries = [];
    for (const entry of entries) {
      const absPath = (0, import_path.resolve)(this.projectRoot, entry.path);
      const result = {
        name: entry.name,
        path: entry.path,
        initialized: isInitialized(absPath)
      };
      if (checkStatus && result.initialized) {
        try {
          const subCg = index_default.openSync(absPath);
          const stats = subCg.getStats();
          result.symbolCount = stats.nodeCount;
          result.fileCount = stats.fileCount;
          subCg.close();
        } catch {
        }
      }
      projectEntries.push(result);
    }
    return this.textResult(JSON.stringify({ rootProject: this.projectRoot, projects: projectEntries }, null, 2));
  }
  // =========================================================================
  // Symbol resolution helpers
  // =========================================================================
  /**
   * Find a symbol by name, handling disambiguation when multiple matches exist.
   * Returns the best match and a note about alternatives if any.
   */
  /**
   * Check if a node matches a symbol query, supporting both simple names and
   * qualified "Parent.child" notation (e.g., "Session.request" matches a method
   * named "request" inside a class named "Session").
   */
  matchesSymbol(node, symbol) {
    if (node.name === symbol) return true;
    if (node.kind === "file" && node.name.replace(/\.[^.]+$/, "") === symbol) return true;
    if (symbol.includes(".")) {
      const parts = symbol.split(".");
      const qualifiedSuffix = parts.join("::");
      if (node.qualifiedName.includes(qualifiedSuffix)) return true;
    }
    return false;
  }
  findSymbol(cg, symbol) {
    const limit = symbol.includes(".") ? 50 : 10;
    const results = cg.searchNodes(symbol, { limit });
    if (results.length === 0 || !results[0]) {
      return null;
    }
    const exactMatches = results.filter((r) => this.matchesSymbol(r.node, symbol));
    if (exactMatches.length === 1) {
      return { node: exactMatches[0].node, note: "" };
    }
    if (exactMatches.length > 1) {
      const picked = exactMatches[0].node;
      const others = exactMatches.slice(1).map(
        (r) => `${r.node.name} (${r.node.kind}) at ${r.node.filePath}:${r.node.startLine}`
      );
      const note = `

> **Note:** ${exactMatches.length} symbols named "${symbol}". Showing results for \`${picked.filePath}:${picked.startLine}\`. Others: ${others.join(", ")}`;
      return { node: picked, note };
    }
    return { node: results[0].node, note: "" };
  }
  /**
   * Find ALL symbols matching a name. Used by callers/callees/impact to aggregate
   * results across all matching symbols (e.g., multiple classes with an `execute` method).
   */
  findAllSymbols(cg, symbol) {
    const results = cg.searchNodes(symbol, { limit: 50 });
    if (results.length === 0) {
      return { nodes: [], note: "" };
    }
    const exactMatches = results.filter((r) => this.matchesSymbol(r.node, symbol));
    if (exactMatches.length <= 1) {
      const node = exactMatches[0]?.node ?? results[0].node;
      return { nodes: [node], note: "" };
    }
    const locations = exactMatches.map(
      (r) => `${r.node.kind} at ${r.node.filePath}:${r.node.startLine}`
    );
    const note = `

> **Note:** Aggregated results across ${exactMatches.length} symbols named "${symbol}": ${locations.join(", ")}`;
    return { nodes: exactMatches.map((r) => r.node), note };
  }
  /**
   * Truncate output if it exceeds the maximum length
   */
  truncateOutput(text) {
    if (text.length <= MAX_OUTPUT_LENGTH) return text;
    const truncated = text.slice(0, MAX_OUTPUT_LENGTH);
    const lastNewline = truncated.lastIndexOf("\n");
    const cutPoint = lastNewline > MAX_OUTPUT_LENGTH * 0.8 ? lastNewline : MAX_OUTPUT_LENGTH;
    return truncated.slice(0, cutPoint) + "\n\n... (output truncated)";
  }
  // =========================================================================
  // Formatting helpers (compact by default to reduce context usage)
  // =========================================================================
  formatSearchResults(results) {
    const lines = [`## Search Results (${results.length} found)`, ""];
    for (const result of results) {
      const { node } = result;
      const location = node.startLine ? `:${node.startLine}` : "";
      lines.push(`### ${node.name} (${node.kind})`);
      lines.push(`${node.filePath}${location}`);
      if (node.signature) lines.push(`\`${node.signature}\``);
      lines.push("");
    }
    return lines.join("\n");
  }
  formatNodeList(nodes, title) {
    const lines = [`## ${title} (${nodes.length} found)`, ""];
    for (const node of nodes) {
      const location = node.startLine ? `:${node.startLine}` : "";
      lines.push(`- ${node.name} (${node.kind}) - ${node.filePath}${location}`);
    }
    return lines.join("\n");
  }
  formatImpact(symbol, impact) {
    const nodeCount = impact.nodes.size;
    const lines = [
      `## Impact: "${symbol}" affects ${nodeCount} symbols`,
      ""
    ];
    const byFile = /* @__PURE__ */ new Map();
    for (const node of impact.nodes.values()) {
      const existing = byFile.get(node.filePath) || [];
      existing.push(node);
      byFile.set(node.filePath, existing);
    }
    for (const [file, nodes] of byFile) {
      lines.push(`**${file}:**`);
      const nodeList = nodes.map((n) => `${n.name}:${n.startLine}`).join(", ");
      lines.push(nodeList);
      lines.push("");
    }
    return lines.join("\n");
  }
  formatNodeDetails(node, code) {
    const location = node.startLine ? `:${node.startLine}` : "";
    const lines = [
      `## ${node.name} (${node.kind})`,
      "",
      `**Location:** ${node.filePath}${location}`
    ];
    if (node.signature) {
      lines.push(`**Signature:** \`${node.signature}\``);
    }
    if (node.docstring && node.docstring.length < 200) {
      lines.push("", node.docstring);
    }
    if (code) {
      lines.push("", "```" + node.language, code, "```");
    }
    return lines.join("\n");
  }
  formatTaskContext(context) {
    return context.summary || "No context found";
  }
  textResult(text) {
    return {
      content: [{ type: "text", text }]
    };
  }
  errorResult(message) {
    return {
      content: [{ type: "text", text: `Error: ${message}` }],
      isError: true
    };
  }
};

// src/mcp/server-instructions.ts
var SERVER_INSTRUCTIONS = `# Codegraph \u2014 code intelligence

SQLite knowledge graph of every symbol, edge, and file. Consult it BEFORE writing code.

## Tool by intent

| Question | Tool |
|---|---|
| Find symbol by name | \`codegraph_search\` |
| Understand a task/feature/area | \`codegraph_context\` \u2190 PRIMARY |
| What calls this? | \`codegraph_callers\` |
| What does this call? | \`codegraph_callees\` |
| What breaks if I change this? | \`codegraph_impact\` |
| Full source of one symbol | \`codegraph_node\` |
| Survey an unfamiliar module | \`codegraph_explore\` |
| Directory structure | \`codegraph_files\` |

Use \`codegraph_context\` first \u2014 it composes search + callers + callees in one call.
Don't grep for symbol names; \`codegraph_search\` is faster.
Don't chain search \u2192 node when you want context \u2014 that's one \`codegraph_context\` call.
`;
function buildInstructions(projects) {
  if (projects.length === 0) return SERVER_INSTRUCTIONS;
  return SERVER_INSTRUCTIONS + `
## Monorepo

This workspace has multiple indexed sub-projects. Pass \`project: "<name>"\` to any tool to target one, or \`project: "*"\` for all.

${projects.map((e) => `- **${e.name}** \u2192 \`${e.path}\``).join("\n")}
`;
}

// src/mcp/index.ts
function fileUriToPath(uri) {
  try {
    const url = new URL(uri);
    let filePath = decodeURIComponent(url.pathname);
    if (process.platform === "win32" && /^\/[a-zA-Z]:/.test(filePath)) {
      filePath = filePath.slice(1);
    }
    return path14.resolve(filePath);
  } catch {
    return uri.replace(/^file:\/\/\/?/, "");
  }
}
var SERVER_INFO = {
  name: "codegraph",
  version: "0.1.0"
};
var PROTOCOL_VERSION = "2024-11-05";
var MCPServer = class {
  transport;
  cg = null;
  toolHandler;
  projectPath;
  constructor(projectPath) {
    this.projectPath = projectPath || null;
    this.transport = new StdioTransport();
    this.toolHandler = new ToolHandler(null);
  }
  /**
   * Start the MCP server
   *
   * Note: CodeGraph initialization is deferred until the initialize request
   * is received, which includes the rootUri from the client.
   */
  async start() {
    this.transport.start(this.handleMessage.bind(this));
    process.on("SIGINT", () => this.stop());
    process.on("SIGTERM", () => this.stop());
    process.stdin.on("end", () => this.stop());
    process.stdin.on("close", () => this.stop());
  }
  /**
   * Try to initialize CodeGraph for the default project.
   *
   * Walks up parent directories to find the nearest .codegraph/ folder,
   * similar to how git finds .git/ directories.
   *
   * If initialization fails, the error is recorded but the server continues
   * to work — cross-project queries and retries on subsequent tool calls
   * are still possible.
   */
  async tryInitializeDefault(projectPath) {
    const resolvedRoot = findNearestCodeGraphRoot(projectPath);
    if (!resolvedRoot) {
      const monorepoRoot = findNearestMonorepoRoot(projectPath);
      if (monorepoRoot) {
        this.projectPath = monorepoRoot;
        this.toolHandler.setProjectRoot(monorepoRoot);
        await this.loadSubProjects(monorepoRoot);
      } else {
        this.projectPath = projectPath;
      }
      return;
    }
    this.projectPath = resolvedRoot;
    try {
      this.cg = await index_default.open(resolvedRoot);
      this.toolHandler.setDefaultCodeGraph(this.cg);
      this.toolHandler.setProjectRoot(resolvedRoot);
      await this.loadSubProjects(resolvedRoot);
      this.startWatching();
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      process.stderr.write(`[CodeGraph MCP] Failed to open project at ${resolvedRoot}: ${msg}
`);
    }
  }
  /**
   * Eagerly open and cache all registered sub-projects (up to 20).
   */
  async loadSubProjects(projectRoot) {
    const entries = loadProjectEntries(projectRoot);
    if (entries.length === 0 || entries.length > 20) return;
    for (const entry of entries) {
      const absPath = path14.resolve(projectRoot, entry.path);
      if (isInitialized(absPath)) {
        try {
          const subCg = index_default.openSync(absPath);
          this.toolHandler.addToCache(absPath, subCg);
          this.toolHandler.startWatcherFor(entry.name, absPath, subCg);
        } catch (err) {
          process.stderr.write(
            `[CodeGraph MCP] Failed to open sub-project "${entry.name}": ${err}
`
          );
        }
      }
    }
  }
  /**
   * Retry initialization of the default project if it previously failed.
   * Called lazily on tool calls that need the default project.
   * Re-walks parent directories each time so it picks up projects
   * initialized after the MCP server started.
   */
  retryInitIfNeeded() {
    if (this.toolHandler.hasDefaultCodeGraph()) return;
    if (!this.projectPath) return;
    const resolvedRoot = findNearestCodeGraphRoot(this.projectPath);
    if (!resolvedRoot) {
      const monorepoRoot = findNearestMonorepoRoot(this.projectPath);
      if (monorepoRoot && monorepoRoot !== this.projectPath) {
        this.projectPath = monorepoRoot;
        this.toolHandler.setProjectRoot(monorepoRoot);
        this.loadSubProjects(monorepoRoot).catch(() => {
        });
      }
      return;
    }
    try {
      if (this.cg) {
        try {
          this.cg.close();
        } catch {
        }
        this.cg = null;
      }
      this.cg = index_default.openSync(resolvedRoot);
      this.projectPath = resolvedRoot;
      this.toolHandler.setDefaultCodeGraph(this.cg);
      this.toolHandler.setProjectRoot(resolvedRoot);
      this.startWatching();
    } catch {
    }
  }
  /**
   * Start file watching on the active CodeGraph instance.
   * Logs sync activity to stderr for diagnostics.
   */
  startWatching() {
    if (!this.cg) return;
    const started = this.cg.watch({
      onSyncComplete: (result) => {
        if (result.filesChanged > 0) {
          process.stderr.write(
            `[CodeGraph MCP] Auto-synced ${result.filesChanged} file(s) in ${result.durationMs}ms
`
          );
        }
      },
      onSyncError: (err) => {
        process.stderr.write(`[CodeGraph MCP] Auto-sync error: ${err.message}
`);
      }
    });
    if (started) {
      process.stderr.write("[CodeGraph MCP] File watcher active \u2014 graph will auto-sync on changes\n");
    }
  }
  /**
   * Stop the server
   */
  stop() {
    this.toolHandler.closeAll();
    if (this.cg) {
      this.cg.close();
      this.cg = null;
    }
    this.transport.stop();
    process.exit(0);
  }
  /**
   * Handle incoming JSON-RPC messages
   */
  async handleMessage(message) {
    const isRequest = "id" in message;
    switch (message.method) {
      case "initialize":
        if (isRequest) {
          await this.handleInitialize(message);
        }
        break;
      case "initialized":
        break;
      case "tools/list":
        if (isRequest) {
          await this.handleToolsList(message);
        }
        break;
      case "tools/call":
        if (isRequest) {
          await this.handleToolsCall(message);
        }
        break;
      case "ping":
        if (isRequest) {
          this.transport.sendResult(message.id, {});
        }
        break;
      default:
        if (isRequest) {
          this.transport.sendError(
            message.id,
            ErrorCodes.MethodNotFound,
            `Method not found: ${message.method}`
          );
        }
    }
  }
  /**
   * Handle initialize request
   */
  async handleInitialize(request) {
    const params = request.params;
    let projectPath = this.projectPath;
    if (params?.rootUri) {
      projectPath = fileUriToPath(params.rootUri);
    } else if (params?.workspaceFolders?.[0]?.uri) {
      projectPath = fileUriToPath(params.workspaceFolders[0].uri);
    }
    if (!projectPath) {
      projectPath = process.cwd();
    }
    await this.tryInitializeDefault(projectPath);
    const projectEntries = this.projectPath ? loadProjectEntries(this.projectPath) : [];
    this.transport.sendResult(request.id, {
      protocolVersion: PROTOCOL_VERSION,
      capabilities: {
        tools: {}
      },
      serverInfo: SERVER_INFO,
      instructions: buildInstructions(projectEntries)
    });
  }
  /**
   * Handle tools/list request
   */
  async handleToolsList(request) {
    this.retryInitIfNeeded();
    this.transport.sendResult(request.id, {
      tools: this.toolHandler.getTools()
    });
  }
  /**
   * Handle tools/call request
   */
  async handleToolsCall(request) {
    const params = request.params;
    if (!params || !params.name) {
      this.transport.sendError(
        request.id,
        ErrorCodes.InvalidParams,
        "Missing tool name"
      );
      return;
    }
    const toolName = params.name;
    const toolArgs = params.arguments || {};
    const tool = tools.find((t) => t.name === toolName);
    if (!tool) {
      this.transport.sendError(
        request.id,
        ErrorCodes.InvalidParams,
        `Unknown tool: ${toolName}`
      );
      return;
    }
    this.retryInitIfNeeded();
    const result = await this.toolHandler.execute(toolName, toolArgs);
    this.transport.sendResult(request.id, result);
  }
};

// src/index.ts
var CodeGraph = class _CodeGraph {
  db;
  queries;
  config;
  projectRoot;
  orchestrator;
  resolver;
  graphManager;
  traverser;
  contextBuilder;
  // Mutex for preventing concurrent indexing operations (in-process)
  indexMutex = new Mutex();
  // File lock for preventing concurrent writes across processes (CLI, MCP, git hooks)
  fileLock;
  // File watcher for auto-sync on file changes
  watcher = null;
  constructor(db, queries, config, projectRoot) {
    this.db = db;
    this.queries = queries;
    this.config = config;
    this.projectRoot = projectRoot;
    this.fileLock = new FileLock(
      path15.join(projectRoot, ".codegraph", "codegraph.lock")
    );
    this.orchestrator = new ExtractionOrchestrator(projectRoot, config, queries);
    this.resolver = createResolver(projectRoot, queries);
    this.graphManager = new GraphQueryManager(queries);
    this.traverser = new GraphTraverser(queries);
    this.contextBuilder = createContextBuilder(
      projectRoot,
      queries,
      this.traverser
    );
  }
  // ===========================================================================
  // Lifecycle Methods
  // ===========================================================================
  /**
   * Initialize a new CodeGraph project
   *
   * Creates the .CodeGraph directory, database, and configuration.
   *
   * @param projectRoot - Path to the project root directory
   * @param options - Initialization options
   * @returns A new CodeGraph instance
   */
  static async init(projectRoot, options = {}) {
    await initGrammars();
    const resolvedRoot = path15.resolve(projectRoot);
    if (isInitialized(resolvedRoot)) {
      throw new Error(`CodeGraph already initialized in ${resolvedRoot}`);
    }
    createDirectory(resolvedRoot);
    const config = createDefaultConfig(resolvedRoot);
    if (options.config) {
      Object.assign(config, options.config);
    }
    saveConfig(resolvedRoot, config);
    const dbPath = getDatabasePath(resolvedRoot);
    const db = DatabaseConnection.initialize(dbPath);
    const queries = new QueryBuilder(db.getDb());
    const instance = new _CodeGraph(db, queries, config, resolvedRoot);
    if (options.index) {
      await instance.indexAll({ onProgress: options.onProgress });
    }
    return instance;
  }
  /**
   * Initialize synchronously (without indexing)
   */
  static initSync(projectRoot, options = {}) {
    const resolvedRoot = path15.resolve(projectRoot);
    if (isInitialized(resolvedRoot)) {
      throw new Error(`CodeGraph already initialized in ${resolvedRoot}`);
    }
    createDirectory(resolvedRoot);
    const config = createDefaultConfig(resolvedRoot);
    if (options.config) {
      Object.assign(config, options.config);
    }
    saveConfig(resolvedRoot, config);
    const dbPath = getDatabasePath(resolvedRoot);
    const db = DatabaseConnection.initialize(dbPath);
    const queries = new QueryBuilder(db.getDb());
    return new _CodeGraph(db, queries, config, resolvedRoot);
  }
  /**
   * Open an existing CodeGraph project
   *
   * @param projectRoot - Path to the project root directory
   * @param options - Open options
   * @returns A CodeGraph instance
   */
  static async open(projectRoot, options = {}) {
    await initGrammars();
    const resolvedRoot = path15.resolve(projectRoot);
    if (!isInitialized(resolvedRoot)) {
      throw new Error(`CodeGraph not initialized in ${resolvedRoot}. Run init() first.`);
    }
    const validation = validateDirectory(resolvedRoot);
    if (!validation.valid) {
      throw new Error(`Invalid CodeGraph directory: ${validation.errors.join(", ")}`);
    }
    const config = loadConfig(resolvedRoot);
    const dbPath = getDatabasePath(resolvedRoot);
    const db = DatabaseConnection.open(dbPath);
    const queries = new QueryBuilder(db.getDb());
    const instance = new _CodeGraph(db, queries, config, resolvedRoot);
    if (options.sync) {
      await instance.sync();
    }
    return instance;
  }
  /**
   * Open synchronously (without sync)
   */
  static openSync(projectRoot) {
    const resolvedRoot = path15.resolve(projectRoot);
    if (!isInitialized(resolvedRoot)) {
      throw new Error(`CodeGraph not initialized in ${resolvedRoot}. Run init() first.`);
    }
    const validation = validateDirectory(resolvedRoot);
    if (!validation.valid) {
      throw new Error(`Invalid CodeGraph directory: ${validation.errors.join(", ")}`);
    }
    const config = loadConfig(resolvedRoot);
    const dbPath = getDatabasePath(resolvedRoot);
    const db = DatabaseConnection.open(dbPath);
    const queries = new QueryBuilder(db.getDb());
    return new _CodeGraph(db, queries, config, resolvedRoot);
  }
  /**
   * Check if a directory has been initialized as a CodeGraph project
   */
  static isInitialized(projectRoot) {
    return isInitialized(path15.resolve(projectRoot));
  }
  /**
   * Close the CodeGraph instance and release resources
   */
  close() {
    this.unwatch();
    this.fileLock.release();
    this.db.close();
  }
  // ===========================================================================
  // Configuration
  // ===========================================================================
  /**
   * Get the current configuration
   */
  getConfig() {
    return { ...this.config };
  }
  /**
   * Update configuration
   */
  updateConfig(updates) {
    Object.assign(this.config, updates);
    saveConfig(this.projectRoot, this.config);
    this.orchestrator = new ExtractionOrchestrator(
      this.projectRoot,
      this.config,
      this.queries
    );
    this.resolver = createResolver(this.projectRoot, this.queries);
  }
  /**
   * Get the project root directory
   */
  getProjectRoot() {
    return this.projectRoot;
  }
  // ===========================================================================
  // Indexing
  // ===========================================================================
  /**
   * Index all files in the project
   *
   * Uses a mutex to prevent concurrent indexing operations.
   */
  async indexAll(options = {}) {
    return this.indexMutex.withLock(async () => {
      try {
        this.fileLock.acquire();
      } catch {
        return { success: false, filesIndexed: 0, filesSkipped: 0, filesErrored: 0, nodesCreated: 0, edgesCreated: 0, errors: [{ message: "Could not acquire file lock - another process may be indexing", severity: "error" }], durationMs: 0 };
      }
      try {
        const result = await this.orchestrator.indexAll(options.onProgress, options.signal, options.verbose);
        if (result.success && result.filesIndexed > 0) {
          const unresolvedCount = this.queries.getUnresolvedReferencesCount();
          options.onProgress?.({
            phase: "resolving",
            current: 0,
            total: unresolvedCount
          });
          await this.resolveReferencesBatched((current, total) => {
            options.onProgress?.({
              phase: "resolving",
              current,
              total
            });
          });
        }
        return result;
      } finally {
        this.fileLock.release();
      }
    });
  }
  /**
   * Index specific files
   *
   * Uses a mutex to prevent concurrent indexing operations.
   */
  async indexFiles(filePaths) {
    return this.indexMutex.withLock(async () => {
      try {
        this.fileLock.acquire();
      } catch {
        return { success: false, filesIndexed: 0, filesSkipped: 0, filesErrored: 0, nodesCreated: 0, edgesCreated: 0, errors: [{ message: "Could not acquire file lock - another process may be indexing", severity: "error" }], durationMs: 0 };
      }
      try {
        return this.orchestrator.indexFiles(filePaths);
      } finally {
        this.fileLock.release();
      }
    });
  }
  /**
   * Sync with current file state (incremental update)
   *
   * Uses a mutex to prevent concurrent indexing operations.
   */
  async sync(options = {}) {
    return this.indexMutex.withLock(async () => {
      try {
        this.fileLock.acquire();
      } catch {
        return { filesChecked: 0, filesAdded: 0, filesModified: 0, filesRemoved: 0, nodesUpdated: 0, durationMs: 0 };
      }
      try {
        const result = await this.orchestrator.sync(options.onProgress);
        if (result.filesAdded > 0 || result.filesModified > 0) {
          if (result.changedFilePaths) {
            const unresolvedRefs = this.queries.getUnresolvedReferencesByFiles(result.changedFilePaths);
            options.onProgress?.({
              phase: "resolving",
              current: 0,
              total: unresolvedRefs.length
            });
            this.resolver.resolveAndPersist(unresolvedRefs, (current, total) => {
              options.onProgress?.({
                phase: "resolving",
                current,
                total
              });
            });
          } else {
            const unresolvedCount = this.queries.getUnresolvedReferencesCount();
            options.onProgress?.({
              phase: "resolving",
              current: 0,
              total: unresolvedCount
            });
            await this.resolveReferencesBatched((current, total) => {
              options.onProgress?.({
                phase: "resolving",
                current,
                total
              });
            });
          }
        }
        return result;
      } finally {
        this.fileLock.release();
      }
    });
  }
  /**
   * Check if an indexing operation is currently in progress
   */
  isIndexing() {
    return this.indexMutex.isLocked();
  }
  // ===========================================================================
  // File Watching
  // ===========================================================================
  /**
   * Start watching for file changes and auto-syncing.
   *
   * Uses native OS file events (FSEvents on macOS, inotify on Linux 19+,
   * ReadDirectoryChangesW on Windows) with debouncing to avoid thrashing.
   *
   * @param options - Watch options (debounce delay, callbacks)
   * @returns true if watching started successfully
   */
  watch(options = {}) {
    if (this.watcher?.isActive()) return true;
    this.watcher = new FileWatcher(
      this.projectRoot,
      this.config,
      async () => {
        const result = await this.sync();
        const filesChanged = result.filesAdded + result.filesModified + result.filesRemoved;
        return { filesChanged, durationMs: result.durationMs };
      },
      options
    );
    return this.watcher.start();
  }
  /**
   * Stop watching for file changes.
   */
  unwatch() {
    if (this.watcher) {
      this.watcher.stop();
      this.watcher = null;
    }
  }
  /**
   * Check if the file watcher is active.
   */
  isWatching() {
    return this.watcher?.isActive() ?? false;
  }
  /**
   * Get files that have changed since last index
   */
  getChangedFiles() {
    return this.orchestrator.getChangedFiles();
  }
  /**
   * Extract nodes and edges from source code (without storing)
   */
  extractFromSource(filePath, source) {
    return extractFromSource(filePath, source);
  }
  // ===========================================================================
  // Reference Resolution
  // ===========================================================================
  /**
   * Resolve unresolved references and create edges
   *
   * This method takes unresolved references from extraction and attempts
   * to resolve them using multiple strategies:
   * - Framework-specific patterns (React, Express, Laravel)
   * - Import-based resolution
   * - Name-based symbol matching
   */
  resolveReferences(onProgress) {
    const unresolvedRefs = this.queries.getUnresolvedReferences();
    return this.resolver.resolveAndPersist(unresolvedRefs, onProgress);
  }
  /**
   * Resolve references in batches to keep memory bounded on large codebases.
   * Processes chunks of unresolved refs, persisting results after each batch.
   */
  async resolveReferencesBatched(onProgress) {
    return this.resolver.resolveAndPersistBatched(onProgress);
  }
  /**
   * Get detected frameworks in the project
   */
  getDetectedFrameworks() {
    return this.resolver.getDetectedFrameworks();
  }
  /**
   * Re-initialize the resolver (useful after adding new files)
   */
  reinitializeResolver() {
    this.resolver.initialize();
  }
  // ===========================================================================
  // Graph Statistics
  // ===========================================================================
  /**
   * Get statistics about the knowledge graph
   */
  getStats() {
    const stats = this.queries.getStats();
    stats.dbSizeBytes = this.db.getSize();
    return stats;
  }
  /**
   * Active SQLite backend for this project's connection. `wasm` means
   * the native better-sqlite3 install failed and the WASM fallback is
   * serving requests at 5-10x the latency. Surfaced via `codegraph
   * status` and the `codegraph_status` MCP tool.
   */
  getBackend() {
    return this.db.getBackend();
  }
  // ===========================================================================
  // Node Operations
  // ===========================================================================
  /**
   * Get a node by ID
   */
  getNode(id) {
    return this.queries.getNodeById(id);
  }
  /**
   * Get all nodes in a file
   */
  getNodesInFile(filePath) {
    return this.queries.getNodesByFile(filePath);
  }
  /**
   * Get all nodes of a specific kind
   */
  getNodesByKind(kind) {
    return this.queries.getNodesByKind(kind);
  }
  /**
   * Search nodes by text
   */
  searchNodes(query, options) {
    return this.queries.searchNodes(query, options);
  }
  // ===========================================================================
  // Edge Operations
  // ===========================================================================
  /**
   * Get outgoing edges from a node
   */
  getOutgoingEdges(nodeId) {
    return this.queries.getOutgoingEdges(nodeId);
  }
  /**
   * Get incoming edges to a node
   */
  getIncomingEdges(nodeId) {
    return this.queries.getIncomingEdges(nodeId);
  }
  // ===========================================================================
  // File Operations
  // ===========================================================================
  /**
   * Get a file record by path
   */
  getFile(filePath) {
    return this.queries.getFileByPath(filePath);
  }
  /**
   * Get all tracked files
   */
  getFiles() {
    return this.queries.getAllFiles();
  }
  // ===========================================================================
  // Graph Query Methods
  // ===========================================================================
  /**
   * Get the context for a node (ancestors, children, references)
   *
   * Returns comprehensive context about a node including its containment
   * hierarchy, children, incoming/outgoing references, type information,
   * and relevant imports.
   *
   * @param nodeId - ID of the focal node
   * @returns Context object with all related information
   */
  getContext(nodeId) {
    return this.graphManager.getContext(nodeId);
  }
  /**
   * Traverse the graph from a starting node
   *
   * Uses breadth-first search by default. Supports filtering by edge types,
   * node types, and traversal direction.
   *
   * @param startId - Starting node ID
   * @param options - Traversal options
   * @returns Subgraph containing traversed nodes and edges
   */
  traverse(startId, options) {
    return this.traverser.traverseBFS(startId, options);
  }
  /**
   * Get the call graph for a function
   *
   * Returns both callers (functions that call this function) and
   * callees (functions called by this function) up to the specified depth.
   *
   * @param nodeId - ID of the function/method node
   * @param depth - Maximum depth in each direction (default: 2)
   * @returns Subgraph containing the call graph
   */
  getCallGraph(nodeId, depth = 2) {
    return this.traverser.getCallGraph(nodeId, depth);
  }
  /**
   * Get the type hierarchy for a class/interface
   *
   * Returns both ancestors (types this extends/implements) and
   * descendants (types that extend/implement this).
   *
   * @param nodeId - ID of the class/interface node
   * @returns Subgraph containing the type hierarchy
   */
  getTypeHierarchy(nodeId) {
    return this.traverser.getTypeHierarchy(nodeId);
  }
  /**
   * Find all usages of a symbol
   *
   * Returns all nodes that reference the specified symbol through
   * any edge type (calls, references, type_of, etc.).
   *
   * @param nodeId - ID of the symbol node
   * @returns Array of nodes and edges that reference this symbol
   */
  findUsages(nodeId) {
    return this.traverser.findUsages(nodeId);
  }
  /**
   * Get callers of a function/method
   *
   * @param nodeId - ID of the function/method node
   * @param maxDepth - Maximum depth to traverse (default: 1)
   * @returns Array of nodes that call this function
   */
  getCallers(nodeId, maxDepth = 1) {
    return this.traverser.getCallers(nodeId, maxDepth);
  }
  /**
   * Get callees of a function/method
   *
   * @param nodeId - ID of the function/method node
   * @param maxDepth - Maximum depth to traverse (default: 1)
   * @returns Array of nodes called by this function
   */
  getCallees(nodeId, maxDepth = 1) {
    return this.traverser.getCallees(nodeId, maxDepth);
  }
  /**
   * Calculate the impact radius of a node
   *
   * Returns all nodes that could be affected by changes to this node.
   *
   * @param nodeId - ID of the node
   * @param maxDepth - Maximum depth to traverse (default: 3)
   * @returns Subgraph containing potentially impacted nodes
   */
  getImpactRadius(nodeId, maxDepth = 3) {
    return this.traverser.getImpactRadius(nodeId, maxDepth);
  }
  /**
   * Find the shortest path between two nodes
   *
   * @param fromId - Starting node ID
   * @param toId - Target node ID
   * @param edgeKinds - Edge types to consider (all if empty)
   * @returns Array of nodes and edges forming the path, or null if no path exists
   */
  findPath(fromId, toId, edgeKinds) {
    return this.traverser.findPath(fromId, toId, edgeKinds);
  }
  /**
   * Get ancestors of a node in the containment hierarchy
   *
   * @param nodeId - ID of the node
   * @returns Array of ancestor nodes from immediate parent to root
   */
  getAncestors(nodeId) {
    return this.traverser.getAncestors(nodeId);
  }
  /**
   * Get immediate children of a node
   *
   * @param nodeId - ID of the node
   * @returns Array of child nodes
   */
  getChildren(nodeId) {
    return this.traverser.getChildren(nodeId);
  }
  /**
   * Get dependencies of a file
   *
   * @param filePath - Path to the file
   * @returns Array of file paths this file depends on
   */
  getFileDependencies(filePath) {
    return this.graphManager.getFileDependencies(filePath);
  }
  /**
   * Get dependents of a file
   *
   * @param filePath - Path to the file
   * @returns Array of file paths that depend on this file
   */
  getFileDependents(filePath) {
    return this.graphManager.getFileDependents(filePath);
  }
  /**
   * Find circular dependencies in the codebase
   *
   * @returns Array of cycles, each cycle is an array of file paths
   */
  findCircularDependencies() {
    return this.graphManager.findCircularDependencies();
  }
  /**
   * Find dead code (unreferenced symbols)
   *
   * @param kinds - Node kinds to check (default: functions, methods, classes)
   * @returns Array of unreferenced nodes
   */
  findDeadCode(kinds) {
    return this.graphManager.findDeadCode(kinds);
  }
  /**
   * Get complexity metrics for a node
   *
   * @param nodeId - ID of the node
   * @returns Object containing various complexity metrics
   */
  getNodeMetrics(nodeId) {
    return this.graphManager.getNodeMetrics(nodeId);
  }
  // ===========================================================================
  // Context Building
  // ===========================================================================
  /**
   * Get the source code for a node
   *
   * Reads the file and extracts the code between startLine and endLine.
   *
   * @param nodeId - ID of the node
   * @returns Code string or null if not found
   */
  async getCode(nodeId) {
    return this.contextBuilder.getCode(nodeId);
  }
  /**
   * Find relevant subgraph for a query
   *
   * Combines semantic search with graph traversal to find the most
   * relevant nodes and their relationships for a given query.
   *
   * @param query - Natural language query describing the task
   * @param options - Search and traversal options
   * @returns Subgraph of relevant nodes and edges
   */
  async findRelevantContext(query, options) {
    return this.contextBuilder.findRelevantContext(query, options);
  }
  /**
   * Build context for a task
   *
   * Creates comprehensive context by:
   * 1. Running FTS search to find entry points
   * 2. Expanding the graph around entry points
   * 3. Extracting code blocks for key nodes
   * 4. Formatting output for Claude
   *
   * @param input - Task description (string or {title, description})
   * @param options - Build options (maxNodes, includeCode, format, etc.)
   * @returns TaskContext object or formatted string (markdown/JSON)
   */
  async buildContext(input, options) {
    return this.contextBuilder.buildContext(input, options);
  }
  // ===========================================================================
  // Database Management
  // ===========================================================================
  /**
   * Optimize the database (vacuum and analyze)
   */
  optimize() {
    this.db.optimize();
  }
  /**
   * Clear all data from the graph
   */
  clear() {
    this.queries.clear();
  }
  /**
   * Alias for close() for backwards compatibility.
   * @deprecated Use close() instead
   */
  destroy() {
    this.close();
  }
  /**
   * Completely remove CodeGraph from the project.
   * This closes the database and deletes the .CodeGraph directory.
   *
   * WARNING: This permanently deletes all CodeGraph data for the project.
   */
  uninitialize() {
    this.close();
    removeDirectory(this.projectRoot);
  }
};
var index_default = CodeGraph;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CODEGRAPH_DIR,
  CodeGraph,
  CodeGraphError,
  ConfigError,
  DEFAULT_CONFIG,
  DatabaseError,
  FileError,
  FileLock,
  FileWatcher,
  LANGUAGES,
  MCPServer,
  MemoryMonitor,
  Mutex,
  NODE_KINDS,
  PROJECTS_FILENAME,
  ParseError,
  SearchError,
  VectorError,
  addProject,
  debounce,
  defaultLogger,
  detectLanguage,
  findNearestCodeGraphRoot,
  findNearestMonorepoRoot,
  getCodeGraphDir,
  getConfigPath,
  getDatabasePath,
  getLogger,
  getProjectsPath,
  getSupportedLanguages,
  initGrammars,
  isGrammarLoaded,
  isInitialized,
  isLanguageSupported,
  loadAllGrammars,
  loadGrammarsForLanguages,
  loadProjectEntries,
  loadProjects,
  processInBatches,
  removeProject,
  saveProjects,
  scanForProjects,
  setLogger,
  silentLogger,
  syncProjects,
  throttle
});
