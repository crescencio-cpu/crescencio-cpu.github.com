/*
console.log("Hola mundo desde archivo externo de JavaScript");
//! DOM
//? querySelector(para un elemento)
//? querySelectorAll(para dos o mas elemntos)
let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
})

let celdas = document.querySelectorAll("td");


celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log(this);
    })
})
*/
//! obtener los elementso de la clase .close
let links = document.querySelectorAll(".close")
//! recorrerlos
links.forEach(function (link) {
    //! agregar un evento clock a cada uno de ellos - case sensitive
    link.addEventListener("click", function (ev) {
        ev.preventDefault();
        //! Primero obtener el elemento
        let content = document.querySelector(".content");

        //? Quitarle las clases de animacion que ya tiene
        content.classList.remove("animate__bounceIn");
        content.classList.remove("animate__animated");
        //? Agregar clases para animar su salida
        content.classList.add("animate__backOutUp");
        content.classList.add("animate__animated");
        //! poner lento la animacion o la carga 
        //? despues de cierto tiempo solo una vez
        setTimeout(function () {
            location.href = "../index.html";
        }, 600);
        //! tiempo de espre se coloco despues de cerrar {},tiempo 1seg=1000
        //? despues de cierto tiempo constantemente
        //!  setInterval
        // ? importenta poner bien la ubicacion

        return false;
    });
})
/*
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    //! elimina el elemento
    icono.classList.remove("fa-star");
    //! añade el elemento
    icono.classList.add("fa-star");

})
*/