const { readFile, writeFile } = require("./read-write");

// Promises -> ES6

// Step 1:
// const writeFile = () => {}

// Step 2:
// const writeFile = () => {
//     return new Promise(); // ni pravi nov Promise objekt
// }

// Step 3:
// const writeFile = () => {
//   return new Promise(() => {});
// //   return new Promise(function () {});
// };

// Step 4:
// const writeFile = () => {
//   return new Promise((resolve, reject) => {});
// };

// Step 5:
// const writeFile = () => {
//   // pending, fullfilled, rejected
//   return new Promise((resolve, reject) => {
//     fs.writeFile("data.txt", "TEST", (err) => {
//       if (err) {
//         reject(err);
//       }
//       // if(err) reject(err);
//       // if(err)
//       //     reject(err);

//       resolve();
//     });
//   });
// };

// writeFile e neiskoristliva funkcija bidejki
// 1. data.txt e vpisano (hard-coded) ime
// 2. "TEST" isto taka vpisan (hard-coded) podatok

// writeFile()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const myPromise = new Promise((success, fail) => {
//   setTimeout(() => {
//     const win = false;
//     if (win) {
//       success("Operation completed successfully!");
//     } else {
//       fail(new Error("Operation failed."));
//     }
//   }, 2000); // 2 sekundi docnenje
// });

// myPromise
//   .then((result) => console.log("Success:", result))
//   .catch((error) => {
//     console.log("Error:", error.message);
//   });

// Callback
function someFunction(x, y, callback) {
  const result = x + y;

  setTimeout(() => {
    callback(null, result);
  }, 1000);
}

function promisifiedSomeFunction(x, y) {
  return new Promise((resolve, reject) => {
    someFunction(x, y, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

// promisifiedSomeFunction(2, 3)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// ES7 - Syntactic sugar upon Promises
// const main = async () => {
//   // then
//   try {
//     const res = await promisifiedSomeFunction(2, 3);
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("Always executing!");
//   }
// };

// main();

// CRUD
// Create Read Update Delete

// readFile("test.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// writeFile("test.txt", "TEST FILE")
//   .then((res) => console.log("Success!"))
//   .catch((err) => console.log(err));

// Zadaca
// 1. Napravete fajl read-write.js i preflete gi funkciite tamu
// 2. Importirajte gi vo index.js
// 3. Napravete main funkcija vo koja ke ja procitate sodrzinata na data.txt
// 4. Vo istata main funkcija zapisete vo data.txt vaseto ime i prezime
// 5. Pokazete gi promenite

const mainFunction = async () => {
  try {
    const read = await readFile("data.txt");
    console.log("1.", read);

    await writeFile("data.txt", "Vangel Hristov");

    const readTwo = await readFile("data.txt");
    console.log("2.", readTwo);
  } catch (err) {
    console.log(err);
  }
};

mainFunction();
