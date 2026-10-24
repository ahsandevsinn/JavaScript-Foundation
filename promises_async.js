// Promises & Async/Await
// ======================

// Asynchronous programming means code does not block while waiting for
// slow operations (network requests, file reads, timers). JavaScript is
// single-threaded, so async tasks use callbacks, promises, or async/await.

// ---------------------------------------------------------------------------
// 1. Promise States
// ---------------------------------------------------------------------------
// A Promise is an object representing an eventual value. It has three states:
//   - pending:    initial state, operation not yet complete
//   - fulfilled: operation completed successfully, value is available
//   - rejected:  operation failed, error is thrown
// Once a promise is settled (fulfilled or rejected), it cannot change state.

// Creating a promise manually:
const delay = (ms) =>
  new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error("Delay cannot be negative"));
      return;
    }
    setTimeout(() => resolve(`Done after ${ms}ms`), ms);
  });

// ---------------------------------------------------------------------------
// 2. .then() and .catch()
// ---------------------------------------------------------------------------
// .then() runs after a promise fulfills; .catch() runs on rejection.
// Both return new promises, so you can chain them.

delay(1000)
  .then((result) => {
    console.log(result); // "Done after 1000ms"
    return result + " again";
  })
  .then((modified) => {
    console.log(modified); // "Done after 1000ms again"
  })
  .catch((error) => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Cleanup runs regardless of outcome");
  });

// ---------------------------------------------------------------------------
// 3. async and await
// ---------------------------------------------------------------------------
// async functions always return a promise. Inside them, `await` pauses
// execution until the awaited promise settles, making async code look sync.

async function fetchData() {
  try {
    const message = await delay(500);
    console.log("Inside async:", message);
    return message;
  } catch (error) {
    console.error("Caught:", error.message);
    throw error; // re-throw to caller
  }
}

fetchData().then((msg) => console.log("Returned:", msg));

// ---------------------------------------------------------------------------
// 4. Asynchronous API Calls (Fetch API)
// ---------------------------------------------------------------------------
// fetch() returns a promise that resolves with a Response object.
// You typically need to parse JSON with .json(), which also returns a promise.

async function fetchUser(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const user = await response.json(); // parse JSON body
  return user;
}

// Usage:
// fetchUser(1)
//   .then((user) => console.log(user.name))
//   .catch((err) => console.error("Fetch failed:", err.message));

// ---------------------------------------------------------------------------
// 5. Promise.all and Promise.race
// ---------------------------------------------------------------------------
// Run multiple promises concurrently:
//   - Promise.all: resolves when ALL promises resolve, or rejects on first rejection.
//   - Promise.race: resolves/rejects as soon as one promise settles.

const p1 = delay(1000);
const p2 = delay(2000);

Promise.all([p1, p2]).then((results) => {
  console.log("All done:", results); // ["Done after 1000ms", "Done after 2000ms"]
});

Promise.race([p1, p2]).then((winner) => {
  console.log("Race winner:", winner); // "Done after 1000ms"
});

// ---------------------------------------------------------------------------
// 6. Error Handling Summary
// ---------------------------------------------------------------------------
// - Use try/catch inside async functions for clean error handling.
// - .catch() on promise chains for non-async code.
// - Always handle rejections; unhandled rejections can crash the process.