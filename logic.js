const arrowLeft = document.querySelector("#arrowLeft");  // slider images,acceder al elemento del html)
const arrowRight = document.querySelector("#arrowRight"); 
const images = document.querySelectorAll(".slider-img"); // seleccionar todos los que tengan la clase slider-img
// menu en responsive 
const menuIcon = document.querySelector("#barsIcon");
const menu = document.querySelector("#menu");
const navlinks = document.querySelectorAll(".navlink");
let position = 200;

arrowLeft.addEventListener("click", moveLeft); // le agregan la funcion al elemento
arrowRight.addEventListener("click", moveRight);

// menu en responsive 
menuIcon.addEventListener("click", showMenu);

//menu en responsive 
for (let i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener("click", showMenu);
}

function moveLeft() {  // si llega a la posicion inicial lo devuelva a la ultima
  if (position === 0) {
    position = position + 400;
  } else {
    position = position - 100; // le va restar una posicion
  }
  for (let i = 0; i < images.length; i++) {
    images[i].style.right = `${position}%`;
  }
}

function moveRight() {
  if (position === 400) {  //si llega a la posicion final se devuelva a la inicial
    position = position = 0;
  } else {
    position = position + 100;
  }

  for (let i = 0; i < images.length; i++) {   // le paso la posicion a todas las imagenes, 
    images[i].style.right = `${position}%`;
  }
}

// menu en responsive 
function showMenu() {
  menu.classList.toggle("toggleMenu"); // toggleMenu para que se muestre y se oculte 
}
