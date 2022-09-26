const eliminarProducto = document.querySelector(".buttonQuitar");
const restarProducto = document.querySelector("#restarProducto");
const sumarProducto = document.querySelector("#sumarProducto");
console.log("console desde cart page");
// -------- Datos de prueba ---------
const usuario = JSON.stringify({
  id: 0,
  name: "maxi",
  email: "maxi@caballo.com",
});
//localStorage.setItem("usuario", usuario);
//localStorage.removeItem("usuario");
const usuarioEnLocalStorage = JSON.parse(localStorage.getItem("usuario"));
// -------- Datos de prueba ---------

//Eliminar producto
eliminarProducto.addEventListener("click", () => {});
//Sumar producto
sumarProducto.addEventListener("click", () => {});
//Restar producto
restarProducto.addEventListener("click", () => {});
