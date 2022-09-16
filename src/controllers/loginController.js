const fetch = require("node-fetch");

const getLogin = async (req, res) => {
  //Hacer fetch a api/users/login
  res.render("login");
};

module.exports = getLogin;
