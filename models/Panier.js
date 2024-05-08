// const mongoose = require("mongoose");

// const panierSchema = mongoose.Schema({
//   referencePanier: {
//     type: String,
//     required: [true, "panier must have a reference"],
//   },
//   clientId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: [true, "Client missing!!!"],
//   },
//   articleId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Article",
//     required: [true, "Article missing!!!"],
//   },
//   quantity: {
//     type: String,
//     required: [true, "Quantity missing!!!"],
//   },
//   Total: {
//     type: String,
//     required: [true, "price missing!!!"],
//   },
//   nameClient: {
//     type: String,
//   },
//   nameArticle: {
//     type: String,
//   },
// });

// const Panier = mongoose.model("Panier", panierSchema);

// module.exports = Panier;

const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  articleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  nameArticle: {
    type: String,
    required: true,
  },
});

const panierSchema = mongoose.Schema({
  referencePanier: {
    type: String,
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [itemSchema],
  totalPanier: {
    type: Number,
    required: true,
  },
  nameClient: {
    type: String,
    required: true,
  },
});

const Panier = mongoose.model("Panier", panierSchema);

module.exports = Panier;
