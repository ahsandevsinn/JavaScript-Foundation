// Async JS Examples

console.log("=== Async JS Examples ===\n");

// 1. Synchronous vs Asynchronous
console.log("1. Synchronous:");
console.log("Start");
console.log("Middle");
console.log("End");

console.log("\n2. Asynchronous:");
console.log("Start");
setTimeout(() => {
  console.log("Timeout executed after 1 second");
}, 1000);
console.log("End (executed before timeout)");

// 3. Callbacks
function greet(name, callback) {
  console.log(`\n3. Hello, ${name}`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("John", sayGoodbye);

// 4. Promises
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  }, 1500);
});

console.log("\n4. Promise created...");
myPromise
  .then((result) => console.log("Promise result:", result))
  .catch((error) => console.log("Promise error:", error))
  .finally(() => console.log("Promise completed"));

// 5. async/await
async function fetchUser() {
  try {
    console.log("\n5. Fetching user with async/await...");
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    console.log("User:", user.name, "-", user.email);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchUser();

// 6. Promise Chaining
fetch("https://jsonplaceholder.typicode.com/users/2")
  .then(response => {
    console.log("\n6. Promise chaining - Response status:", response.status);
    return response.json();
  })
  .then(user => {
    console.log("User:", user.name);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then(response => response.json())
  .then(posts => console.log(`Posts count: ${posts.length}`))
  .catch(error => console.error("Error:", error));

// 7. Promise.all - Parallel Execution
async function fetchMultiple() {
  try {
    console.log("\n7. Promise.all - Fetching in parallel...");
    const [usersRes, postsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts")
    ]);
    
    const users = await usersRes.json();
    const posts = await postsRes.json();
    
    console.log(`Users: ${users.length}, Posts: ${posts.length}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchMultiple();

// 8. Promise.allSettled
Promise.allSettled([
  Promise.resolve("Success 1"),
  Promise.reject("Error 1"),
  Promise.resolve("Success 2")
]).then(results => {
  console.log("\n8. Promise.allSettled results:");
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`  ${index}: fulfilled - ${result.value}`);
    } else {
      console.log(`  ${index}: rejected - ${result.reason}`);
    }
  });
});

// 9. Fetch with POST
async function createPost() {
  try {
    console.log("\n9. POST request with fetch...");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "My Post",
        body: "This is the content",
        userId: 1
      })
    });
    
    const data = await response.json();
    console.log("Created post:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

createPost();

// 10. Error Handling
async function fetchWithErrorHandling() {
  try {
    console.log("\n10. Error handling example...");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/999999");
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Caught error:", error.message);
  }
}

fetchWithErrorHandling();
