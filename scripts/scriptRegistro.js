// Función de validación del formulario
function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos de entrada
    var inputTelefono = document.getElementById('inputTelefono').value;
    var inputCorreo = document.getElementById('inputCorreo').value;
    var inputContraseña = document.getElementById('inputContraseña').value;

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
    var contraseñaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!inputContraseña.match(contraseñaRegex)) {
        alert("La contraseña debe contener al menos 8 caracteres, una mayúscula y un caracter especial.");
        return;
    }

    // Si todas las validaciones pasan, puedes enviar el formulario aquí
    document.getElementById("formularioRegistro").submit();
}

// Escuchar el evento 'submit' del formulario
document.getElementById("formularioRegistro").addEventListener("submit", validarFormulario);