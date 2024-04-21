const mongoose = require("mongoose");

tableSchema = mongoose.Schema({
  table_Number: {
    type: String,
    required: [true, "Table must have a number"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Table must have a description"],
  },
  etat: {
    type: String,
    required: [true, "Table must have an state"],
    trim: true,
  },
});

const Table = mongoose.model("Table", tableSchema);

module.exports = Table;
