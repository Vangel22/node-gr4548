const http = require("http");

// Klientot isprakja baranje (req)
// Serverot vrakja odgovor (res)
// const server = http.createServer((req, res) => {
//   res.end("Hello World!");
// });

const server = http.createServer((req, res) => {
  // req.method
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
      res.end(`${parsedData.miles} to km: ${convertedVal}`);
    });
  }
});

server.listen(3000, () => console.log("Server started at port 3000!"));
// http://127.0.0.1:3000/
// http://localhost:3000/
