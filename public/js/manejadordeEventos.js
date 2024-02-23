// Selecciona todos los botones de borrar
const deleteButtons = document.querySelectorAll('.btn-danger[data-bs-toggle="modal"]');

// Cuando se hace clic en el botón de borrar, actualiza la acción del formulario
deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    // console.log('Botón de borrar clickeado'); // Agrega este console.log
    const pkHojaTecnica = button.getAttribute('data-pk');
    const deleteForm = document.getElementById('deleteForm');

    // Actualiza la acción del formulario con el valor de pkHojaTecnica
    deleteForm.action = `/infoGeneralDelete/${pkHojaTecnica}`;

    // Asigna el valor de pkHojaTecnica al campo oculto del formulario
    const pkInput = document.getElementById('pkValueInput');
    pkInput.value = pkHojaTecnica;
  });
});