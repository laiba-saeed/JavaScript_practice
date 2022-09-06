// Data Types
// Boolean
var ans = true;

// Null
var data = null;

// Undefined
var result;

// String
var name = "Laiba Saeed";

// Object
var person = {
    name: "Laiba",
    age: 21     
}

// console.log(data);
// console.log(result);

// Find type of variable
// console.log(typeof ans);

// Scope of Variables
function showData() {
    var a = 1;
    console.log(name); 
}
showData();

// if(person.age>18){
//     var message = "You are able to learn JS";
//     // let message = "You are able to learn JS";
// }
// console.log(message);


// NaN
if(isNaN(name)) {
    let message = "You are able to learn JS";
    console.log(message);
}

var number = 48.7;
// var sqrt = Math.sqrt(number);
// var ceil = Math.ceil(number);
var floor = Math.floor(number);
console.log(floor);