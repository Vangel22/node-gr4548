const greet = "Zdravo studenti!";

// op e string, i numOne i numTwo se brojki
const calculator = (op, numOne, numTwo) => {
  switch (op) {
    case "zbir":
      return numOne + numTwo;
    // Dodadete gi drugite slucai
    default: // se drugo ili pak else
      return 0;
  }
};

const calculatorTwo = (op, numOne, numTwo) => {
  switch (op) {
    case "zbir":
      return numOne + numTwo;
    // Dodadete gi drugite slucai
    default: // se drugo ili pak else
      return 0;
  }
};

// module.exports = calculator; // ovaa mozeme da go napravime samo koga imame edna funkcija/varijabla
// Ke ni dade pristap do calculator funkcijata vo index.js

module.exports = {
  greet,
  calculator,
  calculatorTwo,
};

// Zadaca
// 1. Zavrsete go calculator so switch so opcii za mnozenje, delenje, modulo (%), razlika
// 2. Napravete nov so if/else
