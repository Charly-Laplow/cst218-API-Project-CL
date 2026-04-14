/*

Validates proper ID for CRUD requests.

*/

const mongoose = require("mongoose");

// ID validation function
function validateObjectId(req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid id format" });
  }

  // Moves to the next middleware
  next();
}

// Exports ID validation
module.exports = validateObjectId;