var imagenSrc="../assets/img/milanesaSeitan.png";
var nombreTexto ="Milanesa de Seitán";
var marcaTexto= "Marca: Soi-Yah!";
var presentacionTexto = "Presentación: 500g";
var fabricanteTexto = "Fabricante: colpac";
var descripcionTexto = "Descripción: 4 milanesas a base de seitan listas para cocinar o preparar al gusto";
var tipoEnvaseTexto = "Tipo de envase: caja de cartón";
var dimensionesTexto = "Dimensiones: 20.6 x 16.15 x 13.69cm";
var pesoTotalTexto = "Peso total: 550g";

var contenido = document.querySelector(".contenido");
var informacionProducto = document.querySelector(".informacion-producto");

/*Crear imagen */
var contenedorImagen = document.createElement("div");
contenedorImagen.className = "contenedor-imagen";

var imagen = document.createElement("img");
imagen.src=imagenSrc;

contenedorImagen.appendChild(imagen);
informacionProducto.appendChild(contenedorImagen);
/*Termina crear imagen */


/*Contenedor información */
var contenedorInformacion = document.createElement("div");
contenedorInformacion.className="contenedor-informacion";


/*Nombre */
var nombre = document.createElement("h2");
nombre.className="nombre";
nombre.innerHTML=nombreTexto;
contenedorInformacion.appendChild(nombre);
/*Termina nombre */

/*Marca */
var marca = document.createElement("p");
marca.className="marca";
marca.innerHTML=marcaTexto;
contenedorInformacion.appendChild(marca);
/*Termina marca */

/*Presentación */
var presentacion = document.createElement("p");
presentacion.className="presentacion";
presentacion.innerHTML=presentacionTexto;
contenedorInformacion.appendChild(presentacion);
/*Termina presentación */

/*Fabricante*/
var fabricante = document.createElement("p");
fabricante.className="fabricante";
fabricante.innerHTML=fabricanteTexto;
contenedorInformacion.appendChild(fabricante);
/*Termina fabricante */

/*Descripción*/
var descripcion = document.createElement("p");
descripcion.className="descripcion";
descripcion.innerHTML=descripcionTexto;
contenedorInformacion.appendChild(descripcion);
/*Termina descripción */

/*Tipo de envase*/
var tipoEnvase = document.createElement("p");
tipoEnvase.className="tipo-envase";
tipoEnvase.innerHTML=tipoEnvaseTexto;
contenedorInformacion.appendChild(tipoEnvase);
/*Termina tipo de envase */


/*Dimensiones*/
var dimensiones = document.createElement("p");
dimensiones.className="dimensiones";
dimensiones.innerHTML=dimensionesTexto;
contenedorInformacion.appendChild(dimensiones);
/*Termina dimensiones*/

/*Peso total*/
var pesoTotal = document.createElement("p");
pesoTotal.className="peso-total";
pesoTotal.innerHTML=pesoTotalTexto;
contenedorInformacion.appendChild(pesoTotal);
/*Termina peso total*/

informacionProducto.appendChild(contenedorInformacion);
contenido.appendChild(informacionProducto);
