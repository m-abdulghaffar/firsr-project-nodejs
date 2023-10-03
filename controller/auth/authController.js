const express = require("express");
const app = express.Router();
const person = [
  { id: 1, name: "Ali", age: 20 },
  { id: 2, name: "ahmad", age: 30 },
  { id: 3, name: "umar", age: 40 },
];
//Person Router
app.get("/person", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Data Loaded...",
    person,
  });
});
app.get("/person/byname", (req, res) => {
  const name = req.query.name;
  console.log(name);
  res.status(200).json({
    success: true,
    message: "Data Loaded...",
    name,
  });
});
app.post("/person", (req, res) => {
    console.log(req.body)
  const { personID, name, age } = req.body;
  res.status(201).json({
    success:true,
    personID,
    name,
    age
  })
});
module.exports = app;
