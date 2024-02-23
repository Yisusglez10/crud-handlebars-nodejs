document.addEventListener("DOMContentLoaded", function () {

    // Función para ajustar la altura del textarea
    function autoResize(element) {
        element.style.height = "1px"; // Establecer temporalmente la altura en 1px para medir correctamente el contenido
        element.style.height = (element.scrollHeight) + "px"; // Establecer la altura según el contenido
    }

    // Obtener todos los contenedores con la clase "formularioTextArea"
    const formulariosDatosAceites = document.querySelectorAll(".formulario-datosaceites");

    // Iterar sobre los contenedores
    formulariosDatosAceites.forEach((formularioDatosAceite) => {
        // Obtener todos los textarea dentro del contenedor
        const textAreasDA = formularioDatosAceite.querySelectorAll("textarea.dynamic-textarea");

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

});
