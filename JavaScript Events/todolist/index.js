var input = document.querySelector("input");
var button = document.querySelector("button");
var ul = document.querySelector("ul");

function addTodo(event) {
    event.preventDefault();
    var inputValue = input.value;
    var li = document.createElement("li");
    li.innerHTML = inputValue;
    ul.appendChild(li);
    input.value = "";
}

button.addEventListener("click", addTodo);