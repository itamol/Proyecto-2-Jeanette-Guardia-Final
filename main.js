//Seleccionador//
let menuItem = document.querySelectorAll(".menu-list");
menuItem.forEach(function (item){
     item.addEventListener("click", function(el){
         const currentItem = document.querySelector(".active");
         currentItem.classList.remove("active");
        el.target.classList.add("active");
});
});

//Cambio de imagen de perfil//

let perfilImg = document.querySelector(".perfil-img");
perfilImg.addEventListener("click", function() {
    perfilImg.src = "img/Jeanet3.jpg";
});

perfilImg.addEventListener("dblclick", function() {
    perfilImg.src = "img/Foto Jeannette2.jpeg";
});