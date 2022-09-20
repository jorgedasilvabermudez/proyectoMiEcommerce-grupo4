const { getAllProduct } = require("../services/fetchProducts");

const randomProducts = async () => {
  const products = await getAllProduct();

  const random = Math.ceil(Math.random() * 26);
  const randomProducts = [];
  for (let i = random; i <= random + 4; i++) {
    randomProducts.push(products[i]);
  }
  return randomProducts;
};

module.exports = { randomProducts };
