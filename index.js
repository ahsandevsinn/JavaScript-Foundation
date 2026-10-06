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



