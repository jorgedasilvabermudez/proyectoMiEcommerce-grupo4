const fetch = require("node-fetch");
const { getAllProduct } = require("../../services/fetchProducts");

const getCheckout = async (req, res) => {
  //Logica para obtener página checkout
  const products = await getAllProduct()
  res.render("checkout", { products: products });
};

module.exports = getCheckout;
