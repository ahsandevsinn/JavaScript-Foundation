// JavaScript Modules
// ==================

// Modules allow us to split code into reusable, maintainable files.
// We can export functions/variables/objects and import them where needed.

// 1. ES Modules (ECMAScript Modules) - Modern Standard
// ----------------------------------------------------
// Use "type": "module" in package.json OR use .mjs extension
// Use `export` and `import` keywords

// --- Named Exports ---
// Export multiple items from a file
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// --- Default Exports ---
// Export a single main item from a file
// A file can have only ONE default export

export default function multiply(a, b) {
  return a * b;
}

// You can also export default later:
// const divide = (a, b) => a / b;
// export default divide;

// Usage in another file (ES Modules):
/*
// Importing named exports
import { add, subtract, PI } from "./math.js";

// Importing default export
import multiply from "./math.js";

// Importing default + named exports together
import multiply, { add, PI } from "./math.js";

// Importing all as a namespace
import * as math from "./math.js";
console.log(math.add(5, 10));
console.log(math.PI);

// Renaming imports
import { add as sum } from "./math.js";

// Importing for side effects only
import "./script.js";
*/

// 2. CommonJS (Node.js Traditional Module System)
// -----------------------------------------------
// Uses `require()` to import and `module.exports` / `exports` to export
// Default in older Node.js projects (no "type": "module")

// Exporting with CommonJS
/*
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };
// OR
exports.add = add;
exports.subtract = subtract;
*/

// Default-like export
/*
module.exports = function multiply(a, b) {
  return a * b;
};
*/

// Importing with CommonJS
/*
const math = require("./math");
console.log(math.add(2, 3));

const multiply = require("./multiply");
console.log(multiply(2, 3));

const { add, subtract } = require("./math");
*/

// 3. Key Differences: ES Modules vs CommonJS
// -------------------------------------------
// | Feature | ES Modules | CommonJS |
// | --- | --- | --- |
// | Syntax | import/export | require/module.exports |
// | Loading | Asynchronous (static) | Synchronous (dynamic) |
// | Browser Support | Native (modern browsers) | Not natively supported |
// | Usage | Modern JS, React, Vite, etc. | Older Node.js apps |
// | Tree Shaking | Supported | Not supported |
// | Strict Mode | Always in strict mode | Not automatically |
