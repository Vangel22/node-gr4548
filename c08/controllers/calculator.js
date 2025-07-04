const fs = require("fs");

const getCalculator = async (req, res) => {
  try {
    const output = await parseTemplate("calculator-form");
    res.status(200).send(output);
  } catch (err) {
    return res.status(500).send("Internal Server Error!");
  }
};

const postCalculator = async (req, res) => {
  try {
    const { numberOne, numberTwo, operation } = req.body;

    if (numberOne === "" || numberTwo === "") {
      res.status(400).send("Bad request");
    }

    let result = "";

    switch (operation) {
      case "sobiranje":
        result = `${Number(numberOne) + Number(numberTwo)}`;
        break;
      case "odzemanje":
        result = `${Number(numberOne) - Number(numberTwo)}`;
        break;
    }

    const output = await parseTemplate("calculator", {
      data: result,
      ime: "Semos",
    });

    res.status(200).send(output);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

// data = null e defaultna vrednost na parametrot data
const parseTemplate = async (template, data = null) => {
  return new Promise((resolve, reject) => {
    // ${__dirname} - se naogjame vo controllers folderot
    fs.readFile(
      `${__dirname}/../views/${template}.html`,
      "utf-8",
      (err, content) => {
        // console.log("__dirname", __dirname);
        // console.log("__filename", __filename);
        if (err) reject(err);

        if (data) {
          console.log("data", data);
          for (const podatok in data) {
            console.log("kluc", podatok);
            console.log("vrednost", data[podatok]);

            // Kluc: data
            // Odi vo calcultor.html i prebaraj kade ima {{data}}
            content = content.replace(`{{${podatok}}}`, data[podatok]);
            // content = content.replace(`{{data}}`, data[podatok]);
            // content = content.replace(`{{ime}}`, data[podatok]);
          }
        }

        resolve(content);
      }
    );
  });
};

module.exports = {
  getCalculator,
  postCalculator,
};
