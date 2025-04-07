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
const imagenes = [
    "img/aguacate1.jpeg",
    "img/aguacate2.jpeg",
    "img/aguacate3.jpeg",
    "img/aguacate4.jpeg",
    "img/aguacate5.jpeg",
    "img/aguacate6.jpeg"

  ];
  let indice = 0;
  
  function cambiarImagen(direccion) {
    indice = (indice + direccion + imagenes.length) % imagenes.length;
    document.getElementById("imagen-hero").src = imagenes[indice];
  }
  