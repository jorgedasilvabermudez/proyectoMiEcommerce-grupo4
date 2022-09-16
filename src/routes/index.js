const express = require("express");
const routes = express.Router();
const carRoutes = require("./cartRoutes");
const checkoutRoutes = require("./checkoutRoutes");
const loginRoutes = require("./loginRoutes");
const productRoutes = require("./productRoute");
const registerRoutes = require("./registerRoutes");

module.exports = (app) => {
  app.use("/cart", carRoutes);
  app.use("/checkout", checkoutRoutes);
  app.use("/login", loginRoutes);
  app.use("/products", productRoutes);
  app.use("/register", registerRoutes);
};
