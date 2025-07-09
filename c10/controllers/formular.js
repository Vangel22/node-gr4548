const studenti = require("../models/students");

const getForm = (req, res) => {
  res.render("formular");
};

const postForm = async (req, res) => {
  const { ime, prezime, prosek } = req.body;
  // definirani vo formular.ejs vo name="ime"...

  const data = {
    ime: ime,
    prezime,
    prosek,
  };

  await studenti.add(data); // mozevme direktno da odime so req.body

  res.redirect("/students");
};

const getStudents = async (req, res) => {
  const data = await studenti.list();
  res.render("students", { data });
};

const deleteStudents = async (req, res) => {
  // req.query.index;
};

module.exports = {
  getForm,
  postForm,
  getStudents,
  deleteStudents,
};
