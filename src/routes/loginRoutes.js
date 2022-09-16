const express = require("express");
const loginRouter = express.Router();
const getLogin = require("../controllers/loginController");

loginRouter.get("/", getLogin);

module.exports = loginRouter;
