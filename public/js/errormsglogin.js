 // Agrega un script para cerrar el mensaje de error al hacer clic en cualquier parte de la página
 document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function () {
      // Oculta el mensaje de error al hacer clic en cualquier parte de la página
      document.getElementById('errormsg').style.display = 'none';
    });
  });