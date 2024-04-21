const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "An Admin must have a name"],
  },
  email: {
    type: String,
    required: [true, "An Admin must have an email"],
  },
  password: {
    type: String,
    required: [true, "An Admin must have a password"],
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
