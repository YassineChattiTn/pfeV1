const express = require("express");
const router = express.Router();
const Table = require("../models/Table");
const {
  addTable,
  getTables,
  getTablesEtat,
  getTableNumber,
  deleteTable,
  updateTable,
  updateAllTables,
  updateAllTablesNo,
} = require("../controllers/Table");
const isAuth = require("../middleware/isAuth");

//**appel de l'ajoute d'une table */
router.post("/addTable", isAuth, addTable);

/**appel de l'affichage les tables */
router.get("/getTables", isAuth, getTables);

/**afficher les tables selon leur disponibilité */
router.get("/getTables/:etat", isAuth, getTablesEtat);

/**afficher les table selon leur numero */
router.get("/getTableNumber/:table_Number", isAuth, getTableNumber);

/**effacer une table */
router.delete("/deleteTable/:id", isAuth, deleteTable);

/**modifier une Table */
router.put("/updateTable/:id", isAuth, updateTable);

/**tout les table son disponible */
router.put("/updateAllTables", isAuth, updateAllTables);

//**tout les table son non disponible */
router.put("/updateAllTablesNo", isAuth, updateAllTablesNo);

module.exports = router;
