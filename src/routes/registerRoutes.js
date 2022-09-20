const express = require("express");
const registerRouter = express.Router();
const getRegister = require("../controllers/registerController");

registerRouter.get("/", getRegister);

module.exports = registerRouter;
