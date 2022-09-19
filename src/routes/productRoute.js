const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");

productRouter.get("/", productController.getProducts);
productRouter.get("/products/:id", productController.getProduct);

module.exports = productRouter;


//archivo en singular