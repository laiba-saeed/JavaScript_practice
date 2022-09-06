var addButton = document.getElementById("add-btn");
var resetButton = document.getElementById("reset-btn");
var saveButton = document.getElementById("save-btn");
var ul = document.querySelector("ul");
var counter = document.getElementById("counter");

function increment() {
    var counterValue = Number(counter.innerHTML);
    counter.innerHTML = counterValue + 1;
}

function reset() {
    counter.innerHTML = 0;
}

function save() {
    const li = document.createElement("li");
    const liText = document.createTextNode(counter.innerHTML)
    li.appendChild(liText);
    ul.append(li);
}

addButton.addEventListener("click", increment);
resetButton.addEventListener("click", reset);
saveButton.addEventListener("click", save);