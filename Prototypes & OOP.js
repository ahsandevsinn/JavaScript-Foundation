// JavaScript Prototypes & OOP Examples

// 1. Prototype
const obj = {};
console.log("1. Prototype:", Object.getPrototypeOf(obj) === Object.prototype); // true

// 2. Prototype Chain
const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

console.log("\n2. Prototype Chain:");
console.log("dog.barks:", dog.barks); // true (own property)
console.log("dog.eats:", dog.eats);   // true (inherited from animal prototype)
console.log("dog.toString():", dog.toString()); // inherited from Object.prototype

// 3. Constructor Functions
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

console.log("\n3. Constructor Functions:");
const john = new Person("John", 30);
john.greet(); // "Hi, I'm John"

// 4. Classes
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

console.log("\n4. Classes:");
const jane = new PersonClass("Jane", 25);
jane.greet();

// 5. Constructor (demonstrated above)

// 6. Methods
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  drive() { // instance method
    console.log(`${this.brand} is driving`);
  }
}

console.log("\n6. Methods:");
const car = new Car("Toyota");
car.drive();

// 7. Inheritance
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

console.log("\n7. Inheritance:");
const rex = new Dog("Rex");
rex.speak(); // "Rex barks"

// 8. Encapsulation
class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

console.log("\n8. Encapsulation:");
const acc = new BankAccount();
acc.deposit(100);
console.log("Balance:", acc.getBalance()); // 100
// console.log(acc.#balance); // SyntaxError

// 9. Polymorphism
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

console.log("\n9. Polymorphism:");
const shapes = [new Circle(2), new Square(3)];
shapes.forEach(s => console.log("Area:", s.area())); // different implementations, same method call

// 10. extends (demonstrated above)

// 11. super
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

console.log("\n11. super:");
const whiskers = new Cat("Whiskers", "Orange");
whiskers.speak();

// 12. Static Methods
class MathUtil {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log("\n12. Static Methods:");
console.log("MathUtil.add(2, 3):", MathUtil.add(2, 3)); // 5
console.log("MathUtil.multiply(4, 5):", MathUtil.multiply(4, 5)); // 20
// const m = new MathUtil(); m.add(); // TypeError
