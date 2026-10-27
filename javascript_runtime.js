// JavaScript Runtime Concepts
// =============================

// ---------------------------------------------------------------------------
// 1. Execution Context
// ---------------------------------------------------------------------------
// Execution context is the environment where code is executed.
// Types: Global, Function, and Eval contexts.
// Each context has: Variable Environment, Scope Chain, and `this` binding.

console.log("=== Execution Context ===");

// Global execution context
const globalVar = "I'm in global scope";

// Function execution context
function greet(name) {
  // Function execution context created here
  const message = `Hello, ${name}!`;
  return message;
}

console.log(greet("Ahsan"));

// ---------------------------------------------------------------------------
// 2. Call Stack
// ---------------------------------------------------------------------------
// LIFO (Last In, First Out) structure that tracks function calls.
// JavaScript is single-threaded with one call stack.

console.log("\n=== Call Stack ===");

function first() {
  console.log("First function called");
  second();
}

function second() {
  console.log("Second function called");
  third();
}

function third() {
  console.log("Third function called");
}

first();
// Output: First, Second, Third (in order of call stack push)

// ---------------------------------------------------------------------------
// 3. Heap
// ---------------------------------------------------------------------------
// Memory storage for objects, variables, and functions.
// Variables store references to heap-allocated objects.

console.log("\n=== Heap ===");

// Objects are stored in heap memory
const obj1 = { name: "Object 1", value: 100 };
const obj2 = obj1; // Both reference the same heap object

obj2.value = 200;
console.log("obj1.value:", obj1.value); // 200 (same heap object)

// ---------------------------------------------------------------------------
// 4. Web APIs
// ---------------------------------------------------------------------------
// Browser-provided APIs that run outside the JavaScript engine.
// Examples: setTimeout, fetch, DOM events, XMLHttpRequest.

console.log("\n=== Web APIs ===");

// setTimeout is a Web API - runs asynchronously
console.log("Before setTimeout");
setTimeout(() => {
  console.log("Inside setTimeout - Web API callback");
}, 2000);
console.log("After setTimeout (runs immediately)");

// ---------------------------------------------------------------------------
// 5. Task Queue (Callback Queue)
// ---------------------------------------------------------------------------
// Holds callbacks from asynchronous operations waiting to be executed.
// Only processed when call stack is empty.

console.log("\n=== Task Queue ===");

console.log("Sync 1");

setTimeout(() => {
  console.log("Task Queue callback 1");
}, 0);

setTimeout(() => {
  console.log("Task Queue callback 2");
}, 0);

console.log("Sync 2");
// Output: Sync 1, Sync 2, Task Queue callback 1, Task Queue callback 2

// ---------------------------------------------------------------------------
// 6. Event Loop
// ---------------------------------------------------------------------------
// Continuously checks if call stack is empty.
// When empty, pulls next task from task queue and pushes to call stack.

console.log("\n=== Event Loop ===");

console.log("Event Loop Start");

setTimeout(() => {
  console.log("Event Loop - setTimeout callback");
}, 0);

console.log("Event Loop End");
// Output: Start, End, setTimeout callback

// ---------------------------------------------------------------------------
// 7. Microtasks
// ---------------------------------------------------------------------------
// Higher-priority tasks executed after each macrotask, before next macrotask.
// Includes: Promise callbacks, queueMicrotask(), MutationObserver.

console.log("\n=== Microtasks ===");

console.log("Microtask Start");

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then");
});

queueMicrotask(() => {
  console.log("Microtask: queueMicrotask");
});

console.log("Microtask End");
// Output: Start, End, Promise.then, queueMicrotask

// ---------------------------------------------------------------------------
// 8. Macrotasks
// ---------------------------------------------------------------------------
// Lower-priority tasks executed by the event loop.
// Includes: setTimeout, setInterval, I/O events, UI rendering.

console.log("\n=== Macrotasks ===");

console.log("Macrotask Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

console.log("Macrotask End");
// Output: Start, End, setTimeout

// ---------------------------------------------------------------------------
// 9. How Asynchronous Code Actually Executes
// ---------------------------------------------------------------------------
// Full execution flow demonstration

console.log("\n=== Asynchronous Execution Flow ===");

console.log("1: Synchronous code starts");

// Web API: setTimeout schedules a macrotask
setTimeout(() => {
  console.log("6: Macrotask (setTimeout) executes");
}, 0);

// Microtask: Promise callback
Promise.resolve().then(() => {
  console.log("4: Microtask (Promise.then) executes");
});

// queueMicrotask: another microtask
queueMicrotask(() => {
  console.log("5: Microtask (queueMicrotask) executes");
});

console.log("2: Synchronous code continues");

// Another macrotask with longer delay
setTimeout(() => {
  console.log("7: Second macrotask executes");
  
  // Microtasks inside macrotask run before next macrotask
  Promise.resolve().then(() => {
    console.log("8: Microtask inside macrotask");
  });
}, 10);

console.log("3: Synchronous code ends");

// Final Output Order:
// 1: Synchronous code starts
// 2: Synchronous code continues
// 3: Synchronous code ends
// 4: Microtask (Promise.then) executes
// 5: Microtask (queueMicrotask) executes
// 6: Macrotask (setTimeout) executes
// 7: Second macrotask executes
// 8: Microtask inside macrotask

// ---------------------------------------------------------------------------
// 10. Complete Example: Real-world Async Pattern
// ---------------------------------------------------------------------------

console.log("\n=== Real-world Async Pattern ===");

// Simulate API call
function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Web API: setTimeout simulates network delay
    setTimeout(() => {
      if (url) {
        resolve({ data: `Data from ${url}`, status: 200 });
      } else {
        reject(new Error("Invalid URL"));
      }
    }, 1000);
  });
}

async function processData() {
  console.log("Starting data fetch...");
  
  try {
    // Awaiting a Promise (microtask when resolved)
    const result = await fetchData("https://api.example.com/users");
    console.log("Data received:", result.data);
    
    // Multiple awaits run sequentially
    const result2 = await fetchData("https://api.example.com/posts");
    console.log("Second data:", result2.data);
    
    return [result, result2];
  } catch (error) {
    console.error("Error:", error.message);
  }
}

processData();

// Key Takeaways:
// - Synchronous code runs first on the call stack
// - Web APIs (setTimeout, fetch) execute outside the engine
// - When complete, callbacks go to Task Queue
// - Microtasks (Promises) have priority over macrotasks
// - Event loop continuously: run stack → drain microtasks → run next task