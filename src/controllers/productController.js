const {
  getAllProduct,
  getProductById,
  getSuggestedProductById,
} = require("../../services/fetchProducts");
const { randomProducts } = require("../../services/helper");

const product = async (req, res) => {
  const { id } = req.params;
  const [product, suggestedProducts, products, randomProd] = await Promise.all([
    getProductById(id),
    getSuggestedProductById(id),
    getAllProduct(),
    randomProducts(),
  ]);

  product.status === 404
    ? res.render("productNotFound", {
        product,
        products: randomProd,
      })
    : res.render("product", {
        product: product,
        products: suggestedProducts,
      });
};

const index = async (req, res) => {
  const products = await getAllProduct();
  //mas pedidos H#8
  const moreCount = [...products]
    .sort((a, b) => b.rating.count - a.rating.count)
    .slice(0, 8);
  //productos sugerido H#7
  const suggestedProd = [...products].sort(
    (a, b) => b.rating.rate - a.rating.rate
  );

  res.render("index", { products: suggestedProd, moreCount });
};

module.exports = {
  product,
  index,
};
