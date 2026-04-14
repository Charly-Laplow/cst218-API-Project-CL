/*

Handles CRUD requests to the server.

*/

const express = require("express");
const { requireAuth } = require("../middleware/auth");
const validateAssignment = require("../middleware/validateAssignment");
const validateObjectId = require("../middleware/validateObjectId");

const {
  createAssignment,
  getAssignments,
  getAssignmentById,
  updateAssignment,
  deleteAssignment
} = require("../controllers/assignmentController");

const router = express.Router();

// CRUD paths
router.post("/", requireAuth, validateAssignment, createAssignment);
router.get("/", requireAuth, getAssignments);
router.get("/:id", requireAuth, validateObjectId, getAssignmentById);
router.put("/:id", requireAuth, validateObjectId, updateAssignment);
router.delete("/:id", requireAuth, validateObjectId, deleteAssignment);

// Exports the assignments routes
module.exports = router;