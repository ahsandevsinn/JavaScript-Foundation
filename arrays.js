// Must-learn Arrays topics
// Array values ko ek ordered list mein rakhta hai. Indexing 0 se shuru hoti hai.

// 1. Creating arrays — Array banana
const fruits = ["apple", "banana", "mango"];
console.log(fruits); // ["apple", "banana", "mango"]

// 2. Accessing elements — Index se value lena
console.log(fruits[0]); // "apple" (pehla element)
console.log(fruits[2]); // "mango" (teesra element)
console.log(fruits[fruits.length - 1]); // "mango" (aakhri element)

// 3. push() — End mein element add karna
// Original array change hota hai; push() nayi length return karta hai.
const pushExample = ["red", "blue"];
pushExample.push("green");
console.log(pushExample); // ["red", "blue", "green"]

// 4. pop() — End se element remove karna
// Original array change hota hai; pop() removed element return karta hai.
const popExample = ["red", "blue", "green"];
const removedColor = popExample.pop();
console.log(removedColor); // "green"
console.log(popExample); // ["red", "blue"]

// 5. slice() — Array ka portion copy karna
// slice(start, end): start index shamil hota hai, end index shamil nahi hota.
// Original array change nahi hota.
const sliceExample = [10, 20, 30, 40, 50];
const portion = sliceExample.slice(1, 4);
console.log(portion); // [20, 30, 40]
console.log(sliceExample); // [10, 20, 30, 40, 50]

// 6. splice() — Elements add ya remove karna
// splice(start, deleteCount, ...items) original array ko change karta hai.
const spliceExample = ["tea", "coffee", "juice"];
const removedDrinks = spliceExample.splice(1, 1, "water");
console.log(removedDrinks); // ["coffee"]
console.log(spliceExample); // ["tea", "water", "juice"]

// 7. map() — Har element ko transform karna
// map() transformed values ke saath naya array deta hai; original nahi badalta.
const mapNumbers = [1, 2, 3];
const doubled = mapNumbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6]

// 8. filter() — Condition ke mutabiq elements select karna
// filter() condition true hone wale elements ka naya array deta hai.
const filterNumbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterNumbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

// 9. find() — Pehla matching element lena
// find() pehla element return karta hai jo condition pass kare; warna undefined.
const findNumbers = [3, 7, 10, 12];
const firstLargeNumber = findNumbers.find((number) => number > 8);
console.log(firstLargeNumber); // 10

// 10. reduce() — Array ko ek result mein combine karna
// reduce() accumulator mein har step ka result jama karta hai.
const reduceNumbers = [1, 2, 3, 4];
const total = reduceNumbers.reduce((sum, number) => sum + number, 0);
console.log(total); // 10

// 11. includes() — Check karna ke value mojood hai ya nahi
// includes() true ya false return karta hai.
const includeColors = ["red", "blue", "green"];
console.log(includeColors.includes("blue")); // true
console.log(includeColors.includes("black")); // false

// 12. forEach() — Har element par operation karna
// forEach() har element ke liye callback chalata hai; naya array return nahi karta.
const forEachNames = ["Ali", "Sara", "Ahmed"];
forEachNames.forEach((name) => {
  console.log(`Hello, ${name}!`);
});
