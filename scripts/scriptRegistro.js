// Función de validación del formulario
function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos de entrada
    var inputNombreCompleto = document.getElementById('inputNombreCompleto').value;
    var inputTelefono = document.getElementById('inputTelefono').value;
    var inputCorreo = document.getElementById('inputCorreo').value;
    var inputContraseña = document.getElementById('inputContraseña').value;
    var inputConfirmarContraseña = document.getElementById('inputConfirmarContraseña').value;

    //Crear un objeto JSON con los datos del formulario


    // Validar el número telefónico
    var telefonoRegex = /^\d{10}$/;
    if (!inputTelefono.match(telefonoRegex)) {
        alert("El número telefónico debe tener 10 dígitos numéricos.");
        return;
    }

    // Validar el correo electrónico
    var correoRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputCorreo.match(correoRegex)) {
        alert("El correo electrónico no tiene un formato válido.");
        return;
    }

    // Validar la contraseña
    var contraseñaRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
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
        nombre: inputNombreCompleto,
        telefono: inputTelefono,
        correo: inputCorreo,
        contraseña: inputContraseña,
    };

    // Convertir el objeto en una cadena JSON
    var datoUsuario = JSON.stringify(registroUsuario);

    // Almacenar los datos en el Local Storage
    localStorage.setItem('registroUsuario', datoUsuario);

    // Mensaje de éxito o redireccionamiento a otra página
    alert('¡Formulario enviado y datos guardados en el Local Storage con éxito!');
    // window.location.href = 'otra-pagina.html'; // Redireccionar a otra página si es necesario

    // Si todas las validaciones pasan, puedes enviar el formulario aquí
    document.getElementById("formularioRegistro").submit();
}

// Escuchar el evento 'submit' del formulario
document.getElementById("formularioRegistro").addEventListener("submit", validarFormulario);


