var botonMenuHamburguesa = document.querySelector(".menu-hamburguesa");
var navBarInferior = document.querySelector(".navBarInferior");

botonMenuHamburguesa.addEventListener("click", function(){
    if(navBarInferior.classList != "navBarInferior visible"){
        navBarInferior.classList.add("visible");
    }

    else{
        navBarInferior.classList.remove("visible");
    }
    
});

