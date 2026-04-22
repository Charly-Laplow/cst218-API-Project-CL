/*

Controller for the myClassRoutes.

*/

const MyClass = require("../models/MyClass");

// helpers
function sendSuccess(res, message, data, status = 200) {
  return res.status(status).json({ message, data });
}

function sendError(res, error, status = 400) {
  return res.status(status).json({ error });
}

// Create a new class
async function createClass(req, res) {
  try {
    const { className, instructor, semester, grade } = req.body;

    const newClass = await MyClass.create({
      className: className.trim(),
      instructor: instructor.trim(),
      semester,
      grade,
      userId: req.userId
    });

    return sendSuccess(res, "Class created successfully", newClass, 201);
  } 
  
  catch {
    return sendError(res, "Server error during creation", 500);
  }
}

// Get all classes
async function getClasses(req, res) {
  try {
    const classes = await MyClass.find({ userId: req.userId });

    return sendSuccess(res, "Classes retrieved successfully", classes);
  } 
  
  catch {
    return sendError(res, "Server error during fetch", 500);
  }
}

// Get an individual class by id
async function getClassById(req, res) {
  try {
    const classItem = await MyClass.findOne({
      _id: req.params.id,
      userId: req.userId
    });

    if (!classItem) {
      return sendError(res, "Class not found", 404);
    }

    return sendSuccess(res, "Class retrieved successfully", classItem);
  } 
  
  catch {
    return sendError(res, "Server error during fetch", 500);
  }
}

// Update a class
async function updateClass(req, res) {
  try {
    const updated = await MyClass.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return sendError(res, "Class not found", 404);
    }

    return sendSuccess(res, "Class updated successfully", updated);
  } 
  
  catch {
    return sendError(res, "Server error during update", 500);
  }
}

// Delete a class
async function deleteClass(req, res) {
  try {
    const deleted = await MyClass.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    });

    if (!deleted) {
      return sendError(res, "Class not found", 404);
    }

    return sendSuccess(res, "Class deleted successfully", deleted);
  } 
  
  catch {
    return sendError(res, "Server error during delete", 500);
  }
}

// Exports CRUD
module.exports = {
  createClass,
  getClasses,
  getClassById,
  updateClass,
  deleteClass
};