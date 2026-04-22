/*

Schema for registering classes.

*/

const mongoose = require("mongoose");

// Class schema
const myClassSchema = new mongoose.Schema(
  {
    // Class name field
    className: {
      type: String,
      required: true,
      trim: true
    },

    // Class instructor field
    instructor: {
      type: String,
      required: true,
      trim: true
    },

    // Enrollment semester field
    semester: {
      type: String,
      required: true,
      enum: ["Fall", "Winter", "Spring"]
    },

    // Class grade field (optional)
    grade: {
        type: String,
        required: false,
        enum: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"]
    },

    // Links user to specific class
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
module.exports = mongoose.model("MyClass", myClassSchema);