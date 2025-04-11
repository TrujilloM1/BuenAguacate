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


document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formularioContacto");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !numero || !asunto || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    alert("¡Gracias por contactarnos! Te responderemos pronto 😊");
    formulario.reset();
  });

  // Mostrar el chat cuando se da clic en el ícono
  const iconoChat = document.getElementById("iconoChat");
  const chatBot = document.querySelector(".chatbot");

  iconoChat.addEventListener("click", function () {
    chatBot.style.display = "block";
  });
});

// Alternar visibilidad del chat al hacer clic en el header
function toggleChat() {
  const chatBot = document.querySelector(".chatbot");
  chatBot.style.display = chatBot.style.display === "block" ? "none" : "block";
}

function enviarMensaje() {
  const input = document.getElementById("chatInput");
  const mensaje = input.value.trim();
  if (mensaje === "") return;

  const chatMensajes = document.getElementById("chatMensajes");

  // Mensaje del usuario
  const divUsuario = document.createElement("div");
  divUsuario.className = "usuario";
  divUsuario.textContent = mensaje;
  chatMensajes.appendChild(divUsuario);

  // Respuesta automática del bot
  const divBot = document.createElement("div");
  divBot.className = "bot";
  divBot.textContent = generarRespuesta(mensaje);
  chatMensajes.appendChild(divBot);

  chatMensajes.scrollTop = chatMensajes.scrollHeight;
  input.value = "";
}

function generarRespuesta(mensaje) {
  const lower = mensaje.toLowerCase();
  if (lower.includes("hola")) return "¡Hola! ¿En qué puedo ayudarte?";
  if (lower.includes("precio")) return "Puedes consultar los precios en la sección de productos.";
  if (lower.includes("envío") || lower.includes("envios")) return "Realizamos envíos nacionales de 2 a 5 días hábiles.";
  if (lower.includes("gracias")) return "¡Con gusto! 😊";
  return "Lo siento, no entendí tu mensaje. ¿Puedes reformularlo?";
}