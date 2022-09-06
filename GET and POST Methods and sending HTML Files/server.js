const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

const users = [];

app.get("/", function (req, res, next) {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/users", function (req, res, next) {
    res.status(200).send(users);
});

app.post("/users", function (req, res, next) {
    users.push(req.body.user);
    res.status(200).send(req.body.user); 
});

app.use(function (req, res, next) {
    res.status(404).send("Endpoint not found");
})

app.listen(4000);