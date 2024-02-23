// // Obtén referencia al formulario y al elemento de alerta
const form = document.getElementById('formAdd');
const alertDiv = document.getElementById('alertDiv');

// Función para mostrar el modal de error
function showModalError(message) {
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = message;
    const modalDuplicado = new bootstrap.Modal(document.getElementById('modalDuplicado'));
    modalDuplicado.show();
}

// Función para mostrar el modal de éxito
function showModalExito(message) {
    const modalExitoMessage = document.getElementById('modalExitoMessage');
    modalExitoMessage.textContent = message;
    const modalExitoAdd = new bootstrap.Modal(document.getElementById('modalExitoAdd'));
    modalExitoAdd.show();
}

// Mapeo de mensajes de error a funciones de manejo de modales
const errorHandlers = {
    "Código de Hoja Técnica ya existe, intenta con otro": showModalError,
    "Ha ocurrido un error en el servidor": showModalError,
    "No se insertó el dato o no se encontró la página": showModalError,
    // Agregar más errores de ser necesario
};

// Agrega un evento al envío del formulario
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch('/agregarHTInsert', {
        method: 'post',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error("Error en el servidor:", data.error);
                const errorHandler = errorHandlers[data.message];
                if (errorHandler) {
                    errorHandler(data.message);
                } else {
                    showModalError("Error desconocido");
                }
            } else {
                showModalExito(data.message);
            }
        })
        .catch(error => {
            showModalError("No puedes insertar otro tipo de archivo que no sea imagen");
        });
});
