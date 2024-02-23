// Selecciona todos los botones de borrar
const deleteButtons = document.querySelectorAll('.btn-danger[data-bs-toggle="modal"]');

// Cuando se hace clic en el botón de borrar, actualiza la acción del formulario
deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    // console.log('Botón de borrar clickeado'); // Agrega este console.log
    const idHojaTecnica = button.getAttribute('data-id');
    const deleteForm = document.getElementById('deleteForm');

    // Actualiza la acción del formulario con el valor de idHojaTecnica
    deleteForm.action = `/especialGrasasDelete/${idHojaTecnica}`;

    // Asigna el valor de idHojaTecnica al campo oculto del formulario
    const pkInput = document.getElementById('idValueInput');
    pkInput.value = idHojaTecnica;

    // Puedes también mostrar el valor en la consola para depuración
    // console.log('Valor de pkHojaTecnica:', pkHojaTecnica);
  });
});