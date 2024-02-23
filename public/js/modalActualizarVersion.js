// document.addEventListener('DOMContentLoaded', function () {
document.getElementById('btnActualizarVersionModal').addEventListener('click', function () {
    // Obtén el valor del input nuevaVersion
    var nuevaVersionValue = document.getElementById('nuevaVersion').value;

    // Establece el valor en el input del modal
    document.getElementById('nuevaVersionModal').value = nuevaVersionValue;

    // Actualiza el contenido del mensaje en el modal
    document.getElementById('valorNuevaVersion').textContent = nuevaVersionValue;
});
// });