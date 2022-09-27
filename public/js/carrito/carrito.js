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
    pintarProductosEnVista(userCartDetail, userCart); //User cart es para pintar la cantidad

    const restarProducto = document.querySelectorAll(".restarProducto");
    const sumarProducto = document.querySelectorAll(".sumarProducto");
    const eliminarProducto = document.querySelectorAll(".buttonQuitar");

    eliminarProducto.forEach((btn) => {
      btn.addEventListener("click", async () => {
        await deleteProduct(btn.dataset.id);
        document.location.reload();
      });
    });
    sumarProducto.forEach((btn) => {
      btn.addEventListener("click", async () => {
        await addProduct(btn.dataset.id, userCart);
        document.location.reload();
      });
    });
    restarProducto.forEach((btn) => {
      btn.addEventListener("click", async () => {
        await removeOneProduct(btn.dataset.id, userCart);
        document.location.reload();
      });
    });
  } catch (error) {
    console.log(error);
    return error;
  }
});

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
function pintarProductosEnVista(cartDetail, userCart) {
  const section = document.querySelector("#cartSection");
  let fragment = document.createDocumentFragment();
  let totalPrice = 0;
  //Articles
  for (const product of cartDetail) {
    let { quantity } = userCart.find((element) => element.id === product.id);

    let article = document.createElement("article");
    totalPrice += product.price;
    article.innerHTML = `
    <article class="articleCard">
    <div class="cardInfromation">
      <img
        class="card__img"
        src="${product.images[0]}"
        alt="producto carrito"
      />
      <p>${product.description}</p>
    </div>
    <div class="cardButton">
      <button class="buttonQuitar" data-id="${product.id}">Quitar</button>
      <div class="counter">
        <button class="restarProducto" data-id="${product.id}">-</button><span>${quantity}</span
        ><button class="sumarProducto" data-id="${product.id}">+</button>
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
async function deleteProduct(idProducto) {
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
async function addProduct(idProducto, userCart) {
  try {
    let { quantity } = userCart.find(({ id }) => id === Number(idProducto));

    const body = {
      userId: usuarioEnLocalStorage.id,
      product: {
        id: Number(idProducto),
        quantity: quantity + 1,
      },
    };
    const response = await fetch(`http://localhost:4000/api/cart`, {
      method: "PUT",
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
async function removeOneProduct(idProducto, userCart) {
  try {
    let { quantity } = userCart.find(({ id }) => id === Number(idProducto));
    if (quantity === 1) {
      return await deleteProduct(idProducto);
    } else {
      const body = {
        userId: usuarioEnLocalStorage.id,
        product: {
          id: Number(idProducto),
          quantity: quantity - 1,
        },
      };
      const response = await fetch(`http://localhost:4000/api/cart`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}
