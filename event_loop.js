// Promise.all & Event Loop
// =========================

// ---------------------------------------------------------------------------
// 1. Promise.all()
// ---------------------------------------------------------------------------
// Runs multiple promises concurrently. Resolves with an array of results
// when ALL promises resolve. Rejects immediately if ANY promise rejects.

const delay = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

Promise.all([delay(1000, "A"), delay(2000, "B"), delay(1500, "C")])
  .then((results) => console.log("Promise.all:", results)); // ["A", "B", "C"]

// Rejection: first rejection wins, others are ignored.
Promise.all([delay(500, "ok"), Promise.reject(new Error("fail")), delay(1000, "late")])
  .catch((err) => console.error("Promise.all rejected:", err.message)); // "fail"

// ---------------------------------------------------------------------------
// 2. Sequential vs Parallel Execution
// ---------------------------------------------------------------------------
// Sequential: each operation waits for the previous one to finish.
async function sequential() {
  const a = await delay(500, 1);
  const b = await delay(500, 2);
  const c = await delay(500, 3);
  return [a, b, c]; // takes ~1500ms
}

// Parallel: start all operations at once, await them together.
async function parallel() {
  const [a, b, c] = await Promise.all([
    delay(500, 1),
    delay(500, 2),
    delay(500, 3),
  ]);
  return [a, b, c]; // takes ~500ms
}

// ---------------------------------------------------------------------------
// 3. Call Stack and Callback Queue
// ---------------------------------------------------------------------------
// JavaScript has one thread with a call stack and several queues.
//
// Call Stack: where synchronous code runs. LIFO structure. Each function
// execution pushes a stack frame; when it returns, the frame is popped.
//
// Callback Queue (Task Queue): holds callbacks for asynchronous operations
// (setTimeout, network events, I/O). These run only after the stack is empty.
//
// Execution flow:
//   1. Run synchronous code until stack is empty.
//   2. Dequeue and run the next task from the callback queue.
//   3. Repeat.

console.log("Start"); // synchronous

setTimeout(() => console.log("Timeout"), 0); // async -> callback queue

console.log("End"); // synchronous
// Output: Start, End, Timeout
// Even with 0ms delay, the callback cannot run until the stack is clear.

// ---------------------------------------------------------------------------
// 4. Microtasks vs Tasks (Macrotasks)
// ---------------------------------------------------------------------------
// Two queues exist:
//   - Microtask queue: processed after each macrotask, before the next
//     macrotask. Includes: Promise callbacks (.then/.catch/.finally),
//     queueMicrotask(), process.nextTick() (Node).
//   - Task (macrotask) queue: setTimeout, setInterval, I/O, UI events.
//
// Order within one loop:
//   1. One macrotask from the task queue runs.
//   2. ALL microtasks are drained.
//   3. Next macrotask runs, then microtasks drain again.

console.log("1: sync start");

setTimeout(() => console.log("2: setTimeout"), 0); // macrotask

Promise.resolve().then(() => console.log("3: microtask then")); // microtask

queueMicrotask(() => console.log("4: queueMicrotask")); // microtask

console.log("5: sync end");
// Output:
//   1: sync start
//   5: sync end
//   3: microtask then
//   4: queueMicrotask
//   2: setTimeout

// ---------------------------------------------------------------------------
// 5. setTimeout() Execution Order
// ---------------------------------------------------------------------------
// setTimeout schedules a macrotask. Even with delay 0, it waits until:
//   - the call stack is empty, AND
//   - all microtasks have been drained.
// Multiple timers run in scheduling order (not guaranteed by spec, but
// practical behavior in modern browsers/Node).

setTimeout(() => console.log("T1"), 0);
setTimeout(() => console.log("T2"), 0);
setTimeout(() => console.log("T3"), 0);

Promise.resolve().then(() => console.log("M1"));

console.log("sync");
// Output: sync, M1, T1, T2, T3

// ---------------------------------------------------------------------------
// 6. Combining It All: A Practical Example
// ---------------------------------------------------------------------------
// Fetch two users in parallel, then process results sequentially.

async function fetchUser(id) {
  return delay(300, { id, name: `User${id}` });
}

async function loadUsers() {
  console.log("Starting parallel fetch...");
  const [user1, user2] = await Promise.all([fetchUser(1), fetchUser(2)]);
  console.log("Both fetched:", user1.name, user2.name);
  return [user1, user2];
}

loadUsers();

// Key takeaways:
// - Use Promise.all for independent, parallel operations.
// - Use sequential await when each step depends on the previous.
// - Microtasks (promises) always run before macrotasks (setTimeout).
// - The event loop continuously: run stack, drain microtasks, run next task.