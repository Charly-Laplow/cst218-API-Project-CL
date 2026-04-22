/*

Validation check to make sure all required fields are filled.

*/

// Validation function
function validateAssignment(req, res, next) {
  const { className, assignmentTitle, dueDate, assignmentComplete } = req.body;

  // Checks className field
  if (!className || className.trim() === "") {
    return res.status(400).json({ error: "className field is required" });
  }

  // Checks assignmentTitle field
  if (!assignmentTitle || assignmentTitle.trim() === "") {
    return res.status(400).json({ error: "assignmentTitle field is required" });
  }

  // Checks dueDate field
  if (!dueDate || dueDate.trim() === "") {
    return res.status(400).json({ error: "dueDate field is required" });
  }

  // Checks assignmentComplete field
  if (!assignmentComplete || assignmentComplete.trim() === "") {
    return res.status(400).json({error: "assignmentComplete field is required"});
  }

  // Moves to the next middleware
  next();
}

// Exports assignment validations
module.exports = validateAssignment;