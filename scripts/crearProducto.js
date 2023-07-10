
var formulario = document.querySelector(".contenido");

const defaultImg = '../assets/img/ImagenesProductos/default.jpg';

const img = document.getElementById('img');

const inputImg = document.getElementById('contenedor-imagen');

var contenedorPrecioOferta = document.querySelector(".contenedor-precio-oferta");

var enOferta = document.getElementById('enOferta');


/*Función para desplegar el precio anterior de oferta cuando se selecciona la checkbox */
enOferta.addEventListener('change', function(){
    if(enOferta.checked){
        contenedorPrecioOferta.style.display="block";
    }
    else{
        contenedorPrecioOferta.style.display="none";
        precioOferta = document.getElementById("precio-oferta").value = "";
    }
})


/*Función que lee la imagen y la despliega en la pantalla */
inputImg.addEventListener('change', e => {

    if (e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            img.src = e.target.result;
        }

        reader.readAsDataURL(e.target.files[0]);
    }

    else {
        img.src = defaultImg;
    }

})



//Guarda los datos de los inputs en variables 
formulario.onsubmit = function (e) {
    e.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var marca = document.getElementById("marca").value;
    var presentacion = document.getElementById("presentacion").value;
    var fabricante = document.getElementById("fabricante").value;
    var precio = document.getElementById("precio").value;
    var existencias = document.getElementById("existencias").value;
    var descripcion = document.getElementById("descripcion").value;
    var tipoEnvase = document.getElementById("tipo-envase").value;
    var dimensiones = document.getElementById("dimensiones").value;
    var pesoTotal = document.getElementById("peso-total").value;
        enOferta = document.getElementById("enOferta").checked;
    var precioOferta = document.getElementById("precio-oferta").value;
    var imagenProducto = img.src;

    //Guarda los datos de las variables en un objeto
    var objetoProducto = {
        nombre: nombre,
        marca: marca,
        presentacion: presentacion,
        fabricante: fabricante,
        precio: precio,
        existencias: existencias,
        descripcion: descripcion,
        tipoEnvase: tipoEnvase,
        dimensiones: dimensiones,
        pesoTotal: pesoTotal,
        enOferta: enOferta,
        precioOferta: precioOferta,
        imagenProducto: imagenProducto
    };

    // fetch('../BBDD-temporal', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(objetoProducto)
    // })

    console.log(JSON.stringify(objetoProducto));
}
