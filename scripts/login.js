// let url = '../BBDD-temporal/'; 
// let endPoint = `${url}registroUsuarios.json`;
let elementosUsuario;

let url = 'https://frijolvegano-production.up.railway.app/frijolvegano/';
let endPoint = `${url}usuarios`;
let statusSesion = false;

const loginButton = document.getElementsByClassName('btn')[0]; // Acceder al primer elemento de la colección

// Definir la función para el inicio de sesión
function login(e) {
    e.preventDefault();
    const emailInput = document.getElementById('inputUsuario').value;
    const passwordInput = document.getElementById('inputContrasenia').value;

    console.log(emailInput);
    console.log(passwordInput);

    fetch(endPoint, {
        method: "GET",
    })
        .then(function (response) {//response es la respuesta del servidor
            response.json().then(function (usuarios) { //json es el objeto que se obtiene del servicio
                console.log(usuarios); //imprime el json
                console.log(usuarios.length); //imprime el tamaño del json

                //Verificar si el usuario existe en el array
                var usuarioEncontrado = usuarios.find(function (usuario) {
                    return usuario.email === emailInput && usuario.contrasenia === passwordInput;
                });

                if (usuarioEncontrado) {
                    // let indiceUsuario = usuarios.findIndex(function (indice) {
                    //     return indice.email === emailInput;
                    // })
                    // elementosUsuario = usuarios[indiceUsuario];
                    statusSesion = true;
                    window.location.href = "../html/perfilUsuario.html";

                    // Mostrar los datos del usuario en una alerta
                    alert('Sesión Iniciada');
                } else {
                    // El usuario no existe
                    alert('Usuario no encontrado. Verifica tus credenciales.');
                }
                document.querySelector("#formularioLogIn").reset();
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
            //     .then((usuarios) => {
            //         console.log(usuarios);
            //         //Verificar si el usuario existe en el array
            //         var usuarioEncontrado = usuarios.find(function (usuario) {
            //             return usuario.correo === emailInput && usuario.contraseña === passwordInput;
            //         });

            //         if (usuarioEncontrado) {
            //             let indiceUsuario = usuarios.findIndex(function (indice) {
            //                 return indice.correo === emailInput;
            //             })
            //             elementosUsuario = usuarios[indiceUsuario];
            //             console.log(elementosUsuario);
            //             localStorage.setItem('sesionUsuario', JSON.stringify(elementosUsuario));

            //             window.location.href = "../html/perfilDeUsuario.html";

            //             // Mostrar los datos del usuario en una alerta
            //             alert('Sesión Iniciada');
            //         } else {
            //             // El usuario no existe
            //             alert('Usuario no encontrado. Verifica tus credenciales.');
            //         }
            //         document.querySelector("#formularioLogIn").reset();
            //     })
            //     .catch((error) => {
            //         console.log("Error en la conexión con los datos del usuario: " + error);
            //     });
        }

// Asignar la función al evento "click" del botón de inicio de sesión
loginButton.addEventListener('click', login);