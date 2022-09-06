// JavaScript Events
var button = document.querySelector("button");
var eventName = "click";
var person = {
    name: "Laiba Saeed",
    age: 20
}

person.name = "Tahir";
var personName = person.name;
console.log(personName);

function test() {
    console.log("App is Running!")
}

function showText() {
    document.getElementById("h3").innerHTML = "JS is Awesome!"; 
}

// button.addEventListener(eventName, showText); 
// button.addEventListener("dblclick", showText);
// button.removeEventListener(eventName, test);

// button.onclick = showText;
// button.onclick = test;

var div = document.getElementById("div");
div.addEventListener("mouseover", function() {
    div.style.backgroundColor = "orange";
});
div.addEventListener("mouseout", function() {
    div.style.backgroundColor = "purple";
});


var button2 = document.getElementById("btn-2");
button2.addEventListener("click", function () {
    window.location = urlName; 
});
var urlName = "https://google.com";


var button3 = document.getElementById("btn-3");
function showDate() {
    var date = new Date();
    document.getElementById("h2").innerHTML = date.toTimeString();  
}
button3.addEventListener(eventName, showDate);

setInterval(function () {
    console.log("I am here after two seconds");
    document.getElementById("h2").innerHTML = Date.now();  
}, 2000);