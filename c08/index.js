const express = require("express");
const { getCalculator, postCalculator } = require("./controllers/calculator");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/calculator", getCalculator);
app.post("/calculator", postCalculator);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
