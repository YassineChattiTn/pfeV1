const isAuth = function (req, res, next) {
  console.log("logged");
  next();
};

module.exports = isAuth;
