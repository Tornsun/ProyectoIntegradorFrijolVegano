const navBar = document.querySelector(".navBar");

//Contenedor navBar

//Inicia navbar superior

const navBarSuperior = document.createElement("div");
navBarSuperior.className="navBarSuperior";
//Termina contenedor navBar

//Menu hamburguesa
const menuHamburguesa = document.createElement("div");
menuHamburguesa.className = "menu-hamburguesa";

const logoMenuHamburguesa = document.querySelector("#logo-menu-hamburguesa");

/*Insetando el menu hamburguesa*/
menuHamburguesa.appendChild(logoMenuHamburguesa);
navBarSuperior.appendChild(menuHamburguesa);

//Termina menu hamburguesa


//Inicia logo frijol vegano
const contenedorLogoFrijolVegano = document.createElement("div");
contenedorLogoFrijolVegano.className="logo";
const logoFrijolVegano = document.querySelector("#logo-frijol-vegano");

/*Insertando el logo de Frijol Vegano*/
contenedorLogoFrijolVegano.appendChild(logoFrijolVegano);
navBarSuperior.appendChild(contenedorLogoFrijolVegano);

//Termina logo frijol vegano

//Inicia barra de búsqueda
const contenedorBarraBusqueda = document.createElement("div");
contenedorBarraBusqueda.className="contenedor-barra-busqueda";

const barraBuscar = document.createElement("input");
barraBuscar.className="barra-buscar";
barraBuscar.type="text-box";
barraBuscar.placeholder = "Buscar";

const botonBuscar = document.createElement("div");
botonBuscar.className="boton-buscar";

const logoBuscar = document.querySelector("#logo-buscar");


/*Insertando la barra de búsqueda */
botonBuscar.appendChild(logoBuscar);
contenedorBarraBusqueda.appendChild(barraBuscar);
contenedorBarraBusqueda.appendChild(botonBuscar);
navBarSuperior.appendChild(contenedorBarraBusqueda);
//Termina barra de búsqueda

//Inicia logos
const logos = document.createElement("div");
logos.className="logos";

const logoUsuario = document.querySelector("#logo-usuario-a");
const logoCarrito = document.querySelector("#logo-carrito-a");

const contenedorNumeroItems = document.createElement("div");
contenedorNumeroItems.className="contenedor-numero-items";
var numeroItems = document.createElement("p");
numeroItems.className="numero-items";
numeroItems.innerHTML = 0;

  
/*Función para obtener cantidad de items */


/*Termina Función para obtener cantidad de items */




/*Insertando logos*/
logos.appendChild(logoUsuario);
logos.appendChild(logoCarrito);
contenedorNumeroItems.appendChild(numeroItems);
logos.appendChild(contenedorNumeroItems);
navBarSuperior.appendChild(logos);
//Termina logos

//Insertando la navbar superior
navBar.prepend(navBarSuperior);

//Termina navbar superior

//Inicia navbar secundaria

//Contenedor navbar inferior
const navBarInferior = document.createElement("div");
navBarInferior.className="navBarInferior";

//Lista de links
var navLinks = document.createElement("ul");
navLinks.className="nav-links";

var lista1 = document.createElement("li");
lista1.id="id-barra-buscar-menu-hamburguesa";

var contenedorBarraBusquedaMenuHamburguesa = document.createElement("div");
contenedorBarraBusquedaMenuHamburguesa.className="contenedor-barra-busqueda-menu-hamburguesa";

const barraBuscarMenuHamburguesa = document.createElement("input");
barraBuscarMenuHamburguesa.className="barra-buscar-menu-hamburguesa";
barraBuscarMenuHamburguesa.type = "textbox";
barraBuscarMenuHamburguesa.placeholder="Buscar";

const botonBuscarMenuHamburguesa = document.createElement("div");
botonBuscarMenuHamburguesa.className="boton-buscar-menu-hamburguesa";

const logoBuscarMenuHamburguesa = document.querySelector("#logo-buscar-menu-hamburguesa");

//Inicio
var lista2 = document.createElement("li");
var aIndex = document.createElement("a");
aIndex.href="./index.html";
aIndex.innerHTML="Inicio";

//Productos
var lista3 = document.createElement("li");
var aProductos = document.createElement("a");
aProductos.href="./productos.html";
aProductos.innerHTML="Productos";

//Productos
var lista4 = document.createElement("li");
var aNosotros = document.createElement("a");
aNosotros.href="./acercaDeNosotros.html";
aNosotros.innerHTML="Nosotros";

//Contacto
var lista5 = document.createElement("li");
var aContacto = document.createElement("a");
aContacto.href="./contactanos.html";
aContacto.innerHTML="Contacto";



/*Insertando barra secundaria */

contenedorBarraBusquedaMenuHamburguesa.appendChild(barraBuscarMenuHamburguesa);
botonBuscarMenuHamburguesa.appendChild(logoBuscarMenuHamburguesa);
contenedorBarraBusquedaMenuHamburguesa.appendChild(botonBuscarMenuHamburguesa);
lista1.appendChild(contenedorBarraBusquedaMenuHamburguesa);
navLinks.appendChild(lista1);

lista2.appendChild(aIndex);
navLinks.appendChild(lista2);

lista3.appendChild(aProductos);
navLinks.appendChild(lista3);

lista4.appendChild(aNosotros);
navLinks.appendChild(lista4);

lista5.appendChild(aContacto);
navLinks.appendChild(lista5);


navBarInferior.appendChild(navLinks);
navBar.appendChild(navBarInferior);
//Termina navbar secundaria


//Menu hamburguesa
var botonMenuHamburguesa = document.querySelector(".menu-hamburguesa");

botonMenuHamburguesa.addEventListener("click", function(){
    if(navBarInferior.classList != "navBarInferior visible"){
        navBarInferior.classList.add("visible");
    }

    else{
        navBarInferior.classList.remove("visible");
    }
    
});
//Termina menú hamburguesa

//Termina contenedor navbar





//Footer
const footer = document.querySelector(".footer");


//Redes sociales izquierda
const redesSocialesIzquierda = document.createElement("div");
redesSocialesIzquierda.className="redesSocialesIzquierda";

//Creación de íconos izquierda

//Instagram
const aInstagramIzq = document.createElement("a");
aInstagramIzq.href="https://instagram.com/frijolvegano";

const imgInstagramIzq = document.createElement("img");
imgInstagramIzq.src="../assets/img/Instagram.png";

//Facebook
const aFacebookIzq = document.createElement("a");
aFacebookIzq.href="https://www.facebook.com/FrijolVegano/";

const imgFacebookIzq = document.createElement("img");
imgFacebookIzq.src="../assets/img/Facebook.png";

//Whatsapp
const aWhatsappIzq = document.createElement("a");
aWhatsappIzq.href="https://wa.me/message/EYIG5NRSYCEJE1";

const imgWhatsappIzq = document.createElement("img");
imgWhatsappIzq.src="../assets/img/WhatsApp.png";

//Termina Creación de íconos izquierda

/*Insertando Redes sociales izquierda*/
aInstagramIzq.appendChild(imgInstagramIzq);
redesSocialesIzquierda.appendChild(aInstagramIzq);

aFacebookIzq.appendChild(imgFacebookIzq);
redesSocialesIzquierda.appendChild(aFacebookIzq);

aWhatsappIzq.appendChild(imgWhatsappIzq);
redesSocialesIzquierda.appendChild(aWhatsappIzq);

//Termina redes sociales izquierda



//Texto izquierda
const contenedorTextoIzquierda = document.createElement("div");
contenedorTextoIzquierda.className="textoIzquierda";

const aAvisoDePrivacidad = document.createElement("a");
aAvisoDePrivacidad.href="./avisoDePrivacidad.html";
aAvisoDePrivacidad.innerHTML = "Aviso de privasidad";

const aPoliticaDeEnvio = document.createElement("a");
aPoliticaDeEnvio.href="./politicasEnvio.html";
aPoliticaDeEnvio.innerHTML = "Politica de Envio";

const derechosReservados = document.createElement("p");
derechosReservados.innerHTML = "Derechos Reservados Frijol Vegano®";

/*Insertando Texto izquierda*/
contenedorTextoIzquierda.appendChild(aAvisoDePrivacidad);
contenedorTextoIzquierda.appendChild(aPoliticaDeEnvio);
contenedorTextoIzquierda.appendChild(derechosReservados);

//Termina texto izquierda



//Inicia Redes sociales central
const redesSocialesCentral = document.createElement("div");
redesSocialesCentral.className="redesSocialesCentral";

//Creación de íconos central

//Instagram
const aInstagramCent = document.createElement("a");
aInstagramCent.href="https://instagram.com/frijolvegano";

const imgInstagramCent = document.createElement("img");
imgInstagramCent.src="../assets/img/Instagram.png";

//Facebook
const aFacebookCent = document.createElement("a");
aFacebookCent.href="https://www.facebook.com/FrijolVegano/";

const imgFacebookCent = document.createElement("img");
imgFacebookCent.src="../assets/img/Facebook.png";

//Whatsapp
const aWhatsappCent = document.createElement("a");
aWhatsappCent.href="https://wa.me/message/EYIG5NRSYCEJE1";

const imgWhatsappCent = document.createElement("img");
imgWhatsappCent.src="../assets/img/WhatsApp.png";

//Termina Creación de íconos central

/*Insertando Redes sociales central*/

aInstagramCent.appendChild(imgInstagramCent);
redesSocialesCentral.appendChild(aInstagramCent);

aFacebookCent.appendChild(imgFacebookCent);
redesSocialesCentral.appendChild(aFacebookCent);

aWhatsappCent.appendChild(imgWhatsappCent);
redesSocialesCentral.appendChild(aWhatsappCent);

//Termina redes sociales central


//Texto derecha
const contenedorTextoDerecha = document.createElement("textoDerecha");
contenedorTextoDerecha.className="textoDerecha";

const telefono = document.createElement("p");
telefono.innerHTML="Teléfono: (+52) 811 479 6150";

const direccion = document.createElement("p");
direccion.innerHTML = "Rafael Garza Cantú 3412 Col. Hidalgo, Monterrey, Nuevo León";

/*Insertando texto derecha*/
contenedorTextoDerecha.appendChild(telefono);
contenedorTextoDerecha.appendChild(direccion);

//Termina texto derecha

footer.appendChild(redesSocialesIzquierda);
footer.appendChild(contenedorTextoIzquierda);
footer.appendChild(redesSocialesCentral);
footer.appendChild(contenedorTextoDerecha);


//Termina footer




