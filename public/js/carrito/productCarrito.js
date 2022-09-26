const btnAgregarCarritoDesktop = document.querySelector(".img_button-D");
const btnAgregarCarritoMobile = document.querySelector(".img_button");
const a = document.querySelector(".img_a");

const path = window.location.href;
const idProducto = Number(path.slice(path.lastIndexOf("/") + 1));

// -------- Datos de prueba ---------
const usuario = JSON.stringify({
  id: 0,
  name: "maxi",
  email: "maxi@caballo.com",
});
localStorage.setItem("usuario", usuario);
//localStorage.removeItem("usuario");
const usuarioEnLocalStorage = JSON.parse(localStorage.getItem("usuario"));
// -------- Datos de prueba ---------

//Agregar producto
btnAgregarCarritoDesktop.addEventListener("click", async () => {
  if (usuarioEnLocalStorage) {
    //Está logueado
    const data = await agregarProducto(idProducto);
    console.log(data);
  } else {
    //No está logueado
    redirectLogin(btnAgregarCarritoDesktop);
  }
});
btnAgregarCarritoMobile.addEventListener("click", async () => {
  if (usuarioEnLocalStorage) {
    //Está logueado
    const data = await agregarProducto(idProducto);
    console.log(data);
  } else {
    //No está logueado
    redirectLogin(btnAgregarCarritoMobile);
  }
});

function redirectLogin() {
  alert(
    "Para agregar un producto al carrito tiene que haberse logueado previamente."
  );

  //a.href = "http://localhost:3000/login";
  a.href = window.location.href;
}
async function agregarProducto(idProducto) {
  try {
    const body = {
      userId: 0,
      product: {
        id: idProducto,
      },
    };
    console.log(JSON.stringify(body));
    const response = await fetch("http://localhost:4000/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
