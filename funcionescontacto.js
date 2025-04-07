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