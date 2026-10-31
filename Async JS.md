# Async JS

## 1. Synchronous vs Asynchronous
- **Synchronous**: Code runs line by line, blocking execution until each operation completes.
- **Asynchronous**: Code allows operations (like API calls, timers) to run in the background without blocking the main thread.

```js
// Synchronous
console.log("Start");
console.log("Middle");
console.log("End");

// Asynchronous
console.log("Start");
setTimeout(() => {
  console.log("Timeout executed");
}, 1000);
console.log("End");
```

## 2. Callbacks
A callback is a function passed as an argument to another function, executed later when the task is completed.

```js
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("John", sayGoodbye);
```

### Callback Hell
Nesting multiple callbacks can lead to unreadable and hard-to-maintain code.

```js
getUser(1, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});
```

## 3. Promises
A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: `pending`, `fulfilled`, `rejected`.

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Done"));
```

### Promise Chaining
Avoids callback hell by chaining `.then()` methods.

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(user => {
    console.log(user);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error("Error:", error));
```

## 4. async/await
`async/await` is syntactic sugar over Promises, making asynchronous code look and behave like synchronous code.

- `async` function always returns a Promise
- `await` pauses execution until the Promise is resolved

```js
async function fetchUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchUser();
```

### Multiple Awaits
```js
async function fetchUserAndPosts() {
  try {
    const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await userResponse.json();
    
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const posts = await postsResponse.json();
    
    console.log(user.name);
    console.log(posts.length);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchUserAndPosts();
```

### Parallel Execution with Promise.all
When operations are independent, run them in parallel for better performance.

```js
async function fetchMultiple() {
  try {
    const [users, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json())
    ]);
    
    console.log("Users:", users.length);
    console.log("Posts:", posts.length);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchMultiple();
```

### Other Promise methods
- `Promise.allSettled()` - Waits for all promises to settle (fulfilled or rejected)
- `Promise.race()` - Returns first settled promise
- `Promise.any()` - Returns first fulfilled promise

```js
Promise.allSettled([
  Promise.resolve(1),
  Promise.reject("error"),
  Promise.resolve(3)
]).then(results => console.log(results));
```

## 5. Fetch API
`fetch()` returns a Promise and is used to make HTTP requests.

```js
// GET
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data));

// POST
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "foo", body: "bar", userId: 1 })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

## 6. Error Handling in Async Code
Always use try/catch with async/await or .catch() with promises.

```js
async function safeFetch() {
  try {
    const response = await fetch("https://invalid-url.example");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Fetch failed:", error.message);
    return null;
  }
}
```

## 7. Event Loop (Brief Overview)
JavaScript is single-threaded but uses the event loop for async operations:
1. Call Stack - executes synchronous code
2. Web APIs - handle async operations (setTimeout, fetch)
3. Callback Queue/Microtask Queue - holds callbacks/promises
4. Event Loop - moves tasks from queues to call stack when stack is empty

**Microtasks** (higher priority): Promises (`.then`, `catch`, `finally`), `queueMicrotask()`
**Macrotasks**: `setTimeout`, `setInterval`, I/O, UI rendering
