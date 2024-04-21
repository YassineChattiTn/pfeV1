const mongoose = require("mongoose");

const responsableSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Responsable must have a name"],
    trim: true,
  },
  lastName: {
    type: String,
    require: [true, "Responsable must have a lastname"],
    trim: true,
  },
  referenceStore: {
    type: String,
    require: [true, "Responsable must have a Reference Store"],
    trim: true,
  },
  email: {
    type: String,
    require: [true, "Responsable must have a email"],
    trim: true,
  },
  password: {
    type: String,
    require: [true, "Responsable must have a password"],
    trim: true,
  },
});

const Responsable = mongoose.model("Responsable", responsableSchema);

module.exports = Responsable;
