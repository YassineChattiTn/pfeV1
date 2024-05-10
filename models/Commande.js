const mongoose = require("mongoose");

const commandeSchema = mongoose.Schema({
  commandeRef: {
    type: String,
    required: true,
  },

  panierRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Panier",
    required: true,
  },

  total: {
    type: String,
    required: true,
  },
});

const Commande = mongoose.model("Commande", commandeSchema);

module.exports = Commande;
