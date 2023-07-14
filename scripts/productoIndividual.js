var imagenSrc;
var nombreTexto;
var marcaTexto;
var presentacionTexto;
var fabricanteTexto;
var descripcionTexto;
var tipoEnvaseTexto;
var dimensionesTexto;
var pesoTotalTexto;
var id = localStorage.getItem("detalles"); /*La página tendrá siempre un valor que se pasará desde productos */
var numeroItemsCarrito = document.querySelector(".numero-items");
numeroItemsCarrito.innerHTML = localStorage.getItem("carrito");



//Obtiene el indice correctamente pero creo que el error viene del Async y Await

fetch(`../BBDD-temporal/productos.json`)
    .then(res => res.json())
    .then(response => {
        obtenerInformacionProducto(response)
    })


/*Función para obtener la información del JSON con el índice seleccionado */
function obtenerInformacionProducto(datos) {

    /*Se obtiene el índice del producto que coincida con el id que se almacenó en el localStorage */
    var index = datos.findIndex(function (objeto) {
        return objeto.id === id;
    })

    /*Se utiliza el ínidce para obtener la información del objeto con dicho índice */
    imagenSrc = datos[index].imagenProducto;
    nombreTexto = `Nombre: ${datos[index].nombre}`;
    marcaTexto = `Marca: ${datos[index].marca}`;
    presentacionTexto = `Presentación: ${datos[index].presentacion}`;
    fabricanteTexto = `Fabricante: ${datos[index].fabricante}`;
    descripcionTexto = `Descripción: ${datos[index].descripcion}`;
    tipoEnvaseTexto = `Tipo de envase: ${datos[index].tipoEnvase}`;
    dimensionesTexto = `Dimensiones: ${datos[index].dimensiones}`;
    pesoTotalTexto = `Peso total: ${datos[index].pesoTotal}`;
    precioTexto = `Precio: $${datos[index].precio}`;

    pintarDOM();
}

//Termina la función para obtener los datos del objeto en el índice seleccionado


//Función para pintar en el DOM
function pintarDOM() {

/*Obtener referencia para insertar los datos */

    var contenido = document.querySelector(".contenido");
    var informacionProducto = document.querySelector(".informacion-producto");


    /*Crear elementos de la página */

    /*Crear imagen */
    var contenedorImagen = document.createElement("div");
    contenedorImagen.className = "contenedor-imagen";

    var imagen = document.createElement("img");
    imagen.src = imagenSrc;

    contenedorImagen.appendChild(imagen);
    informacionProducto.appendChild(contenedorImagen);
    /*Termina crear imagen */

    /*Contenedor información */
    var contenedorInformacion = document.createElement("div");
    contenedorInformacion.className = "contenedor-informacion";

    /*Nombre */
    var nombre = document.createElement("h2");
    nombre.className = "nombre";
    nombre.innerHTML = nombreTexto;
    contenedorInformacion.appendChild(nombre);
    /*Termina nombre */

    /*Marca */
    var marca = document.createElement("p");
    marca.className = "marca";
    marca.innerHTML = marcaTexto;
    contenedorInformacion.appendChild(marca);
    /*Termina marca */

    /*Presentación */
    var presentacion = document.createElement("p");
    presentacion.className = "presentacion";
    presentacion.innerHTML = presentacionTexto;
    contenedorInformacion.appendChild(presentacion);
    /*Termina presentación */

    /*Fabricante*/
    var fabricante = document.createElement("p");
    fabricante.className = "fabricante";
    fabricante.innerHTML = fabricanteTexto;
    contenedorInformacion.appendChild(fabricante);
    /*Termina fabricante */

    /*Descripción*/
    var descripcion = document.createElement("p");
    descripcion.className = "descripcion";
    descripcion.innerHTML = descripcionTexto;
    contenedorInformacion.appendChild(descripcion);
    /*Termina descripción */

    /*Tipo de envase*/
    var tipoEnvase = document.createElement("p");
    tipoEnvase.className = "tipo-envase";
    tipoEnvase.innerHTML = tipoEnvaseTexto;
    contenedorInformacion.appendChild(tipoEnvase);
    /*Termina tipo de envase */


    /*Dimensiones*/
    var dimensiones = document.createElement("p");
    dimensiones.className = "dimensiones";
    dimensiones.innerHTML = dimensionesTexto;
    contenedorInformacion.appendChild(dimensiones);
    /*Termina dimensiones*/

    /*Peso total*/
    var pesoTotal = document.createElement("p");
    pesoTotal.className = "peso-total";
    pesoTotal.innerHTML = pesoTotalTexto;
    contenedorInformacion.appendChild(pesoTotal);
    /*Termina peso total*/

    /*Botón */
    var contenedorBoton = document.createElement("div");
    contenedorBoton.className="contenedor-boton";
    var boton = document.createElement("button");
    boton.className="boton-agregar";
    boton.innerHTML ="AGREGAR";
    contenedorBoton.appendChild(boton);

    /*Termina botón*/

    informacionProducto.appendChild(contenedorInformacion);
    contenido.prepend(contenedorBoton);
    contenido.prepend(informacionProducto);

}

