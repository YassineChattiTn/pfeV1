const express = require("express");

require("./config/connect");
//**initialisation des routes */

const userRoute = require("./routers/User");

const boutiqueRoute = require("./routers/Boutique");

const articleRoute = require("./routers/Article");

const responsableRoute = require("./routers/Responsable");

const panierRoute = require("./routers/Panier");

const adminRoute = require("./routers/Admin");

const commandeRoute = require("./routers/Commande");

/**importation de dotenv */

const dontenv = require("dotenv");

dontenv.config({ path: ".env" });

/**initialisation de l'application */

const app = express();

app.use(express.json());

/**appel des APIs en utilisant notre routes */

app.use("/user", userRoute);

app.use("/boutique", boutiqueRoute);

app.use("/article", articleRoute);

app.use("/responsable", responsableRoute);

app.use("/panier", panierRoute);

app.use("/admin", adminRoute);

app.use("/commande", commandeRoute);

/**declaration de port de serveur q'ons va l'utiliser */

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server running on " + PORT);
});
