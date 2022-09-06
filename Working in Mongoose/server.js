const express = require("express");
const app = express();
// Convert req.body to JSON format
app.use(express.json());
// Import mongoose
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:4Mq3JJ4OCLfS0Aoc@cluster0.okzksok.mongodb.net/DCSE"
).then(result => {
    console.log("Database Connected");
}).catch (err => {
    console.log(err);
})

const studentRouter = require("./routes/student");
app.use("/api/students", studentRouter);

const connection = require("./models/student");
connection();

const port = 4000;
app.listen(port);
