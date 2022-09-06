// Callbacks
const add = (a, b) => a+b;

console.log(add(5,2));
console.log("The program is finished");

function buttonClick () {
    console.log("The button is clickable");
}

var button = document.querySelector("button");
button.addEventListener("click", buttonClick);

function show () {
    console.log("This is callback");
}

function asyncFunction(callback) {
    setTimeout(callback, 2000);
}
asyncFunction(show);
console.log("The program is ended.");

// Promises
function promiseHandler(resolve, reject) {
    var x = 0;
    if(x > 0) {
        resolve("Resolved....");
    }else {
        reject("Rejected....");
    }
}
const p = new Promise(promiseHandler);
console.log(p);