let nombre = document.getElementById("nombre")
let email = document.getElementById("email")
let telefono = document.getElementById("telefono")
let form =document.getElementById("form")
form.addEventListener("submit",e=>{
    e.preventDefault()
     let entrar= false
    if (nombre.value.length<6){
        alert("El nombre no es valido")
    }
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(regexEmail.test(email.value)){
        alert("tu correo es invalido")
        entrar=true

    }
    if (telefono.value.length<10){
        alert("El telefono no es valido")
    }
}
);