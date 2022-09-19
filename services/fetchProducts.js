const fetch = require("node-fetch");

const url = `http://localhost:6000/api/product/`;

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

module.exports = {
  getAllProduct,
  getProductById,
};
