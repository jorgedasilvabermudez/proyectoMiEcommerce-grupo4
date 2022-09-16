const express = require("express");
const productRouter = express.Router();
const { getProduct, getProducts } = require("../controllers/productController");

productRouter.get("/", getProducts);
productRouter.get("/products/:id", getProduct);

module.exports = productRouter;
