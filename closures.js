/*
Closures
========

A closure is a function that retains access to its outer function's variables
even after the outer function has finished executing. It is created when an
inner function references variables from its enclosing (outer) scope.

1. What is a closure?
   A closure is the combination of a function and the lexical environment in
   which that function was declared. This environment contains all the local
   variables, parameters, and outer lexical environments that were in scope at
   the time the function was created.

   When an inner function accesses variables from an outer function's scope,
   those variables are "captured" and remain alive even after the outer
   function returns.

2. Lexical environment
   Every function in JavaScript has access to its lexical environment — the
   set of variables and functions visible at the function's definition
   location. When a function is created, it captures the entire chain of outer
   lexical environments. This is why inner functions can access outer
   variables even after the outer function returns.

3. Closure use cases
   - Data privacy: Hide implementation details from outside access
   - Function factories: Create specialized functions with preset parameters
   - State management: Maintain state without global variables
   - Event handlers: Preserve state in callbacks
   - Currying: Transform a function that takes multiple arguments into a
     sequence of functions that take a single argument each

4. Private state
   Closures provide a way to create truly private variables that cannot be
   accessed or modified from outside the function. Only the methods returned
   from the outer function can interact with the private state.

5. Function factories
   A function factory is a function that returns another function, often
   with some preset configuration captured from the outer scope.
*/

// --- 1. Basic Closure Example ---

function outer(x) {
  function inner(y) {
    return x + y; // 'x' is captured from outer's scope
  }
  return inner;
}

const addFive = outer(5);
console.log(addFive(3)); // 8 — 'x' is still 5 even though outer() already returned

// --- 2. Lexical Environment ---

function makeGreeter(name) {
  return function greet() {
    console.log(`Hello, ${name}`); // `name` comes from the enclosing scope
  };
}

const greetAmina = makeGreeter("Amina");
greetAmina(); // "Hello, Amina"

// --- 3. Closure Use Cases ---

// Data Privacy
function createCounter() {
  let count = 0; // Private — not accessible outside
  return {
    increment() { count++; },
    decrement() { count--; },
    getCount() { return count; }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
// counter.count; // undefined — private!

// State Management
function createBankAccount() {
  let balance = 0; // Private state
  return {
    deposit(amount) { balance += amount; },
    withdraw(amount) { if (amount <= balance) balance -= amount; },
    getBalance() { return balance; }
  };
}

const account = createBankAccount();
account.deposit(100);
account.withdraw(30);
console.log(account.getBalance()); // 70

// Event Handlers (preserving state in callbacks)
function setupButton() {
  let clickCount = 0;
  const button = {
    click() {
      clickCount++;
      console.log(`Button clicked ${clickCount} time(s)`);
    }
  };
  return button;
}

const button = setupButton();
button.click(); // "Button clicked 1 time(s)"
button.click(); // "Button clicked 2 time(s)"

// Currying
function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

const doubleThenMultiply = multiply(2)(3);
console.log(doubleThenMultiply(4)); // 24

// --- 4. Private State ---

// Module pattern using closures
const Person = (function () {
  let privateVariable = "I am private";
  function privateFunction() {
    console.log(privateVariable);
  }

  return {
    publicMethod() {
      privateFunction();
    },
    getPrivate() {
      return privateVariable;
    }
  };
})();

Person.publicMethod(); // "I am private"
console.log(Person.privateVariable); // undefined
console.log(Person.getPrivate()); // "I am private"

// --- 5. Function Factories ---

function multiplier(factor) {
  return function (number) {
    return number * factor; // 'factor' is captured
  };
}

const double = multiplier(2);
const triple = multiplier(3);
const hundred = multiplier(100);

console.log(double(5));   // 10
console.log(triple(5));   // 15
console.log(hundred(5));  // 500

// Factory with configuration
function createLogger(prefix) {
  return function (message) {
    console.log(`[${prefix}] ${message}`);
  };
}

const errorLogger = createLogger("ERROR");
const infoLogger = createLogger("INFO");

errorLogger("Something went wrong"); // "[ERROR] Something went wrong"
infoLogger("Application started");   // "[INFO] Application started"

// --- Common Pitfall with Loops ---

// Classic closure-in-loop issue
function createFunctions() {
  const funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs.push(function () {
      return i; // All three functions capture the same `i`
    });
  }
  return funcs;
}

const funcs = createFunctions();
console.log(funcs[0]()); // 3 — not 0!
console.log(funcs[1]()); // 3 — not 1!
console.log(funcs[2]()); // 3 — not 2!

// Fix with IIFE (Immediately Invoked Function Expression)
function createFunctionsFixed() {
  const funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs.push((function (j) {
      return function () {
        return j; // Each function captures its own `j`
      };
    })(i));
  }
  return funcs;
}

const funcsFixed = createFunctionsFixed();
console.log(funcsFixed[0]()); // 0
console.log(funcsFixed[1]()); // 1
console.log(funcsFixed[2]()); // 2

// Fix with let (block-scoped)
function createFunctionsLet() {
  const funcs = [];
  for (let i = 0; i < 3; i++) {
    funcs.push(function () {
      return i; // Each iteration gets its own `i`
    });
  }
  return funcs;
}

const funcsLet = createFunctionsLet();
console.log(funcsLet[0]()); // 0
console.log(funcsLet[1]()); // 1
console.log(funcsLet[2]()); // 2