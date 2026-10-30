// JSON & APIs Examples

// 1. JSON
const userObj = {
  name: "John",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "coding"],
  address: {
    city: "New York",
    zip: "10001"
  }
};

console.log("1. Original Object:", userObj);

// 2. JSON.stringify()
const jsonString = JSON.stringify(userObj);
console.log("\n2. JSON.stringify():", jsonString);
console.log("Type:", typeof jsonString);

// Pretty printed JSON
console.log("\nPretty Printed JSON:");
console.log(JSON.stringify(userObj, null, 2));

// 3. JSON.parse()
const parsedUser = JSON.parse(jsonString);
console.log("\n3. JSON.parse():", parsedUser);
console.log("Name:", parsedUser.name);
console.log("Type:", typeof parsedUser);

// 4. GET Requests
async function getUsers() {
  try {
    console.log("\n4. GET Request - Fetching Users:");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(`Fetched ${data.length} users`);
    console.log(data.slice(0, 2));
  } catch (error) {
    console.error("Error:", error);
  }
}

// 5. POST Requests
async function createUser() {
  try {
    console.log("\n5. POST Request - Creating User:");
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Alice",
        email: "alice@example.com",
        username: "alice123"
      })
    });

    const data = await response.json();
    console.log("Created User:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// 6. PUT/PATCH Requests
async function updateUserPUT() {
  try {
    console.log("\n6a. PUT Request - Full Update:");
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "John Doe",
        email: "john.doe@example.com",
        username: "johndoe",
        phone: "123-456-7890"
      })
    });

    const data = await response.json();
    console.log("PUT Result:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updateUserPATCH() {
  try {
    console.log("\n6b. PATCH Request - Partial Update:");
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "newemail@example.com"
      })
    });

    const data = await response.json();
    console.log("PATCH Result:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// 7. DELETE Request
async function deleteUser() {
  try {
    console.log("\n7. DELETE Request:");
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "DELETE"
    });

    console.log("Status:", response.status);
    console.log("Deleted successfully!");
  } catch (error) {
    console.error("Error:", error);
  }
}

// 8. Response Handling
async function fetchWithResponseHandling() {
  try {
    console.log("\n8. Response Handling:");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    console.log("Response Status:", response.status);
    console.log("Response OK:", response.ok);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched Post:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Run all examples
(async () => {
  await getUsers();
  await createUser();
  await updateUserPUT();
  await updateUserPATCH();
  await deleteUser();
  await fetchWithResponseHandling();
})();
