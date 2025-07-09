const fs = require("fs");

const read = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) reject(err);
      data = JSON.parse(data);
      resolve(data);
    });
  });
};

const write = async (fileName, data) => {
  data = JSON.stringify(data);
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

// CRUD

const add = async (data) => {
  let students = await read("studenti.json");
  students.push(data);
  await write("studenti.json", students);
};

const remove = async (index) => {
  let students = await read("studenti.json");

  console.log("index type", typeof index);

  students = students.filter((_, idx) => Number(index) !== idx);

  await write("studenti.json", students);
};

const list = async () => {
  return await read("studenti.json");
};

module.exports = {
  read,
  write,
  add,
  remove,
  list,
};
