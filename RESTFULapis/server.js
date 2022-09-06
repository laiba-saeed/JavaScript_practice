const express = require('express');
const port  = 4000;

const app = express();

// Convert req.body to JSON format
app.use(express.json());

const users = [];

app.post("/users", function(req, res) {
    console.log(req.body);
    // Save req data in name
    // const name = req.body.name; 
    const { name } = req.body;
    if(!name || name.length < 4) {
        return res.status(400).send("Invalid Name");
    }
    // Push this name in users array
    users.push(name);
    console.log(users);
    res.status(201).send(`${name} added in users successfully`);
})

app.get("/users", function (req, res) {
    res.status(201).send({ users });
})

app.get("/users/:userId", function (req, res) {
    const { userId }  = req.params;
    const result = users[userId];
    if (!result) {
        return res.status(400).send("Invalid user Id");
    }
    res.status(200).send({ user: result })
})

// Update
app.put("/users/:userId", function (req, res) {
    const { name } = req.body;
    const { userId } = req.params; 

    const result = users[userId];
    if(!result) {
        return res.status(400).send("Invalid users Id");
    }
    users[userId] = name;
    res.status(201).send({ users })
})

// Delete
app.delete("/users/:userId", function (req, res) {
    const {userId} = req.params;
    const result = users[userId];
    if(!result) {
        return res.status(400).send("Invalid users Id");
    }
    users.splice(userId, 1);
    res.status(200).send({ users })
})

app.listen(port);