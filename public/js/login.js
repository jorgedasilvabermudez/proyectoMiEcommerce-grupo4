const form = document.forms.login;

let pass = document.querySelector('#passwordLogin');
console.log(form.checkbox.checked)


const loginCheck = async (email, password) => {

    let data = {
        email: email.value,
        password: password.value
    };
    let settings = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };
    const response = await fetch("http://localhost:4000/api/user/login", settings)
    if (response.status === 200) {
        console.log('entra al status 200');
        const data = await response.json();
        checkboxLocal(data.id, data.name, data.email, form.checkbox)
        window.location.href= `${window.location.origin}/`
    }
    else {
        // console.log('no entra en status')
        // localStorage.clear('usuario');
    }
}


const checkboxLocal = (id, email, name, checkbox) => {
    console.log('entra en checkboxLocal')
    let usuario = {
        id: id,
        name: name,
        email: email,
        isLoged: checkbox.checked
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));
    
}
form.addEventListener('submit', (e) => {
    let email = document.querySelector('#userLogin');
    let password = document.querySelector('#passwordLogin');
    loginCheck(email,password);
    e.preventDefault();
})