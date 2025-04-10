document.addEventListener("DOMContentLoaded", () => {
    // Recuperar total desde localStorage
    const total = localStorage.getItem("totalCompra") || 0;
    document.getElementById("total").textContent = `Total a pagar: $${total}`;
  
    const form = document.getElementById("formPago");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre").value.trim();
      const direccion = document.getElementById("direccion").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const metodo = document.getElementById("metodo").value;
  
      if (!nombre || !direccion || !telefono || !metodo) {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      // Simular aprobación
      form.style.display = "none";
      document.getElementById("mensajeAprobado").style.display = "block";
  
      // Generar número de orden aleatorio
      const numeroOrden = Math.floor(Math.random() * 1000000);
      document.getElementById("numeroOrden").textContent = numeroOrden;
  
      // Guardar para seguimiento
      localStorage.setItem("numeroOrden", numeroOrden);
    });
  });
  