const formRegister = document.forms.login;
const { user, password } = formRegister.elements;

user.addEventListener('blur', userValido);
password.addEventListener('blur', passValida);
let button = document.querySelector('#btnLogin');

function validarCampo(typeCampo, idUl, type) {
    let ulCampo= document.querySelector(`#${idUl}`);
    let errors=[];
    button.disabled=true;
    ulCampo.innerHTML='';
    if (typeCampo.value!='') {
        button.disabled=false;
    }else{
        errors.push(`El campo ${type} no puede estar vacio.`)

    }

    for (let i = 0; i < errors.length; i++) {
        const error = errors[i];
        ulCampo.innerHTML=`<li>${error}</li>`
        
    }
}
function userValido() {    
    validarCampo(user, 'ulLoginUser', 'user');
}



function passValida() {
    validarCampo(password, 'ulLoginPass', 'contraseña');
}