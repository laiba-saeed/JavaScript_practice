var name = "Laiba Saeed";
var age = 18;
var role = "Retailer";
var message;        
var myObj = {};
var myArr = [1, 2, 4, 5];

// if(myArr.length){
//     message = "The Array is not empty";
//     document.getElementById("h3").innerHTML = message;
// }else{
//     message = "The Array is empty";
//     document.getElementById("h3").innerHTML = message;
// }
// console.log("We are outside of if.");

switch(role) {
    case "Super Admin":
        message = "Your role is Super admin";
        break;
    case "Admin":
        message = "Your role is admin";
        break;
    case "Retailer":
    case "User":
        message = "Your role is User";
        break;
    default:
        message = "Your role is Invalid";
        break;
;}
document.getElementById("h3").innerHTML = message;