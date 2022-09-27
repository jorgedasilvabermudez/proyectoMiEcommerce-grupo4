let bloqueo = document.querySelector(".divBloqueo");
let menu = document.querySelector(".slideNavbar");

document.querySelector("#menuAction").addEventListener("click", (event) => {
  event.stopPropagation();
  bloqueo.classList.toggle("show");
  menu.classList.toggle("slide-in-blurred-top");
});

bloqueo.onclick = function (e) {
  if (menu.contains(e.target)) {
    return;
  }
  bloqueo.classList.remove("show");
};
