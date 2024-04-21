const Admin = require("../models/Admin");
const User = require("../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**add an admin */

const registerAdmin = async (req, res) => {
  try {
    data = req.body;
    admin = new Admin(data);
    salt = bcrypt.genSaltSync(10);
    cryptedPassword = bcrypt.hashSync(data.password, salt);
    admin.password = cryptedPassword;
    savedAdmin = await admin.save();
    res.status(200).send(savedAdmin);
  } catch (error) {
    console.log(error);
    console.log("error while creating an admin");
    res.status(400).send(error);
  }
};

/**login admin */

const loginAdmin = async (req, res) => {
  try {
    data = req.body;

    admin = await Admin.findOne({ email: data.email });

    if (!admin) {
      res.status(401).send(" Email or Password invalid !!! ");
    } else {
      validPass = bcrypt.compareSync(data.password, admin.password);
      if (!validPass) {
        res.status(401).send(" Email or Password invalid !!! ");
      } else {
        payload = {
          _id: admin._id,
          email: admin.email,
          name: admin.name,
        };
        token = jwt.sign(payload, "0123");
        res.status(200).send({ myToken: token });
      }
    }
  } catch (error) {
    console.log(error);
    console.log("error while connecting");
    res.status(400).send(error);
  }
};

/**afficher tout les admins */

const getAdmins = async (req, res) => {
  try {
    admins = await Admin.find();
    res.status(200).send(admins);
  } catch (error) {
    console.log(error);
    console.log("error while getting admins");
    res.status(400).send(error);
  }
};

/**afficher un admin selon leur ID */
const getAdmin = async (req, res) => {
  try {
    myId = req.params.id;
    admin = await Admin.findById({ _id: myId });
    res.status(200).send(admin);
  } catch (error) {
    console.log(error);
    console.log("error while getting admin");
    res.status(400).send(error);
  }
};

/**effacer un admin selon leur ID */
const deleteAdmin = async (req, res) => {
  try {
    myId = req.params.id;
    admin = await Admin.findByIdAndDelete({ _id: myId });
    res.status(200).send(admin);
  } catch (error) {
    console.log(error);
    console.log("error while deleting admin");
    res.status(400).send(error);
  }
};

/**modifier un admin */
const updateAdmin = async (req, res) => {
  try {
    myId = req.params.id;
    data = req.body;
    admin = await Admin.findByIdAndUpdate({ _id: myId }, data);
    res.status(200).send(admin);
  } catch (error) {
    console.log(error);
    console.log("error while updating admin");
    res.status(400).send(error);
  }
};

/**supprimer un utilisateur coté admin */

const deleteUserByAdmin = async (req, res) => {
  try {
    userId = req.params.id;
    user = await User.findByIdAndDelete({ _id: userId });
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    console.log("error while deleting an user by admin");
    res.status(400).send(error);
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  getAdmins,
  getAdmin,
  deleteAdmin,
  updateAdmin,
  deleteUserByAdmin,
};
