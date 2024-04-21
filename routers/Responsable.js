const express = require("express");
const router = express.Router();

const isAuth = require("../middleware/isAuth");

const {
  registerResponsable,
  loginResponsable,
  getResponsable,
  updateResponsable,
  deleteResponsable,
  getOneResponsable,
} = require("../controllers/Responsable");

/**creation responsable */

router.post("/addResponsable", isAuth, registerResponsable);

/**connexion de responsable */

router.get("/loginResponsable", isAuth, loginResponsable);

/**affichage des responsables */

router.get("/getResponsable", isAuth, getResponsable);

// /**modification d'un responsable */

router.put("/updateResponsable/:id", isAuth, updateResponsable);

// /**effacer un responsable */

router.delete("/deleteResponsable/:id", isAuth, deleteResponsable);

// /**affichage d'un responsable selon l'ID */

router.get("/getResponsable/:id", isAuth, getOneResponsable);

module.exports = router;
