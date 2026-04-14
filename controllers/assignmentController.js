/*
  
Controller for the assignmentRoutes.

*/

const mongoose = require("mongoose");
const Assignment = require("../models/Assignment");

function sendSuccess(res, message, data, status = 200) {
  return res.status(status).json({ message, data });
}

function sendError(res, error, status = 400) {
  return res.status(status).json({ error });
}

// Create new post
async function createAssignment(req, res) {
  try {
    const { className, assignmentTitle, dueDate, assignmentComplete } = req.body;

    const newAssignment = await Assignment.create({
      className: className.trim(),
      assignmentTitle: assignmentTitle.trim(),
      dueDate: dueDate.trim(),
      assignmentComplete: assignmentComplete || "no",
      userId: req.userId
    });

    return sendSuccess(res, "Assignment created successfully", newAssignment, 201);
  } 
  
  catch {
    return sendError(res, "Server error during creation", 500);
  }
}

// Get all posts
async function getAssignments(req, res) {
  try {
    const { completed, className } = req.query;
    const filter = { userId: req.userId };

    if (completed) {
      const normalized = completed.toLowerCase();
      if (!["yes", "no"].includes(normalized)) {
        return sendError(res, 'completed must be "yes" or "no"', 400);
      }
      filter.assignmentComplete = normalized;
    }

    if (className) {
      filter.className = { $regex: className, $options: "i" };
    }

    const assignments = await Assignment.find(filter).sort({ createdAt: -1 });

    return sendSuccess(res, "Assignments retrieved successfully", assignments);
  } 
  
  catch {
    return sendError(res, "Server error during fetch", 500);
  }
}

// Get post by ID
async function getAssignmentById(req, res) {
  try {
    const { id } = req.params;

    const assignment = await Assignment.findOne({
      _id: id,
      userId: req.userId
    });

    if (!assignment) {
      return sendError(res, "Assignment not found", 404);
    }

    return sendSuccess(res, "Assignment retrieved successfully", assignment);
  } 
  
  catch {
    return sendError(res, "Server error during fetch", 500);
  }
}

// Update post
async function updateAssignment(req, res) {
  try {
    const { id } = req.params;

    const updated = await Assignment.findOneAndUpdate(
      { _id: id, userId: req.userId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return sendError(res, "Assignment not found", 404);
    }

    return sendSuccess(res, "Assignment updated successfully", updated);
  } 
  
  catch {
    return sendError(res, "Server error during update", 500);
  }
}

// Delete posts
async function deleteAssignment(req, res) {
  try {
    const { id } = req.params;

    const deleted = await Assignment.findOneAndDelete({
      _id: id,
      userId: req.userId
    });

    if (!deleted) {
      return sendError(res, "Assignment not found", 404);
    }

    return sendSuccess(res, "Assignment deleted successfully", deleted);
  } 
  
  catch {
    return sendError(res, "Server error during delete", 500);
  }
}

// Exports CRUD
module.exports = {
  createAssignment,
  getAssignments,
  getAssignmentById,
  updateAssignment,
  deleteAssignment
};