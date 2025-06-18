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

console.log(calculator("zbir", 2, 2));

// Zadaca
// 1. Zavrsete go calculator so switch so opcii za mnozenje, delenje, modulo (%), razlika
// 2. Napravete nov so if/else
