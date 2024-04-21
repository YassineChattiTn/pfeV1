const mongoose = require("mongoose");

const panierSchema = mongoose.Schema({
  referencePanier: {
    type: String,
    required: [true, "panier must have a reference"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Client missing!!!"],
  },
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
    required: [true, "Article missing!!!"],
  },
  quantity: {
    type: String,
    required: [true, "Quantity missing!!!"],
  },
  Total: {
    type: String,
    required: [true, "price missing!!!"],
  },
  nameClient: {
    type: String,
  },
  nameArticle: {
    type: String,
  },
});

const Panier = mongoose.model("Panier", panierSchema);

module.exports = Panier;
