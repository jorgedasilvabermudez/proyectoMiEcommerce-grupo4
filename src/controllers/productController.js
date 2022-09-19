const {
  getAllProduct,
  getProductById,
  getSuggestedProductById,
} = require("../../services/fetchProducts");

const product = async (req, res) => {
  const { id } = req.params;
  const [product, suggestedProducts, products] = await Promise.all([
    getProductById(id),
    getSuggestedProductById(id),
    getAllProduct(),
  ]);

  product
    ? res.render("product", { product: product, products: suggestedProducts })
    : res.render("productNotfound", { products: products });
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
