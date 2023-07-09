//!Aqui colocamos el default de la imagen para que nos de la funcion de que nos regrese la imagen o que se muestre en la pagina una vez que se cargue

const defaultFile = '../assets/img/producto1.png';//Si no cargan una imagen nos va a devolver una imagen random de algun producto
const $imagenPrevia = document.getElementById('imagenPrevia');//Creamos una variable que nos traiga del HTML la imagen que el cliente selecciono
const $imagenPrevisualizada = document.getElementById('imagenPrevisualizada');//Traemos el img de nuestra imagen para que nos la pinte el DOM
const $img = document.getElementById('etiquetaDeImagen');

$imagenPrevia.addEventListener('change', e => { //Hacemos un evento que cuando encuentre un cambio se haga algo
  e.preventDefault();

  if (e.target.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      $img .src = e.target.result;
  }
  reader.readAsDataURL(e.target.files[0]) //todos los archivos que son base:64
}else{
  $img.src=defaultFile;
}
})  

//!Aqui empezamos con el arreglo para que nos traiga todos los datos y colocarlos en un arreglo.

var formulario = document.querySelector(".formulario");
formulario.onsubmit = function(e) {
  e.preventDefault();


  var $inputNombreProducto = document.querySelector(".inputNombresProducto").value;
  var $inputMarcaProducto = document.querySelector(".inputMarcaProducto").value;
  var $inputPresentacioProducto = document.querySelector(".inputPresentacioProducto").value;
  var $inputFabricanteProducto = document.querySelector(".inputFabricanteProducto").value;
  var $inputDePrecios = document.querySelector(".inputDePrecios").value;
  var $inputDeExistencias = document.querySelector(".inputDeExistencias").value;
  //!Ojo aqui que solo es una variable para que guarde la imagen
  // var $$img = document.getElementById('imagenPrevia').value;
   var $$img = $img.src;




//Creamos una objeto que nos guarde toda la informacion

var guardarProducto={
  nombre: $inputNombreProducto,
  marca:$inputMarcaProducto,
  presentacion:$inputPresentacioProducto,
  fabricante:$inputFabricanteProducto,
  precio:$inputDePrecios,
  existencias:$inputDeExistencias,
  imagen:$$img,
  };
  
  //Convierte los productos en un formtao JSON
var datosProducto=JSON.stringify(guardarProducto);
localStorage.setItem('productos', datosProducto);
console.log(datosProducto)
alert("Se guardo el producto con exito")
}



