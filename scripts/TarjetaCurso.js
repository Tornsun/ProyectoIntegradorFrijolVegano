

//* Obtén el valor almacenado en localStorage
var datosCursoJSON = localStorage.getItem('curso');

// *Convierte el valor JSON a un objeto JavaScript
var datosCurso = JSON.parse(datosCursoJSON);

// *Accede a las propiedades del objeto
console.log(datosCurso);

tarjetaCurso(datosCurso);


function tarjetaCurso(datosCurso) {
  console.log("entramos a cargar los datos del curso");
  let id;
  let titulo;
  let imagen;
  let descripcion;
  let costo;
  let estrellas;

  console.log("Estrellitas", estrellas);

  // * Asignación de datos de la BBDD

  datosCurso.forEach(function (iteracionCurso) {

    id = iteracionCurso.id;
    titulo = iteracionCurso.titulo;
    imagen = iteracionCurso.imagen;
    descripcion = iteracionCurso.descripcion;
    costo = iteracionCurso.costo;
    estrellas = iteracionCurso.estrellas;
   // console.log("Si lo lee");
    // * Pintamos la primer parte de la información del curso

        var descripcionCompletaCurso = document.querySelector(".informacionCurso");

    const itemDescripcion = document.createElement("div");
    itemDescripcion.classList.add('descripcion-curso');


    itemDescripcion.innerHTML = `
                  <img class="img-curso" src=${imagen} alt="imagen de curso"/>
                  <h2 class="titulo-curso">${titulo}</h2>
                  <p>${descripcion}</p>`;

    descripcionCompletaCurso.appendChild(itemDescripcion);
  

    // //   //* Sección de detalles y aprendizaje
    //   const itemDetalleYAprendizaje = document.createElement("div");
    //   itemDetalleYAprendizaje.classList.add('detalleYAprendizaje-curso');
    //   itemDetalleYAprendizaje.innerHTML = `
    //   <div class="detalles-curso col-sm-12 col-md-5 col-lg-5">
    //     <h5>Detalles de curso</h5>
    //   </div>
    //   <div class="aprendizaje-curso col-sm-12 col-md-5 col-lg-5">
    //     <h5>¿Que aprenderas?</h5>
    //     </div>
    //   `;
    //   itemDescripcion.appendChild(itemDetalleYAprendizaje);
    //   // descripcionCompletaCurso.before(itemDetalleYAprendizaje,carruselBoostrap);


    //   // * Detalles
    //   let divisionDetalles = detalles.split(('.'));
    //   divisionDetalles.pop();
    //   let itemDetalle = document.querySelector(".detalles-curso");

    //   divisionDetalles.forEach(element => {
    //     const itemDetalleTemp = document.createElement("ul");
    //     itemDetalleTemp.innerHTML = `
    //   <li>${element}.</li>
    //   `;
    //     itemDetalle.appendChild(itemDetalleTemp);
    //   });


    //   // * Aprendizaje
    //   let divisionAprendizaje = aprendizaje.split(('.'));
    //   divisionAprendizaje.pop();
    //   let itemAprendizaje = document.querySelector(".aprendizaje-curso");

    //   divisionAprendizaje.forEach(element => {
    //     const itemAprendizajeTemp = document.createElement("ul");
    //     itemAprendizajeTemp.innerHTML = `
    //  <li>${element}.</li>
    //  `;
    //     itemAprendizaje.appendChild(itemAprendizajeTemp);
    //   });


       //* Calificación con estrellas
      const calificacionCurso = document.createElement("div");
      calificacionCurso.classList.add('resenias-curso');
      calificacionCurso.innerHTML = `
   
    <div class="calificacion-curso">
    <div class="estrellas-curso">
    </div>
    <div class="numero-calificacion">
    <p>${estrellas} / 5</p>
    </div>
    </div>
    <div class="precioCurso">
    <p class="costoreal"> $ ${costo}.00 MNX</p><p class="oferta">(Antes$1000.00)</p>
    </div>
    `;
      itemDescripcion.appendChild(calificacionCurso);

      const calificacionEstrellas = document.querySelector(".estrellas-curso");
      for (let i = 0; i < estrellas; i++) {
        const estrellaTemp = document.createElement('input');
        estrellaTemp.setAttribute("type", "radio");
        calificacionEstrellas.appendChild(estrellaTemp);
      }

    //   descripcionCompletaCurso.prepend(itemDescripcion);
  });
}