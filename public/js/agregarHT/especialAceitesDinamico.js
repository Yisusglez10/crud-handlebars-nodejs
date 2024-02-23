document.addEventListener("DOMContentLoaded", function () {
    // Función para ajustar la altura del textarea
    function autoResize(element) {
        element.style.height = "1px"; // Establecer temporalmente la altura en 1px para medir correctamente el contenido
        element.style.height = (element.scrollHeight) + "px"; // Establecer la altura según el contenido
    }

    // Obtener el contenedor con la clase "form-especialAceites"
    const formularioEspecialDatosAceite = document.querySelector(".form-especialAceites");

    // Obtener todos los textarea dentro del contenedor
    const textAreasDA = formularioEspecialDatosAceite.querySelectorAll("textarea.dynamic-textarea");

    // Iterar sobre los textarea y ajustar la altura al cargar la página
    textAreasDA.forEach((textareaDA) => {
        autoResize(textareaDA);
    });

    // Escuchar el evento input para ajustar la altura mientras el usuario escribe o borra datos
    textAreasDA.forEach((textareaDA) => {
        textareaDA.addEventListener("input", function () {
            autoResize(this);
        });
    });

});
