/*

Defines the structure of posts to server.

*/

const mongoose = require("mongoose");

// Assignment post schema
const AssignmentSchema = new mongoose.Schema(
  {
    // Name of the class for assignment
    className: { 
      type: String, 
      required: true, 
      trim: true 
    },

    // Assignment title
    assignmentTitle: { 
      type: String, 
      required: true, 
      trim: true 
    },

    // Due date for assignments
    dueDate: { 
      type: String, 
      required: true, 
      trim: true 
    },

    //  Assigns completion to assignments
    assignmentComplete: { 
      type: String, 
      required: true, 
      default: "no", 
      enum: ["yes", "no"] 
    },

    // Links assignments to specific users (used to enforce ownership in routes)
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    }
  },

  // Adds createdAt and updatedAt timestamp to posts
  { timestamps: true }
);

// Export the schema
module.exports = mongoose.model("Assignment", AssignmentSchema);