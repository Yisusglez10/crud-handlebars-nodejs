// Función para cambiar la clase "active" en los enlaces de navegación
function setActiveLink() {
    const links = document.querySelectorAll(".nav-link");
  
    links.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
  
  // Ejecutar la función después de que se cargue todo el contenido de la página
  window.addEventListener("load", setActiveLink);
  