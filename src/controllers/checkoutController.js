const fetch = require("node-fetch");

const getCheckout = (req, res) => {
  //Logica para obtener página checkout
  res.render("checkout", { products: products });
};

module.exports = getCheckout;
