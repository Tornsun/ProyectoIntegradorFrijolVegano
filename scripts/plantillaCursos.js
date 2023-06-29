//Variables para almacenar datos de bases de datos
let resenia = [];
let curso = [];

//Selectores para el curso
let descripcionCompletaCurso = document.querySelector(".descripcionCompleta-curso");

//Selectores para el carrusel de reseñas
let carruselBoostrap = document.querySelector(".carousel");
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

//* Información importante para insertar elementos: https://lenguajejs.com/javascript/dom/insertar-elementos-dom/
//  * .prepend(); Se añade el nuevo elemento antes del primer hijo.

//Funciones para obtener los dato de las bases de datos
function cargarCurso() {
  console.log("entramos a cargar los datos del curso");
  let id;
  let titulo;
  let src;
  let descripcion;
  let detalles;
  let aprendizaje;
  let estrellas;

//   Asignación de datos de la BBDD
  curso.forEach(function (iteracionCurso) {
    id = iteracionCurso.id;
    titulo = iteracionCurso.titulo;
    src = iteracionCurso.src;
    descripcion = iteracionCurso.descripcion;
    detalles = iteracionCurso.detalles;
    aprendizaje = iteracionCurso.aprendizaje;
    estrellas = iteracionCurso.estrellas;

    // * Pintamos la primer parte de la información del curso
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
    `;
    descripcionCompletaCurso.appendChild(itemDescripcion);

    // * Sección de detalles y aprendizaje
    const itemDetalleYAprendizaje = document.createElement("div");
    itemDetalleYAprendizaje.classList.add('detalleYAprendizaje-curso');
    itemDetalleYAprendizaje.innerHTML = `
    <div class="detalles-curso col-sm-12 col-md-5 col-lg-5">
      <h5>Detalles de curso</h5>
    </div>
    <div class="aprendizaje-curso col-sm-12 col-md-5 col-lg-5">
      <h5>¿Que aprenderas?</h5>
      </div>
    `;
    itemDescripcion.appendChild(itemDetalleYAprendizaje);
    // descripcionCompletaCurso.before(itemDetalleYAprendizaje,carruselBoostrap);
    // * Detalles
    let divisionDetalles = detalles.split(('.'));
    divisionDetalles.pop();
    let itemDetalle = document.querySelector(".detalles-curso");

    divisionDetalles.forEach(element => {
      const itemDetalleTemp = document.createElement("ul");
      itemDetalleTemp.innerHTML = `
    <li>${element}.</li>
    `;
    itemDetalle.appendChild(itemDetalleTemp);
    });

    // * Aprendizaje
   let divisionAprendizaje = aprendizaje.split(('.'));
   divisionAprendizaje.pop();
   let itemAprendizaje = document.querySelector(".aprendizaje-curso");

   divisionAprendizaje.forEach(element => {
     const itemAprendizajeTemp = document.createElement("ul");
     itemAprendizajeTemp.innerHTML = `
   <li>${element}.</li>
   `;
   itemAprendizaje.appendChild(itemAprendizajeTemp);
   });

  //  * Calificación con estrellas
  const calificacionCurso = document.createElement("div");
  calificacionCurso.classList.add('resenias-curso');
  calificacionCurso.innerHTML = `
  <h2>Reseñas de usuarios</h2>
  <div class="calificacion-curso">
  <div class="estrellas-curso">
  </div>
  <div class="numero-calificacion">
  <p>${estrellas} / 5</p>
  </div>
  `;
  itemDescripcion.appendChild(calificacionCurso);

  const calificacionEstrellas = document.querySelector(".estrellas-curso");
  for (let i = 0; i < estrellas; i++) {
    const estrellaTemp = document.createElement('input');
    estrellaTemp.setAttribute("type", "radio"); 
    calificacionEstrellas.appendChild(estrellaTemp);
  }

descripcionCompletaCurso.prepend(itemDescripcion);
  });

  console.log("Finaliza creacion de info curso");
}

//Funciones para obtener los dato de las bases de datos
function cargarResenia() {
  console.log("Inicia función de crear reseña");

  // !Esto es para solucionar lo del inshi bootstrap y sus carruseles >:c
  let nombre = resenia[0].nombre;
  let estrellas = resenia[0].estrellas;
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
              </div>
          </div>
      </div>
      <p>${reseniaPersonal}</p>
`;

  primerItemCarrusel.appendChild(primerItemCarruselCreado);

  const estrellasReseniaIndividual = document.querySelector(".estrellas-resenia");
  for (let i = 0; i < estrellas; i++) {
    const estrellaTemp = document.createElement('input');
    estrellaTemp.setAttribute("type", "radio"); 
    estrellasReseniaIndividual.appendChild(estrellaTemp);
  }


  //! Esto es para solucionar lo del inshi bootstrap y sus carruseles >:c
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
              </div>
          </div>
      </div>
      <p>${reseniaPersonal}</p>
</div>`;
// const estrellasReseniaIndividual = document.querySelector(".estrellas-resenia");
// for (let i = 0; i < estrellas; i++) {
//   const estrellaTemp = document.createElement('input');
//   estrellaTemp.setAttribute("type", "radio"); 
//   estrellasReseniaIndividual.appendChild(estrellaTemp);
// }
    carruselResenias.appendChild(itemCarrusel);
  });

  console.log("Finaliza función cargar reseña");
}

