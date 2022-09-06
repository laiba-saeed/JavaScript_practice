const express = require('express');
const router = express.Router();
const studentControllers = require("../controllers/student");

// Insert Data
router.post("/", studentControllers.post); 

// Fetch Data
router.get("/", studentControllers.getAll);

router.get("/:studentId", studentControllers.getSIngle);

// Update
router.put("/:studentId", studentControllers.update);

// Delete
router.delete("/:studentId", studentControllers.deleteuser);

module.exports = router;