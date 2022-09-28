window.addEventListener('load',()=>{
    
    let form = document.forms.register;
    let { nombre, apellido, email, password, password2}=form.elements;
    let buttonTry= document.querySelector("#try"); 
    let modal= document.querySelector('.modal');

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

        try {
            const response = await fetch("http://localhost:4000/api/user",settings)
            const data= await response.json();
            const msgError=data.error;
                if(response.status===409){customAlert(msgError);}
                if(response.status===201)window.location.href='/';
        } catch (error) {
            console.log(error)
            return error
        }
    };

    //alert msg
    function customAlert(msg){
        let hContent= document.querySelector('#h1__msg')
        let pContent= document.querySelector('#p__msg')
        pContent.innerText= msg;
        hContent.innerText= "Error de Registro";
        modal.style.display='flex'
    }

    //botones
    buttonTry.addEventListener('click', ()=>{
        modal.style.display='none'
    })
});