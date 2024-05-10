const express = require("express");

const router = express.Router();

const isAuth = require("../middleware/isAuth");

const {
  addCommande,
  getCommandes,
  getCommande,
  deleteCommande,
  updateCommande,
} = require("../controllers/Commande");

/**ajout du commande */
router.post("/addCommande", isAuth, addCommande);

/**affichage des commandes */
router.get("/getCommandes", isAuth, getCommandes);

/**affichage d'une seul commande */
router.get("/getCommande/:id", isAuth, getCommande);

/**effacer une commande */
router.delete("/deleteCommande/:id", isAuth, deleteCommande);

/**modifier une commande */
router.put("/updateCommande/:id", isAuth, updateCommande);

module.exports = router;
