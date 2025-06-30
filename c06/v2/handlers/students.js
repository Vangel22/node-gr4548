// const test = "Test";
// module.exports = {
//   test,
// };

const { read, write } = require("../read-write.js");

const getAllStudents = async (req, res) => {
  const data = await read();
  res.status(200).send(data);
};

const addStudent = async (req, res) => {
  // req.body postoi
  const students = await read();
  students.push(req.body);
  await write(students);
  res.status(200).send("New student added!");
};

const deleteStudent = async (req, res) => {
  // req.params - sekogas e string
  let students = await read();
  students = students.filter(
    (student, index) => Number(req.params.id) !== index
  );
  await write(students);
  res.status(200).send(`Student with index - ${req.params.id} is deleted!`);
};

const editStudent = async (req, res) => {
  let students = await read();
  students = students.map((student, index) => {
    if (index === Number(req.params.id)) {
      return {
        ...student,
        ...req.body,
      };
    }

    return student;
  });
  await write(students);

  res
    .status(200)
    .send(`Student with index - ${req.params.id} has been edited!`);
};

module.exports = {
  getAllStudents,
  addStudent,
  deleteStudent,
  editStudent,
};
