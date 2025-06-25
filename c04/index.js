const http = require("http");

const { convertMilesToKm, fahrenheitToCelsius } = require("./convert");

// Klientot isprakja baranje (req)
// Serverot vrakja odgovor (res)
// const server = http.createServer((req, res) => {
//   res.end("Hello World!");
// });

const server = http.createServer((req, res) => {
  // req.method - HTTP methods
  // req.url - Ruta kade se naogja resursot (soba vo kukja)
  if (req.method === "POST" && req.url === "/convert") {
    // POST ima req.body

    let data = "";

    // let myName = "Vangel"
    // let test = data + myName; // 1.Vangel

    // req.on("data") ni pretstavuva nastan (event) koga pristigaat informacii/podatoci
    req.on("data", (chunk) => {
      console.log("chunk", chunk);

      data += chunk;
    });

    req.on("end", () => {
      // JSON.parse -> ke go napravi json vo JS objekt
      // JSON.stringify -> ke napravi JS objekt vo JSON format

      // Simulacija na podatok
      // const data ={
      //   miles: 10
      // }

      const parsedData = JSON.parse(data);
      console.log("parsed data", parsedData);

      const convertedVal = convertMilesToKm(parsedData.miles);

      res.writeHead(200, { "content-type": "text/plain" });
      // res.writeHead(200, { "content-type": "application/json"})
      res.end(`${parsedData.miles} miles to kilometers: ${convertedVal}`);
    });
  } else if (req.method === "POST" && req.url === "/to-celsius") {
    // 1. fahrenheitToCelsius vo convert.js
    // 2. sledete go istiot kod od pogore
    // 3. Ispratete baranje preku POSTMAN

    let data = "";

    req.on("data", (chunk) => {
      console.log("chunk", chunk);

      data += chunk;
    });

    req.on("end", () => {
      const parsedData = JSON.parse(data);
      console.log("parsed data", parsedData);

      const convertedVal = fahrenheitToCelsius(parsedData.fahrenheit);

      res.writeHead(200, { "content-type": "text/plain" });
      res.end(
        `${parsedData.fahrenheit} fahrenheit to celsius: ${convertedVal}`
      );
    });
  } else {
    res.end("I am lost...");
  }
});

// Handler ili Controller e funkcijata koja se zanimava so spravuvanje so req, res
const handler = (req, res) => {
  if (req.url === "/home") {
    res.end("Jas sum doma!");
  }

  // /sobiranje/2/2 -> 4
  // /odzemanje/4/2 -> 2

  // Se sto ima vo req.url e od tip string
  const [_, op, num1, num2] = req.url.split("/");
  const myUrl = req.url.split("/");
  console.log("my url", myUrl); // ["", "sobiranje", "2", "2"];

  let result;

  switch (op) {
    case "sobiranje":
      result = Number(num1) + Number(num2);
      // result = +num1++num2;
      res.end(`${result}`);
      break;
    case "odzemanje":
      result = Number(num1) - Number(num2);
      // result = +num1++num2;
      res.end(`${result}`);
      break;
    default:
      res.end("Operacijata ne e prepoznaena!");
      break;
  }
};

const newServer = http.createServer(handler);
newServer.listen(8080, () => console.log("Server started at port 8080!"));

// server.listen(3000, () => console.log("Server started at port 3000!"));
// http://127.0.0.1:3000/
// http://localhost:3000/
