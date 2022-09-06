const express = require('express');
const userRouter = require('./routes/user'); 
const port  = 4000;

const app = express();

// Convert req.body to JSON format
app.use(express.json());

app.use("/api/users", userRouter); 


app.listen(port);