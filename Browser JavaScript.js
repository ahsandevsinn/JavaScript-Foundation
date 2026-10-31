// Browser JavaScript Examples

// 1. DOM Access
console.log("=== 1. DOM ===");
console.log("Document:", document);
console.log("Document Title:", document.title);

// Note: The following DOM manipulations require an HTML file to run in browser
// Examples shown for reference

// 2. Selecting Elements (Example structure)
/*
HTML structure for examples:
<h1 id="main-heading" class="heading">Hello</h1>
<p class="item">Item 1</p>
<p class="item">Item 2</p>
<button id="btn">Click Me</button>
*/

// Simulated selections (will only work in browser)
/*
const heading = document.getElementById("main-heading");
const items = document.getElementsByClassName("item");
const paragraphs = document.getElementsByTagName("p");
const firstItem = document.querySelector(".item");
const allItems = document.querySelectorAll(".item");

console.log("\n=== 2. Selecting Elements ===");
console.log("Heading:", heading);
console.log("Items:", items);
console.log("All Items:", allItems);
*/

// 3. Creating Elements
/*
const newDiv = document.createElement("div");
const text = document.createTextNode("Hello World");
newDiv.appendChild(text);
document.body.appendChild(newDiv);
*/

// 4. Modifying Elements
/*
const heading = document.querySelector("h1");
heading.textContent = "Updated Heading";
heading.innerHTML = "<span>Updated</span> Heading";
heading.classList.add("active");
heading.style.color = "blue";
*/

// 5 & 6. Events & Event Listeners
/*
const button = document.querySelector("#btn");

button.addEventListener("click", function() {
  console.log("Button clicked!");
});

function handleClick() {
  console.log("Clicked");
}
button.addEventListener("click", handleClick);
// button.removeEventListener("click", handleClick);
*/

// 7. Event Bubbling
/*
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", (e) => {
  console.log("Child clicked");
  // e.stopPropagation(); // Prevent bubbling
});
*/

// 8. Event Delegation
/*
const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
*/

// 9. Forms
/*
const form = document.querySelector("#myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  console.log("Name:", name, "Email:", email);
});
*/

// 10. Local Storage
console.log("\n=== 10. Local Storage ===");

// Store data
localStorage.setItem("username", "JohnDoe");
console.log("Stored username:", localStorage.getItem("username"));

// Store object
const user = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify(user));
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log("Stored user object:", storedUser);

// Remove specific item
// localStorage.removeItem("username");

// Clear all
// localStorage.clear();

// 11. Session Storage
console.log("\n=== 11. Session Storage ===");

// Store data
sessionStorage.setItem("token", "abc123");
console.log("Stored token:", sessionStorage.getItem("token"));

// Store object
const cart = { items: ["apple", "banana"], total: 10 };
sessionStorage.setItem("cart", JSON.stringify(cart));
const storedCart = JSON.parse(sessionStorage.getItem("cart"));
console.log("Stored cart:", storedCart);

// Remove specific item
// sessionStorage.removeItem("token");

// Clear all
// sessionStorage.clear();

console.log("\n=== Note ===");
console.log("DOM manipulation examples are commented as they require a browser environment.");
console.log("Storage examples will work in browser environment.");
