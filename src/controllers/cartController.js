const {getAllProduct} = require("../../services/fetchProducts");

const cart = async (req, res) => {
  //momentaneo sin carga de carrito
  const products= await getAllProduct();

  res.render("cart", { products});
};

module.exports = {cart};
