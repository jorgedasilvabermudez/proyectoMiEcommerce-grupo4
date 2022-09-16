const express = require("express");
const app = express();
const routes = require("./src/routes");
const products = require("./products.json");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./src/views/pages");

//rutas

app.get("/", (req, res) => {
  res.render("index", { products: products });
});
app.get("/products", (req, res) => {
  res.render("product", { products: products });
});
app.get("/cart", (req, res) => {
  res.render("cart", { products: products });
});
app.get("/checkout", (req, res) => {
  res.render("checkout", { products: products });
});
app.get("/register", (req, res) => {
  res.render("register", { products: products });
});
app.get("/login", (req, res) => {
  res.render("login", { products: products });
});

/*routes(app);*/

app.listen(3000, () => {
  console.log("Ecommerce started");
});
