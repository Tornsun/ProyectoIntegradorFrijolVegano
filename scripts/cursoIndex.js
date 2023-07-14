//Cursos 

// Obtener el elemento contenedor donde se agregarán las cards
var contenedorCursos = document.querySelector('.contenedor-cursos');
var tituloCurso = "";
var imagenCurso1 = '../assets/img/ImagenesProductos/default.jpg';
var subtituloCursos = "";
var parrafoCurso1 ="";

//Solicitud de información
fetch(`../BBDD-temporal/cursos.json`)
    .then(res=> res.json())
    .then(response=>{
        obtenerInformacionCursos(response)
    })

     /*Función para obtener la información del JSON e imprimir tantos objetos como haya en el JSON */
function obtenerInformacionCursos(datos){
    for(i=0; i<datos.length;i++){
        tituloCurso= datos[i].titulo;
        imagenCurso1=datos[i].src;
        subtituloCursos = datos[i].descripcion;
        parrafoCurso1 = datos[i].aprendizaje;
        nuevaTarjetaCursos();
    }
    
}

// Obtener el elemento contenedor de los cursos
var contenedorCursos1 = document.createElement("contenedor");

/*Función para crear nueva tarjeta */
 function nuevaTarjetaCursos() {

    var card = document.createElement('div');
    card.className = "card";

// Crear un bucle para generar los cursos
    // Crear el elemento div con la clase "card"
    var card = document.createElement("div");
    card.className = "card";


// Crear el elemento para el título de los cursos
var tituloCursos = document.createElement("p");
tituloCursos.className = "titulo-cursos";
tituloCursos.textContent = "Cursos";
contenedorCursos.appendChild(tituloCursos);

// Crear el elemento para la imagen del curso
var imagenCurso1 = document.createElement("img");
imagenCurso1.src = "../assets/img/curso1.png";
imagenCurso1.alt = "Imagen del curso1";
imagenCurso1.className = "imagen-curso1";
contenedorCursos.appendChild(imagenCurso1);

// Crear el elemento para el subtitulo de los cursos
var subtituloCursos = document.createElement("h2");
subtituloCursos.className = "subtitulo-cursos";
subtituloCursos.textContent = "Tu primera preparación de alimentos Veganos";
contenedorCursos.appendChild(subtituloCursos);

// Crear el elemento para el párrafo del curso 1
var parrafoCurso1 = document.createElement("p");
parrafoCurso1.className = "parrafo-curso1";
parrafoCurso1.textContent = "Introducción al veganismo y sus beneficios para la salud y el medio ambiente. Conocimiento de los ingredientes esenciales en la cocina vegana y cómo utilizarlos. Técnicas de preparación de alimentos veganos, incluyendo cortes, marinados y sazonado. Recetas básicas para desayunos, almuerzos, cenas y postres veganos. Consejos sobre la planificación de comidas y la incorporación de una alimentación vegana en tu estilo de vida diario.";
    contenedorCursos.appendChild(parrafoCurso1);


}