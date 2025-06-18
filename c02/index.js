// const vangel = require("./calculator");
// const calc = require("./calculator");

const { greet, calculator, calculatorTwo } = require("./calculator");

// Moduli vo Node.js

// 1. Third party modul - doagja od nekade, ne e od nasata sredina
// 2. Core modul - modul koj sto postoi vo Node.js (http, os, fs)
// 3. Local modul - toa sto nie ke go napiseme

// Treba da znaeme CommonJS i ES modules

// module.exports/require() - CommonJS - default za Node.js
// import/from - ES modules

// console.log(calc.greet);
// console.log(calc.calculator("zbir", 2, 2));
// console.log(calc.calculatorTwo("zbir", 2, 2));

// console.log(vangel("zbir", 2, 2));

// Destructuring
const person = {
  firstname: "Semos",
  lastname: "Education",
  age: 25,
};

const { firstname, lastname, age } = person;

console.log(firstname, lastname, age);
// bez da pisuvam person.firsname
console.log(greet);

// Spread operator (...)
const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];

const mixed = [...numbers, ...letters];
console.log(mixed);

// Callback - es5

const callMeBack = () => {
  console.log("Hi");
};

// Parametar funkcija
const greetMe = (fn) => {
  if (true) {
    fn();
  }
};

greetMe(callMeBack);

function pobarajKartickaVoBanka(name, callback) {
  console.log("Vaseto ime: ", name);
  // koga ke bide izgotvena
  callback(); // povikuvanje na druga funkcija
}

function callbackFun() {
  console.log("Zdravo, dojdete da ja podignete kartickata");
}

pobarajKartickaVoBanka("Pero", callbackFun);

// Callbacks -> ES5 -> Callback hell

asyncOperation1(function (response1) {
  // First async operation
  asyncOperation2(response1, function (response2) {
    // Second async operation nested in the first one
    asyncOperation3(response2, function (response3) {
      // Third async operation nested in the second one
      asyncOperation4(response3, function (response4) {
        // Fourth async operation nested in the third one
        // ... and so on
      });
    });
  });
});
