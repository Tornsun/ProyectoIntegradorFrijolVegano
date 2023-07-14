//* Variables para almacenar datos de bases de datos
// let url = '../BBDD-temporal/';
// let endPoint = `${url}registroUsuarios.json`;
let url = 'https://frijolvegano-production.up.railway.app/frijolvegano/';
let endPoint = `${url}usuarios`;

let datosUsuarioEnSesion = [];

let usuarioPrueba = 2;

// * Constantes para manipulación del DOM
const imgUsuario = document.querySelector("#img-usuario");
const pNombre = document.querySelector("#nombre-usuario");
const pCorreo = document.querySelector("#correo-usuario");
const pTelefono = document.querySelector("#telefono-usuario");
const pDireccion = document.querySelector("#direccion-usuario");
const contenedorGeneral = document.querySelector(".contenedor-general");
const sectionContenedorGeneral = document.querySelector(".container");
const h1MensajeSinSesion = document.querySelector("h1-mensajeSinSesion");
const btnSesion = document.querySelector(".boton-sesion")

obtenerDatosUsuario();

//! FUNCIONES ESPECIALES
// * En caso de que se reciban los datos desde base de datos y NO desde local
function obtenerDatosUsuario() {

    fetch(endPoint, {
        method: "GET",
    })
        .then(function (response) {//response es la respuesta del servidor
            response.json().then(function (usuarios) { //json es el objeto que se obtiene del servicio
                console.log(usuarios); //imprime el json
                console.log(usuarios.length); //imprime el tamaño del json
                pintarDatosUsuario(usuarios);
                //Verificar si el usuario existe en el array
                // var usuarioEncontrado = usuarios.find(function (usuario) {
                //     return usuario.email === emailInput && usuario.contrasenia === passwordInput;
                // });

                // if (usuarioEncontrado) {
                // let indiceUsuario = usuarios.findIndex(function (indice) {
                //     return indice.email === emailInput;
                // })
                // elementosUsuario = usuarios[indiceUsuario];
                // statusSesion = true;
                // window.location.href = "../html/perfilUsuario.html";

                // Mostrar los datos del usuario en una alerta
                // alert('Sesión Iniciada');
                // } else {
                //     // El usuario no existe
                //     alert('Usuario no encontrado. Verifica tus credenciales.');
                // }
                // document.querySelector("#formularioLogIn").reset();
            })
                .catch((error) => {
                    console.log("Error en la conexión con los datos del usuario: " + error);
                })
        });


    // fetch(endPoint)
    //     .then((respuestaUsuario) => {
    //         if (!respuestaUsuario.ok) {
    //             throw new Error("Error HTTP: " + respuestaUsuario.status);
    //         }
    //         return respuestaUsuario.json();
    //     })
    //     .then((usuario) => {
    //         let converToJSON = JSON.stringify(usuario);
    //         localStorage.setItem("usuario", converToJSON);
    //         let usuarioLocalStoragre = localStorage.getItem("usuario");
    //         datosUsuarioEnSesion = JSON.parse(usuarioLocalStoragre);
    //         console.log(datosUsuarioEnSesion);
    // pintarDatosUsuario();
    // })
    // .catch((error) => {
    //     console.log("Soy un error en conexión con los datos del usuario: " + error);
    // });
}

let statusSesionUsuario;
let statusEmailSesion;

//! FUNCIONES GENERALES ESPECIALES
// *Manipulación del DOM
// TODO Pendiente el HTML final
function pintarDatosUsuario(datosUsuarioEnSesion) {
    // ! Aqui requiero la estructura FINAL HTML de Itzel para poder pintarlo

    console.log("Inicia función de crear el perfil de usuario");




    let idUsuario;
    let administradorUsuario;

    let nombreUsuario;
    let correoUsuario;
    let contrasenia;
    let telefonoUsuario;
    let srcUsuario;
    let direccion;

    let statusSesionLocalStoragre = localStorage.getItem("statusSesion");
    statusSesionUsuario = JSON.parse(statusSesionLocalStoragre);

    let emailSesionLocalStorage = localStorage.getItem("emailSesion");
    statusEmailSesion = JSON.parse(emailSesionLocalStorage);

    if (statusSesionUsuario) {
        let indiceUsuario = datosUsuarioEnSesion.findIndex(function (indice) {
            return indice.email === statusEmailSesion;
        })
        // console.log(indiceUsuario);
        // console.log(datosUsuarioEnSesion);
        //     let elementosUsuario = datosUsuarioEnSesion[indiceUsuario];

        //     elementosUsuario.forEach(iteracionDatosUsuario => {
        //     idUsuario = iteracionDatosUsuario.id;
        //     nombreUsuario = iteracionDatosUsuario.nombre;
        //     correoUsuario = iteracionDatosUsuario.email;
        //     telefonoUsuario = iteracionDatosUsuario.telefono;
        //     srcUsuario = iteracionDatosUsuario.imagen_perfil;
        // });

        // for (let i = 0; i < datosUsuarioEnSesion.length; i++) {
        idUsuario = datosUsuarioEnSesion[indiceUsuario].id;
        nombreUsuario = datosUsuarioEnSesion[indiceUsuario].nombre;
        correoUsuario = datosUsuarioEnSesion[indiceUsuario].email;
        telefonoUsuario = datosUsuarioEnSesion[indiceUsuario].telefono;
        srcUsuario = datosUsuarioEnSesion[indiceUsuario].imagen_perfil;
        direccion = datosUsuarioEnSesion[indiceUsuario].direccion;

        // }


        console.log("Es true el estatus");
        imgUsuario.src = `${srcUsuario}`;
        pNombre.textContent = nombreUsuario;
        pCorreo.textContent = correoUsuario;
        pTelefono.textContent = telefonoUsuario;
        pDireccion.textContent = direccion;
    } else {
        console.log("Es false el estatus");
        contenedorGeneral.remove();
        const mensajeSinSesion = document.createElement("h1");
        mensajeSinSesion.classList.add("h1-mensajeSinSesion");
        mensajeSinSesion.textContent = "INICIA SESIÓN POR FAVOR";
        sectionContenedorGeneral.appendChild(mensajeSinSesion);
        window.location.href = "../html/login.html";
    }

    console.log("Finaliza función mostrar datos");
}

//! Evento para cerrar sesión
btnSesion.addEventListener("click", (e) => {
    e.preventDefault();
    statusSesionUsuario = false;
    let converToJSONStatus = JSON.stringify(statusSesionUsuario);
    localStorage.setItem("statusSesion", converToJSONStatus);
    
    // let converToJSONEmail = JSON.stringify(statusEmailSesion);
    // localStorage.setItem("emailSesion", "");
    localStorage.removeItem("emailSesion");

    pintarDatosUsuario();
    console.log("Se presionó boton para cerrar sesión");
});





//!--------------------------------------------------------------------

const $cambio = document.getElementById(".formularioCambioDatos");

$cambio.addEventListener('change', e => {
    e.preventDefault();

    const $nombre = document.getElementById(".cambioNombre").value;
    const $telefono = document.getElementById(".cambioTelefono").value;
    const $direccion = document.getElementById(".cambioDireccion").value;
    const $foto = document.getElementById(".cambioFoto").value;

    console.log("nombre:", $nombre);
    console.log("teléfono:", $telefono);
    console.log("dirección:", $direccion);
    console.log("foto:", $foto);

});

    // if (e.target.files[0]) {
    //     const reader = new FileReader();
    //     reader.onload = function (e) {
    //         $img.src = e.target.result;
    //     }
    //     reader.readAsDataURL(e.target.files[0]);
    // } else {
    //     $img.src = defaultFile;
    // }

// });
