const express = require('express');
const path = require('path');
const userRouter = require('./routes/user');

const app = express();

// Sending HTML Files

app.get("/", function (req, res, next) {
    res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
})

app.get("/about", function (req, res) {
    res.status(200).sendFile(path.join(__dirname, "views", "about.html"));
})

app.use("/users", userRouter); 

app.listen(4000);