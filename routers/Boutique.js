const express = require("express");
const router = express.Router();

const isAuth = require("../middleware/isAuth");

const {
  getBoutique,
  addBoutique,
  updateBoutique,
  getBoutiqueId,
  deleteBoutique,
} = require("../controllers/Boutique");

/**creation d'un boutique */
router.post("/addBoutique", isAuth, addBoutique);

//**modification de boutique */
router.put("/updateBoutique/:id", isAuth, updateBoutique);

//**affichage de boutique */
router.get("/getBoutique", isAuth, getBoutique);

/**affichage a traver ID */
router.get("/getBoutique/:id", isAuth, getBoutiqueId);

//**effacer le boutique */
router.delete("/deleteBoutique/:id", isAuth, deleteBoutique);

module.exports = router;
