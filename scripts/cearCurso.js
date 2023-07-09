

const defaultFileCurso = '../assets/img/producto1.png';//Si no cargan una imagen nos va a devolver una imagen random de algun producto
const $inputdelCurso = document.getElementById('inputdelCurso');//Creamos una variable que nos traiga del HTML la imagen que el cliente selecciono
const $divCurso = document.getElementById('divCurso');//Traemos el img de nuestra imagen para que nos la pinte el DOM

$inputdelCurso.addEventListener('change', e => { //Hacemos un evento que cuando encuentre un cambio se haga algo, ene este caso el cambio de imagen

  const archivos = e.target.files; //Entra cuando LA " e " tiene modificaciones entra al tipo de archivo que es un file
  if (archivos.length > 0) { // Limpiar cualquier vista previa anterior
    $divCurso.innerHTML = '';
    for (let i = 0; i < archivos.length; i++) {
      const archivo = archivos[i];
      const reader = new FileReader();
      reader.onload = function (e) {
        const src = e.target.result;

        // Crear un elemento de imagen para mostrar la vista previa
                                                     // !Desde aqui mandamos a que se manipule el DOM
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('inputdelCurso');

        // Agregar el elemento de imagen a la vista previa
        $divCurso.appendChild(img);
      };

      reader.readAsDataURL(archivo);
    }
  } else { // Si no hay archivos salimos de la función y quitamos la imagen
    // Si no se seleccionan archivos, mostrar la imagen por defecto
    $divCurso.innerHTML = `<img src="${defaultFileCurso}" alt="Vista previa">`;
  }
});//Cierre de mi EvenListener






const defaultFileVideo = '../assets/img/producto1.png';
const $videoCurso = document.getElementById('videoCurso');
const $videoTotalCurso = document.getElementById('videoTotalCurso');

$videoCurso.addEventListener('change', e => {
  const archivos = e.target.files;

  if (archivos.length > 0) {
    // Limpiar cualquier vista previa anterior
    $videoTotalCurso.innerHTML = '';

    for (let i = 0; i < archivos.length; i++) {
      const archivo = archivos[i];

      const reader = new FileReader();
      reader.onload = function (e) {
        const src = e.target.result;

        // Crear un elemento de imagen para mostrar la vista previa
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('vistaPreviaVideo');

        // Agregar el elemento de imagen a la vista previa
        $videoTotalCurso.appendChild(img);
      };

      reader.readAsDataURL(archivo);
    }
  } else {
    // Si no se seleccionan archivos, mostrar la imagen por defecto
    $videoTotalCurso.innerHTML = `<img src="${defaultFileVideo}" alt="Vista previa">`;
  }
});

var $inputDelProducto =document.getElementsByClassName('.inputDelProducto');
