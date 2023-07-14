function validarLista() {
  var lista = document.getElementById('miLista');
  var elementosSeleccionados = lista.querySelectorAll('li.selected');

  if (elementosSeleccionados.length === 0) {
    alert('Debes agregar un costo y/o duracion');
    return;
  }

  // El formulario es válido, se puede continuar con otras acciones
  // ...

  // Ejemplo: Obtener los textos de los elementos seleccionados
  var textosSeleccionados = Array.from(elementosSeleccionados).map(function(elemento) {
    return elemento.textContent;
  });

  console.log('Elementos seleccionados:', textosSeleccionados);
}




const defaultFile = '../assets/img/curso2 1.png';
const $imagenPrevia = document.getElementById('inputImagenCurso');
const $imagenPrevisualizada = document.getElementById('cursoPrevisualizado');
const $img = document.getElementById('etiquetaDeImagen');

// Evento para la imagen
$imagenPrevia.addEventListener('change', e => {
    e.preventDefault();

    if (e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            $img.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    } else {
        $img.src = defaultFile;
    }
});

const defaultVideo = '../assets/img/curso2 1.png';
const $videoPrevio = document.getElementById('inputVideoCurso');
const $videoPrevisualizado = document.getElementById('videoPrevisualizado');
const $vid = document.getElementById('etiquetaDevideo');

// Evento para el video
$videoPrevio.addEventListener('change', i => {
    i.preventDefault();

    if (i.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (i) {
            $vid.src = i.target.result;
        }
        reader.readAsDataURL(i.target.files[0]);
    } else {
        $vid.src = defaultVideo;
    }
});


//formamos con el arreglo para que nos traiga todos los datos y colocarlos en un arreglo.

var formulario = document.querySelector(".formulario");
formulario.onsubmit = function(e) {
  e.preventDefault();


  var $inputTituloDeCurso = document.querySelector(".inputTituloDeCurso").value;
  var $inputCategoriaCurso = document.querySelector(".inputCategoriaCurso").value;
  var $inputDescripcionProducto = document.querySelector(".inputDescripcionProducto").value;
  var $inputCostoCurso = document.querySelector(".inputCostoCurso").value;
  var $inputhorasCurso = document.querySelector(".inputhorasCurso").value;
  
  var $input1 = document.querySelector(".input1").value;
  var $input2 = document.querySelector(".input2").value;
  var $input3 = document.querySelector(".input3").value;
  var $input4 = document.querySelector(".input4").value;
  var $input5 = document.querySelector(".input5").value;
  var detalles = $input1 + $input2 + $input3 + $input4 + $input5;
  console.log(detalles);
  var $input6 = document.querySelector(".input6").value;
  var $input7 = document.querySelector(".input7").value;
  var $input8 = document.querySelector(".input8").value;
  var $input9 = document.querySelector(".input9").value;
  var $input0 = document.querySelector(".input0").value;
  var aprendizaje = $input6 + $input7 + $input8 + $input9 + $input0;

  //!Ojo aqui que solo es una variable para que guarde la imagen
  // var $$img = document.getElementById('imagenPrevia').value;
   var $$img = $img.src;
   var $$vid=$vid.src;




//Creamos una objeto que nos guarde toda la informacion

var guardarCurso=[{
  titulo: $inputTituloDeCurso,
  categoria:$inputCategoriaCurso,
  descripcion:$inputDescripcionProducto,
  costo:$inputCostoCurso,
  detalles:detalles,
  aprendizaje:aprendizaje,
  imagen:$$img,
  video:$$vid,
  estrellas:"4"
  }];
  
  //Convierte los productos en un formtao JSON
var datosCurso=JSON.stringify(guardarCurso);
localStorage.setItem('curso', datosCurso);
console.log(datosCurso)
alert("Se guardo el curso con exito")
}