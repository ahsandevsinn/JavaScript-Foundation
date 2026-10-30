# JavaScript Prototypes & OOP

## 1. Prototype
Every JavaScript object has an internal property called `[[Prototype]]`, accessible via `Object.getPrototypeOf(obj)` or `obj.__proto__` (legacy). The prototype is an object from which other objects inherit properties and methods.

```js
const obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
```

## 2. Prototype Chain
When accessing a property/method, JS looks on the object first. If not found, it looks up the prototype chain until it reaches `null`.

```js
const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

console.log(dog.barks); // true (own property)
console.log(dog.eats);  // true (inherited from animal prototype)
console.log(dog.toString()); // inherited from Object.prototype
```

## 3. Constructor Functions
Before ES6 classes, objects were created using constructor functions (called with `new`).

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const john = new Person("John", 30);
john.greet(); // "Hi, I'm John"
```

## 4. Classes
ES6 introduced `class` syntax as syntactic sugar over prototype-based inheritance.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const jane = new Person("Jane", 25);
jane.greet();
```

## 5. Constructor
The `constructor()` method is a special method called automatically when creating an instance with `new`. Used to initialize object properties.

## 6. Methods
Methods are functions defined in the prototype/class. Instance methods are called on objects; they access `this`.

```js
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  drive() { // instance method
    console.log(`${this.brand} is driving`);
  }
}
```

## 7. Inheritance
Inheritance allows a child class to reuse properties/methods from a parent class.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // "Rex barks"
```

## 8. Encapsulation
Hiding internal details and exposing only what's necessary. In JS, this is achieved with private fields (`#`) or closures.

```js
class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
// console.log(acc.#balance); // SyntaxError
```

## 9. Polymorphism
Objects of different types can be treated through the same interface. Achieved via method overriding.

```js
class Shape {
  area() { return 0; }
}

class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
  area() { return Math.PI * this.r ** 2; }
}

class Square extends Shape {
  constructor(s) { super(); this.s = s; }
  area() { return this.s ** 2; }
}

const shapes = [new Circle(2), new Square(3)];
shapes.forEach(s => console.log(s.area())); // different implementations, same method call
```

## 10. `extends`
Used to create a child class that inherits from a parent class. Sets up the prototype chain.

## 11. `super`
Calls the parent class constructor or methods.

- `super()` in constructor must be called before using `this` in derived class
- `super.method()` calls parent method

```js
class Cat extends Animal {
  constructor(name, color) {
    super(name); // call parent constructor
    this.color = color;
  }
  speak() {
    super.speak(); // call parent speak
    console.log("Meow!");
  }
}
```

## 12. Static Methods
Methods called on the class itself, not on instances. Defined with `static`. Often used for utility functions.

```js
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(2, 3)); // 5
// const m = new MathUtil(); m.add(); // TypeError
```

**Key distinction:** Prototypes are the mechanism; constructor functions/classes are the patterns for building objects with shared behavior.
