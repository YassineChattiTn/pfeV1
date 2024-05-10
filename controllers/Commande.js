const Commande = require("../models/Commande");
const Panier = require("../models/Panier");

/**creation du commande */

const addCommande = async (req, res) => {
  try {
    const { commandeRef, panierRef } = req.body;

    const panier = await Panier.findById(panierRef);

    console.log(panier);

    if (!panier) {
      return res.status(404).send({ error: "Panier not found" });
    }

    const newCommande = new Commande({
      commandeRef,
      panierRef,
      total: panier.totalPanier,
    });
    const savedCommande = await newCommande.save();

    res.status(200).send(savedCommande);
    console.log(savedCommande);
  } catch (error) {
    res
      .status(400)
      .send({ error: "error while creating commande" + error.message });
  }
};

/**affichage des Commandes */
const getCommandes = async (req, res) => {
  try {
    commande = await Commande.find();
    res.status(200).send(commande);
  } catch (error) {
    console.log(error);
    console.log("error while getting commande");
  }
};

/**affichage d'une seul commande */
const getCommande = async (req, res) => {
  try {
    const data = req.params.id;
    commande = await Commande.findById({ _id: data });
    res.status(200).send(commande);
  } catch (error) {
    console.log(error);
    console.log("error while getting commande");
  }
};

/**effacer une commande */
const deleteCommande = async (req, res) => {
  try {
    const data = req.params.id;
    commande = await Commande.findByIdAndDelete({ _id: data });
    res.status(200).send(commande);
  } catch (error) {
    console.log(error);
    console.log("error while getting commande");
  }
};

/**modifie une commande */
const updateCommande = async (req, res) => {
  try {
    const myId = req.params.id;
    const data = req.body;
    commande = await Commande.findByIdAndUpdate({ _id: myId }, data);
    res.status(200).send(commande);
  } catch (error) {
    console.log(error);
    console.log("error while getting commande");
  }
};

module.exports = {
  addCommande,
  getCommandes,
  getCommande,
  deleteCommande,
  updateCommande,
};
