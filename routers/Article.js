const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

const isAuth = require("../middleware/isAuth");
const {
  getArticles,
  addArticle,
  updateArticle,
  getArticleId,
  deleteArticle,
  updateArticleToIndisponible,
  updateArticleToDisponible,
} = require("../controllers/Article");

/**creation d'un article */
router.post("/addArticle", isAuth, addArticle);

//**modification de article */
router.put("/updateArticle/:id", isAuth, updateArticle);

//**affichage de article */
router.get("/getArticle", isAuth, getArticles);

/**affichage a traver ID */
router.get("/getArticle/:id", isAuth, getArticleId);

//**effacer l'article' */
router.delete("/deleteArticle/:id", isAuth, deleteArticle);

/**updating article stock to indisponible */
router.put("/updateArticleStock/:id", isAuth, updateArticleToIndisponible);

/**updating article stock to disponible */

router.put("/updateArticleStockDispo/:id", isAuth, updateArticleToDisponible);

module.exports = router;
