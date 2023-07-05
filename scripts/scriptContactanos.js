// const botonEnviar = document.getElementById("boton");
// const objeto = {
//     nombre: "",
//     telefono: "",
//     email: "",
//     mensaje: ""
// };



// const arrayConValores = [];

// //Almacenar elementos del formulario en variables de JS como objetos (objeto completo)
// let nombre = document.getElementById("nombre");
// let telefono = document.getElementById("telefono");
// let email = document.getElementById("email");
// let mensaje = document.getElementById("mensaje");


// //Función para agregar producto
// function tomarValores(event) {

//     //Guardo los VALORES de mis inputs en variables nuevas, para guardar el VALOR como es un objeto acceso a su propiedad con un . --> objeto.propiedad
//     let valornombre = nombre.value;
//     let valortelefono = telefono.value;
//     let valoremail = email.value;
//     let valormensaje = mensaje.value;
//     //Hago una impresión de los valor que estoy ingresando en los input, esto está de más, es solo para ver en la consola del navegador
//     console.log(valornombre); //Aqui se hace una primera impresión en la consola y para posteriormente realmente hacer la impresión de los valores, ESTO ESTA RARITO
//     console.log(valortelefono);
//     console.log(valoremail);
//     console.log(valormensaje);
//     console.log(arrayConValores);
//     event.preventDefault(); //prevenir que el navegador se actualice

// }

// botonEnviar.addEventListener("click", tomarValores);



// function validarTelefono() {
//     var telefono = document.getElementById("Telefono").value;
//     if (isNaN(telefono) || telefono.length !== 10) {
//         alert("El número de teléfono debe contener 10 dígitos.");
//         return false;
//     }
// }

// function validarCorreo() {
//     var correo = document.getElementById("correo").value;
//     var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!correoRegex.test(correo)) {
//         alert("Ingrese un correo electrónico válido.");
//         return false;
//     }
// }

// function enviarFormulario() {
//     var nombre = document.getElementById("nombre").value;
//     var telefono = document.getElementById("Telefono").value;
//     var correo = document.getElementById("correo").value;
//     var comentario = document.getElementById("comentario").value;

//     var formulario = {
//         "nombre": nombre,
//         "telefono": telefono,
//         "correo": correo,
//         "comentario": comentario
//     };

//     // Enviar el formulario en formato JSON
//     var formularioJSON = JSON.stringify(formulario);
//     console.log(formularioJSON);

//     document.getElementById("enviar").addEventListener("click", function () {
//         validarTelefono();
//         validarCorreo();
//         enviarFormulario();
//     });

// }







document.getElementById("enviar").addEventListener("click", function (event) {
    event.preventDefault();
    if (validarTelefono() && validarCorreo()) {
        enviarFormulario();
    }
});

function validarTelefono() {
    var telefono = document.getElementById("Telefono").value;
    if (isNaN(telefono) || telefono.length !== 10) {
        alert("El número de teléfono debe contener 10 dígitos.");
        return false;
    }
    return true;
}

function validarCorreo() {
    var correo = document.getElementById("correo").value;
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        alert("Ingrese un correo electrónico válido.");
        return false;
    }
    return true;
}

function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("Telefono").value;
    var correo = document.getElementById("correo").value;
    var comentario = document.getElementById("comentario").value;

    var formulario = {
        "nombre": nombre,
        "Telefono": telefono,
        "correo": correo,
        "comentario": comentario
    };

    // Imprimir el formulario en formato JSON en la consola
    console.log(JSON.stringify(formulario));

    // Aquí puedes realizar una petición para enviar los datos a un servidor

    // Puedes redirigir a otra página después de enviar el formulario
    // window.location.href = "otra_pagina.html";
}




