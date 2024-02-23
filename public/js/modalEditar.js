document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los elementos con la clase "btn-modal"
    const btnModalElements = document.querySelectorAll(".btn-modal-editar");

    // Escuchar clic en botón con clase "btn-modal"
    btnModalElements.forEach((btn) => {
        btn.addEventListener("click", function () {
            // Obtener los datos de la fila a través de los atributos de datos personalizados
            const idInfoGeneralHT = btn.dataset.id;
            const pkHojaTecnica = btn.dataset.pk;
            const categoria = btn.dataset.categoria;
            const nombre = btn.dataset.nombre;
            const subtitulo = btn.dataset.subtitulo;
            const descripcion = btn.dataset.descripcion;
            const beneficios = btn.dataset.beneficios;
            const aplicaciones = btn.dataset.aplicaciones;
            const color = btn.dataset.color;
            const textura = btn.dataset.textura;
            const forma = btn.dataset.forma;
            const revision = btn.dataset.revision;
            const extra = btn.dataset.extra;
            const propiedades = btn.dataset.propiedades;
            const recomendaciones = btn.dataset.recomendaciones;
            const compuesto = btn.dataset.compuesto;
            const caracteristicas = btn.dataset.caracteristicas;
            const superficie = btn.dataset.superficie;

            // Cambiar valor del modal title
            document.querySelector(".modal-title-editar").textContent = pkHojaTecnica;

            const modal = document.getElementById("modalVisorEditar");
            // Buscar los campos de entrada por clase y asignarles los valores
            modal.querySelector(".modal-id").textContent = idInfoGeneralHT;
            modal.querySelector(".modal-pk").value = pkHojaTecnica;
            modal.querySelector(".modal-categoria").value = categoria;
            modal.querySelector(".modal-nombre").value = nombre;
            modal.querySelector(".modal-subtitulo").value = subtitulo;
            modal.querySelector(".modal-descripcion").value = descripcion;
            modal.querySelector(".modal-beneficios").value = beneficios;
            modal.querySelector(".modal-aplicaciones").value = aplicaciones;
            modal.querySelector(".modal-color").value = color;
            modal.querySelector(".modal-textura").value = textura;
            modal.querySelector(".modal-forma").value = forma;
            modal.querySelector(".modal-revision").value = revision;
            modal.querySelector(".modal-extra").value = extra;
            modal.querySelector(".modal-propiedades").value = propiedades;
            modal.querySelector(".modal-recomendaciones").value = recomendaciones;
            modal.querySelector(".modal-compuesto").value = compuesto;
            modal.querySelector(".modal-caracteristicas").value = caracteristicas;
            modal.querySelector(".modal-superficie").value = superficie;

            // Función para ajustar la altura del textarea
            function autoResize(element) {
                element.style.height = "1px"; // Establecer temporalmente la altura en 1px para medir correctamente el contenido
                element.style.height = (element.scrollHeight) + "px"; // Establecer la altura según el contenido
            }

            // Obtener todos los textarea con la clase "dynamic-textarea" dentro del modal
            const textAreas = modal.querySelectorAll(".dynamic-textarea");
            // Obtener todos los h5 que tienen la clase "hide-5"
            const h5sform = modal.querySelectorAll(".h5modal");
            // Asignar la clase "hide-textarea" a todos los textarea
            textAreas.forEach((textarea) => {
                textarea.classList.add("hide-textarea");
            });
            // Asignar la clase "hide-h5" a todos los h5
            h5sform.forEach((h5form) => {
                h5form.classList.add("hide-h5");
            });

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

            // Evento "shown.bs.modal" para el modal
            modal.addEventListener("shown.bs.modal", function () {
                // Iterar sobre los textarea y ajustar la altura al abrir el modal
                textAreas.forEach((textarea) => {
                    autoResize(textarea);
                });

                // Mostrar los textarea después del ajuste de altura
                textAreas.forEach((textarea) => {
                    textarea.classList.remove("hide-textarea");
                    // textarea.classList.add("fade-in");
                });

                // Mostrar los textarea después del ajuste de altura
                h5sform.forEach((h5form) => {
                    h5form.classList.remove("hide-h5");
                    // h5form.classList.add("fade-in");
                });

            });
        });
    });
});
