const botonEnviar = document.getElementById("botonEnviar");


let objeto = {
    nombre:  "",
    telefono: "",
    email: "",
    mensaje:  "",
};



const arrayConValores = [];

 //Almacenar elementos del formulario en variables de JS como objetos (objeto completo)
 let nombre = document.getElementById("nombre");
 let telefono = document.getElementById("telefono");
 let email = document.getElementById("email");
 let mensaje= document.getElementById("mensaje");
 
 
 //Función para agregar producto
 function tomarValores(){
    
 //Guardo los VALORES de mis inputs en variables nuevas, para guardar el VALOR como es un objeto acceso a su propiedad con un . --> objeto.propiedad
 let valornombre = nombre.value;
 let valortelefono = telefono.value;
 let valoremail = email.value;
 let valormensaje = mensaje.value;
 //Hago una impresión de los valor que estoy ingresando en los input, esto está de más, es solo para ver en la consola del navegador
 console.log(valornombre); //Aqui se hace una primera impresión en la consola y para posteriormente realmente hacer la impresión de los valores, ESTO ESTA RARITO
 console.log(valortelefono);
 console.log(valoremail);
 console.log(valormensaje);
console.log(arrayConValores);


 }



  
 botonEnviar.addEventListener("click", (e) => {
    e.preventDefault(); //prevenir que el navegador se actualice
    tomarValores(); //ejecuta la funcion 
}
);


