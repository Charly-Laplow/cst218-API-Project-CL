/*

Controller for the usersRoutes.

*/

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Creates new users
async function register(req, res) {
  try {
    const { email, password } = req.body;

    // Checks if user has an email and created password
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    const existingUser = await User.findOne({ email });

    // Checks if the user account is already made
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Encrypts the user's password
    const passwordHash = await bcrypt.hash(password, 10);

    // Creates the user
    const newUser = await User.create({ email, passwordHash });

    // Confirms user creation
    return res.status(201).json({
      message: "User registered successfully",
      data: { _id: newUser._id, email: newUser.email }
    });
  } 
  
  catch {
    return res.status(500).json({ error: "Server error during registration" });
  }
}

// Logs existing users in
async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user._id.toString(), email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    return res.status(200).json({
      message: "Login successful",
      data: token
    });
  } 
  
  catch {
    return res.status(500).json({ error: "Server error during login" });
  }
}

// Exports user creation and login attempts
module.exports = { register, login };