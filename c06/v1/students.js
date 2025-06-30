const { read, write } = require("./read-write");
// CRUD functionality for students

const getAllStudents = () => {
  return read();
};

const addStudent = async (studentData) => {
  let students = await read();
  //students = [
  //     { ime: "Vangel", prezime: "Hristov", godina: 1999 },
  //     { ime: "Pero", prezime: "Perov", godina: 1987 },
  //   ];
  students.push(studentData);

  //   students = [
  //     { ime: "Vangel", prezime: "Hristov", godina: 1999 },
  //     { ime: "Pero", prezime: "Perov", godina: 1987 },
  //.    { ime: "Test", prezime: "test", godina: 2000 }
  //   ];

  await write(students);
};

const deleteStudent = async (studentIndex) => {
  //1
  let students = await read();
  students = students.filter((student, index) => index !== studentIndex);
  // Ke ni ostanat studentite:
  // {"ime":"Vangel","prezime":"Hristov","godina":1999} so index 0
  // {"ime":"Test","prezime":"test","godina":2000} so index 2
  await write(students);
};

const editStudent = async (studentIndex, studentData) => {
  // { ime: "Pero", prosek: 8.0, univerzitet: "FINKI" }
  let students = await read();
  students = students.map((student, index) => {
    // za toj student koj sakame da go azurirame
    if (studentIndex === index) {
      // promeni gi podatocite
      return {
        ...student,
        // ime: student.ime,
        // prezime: student.prezime
        // godina: student.godina
        // ime: studentData.ime // ova nema logika bidejki ne znaeme sto ni isprakja klientot
        ...studentData,
      };
    }
    return student;
  });

  await write(students);
};

module.exports = {
  getAllStudents,
  addStudent,
  deleteStudent,
  editStudent,
};
