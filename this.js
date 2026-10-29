// 'this' in JavaScript
// ====================

// 1. this in Objects (Methods)
const user = {
  name: "Ali",
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

user.greet(); // 'this' refers to the user object -> "Hello, my name is Ali"

// 2. this in Regular Functions
// In non-strict mode, 'this' refers to the global object (window in browser, global in Node)
// In strict mode, 'this' is undefined

function showThis() {
  console.log(this);
}

showThis(); // Depends on environment (global object or undefined in strict mode)

// 3. this in Arrow Functions
// Arrow functions do NOT have their own 'this'. They inherit 'this' from their lexical scope.

const person = {
  name: "Ahsan",
  regular: function () {
    console.log("Regular:", this.name); // 'this' refers to person object
  },
  arrow: () => {
    console.log("Arrow:", this.name); // 'this' inherits from global scope
  },
};

person.regular(); // Regular: Ahsan
person.arrow();   // Arrow: undefined (in global scope)

// Another example with arrow function in nested context
const obj = {
  name: "Sara",
  outer() {
    const innerArrow = () => {
      console.log(this.name); // Inherits 'this' from outer() -> obj
    };
    innerArrow();
  },
};

obj.outer(); // Sara

// 4. call(), apply(), bind()
// Used to explicitly set the value of 'this'

const student = {
  firstName: "Hamza",
  lastName: "Khan",
};

function introduce(city, country) {
  console.log(
    `My name is ${this.firstName} ${this.lastName}, from ${city}, ${country}.`
  );
}

// call() - Invokes the function immediately with arguments passed individually
introduce.call(student, "Lahore", "Pakistan");

// apply() - Invokes the function immediately with arguments passed as an array
introduce.apply(student, ["Karachi", "Pakistan"]);

// bind() - Returns a new function with 'this' bound, can be called later
const boundIntroduce = introduce.bind(student, "Islamabad");
boundIntroduce("Pakistan");

// Partial application with bind
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5)); // 10
console.log(double(10)); // 20
