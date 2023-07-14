//* Variables para almacenar datos de bases de datos
let url = '../BBDD-temporal/';
let endPoint = `${url}carritoCompras-respaldo.json`;
//* Varibles para el carrito
let carritoCompras = [];
let aumento = false;
let decremento = false;
let eliminar = false;
// * Variables para almacenar los datos del objeto carrito
let id;
let esProducto;
let modelo;
let cantidad;
let srcImg;
let h3Product;
let pPrice;
// *VARIABLES && CONSTANTES
let idProduct; //Aqui debe ir el id del producto seleccionado para hacer match con el carrito de compras
let productoOCurso; //Aqui vamos a almacenar si el item se trata de un curso o un producto
let modeloProductoOCurso;
let precioCarrito = 0; //calcular el total de la compra
let cantidadEnCarrito = 0; //Aqui para saber cuantos objetos hay en el carrito, aunque podriamos saberlo con el metodo .length

//* Selectores para manipulación del DOM
const contenidoCarrito = document.querySelector(".contenedor-columna1");//Contenedor de espacio del carrito de compras
const cantidadProductos = document.querySelector("#cantidad-productos");
const precioProductos = document.querySelector("#precio-productos");
const bienvenidaCarrito = document.querySelector("#bienvenida-carrito");

// let container = document.querySelector(".product-container");//Contenedor de espacio del carrito de compras
// let containerShopingCar = document.querySelector(".section-product-container");//Contenedor de productos del carrito

const btnDeletProduct = document.querySelectorAll(".btn-delet");//Boton para eliminar producto
const btnUpProduct = document.querySelectorAll(".btn-aumentar");//Boton para aumentar un producto
const btnDownProduct = document.querySelectorAll(".btn-disminuir");//Boton para disminuir un producto
const btnVaciarProducts = document.querySelector(".btn-vaciar");//Boton para vaciar carrito
const btnPagar = document.querySelector(".boton-pago")//Boton para pagar

/*--------------------------------------------------------------------------------------------------------------------- */
//! Llamamos a las funciones para obtener los dato de las bases de datos, que a su vez pintan el DOM con los datos del carrito
obtenerDatosCarrito();
// * Esta función no se utiliza pq se llama al tener la conexión con la BBDD
// pintarCarrito();
/*--------------------------------------------------------------------------------------------------------------------- */
//! FUNCIONES ESPECIALES
// ? Cuando se usara??
// * En caso de que se reciban los datos desde base de datos y NO desde local
function obtenerDatosCarrito() {
    fetch(endPoint)
        .then((respuestaCarrito) => {
            if (!respuestaCarrito.ok) {
                throw new Error("Error HTTP: " + respuestaCarrito.status);
            }
            return respuestaCarrito.json();
        })
        .then((carrito) => {
            // carritoCompras = carrito;
            // console.log(carrito);
            let converToJSON = JSON.stringify(carrito);
            localStorage.setItem("carritoCompras", converToJSON);
            let shoppingCarLocalStoragre = localStorage.getItem("carritoCompras");
            carritoCompras = JSON.parse(shoppingCarLocalStoragre);
            console.log(carritoCompras);
            pintarCarrito(carritoCompras);
        })
        .catch((error) => {
            console.log("Soy un error en conexión con los datos del carrito de compras: " + error);
        });
}
// TODO falta implementar la escritura al archivo json mediante NodeJS
function enviarDatosCarrito() {
    fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(carritoCompras),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al escribir en el archivo.');
            }
            console.log('Datos agregados al archivo correctamente.');
        })
        .catch(error => {
            console.log("Soy un error en conexión para escritura de los datos del carrito de compras: " + error);
        });
}
//* Función para obtener el ID del producto segun el boton presionado
function obtenerId(boton) {
    idProduct = parseInt(boton.id); // Almacena el ID del botón en la variable idProduct, lo pasamos a int para utilizarlo como indice
    //* Esto es para verificar en la consola que se obtenga el valor deseado
    console.log('ID del botón:', idProduct);
}
//* Verificamos que exista el producto en el carrito y podemos hacer condiciones dependiendo del resultado (agregar producto o solo modificar cantidad)
function verificarExistenciaProducto(idProduct) {
    //* Creamos una variable temporal que almacena el resultaddo del metodo .find()
    //* Creamos una función callback (function(productoSolicitado)) que retorna un valor booleano
    //* Definimos el criterio de busqueda (que los id´s coincidad)
    let productoExiste = carritoCompras.find(function (productoSolicitado) {
        return productoSolicitado.id === idProduct; //nos devuelve true o false de si lo tiene o no
    })

    //* Retornamos true o falso, le pusimos que sea !Diferente de undefined para que no se despapaye
    return productoExiste !== undefined;
}
//* Buscamos el indice del producto en el carrito y podemos hacer condiciones dependiendo del resultado (agregar producto o solo modificar cantidad)
function verificarIndexProducto(idProduct, productoOCurso) {
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    //* Creamos una variable temporal que almacena el resultado del metodo .findIndex()
    //* Creamos una función callback (function(productoSolicitado)) que retorna un valor booleano
    let indiceProductoEncontrado = carritoCompras.findIndex(function (productoSolicitado) {
        //* Definimos el criterio de busqueda (que los id´s coincidad)
        // TODO vamos a hacer que se verifique tanto el id como el modelo (producto o curso) y devolver un array u objeto con esos 2 datos
        if ((productoSolicitado.id == idProduct) && (productoSolicitado.esProducto == productoOCurso))
            return true
        // return productoSolicitado.id === idProduct;   //Esto nos devolverá un true o false 
    });
    //* Obtenemos el índice en el array si un elemento pasa la prueba; en caso contrario, -1, Si el resultado es -1 significa que el producto NO existe en el carrito
    console.log("Indice de producto encontrado EN EL CARRITO:", indiceProductoEncontrado);
    return indiceProductoEncontrado;
}
function converToInt() {
    // * Esta función nos puede servir a futuro dependiendo como recibamos los datos de la BBDD
}
function evaluarTipo(e) {
    if (e.target.classList.contains("producto")) {
        productoOCurso = true;
        modeloProductoOCurso = "producto";
        console.log("Se presionó un producto");
    }
    if (e.target.classList.contains("curso")) {
        productoOCurso = false;
        modeloProductoOCurso = "curso";
        console.log("Se presionó un curso");
    }
    console.log("Estatus true=producto, false=curso:", productoOCurso);
}

/*--------------------------------------------------------------------------------------------------------------------- */
//! Funciones de manejo obtención y manipulación de datos
/*  Aqui iniciamos la parte del almacenamiento local que queda pendiente de usar */
// ? Cuando se usara??
//* Hacemos una conversión de datos.
function conversionJSON() {
    let converToJSON = JSON.stringify(shopingCar);
    return converToJSON;
}
function converToObjetc() {
    let converToObject = (JSON.parse(getLocalStorage()));
    return converToObject;
}
//* Obtenemos los datos del local storage
function setLocalStorage() {
    // Guardar la cadena JSON en localStorage
    localStorage.setItem("shoppingCar", conversionJSON());
    // console.log(localStorage.setItem('shoppingCar', conversionJSON()));
}
function getLocalStorage() {
    let shoppingCarLocalStoragre = localStorage.getItem("shoppingCar");
    // console.log(shoppingCarLocalStoragre);
    return shoppingCarLocalStoragre
}
function enviarDatos() {
    setLocalStorage();
    console.log("Se enviaron datos como un String");
}
function recibirDatos() {
    console.log(converToObjetc());
    console.log("Se recibieron datos como un Objeto");
}
/*  Aqui cerramos la parte del almacenamiento local que queda pendiente de usar */


/*--------------------------------------------------------------------------------------------------------------------- */
//! FUNCIONES GENERALES ESPECIALES
// *Creación del carrito en el DOM
// TODO Pendiente el HTML final
function pintarCarrito(carrito) {
    // ! Aqui requiero la estructura FINAL HTML de Itzel para poder pintarlo
    carritoCompras = carrito;
    console.log("Inicia función de crear productos del carrito");
    // let id;
    // let esProducto;
    // let modelo;
    // let cantidad;
    // let srcImg;
    // let h3Product;
    // let pPrice;

    if (carritoCompras.length != 0) {
        // cantidadEnCarrito = carritoCompras.length;
        carritoCompras.forEach(function (iteracionProductos) {
            id = iteracionProductos.id;
            esProducto = iteracionProductos.esProducto;
            modelo = iteracionProductos.modelo;
            srcImg = iteracionProductos.src;
            h3Product = iteracionProductos.nombre;
            pPrice = parseFloat(iteracionProductos.precio);
            pPrice = (Math.round(pPrice * 100) / 100).toFixed(2);
            cantidad = iteracionProductos.cantidad;

            const contenedorItems = document.createElement("div");
            contenedorItems.classList.add("contenedor-items");
            contenedorItems.classList.add(`${modelo}`);
            contenedorItems.setAttribute("id", `${modelo}-${id}`)

            contenedorItems.innerHTML = `
            
                <img src="${srcImg}" alt="ImagenProdcuto" class="imagen-izquierda">
                <div class="contenedorProducto">
                    <div class="contenedorDescripcion">
                        <p class="titulo-item"><strong>${h3Product}</strong></p>
                        <p class="descrpcion-item">¿Alguna descripción breve? NO PUEDE SER IGUAL QUE LA PLANTILLA DE PRODCUTO PQ QUEDARÍA MUY LARGO Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ipsum ipsam eveniet assumenda, id rerum officiis quo mollitia praesentium sed, dolore alias eaque! Vero mollitia ex blanditiis rerum nemo quam!</p>
                        <p class="precio-item">Precio: <strong>$ ${pPrice}</strong></p>
                        <p>Cantidad: <strong><span id="${id}" class="cantidad-${modelo}-${id}">${cantidad}</span></strong></p>
                    </div>
                    <div class="fila-botones">
                        <button class="boton-item btn-disminuir ${modelo}" id="${id}" onclick="obtenerId(this)">-</button>
                        <button class="boton-item btn-aumentar ${modelo}" id="${id}" onclick="obtenerId(this)">+</button>
                        <button class="boton-item btn-delet ${modelo}" id="${id}" onclick="obtenerId(this)">Eliminar</button>
                    </div>
                    <hr>
                </div>
                
            
        `;
            // precioCarrito = pPrice + precioCarrito;
            // console.log(pPrice,precioCarrito);
            contenidoCarrito.appendChild(contenedorItems);
        });
    } else {
        precioCarrito = 0;
        const contenedorItems = document.createElement("div");
        contenedorItems.classList.add("contenedor-items");

        contenedorItems.innerHTML = `
    <div class = "contenedor-items" >
    
    <img src="../assets/img/carritoVacio.png" alt="carrito vacio" width = "300" class = "img-carrito">
    </div>
    `;
        bienvenidaCarrito.textContent = "Tu carrito vegano está vacío :(";
        contenidoCarrito.appendChild(contenedorItems);
    }
    calcularSubtotalPago();
    console.log("Finaliza función crear productos en el carrito");
}

function despintarCarrito() {
    const eliminarcontenedorItems = document.querySelector(".contenedor-items");
    eliminarcontenedorItems.remove();
    pintarCarrito(carritoCompras);
}

function calcularSubtotalPago() {
    let precioSubtotalPago = 0;
    let cantidadSubtotalPago = 0;
    let totalPago = 0;
    carritoCompras.forEach(function (iteracionSubtotalPago) {
        cantidadSubtotalPago = iteracionSubtotalPago.cantidad;
        precioSubtotalPago = iteracionSubtotalPago.precio;
        // precioSubtotalPago = iteracionSubtotalPago.precio + precioSubtotalPago;
        totalPago = (cantidadSubtotalPago * precioSubtotalPago) + totalPago
        console.log(cantidadSubtotalPago, precioSubtotalPago, totalPago);
    });
    cantidadEnCarrito = carritoCompras.length;
    // * el resultado se redondea al número de decimales deseado utilizando Math.round() y luego se utiliza .toFixed(2) para asegurarse de que el resultado tenga SIEMPRE 2 decimales
    totalPago = (Math.round(totalPago * 100) / 100).toFixed(2);
    cantidadProductos.textContent = cantidadEnCarrito;
    precioProductos.textContent = totalPago;
}

function pagar() {
    console.log("Inicia función para pagar el monto del carrito");
}

//Manipulación del carrito
// ! Esta era la función original para aumentar y decrementar pero se requirió separar
function modificarProducto() {
    // carritoCompras = recibirDatos();
    console.log("Inicia función de modificar producto");
    console.log(carritoCompras);
    let productsAdd;
    let indiceProductoAModificar = verificarIndexProducto(idProduct);

    //* Si el resultado es -1 significa que el carrito esta VACIO o NO EXISTE el producto a evaluar, de lo contrario modificamos en el carrito el producto usando su posición ESPECIFICA con el index obtenido
    if (indiceProductoAModificar != -1) {
        productsAdd = carritoCompras[indiceProductoAModificar];
        if (aumento) {
            productsAdd.cantidad++;
            console.log("Se aumentó");
            console.log("Cantidad del producto despues de aumentar en carrito es: ", productsAdd.cantidad);
            //* Sobreescribimos la cantidad existente del carrito con esta modificación
            // carritoCompras[indiceProductoAModificar].cantidad = productsAdd.cantidad;
        } else if (decremento) {
            if (productsAdd.cantidad > 1) {
                productsAdd.cantidad--;
                console.log("Se disminuyó");
                console.log("Cantidad del producto despues de disminuir en carrito es: ", productsAdd.cantidad);
            } else {
                // productsAdd.cantidad = 1;
                console.log("Aqui deberia ser 0 la cantidad");
                eliminarProducto();
                console.log("Aqui deberiamos tener un elemento menos en el carrito, es lo mismo que eliminar pq la cantidad es 0");
            }
        }
    }

    // seteamos las variables para usarse en la proxima iteración
    aumento = false;
    decremento = false;
    //* Como nota, esta sobreescritura se movió dentro de la condición de a
    carritoCompras[indiceProductoAModificar].cantidad = productsAdd.cantidad;
    // ! Debemos ver como sobreescribir ESPECIFICAMENTE el item del carrito
    const modificarProductoCarrito = document.getElementsByClassName(`cantidad-item-${idProduct}`)[0];
    modificarProductoCarrito.textContent = carritoCompras[indiceProductoAModificar].cantidad;
    // ! Creo que se debe aplicar un appendChild o sustituir
    // despintarCarrito();
    // pintarCarrito(carritoCompras);
    console.log(carritoCompras);
    console.log("Finaliza función modificar producto");
}
// TODO Pendiente el envío de datos a BBDD mediante el metofo POST o PUT, utilizar NodeJS
function modificarProductoAumento() {
    console.log("Inicia función de aumentar producto");
    console.log(carritoCompras);
    let productsAdd;
    let indiceProductoAModificar = verificarIndexProducto(idProduct, productoOCurso);

    //* Si el resultado es -1 significa que el carrito esta VACIO o NO EXISTE el producto a evaluar, de lo contrario modificamos en el carrito el producto usando su posición ESPECIFICA con el index obtenido
    if (indiceProductoAModificar != -1) {
        productsAdd = carritoCompras[indiceProductoAModificar];
        productsAdd.cantidad++;
    }
    console.log("Se aumentó");
    console.log("Cantidad del producto despues de aumentar en carrito es: ", productsAdd.cantidad);

    //* seteamos las variables para usarse en la proxima iteración
    aumento = false;
    //* Como nota, esta sobreescritura se movió dentro de la condición de a
    carritoCompras[indiceProductoAModificar].cantidad = productsAdd.cantidad;
    // ! Debemos ver como sobreescribir ESPECIFICAMENTE el item del carrito
    let modificarProductoCarrito;
    if (productoOCurso) {
        modificarProductoCarrito = document.getElementsByClassName(`cantidad-producto-${idProduct}`)[0];
    }
    else {
        modificarProductoCarrito = document.getElementsByClassName(`cantidad-curso-${idProduct}`)[0];
    }
    modificarProductoCarrito.textContent = carritoCompras[indiceProductoAModificar].cantidad;
    let converToJSON = JSON.stringify(carritoCompras);
    localStorage.setItem("carritoCompras", converToJSON);
    console.log(carritoCompras);
    calcularSubtotalPago();
    // enviarDatosCarrito();
    console.log("Finaliza función modificar producto");
}

function modificarProductoDecremento() {
    console.log("Inicia función de decrementar producto");
    console.log(carritoCompras);
    let productsAdd;
    let indiceProductoAModificar = verificarIndexProducto(idProduct, productoOCurso);
    console.log("Inicia función de decrementar producto en item:", indiceProductoAModificar);

    //* Si el resultado es -1 significa que el carrito esta VACIO o NO EXISTE el producto a evaluar, de lo contrario modificamos en el carrito el producto usando su posición ESPECIFICA con el index obtenido
    if (indiceProductoAModificar != -1) {
        productsAdd = carritoCompras[indiceProductoAModificar];
        if (productsAdd.cantidad > 1) {
            productsAdd.cantidad--;
            carritoCompras[indiceProductoAModificar].cantidad = productsAdd.cantidad;
            // ! Debemos ver como sobreescribir ESPECIFICAMENTE el item del carrito
            let modificarProductoCarrito;
            if (productoOCurso) {
                modificarProductoCarrito = document.getElementsByClassName(`cantidad-producto-${idProduct}`)[0];
            }
            else {
                modificarProductoCarrito = document.getElementsByClassName(`cantidad-curso-${idProduct}`)[0];
            }
            modificarProductoCarrito.textContent = carritoCompras[indiceProductoAModificar].cantidad;
        } else {
            // productsAdd.cantidad = 1;    //Esto es por si queremos que a fuerza se tenga que usar el boton eliminar
            console.log("Aqui deberia ser 0 la cantidad");
            eliminarProducto();
            console.log("Aqui deberiamos tener un elemento menos en el carrito, es lo mismo que eliminar pq la cantidad es 0");
        }
    }
    console.log("Se disminuyó");
    console.log("Cantidad del producto despues de disminuir en carrito es: ", productsAdd.cantidad);

    //* seteamos las variables para usarse en la proxima iteración
    decremento = false;
    let converToJSON = JSON.stringify(carritoCompras);
    localStorage.setItem("carritoCompras", converToJSON);
    console.log(carritoCompras);
    calcularSubtotalPago();
    // enviarDatosCarrito();
    console.log("Finaliza función modificar producto");
}

function eliminarProducto() {
    // https://lenguajejs.com/javascript/dom/insertar-elementos-dom/
    console.log("Inicia función de eliminar producto");
    let indiceProductoAEliminar = verificarIndexProducto(idProduct, productoOCurso);

    //? No se si sea necesario modificar el valor ya que se eliminará
    // carritoCompras[indiceProductoAEliminar].cantidad = 0;

    // * En realidad para que se pueda eliminar un producto debe existir SI o SI, esto es una corroboración extra
    if (indiceProductoAEliminar != -1) {
        carritoCompras.splice(indiceProductoAEliminar, 1);
    }
    let eliminarProductoCarrito;
    // const eliminarProductoCarrito = document.getElementById(`${idProduct}`);
    if (productoOCurso) {
        eliminarProductoCarrito = document.getElementById(`producto-${idProduct}`);
    }
    else {
        eliminarProductoCarrito = document.getElementById(`curso-${idProduct}`);
    }
    eliminarProductoCarrito.remove();
    if (carritoCompras.length == 0) {
        pintarCarrito(carritoCompras);
    }
    console.log("eliminarProducto Cantidad de elementos DESPUES DE ELIMINAR en carrito: ", carritoCompras.length);
    let converToJSON = JSON.stringify(carritoCompras);
    localStorage.setItem("carritoCompras", converToJSON);
    console.log(carritoCompras);
    calcularSubtotalPago();
    // enviarDatosCarrito();
    console.log("Finaliza función eliminar producto");
}

function vaciarProductos() {
    console.log("Inicia función de vaciar productos");

    for (let index = 0; index < carritoCompras.length; index++) {
        const eliminarcontenedorItems = document.querySelector(".contenedor-items");
        eliminarcontenedorItems.remove();
    }

    //? Probar esta idea para ver si limpia el carrito
    carritoCompras = [];
    //?Esto debería vaciar el carrito desde la posición 0 hasta la longitud del arreglo
    carritoCompras.splice(0, carritoCompras.length);
    //?Probar esto tambien
    carritoCompras.length = 0;
    pintarCarrito(carritoCompras);
    console.log("Cantidad de elementos despues de vaciarProductos() en carrito: ", carritoCompras.length);
    console.log(carritoCompras);
    let converToJSON = JSON.stringify(carritoCompras);
    localStorage.setItem("carritoCompras", converToJSON);
    calcularSubtotalPago();
    // enviarDatosCarrito();
    console.log("Finaliza función vaciar productos");
}

/*--------------------------------------------------------------------------------------------------------------------- */
//! Eventos para Modificar cantidad en el carrito
//* Aumentar, Disminuir o Eliminar cantidad
contenidoCarrito.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-aumentar")) {
        e.preventDefault();
        aumento = true;
        evaluarTipo(e);
        modificarProductoAumento();
        console.log("Se presionó botón para aumentar cantidad de productos");
    }
});
contenidoCarrito.addEventListener("click", function (e) {
    // if (e.target.classList.contains("producto")) {
    //     productoOCurso = true;
    //     console.log("Se presionó un producto");
    // }
    // if (e.target.classList.contains("curso")) {
    //     productoOCurso = false;
    //     console.log("Se presionó un curso");
    // }
    if (e.target.classList.contains("btn-disminuir")) {
        e.preventDefault();
        decremento = true;
        evaluarTipo(e);
        modificarProductoDecremento();
        console.log("Se presionó botón para disminuir cantidad de productos");
    }
});
contenidoCarrito.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-delet")) {
        e.preventDefault();
        evaluarTipo(e);
        eliminarProducto(); //ejecuta la funcion eliminar
        console.log("Se presionó boton para eliminar un productos");
    }
});
// btnVaciarProducts.forEach(function (boton) {
//     boton.addEventListener("click", (e) => {
//         e.preventDefault();
//         if (carritoCompras.length != 0) {
//             vaciarProductos();
//         }
//         console.log("Se presionó boton para vaciar carrito");
//     })
// });

btnVaciarProducts.addEventListener("click", (e) => {
    e.preventDefault();
    if (carritoCompras.length != 0) {
        vaciarProductos();
    }
    console.log("Se presionó boton para vaciar carrito");
});

btnPagar.addEventListener("click", (e) => {
    e.preventDefault();
    if (carritoCompras.length != 0) {
        pagar();
    }
    console.log("Se presionó boton para pagar carrito");
});

/*--------------------------------------------------------------------------------------------------------------------- */
// https://lenguajejs.com/javascript/dom/insertar-elementos-dom/
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// https://developer.mozilla.org/es/docs/Web/API/fetch
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed