let logueado = document.querySelector('#logeado');
let invitado = document.querySelector('#invitado');


let usuario = JSON.parse(localStorage.getItem("usuario"));
const isLoged = () => {

    if (usuario) {
        console.log(usuario.isLoged)
        if (usuario.isLoged === true) {
            logueado.style.display = 'block';
            invitado.style.display = 'none';
        }   
        if(usuario.isLoged===false){
            logueado.style.display = 'block';
            invitado.style.display = 'none';
        }
    }
    else {
        invitado.style.display = 'block';
        logueado.style.display = 'none';
    }
}
isLoged()
