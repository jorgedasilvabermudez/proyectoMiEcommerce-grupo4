const fetch = require("node-fetch");
const API_PORT = process.env.API_PORT;
const url = `http://localhost:${API_PORT}/api/cart/`;

//articulos para cargar articulos hard-codeados momentaneamente