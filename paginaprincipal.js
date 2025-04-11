// Mostrar/ocultar menú del usuario
document.addEventListener("DOMContentLoaded", function () {
    const userBtn = document.querySelector('.user-btn');
    const userMenu = document.querySelector('.user-menu');

    userBtn.addEventListener('click', function () {
        userMenu.classList.toggle('show');
    });

    // Cerrar el menú si se hace clic fuera
    window.addEventListener('click', function (e) {
        if (!userBtn.contains(e.target) && !userMenu.contains(e.target)) {
            userMenu.classList.remove('show');
        }
    });

const imagenHero = document.getElementById("imagen-hero");
const btnIzquierda = document.querySelector(".carrusel-btn.izquierda");
const btnDerecha = document.querySelector(".carrusel-btn.derecha");

const imagenes = [
  "img-inicio/aguacate01.jpeg",
  "img-inicio/aguacate02.jpeg",
  "img-inicio/aguacate03.jpeg",
  "img-inicio/aguacate04.jpeg",
  "img-inicio/aguacate05.jpeg",
  "img-inicio/aguacate06.jpeg"
];

let indiceActual = 0;

function mostrarImagen(indice) {
  imagenHero.src = imagenes[indice];
}

btnIzquierda.addEventListener("click", () => {
  indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(indiceActual);
});

btnDerecha.addEventListener("click", () => {
  indiceActual = (indiceActual + 1) % imagenes.length;
  mostrarImagen(indiceActual);
});


//  Funcionalidad del botón "Suscríbete"
const botonSuscribirse = document.getElementById('boton-suscribirse');
if (botonSuscribirse) {
    botonSuscribirse.addEventListener('click', () => {
        window.location.href = 'suscribirse.html'; // Reemplaza con tu ruta real
    });
}
});



// Mostrar/ocultar menú del usuario
document.addEventListener("DOMContentLoaded", function () {
const userBtn = document.querySelector('.user-btn');
const userMenu = document.querySelector('.user-menu');

userBtn.addEventListener('click', function () {
    userMenu.classList.toggle('show');
});

// Cerrar el menú si se hace clic fuera
window.addEventListener('click', function (e) {
    if (!userBtn.contains(e.target) && !userMenu.contains(e.target)) {
        userMenu.classList.remove('show');
    }
    });

});

  