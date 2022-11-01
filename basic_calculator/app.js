const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/calculator", (req, res) => {
  const { data } = req.body;

  // Split string into array
  const array = `${data}`.split(" ");
  
  if(array.length > 3) {
    res.send(`Enter a valid String!`)
  }

  // Check if the user have enter numbers
  if(isNaN(array[0]) || isNaN(array[2])) {
    res.json({
        message: "Enter a valid Number!"
    })
  } 

  // Check the sign
  // Sum
  if (array[1] === "+") {
    res.send(`Sum is: ${parseFloat(array[0]) + parseFloat(array[2])}`);
  } 
  // Difference
  else if (array[1] === "-") {
    res.send(`Difference is: ${array[0] - array[2]}`);
  } 
  // Multiplication 
  else if (array[1] === "*") {
    res.send(`Product is: ${array[0] * array[2]}`);
  } 
  // Division
  else if (array[1] === "/") {
    res.send(`Quotient is: ${array[0] / array[2]}`);
  } 
  // Invalid Operator
  else {
    res.json({
        message: "Enter a valid Operator!"
    })
  }
});

app.post("/url", (req, res, next) => {
  const { data } = req.body;
  res.status(200).json({
    url: 'http://localhost:3344/url',
    Body: data
  })
});

module.exports = app;