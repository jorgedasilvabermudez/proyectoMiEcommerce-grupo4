const eliminarProducto = document.querySelector(".buttonQuitar");
const restarProducto = document.querySelector("#restarProducto");
const sumarProducto = document.querySelector("#sumarProducto");

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
window.addEventListener("load", async () => {
  try {
    const userCart = await getUserCart(usuarioEnLocalStorage.id); //Carrito como viene de la API
    //Si hay error redirect a Index
    if (userCart.status === 404)
      window.location.href = `${window.location.origin}`;
    const userCartDetail = await getUserCartDetail(userCart); //Carrito con detalle para mostrar en vista
    pintarProductosEnVista(userCartDetail);
    console.log(userCartDetail);
  } catch (error) {
    console.log(error);
    return error;
  }
});
//Eliminar producto
eliminarProducto.addEventListener("click", async () => {
  try {
    console.log(e);
    //await deleteProduct();
  } catch (error) {
    console.log(error);
    return error;
  }
});
//Sumar producto
sumarProducto.addEventListener("click", () => {});
//Restar producto
restarProducto.addEventListener("click", () => {});

//FUNCIONES
//Api carrito sin detalle
async function getUserCart(userId) {
  const url = `http://localhost:4000/api/cart/`;
  try {
    const response = await fetch(`${url}${userId}`);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
}
async function getUserCartDetail(cart) {
  try {
    const userCartProduct = [];
    for (const { id } of cart) {
      userCartProduct.push(await getProductById(id));
    }
    return userCartProduct;
  } catch (error) {
    console.log(error);
    return error;
  }
}
async function getProductById(productId) {
  const url = `http://localhost:4000/api/product/`;
  try {
    const result = await fetch(`${url}${productId}`);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
async function deleteProduct(idProducto) {
  console.log(idProducto);
  try {
    const response = await fetch(
      `http://localhost:4000/api/cart/${usuarioEnLocalStorage.id}?productId=${idProducto}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
function pintarProductosEnVista(cartDetail) {
  const section = document.querySelector("#cartSection");
  let fragment = document.createDocumentFragment();
  let totalPrice = 0;
  //Articles
  for (const product of cartDetail) {
    let article = document.createElement("article");
    totalPrice += product.price;
    article.innerHTML = `
    <article class="articleCard" data-id="${product.id}">
    <div class="cardInfromation">
      <img
        class="card__img"
        src="${product.images[0]}"
        alt="producto carrito"
      />
      <p>${product.description}</p>
    </div>
    <div class="cardButton">
      <button class="buttonQuitar">Quitar</button>
      <div class="counter">
        <button id="restarProducto">-</button><span>2</span
        ><button id="sumarProducto">+</button>
      </div>
      <p>${product.price}</p>
    </div>
  </article>`;
    fragment.appendChild(article);
  }
  //Total price
  let divPrice = document.createElement("div");
  divPrice.innerHTML = `
  <div class="divPagar">
   <p>Total de Puntos</p>
   <p class="totalPrice">${totalPrice}</p>
  </div>
  `;
  let divPagar = document.createElement("div");
  divPagar.innerHTML = `
  <div class="divButton">
   <a href="/checkout">Ir a Pagar</a>
  </div>
  `;

  fragment.appendChild(divPrice);
  fragment.appendChild(divPagar);

  section.appendChild(fragment);
}
