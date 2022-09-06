// Operators
// Arithematic operators
// var num1 = 79;
var name = "Talal Ahmad";

// document.getElementById("h3").innerHTML = num1++;
// console.log("Value of num1 is", num1);
// var num2 = --num1;
// console.log(num2);

// Assignment Operators
// =, =+, -+, /=, %=

// logical and Comparison opereators

// Array
var myArray = [true, 1, 2, 4.8, "laiba", [4, 7, "laiba"]];

// Object
var person1 = {
  name: "Laiba Saeed", // Property
  age: 20,
  intro: function () {  // Method
    return "My name is " + this.name + " and my age is " + this.age;
  }
};
// document.getElementById("h3").innerHTML =
//   "The name of person1 is " + person1.name + " and her age is " + person1.age;

// Popups
// Alert Box
// window.alert("Alert! Your name is " + person1.name)
// Confirmation box
// window.confirm("Confirmation! Your name is " + person1.name + "?")
// Prompt Box
// var name = window.prompt("Enter your name:", "Laiba Saeed")
// document.getElementById("h3").innerHTML = name;

// Functions
add(24,4);  // Arguments
function add(num1, num2) {  // Parameters
    document.getElementById("h3").innerHTML = num1 + num2;
}

document.getElementById("h3").innerHTML = person1.intro();