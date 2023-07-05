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

  var $inputDelProducto = document.querySelector(".inputDelProducto").value;
  var $inputNombreProducto = document.querySelector(".inputNombreProducto").value;
  var $inputDelProducto = document.querySelector(".inputDelProducto").value;
  var $inputNombreProducto = document.querySelector(".inputNombreProducto").value;
  var $categoria = document.querySelector(".categoria").value;
  var $marcas = document.querySelector(".marcas").value;
  //!Ojo aqui que solo es una variable para que guarde la imagen
  // var $$img = document.getElementById('imagenPrevia').value;
   var $$img = $img.src;
  var $inputDescripcionProducto = document.querySelector(".inputDescripcionProducto").value;
  var $inputCostoProducto = document.querySelector(".inputCostoProducto").value;
  var $inputExistenciasProducto = document.querySelector(".inputExistenciasProducto").value;
  var $inputPresentacionProducto = document.querySelector(".inputPresentacionProducto").value;

//   console.log("El Id es", $inputDelProducto);
//   console.log("El nombre es", $inputNombreProducto);
//   console.log("La Categoria es", $categoria);
//   console.log("Su marca es", $marcas);
//   console.log("La imagen es", $$img);
//   console.log("La Descripcion es", $inputDescripcionProducto);
//   console.log("Su costo es", $inputCostoProducto);
//   console.log("El numero de existencias  es", $inputExistenciasProducto);
//   console.log("Su presentacion es de", $inputPresentacionProducto);
// alert("si entra ");

//Creamos una objeto que nos guarde toda la informacion

var guardarProducto={
  id:$inputDelProducto,
  nombre: $inputNombreProducto,
  categoria:$categoria,
  marca:$marcas,
  imagen:$$img,
  descripcion:$inputDescripcionProducto,
  costo:$inputCostoProducto,
  existencias:$inputExistenciasProducto,
  presentacion:$inputPresentacionProducto,
  };
  
  //Convierte los productos en un formtao JSON
var datosProducto=JSON.stringify(guardarProducto);
console.log(datosProducto)
}



