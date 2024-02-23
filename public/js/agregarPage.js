document.addEventListener("DOMContentLoaded", function () {

    // Función para ajustar la altura del textarea
    function autoResize(element) {
        element.style.height = "1px"; // Establecer temporalmente la altura en 1px para medir correctamente el contenido
        element.style.height = (element.scrollHeight) + "px"; // Establecer la altura según el contenido
    }

     // Obtener todos los contenedores con la clase "formularioTextArea"
    const formularios = document.querySelectorAll(".formularioTextArea");
     
      // Iterar sobre los contenedores
      formularios.forEach((formulario) => {
        // Obtener todos los textarea dentro del contenedor
        const textAreas = formulario.querySelectorAll("textarea.dynamic-textarea");
        
        // Iterar sobre los textarea y ajustar la altura al cargar la página
        textAreas.forEach((textarea) => {
            autoResize(textarea);
        });

        // Escuchar el evento input para ajustar la altura mientras el usuario escribe o borra datos
        textAreas.forEach((textarea) => {
            textarea.addEventListener("input", function () {
                autoResize(this);
            });
        });
    });

});
