const express = require("express");
const path = require('path');
const port = 4000;

const app = express();

const users = ["Laiba", "Mohaib", "Mushaf", "Talal", "Wahiza", "Hajra"];

app.use(express.static(path.join(__dirname, 'public')))
// Rendering Engine
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
})

app.get("/user/:userId", function (req, res) {
    // const userId = req.params.userId;
    const { userId } = req.params;
    const user = users[userId];
    res.status(200).render("index", {
        user: user,
        age: 22
    })
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`); 
}); 