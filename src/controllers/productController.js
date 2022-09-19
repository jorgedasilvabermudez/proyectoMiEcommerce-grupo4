const {
  getAllProduct,
  getProductById,
} = require("../../services/fetchProducts");

const product = async (req, res) => {
  const { id } = req.params;
  const [product, products] = await Promise.all([
    getProductById(id),
    getAllProduct(),
  ]);

  product
    ? res.render("product", { product: product, products: products })
    : res.render("productNotfound", { products });
};

const index = async (req, res) => {
  const products = await getAllProduct();
  //mas pedidos H#8
  const ordered = products.sort((a, b) => b.rating.count - a.rating.count);
  const moreCount = ordered.slice(0, 8);
  //productos sugerido H#7
  const suggestedProd = products.sort((a, b) => {
    b.rating.rate - a.rating.rate;
  });

  res.render("index", { products: suggestedProd, moreCount });
};

module.exports = {
  product,
  index,
};
