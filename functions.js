// Function Declaration user can call the function anywhere in the code.
function greeting(){
    console.log("Hello, welcome to the program!");
}

// Function expression
// function expression store a function in a variable.

const greet = function(){
    console.log("Hello, welcome to the program!");
}

greet();

// Arrow functions
// Arrow Function is a short syntax for writing function expressions. It is introduced in ES6 (ECMAScript 2015).
const sayHello = () => {
    console.log("Hello, welcome to the program!");
};

sayHello();

// Parameters
// Arguments
// Default parameters
// Return values

function add(a, b = 0) {
    return a + b;
}

console.log(add(5, 10)); // Output: 15
console.log(add(5)); // Output: 5 (b defaults to 0)

// Callback functions
// Higher-order functions
// Pure functions
// Function scope 

function hello(name) {
    console.log(`Hello, ${name}!`);
}

function sayHello(callback) {
    console.log("Preparing to greet...");
    callback("Ahsan");
}

sayHello();