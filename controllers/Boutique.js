const Boutique = require("../models/Boutique");

/**creation d'une boutique */
const addBoutique = async (req, res) => {
  try {
    data = req.body;
    boutique = new Boutique(data);
    savedBoutique = await boutique.save();
    res.status(200).send(savedBoutique);
  } catch (error) {
    console.log("error while creating store " + error);
    res.status(500).send(error);
  }
};

/**affichage des boutiques */
const getBoutique = async (req, res) => {
  try {
    boutiques = await Boutique.find();
    res.status(200).send(boutiques);
  } catch (error) {
    console.log("error while getting stores" + error);
  }
};

/**modification d'une boutique */
const updateBoutique = async (req, res) => {
  try {
    myId = req.params.id;
    data = req.body;
    updatedBoutique = await Boutique.findByIdAndUpdate({ _id: myId }, data);
    res.status(200).send(updatedBoutique);
  } catch (error) {
    console.log("error while updating store " + error);
    res.status(500).send(error);
  }
};

/**affichage de boutique selon ID */
const getBoutiqueId = async (req, res) => {
  try {
    myId = req.params.id;
    boutique = await Boutique.findById({ _id: myId });
    res.status(200).send(boutique);
  } catch (error) {
    console.log("error while getting a store by ID " + error);

    res.status(500).send(error);
  }
};

/**effacer une boutique */
const deleteBoutique = async (req, res) => {
  try {
    myId = req.params.id;
    boutique = await Boutique.findByIdAndDelete({ _id: myId });
    res.status(200).send(boutique);
  } catch (error) {
    console.log("error while deleting a store " + error);
    res.status(500).send(error);
  }
};

module.exports = {
  getBoutique,
  addBoutique,
  updateBoutique,
  getBoutiqueId,
  deleteBoutique,
};
