/*
JavaScript Scope Notes
======================

Scope describes where a variable can be accessed in a program.

1. Global scope
   A variable declared at the top level is generally available throughout
   its script or module. Top-level `let` and `const` in a browser script do
   not become properties of `window`; in Node.js, top-level declarations in
   a CommonJS module are module-scoped. Avoid adding unnecessary globals.
*/
const appName = "Scope Demo";

function showAppName() {
  console.log(appName); // Reads the top-level binding
}

/*
2. Function scope
   Variables declared with `var` are scoped to their containing function.
   Function parameters are also available within that function. `let` and
   `const` are block-scoped, even when declared inside a function.
*/
function functionScopeExample() {
  var functionOnly = "inside this function";
  console.log(functionOnly);
}
// console.log(functionOnly); // ReferenceError: not defined here

/*
3. Block scope
   A block is code inside { }. `let` and `const` declared in a block are
   accessible only in that block. `var` does not follow block scope.
*/
if (true) {
  let blockOnly = "inside this block";
  const anotherBlockOnly = 42;
  var notBlockScoped = "var escapes the block";
  console.log(blockOnly, anotherBlockOnly);
}
console.log(notBlockScoped); // `var` is function-scoped or global-scoped
// console.log(blockOnly); // ReferenceError: not defined here

/*
4. Lexical scope
   Scope is determined by where functions and blocks are written in the
   source code. An inner function can access bindings in its enclosing
   lexical scopes, even after the outer function has returned (a closure).
*/
function makeGreeter(name) {
  return function greet() {
    console.log(`Hello, ${name}`); // `name` comes from the enclosing scope
  };
}
const greetAmina = makeGreeter("Amina");
greetAmina();

/*
5. Scope chain
   When JavaScript looks up a name, it checks the current scope first, then
   each enclosing lexical scope, and finally the global scope. If no binding
   is found, it throws a ReferenceError.
*/
const country = "Pakistan"; // Global (or outermost script) binding

function scopeChainExample() {
  const city = "Lahore"; // Enclosing function binding

  function printLocation() {
    const street = "Mall Road"; // Current function binding
    console.log(street, city, country); // Current -> enclosing -> global
  }

  printLocation();
}
scopeChainExample();

/*
6. Shadowing
   A declaration in an inner scope shadows a declaration with the same name
   in an outer scope. The outer binding still exists, but the inner code sees
   the nearer binding. `let`/`const` cannot redeclare a `let`/`const` name in
   the same scope, but they can use that name in a nested scope.
*/
const color = "blue";

function shadowingExample() {
  const color = "green"; // Shadows the outer `color` in this function
  console.log(color); // "green"
}

shadowingExample();
console.log(color); // "blue"
