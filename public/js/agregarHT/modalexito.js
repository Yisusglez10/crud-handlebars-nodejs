// Obtén una referencia al modal utilizando su ID
  var modalExitoAdd = new bootstrap.Modal(document.getElementById('modalExitoAdd'), {});
// Cuando el modal se oculta (se cierra), se ejecutará esta función
modalExitoAdd._element.addEventListener('hidden.bs.modal', function () {
// Realiza la redirección a la página deseada
window.location.href = "/";
});