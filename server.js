/*

CST 218 Semester Project
Charly Laplow

This application is used to track school assignments.
The user posts what classes they are taking.
The user also posts whichever assignments they have and if the assignment is finished.

*/

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

// Imports the routes
const assignmentsRoutes = require("./routes/assignmentsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const myClassRoutes = require("./routes/myClassRoutes"); 

const app = express();
const PORT = process.env.PORT || 3000;

// middleware to log requests and their type
const logger = require("./middleware/logger");
app.use(logger);

// global middleware to read JSON from requests
app.use(express.json());

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ROUTES

// home page
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Home route working",
    data: "This will be my home page. Here I will give brief explanations of the routes."
  });
});

// about page
app.get("/about", (req, res) => {
  return res.status(200).json({
    message: "About route working",
    data: "This is my about page. Here I will give more details about myself and this project."
  });
});

// classes page
app.get("/classes", (req, res) => {
  return res.status(200).json({
    message: "Classes route working",
    data: "This is my class page. Here I will keep a log of my classes."
  });
});

// Mount for assignments and users routes
app.use("/assignments", assignmentsRoutes);
app.use("/users", usersRoutes);
app.use("/myClass", myClassRoutes);

// 404 handler
app.use((req, res) => {
  return res.status(404).json({
    error: `Route not found ${req.method} ${req.url}`
  });
});

// Handler listening for deployed port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
