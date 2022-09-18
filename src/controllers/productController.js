const fetch = require("node-fetch");

const getProduct = async (req, res) => {
  //articulo por id
  const { id }= req.params;
  const result= await fetch(`http://localhost:6000/api/product/${id}`);
  const data= await result.json();
  //articulos para productCard
  const results= await fetch(`http://localhost:6000/api/product`);
  const datas = await results.json();
  res.render("product", { product : data, products: datas });
};

const getProducts = async (req, res) => {
  const result= await fetch(`http://localhost:6000/api/product`);
  const data = await result.json();
  res.render("index", { products : data });
};

module.exports = {
  getProduct,
  getProducts,
};
