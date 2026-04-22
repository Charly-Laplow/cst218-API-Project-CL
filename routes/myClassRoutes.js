const express = require("express");
const { requireAuth } = require("../middleware/auth");
const validateMyClass = require("../middleware/validateMyClass");
const validateObjectId = require("../middleware/validateObjectId");

const {
  createClass,
  getClasses,
  getClassById,
  updateClass,
  deleteClass
} = require("../controllers/myClassController");

const router = express.Router();

// CREATE
router.post("/", requireAuth, validateMyClass, createClass);

// GET ALL
router.get("/", requireAuth, getClasses);

// GET ONE
router.get("/:id", requireAuth, validateObjectId, getClassById);

// UPDATE
router.put("/:id", requireAuth, validateObjectId, validateMyClass, updateClass);

// DELETE
router.delete("/:id", requireAuth, validateObjectId, deleteClass);

module.exports = router;