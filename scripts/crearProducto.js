
var formulario = document.querySelector(".contenido");

const defaultImg = '../assets/img/ImagenesProductos/default.jpg';

const contenedorImagen = document.getElementById('espacio-imagen');
const img = document.createElement('img');

const inputImg = document.getElementById('contenedor-imagen');

/*Función que lee la imagen y la despliega en la pantalla */
inputImg.addEventListener ('change', e=>{

    if(e.target.files[0])
    {
        const reader = new FileReader();
        reader.onload = function(e)
        {
            img.src = e.target.result;
        }

        reader.readAsDataURL(e.target.files[0]);
    }

    else{
        img.src = defaultImg;
    }

    contenedorImagen.appendChild(img);
})

//Guarda los datos de los inputs en variables 
formulario.onsubmit= function (e){
    e.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var marca = document.getElementById("marca").value;
    var presentacion = document.getElementById("presentacion").value;
    var fabricante = document.getElementById("fabricante").value;
    var precio = document.getElementById("precio").value;
    var existencias = document.getElementById("existencias").value;
    var imagenProducto = img.src;

//Guarda los datos de las variables en un objeto
    var objetoProducto = {
        nombre: nombre,
        marca: marca, 
        presentacion: presentacion,
        fabricante: fabricante,
        precio: precio,
        existencias: existencias,
        imagenProducto: imagenProducto
    };
//transforma el objeto en un JSON y lo imprime en consola
    var producto = JSON.stringify(objetoProducto);
    console.log(producto);
}
