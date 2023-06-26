//VARIABLES && CONSTANTES
//Productos
// const btnAddProduct = document.querySelector("#btn-add-product");
const btnAddProduct = document.querySelectorAll(".btn-add-product");//Alacenamos la class del boton gregar producto
let idProduct = 0; //Aqui debe ir el id del producto seleccionado

// const botones = document.querySelectorAll('.btn-add-product');


//Carrito de compras
let container = document.querySelector(".product-container");//Contenedor de productos del carrito
const inputNumProduct = document.querySelectorAll(".num-product");//Input de tipo number (valor en carrito minimo 1) para que el usuario MODIFIQUE PRODUCTOS
const btnAddDeletProduct = document.querySelectorAll("#btn-delet");//Boton para eliminar producto
let statusShopingCar = false;
let statusProductInShopingCar = false;

//ARRAYS & OBJETOS
//Carrito de compras
let shopingCar = [];    //Vacio al inicio

let productsArray = [   //10 objetos JavaScript de muestra 
    {
        id: 1,
        src: "https://images.pexels.com/photos/4281821/pexels-photo-4281821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombre: "Aguacate Orgánico por pieza",
        precio: 15.50,
        cantidad: 1
    },
    {
        id: 2,
        src: "https://images.pexels.com/photos/6072378/pexels-photo-6072378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombre: "HotCakes Veganos (3 piezas)",
        precio: 159.90,
        cantidad: 1
    },
    { id: 3, src: "https://images.pexels.com/photos/7172068/pexels-photo-7172068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nombre: "Pizza Vegana", precio: 499.00, cantidad: 1 },
    {
        id: 3,
        src: "https://images.pexels.com/photos/7172068/pexels-photo-7172068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombre: "Pizza Vegana",
        precio: 499.00,
        cantidad: 1
    },
    {
        id: 4,
        src: "https://images.pexels.com/photos/12829942/pexels-photo-12829942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombre: "Calabazas y pimientos",
        precio: 250.70,
        cantidad: 1
    },
    {
        id: 5,
        src: "https://images.pexels.com/photos/5966433/pexels-photo-5966433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nombre: "Platón de frutas Orgánicas",
        descripcion: "Este es un platón de frutas veganas",
        precio: 350.99,
        cantidad: 1
    }
];
//Productos
//!Verificar si se almacena en un array de objetos o en objetos individuales
// let producto01 = {
//     id : 1,
//     src: "https://images.pexels.com/photos/4281821/pexels-photo-4281821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     nombre : "Aguacate Orgánico por pieza",
//     precio: 15.50,
//     cantidad: 1
// };

// let producto02 = {
//     id : 2,
//     src: "https://images.pexels.com/photos/6072378/pexels-photo-6072378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     nombre : "HotCakes Veganos (3 piezas)",
//     precio: 159.90,
//     cantidad: 1
// };

// let producto03 = {
//     id : 3,
//     src: "https://images.pexels.com/photos/7172068/pexels-photo-7172068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     nombre : "Pizza Vegana",
//     precio: 499.00,
//     cantidad: 1
// };

// let producto04 = {
//     id : 4,
//     src: "https://images.pexels.com/photos/12829942/pexels-photo-12829942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     nombre : "Calabazas y pimientos",
//     precio: 250.70,
//     cantidad: 1
// };

// let producto05 = {
//     id : 5,
//     src: "https://images.pexels.com/photos/5966433/pexels-photo-5966433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     nombre : "Platón de frutas Orgánicas",
//     descripcion: "Este es un platón de frutas veganas",
//     precio: 350.99,
//     cantidad: 1
// };


//EVENTOS
//Creamos el evento para hacer click y ejecutar la función agregarProducto
// btnAddProduct.addEventListener("click", AddProduct);
// btnAddProduct.addEventListener("click", (e) => {
//     e.preventDefault(); //prevenir que el navegador se actualice
//     addProduct(); //ejecuta la funcion traerPokemon
//     console.log("Se presionó boton para agregar producto");
// }
// );

// Iteramos sobre los botones y asignarles el event listener de agregar producto
btnAddProduct.forEach(function (boton) {
    // boton.addEventListener('click', addProduct);
    boton.addEventListener("click", (e) => {
        e.preventDefault(); //prevenir que el navegador se actualice
        addProduct(); //ejecuta la funcion traerPokemon
        console.log("Se presionó boton para agregar producto");
    })
});

// Iteramos sobre el input de la cantidad de productos deseados y ejecutamos función para MODIFICAR la cantidad d eproductos del carrito
//!Esto aun no funciona
inputNumProduct.addEventListener("click", modifyProduct);


//FUNCIONES
//Función para obtener el ID del producto segun el boton presionado
function obtenerId(boton) {
    idProduct = parseInt(boton.id); // Almacena el ID del botón en la variable idProduct, lo pasamos a int para utilizarlo como indice
    //Esto es para verificar en la consola que se obtenga el valor deseado
    console.log('ID del botón:', idProduct);
}

//Función para AGREGAR producto al carrito, sirve para CUALQUIER boton de producto, se lanza en los eventos
function addProduct() {
    // Aqui verificamos que entre  la función  
    console.log("Entró la función AddProduct();");
    //!Necesito relacionar los productos con los botones de html
    //Obtengo el objeto del array
    //let productArray = shopingCar[idProduct];
    let productsAdd = productsArray[idProduct];
    //verificamos en consola cual es el objeto que se almaceno, esto es solo corroboración
    console.log(productsAdd);

    // Agregamos al final un producto al carrito de compras con un push
    shopingCar.push(productsAdd);
    //verificamos en consola cual es el objeto que se almaceno en el carrito, esto es solo corroboración
    console.log(shopingCar);


    //Obtengo las propiedades del objeto en variables temporales
    let srcImg = productsAdd.src;
    let h3Product = productsAdd.nombre;
    let pPrice = productsAdd.precio;
    let inputNumber = productsAdd.cantidad;

    // console.log(srcImg);
    // console.log(h3Product);
    // console.log(pPrice);
    // console.log(inputNumber);

    // let srcImg = productArray.src;
    // let h3Product = productArray.nombre;
    // let pPrice = productArray.precio;
    // let inputNumber = productArray.cantidad;

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
    alert('¡Se agregó producto al carrito!');
    console.log("Aqui ya anexé el bloque de producto agregado");
}


//!Mover el codigo de crear producto aqui para no tenerlo en agregar producto ya que lo dejaremos especificamente para agregar producto a carrito
function createProduct() {
    //!Aqui vamos a condicionar que se cree/anexe hacia abajo el producto solo si NO existe previamente, es decir que NO este en el carrito y su atributo CANTIDAD sea 0

    //!Si la propiedad cantidad es DIFERENTE de cero Creamos, si no solo modificamos esta propiedad aumentando o disminuyendo en la función modifyProduct();
    modifyProduct();
}

//Función para MODIFICAR producto del carrito
function modifyProduct() {
    console.log("Se presionó boton para MODIFICAR numero de productos del mismo que se desera comprar");
    //Verificar cuantos productos hay en el carrito
    console.log("Cantidad de elementos ACTUAL en carrito: ", shopingCar.length);

    //Actualizamos la cantidad de productos
    //Verificoamos si el producto existe dentro del carrito de compras para poder modificarlo, si existe se actualiza la cantidad, si no, no hago nada. Todo esto se evalua con base en el id que estoy buscando y este debe coincidir con el id del producto que deberia tener dentro del carrito de compras.
    let productoExiste = shopingCar.find(function (productsAdd) {
        return productsAdd.id === idProduct; //true or false
    })
    if (productoExiste) {
        //Se debe modificar el atributo cantidad del producto DEL CARRITO DE COMPRAS
        shopingCar[productsAdd.cantidad] = inputNumber; //Se recibe el valor del Input de tipo number
        console.log("Producto existe");
    }
}

//Función para ELIMINAR producto del carrito
function deletProduct() {

}

//Función para ELIMINAR producto del carrito
// function deletProduct() {

// }
