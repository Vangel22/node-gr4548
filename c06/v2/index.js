// const test = require("./handlers");
const express = require("express");

const {
  getAllStudents,
  addStudent,
  deleteStudent,
  editStudent,
} = require("./handlers/students");

const app = express();

// Dva tipovi na middleware
// 1. Global
// 2. Dedicated to route

app.use(express.json()); // middleware

app.get("/students", getAllStudents);
app.post("/students", addStudent);
app.delete("/students/:id", deleteStudent);
app.put("/students/:id", editStudent);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}!`);
});
