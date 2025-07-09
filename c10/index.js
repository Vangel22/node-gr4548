const express = require("express");
const {
  getForm,
  postForm,
  getStudents,
  deleteStudents,
} = require("./controllers/formular");

const app = express();

// Kloniranje na repo node-gr4548

// Dali go gledame ova?

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/form", getForm);
app.post("/form", postForm);

app.get("/students", getStudents);
app.get("/brishi", deleteStudents);

app.listen(3000, () => {
  console.log("Server started at port 3000!");
});
