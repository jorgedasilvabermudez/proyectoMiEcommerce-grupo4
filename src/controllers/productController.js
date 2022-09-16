const fetch = require("node-fetch");

const getProduct = async (req, res) => {
  //Logica para obtener producto
  res.render("index", { products });
};

const getProducts = async (req, res) => {
  //Logica para obtener productos
  res.render("products", { product });
};

module.exports = {
  getProduct,
  getProducts,
};
