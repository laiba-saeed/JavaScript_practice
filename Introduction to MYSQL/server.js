const express = require("express");
const app = express();
// Convert req.body to JSON format
app.use(express.json());

const studentRouter = require("./routes/student");
app.use("/api/students", studentRouter);

const connection = require("./models/student");
connection();

const port = 4000;
app.listen(port);
