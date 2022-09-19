const fetch = require("node-fetch");

const getProduct = async (req, res) => {
  //articulo por id
  const { id }= req.params;
  const result= await fetch(`http://localhost:6000/api/product/${id}`);
  const data= await result.json();
  //articulos para productCard
  const results= await fetch(`http://localhost:6000/api/product`);
  const datas = await results.json();

  res.render("product", { product : data, products: datas, category });
};

const getProducts = async (req, res) => {
  const result= await fetch(`http://localhost:6000/api/product`);
  const data = await result.json();
  //mas pedidos H#8
  const ordered= data.sort( (a, b)=>b.rating.count-a.rating.count);
  const moreCount=ordered.slice(0,8)
  //productos sugerido H#7
  suggestedProd=data.sort( (a, b)=>{b.rating.rate-a.rating.rate});

  res.render("index", { products : suggestedProd, moreCount });
};

module.exports = {
  getProduct,
  getProducts,
};