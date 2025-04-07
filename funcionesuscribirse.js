window.onload = () => {
  if (!sessionStorage.getItem("prevPage")) {
    sessionStorage.setItem("prevPage", document.referrer);
  }
  document.getElementById("modalInfo").style.display = "block";
};

  
function mostrarInfo() {
  document.getElementById("modalInfo").style.display = "block";
  document.getElementById("fondoModal").style.display = "block";
  document.body.classList.add("modal-abierto");
}

function cerrarInfo() {
  window.history.back(); // Regresa a la página anterior
}

function volverAPaginaAnterior() {
  const prevPage = sessionStorage.getItem("prevPage");
  if (prevPage && prevPage !== "") {
    window.location.href = prevPage;
  } else {
    window.history.back();
  }
}


function mostrarFormulario() {
  document.getElementById("modalInfo").style.display = "none";
  document.getElementById("formulario").style.display = "block";
}

  
function alternarClave() {
    let clave = document.getElementById("clave");
    let icono = document.getElementById("iconoClave");
  
    if (clave.type === "password") {
      clave.type = "text";
      icono.src = "https://i.imgur.com/Ltb0EQC.png";
    } else {
      clave.type = "password";
      icono.src = "https://i.imgur.com/fc97Dgu.png";
    }
}
  
function validarFormulario() {
  let usuario = document.getElementById("usuario").value.trim();
  let clave = document.getElementById("clave").value.trim();
  let correo = document.getElementById("correo").value.trim();

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (usuario === "" || clave === "" || correo === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  if (!emailRegex.test(correo)) {
    alert("Por favor, ingresa un correo válido.");
    return;
  }

  let deseaGuardar = confirm("¿Quieres guardar tus datos?");
  if (deseaGuardar) {
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("clave", clave);
    localStorage.setItem("correo", correo);
    alert("¡Suscripción exitosa! Tus datos han sido guardados.");
  } else {
    alert("¡Suscripción exitosa! No se guardaron los datos.");
  }

  window.history.back(); // Regresa a la página anterior después de suscribirse
}

  
function cerrarFormulario() {
  window.history.back(); // Regresa a la página anterior
}
