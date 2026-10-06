"use-strict"; // use strict mode means javascript strictly follow the modern javascript rules and regulations. it is used to avoid errors in javascript code. it is used to write secure javascript code. it is used to write clean javascript code. it is used to write efficient javascript code. it is used to write maintainable javascript code. it is used to write readable javascript code. it is used to write scalable javascript code. it is used to write reusable javascript code. it is used to write modular javascript code. it is used to write testable javascript code. it is used to write debuggable javascript code. it is used to write performant javascript code. it is used to write optimized javascript code. it is used to write compatible javascript code. it is used to write cross-browser compatible javascript code. it is used to write cross-platform compatible javascript code. it is used to write cross-device compatible javascript code. it is used to write cross-language compatible javascript code. it is used to write cross-framework compatible javascript code. it is used to write cross-library compatible javascript code. it is used to write cross-version compatible javascript code. it is used to write cross-environment compatible javascript code.

// what is variable ?
// variable is named of container that stores data in memory.

// what is var ?
// var is a keyword that can change variable value. and same variable assign multiple times. var is using as an old javascript.
// var name = "Ahsan";
// console.log(name);
// var name = "Ahsan Khan";
// console.log(name);

// what is let ?
// let is a keyword that can change variable value. and same variable value can be changed but not redeclared. let is using as a new javascript.
// let age = 20;
// console.log(age);
// age = 21;
// console.log(age);


// what is const ?
// const is a keyword that cannot change variable value. and same variable value cannot be changed or redeclared. const is using as a new javascript.
// const country = "Pakistan";
// console.log(country);
// country = "India"; // This will throw an error because const cannot be reassigned.           

// Declaration
// let age;
// // Initialization
// age = 20;

// Assignment
// let age = 20; // Declaration and Initialization
// console.log(age); // Output: 20

// // Reassignment
// age = 21;
// console.log(age); // Output: 21

// // Variable Naming
// let userAge = 25; // Valid variable name
// let 1userAge = 30; // Invalid variable name (cannot start with a number)
// let user-age = 35; // Invalid variable name (cannot contain hyphens)
// let userAge! = 40; // Invalid variable name (cannot contain special characters except $ and _)

// Variable Scope
// variable scope means where we use variable in which area and scope 
let age = 20;
console.log(20);

let name = "Ahsan";
name = "Ahsan Khan";
console.log(name);

var country = "Pakistan";
var country = "India";
console.log(country);

const city = "Karachi";
console.log(city);

const user = {
    name : "Ahsan",
    age : 20,
    country : "Pakistan"

};
user.age = 30;
console.log(user.age);


// This is a single line comment
/* This is a 
multi-line comment */


// Statement 
let x = 10; // This is a statement that declares a variable x and assigns it the value 10

// Expression
let a = 10;
let b = 20;
let sum = a + b; // This is an expression that calculates the sum of a and b and assigns it to the variable sum
console.log(sum); // Output: 30 and this is a produces output of expression

// log
console.log("Hello, World!"); // Console log prints/display value of variables/Expressions.

// String
// String is a data type thats stores text/charcters data.

// String Declaratio 3 Ways
// 1. Using Single Quotes
let firstName = 'Ahsan';

// 2. Using Double Quotes
let lastName = "Khan";

// 3. Using Backticks 
let fullName = `Ahsan Khan`;


// number also in String

let number = "+9243843433"; // This is a string representation of a number, not an actual number data type.
let actualNumber = 9243843433; // This is an actual number data type.

// String Combine 
let userName = firstName + " " + lastName;
console.log(userName.length); // Output: Ahsan Khan
console.log(userName.toLocaleUpperCase());
console.log(userName.includes("Ahsan")); // Output: true



