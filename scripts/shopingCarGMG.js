//VARIABLES && CONSTANTES
let idProduct; //Aqui debe ir el id del producto seleccionado para hacer match con el carrito de compras
let inputNumProduct; //Input de tipo number (valor en carrito minimo 1) para que el usuario MODIFIQUE PRODUCTOS
let cantidadEnCarrito = 0; //Aqui para saber cuantos objetos hay en el carrito, aunque podriamos saberlo con el metodo .length

// Aumento y Decremento de productos
// Esto es temporal, hay que ver si se utilizan botones para aumentar y disminuir o un input type text (Sugerencia original)

// productos 

// carrito
let aumento = false;
let decremento = false;
let eliminar = false;

//ARRAYS & OBJETOS
let shopingCar = [];    //Vacio al inicio

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
        id: 2, src: "https://images.pexels.com/photos/7172068/pexels-photo-7172068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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

//FUNCIONES

//Verificamos que exista el producto en el carrito y podemos hacer condiciones dependiendo del resultado (agregar producto o solo modificar cantidad)
function verificarExistencia(idProduct) {
    //Creamos una variable temporal que almacena el resultaddo del metodo .find()
    //Creamos una función callback (function(productoSolicitado)) que retorna un valor booleano
    //Definimos el criterio de busqueda (que los id´s coincidad)
    let productoExiste = shopingCar.find(function (productoSolicitado) {
        productoExiste.id === idProduct;
    });
    //Retornamos true o falso, le pusimos que sea !Diferente de undefined para que no se despapaye
    return productoExiste !== undefined;
}
function verificarCantidadProductos() {
    let cantidadActual;

}

function agregarProducto() {
    // *Deberia salir un mensaje de "Producto Agregado"
    console.log("Inicia función de agregar producto");

    //Si el producto NO existe en el carrito entonces lo agregamos
    if (verificarExistencia(!idProduct)) {
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
        crearProducto();
    }
    else {
        //! Hay que ver si se mantiene esta condición o se queda que solo se pueda agregar el producto una vez
        //Y cuando se le de de nuevo NO se gregue otro ni haga nada, si no que se MODIFIQUE la cantidad en el carrito
        modificarProducto();
    }


    console.log("Finaliza función agregar producto");
}

//Se crean las "tarjetas de los productos" en la pagina o apartado del carrito de compras
//!Verificar como se va actualizar la tarejeta del producto carrito al seleccionar el 
function crearProducto() {
    console.log("Inicia función de crear producto");
    //Obtengo las propiedades del objeto en variables temporales
    let srcImg = productsAdd.src;
    let h3Product = productsAdd.nombre;
    let pPrice = productsAdd.precio;
    //!Verificar si la cantidad debe ir aqui
    let inputNumber = productsAdd.cantidad;
    //Se crea un contenedor div para colocar el producto agregado
    const productCard = document.createElement("div");
    //Le damos un espaco
    const brProduct = document.createElement("br");
    //Creamos el producto que se agregará al carrito de compras
    //Por defecto se agrega 1 solo producto, hay que entrar al carrito de compras para poder agregar mas elementos del mismo o eliminarlo
    productCard.innerHTML = `
    <br>
        <img src = "${srcImg}" alt = "Imagen Producto" width="300px" height="300px">
        <br>
        <div id="data-product-shopingCar">
        <div id="h-p-data-product">
            <h3>${h3Product}</h3>
            <p> Precio: $ ${pPrice}</p>
            </div>
            <div class="btn-data-product">
            <input type="number" value="1" min="1" class="num-product" />
            <button class="btn-delet">Eliminar</button>
            </div>
        </div>
        <br>
    `;
    //Colocamos el producto en el carrito
    container.appendChild(productCard);
    container.appendChild(brProduct);
    console.log("Cantidad de elementos ACTUAL en carrito: ", shopingCar.length);
    console.log("Finaliza función crear producto");
}

function modificarProducto() {
    console.log("Inicia función de modificar producto");
    //? Se necesita hacer una comparación de la cantidad actual de productos y se suma 1
    // Creamos una variable temporal que va almacenar el valor ACTUAL del producto(objeto) en el carrito
    // Independientemente del valor que haya (inicialmente 0), se aumentará en 1
    let cantidadActualizada;
    if (aumento) {
        cantidadActualizada = (shopingCar[idProduct].cantidad) + 1;
    } else if (decremento) {
        if (cantidadActualizada > 0) {
            cantidadActualizada = (shopingCar[idProduct].cantidad) - 1;
        } else {
            cantidadActualizada = 1;
        }
    }
    // Sobreescribimos la cantidad existente del carrito con esta modificación
    shopingCar[idProduct].cantidad = cantidadActualizada;

    console.log("Cantidad actual del producto " + (shopingCar[idProduct].id) + (shopingCar[idProduct].cantidad));
    console.log("Finaliza función modificar producto");
}

function eliminarProducto() {
    console.log("Inicia función de eliminar producto");
    //? No se si sea necesario modificar el valor ya que se eliminará
    shopingCar[idProduct].cantidad = 0;
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
        shopingCar.splice(idProduct, 1);
    }
    console.log("eliminarProducto Cantidad de elementos ACTUAL en carrito: ", shopingCar.length);
    console.log("Finaliza función eliminar producto");
}

function vaciarProductos() {
    console.log("Inicia función de vaciar productos");
    // Probar esta idea para ver si limpia el carrito
    shopingCar = [];
    //Esto debería vaciar el carrito desde la posición 0 hasta la longitud del arreglo
    shopingCar.splice(0, shopingCar.length);
    //Probar esto tambien
    shopingCar.length = 0;
    console.log("vaciarProductos Cantidad de elementos ACTUAL en carrito: ", shopingCar.length);
    console.log("Finaliza función vaciar productos");
}

function comprar(){
    
}