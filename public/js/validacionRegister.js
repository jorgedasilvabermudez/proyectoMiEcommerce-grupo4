const formRegister = document.forms.register;
const { nombre, apellido, email, password, password2 } = formRegister.elements;
const formElements = formRegister.elements;
let ulVerificar = document.querySelectorAll('ul');
let button = document.querySelector('#btnCreate');

let camposVerificado= {
    name: false,
    surname: false,
    email: false
}

nombre.addEventListener('blur', validacionName);
apellido.addEventListener('blur', validacionSurname);
email.addEventListener('blur', validacionEmail);
password.addEventListener('blur', validacionPassword1);
password2.addEventListener('blur', validarPassword2);


function validarEspacio(campo) {
    let esValido = true;
    if (campo.indexOf(' ') === 0 || campo.indexOf(' ') === campo.length - 1) {
        esValido = false
    }
    return esValido;
}

function validacionCampo(idCampo, idSpan, typeCampo) {
    let campo = document.querySelector(`#${idCampo}`).value;
    let ulCampo = document.querySelector(`#${idSpan}`);
    let expRegNumeros = /[0-9]/;
    ulCampo.innerHTML = '';
    button.disabled=true;

    let campoValido = false;
    let errors = [];

    if (campo === '') {
        errors.push(`El campo ${typeCampo} no puede estar vacio.`)
    } else if (campo.length < 2) {
        errors.push(`El ${typeCampo} tiene que tener por lo menos 2 caracteres.`);
    } else if (!(validarEspacio(campo))) {
        errors.push(`El ${typeCampo} no puede tener espacios al principio ni al final.`)
    }
    if ((expRegNumeros.test(campo))) {
        errors.push(`El ${typeCampo} no debe contener numeros`);
    }

    for (let i = 0; i < errors.length; i++) {
        const error = errors[i];
        ulCampo.innerHTML += `<li> ${error} </li>`;
    }
    if (errors.length === 0) {
        campoValido = true
        button.disabled=false;
    }
    return campoValido
}

function validacionName() {
    return validacionCampo('nameRegister', 'ulNameRegister', 'nombre');
}

function validacionSurname() {
    return validacionCampo('surnameRegister', 'ulSurnameRegister', 'apellido');
}

function validacionEmail() {
    let email = document.querySelector('#emailRegister').value;

    let ulCampo = document.querySelector('#ulEmailRegister');
    let emailReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let emailValido = false;
    let errors = [];
    button.disabled=true;

    if (email === '') {
        errors.push(`El campo no puede estar vacio.`)
    } else if (!(emailReg.test(email))) {
        errors.push(`El mail no es valido.`)
    }

    //  if(!(validarEspacio(email)) ) {
    //     errors.push(`El mail  no puede tener espacios al principio ni al final`)


    ulCampo.innerHTML = '';
    for (let i = 0; i < errors.length; i++) {
        const error = errors[i];
        ulCampo.innerHTML += `<li> ${error} </li>`;
    }
    debugger
    if (errors.length === 0) {
        emailValido = true;
        button.disabled=false;
    }

    // fetch(`http://localhost:5000/api/user`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         for (let i = 0; i < data.length; i++) {
    //             const element = data[i];
    //             if (element.email === email) {
    //                  emailValido = false;
    //                 ulCampo.innerHTML += `<li>El mail ya esta registrado.</li>`

    //             }
    //         }
    //     })
    //     .catch(rejected => {
    //         console.log(rejected);

    //     });
    return emailValido
}

function validacionPassword1() {
    let pass = document.querySelector('#passwordRegister').value;
    let ulCampo = document.querySelector('#ulPass1Register');
    let expRegNumeros = /[0-9]/;
    let passValida = false;
    let errors = []
    button.disabled=true;


    if (pass === '') {
        errors.push(`La contrasña no debe estar vacia`)

    } else if (pass.length < 8) {
        errors.push(`La contrasña debe tener un minimo de 8 caracteres.`)
    } else if (!(expRegNumeros.test(pass))) {
        errors.push(`La contrasña debe tener como minimo 1 numero.`)
    } else if (pass.toLowerCase().includes('password')) {
        errors.push(`La contrasña no debe contener la plabra "password/PASSWORD".`)
    }

    ulCampo.innerHTML = '';
    for (let i = 0; i < errors.length; i++) {
        const error = errors[i];
        ulCampo.innerHTML += `<li> ${error} </li>`;
    }
    if (errors.length === 0) {
        passValida = true;
        button.disabled=false;

    }

return passValida;
}

function validarPassword2() {
    let pass1=document.querySelector('#passwordRegister').value;
    let pass2= document.querySelector('#passwordRegister2').value;
    let ulCampo =document.querySelector('#ulPass2Register');
    let passValida=false;
    let errors=[];
    ulCampo.innerHTML='';
    button.disabled=true;


    if (pass1 != pass2) {
        errors.push('Las contraseñas no coinciden.');
    }

    for (let i = 0; i < errors.length; i++) {
        const error = errors[i];
        ulCampo.innerHTML=`<li>${error}</li>`
    }
    if (errors.length===0) {
        passValida=true;
        button.disabled=false;

    }

    return passValida;
}


// for (let i = 0; i < formElements.length; i++) {
//     const element = formElements[i];
//     if (element.matches('input')) {
//         element.addEventListener('blur', activarBoton());
//     }
// }

// function activarBoton(params) {
//     let button = document.querySelector('#btnCreate');
//     let bien = []

//     ulVerificar.forEach((e) => {
//         if (e.innerText === '') {
//             bien.push('/')
//         } 
//     })
//     if (bien >0) {
//         button.disabled = false;
//     }
// }
// if (!(validacionName()) && !(validacionSurname()) && !(validacionEmail()) && !(validacionPassword1())) {
//     console.log('nashe')
// }
// function activarButton(e) {
//     button.disabled = true;
//     debugger
//     if (validacionName() === true && validacionSurname() === true && validacionEmail() === true) {
//         button.disabled = false;
//     } else {
//         button.disabled = true;
//     }
// }



