const users = [];

function post (req, res) { console.log(req.body);
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
}

function getAll(req, res) {
    res.status(200).send({ users })
}

function getSIngle(req, res) {
    const { userId }  = req.params;
    const result = users[userId];
    if (!result) {
        return res.status(400).send("Invalid user Id");
    }
    res.status(200).send({ user: result })
}

function update(req, res) {
    const { name } = req.body;
    const { userId } = req.params; 

    const result = users[userId];
    if(!result) {
        return res.status(400).send("Invalid users Id");
    }
    users[userId] = name;
    res.status(201).send({ users })
}

function deleteuser(req, res) {
    const {userId} = req.params;
    const result = users[userId];
    if(!result) {
        return res.status(400).send("Invalid users Id");
    }
    users.splice(userId, 1);
    res.status(200).send({ users })
}

module.exports = {
    post,
    getAll,
    getSIngle,
    update, 
    deleteuser
}