//VARIABLES && CONSTANTES
let idProduct; //Aqui debe ir el id del producto seleccionado para hacer match con el carrito de compras
let inputNumProduct; //Input de tipo number (valor en carrito minimo 1) para que el usuario MODIFIQUE PRODUCTOS
let cantidadEnCarrito = 0; //Aqui para saber cuantos objetos hay en el carrito, aunque podriamos saberlo con el metodo .length
// let productContainer; //Esta variable es para almacenar el div que contendrá las tarjetas de productos del carrito de compras, esta aqui para que tenga alcance global
let divProduct;
// Aumento y Decremento de productos
// Esto es temporal, hay que ver si se utilizan botones para aumentar y disminuir o un input type text (Sugerencia original)

// productos 

//Selectores de Id && Clases
//Principal Productos
let container = document.querySelector(".product-container");//Contenedor de espacio del carrito de compras
let containerShopingCar = document.querySelector(".section-product-container");//Contenedor de productos del carrito
const btnAddProduct = document.querySelectorAll(".btn-add-product");//Almacenamos la class del boton gregar producto
const btnShopingCar = document.querySelector(".btn-shopingCar");//Vamos al carrito de compras
const btnDeletProduct = document.querySelectorAll(".btn-delet");//Boton para eliminar producto
const btnUpProduct = document.querySelectorAll(".btn-aumentar");//Boton para aumentar un producto
const btnDownProduct = document.querySelectorAll(".btn-disminuir");//Boton para disminuir un producto
const btnVaciarProducts = document.querySelectorAll(".btn-void");//Boton para disminuir un producto

// carrito
let aumento = false;
let decremento = false;
let eliminar = false;

//ARRAYS & OBJETOS
let shopingCar = [
//     {
//         id: 2, 
//         src: "https://images.pexels.com/photos/7172068/pexels-photo-7172068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         nombre: "Pizza Vegana",
//         precio: 499.00,
//         cantidad: 0
// }
];    //Vacio al inicio

console.log("Datos de inicio del carrito compras");
console.log(shopingCar);

//Formulario
let datosFormulario = [];

let productsArray = [   //10 objetos JavaScript de muestra 
    {
        id: 0,
        src: "https://images.pexels.com/photos/4281821/pexels-photo-4281821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombre: "Aguacate Orgánico por pieza",
        precio: 15.50,
        cantidad: 0
    },
    {
        id: 1,
        src: "https://images.pexels.com/photos/6072378/pexels-photo-6072378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombre: "HotCakes Veganos (3 piezas)",
        precio: 159.90,
        cantidad: 0
    },
    {
        id: 2, 
        src: "https://images.pexels.com/photos/7172068/pexels-photo-7172068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombre: "Pizza Vegana",
        precio: 499.00,
        cantidad: 0
    },
    {
        id: 3,
        src: "https://images.pexels.com/photos/12829942/pexels-photo-12829942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombre: "Calabazas y pimientos",
        precio: 250.70,
        cantidad: 0
    },
    {
        id: 4,
        src: "https://images.pexels.com/photos/5966433/pexels-photo-5966433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombre: "Platón de frutas Orgánicas",
        descripcion: "Este es un platón de frutas veganas",
        precio: 350.99,
        cantidad: 0
    },
    {
        id: 5,
        src: "https://images.pexels.com/photos/5966433/pexels-photo-5966433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombre: "PRODUCTO 06",
        descripcion: "Esta es una descripción del prodcuto 06, INGORAR PRECIO Y LA IMAGEN",
        precio: 350.99,
        cantidad: 0
    },
    {
        id: 6,
        src: "https://images.pexels.com/photos/5966433/pexels-photo-5966433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombre: "PRODUCTO 07",
        descripcion: "Esta es una descripción del prodcuto 07, INGORAR PRECIO Y LA IMAGEN",
        precio: 350.99,
        cantidad: 0
    },
    {
        id: 7,
        src: "https://images.pexels.com/photos/5966433/pexels-photo-5966433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombre: "PRODUCTO 08",
        descripcion: "Esta es una descripción del prodcuto 08, INGORAR PRECIO Y LA IMAGEN",
        precio: 350.99,
        cantidad: 0
    },
    {
        id: 8,
        src: "https://images.pexels.com/photos/5966433/pexels-photo-5966433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombre: "PRODUCTO 09",
        descripcion: "Esta es una descripción del prodcuto 09, INGORAR PRECIO Y LA IMAGEN",
        precio: 350.99,
        cantidad: 0
    },
    {
        id: 9,
        src: "https://images.pexels.com/photos/5966433/pexels-photo-5966433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombre: "PRODUCTO 10",
        descripcion: "Esta es una descripción del prodcuto 10, INGORAR PRECIO Y LA IMAGEN",
        precio: 350.99,
        cantidad: 0
    }
];

//EVENTOS
//Vamos al carrito de compras para ver las tarjetas de productos
btnShopingCar.addEventListener("click", (e) => {
    e.preventDefault(); //prevenir que el navegador se actualice
    llamarShopingcar();
    console.log("Se presionó boton para ir al carrito");
})

// Iteramos sobre los botones y asignarles el event listener de agregar producto
// *Este evento ya se encuentra listo
btnAddProduct.forEach(function (boton) {
// btnAddProduct.addEventListener('click', agregarProducto);
    boton.addEventListener("click", (e) => {
        e.preventDefault(); //prevenir que el navegador se actualice
        agregarProducto(); //llama al carrito para modificarlo
        enviarDatos();
        console.log("Se presionó boton para agregar producto");
    })
});



//Vaciar productos
// *Este evento ya se encuentra listo
btnVaciarProducts.forEach(function (boton) {
    boton.addEventListener("click", (e) => {
        e.preventDefault(); //prevenir que el navegador se actualice
        vaciarProductos(); //ejecuta la funcion eliminar
        console.log("Se presionó boton para vaciar carrito");
    })
});

//FUNCIONES ESPECIALES
// *Esta funcición ya se encuentra lista
//Función para obtener el ID del producto segun el boton presionado
function obtenerId(boton) {
    idProduct = parseInt(boton.id); // Almacena el ID del botón en la variable idProduct, lo pasamos a int para utilizarlo como indice
    //Esto es para verificar en la consola que se obtenga el valor deseado
    console.log('ID del botón:', idProduct);
}
// *Esta funcición ya se encuentra lista
//Verificamos que exista el producto en el carrito y podemos hacer condiciones dependiendo del resultado (agregar producto o solo modificar cantidad)
function verificarExistencia(idProduct) {
    //Creamos una variable temporal que almacena el resultaddo del metodo .find()
    //Creamos una función callback (function(productoSolicitado)) que retorna un valor booleano
    //Definimos el criterio de busqueda (que los id´s coincidad)
    let productoExiste = shopingCar.find(function(productoSolicitado){
        return productoSolicitado.id === idProduct; //nos devuelve true or false de si lo tiene o no
    })
    // !Esto fue una prueba
    // console.log("Aqui imprime de funcion Verificar existencia");
    // console.log("Este es el id del producto  " + idProduct);
    // console.log("el producto solicitado existe? " + productoExiste);
    // console.log("Aqui cierra de funcion Verificar existencia");
    // !Esto fue una prueba
    // let productoExiste = shopingCar.find(function (productoSolicitado) {
    //     return productoSolicitado.id === idProduct;
    // })
    // console.log("Aqui imprime de funcion Verificar existencia");
    //     console.log("Este es el id del producto  " + idProduct);
    //     console.log("el producto solicitado existe? " + productoExiste);
    //     console.log("Aqui cierra de funcion Verificar existencia");
    // //Retornamos true o falso, le pusimos que sea !Diferente de undefined para que no se despapaye
    return productoExiste !== undefined;
}

function conversionJSON(){
    let converToJSON = JSON.stringify(shopingCar);
    return converToJSON;
}

function enviarDatos(){
    console.log("Esto es un objeto serializado,");
    console.log(conversionJSON());
    console.log("Se hizo conversión a JSON");
}
/* -----------------------------------------------------------------------------------------------------*/
//FUNCIONES NO ESPECIALES
// *Esta funcición ya se encuentra lista
function agregarProducto(){
    // Aqui solo verificamos el resultado de si existe o no el carrito
    console.log("Existe el producto? " + verificarExistencia(idProduct));
    // Si el producto NO existe entonces lo anexamos al carrito
    if(!verificarExistencia(idProduct)){
        console.log("Entre a donde NO existe el producto");
        let productsAdd = productsArray[idProduct];
        //Se modifica la propiedad .cantidad del objeto del carrito y le damos en ESTA UNICA OCASIÓN el valor de 1
        console.log("Se le agrega en cantidad 1 al elemento nuevo y ahora el carrito esta:")
        productsAdd.cantidad = 1;
        //Estatus del carrito
        console.log(shopingCar);
        // Agregamos al final un producto al carrito de compras con un push
        //?Verificar si se le puede hacer un push directamente al carrito con el objeto deseado
        shopingCar.push(productsAdd);
        //verificamos en consola cual es el objeto que se almaceno en el carrito, esto es solo corroboración
        console.log("Se agrega producto nuevo al carrito");
    } else{
        console.log("Entre a donde SI existe el producto");
        let productsAdd = productsArray[idProduct];
        console.log("Se le modifica la cantidad actual del item y ahora el carrito esta:")
        productsAdd.cantidad++;
        console.log(shopingCar);
        //verificamos en consola cual es el objeto que se almaceno en el carrito, esto es solo corroboración
        console.log("Se agrega producto nuevo al carrito");
    }
    
}

// !Esta función NO se esta utilizandop
function ANTIGUAagregarProducto() {
    // *Deberia salir un mensaje de "Producto Agregado"
    console.log("Inicia función de agregar producto");
    console.log(shopingCar);

    // if (shopingCar.length == 0) {
        //Si el producto NO existe en el carrito entonces lo agregamos
        if (verificarExistencia(!idProduct) || (shopingCar.length == 0)) {
            //Obtengo el objeto del array, creo una variable temp para almacenar el objeto del array de productos
            //?Verificar si se le puede hacer un push directamente al carrito con el objeto deseado
            let productsAdd = productsArray[idProduct];
            //*verificamos en consola cual es el objeto que se almaceno, esto es solo corroboración
            console.log(productsAdd);

            // Agregamos al final un producto al carrito de compras con un push
            //?Verificar si se le puede hacer un push directamente al carrito con el objeto deseado
            shopingCar.push(productsAdd);
            //verificamos en consola cual es el objeto que se almaceno en el carrito, esto es solo corroboración
            console.log("Se agrega producto nuevo al carrito");
            console.log(shopingCar);
            //Se modifica la propiedad .cantidad del objeto del carrito y le damos en ESTA UNICA OCASIÓN el valor de 1
            shopingCar[idProduct].cantidad = 1;
            console.log("Se agrega cantidad 1 al nuevo producto " + (shopingCar[idProduct].cantidad));
            // Creamos el producto en el apartado del carrito
            // crearProducto();
        }
    //     else{
    //         console.log("Estoy entrando al cuando SI existe producto");
    //     }
    // }
    else {
        //! Hay que ver si se mantiene esta condición o se queda que solo se pueda agregar el producto una vez
        //Y cuando se le de de nuevo NO se gregue otro ni haga nada, si no que se MODIFIQUE la cantidad en el carrito
        console.log("entre a modificar producto desde la funcion agregarProducto");
        modificarProducto();

    }

    // alert('¡Se agregó producto al carrito!');
    console.log("Finaliza función agregar producto");
}

//Se crean las "tarjetas de los productos" en la pagina o apartado del carrito de compras
//!Verificar como se va actualizar la tarejeta del producto carrito al seleccionar el 
// TODO Esta función requiere que se le aplique una funcion arreglo.find()
function crearProducto() {
    console.log("Inicia función de crear producto");
    // TODO Hacer un foreach para obtener TODOS los datos del carrito, asignarlos a las variables y pintar
    let productsAdd = productsArray[idProduct];
    //Obtengo las propiedades del objeto en variables temporales
    // let srcImg = productsAdd.src;
    // let h3Product = productsAdd.nombre;
    // let pPrice = productsAdd.precio;

    

    let id = 2;
    let cantidad = 10;

    let srcImg = "https://images.pexels.com/photos/4281821/pexels-photo-4281821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    let h3Product = "Nombre producto de prueba GMG";
    let pPrice = 100;

    //!Verificar si la cantidad debe ir aqui
    // let inputNumber = productsAdd.cantidad;
    //Se crea un contenedor div para colocar el producto agregado
    
    const h2 = document.createElement("h2");    //creo una etiqueta h2 para el titulo del carrito de compras
    h2.classList.add('h2-product'); //Le agregamos una clase a esta etiqueta del titulo para darle estilos
    h2.textContent = "Tu carrito de compras";

    const productContainer = document.createElement("div");
    productContainer.classList.add('product-container'); //Le agregamos una clase a este div que almacenará las tarjetas
    // !Segun el inspector los botones de aumentar, disminuir, etc NO tienen los 2 eventos, solo 1
    productContainer.innerHTML =`
    <div class = "div-product-container" >
    <br>
        <img src = "${srcImg}" alt = "Imagen Producto" width="300px" height="300px">
        <br>
        <div id="data-product-shopingCar">
        <div id="h-p-data-product">
            <h3>${h3Product}</h3>
            <p> Precio: $ ${pPrice}</p>
            <p> Cantidad: ${cantidad}</p>
            </div>
            <div class="btn-data-product">
            <!-- <input type="number" value="1" min="1" class="num-product" />-->
            <button class="btn-aumentar" id="${id}" onclick="obtenerId(this)">+</button>
            <button class="btn-disminuir" id="${id}" onclick="obtenerId(this)">-</button>
            <button class="btn-delet" id="${id}" onclick="obtenerId(this)">Eliminar</button>
            </div>
        </div>
        <br>
    </div>
    `;
    //Colocamos el producto en el carrito
    //Pintamos el espacio del carrito donde se van a poner los productos
    containerShopingCar.appendChild(h2);
    containerShopingCar.appendChild(productContainer);

    console.log("Cantidad de elementos ACTUAL en carrito: ", shopingCar.length);
    console.log("Finaliza función crear producto");
}
// *Esta funcición ya se encuentra casi lista
// !Falta la parte de la manipulación del DOM
// ?Parece que tuviera una primera lectura incorrecta
function modificarProducto() {
    console.log("Inicia función de modificar producto");
    //? Se necesita hacer una comparación de la cantidad actual de productos y se suma 1
    // Creamos una variable temporal que va almacenar el valor ACTUAL del producto(objeto) en el carrito
    // Independientemente del valor que haya (inicialmente 0), se aumentará en 1
    let productsAdd = shopingCar[idProduct];
    if (aumento) {
        productsAdd.cantidad++;
        console.log("Se aumentó");
        
    } else if (decremento) {
        if (productsAdd.cantidad > 1) {
            productsAdd.cantidad--;
            console.log("Se disminuyó");
        } else {
            productsAdd.cantidad = 1;
        }
    }
    // seteamos las variables para usarse en la proxima iteración
    aumento = false;
    decremento = false;
    // Sobreescribimos la cantidad existente del carrito con esta modificación
    shopingCar[idProduct].cantidad = productsAdd.cantidad;

    console.log("Cantidad actual del producto " + (shopingCar[idProduct].id) + " es : " + (shopingCar[idProduct].cantidad));
    console.log(shopingCar);
    console.log("Finaliza función modificar producto");
}

// *Esta funcición ya se encuentra casi lista
// !Solo falta la parte de la manipulación del DOM
function eliminarProducto() {
    // https://lenguajejs.com/javascript/dom/insertar-elementos-dom/
    console.log("Inicia función de eliminar producto");
    console.log("eliminarProducto Cantidad ANTES DE ELIMINAR elementos: ", shopingCar.length);
    
    //? No se si sea necesario modificar el valor ya que se eliminará
    shopingCar[idProduct].cantidad = 0;
    console.log(shopingCar);
    //Reviso el id del producto a eliminar encada uno de los indices de mi arreglo, si encuentro un indice que dentro tenga un objeto que coincida con el id que quiero borrar, entonces lo elimino
    //usamos findIndex para corroborar que el idProduct EXISTA en el carrito y este metodo nos duvuelve el primer elemento que cumple la condición
    //Realmente no importa el valor del indice,si NO existe la variable será -1
    let indiceProductoAEliminar = shopingCar.findIndex(function (producto) {
        //Esto nos devolverá un true o false 
        return producto.id === idProduct;
    });
    //Si el resultado es -1 significa que el carrito esta VACIO
    //Si el resultado es cualquier otra cosa entonces eliminamos del carrito el producto usando su posición especificada con el idProduct
    if (indiceProductoAEliminar != -1) {
        // splice(Posición especifica dada por el ID, cantidad de elementos a eliminar)
        shopingCar.splice(indiceProductoAEliminar, 1);
    }

    // !Eliminar la tarjeta del producto del carrito
    // ? Verificar la función .removeChild(node)
    console.log("eliminarProducto Cantidad de elementos DESPUES DE ELIMINAR en carrito: ", shopingCar.length);
    console.log(shopingCar);
    console.log("Finaliza función eliminar producto");
}

// *Esta funcición ya se encuentra casi lista
// !Solo falta la parte de la manipulación del DOM
function vaciarProductos() {
    // https://lenguajejs.com/javascript/dom/insertar-elementos-dom/
    console.log("Inicia función de vaciar productos");
    // Probar esta idea para ver si limpia el carrito
    shopingCar = [];
    //Esto debería vaciar el carrito desde la posición 0 hasta la longitud del arreglo
    shopingCar.splice(0, shopingCar.length);
    //Probar esto tambien
    shopingCar.length = 0;
    console.log("vaciarProductos Cantidad de elementos ACTUAL en carrito: ", shopingCar.length);

    console.log(shopingCar);
    // ! Hay que agregar la funcionalidad de limpiar el espacio de los prodcutos del cantidadEnCarrito(<section class="section-product-container"></section>) y que se muestre la imagen del carrito vacio
    // ? Verificar la función .removeChild(node)
    console.log("Finaliza función vaciar productos");
}

function llamarShopingcar() {
    console.log("Estamos en el carrito");

    console.log("Cantidad de elementos ACTUAL en carrito: ", shopingCar.length);
    console.log("Finaliza lógica para ir al carrito");
    console.log("Vamos a la función crear productos");
    crearProducto();
}

//Modificar cantidad en el carrito
//Aumentar Disminuir cantidad

containerShopingCar.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-aumentar")) {
      e.preventDefault();
      aumento = true;
      modificarProducto();
      console.log("Se presionó botón para aumentar cantidad de productos");
    }
  });
  containerShopingCar.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-disminuir")) {
      e.preventDefault();
      decremento = true;
      modificarProducto();
      console.log("Se presionó botón para aumentar cantidad de productos");
    }
  });
// *Este evento ya se encuentra listo
// btnUpProduct.forEach(function (boton) {
//     boton.addEventListener("click", (e) => {
//         e.preventDefault(); //prevenir que el navegador se actualice
//         aumento = true;
//         modificarProducto(); //ejecuta la funcion modificarProducto
//         console.log("Se presionó boton para disminuir cantidad de productos");
//     })
// });

// //Disminuir cantidad
// // *Este evento ya se encuentra listo
// btnDownProduct.forEach(function (boton) {
//     boton.addEventListener("click", (e) => {
//         e.preventDefault(); //prevenir que el navegador se actualice
//         decremento = true;
//         modificarProducto(); //ejecuta la funcion modificarProducto
//         console.log("Se presionó boton para aumentar cantidad de productos");
//     })
// });

//Eliminar producto
// *Este evento ya se encuentra listo
btnDeletProduct.forEach(function (boton) {
boton.addEventListener("click", (e) => {
    e.preventDefault(); //prevenir que el navegador se actualice
    eliminarProducto(); //ejecuta la funcion eliminar
    console.log("Se presionó boton para eliminar un productos");
})
});