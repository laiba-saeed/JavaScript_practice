window.onload = function () {
    const div = document.createElement("div");
    div.setAttribute("id", "last");
    const h1text = document.createTextNode("Hello World");
    // div.appendChild(h1text);
    div.prepend(h1text);
    document.body.prepend(div);
}
var divCollection = document.getElementsByTagName("div");
console.log(divCollection);

var heading1 = document.getElementById("heading-1");
console.log(heading1);

var classElements = document.getElementsByClassName("bg-custom");
console.log(classElements); 

var firstHeading = querySelector("h1");
console.log("This is our first heading", firstHeading);


// document.querySelector("#last").appendChild(document.querySelector("h3"));