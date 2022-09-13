const express = require('express');
const app= express();
const router= express.Router();
const products= require('./products.json')
console.log(products);


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views','./views/pages');

//rutas
app.get("/", (req, res) => { res.render('index');  });
app.get("/products/:id", (req, res) => { 
    const {id} = req.params
    res.render('product',{products: products});  });
app.get("/cart", (req, res) => { res.render('cart',{products: products});  });
app.get("/checkout", (req, res) => { res.render('checkout',{products: products});  });
app.get("/register", (req, res) => { res.render('register',{products: products});  });
app.get("/login", (req, res) => { res.render('login',{products: products});  });




app.listen(3000,()=>{
    console.log('Ecommerce started')
})