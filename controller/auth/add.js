const express = require("express");
const app = express.Router();
app.use(express.json());
let person = [
  { name: "Abdul", age: 23 },
  { name: "Talha", age: 24 },
];

app.get("/person", (req, res) => {
  res.status(200).json({
    message: "Data loaded",
    person,
  });
});

app.post("/person", (req, res) => {
  const data = req.body;
  person.push(data);
  res.status(201).json({
    message: "Data Added",
    person,
  });
});

module.exports = app;
