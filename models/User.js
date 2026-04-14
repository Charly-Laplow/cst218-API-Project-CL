/*

Schema for registering users.

*/

const mongoose = require("mongoose");

// User schema
const userSchema = new mongoose.Schema(
  {
    // User's email address
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    // Encrypted version of user's password
    passwordHash: {
      type: String,
      required: true,
    },
  },
  
   // Timestamp of creation
  { timestamps: true }
);

// Export the schema
module.exports = mongoose.model("User", userSchema);