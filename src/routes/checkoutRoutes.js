const express = require("express");
const checkoutRouter = express.Router();
const getCheckout = require("../controllers/checkoutController");

checkoutRouter.get("/", getCheckout);

module.exports = checkoutRouter;
