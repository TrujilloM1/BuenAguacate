document.addEventListener("DOMContentLoaded", () => {
    // --- MENÚ USUARIO Y SUSCRIPCIÓN ---
    const userBtn = document.querySelector('.user-btn');
    const userMenu = document.querySelector('.user-menu');
  
    if (userBtn && userMenu) {
      userBtn.addEventListener('click', () => {
        userMenu.classList.toggle('show');
      });
  
      window.addEventListener('click', (e) => {
        if (!userBtn.contains(e.target) && !userMenu.contains(e.target)) {
          userMenu.classList.remove('show');
        }
      });
    }
  
    const botonSuscribirse = document.getElementById('boton-suscribirse');
    if (botonSuscribirse) {
      botonSuscribirse.addEventListener('click', () => {
        window.location.href = 'suscribirse.html';
      });
    }
  
    // --- CARRITO DE COMPRAS ---
    const tarjetas = document.querySelectorAll(".tarjeta");
    const listaCompra = document.getElementById("lista-compra");
    const totalCompra = document.getElementById("total-compra");
    const comprarTodoBtn = document.getElementById("comprar-todo");
    const borrarTodoBtn = document.getElementById("borrar-todo");
  
    const carrito = [];
  
    tarjetas.forEach((tarjeta) => {
      const acciones = tarjeta.querySelector(".acciones");
      const comprarBtn = document.createElement("button");
      comprarBtn.textContent = "Comprar";
      comprarBtn.classList.add("btn-comprar");
      acciones.appendChild(comprarBtn);
  
      comprarBtn.addEventListener("click", () => {
        mostrarOpcionesCompra(tarjeta, acciones);
      });
    });
  
    function mostrarOpcionesCompra(tarjeta, contenedor) {
      contenedor.innerHTML = "";
      const nombre = tarjeta.dataset.nombre;
  
      if (nombre === "GUACAMOLE HASS") {
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = "Cantidad de recipientes (200g)";
        input.min = 1;
  
        const agregarBtn = document.createElement("button");
        agregarBtn.textContent = "Añadir";
  
        const volverBtn = document.createElement("button");
        volverBtn.textContent = "Volver";
  
        contenedor.append(input, agregarBtn, volverBtn);
  
        agregarBtn.onclick = () => {
          const cantidad = parseInt(input.value);
          if (!cantidad || cantidad <= 0) return alert("Cantidad no válida");
          carrito.push({
            descripcion: `${cantidad} recipiente(s) de GUACAMOLE HASS (200g)`,
            total: cantidad * 4000
          });
          actualizarResumen();
          reiniciarBoton(tarjeta, contenedor);
        };
  
        volverBtn.onclick = () => reiniciarBoton(tarjeta, contenedor);
        return;
      }
  
      if (nombre === "ACEITE DE AGUACATE") {
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = "Cantidad de botellas (200ml)";
        input.min = 1;
  
        const agregarBtn = document.createElement("button");
        agregarBtn.textContent = "Añadir";
  
        const volverBtn = document.createElement("button");
        volverBtn.textContent = "Volver";
  
        contenedor.append(input, agregarBtn, volverBtn);
  
        agregarBtn.onclick = () => {
          const cantidad = parseInt(input.value);
          if (!cantidad || cantidad <= 0) return alert("Cantidad no válida");
          carrito.push({
            descripcion: `${cantidad} botella(s) de ACEITE DE AGUACATE (200ml)`,
            total: cantidad * 14000
          });
          actualizarResumen();
          reiniciarBoton(tarjeta, contenedor);
        };
  
        volverBtn.onclick = () => reiniciarBoton(tarjeta, contenedor);
        return;
      }
  
      // Aguacates por unidad o kilo
      const unidadBtn = document.createElement("button");
      unidadBtn.textContent = "Unidad";
      const kiloBtn = document.createElement("button");
      kiloBtn.textContent = "Kilos";
      const volverBtn = document.createElement("button");
      volverBtn.textContent = "Volver";
  
      contenedor.append(unidadBtn, kiloBtn, volverBtn);
  
      unidadBtn.onclick = () => mostrarCampoCantidad(tarjeta, contenedor, "unidad");
      kiloBtn.onclick = () => mostrarCampoCantidad(tarjeta, contenedor, "kilos");
      volverBtn.onclick = () => reiniciarBoton(tarjeta, contenedor);
    }
  
    function mostrarCampoCantidad(tarjeta, contenedor, tipo) {
      contenedor.innerHTML = "";
  
      const input = document.createElement("input");
      input.type = "number";
      input.placeholder = tipo === "unidad" ? "Cantidad de unidades" : "Cantidad de kilos";
      input.min = 1;
  
      const agregarBtn = document.createElement("button");
      agregarBtn.textContent = "Añadir";
  
      const volverBtn = document.createElement("button");
      volverBtn.textContent = "Volver";
  
      contenedor.append(input, agregarBtn, volverBtn);
  
      agregarBtn.onclick = () => {
        const cantidad = parseFloat(input.value);
        if (!cantidad || cantidad <= 0) return alert("Cantidad no válida");
  
        const nombre = tarjeta.dataset.nombre;
        const precioPorKilo = parseInt(tarjeta.dataset.precio);
  
        let total = 0;
        let descripcion = "";
  
        if (tipo === "unidad") {
          let gramosAprox = 0;
  
          if (nombre.includes("JUMBO")) gramosAprox = 250;
          else if (nombre.includes("PRIMERA")) gramosAprox = 200;
          else if (nombre.includes("SEGUNDA")) gramosAprox = 150;
          else if (nombre.includes("TERCERA")) gramosAprox = 120;
  
          const precioUnidad = (gramosAprox / 1000) * precioPorKilo;
          total = Math.round(precioUnidad * cantidad);
          descripcion = `${cantidad} unidad(es) de ${nombre}`;
        } else {
          total = Math.round(precioPorKilo * cantidad);
          descripcion = `${cantidad} kilo(s) de ${nombre}`;
        }
  
        carrito.push({ descripcion, total });
        actualizarResumen();
        reiniciarBoton(tarjeta, contenedor);
      };
  
      volverBtn.onclick = () => mostrarOpcionesCompra(tarjeta, contenedor);
    }
  
    function reiniciarBoton(tarjeta, contenedor) {
      contenedor.innerHTML = "";
      const btn = document.createElement("button");
      btn.textContent = "Comprar";
      btn.classList.add("btn-comprar");
      contenedor.appendChild(btn);
      btn.onclick = () => mostrarOpcionesCompra(tarjeta, contenedor);
    }
    function actualizarResumen() {
        listaCompra.innerHTML = "";
        let totalGeneral = 0;
      
        carrito.forEach((item, index) => {
          const tarjeta = document.createElement("div");
          tarjeta.classList.add("item-resumen");
          tarjeta.innerHTML = `
            <span>${item.descripcion}</span>
            <span>$${item.total.toLocaleString()}</span>
            <button class="borrar" data-index="${index}">X</button>
          `;
          listaCompra.appendChild(tarjeta);
          totalGeneral += item.total;
        });
      
        totalCompra.textContent = `Total: $${totalGeneral.toLocaleString()}`;
      
        // 🔽 GUARDAR EN LOCALSTORAGE 🔽
        localStorage.setItem("carritoCompra", JSON.stringify(carrito));
        localStorage.setItem("totalCompra", totalGeneral.toString());
      
        // Botones borrar
        document.querySelectorAll(".borrar").forEach((btn) => {
          btn.addEventListener("click", () => {
            const index = btn.dataset.index;
            carrito.splice(index, 1);
            actualizarResumen();
          });
        });
      }
      
      // Verifica que el botón exista antes de asignar el evento
      if (borrarTodoBtn) {
        borrarTodoBtn.addEventListener("click", () => {
          carrito.length = 0; // Vacía el carrito
          actualizarResumen(); // Actualiza el resumen para reflejar los cambios
          alert("El carrito ha sido vaciado."); // Mensaje opcional
        });
      }
      
      comprarTodoBtn.addEventListener("click", () => {
        if (carrito.length === 0) {
          alert("No hay productos en el resumen de compra.");
        } else {
          const total = carrito.reduce((acc, item) => acc + item.total, 0);
      
          // Guardar en localStorage para usar en la zona de pagos
          localStorage.setItem("carritoResumen", JSON.stringify(carrito));
          localStorage.setItem("totalCompra", total);
      
          // Redirigir a la página de pago
          window.location.href = "pago.html";
        }
      });
      
      
  
    borrarTodoBtn.addEventListener("click", () => {
      carrito.length = 0;
      actualizarResumen();
    });
    
  });
