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
});
