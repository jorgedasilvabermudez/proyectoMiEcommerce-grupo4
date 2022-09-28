window.addEventListener('load',()=>{

    let form = document.forms.login;
    let { user, password }=form.elements;
    let buttonTry= document.querySelector("#try"); 
    let modal= document.querySelector('.modal')

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        loginCheck(user, password );
        buttonTry.style.display='flex'
    })

    const loginCheck= async(email,password)=>{
        let data={
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
            const response = await fetch("http://localhost:4000/api/user/login",settings)
            const data = await response.json();
            let msgError=data.error;
            if(response.status!==200){customAlert(msgError);}
            if(response.status===200){window.location.href='/';}
        } catch (error) {
            console.log(error)
            return error
        }    
    }

//alert msg
    function customAlert(msg){
        let hContent= document.querySelector('#h1__msg')
        let pContent= document.querySelector('#p__msg')
        pContent.innerText= msg;
        hContent.innerText= "Error de Login";
        modal.style.display='flex'
    }

    //botones
    buttonTry.addEventListener('click', ()=>{
        modal.style.display='none'
    })

})