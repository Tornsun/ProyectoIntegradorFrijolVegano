
//Variables para almacenar datos de bases de datos
let resenia = [];
let curso = [];

//Selectores para el curso
let descripcionCompletaCurso = document.querySelector(".descripcionCompleta-curso");

//Selectores para el carrusel de reseñas
let carruselResenias = document.querySelector(".carousel-inner");
let primerItemCarrusel = document.querySelector(".active");

// Llamamos a las funciones para obtener los dato de las bases de datos
obtenerDatosCursos();
obtenerDatosResenia();

//Seccion para consumir las fetch
async function obtenerDatosCursos() {
  try {
    //Accedemos a la base de datos local de los cursos (solo hay 1)
    // !Pendiente anexar al menos 10
    const responseCurso = await fetch('../BBDD-temporal/cursos.json');
    curso = await responseCurso.json();
    cargarCurso();
  } catch (error) {
    console.log("Soy un error");
  }
}

async function obtenerDatosResenia() {
  try {
    //Accedemos a la base de datos local de reseñas, hay 6 pero es 1 copiada 5 veces cambiando el nombre del usuario
    // !Pendiente anexar al menos 10
    const response = await fetch('../BBDD-temporal/resenias.json');
    resenia = await response.json();
    cargarResenia();
  } catch (error) {
    console.log("Soy un error");
  }
}

//Funciones para obtener los dato de las bases de datos
function cargarResenia() {
  console.log("Inicia función de crear resenia");

  // Esto es para solucionar lo del inshi bootstrap y sus carruseles >:c
  let nombre = resenia[0].nombre;
  // TODO Ver como asignar el numero de estrellas de las reseñas
  let estrellas;
  let reseniaPersonal = resenia[0].resenia;

  const primerItemCarruselCreado = document.createElement("div");
  primerItemCarrusel.classList.add('resenias-carrusel');
  
  // Manipulacion del DOM
  primerItemCarruselCreado.innerHTML = `
  
      <div class="encabezado-resenia">
          <img src="../assets/img/usuarioReseña.svg" alt="imagenUsuario">
          <div class="valoracion-resenia">
              <span>${nombre}</span>
              <div class="estrellas-resenia">
                  <input type="radio" class="star01" id="star01" readonly>
                  <input type="radio" class="star02" id="star02" readonly>
                  <input type="radio" class="star03" id="star03" readonly>
                  <input type="radio" class="star04" id="star04" readonly>
                  <input type="radio" class="star05" id="star05" readonly>
              </div>
          </div>
      </div>
      <p>${reseniaPersonal}</p>
`;

  primerItemCarrusel.appendChild(primerItemCarruselCreado);


  // Esto es para solucionar lo del inshi bootstrap y sus carruseles >:c
  resenia.slice(1).forEach(function (iteracionResenias) {
    nombre = iteracionResenias.nombre;
    // TODO Ver como asignar el numero de estrellas de las reseñas
    estrellas = iteracionResenias.estrellas;
    reseniaPersonal = iteracionResenias.resenia;

    // Manipulacion del DOM
    const itemCarrusel = document.createElement("div");
    itemCarrusel.classList.add('carousel-item');

    itemCarrusel.innerHTML = `
  <div class="resenias-carrusel">
      <div class="encabezado-resenia">
          <img src="../assets/img/usuarioReseña.svg" alt="imagenUsuario">
          <div class="valoracion-resenia">
              <span>${nombre}</span>
              <div class="estrellas-resenia">
                  <input type="radio" class="star01" id="star01" readonly>
                  <input type="radio" class="star02" id="star02" readonly>
                  <input type="radio" class="star03" id="star03" readonly>
                  <input type="radio" class="star04" id="star04" readonly>
                  <input type="radio" class="star05" id="star05" readonly>
              </div>
          </div>
      </div>
      <p>${reseniaPersonal}</p>
</div>`;

    carruselResenias.appendChild(itemCarrusel);
  });

  console.log("Finaliza función cargar reseña");
}

//Funciones para obtener los dato de las bases de datos
function cargarCurso() {
  console.log("entramos a cargar los datos del curso");
  let id;
  let titulo;
  let src;
  let descripcion;
  // !Esta pendiente ver como pintar detalles y aprendizaje debido a como estan hechos (listas)
  let detalles;
  let aprendizaje;
  let estrellas;


//   Asignación de datos de la BBDD
  curso.forEach(function (iteracionCurso) {
    id = iteracionCurso.id;
    titulo = iteracionCurso.titulo;
    src = iteracionCurso.src;
    descripcion = iteracionCurso.descripcion;
    // !Esta pendiente ver como pintar detalles y aprendizaje debido a como estan hechos (listas)
    detalles = iteracionCurso.detalles;
    aprendizaje = iteracionCurso.aprendizaje;
    estrellas = iteracionCurso.estrellas;

    const itemDescripcion = document.createElement("div");
    itemDescripcion.classList.add('descripcion-curso');

    // Manipulacion del DOM
    itemDescripcion.innerHTML = `
    <h2 class="titulo-curso">${titulo}</h2>
                <img class="img-curso"
                    src=${src}
                    alt="imagen de curso" />
                <p>${descripcion}</p>
    <div class="btn-adquirirCurso">
                <button id=${id}>
                    <span>ADQUIRIR CURSO</span>
                </button>
    </div>

    <div class="detalleYAprendizaje-curso">
                <div class="detalles-curso col-sm-12 col-md-5 col-lg-5">
                    <h5>Detalles de curso</h5>
                    <ul>
                        <li class="detalle-curso-item1" id="detalle-curso-item1">Duración: 3 horas (divididas en una
                            sesión única).</li>
                        <li class="detalle-curso-item2" id="detalle-curso-item2">Módulos: El curso consta de 4
                            módulos temáticos que cubren los fundamentos de la cocina vegana y la preparación de
                            diversos tipos de platos.</li>
                        <li class="detalle-curso-item3" id="detalle-curso-item3">Requisitos: No se requieren
                            conocimientos previos. Este curso está abierto a principiantes y a cualquier persona
                            interesada en la cocina vegana.</li>
                        <li class="detalle-curso-item4" id="detalle-curso-item4">Material proporcionado: Se te
                            proporcionará un manual con las recetas y consejos prácticos para que puedas seguir
                            practicando en casa.</li>
                    </ul>
                </div>

                <div class="aprendizaje-curso col-sm-12 col-md-5 col-lg-5">
                    <h5>¿Que aprenderas?</h5>
                    <ul>
                        <li class="detalle-curso-item1" id="detalle-curso-item1">Introducción al veganismo y sus
                            beneficios para la salud y el medio ambiente.</li>
                        <li class="detalle-curso-item2" id="detalle-curso-item2">Conocimiento de los ingredientes
                            esenciales en la cocina vegana y cómo utilizarlos.</li>
                        <li class="detalle-curso-item3" id="detalle-curso-item3">Técnicas de preparación de
                            alimentos veganos, incluyendo cortes, marinados y sazonado.</li>
                        <li class="detalle-curso-item4" id="detalle-curso-item4">Recetas básicas para desayunos,
                            almuerzos, cenas y postres veganos.</li>
                        <li class="detalle-curso-item5" id="detalle-curso-item5">Consejos sobre la planificación de
                            comidas y la incorporación de una alimentación vegana en tu estilo de vida diario.</li>
                    </ul>
                </div>
            </div>

            <div class="resenias-curso">
                <h2>Reseñas de usuarios</h2>
                <div class="calificacion-curso">
                    <div class="estrellas-curso">
                        <input type="radio" class="starCurso" id="star01" readonly>
                        <input type="radio" class="starCurso" id="star02" readonly>
                        <input type="radio" class="starCurso" id="star03" readonly>
                        <input type="radio" class="starCurso" id="star04" readonly>
                        <input type="radio" class="starCurso" id="star05" readonly>
                    </div>
                    <div class="numero-calificacion">
                    <p><span id="califiacion-curso">${estrellas}</span> / 5</p>
                </div>
                </div>

`;

descripcionCompletaCurso.prepend(itemDescripcion);
  });

  console.log("Finaliza creacion de info curso");
}