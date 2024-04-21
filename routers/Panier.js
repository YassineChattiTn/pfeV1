const express = require("express");

const router = express.Router();

const isAuth = require("../middleware/isAuth");

const {
  addPanier,
  getPanier,
  getOnePanier,
  deletePanier,
} = require("../controllers/Panier");

/**ajout du panier */

router.post("/addPanier", isAuth, addPanier);

/**afficher tout les panier */

router.get("/getPanier", isAuth, getPanier);

/**afficher une panier selon ID */

router.get("/getPanier/:id", isAuth, getOnePanier);

/**effacer une panier */

router.delete("/deletePanier/:id", isAuth, deletePanier);

module.exports = router;
