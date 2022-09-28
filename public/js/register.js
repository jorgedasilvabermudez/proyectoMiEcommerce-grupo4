window.addEventListener('load',()=>{
    let form = document.forms.register;
    let { nombre, apellido, email, password, password2}=form.elements;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        registerUser(nombre, apellido, email, password );    
    })

    const registerUser= async(nombre,apellido,email,password)=>{
        let data={
            firstname: nombre.value,
            lastname: apellido.value,
            email: email.value,
            password: password.value
        };

        let settings ={
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        };

        const response = await fetch("http://localhost:5000/api/user",settings)
            .then((response)=>{
                if(response.status===405)alert("El correo electrónico ya existe.");
                if(response.status===201)window.location.href='/';
                })
                    .catch(error=>{
                        console.log(error)});
    };
});