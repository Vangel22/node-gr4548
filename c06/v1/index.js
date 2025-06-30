const {
  getAllStudents,
  addStudent,
  deleteStudent,
  editStudent,
} = require("./students");

// getAllStudents()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// (async () => {

// })()

async function main() {
  //   const student = { ime: "Test", prezime: "test", godina: 2000 };
  //   await addStudent(student);
  //   await deleteStudent(1);

  const newDataForStudent = { ime: "Pero", prosek: 8.0, univerzitet: "FINKI" };
  await editStudent(0, newDataForStudent);
}

main();
