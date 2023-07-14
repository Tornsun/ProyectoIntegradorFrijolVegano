//* Variables para almacenar datos de bases de datos
let url = '../BBDD-temporal/';
let endPoint = `${url}registroUsuarios.json`;

let datosUsuarioEnSesion = [];

let usuarioPrueba = 4;

// * Constantes para manipulación del DOM
const imgUsuario = document.querySelector("#img-usuario");
const pNombre = document.querySelector("#nombre-usuario");
const pCorreo = document.querySelector("#correo-usuario");
const pTelefono = document.querySelector("#telefono-usuario");
const contenedorGeneral = document.querySelector(".contenedor-general");
const sectionContenedorGeneral = document.querySelector(".container");
const h1MensajeSinSesion = document.querySelector("h1-mensajeSinSesion");
const btnSesion = document.querySelector(".boton-sesion")

obtenerDatosUsuario();

//! FUNCIONES ESPECIALES
// * En caso de que se reciban los datos desde base de datos y NO desde local
function obtenerDatosUsuario() {
    fetch(endPoint)
        .then((respuestaUsuario) => {
            if (!respuestaUsuario.ok) {
                throw new Error("Error HTTP: " + respuestaUsuario.status);
            }
            return respuestaUsuario.json();
        })
        .then((usuario) => {
            let converToJSON = JSON.stringify(usuario);
            localStorage.setItem("usuario", converToJSON);
            let usuarioLocalStoragre = localStorage.getItem("usuario");
            datosUsuarioEnSesion = JSON.parse(usuarioLocalStoragre);
            console.log(datosUsuarioEnSesion);
            pintarDatosUsuario();
        })
        .catch((error) => {
            console.log("Soy un error en conexión con los datos del usuario: " + error);
        });
}

//! FUNCIONES GENERALES ESPECIALES
// *Manipulación del DOM
// TODO Pendiente el HTML final
function pintarDatosUsuario() {
    // ! Aqui requiero la estructura FINAL HTML de Itzel para poder pintarlo

    console.log("Inicia función de crear el perfil de usuario");
    let idUsuario;
    let administradorUsuario;
    let statusSesionUsuario;
    let nombreUsuario;
    let correoUsuario;
    let telefonoUsuario;
    let srcUsuario;

    // datosUsuarioEnSesion.forEach(iteracionDatosUsuario => {
    //     idUsuario = iteracionDatosUsuario.id;
    //     administradorUsuario = iteracionDatosUsuario.administrador;
    //     statusSesionUsuario = iteracionDatosUsuario.statusSesion;
    //     nombreUsuario = iteracionDatosUsuario.nombre;
    //     correoUsuario = iteracionDatosUsuario.correo;
    //     telefonoUsuario = iteracionDatosUsuario.telefono;
    //     srcUsuario = iteracionDatosUsuario.imagen;
    // });

    // for (let i = 0; i < datosUsuarioEnSesion.length; i++) {
        idUsuario = datosUsuarioEnSesion[usuarioPrueba].id;
        administradorUsuario = datosUsuarioEnSesion[usuarioPrueba].administrador;
        statusSesionUsuario = datosUsuarioEnSesion[usuarioPrueba].statusSesion;
        nombreUsuario = datosUsuarioEnSesion[usuarioPrueba].nombre;
        correoUsuario = datosUsuarioEnSesion[usuarioPrueba].correo;
        telefonoUsuario = datosUsuarioEnSesion[usuarioPrueba].telefono;
        srcUsuario = datosUsuarioEnSesion[usuarioPrueba].imagen;
    // }

    if (statusSesionUsuario) {
        console.log("Es true el estatus");
        imgUsuario.src = `${srcUsuario}`;
        pNombre.textContent = nombreUsuario;
        pCorreo.textContent = correoUsuario;
        pTelefono.textContent = telefonoUsuario;
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
    datosUsuarioEnSesion[usuarioPrueba].statusSesion = false;
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
