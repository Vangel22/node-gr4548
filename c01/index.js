// Scope
// 1. Global
// 2. Function
// 3. Block
var test = "Test"; // Global scope

console.log(test);

function scopeTest() {
  // Function scope
  // var name = "John";

  if (true) {
    // sekogas ke bide tocno
    // Block scope
    var name = "John";
    const surname = "Doe";
    let age = 25;
    console.log("Surname", surname);
  }
  //   console.log("Age", age); // ReferenceError: age is not defined

  console.log("Name", name);
}

scopeTest();

// Variables
// var -> function scoped
// let -> block scoped
// const -> block scoped

// Data types
// Primitive - immutable - number, string, boolean, null, undefined
// Non-primitive - mutable - array, object, function

const age = 25;

// age = 24; // TypeError: Assignment to constant variable.

// Object - key, values
const person = {
  firstname: "Jane",
  lastname: "Doe",
  age: 23,
  address: "My address",
};

// Access to object
console.log(person.firstname); // dot notation (we know the property exists)
console.log(person["age"]); // bracket notation (we assume the property exist)

const keyAddress = "address";

console.log(person[keyAddress]); // Dynamic access to keys - value
console.log(person["address"]); // Isto kako linija 55

// Mutability of key, values

person.nationality = "Macedonian";

console.log(person.nationality);

// Array
const numbers = [33, 3, 13, 7, 17, 9, 2];
console.log(numbers[2]);

// Find -> returns the first number that satisfies the condition
const findOdd = numbers.find((num) => num % 2 !== 0);
console.log("Odd number", findOdd);

// Map -> returns a new array that is mapped from the current one
const newNumbers = numbers.map((num) => num * 2);
console.log("Mapped numbers", newNumbers);

// Filter -> returns the filtered array
const numbersBiggerOrEqualThanFive = numbers.filter((num) => num >= 5);

// false
if (0) {
}

// true
if (1) {
}

console.log("Numbers bigger or equal than 5", numbersBiggerOrEqualThanFive);

// Sort -> returns the array sorted
const sortNumbers = numbers.sort((a, b) => {
  if (a < b) return -1; // ascending < 0
  if (a > b) return 1; // descending > 0
  if (a === b) return 0; // equal  === 0
});

const sortNumbersAsc = numbers.sort((a, b) => a - b); // ascending
const sortNumbersDesc = numbers.sort((a, b) => b - a); // descending

// One equal = inicialization
// Two equals == comparisson of values
// Three equals === comparisson of values and type

console.log("Sorted numbers", sortNumbers);

// Reduce -> returns the accumulator value
const sum = numbers.reduce((acc, curr) => (acc += curr), 0);
console.log("Sum of numbers", sum);

// ForEach -> it loops through the array, it does not return anything
const vals = numbers.forEach((num) => console.log("Brojka: ", num));
// vals will be undefined because forEach does not return anything

// Obicen for loop
let pomosna = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    pomosna.push(numbers[i]);
  }
}

console.log("Pomosna niza", pomosna);

// Every

const oddNumbers = numbers.every((num) => num % 2 !== 0);
console.log("All numbers are odd? ", oddNumbers);

// Some

const hasEvenNumber = numbers.some((num) => num % 2 === 0);
console.log("Is there an even number? ", hasEvenNumber);

// Functions -> point of functions is to be reused
// 1. Named

function add(a, b) {
  return a + b;
}

function powerOfSum() {
  const numOne = 1;
  const numTwo = 2;

  const sum = add(numOne, numTwo); // 22

  // power of sum

  //   return Math.pow(sum);
  return sum ** sum; // ES7
}

console.log(powerOfSum());

// 2. Anonymous
const res = function (a, b) {
  return a + b;
};

// 3. Arrow

const result = (a, b) => a + b;
// console.log(result())
// const result = (a, b) => { return a + b };

// 4. Generator - yield keyword

// 5. Recursive - bonus

// 6. High order function

// 7. IIFE (Immediatelly Invoked Function Expression)

// Part one
// (() => {})(
//   // Reference to rememeber const newNumbers = numbers.map((num) => num * 2);

//   // Part two
//   () => {
//     console.log("I am inside IIFE");
//     // Private scope
//     const a = 1;
//     const b = 2;

//     console.log("Sum of a + b", a + b);
//   })

// Part three
(() => {
  console.log("I am inside IIFE");
  // Private scope
  const a = 1;
  const b = 2;

  console.log("Sum of a + b", a + b);
})();

(function () {
  console.log("I am inside IIFE");
  // Private scope
  const a = 1;
  const b = 2;

  console.log("Sum of a + b", a + b);
})();

// Git repository init

// 1. git init
// 2. git add .
// 3. git commit -m "Initial commit"
// 4. git push --set-upstream origin main

// 1. git add .
// Osven ako sakame da izbereme samo eden ili poveke fajlovi da commit-neme
// *Za taa cel: git add <imeto-na-fajlot>
// 2. git commit -m "Second commit"
// 3. git push
