//nuevo js
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

  function toggleDetalle(element) {
    element.classList.toggle('active');
  }
 
