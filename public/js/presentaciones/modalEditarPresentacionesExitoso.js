// Obtén una referencia al botón "Actualizar" del primer modal
var btnActualizar = document.getElementById('btnActualizar');

// Capturar clic en el botón "Actualizar" del primer modal
btnActualizar.addEventListener('click', function() {
  // Obtener el valor del textarea del primer modal
  var textareaPK = document.getElementById('textareaPK');
  var pkValue = textareaPK.value;

  // Mostrar el valor en el segundo modal
  var pkValueSpan = document.getElementById('pkValueSpan');
  pkValueSpan.textContent = pkValue;
});

// Obtén una referencia al modal utilizando su ID
var modalExito = new bootstrap.Modal(document.getElementById('modalExito'), {});
// Cuando el modal se oculta (se cierra), se ejecutará esta función
modalExito._element.addEventListener('hidden.bs.modal', function () {
  // Realiza la redirección a la página deseada
  window.location.href = "/presentaciones";
});
