const express = require("express");
const router = express.Router();
const carRoutes = require("./cartRoutes");
const checkoutRoutes = require("./checkoutRoutes");
const loginRoutes = require("./loginRoutes");
const productRoutes = require("./productRoute"); //unica que quedo en singular
const registerRoutes = require("./registerRoutes");


  router.use('/cart', carRoutes);
  router.use('/checkout', checkoutRoutes);
  router.use('/login', loginRoutes);
  router.use('/', productRoutes);
  router.use('/products', productRoutes);//para que mande al index sino se indica id
  router.use('/register', registerRoutes);


module.exports = router