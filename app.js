const { render } = require("ejs");
const express = require("express");
const app = express();
const router = require("./src/routes");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./src/views/pages");

//rutas
app.use('/',router)


app.get('*', function(req, res){
  res.status(404).render('error');
});


app.listen(3000, () => {
  console.log("Ecommerce started");
});

