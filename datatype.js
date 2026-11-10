// Level 1 — Basic Understanding
// Q1. Identify Data Types

// Har variable ka data type batao.
// let name = "Ahsan";
// let age = 20;
// let isDeveloper = true;
// let salary;
// let address = null;
// let skills = ["JavaScript", "Node.js"];
// let user = { name: "Ali" };

// console.log('Data Types:');
// console.log("name:", typeof name); // string
// console.log("age:", typeof age); // number
// console.log("isDeveloper:", typeof isDeveloper); // boolean
// console.log("salary:", typeof salary); // undefined
// console.log("address:", typeof address); // object (null is of type object)
// console.log("skills:", typeof skills); // object (arrays are of type object)
// console.log("user:", typeof user); // object

// // Q2. typeof Practice

// // Output predict karo:
// console.log(typeof "Hello");
// console.log(typeof 100);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof 100n);
// console.log(typeof Symbol("id"));
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof function(){});


// Q3. Null vs Undefined
// let a;
// let b = null;

// console.log(a);
// console.log(b);

// console.log(typeof a);
// console.log(typeof b);
// null is a special value that represents the intentional absence of any object value, while undefined indicates that a variable has been declared but has not yet been assigned a value. In JavaScript, null is of type "object", while undefined is of type "undefined".


// Q4. Number vs String
let a = 10;
let b = "10";

console.log(typeof a);
console.log(typeof b);
console.log(a + b);
console.log(a - b);

// number and string are different data types. In the first case, `a` is a number and `b` is a string. When you use the `+` operator with a number and a string, JavaScript converts the number to a string and concatenates them, resulting in "1010". However, when you use the `-` operator, JavaScript tries to convert the string to a number, resulting in 0 (10 - 10).

// Q5. Primitive Copy
let x = 100;
let y = x;

y = 500;

console.log(x);
console.log(y);


// Output aur reason?
// Output:
// 100
// 500

// Reason 
// In javascript primitive data types are copied by value. thats why x value is 100 and y value is 500.

// Q6. Object Reference
// let user1 = {
//     name: "Ahsan",
//     age: 20
// };

// let user2 = user1;

// user2.age = 25;

// console.log(user1.age);
// console.log(user2.age);


// Dono ki age same kyun hui?
// Because Object is copied by reference not value


// Q7. Array Reference
let fruits1 = ["Apple", "Banana"];

let fruits2 = fruits1;

fruits2.push("Mango");

console.log(fruits1);
console.log(fruits2);


// Output predict karo.
// ["Apple", "Banana", "Mango"]
// ["Apple", "Banana", "Mango"]


// Q8. Independent Object Copy

// Is code ko modify karo taake user1 change karne se user2 change na ho.
let user1 = {
    name: "Ahsan",
    age: 20
};

let user2 = { ...user1 }; 

user2.age = 30;

console.log(user1);
console.log(user2);


// Hint: Spread operator ... use kar sakte ho.
// We need to use seperad operator to copy the object by value instead of reference.