/*

Processes user registration and login.
Passwords are encrypted for secure storage.

*/

const express = require("express");
const { register, login } = require("../controllers/userController");
const router = express.Router();

// Router paths
router.post("/register", register);
router.post("/login", login);

// Exports the user routes
module.exports = router;