const express = require('express');
const router = express.Router();

const users = ["Laiba Saeed", "Mohaib", "Talal"];

// Routing

router.get("/", function (req, res) {
    res.status(200).send( { users });
})

router.get("/userData", function (req, res) {
    res.status(200).send({ name: "Mushaf", age: 25});
})

//Dynamic Routing

router.get("/:userId", function (req, res) {
    const userId = req.params.userId;
    res.status(200).send(users[userId]);
})

module.exports = router;    