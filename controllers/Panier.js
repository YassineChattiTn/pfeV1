const Panier = require("../models/Panier");
const Article = require("../models/Article");
const User = require("../models/User");

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

/**ajout d'une panier */
const addPanier = async (req, res) => {
  try {
    const { clientId, referencePanier, items } = req.body;
    const client = await User.findById(clientId);

    if (!client) {
      return res.status(404).send({ error: "Client not found" });
    }

    let totalPanier = 0;
    const itemsProcessed = await Promise.all(
      items.map(async (item) => {
        const article = await Article.findById(item.articleId);
        if (!article) {
          throw new Error(`Article with ID ${item.articleId} not found`);
        }

        const total =
          parseFloat(article.price.replace("DT", "")) * item.quantity;
        totalPanier += total;

        return {
          articleId: item.articleId,
          quantity: item.quantity,
          total,
          nameArticle: article.name,
        };
      })
    );

    const panier = new Panier({
      referencePanier,
      clientId,
      items: itemsProcessed,
      totalPanier,
      nameClient: client.name,
    });

    const savedPanier = await panier.save();
    res.status(200).send(savedPanier);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Error while creating the panier" });
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

/**modifie une panier */
const updatePanier = async (req, res) => {
  try {
    const myId = req.params.id;
    const data = req.body;
    panier = await Panier.findByIdAndUpdate({ _id: myId }, data);
    res.status(200).send(panier);
  } catch (error) {
    console.log(error);
    console.log("error while getting panier");
  }
};

module.exports = {
  addPanier,
  getPanier,
  getOnePanier,
  deletePanier,
  updatePanier,
};
