# JSON & APIs

## 1. JSON (JavaScript Object Notation)
JSON is a lightweight data format used to exchange data between a server and a web application. It is text-based, human-readable, and language-independent. 

Key points:
- JSON uses key-value pairs, similar to JS objects.
- Keys must be double-quoted strings.
- Values can be: strings, numbers, booleans, arrays, objects, or `null`.
- Functions, `undefined`, `Date`, and `Map/Set` cannot be directly represented in JSON.

```json
{
  "name": "John",
  "age": 30,
  "isStudent": false,
  "hobbies": ["reading", "coding"],
  "address": {
    "city": "New York",
    "zip": "10001"
  }
}
```

## 2. JSON.stringify()
Converts a JavaScript object/value into a JSON string. Useful for sending data to a server.

```js
const user = {
  name: "John",
  age: 30,
  isStudent: false
};

const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"John","age":30,"isStudent":false}'
console.log(typeof jsonString); // "string"
```

You can also use optional parameters:
- `replacer` - array or function to filter properties
- `space` - adds indentation for readability

```js
console.log(JSON.stringify(user, null, 2)); // Pretty printed
```

## 3. JSON.parse()
Converts a JSON string back into a JavaScript object/value. Useful for receiving data from a server.

```js
const jsonString = '{"name":"John","age":30,"isStudent":false}';
const user = JSON.parse(jsonString);

console.log(user.name); // "John"
console.log(typeof user); // "object"
```

## 4. fetch()
`fetch()` is a built-in JavaScript method used to make HTTP requests to servers. It returns a Promise that resolves to a `Response` object.

Basic syntax:
```js
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

It's commonly used with `async/await` for cleaner syntax.

## 5. GET Requests
GET is used to retrieve data from a server. It is the default method for `fetch()`.

```js
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUsers();
```

## 6. POST Requests
POST is used to send data to a server to create a new resource. Requires a `body`, `headers`, and method set to `"POST"`.

```js
async function createUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Alice",
        email: "alice@example.com"
      })
    });
    
    const data = await response.json();
    console.log("Created:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

createUser();
```

## 7. PUT/PATCH
Both are used to update existing resources.

- `PUT` - Replaces the entire resource with the data provided.
- `PATCH` - Partially updates the resource (only sends changed fields).

```js
// PUT - Full update
async function updateUserPUT() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "John Doe",
      email: "john.doe@example.com",
      username: "johndoe"
    })
  });
  const data = await response.json();
  console.log("PUT:", data);
}

// PATCH - Partial update
async function updateUserPATCH() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "newemail@example.com"
    })
  });
  const data = await response.json();
  console.log("PATCH:", data);
}
```

## 8. DELETE
DELETE is used to remove a resource from the server.

```js
async function deleteUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "DELETE"
    });
    
    console.log("Status:", response.status); // 200 or 204 on success
    console.log("Deleted successfully");
  } catch (error) {
    console.error("Error:", error);
  }
}

deleteUser();
```

## 9. Request Body
The `body` contains the data sent to the server. When sending JSON, it must be a string (use `JSON.stringify()`).

```js
body: JSON.stringify({ title: "foo", body: "bar", userId: 1 })
```

Note: `GET` and `DELETE` requests typically do not have a request body.

## 10. Headers
Headers provide additional information about the request (like content type, authentication, etc.).

Common headers:
- `Content-Type: application/json` - Tells the server we're sending JSON
- `Authorization: Bearer <token>` - For authenticated requests
- `Accept: application/json` - Tells the server what format we expect back

```js
headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer YOUR_TOKEN_HERE"
}
```

## 11. Response Handling
When using `fetch()`, we need to check and parse the response properly.

Key methods:
- `response.json()` - Parses JSON response body
- `response.text()` - Parses as plain text
- `response.ok` - Boolean, `true` if status is 200-299
- `response.status` - HTTP status code (e.g., 200, 404, 500)

```js
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```

**Common HTTP Status Codes:**
- `200 OK` - Request succeeded
- `201 Created` - Resource created successfully
- `400 Bad Request` - Invalid request
- `401 Unauthorized` - Authentication required
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error
