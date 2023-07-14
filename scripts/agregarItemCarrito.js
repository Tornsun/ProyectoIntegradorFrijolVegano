const cantidadItems = [];
var numeroItemsCarrito = document.querySelector(".numero-items");
var botonAgregar = document.querySelector(".boton-agregar");
var carritoItems = document.querySelector(".numero-items");

/*Función para agregar productos al carrito*/
function agregarItem() {
    let id = localStorage.getItem("carrito");

    //Si es el primer producto lo agrega al carrito
    if (cantidadItems.length == 0) {
        cantidadItems.push(id);
        numeroItemsCarrito.innerHTML = cantidadItems.length;
    }

    //Si el id ya fue agregado manda un mensaje de que ya se agregó al carrito y modifica el id para que no pase la siguiente prueba
    else {
        for (i = 0; i < cantidadItems.length; i++) {
            if (id == cantidadItems[i]) {
                alert("Este producto ya fue agregado a tu carrito");
                id = -1;
            }
        }

    //Si pasó el filtro anterior, significa que es un elemento que no fue seleccionado y por ende lo agrega al carrito 
        if (id != -1) {
            cantidadItems.push(id);
            numeroItemsCarrito.innerHTML = cantidadItems.length;
            console.log(cantidadItems);
        }
    }
}
/*Termina función para agregar productos al carrito*/


/*Funcion del botón */
    // botonAgregar.addEventListener("click", function () {
    //     localStorage.setItem("carrito", card.id);
    //     agregarItem();
    // });
    /*Termina función del boton */