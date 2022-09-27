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
    try {
      await agregarProducto(idProducto);
      //Redirecciono a página cart con el id del usuario para hacer la busqueda del carrito y listar
      //a.href = `${window.location.origin}/cart/${usuarioEnLocalStorage.id}`;
      window.location.href = `${window.location.origin}/cart`;
    } catch (error) {
      console.log(error);
      return error;
    }
  } else {
    //No está logueado
    alert(
      "Para agregar un producto al carrito tiene que haberse logueado previamente."
    );
  }
});
btnAgregarCarritoMobile.addEventListener("click", async () => {
  if (usuarioEnLocalStorage) {
    //Está logueado
    await agregarProducto(idProducto);
    //a.href = `${window.location.origin}/cart/${usuarioEnLocalStorage.id}`;
    window.location.href = `${window.location.origin}/cart`;
  } else {
    //No está logueado
    alert(
      "Para agregar un producto al carrito tiene que haberse logueado previamente."
    );
  }
});

async function agregarProducto(idProducto) {
  try {
    const body = {
      userId: 0,
      product: {
        id: idProducto,
      },
    };
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
