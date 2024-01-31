const menuIcon = document.getElementsByClassName("fa-bars")[0];
const closeIcon = document.getElementsByClassName("fa-xmark")[0];
const navMenu = document.getElementsByClassName("nav-menu")[0];
const liMenu = document.getElementsByClassName("li-menu");

menuIcon.addEventListener("click", function() {
    // Ajout de la classe "hidden" à menuIcon
    menuIcon.classList.add("hidden");
  
    // Suppression de la classe "hidden" de closeIcon
    closeIcon.classList.remove("hidden");
    navMenu.classList.remove("hidden");
});

closeIcon.addEventListener("click", function() {
    // Ajout de la classe "hidden" à closeIcon
    closeIcon.classList.add("hidden");
    navMenu.classList.add("hidden");
  
    // Suppression de la classe "hidden" de menuIcon
    menuIcon.classList.remove("hidden");
});

// Ajoutez l'événement à chaque élément de la collection liMenus
for (let i = 0; i < liMenu.length; i++) {
    liMenu[i].addEventListener("click", function() {
        closeIcon.classList.add("hidden");
        navMenu.classList.add("hidden");
        menuIcon.classList.remove("hidden");
    });
}

