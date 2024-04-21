const Panier = require("../models/Panier");
const Article = require("../models/Article");
const User = require("../models/User");

/**creation du panier */

const addPanier = async (req, res) => {
  try {
    const {
      clientId,
      articleId,
      referencePanier,
      quantity,
      nameClient,
      nameArticle,
    } = req.body;
    article = await Article.findById(articleId);
    client = await User.findById(clientId);
    if (!article) {
      return res.status(404).send(error);
    }
    total = parseFloat(article.price) * quantity;
    nameA = article.name;
    nameC = client.name;
    const panier = new Panier({
      referencePanier,
      clientId,
      articleId,
      quantity,
      Total: total,
      nameClient: nameC,
      nameArticle: nameA,
    });
    savedPanier = await panier.save();
    res.status(200).send(savedPanier);
  } catch (error) {
    console.log(error);
    console.log("error while creating the panier");
    res.status(400).send(error);
  }
};

/**afficher du panier */
const getPanier = async (req, res) => {
  try {
    panier = await Panier.find();
    res.status(200).send(panier);
  } catch (error) {
    console.log(error);
    console.log("error while getting panier");
  }
};

/** afficher panier selon id */
const getOnePanier = async (req, res) => {
  try {
    myId = req.params.id;
    panier = await Panier.findById({ _id: myId });
    res.status(200).send(panier);
  } catch (error) {
    console.log(error);
    console.log("error while getting panier");
  }
};

/**effacer une panier */
const deletePanier = async (req, res) => {
  try {
    myId = req.params.id;
    panierToDelete = await Panier.findByIdAndDelete({ _id: myId });
    res.status(200).send(panierToDelete);
  } catch (error) {
    console.log(error);
    console.log("error while deleting panier...");
    res.status(400).send(error);
  }
};

module.exports = {
  addPanier,
  getPanier,
  getOnePanier,
  deletePanier,
};
