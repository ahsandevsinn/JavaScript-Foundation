// JavaScript Objects
// Object properties ko key-value pairs mein rakhta hai.

// 1. Creating objects — Object banana
const person = {
  name: "Amina",
  age: 25,
};
console.log(person);

// 2. Properties aur methods
// Property data/value hoti hai; method object ke andar function hota hai.
const user = {
  name: "Ali",
  greet() {
    return `Hello, ${this.name}!`;
  },
};
console.log(user.name); // "Ali" — property
console.log(user.greet()); // "Hello, Ali!" — method

// 3. Accessing properties — Dot notation aur bracket notation
const book = {
  title: "JavaScript Basics",
  author: "Sara",
  "publication year": 2024,
};
console.log(book.title); // Dot notation
console.log(book["author"]); // Bracket notation
console.log(book["publication year"]); // Spaces wali key ke liye brackets

const propertyName = "title";
console.log(book[propertyName]); // Variable key ke liye brackets

// 4. Nested objects — Object ke andar object
const student = {
  name: "Hamza",
  address: {
    city: "Lahore",
    country: "Pakistan",
  },
};
console.log(student.address.city); // "Lahore"

// 5. Object destructuring — Properties ko variables mein nikalna
const course = {
  courseName: "JavaScript",
  duration: "8 weeks",
};
const { courseName, duration } = course;
console.log(courseName, duration);

// Variable ka naam alag rakhne ke liye alias use kar sakte hain.
const { courseName: subject } = course;
console.log(subject); // "JavaScript"

// 6. Object spread — Object ki properties copy/merge karna
// Spread se shallow copy banti hai; nested objects ka reference share hota hai.
const originalSettings = { theme: "light", fontSize: 16 };
const updatedSettings = { ...originalSettings, theme: "dark" };
console.log(updatedSettings); // { theme: "dark", fontSize: 16 }
console.log(originalSettings); // Original unchanged

// 7. Object.keys() — Property keys ka array
const profile = { name: "Noor", role: "Developer" };
console.log(Object.keys(profile)); // ["name", "role"]

// 8. Object.values() — Property values ka array
console.log(Object.values(profile)); // ["Noor", "Developer"]

// 9. Object.entries() — [key, value] pairs ka array
console.log(Object.entries(profile)); // [["name", "Noor"], ["role", "Developer"]]
