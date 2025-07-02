const express = require("express");
const { read } = require("./read-write");

const app = express();

// Globalen middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Predaj ja kontrolata na naredniot middleware ili funkcija
});

app.get("/", (req, res) => {
  res.send("Home page");
});

// Route-specific middleware
const aboutMiddleware = (req, res, next) => {
  console.log("About route accessed!");
  next();
};

app.get("/about", aboutMiddleware, (req, res) => {
  res.send("About us");
});

async function authenticate(req, res, next) {
  const users = await read("users.json");
  const userIndex = Number(req.params.id);
  const foundUser = users[userIndex];

  //   const isAdmin = true;
  // moze da se zeme preku req.params.id

  const ROLES = {
    admin: "admin",
    user: "user",
  };

  if (foundUser.role === ROLES.admin) {
    next();
  } else {
    res.status(401).send("Неовластен пристап!");
  }
  //   else if(foundUser.role === ROLES.user) {

  //   }
}

app.get("/admin/:id", authenticate, (req, res) => {
  res.send("Добредојовте, администратор!");
});

app.get("/user/:firstname/:lastname", (req, res) => {
  res.send(`Hello ${req.params.firstname} ${req.params.lastname}`);
});

app.get("/test/:identifier", (req, res) => {
  res.send(`My param: ${req.params.identifier}`);
});

// Query parametar ke poznaeme po ? vo URL
app.get("/search", (req, res) => {
  const name = req.query.name;
  const page = req.query.page || 1;

  const username = req.query.username;

  res.send(
    `Пребаруваме за ${name} со корисничко име ${username}, страница ${page}`
  );
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
