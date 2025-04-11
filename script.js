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

// Tarjetas expandibles
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