document.addEventListener("DOMContentLoaded", function () {
  // Menú de usuario
  const userBtn = document.querySelector('.user-btn');
  const userMenu = document.querySelector('.user-menu');

  if (userBtn && userMenu) {
      userBtn.addEventListener('click', function () {
          userMenu.classList.toggle('show');
      });

      window.addEventListener('click', function (e) {
          if (!userBtn.contains(e.target) && !userMenu.contains(e.target)) {
              userMenu.classList.remove('show');
          }
      });
  }

  // Menú hamburguesa
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
          navLinks.classList.toggle('active');
          hamburger.classList.toggle('active'); // para la animación
      });

      window.addEventListener('click', function (e) {
          if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
              navLinks.classList.remove('active');
              hamburger.classList.remove('active');
          }
      });
  }
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const navDropdown = document.querySelector(".nav-dropdown");

  if (dropdownBtn && navDropdown) {
      dropdownBtn.addEventListener("click", function (e) {
          e.preventDefault();
          navDropdown.classList.toggle("show");
      });

      window.addEventListener("click", function (event) {
          if (!navDropdown.contains(event.target) && !dropdownBtn.contains(event.target)) {
              navDropdown.classList.remove("show");
          }
          const botonSuscribirse = document.getElementById('boton-suscribirse');
          if (botonSuscribirse) {
              botonSuscribirse.addEventListener('click', () => {
                  window.location.href = 'suscribirse.html'; // Reemplaza con tu ruta real
              });
          }
      });
  }
});


// Scroll efecto en navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 0);
  }
});

const imagenHero = document.getElementById("imagen-hero");
const btnIzquierda = document.querySelector(".carrusel-btn.izquierda");
const btnDerecha = document.querySelector(".carrusel-btn.derecha");

const imagenes = [
  "img/aguacate01.jpeg",
  "img/aguacate02.jpeg",
  "img/aguacate03.jpeg",
  "img/aguacate04.jpeg",
  "img/aguacate05.jpeg",
  "img/aguacate06.jpeg"
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


  