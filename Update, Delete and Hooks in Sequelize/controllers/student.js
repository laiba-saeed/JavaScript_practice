const Students = require("../models/student");

async function post(req, res) {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).send("Required fields can't be empty");
    }

    const emailFound = await Students.findOne({
      where: {email: email}
    });

    if(emailFound){
      return res.status(409).send("Email Already exists")
    }

    const student = await Students.create({
      name: name,
      email: email
    }); 
    

    res.status(200).send({ student });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
}

async function getAll(req, res) {
  try {
    const students = await Students.findAll({
      // where: {name: "Laiba"}
    })
    res.status(200).send({ students });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
}

async function getSingle(req, res) {
  try {
    const { studentId } = req.params;
    const student = await Students.findOne({
      where: {id: studentId}
    });
    res.status(200).send({ student });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
}

async function update(req, res) {
  try {
    const { name } = req.body;
    const { studentId } = req.params;

    if (!name) {
      return res.status(400).send("Name is required");
    }
    const student = await Students.update({
      name: name
    }, {
      where: { id: studentId }
    })
    res.status(200).send({ student });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
}

async function deleteStudent(req, res) {
  try {
    const { studentId } = req.params;
    await Students.destroy({
      where: { id: studentId }
    });
    res.status(200).send("Student deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Required fields can't be empty");
    }

    let student = await Students.findOne({ email });
    if (!student) {
      return res.status(404).send("Email doesn't exist");
    }

    const result = await bcrypt.compare(password, student.password);
    if (!result) {
      return res.status(401).send("Password is incorrecct");
    }

    student = student.toJSON();
    delete student.password;
    const token = jwt.sign(
      {
        student: student,
      },
      "first-token"
    );

    res.status(200).send({
      token,
      student,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
}

module.exports = {
  post,
  getAll,
  getSingle,
  update,
  deleteStudent,
  login,
};
