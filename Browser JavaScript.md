# Browser JavaScript

## 1. DOM (Document Object Model)
The DOM is a tree-like representation of an HTML document. It allows JavaScript to dynamically access, update, add, and remove HTML elements and styles.

```js
// Access the document
console.log(document);
console.log(document.title);
```

## 2. Selecting Elements
We can select HTML elements using various methods:

```js
// By ID
const heading = document.getElementById("main-heading");

// By Class Name (returns HTMLCollection)
const items = document.getElementsByClassName("item");

// By Tag Name (returns HTMLCollection)
const paragraphs = document.getElementsByTagName("p");

// By CSS Selector (returns first match)
const firstItem = document.querySelector(".item");

// By CSS Selector (returns all matches - NodeList)
const allItems = document.querySelectorAll(".item");
```

## 3. Creating Elements
We can create new elements dynamically using `createElement()`.

```js
// Create a new element
const newDiv = document.createElement("div");

// Create text node
const text = document.createTextNode("Hello World");

// Append text to element
newDiv.appendChild(text);

// Append to document
document.body.appendChild(newDiv);
```

## 4. Modifying Elements
We can change content, attributes, classes, and styles of elements.

```js
const heading = document.querySelector("h1");

// Change text content
heading.textContent = "Updated Heading";

// Change HTML content
heading.innerHTML = "<span>Updated</span> Heading";

// Set attributes
heading.setAttribute("id", "new-heading");

// Get attributes
console.log(heading.getAttribute("class"));

// Remove attributes
heading.removeAttribute("id");

// Add/Remove/Toggle classes
heading.classList.add("active");
heading.classList.remove("active");
heading.classList.toggle("active");

// Modify CSS styles
heading.style.color = "blue";
heading.style.fontSize = "24px";
```

## 5. Events
Events are actions that happen in the browser (clicks, keypresses, form submissions, page load, etc.). JavaScript can listen for and respond to these events.

## 6. Event Listeners
We use `addEventListener()` to attach event handlers to elements.

```js
const button = document.querySelector("#btn");

// Add event listener
button.addEventListener("click", function() {
  alert("Button clicked!");
});

// With arrow function
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "yellow";
});

// Remove event listener
function handleClick() {
  console.log("Clicked");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```

## 7. Event Bubbling
When an event occurs on an element, it bubbles up from the target element to its ancestors (from innermost to outermost).

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

```js
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", (e) => {
  console.log("Child clicked");
  // e.stopPropagation(); // Prevent bubbling
});
```

Output when clicking child: "Child clicked" then "Parent clicked" (without `stopPropagation()`).

## 8. Event Delegation
Event delegation is a technique of attaching a single event listener to a parent element to handle events on its child elements. This is useful for dynamically added elements.

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```js
const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
```

## 9. Forms
We can interact with form elements, get values, and handle form submissions.

```js
const form = document.querySelector("#myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  
  console.log("Name:", name);
  console.log("Email:", email);
});
```

Accessing form elements:
```js
const form = document.forms[0];
const input = form.elements["username"];
```

## 10. Local Storage
`localStorage` stores data with no expiration date. Data persists even after the browser is closed and reopened.

```js
// Store data
localStorage.setItem("username", "JohnDoe");

// Get data
const username = localStorage.getItem("username");
console.log(username); // "JohnDoe"

// Remove specific item
localStorage.removeItem("username");

// Clear all data
localStorage.clear();

// Store objects (must stringify)
const user = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify(user));

// Retrieve objects
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name);
```

## 11. Session Storage
`sessionStorage` stores data for one session. Data is cleared when the page session ends (tab/browser closed).

```js
// Store data
sessionStorage.setItem("token", "abc123");

// Get data
const token = sessionStorage.getItem("token");
console.log(token);

// Remove item
sessionStorage.removeItem("token");

// Clear all
sessionStorage.clear();

// Store objects
const cart = { items: ["apple", "banana"], total: 10 };
sessionStorage.setItem("cart", JSON.stringify(cart));

// Retrieve
const storedCart = JSON.parse(sessionStorage.getItem("cart"));
```

**Key Differences:**
| Feature | localStorage | sessionStorage |
| --- | --- | --- |
| Lifetime | Persistent (no expiry) | Until tab/browser is closed |
| Scope | Same origin, all tabs/windows | Same origin, same tab only |
| Storage limit | ~5-10MB | ~5-10MB |

**Key Points:**
- Use `textContent` for plain text, `innerHTML` for HTML content
- Event delegation improves performance for dynamic elements
- Always use `e.preventDefault()` to prevent default form behavior
- Both storage types only store strings - use `JSON.stringify()`/`JSON.parse()` for objects