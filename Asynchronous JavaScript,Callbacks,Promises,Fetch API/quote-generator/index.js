var button = document.querySelector("button");
var card = document.querySelector(".card");

function loadQuote() {
    card.innerHTML = "Loading...";
    // Request backend
    fetch("https://api.kanye.rest/", {
        method: "GET",
    }).then(function (res) {
        console.log("res", res);  
        return res.json();
    }).then(function (data) {
        console.log("data", data);
        card.innerHTML = data.quote;
    }).catch(function (err) {
        console.log("error", err);
    });
}

button.addEventListener("click", loadQuote);