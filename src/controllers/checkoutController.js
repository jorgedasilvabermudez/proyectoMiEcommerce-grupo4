const fetch = require("node-fetch");
const { getAllProduct } = require("../../services/fetchProducts");
const { randomProducts } = require("../../services/helper");

const getCheckout = async (req, res) => {
  const products = await randomProducts();
  res.render("checkout", { products: products });
};

module.exports = getCheckout;
