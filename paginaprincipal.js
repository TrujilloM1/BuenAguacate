<script>
document.addEventListener("DOMContentLoaded", function () {
  // --- MENÚ USUARIO ---
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

  // --- MENÚ HAMBURGUESA ---
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    window.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  }

  // --- DROPDOWN DE NAVEGACIÓN ---
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const navDropdown = document.querySelector(".nav-dropdown");

  if (dropdownBtn && navDropdown) {
    dropdownBtn.addEventListener("click", function (e) {
      e.preventDefault();
      navDropdown.classList.toggle("show");
    });

    window.addEventListener("click", function (event) {
      if (!dropdownBtn.contains(event.target) && !navDropdown.contains(event.target)) {
        navDropdown.classList.remove("show");
      }
    });
  }

  // --- BOTÓN DE SUSCRIPCIÓN ---
  const botonSuscribirse = document.getElementById('boton-suscribirse');
  if (botonSuscribirse) {
    botonSuscribirse.addEventListener('click', () => {
      window.location.href = 'suscribirse.html';
    });
  }

  // --- CARRUSEL DE IMÁGENES HERO ---
  const imagenes = [
    "https://i.imgur.com/bboNtNz.jpeg",
    "https://i.imgur.com/WkMRy5R.png",
    "https://i.imgur.com/2uoELeb.jpeg",
    "https://i.imgur.com/3AC3TJw.jpeg",
    "https://i.imgur.com/LVUhEfS.jpeg",
    "https://i.imgur.com/fOklekx.jpeg"
  ];
  let indice = 0;

  window.cambiarImagen = function (direccion) {
    indice = (indice + direccion + imagenes.length) % imagenes.length;
    const heroImg = document.getElementById("imagen-hero");
    if (heroImg) heroImg.src = imagenes[indice];
  };
});

// --- EFECTO SCROLL EN NAVBAR ---
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 0);
  }
});
</script>
