const express = require("express");
const router = express.Router();

const isAuth = require("../middleware/isAuth");

const {
  registerAdmin,
  loginAdmin,
  getAdmins,
  getAdmin,
  deleteAdmin,
  updateAdmin,
  deleteUserByAdmin,
} = require("../controllers/Admin");

/**Admin registration */

router.post("/addAdmin", isAuth, registerAdmin);

/**Admin connection */

router.post("/connectAdmin", isAuth, loginAdmin);

/**afficher tout les admins */

router.get("/getAdmin", isAuth, getAdmins);

/**afficher un admin selon ID */

router.get("/getAdmin/:id", isAuth, getAdmin);

/**efface un admin */

router.delete("/deleteAdmin/:id", isAuth, deleteAdmin);

/**modifier un Admin */

router.put("/updateAdmin/:id", isAuth, updateAdmin);

/**efface un utilisateur coté admin */

router.delete("/deleteUserByAdmin/:id", isAuth, deleteUserByAdmin);

module.exports = router;
