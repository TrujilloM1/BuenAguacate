document.addEventListener("DOMContentLoaded", () => {
    const detalleCompra = document.getElementById("detalleCompra");
    const totalCompra = document.getElementById("totalCompra");
    const montoFinal = document.getElementById("montoFinal");
  
    const carrito = JSON.parse(localStorage.getItem("carritoCompra")) || [];
    const total = parseInt(localStorage.getItem("totalCompra")) || 0;
  
    if (carrito.length === 0) {
      detalleCompra.textContent = "No hay productos seleccionados.";
    } else {
      detalleCompra.innerHTML = carrito.map(item => `<p>${item.descripcion}</p>`).join("");
    }
  
    totalCompra.textContent = `$${total.toLocaleString()}`;
    montoFinal.textContent = `$${total.toLocaleString()}`;
  
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const direccion = document.getElementById("direccion").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const metodo = document.getElementById("metodo").value;
  
      const telefonoValido = /^[0-9]{7,10}$/.test(telefono);
      const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  
      if (!nombre || !correo || !direccion || !telefono || !metodo) {
        alert("Por favor, complete todos los campos.");
        return;
      }
  
      if (direccion.length < 10) {
        alert("La dirección debe tener al menos 10 caracteres.");
        return;
      }
  
      if (!telefonoValido) {
        alert("Ingrese un número de teléfono válido (7 a 10 dígitos, solo números).");
        return;
      }
  
      if (!correoValido) {
        alert("Ingrese un correo electrónico válido.");
        return;
      }
  
      const numeroOrden = Math.floor(Math.random() * 1000000);
  
      alert(
        `✅ ¡Pago aprobado!\n\n` +
        `Gracias por tu compra, ${nombre}.\n` +
        `Número de orden: #${numeroOrden}\n` +
        `Hemos enviado el comprobante al correo: ${correo}\n\n` +
        `Puedes hacer seguimiento en la sección de comercialización.`
      );
  
      localStorage.removeItem("carritoCompra");
      localStorage.removeItem("totalCompra");
  
      window.location.href = "comercializacion.html";

      
    });
  });
  function cerrarFormulario() {
    window.history.back(); // Regresa a la página anterior
  }

  