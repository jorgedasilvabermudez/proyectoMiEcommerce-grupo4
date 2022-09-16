const fetch = require("node-fetch");

const getCart = async (req, res) => {
  //Logica para obtener página carrito
  res.render("cart", { products: products });
};

module.exports = getCart;
