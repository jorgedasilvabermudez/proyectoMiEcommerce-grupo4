const fetch = require("node-fetch");

const getCart = async (req, res) => {
  const result= await fetch(`http://localhost:6000/api/product`);
  const data = await result.json();

  res.render("cart", { products: data});
};

module.exports = getCart;
