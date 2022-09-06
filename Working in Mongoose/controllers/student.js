const mongoose = require("mongoose");
const Students = require("../models/student");

const users = [];

// Insert record into database
async function post (req, res) { console.log(req.body);
   try{
    const { name, email } = req.body;
    if(!name || !email ) {
        return res.status(400).send("Required fields can't be empty") 
    }
   
    const student = new Students ({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        email: email
    });
    await student.save();

   res.status(201).send({ createdStudent: student})

   } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
   }
}

// Fetch Record from Database
async function getAll(req, res) {
    try{
        const students = await Students.find({}); 
        res.status(200).send({ students })
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong!")
    }
}

async function getSIngle(req, res) {
    try{
        const { studentId }  = req.params;
        const students = await Students.findById(studentId);
        res.status(200).send({ students })
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong!")
    }
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