const express = require("express");
const app = express.Router();
app.use(express.json());

const credentials = [
    {username: "Abdul", password:12345},
    {username: "Talha", password:54321},
    {username: "Shahzaman", password:98765}
]

app.post("/validate", (req,res) => {
    const {username, password} = req.body;
    let exist = false;

    credentials.map((d)=>{
        if(d.username == username && d.password == password) {
            exist = true;
        }
    })
    if(exist) {
        res.status(201).json({
         succes: true,
         message: "User Logged In"
        })
    }
    else
    {
        res.status(404).send("Not found");
    }
    
})
module.exports = app