const imagen = document.getElementById("src");
const carruselContenedor = []
// Obtener los datos de la base de datos
fetch(`../BBDD-temporal/carrusel.json`)
    .then(response => response.json())
    .then(data => {


        // Inicializar el carrusel
        iniciarCarrusel(data);
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
    });

// Función para inicializar el carrusel
function iniciarCarrusel(data) {
    const imagenes = data[0];
    const flechaIzquierda = carrusel.querySelector(".flechaIzquierda");
    const flechaDerecha = carrusel.querySelector(".flechaDerecha");
    let indice = 0;

    // Generar las imágenes del carrusel a partir de los datos
    data.forEach(item => {
        const img = document.createElement();
        img.src = item.imageUrl;
        carruselContenedor.appendChild(img.src);
    });

    // Mostrar la imagen inicial
    imagenes[indice].classList.add("active");

    // Función para mostrar la siguiente imagen
    function mostrarSiguienteImagen() {
        imagenes[indice].classList.remove("active");
        indice = (indice + 1) % imagenes.length;
        imagenes[indice].classList.add("active");
    }

    // Función para mostrar la imagen anterior
    function mostrarImagenAnterior() {
        imagenes[indice].classList.remove("active");
        indice = (indice - 1 + imagenes.length) % imagenes.length;
        imagenes[indice].classList.add("active");
    }

    // Agregar eventos de clic a las flechas
    flechaIzquierda.addEventListener("click", mostrarImagenAnterior);
    flechaDerecha.addEventListener("click", mostrarSiguienteImagen);
    imagen.style.display = 'none';
}


