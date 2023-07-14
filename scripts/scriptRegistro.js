let Usuarios = [];
let contador = 0;
let datosFormulario = document.getElementById('formularioRegistro');

//* Variables para almacenar datos de bases de datos
let url = 'https://frijolvegano-production.up.railway.app/frijolvegano/';
let endPoint = `${url}usuarios`;


// Función de validación del formulario
function validarFormulario() {
    // event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos de entrada
    let inputNombreCompleto = document.getElementById('inputNombreCompleto').value;
    let inputTelefono = document.getElementById('inputTelefono').value;
    let inputCorreo = document.getElementById('inputCorreo').value;
    let inputContraseña = document.getElementById('inputContraseña').value;
    let inputConfirmarContraseña = document.getElementById('inputConfirmarContraseña').value;
    let inputImagen = document.getElementById('inputImagen').value;

    //Crear un objeto JSON con los datos del formulario


    // Validar el número telefónico
    let telefonoRegex = /^\d{10}$/;
    if (!inputTelefono.match(telefonoRegex)) {
        alert("El número telefónico debe tener 10 dígitos numéricos.");
        return;
    }

    // Validar el correo electrónico
    let correoRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputCorreo.match(correoRegex)) {
        alert("El correo electrónico no tiene un formato válido.");
        return;
    }

    // Validar la contraseña
    let contraseñaRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    if (!contraseñaRegex.test(inputContraseña)) {
        alert('Por favor, ingresa una contraseña válida (mínimo 8 caracteres, una mayúscula y un carácter especial)');
        return;
    }

    // Verificar la confirmación de contraseña
    if (inputContraseña !== inputConfirmarContraseña) {
        alert('Las contraseñas no coinciden');
        return;
    }


    // Crear un objeto con los valores del formulario
    let registroUsuario = {
        admon: "true",
        nombre: inputNombreCompleto,
        telefono: inputTelefono,
        email: inputCorreo,
        contrasenia: inputContraseña,
        imgen_perfil: inputImagen,
        direccion: "Ingresa direccion...",
    };

    // Se anexan los datos a un array
    // Usuarios.push(registroUsuario);
    // contador++;
    // console.log(contador);

    // Convertir el objeto en una cadena JSON
    // let datoUsuario = JSON.stringify(Usuarios);

    // // Almacenar los datos en el Local Storage
    // localStorage.setItem('registroUsuario', datoUsuario);

    // // Mensaje de éxito o redireccionamiento a otra página
    // alert('¡Formulario enviado y datos guardados en el Local Storage con éxito!');
    // // window.location.href = 'otra-pagina.html'; // Redireccionar a otra página si es necesario

    //Se llama a nuestro backend mediente un fetch
    fetch(endPoint, {
        method: "POST", //Se ejecuta un metodo post para registrar usuarios
        headers: {     //Esta es la cabeza de la respuesta
            "content-Type": "application/json",
        },
        body: JSON.stringify(registroUsuario), //Es la estructura con la quen nosotros enviamos los datos como  en Postman, se debe mandar como cadena de texto, por eso se utiliza el stringify aqui
    })
        .then((response) => response.text()) //Se recibe la respuesta
        .then((data) => {
            console.log("Usuario guardado:", data); 
        })
        .catch((error) => {
            console.error("Error:", error); 
        });

// Resetea el formulario una vez que se activa el evento
datosFormulario.reset();

        }

document.getElementsByClassName("btn")[0].addEventListener("click", (e) => {
    e.preventDefault();
    validarFormulario();
});



// Escuchar el evento 'submit' del formulario
// document.getElementById("formularioRegistro").addEventListener("submit", validarFormulario);


