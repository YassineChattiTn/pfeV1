const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**inscription des tout les utilisateurs */
const registerUser = async (req, res) => {
  try {
    data = req.body;
    usr = new User(data);
    salt = bcrypt.genSaltSync(10);
    cryptedPassword = bcrypt.hashSync(data.password, salt);
    usr.password = cryptedPassword;
    savedUser = await usr.save();
    res.status(200).send(savedUser);
  } catch (error) {
    res.status(500).send("error while registering", error);
  }
};

/**login */
const loginUser = async (req, res) => {
  try {
    data = req.body;

    user = await User.findOne({ email: data.email });

    if (!user) {
      res.status(404).send(" Email or Password invalid !!! ");
    } else {
      validPass = bcrypt.compareSync(data.password, user.password);
      if (!validPass) {
        res.status(401).send(" Email or Password invalid !!! ");
      } else {
        payload = {
          _id: user._id,
          email: user.email,
          name: user.name,
        };
        token = jwt.sign(payload, "0123");
        res.status(200).send({ myToken: token });
      }
    }
  } catch (error) {}
};

/**affichage des tout les utilisateurs */
const getUser = async (req, res) => {
  try {
    users = await User.find();
    res.send(users);
  } catch (error) {}
};

/**modification d'utilisateur */
const updateUser = async (req, res) => {
  try {
    myId = req.params.id;
    data = req.body;
    newUser = await User.findByIdAndUpdate({ _id: myId }, data);
    res.send(newUser);
  } catch (error) {}
};

/**affichage d'utilisateur selon ID */
const getOneUser = async (req, res) => {
  try {
    myId = req.params.id;
    user = await User.findById({ _id: myId });
    res.send(user);
  } catch (error) {}
};

/**effacer un utilisateur */
const deleteUser = async (req, res) => {
  try {
    myId = req.params.id;
    user = await User.findByIdAndDelete({ _id: myId });
    res.status(200).send(user);
  } catch (error) {}
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  updateUser,
  getOneUser,
  deleteUser,
};
