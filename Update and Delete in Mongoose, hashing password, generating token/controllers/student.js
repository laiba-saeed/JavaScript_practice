const mongoose = require("mongoose");
const Students = require("../models/student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = [];

// Insert record into database
async function post (req, res) { console.log(req.body);
   try{
    const { name, email, password } = req.body;
    if(!name || !email || !password ) {
        return res.status(400).send("Required fields can't be empty") 
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const student = new Students ({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        email: email,
        password: hashedPassword
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

async function update(req, res) {
    try {
    const { name } = req.body;
    const { studentId } = req.params; 

    if(!name) {
        return res.status(400).send("Name is required");
    }
    const student = await Students.updateOne({
        _id: studentId
    }, {
        $set: {
            name: name
        }
    });
    res.status(201).send({ student });
} catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
}
}


async function deleteStudnet(req, res) {
 try {
    const { studentId } = req.params;
    await Students.deleteOne({
        _id: studentId,
    });
    res.status(200).send("Student deleted successfuly");
 } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
 }
}

async function login (req, res) { console.log(req.body);
    try{
     const { email, password } = req.body;
     if(!email || !password ) {
         return res.status(400).send("Required fields can't be empty") 
     }

     let student = await Students.findOne({ email });
     if(!student) {
        return res.status(404).send("Email doesn't exist");
     }
    
     const result = await bcrypt.compare(password, student.password);
     if(!result) {
        res.status(401).send("Password is incorrect")
     }

     student = student.toJSON();
     delete student.password;
    const token = jwt.sign({
        student: student
    }, "first-token")
    res.status(201).send({
        token, student
    });
 
    } catch (err) {
     console.log(err);
     res.status(500).send("Something went wrong");
    }
 }

module.exports = {
    post,
    getAll,
    getSIngle,
    update, 
    deleteStudnet, 
    login
}