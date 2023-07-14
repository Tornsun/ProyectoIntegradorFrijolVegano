// Carrusel
var imgSrcCarr= ""; 
var imgSrcCarAlt ="";
var scriptItems ="";
var selectorCar = document.getElementById("carousel-inner");


//Solicitud de información
fetch(`../BBDD-temporal/carrusel.json`)
    .then(res=> res.json())
    .then(response=>{
        obtenerInformacionCarrusel(response)
    })

    /*Función para obtener la información del JSON e imprimir tantos objetos como haya en el JSON */
function obtenerInformacionCarrusel(datos){

    for(i=0; i<datos.length;i++){
        imgSrcCarr = datos[i].src;
        imgSrcCarAlt = datos[i].alt;
      scriptItems += ` <div class="carousel-item active">
      <img src="${imgSrcCarr}" alt="${imgSrcCarAlt}">
         </div>`;
        if(i == datos.length-1){
        selectorCar[0].innerHTML = scriptItems;
        }
    }
    
}

var crearCarr = `
<div class="contenedor-carrusel">
<div class="carrusel">
     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
         <div class="carousel-inner">
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                    </button>
     </div>
 </div> `;

 contenedor.innerHTML = crearCarr; 


var contenedor = document.querySelector(".contenido-carrusel");
contenedor.appendChild(selectorCar);







