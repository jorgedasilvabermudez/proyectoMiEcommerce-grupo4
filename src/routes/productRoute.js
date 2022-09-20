const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");

productRouter.get("/", productController.index);
productRouter.get("/products/:id", productController.product);

module.exports = productRouter;

//archivo en singular
