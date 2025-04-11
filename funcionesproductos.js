document.addEventListener("DOMContentLoaded", function () {
    // --- MENÚ DE USUARIO ---
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
  
    // --- BOTÓN SUSCRIBIRSE ---
    const botonSuscribirse = document.getElementById('boton-suscribirse');
    if (botonSuscribirse) {
      botonSuscribirse.addEventListener('click', () => {
        window.location.href = 'suscribirse.html';
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
  
    // --- SUBMENÚ DESPLEGABLE ---
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
  
      if (nombre === "GUACAMOLE HASS" || nombre === "ACEITE DE AGUACATE") {
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = nombre === "GUACAMOLE HASS"
          ? "Cantidad de recipientes (200g)"
          : "Cantidad de botellas (200ml)";
        input.min = 1;
  
        const agregarBtn = document.createElement("button");
        agregarBtn.textContent = "Añadir";
  
        const volverBtn = document.createElement("button");
        volverBtn.textContent = "Volver";
  
        contenedor.append(input, agregarBtn, volverBtn);
  
        agregarBtn.onclick = () => {
          const cantidad = parseInt(input.value);
          if (!cantidad || cantidad <= 0) return alert("Cantidad no válida");
          const descripcion = `${cantidad} ${nombre === "GUACAMOLE HASS" ? "recipiente(s)" : "botella(s)"} de ${nombre}`;
          const precio = nombre === "GUACAMOLE HASS" ? 4000 : 14000;
          carrito.push({ descripcion, total: cantidad * precio });
          actualizarResumen();
          reiniciarBoton(tarjeta, contenedor);
        };
  
        volverBtn.onclick = () => reiniciarBoton(tarjeta, contenedor);
        return;
      }
  
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
  
      localStorage.setItem("carritoCompra", JSON.stringify(carrito));
      localStorage.setItem("totalCompra", totalGeneral.toString());
  
      document.querySelectorAll(".borrar").forEach((btn) => {
        btn.addEventListener("click", () => {
          const index = btn.dataset.index;
          carrito.splice(index, 1);
          actualizarResumen();
        });
      });
    }
  
    if (borrarTodoBtn) {
      borrarTodoBtn.addEventListener("click", () => {
        carrito.length = 0;
        actualizarResumen();
        alert("El carrito ha sido vaciado.");
      });
    }
  
    if (comprarTodoBtn) {
      comprarTodoBtn.addEventListener("click", () => {
        if (carrito.length === 0) {
          alert("No hay productos en el resumen de compra.");
        } else {
          const total = carrito.reduce((acc, item) => acc + item.total, 0);
          localStorage.setItem("carritoResumen", JSON.stringify(carrito));
          localStorage.setItem("totalCompra", total);
          window.location.href = "pago.html";
        }
      });
    }
  });
  
  // --- EFECTO SCROLL EN NAVBAR ---
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 0);
    }
  });
  