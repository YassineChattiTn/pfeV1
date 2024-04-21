const Article = require("../models/Article");

/**creation d'un article */
const addArticle = async (req, res) => {
  try {
    data = req.body;

    const article = new Article(data);
    const savedArticle = await article.save();
    res.status(200).send(savedArticle);
  } catch (error) {
    res.status(400).send(error);
  }
};

/**affichage des articles */
const getArticles = async (req, res) => {
  try {
    article = await Article.find();
    res.status(200).send(article);
  } catch (error) {
    console.log("error while getting articles " + error);
    res.status(500).send(error);
  }
};

/**modification d'un article */
const updateArticle = async (req, res) => {
  try {
    myId = req.params.id;
    data = req.body;
    updatedarticle = await Article.findByIdAndUpdate({ _id: myId }, data);
    res.status(200).send(updatedarticle);
  } catch (error) {
    console.log("error while updating an article " + error);

    res.status(500).send(error);
  }
};

/**affichage d'un article selon leur ID */
const getArticleId = async (req, res) => {
  try {
    myId = req.params.id;
    article = await Article.findById({ _id: myId });
    res.status(200).send(article);
  } catch (error) {
    console.log("error while getting article by ID " + error);

    res.status(500).send(error);
  }
};

/**effacer un article selon leur ID */
const deleteArticle = async (req, res) => {
  try {
    myId = req.params.id;
    article = await Article.findByIdAndDelete({ _id: myId });
    res.status(200).send(article);
  } catch (error) {
    console.log("error while deleting an article " + error);

    res.status(500).send(error);
  }
};

/**modifier l'etat du stock a non disponible */

const updateArticleToIndisponible = async (req, res) => {
  try {
    myId = req.params.id;
    data = { stock: "non disponible" };
    article = await Article.findByIdAndUpdate({ _id: myId }, data);
    res.status(200).send(article);
  } catch (error) {
    console.log(error);
    console.log("error while updating article's stock");
    res.status(400).send(error);
  }
};

/**modifier l'etat du stock a disponible */

const updateArticleToDisponible = async (req, res) => {
  try {
    myId = req.params.id;
    data = { stock: "disponible" };
    article = await Article.findByIdAndUpdate({ _id: myId }, data);
    res.status(200).send(article);
  } catch (error) {
    console.log(error);
    console.log("error while updating article's stock");
    res.status(400).send(error);
  }
};

module.exports = {
  getArticles,
  addArticle,
  updateArticle,
  getArticleId,
  deleteArticle,
  updateArticleToIndisponible,
  updateArticleToDisponible,
};
