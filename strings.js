// JavaScript Strings
// String text/characters ko store karta hai. Strings immutable hoti hain:
// methods aam tor par original string ko change nahi karte, naya result dete hain.

// 1. Creating strings — Single, double, aur backtick quotes
const firstName = 'Amina';
const greeting = "Hello";
console.log(firstName, greeting);

// 2. Template literals — Backticks mein variables/expressions embed karna
const age = 25;
const introduction = `Mera naam ${firstName} hai aur meri age ${age} hai.`;
console.log(introduction);

// ${} ke andar expression bhi likh sakte hain; multiline text bhi asaan hota hai.
const price = 500;
console.log(`Do items ki total price: ${price * 2}`);
const message = `Hello, ${firstName}!
JavaScript seekhne ke liye khush aamdeed.`;
console.log(message);

// 3. split() — String ko separator ke mutabiq array mein baantna
// Original string nahi badalti.
const sentence = "JavaScript is fun";
const words = sentence.split(" ");
console.log(words); // ["JavaScript", "is", "fun"]
console.log("a,b,c".split(",")); // ["a", "b", "c"]

// 4. join() — Array ke elements ko separator ke saath string banana
// join() array method hai; split() ka aam tor par ulta kaam karta hai.
const joinedWords = words.join("-");
console.log(joinedWords); // "JavaScript-is-fun"

// 5. includes() — Check karna ke string mein text mojood hai ya nahi
// true ya false deta hai; matching case-sensitive hoti hai.
const courseName = "JavaScript Basics";
console.log(courseName.includes("Script")); // true
console.log(courseName.includes("script")); // false

// 6. startsWith() — Check karna ke string diye gaye text se shuru hoti hai
const fileName = "lesson.js";
console.log(fileName.startsWith("lesson")); // true

// 7. endsWith() — Check karna ke string diye gaye text par khatam hoti hai
console.log(fileName.endsWith(".js")); // true

// 8. replace() — Pehli matching value ko doosri value se replace karna
// Original string nahi badalti; replaceAll() tamam matches replace karta hai.
const oldGreeting = "Hello, Ali! Hello, Sara!";
console.log(oldGreeting.replace("Hello", "Hi")); // "Hi, Ali! Hello, Sara!"
console.log("red red".replaceAll("red", "blue")); // "blue blue"

// 9. trim() — String ke shuru aur aakhir ke whitespace hatana
// Beech ke spaces nahi hatata; original string nahi badalti.
const paddedText = "   JavaScript   ";
console.log(paddedText.trim()); // "JavaScript"
console.log(paddedText); // Original spaces ke saath hai

// 10. substring() — String ka hissa lena
// substring(start, end): start shamil, end shamil nahi. Negative indexes 0 samjhe jate hain.
const language = "JavaScript";
console.log(language.substring(0, 4)); // "Java"
console.log(language.substring(4)); // "Script"

// 11. slice() — String ka hissa lena, negative indexes bhi support karta hai
// slice(start, end): start shamil, end shamil nahi. Original string nahi badalti.
console.log(language.slice(0, 4)); // "Java"
console.log(language.slice(-6)); // "Script" — Aakhir se index count karta hai

// substring() aur slice() mein farq: negative indexes slice() mein kaam karte hain.
console.log(language.substring(-6)); // "JavaScript" — -6 ko 0 samajhta hai

