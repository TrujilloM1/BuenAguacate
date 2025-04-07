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

const imagenes = [
  "https://i.imgur.com/bboNtNz.jpeg",
  "https://i.imgur.com/WkMRy5R.png",
  "https://i.imgur.com/2uoELeb.jpeg",
  "https://i.imgur.com/3AC3TJw.jpeg",
  "https://i.imgur.com/LVUhEfS.jpeg",
  "https://i.imgur.com/fOklekx.jpeg"

];
let indice = 0;

function cambiarImagen(direccion) {
  indice = (indice + direccion + imagenes.length) % imagenes.length;
  document.getElementById("imagen-hero").src = imagenes[indice];
}


});

  