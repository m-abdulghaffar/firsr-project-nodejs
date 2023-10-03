const express = require("express");
const app = express();
const Auth = require("./controller/auth/authController");
const Add = require("./controller/auth/add")
const Creds = require('./controller/auth/credentialController')
const port = 3000;

app.use("/credential", Creds);
app.use("/add", Add);
const person = [
  { name: "Ali", age: 20 },
  { name: "ahmad", age: 30 },
  { name: "umar", age: 40 },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/person", (req, res) => {
    res.status(200).json({
      message: "Data Loaded...",
      person,
    });
  });
app.use("/auth", Auth);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
