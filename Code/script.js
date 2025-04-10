
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

let tarjetaExpandida = null;

function expandirTarjeta(tarjeta) {
  if (tarjetaExpandida && tarjetaExpandida !== tarjeta) {
    tarjetaExpandida.classList.remove("expandida");
  }

  tarjeta.classList.add("expandida");
  document.querySelector(".overlay").classList.add("activo");
  document.body.classList.add("bloquear-scroll");
  tarjetaExpandida = tarjeta;
}

function cerrarTarjetaExpandida() {
  if (tarjetaExpandida) {
    tarjetaExpandida.classList.remove("expandida");
    tarjetaExpandida = null;
  }

  document.querySelector(".overlay").classList.remove("activo");
  document.body.classList.remove("bloquear-scroll");
}
// Efecto sutil de sombra o fondo al hacer scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Cierra el menú al hacer clic fuera (opcional)
    window.addEventListener("click", function (e) {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove("active");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navLinks = document.getElementById("nav-links");

    hamburgerBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});