const mongoose = require("mongoose");

const boutiqueSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Store must have an name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Store must have an email"],
    trim: true,
  },
  telephone: {
    type: String,
    required: [true, "Store must have an phone number"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Store must have an password"],
    trim: true,
  },
});

const Boutique = mongoose.model("Boutique", boutiqueSchema);

module.exports = Boutique;
