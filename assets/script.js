"use strict";

/*----------------------------------------*/
/* Gestion du menu burger en format mobile*/
/*----------------------------------------*/

const burger = document.querySelector(".burger");
const menu = document.querySelector(".ul-navbar");
const mobileLinks = document.querySelectorAll(".ul-navbar li a");
burger.addEventListener("click", function () {
  menu.classList.toggle("show");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Vérifiez si le menu est visible (la classe 'show' est présente)
    if (menu.classList.contains("show")) {
      // Masquez le menu en supprimant la classe 'show'
      menu.classList.remove("show");
    }
  });
});
document.addEventListener("click", function (event) {
  // Vérifiez si l'élément cliqué est en dehors du menu et du bouton burger
  if (!menu.contains(event.target) && !burger.contains(event.target)) {
    // Si c'est le cas, supprimez la classe 'show' du menu
    menu.classList.remove("show");
  }
});

/*----------------------------------------*/
/* Gestion du menu burger en format mobile*/
/*----------------------------------------*/

/*----------------------------------------*/
/* Gestion des accordions*/
/*----------------------------------------*/


let acc = document.getElementsByClassName("accordion");
console.log(acc);
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let accordionContent = this.nextElementSibling;
    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
}

/*----------------------------------------*/
/* Gestion des accordions*/
/*----------------------------------------*/