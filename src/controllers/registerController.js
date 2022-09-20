const fetch = require("node-fetch");

const getRegister = (req, res) => {
  //Hacer fetch de productos
  res.render("register", { });
};

module.exports = getRegister;
