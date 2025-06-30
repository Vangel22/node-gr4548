// const test = require("./handlers");
const express = require("express");

const {
  getAllStudents,
  addStudent,
  deleteStudent,
  editStudent,
} = require("./handlers/students");

const app = express();

app.use(express.json()); // middleware

app.get("/students", getAllStudents);
app.post("/students", addStudent);
app.delete("/students/:id", deleteStudent);
app.put("/students/:id", editStudent);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}!`);
});
