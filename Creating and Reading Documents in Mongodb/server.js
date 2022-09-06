const express = require("express");
const app = express();
// Convert req.body to JSON format
app.use(express.json());

const userRouter = require("./routes/user");
app.use("/api/users", userRouter);

const connection = require("./models");
connection();

const port = 4000;
app.listen(port);