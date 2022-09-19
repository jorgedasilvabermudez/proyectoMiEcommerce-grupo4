const fetch = require("node-fetch");
const API_PORT = process.env.API_PORT;
const url = `http://localhost:${API_PORT}/api/product/`;

async function getProductById(id) {
  const result = await fetch(`${url}${id}`);
  const data = await result.json();
  return data;
}
//articulos para productCard
async function getAllProduct() {
  const results = await fetch(`${url}`);
  const datas = await results.json();

  return datas;
}
//productos sugeridos H#10
async function getSuggestedProductById(id) {
  const products = await getAllProduct();
  const product = await getProductById(id);
  const suggestedProducts = products.filter(
    (p) => p.category === product.category
  );

  return suggestedProducts;
}

module.exports = {
  getAllProduct,
  getProductById,
  getSuggestedProductById,
};
