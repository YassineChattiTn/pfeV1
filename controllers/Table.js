const Table = require("../models/Table");

/**creation de la table */

const addTable = async (req, res) => {
  try {
    data = req.body;

    table = new Table(data);

    savedTable = await table.save();

    res.send(savedTable);
  } catch (error) {
    console.log("error while creating a table " + error);
  }
};

/**affichage de tout les tables */
const getTables = async (req, res) => {
  try {
    table = await Table.find();

    res.status(401).send(table);
  } catch (error) {
    console.log("error while getting tables from DB " + error);

    res.status(500).send(error);
  }
};

/**affichage des tables a condition de leur etat */
const getTablesEtat = async (req, res) => {
  try {
    etatT = req.params.etat;
    table = await Table.find({ etat: etatT });
    res.send(table);
  } catch (error) {
    console.log("error while getting tables from DB " + error);

    res.status(500).send(error);
  }
};

/**affichage de table selon le numero de table */
const getTableNumber = async (req, res) => {
  try {
    tableNum = req.params.table_Number;
    table = await Table.find({ table_Number: tableNum });
    res.send(table);
  } catch (error) {
    console.log("error while getting tables from DB " + error);

    res.status(500).send(error);
  }
};

/**effacer une table */
const deleteTable = async (req, res) => {
  try {
    myId = req.params.id;
    table = await Table.findByIdAndDelete({ _id: myId });
    res.status(200).send(table);
  } catch (error) {
    console.log("error while deleting the table " + error);
    res.status(500).send(error);
  }
};
/**modifier tout les table disponible a non disponible */
const updateAllTables = async (req, res) => {
  try {
    data = { etat: "disponible" };
    newEtat = await Table.updateMany({ etat: "non disponible" }, data);
    res.status(200).send(newEtat);
  } catch (error) {
    console.log("error while updating the tables " + error);
    res.status(500).send(error);
  }
};

/**modification d'une table */
const updateTable = async (req, res) => {
  try {
    myId = req.params.id;
    data = req.body;
    newTable = await Table.findByIdAndUpdate({ _id: myId }, data);
    res.status(200).send(newTable);
  } catch (error) {
    console.log("error while updating the table" + error);
    res.status(500).send(error);
  }
};

/**modifier tout les tables non disponible a disponible */
const updateAllTablesNo = async (req, res) => {
  try {
    data = { etat: "non disponible" };
    newEtat = await Table.updateMany({ etat: "disponible" }, data);
    res.status(200).send(newEtat);
  } catch (error) {
    console.log("error while updating the table" + error);
    res.status(500).send(error);
  }
};

module.exports = {
  addTable,
  getTables,
  getTablesEtat,
  getTableNumber,
  deleteTable,
  updateTable,
  updateAllTables,
  updateAllTablesNo,
};
