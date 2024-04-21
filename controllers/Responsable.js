const Responsable = require("../models/Responsable");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**inscription de Responsable */
const registerResponsable = async (req, res) => {
  try {
    data = req.body;
    resp = new Responsable(data);
    salt = bcrypt.genSaltSync(10);
    cryptedPassword = bcrypt.hashSync(data.password, salt);
    resp.password = cryptedPassword;
    savedResp = await resp.save();
    res.status(200).send(savedResp);
  } catch (error) {
    res.status(400).send("error while registering", error);
  }
};

// /**login */
const loginResponsable = async (req, res) => {
  try {
    data = req.body;

    resp = await Responsable.findOne({ email: data.email });

    if (!resp) {
      res.status(404).send(" Email or Password invalid !!! ");
    } else {
      validPass = bcrypt.compareSync(data.password, resp.password);
      if (!validPass) {
        res.status(401).send(" Email or Password invalid !!! ");
      } else {
        payload = {
          _id: resp._id,
          email: resp.email,
          name: resp.name,
        };
        token = jwt.sign(payload, "0123");
        res.status(200).send({ myToken: token });
      }
    }
  } catch (error) {
    console.log("error while login ");
    res.status(400).send(error);
  }
};

/**affichage des tout les responsables */
const getResponsable = async (req, res) => {
  try {
    resps = await Responsable.find();
    res.send(resps);
  } catch (error) {
    console.log("error while getting responsables ");
    res.status(400).send(error);
  }
};

/**modification de responsable */
const updateResponsable = async (req, res) => {
  try {
    myId = req.params.id;
    data = req.body;
    newResponsable = await Responsable.findByIdAndUpdate({ _id: myId }, data);
    res.status(200).send(newResponsable);
  } catch (error) {
    console.log("error while updating responsable ");
    console.log(error);
    res.status(400).send(error);
  }
};

/**affichage de responsable selon ID */
const getOneResponsable = async (req, res) => {
  try {
    myId = req.params.id;
    responsable = await Responsable.findById({ _id: myId });
    res.send(responsable);
  } catch (error) {
    console.log("error while getting the responsable ");
    res.status(400).send(error);
  }
};

/**effacer un responsable */
const deleteResponsable = async (req, res) => {
  try {
    myId = req.params.id;
    responsable = await Responsable.findByIdAndDelete({ _id: myId });
    res.send(responsable);
  } catch (error) {
    console.log("error while deleting the responsable ");
    res.status(400).send(error);
  }
};

module.exports = {
  registerResponsable,
  loginResponsable,
  getResponsable,
  updateResponsable,
  getOneResponsable,
  deleteResponsable,
};
