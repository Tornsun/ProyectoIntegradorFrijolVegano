var contenedorTarjetas = document.querySelector('.contenedor-tarjetas');
var imgSrc = '../assets/img/ImagenesProductos/default.jpg';
var textoPrecio = "";
var textoNombre = "";
var textoDescripcion ="";
var id="";


fetch(`../BBDD-temporal/productos.json`)
    .then(res=> res.json())
    .then(response=>{
        obtenerInformacionProducto(response)
    })


    /*Función para obtener la información del JSON e imprimir tantos objetos como haya en el JSON */
function obtenerInformacionProducto(datos){
    for(i=0; i<datos.length;i++){
        imgSrc=datos[i].imagenProducto;
        textoPrecio = `$${datos[i].precio}`;
        textoNombre = datos[i].nombre;
        textoDescripcion = datos[i].descripcion;
        id=datos[i].id;
        nuevaTarjetaProducto();
    }
}


/*Función para crear nueva tarjeta */
function nuevaTarjetaProducto() {

    const card = document.createElement('div');
    card.className = "card";
    card.id = id;

    /*Nombre */

    const contenedorNombre = document.createElement('div');
    contenedorNombre.className = "contenedor-nombre";
    
    const nombre = document.createElement('p');
    nombre.className = "producto-nombre";
    nombre.innerHTML = textoNombre;

    contenedorNombre.appendChild(nombre);
    card.appendChild(contenedorNombre);

    /*Termina Nombre */

    /*Elemento a de la imagen*/
    const link = document.createElement("a");
    link.href="./producto.html";
    /*Termina elemento a de la imagen */

    /*Imagen */
    const contenedorImagen = document.createElement('div');
    contenedorImagen.className = "contenedor-imagen";

    const img = document.createElement('img');
    img.src = imgSrc;
    
    link.appendChild(img);
    contenedorImagen.appendChild(link);
    card.appendChild(contenedorImagen);

   

    /*Termina imagen */

    /*Precio */
    const contenedorPrecio = document.createElement('div');
    contenedorPrecio.className = "contenedor-precio";

    const precio = document.createElement('p');
    precio.className = "producto-precio";
    precio.innerHTML = textoPrecio;

    contenedorPrecio.appendChild(precio);

    card.appendChild(contenedorPrecio);

    /*Termina Precio */

    /*Descripcion */

    const contenedorDescripcion = document.createElement('div');
    contenedorDescripcion.className = "contenedor-descripcion";

    const descripcion = document.createElement('p');
    descripcion.className = "producto-descripcion";
    descripcion.innerHTML = textoDescripcion;

    contenedorDescripcion.appendChild(descripcion);
    card.appendChild(contenedorDescripcion);

    /*Termina Descripcion */

    

    /*Boton */
    const contenedorBoton = document.createElement('div');
    contenedorBoton.className = "contenedor-boton";

    const boton = document.createElement('button');
    boton.className="boton-agregar";
    boton.innerHTML = "AGREGAR";
    

    contenedorBoton.appendChild(boton);
    card.appendChild(contenedorBoton);
    contenedorTarjetas.appendChild(card);

     /*Función link imagen */
     link.addEventListener("click", function(){
        localStorage.setItem("detalles", card.id);
    });
    
    /*Termina función link imagen */

    /*Funcion del botón */
    boton.addEventListener("click", function(){
        localStorage.setItem("carrito", card.id);
    });
    /*Termina función del boton */

    /*Termina boton */

}
