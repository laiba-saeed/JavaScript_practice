// Create server in Express JS
const express = require('express');

const port = 4000;

const app = express();

// app.get("/", function (req, res, next) {
//     console.log("Our express app is working.");
//     console.log(req);
//     const people = ["Mohaib", "Mushaf", "Talal"];
//     res.status(200).send("<html><h1>Hello World</h1></html>");
// })

// app.use/app.get are middlewares
app.use(function (req, res, next) {
    console.log("I am first console.");
})

app.get("/users", function (req, res, next) {
    const users = ["Mohaib", "Mushaf", "Talal"];
    res.status(200).send(users)
})

app.listen(port);