const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Must not be empty"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "lastname must not be empty"],
    trim: true,
  },
  adresse: {
    type: String,
  },
  telephone: {
    type: String,
    required: [true, "User must have a phone number"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "User must have an email"],
    unique: true,
    trim: true,
    lowerCase: true,
  },
  password: {
    type: String,
    required: [true, "User must have password"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
