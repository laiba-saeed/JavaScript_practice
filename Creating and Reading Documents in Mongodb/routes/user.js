const express = require('express');
const router = express.Router();
const userControllers = require("../controllers/user");

// Insert Data
router.post("/", userControllers.post); 

// Fetch Data
router.get("/", userControllers.getAll);

router.get("/:userId", userControllers.getSIngle);

// Update
router.put("/:userId", userControllers.update);

// Delete
router.delete("/:userId", userControllers.deleteuser);

module.exports = router;