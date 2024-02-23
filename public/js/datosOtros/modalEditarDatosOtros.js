document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los elementos con la clase "btn-modal"
    const btnModalElements = document.querySelectorAll(".btn-modal-editar");

    // Escuchar clic en botón con clase "btn-modal"
    btnModalElements.forEach((btn) => {
        btn.addEventListener("click", function () {
            // Obtener los datos de la fila a través de los atributos de datos personalizados
            const idDatosOtros = btn.dataset.id;
            const pkHojaTecnica = btn.dataset.pk;
            const codigo = btn.dataset.codigo;
            const nombre = btn.dataset.nombre;
            const prueba3 = btn.dataset.prueba3;
            const prueba4 = btn.dataset.prueba4;
            const prueba5 = btn.dataset.prueba5;
            const prueba2 = btn.dataset.prueba2;
            const prueba30 = btn.dataset.prueba30;
            const prueba20 = btn.dataset.prueba20;
            const prueba41 = btn.dataset.prueba41;
            const prueba43 = btn.dataset.prueba43;
            const prueba9 = btn.dataset.prueba9;
            const prueba44 = btn.dataset.prueba44;
            const prueba46 = btn.dataset.prueba46;
            const prueba7 = btn.dataset.prueba7;
            const prueba54 = btn.dataset.prueba54;
            const prueba19 = btn.dataset.prueba19;
            const prueba49 = btn.dataset.prueba49;
            const prueba51 = btn.dataset.prueba51;
            const prueba32 = btn.dataset.prueba32;
            const prueba33 = btn.dataset.prueba33;
            const prueba65 = btn.dataset.prueba65;
            const prueba31 = btn.dataset.prueba31;
            const prueba66 = btn.dataset.prueba66;
            const prueba34 = btn.dataset.prueba34;
            const prueba67 = btn.dataset.prueba67;
            const prueba68 = btn.dataset.prueba68;
            const prueba37 = btn.dataset.prueba37;
            const prueba63 = btn.dataset.prueba63;
            const prueba26 = btn.dataset.prueba26;
            const prueba36 = btn.dataset.prueba36;
            const prueba38 = btn.dataset.prueba38;
            const prueba39 = btn.dataset.prueba39;

            // Cambiar valor del modal title
            document.querySelector(".modal-title-editar").textContent = pkHojaTecnica;

            const modal = document.getElementById("modalVisorEditar");
            // Buscar los campos de entrada por clase y asignarles los valores
            modal.querySelector(".modal-id").textContent = idDatosOtros;
            modal.querySelector(".modal-pk").value = pkHojaTecnica;
            modal.querySelector(".modal-codigo").value = codigo;
            modal.querySelector(".modal-nombre").value = nombre;
            modal.querySelector(".modal-prueba3").value = prueba3;
            modal.querySelector(".modal-prueba4").value = prueba4;
            modal.querySelector(".modal-prueba5").value = prueba5;
            modal.querySelector(".modal-prueba2").value = prueba2;
            modal.querySelector(".modal-prueba30").value = prueba30;
            modal.querySelector(".modal-prueba20").value = prueba20;
            modal.querySelector(".modal-prueba41").value = prueba41;
            modal.querySelector(".modal-prueba43").value = prueba43;
            modal.querySelector(".modal-prueba9").value = prueba9;
            modal.querySelector(".modal-prueba44").value = prueba44;
            modal.querySelector(".modal-prueba46").value = prueba46;
            modal.querySelector(".modal-prueba7").value = prueba7;
            modal.querySelector(".modal-prueba54").value = prueba54;
            modal.querySelector(".modal-prueba19").value = prueba19;
            modal.querySelector(".modal-prueba49").value = prueba49;
            modal.querySelector(".modal-prueba51").value = prueba51;
            modal.querySelector(".modal-prueba32").value = prueba32;
            modal.querySelector(".modal-prueba33").value = prueba33;
            modal.querySelector(".modal-prueba65").value = prueba65;
            modal.querySelector(".modal-prueba31").value = prueba31;
            modal.querySelector(".modal-prueba66").value = prueba66;
            modal.querySelector(".modal-prueba34").value = prueba34;
            modal.querySelector(".modal-prueba67").value = prueba67;
            modal.querySelector(".modal-prueba68").value = prueba68;
            modal.querySelector(".modal-prueba37").value = prueba37;
            modal.querySelector(".modal-prueba63").value = prueba63;
            modal.querySelector(".modal-prueba26").value = prueba26;
            modal.querySelector(".modal-prueba36").value = prueba36;
            modal.querySelector(".modal-prueba38").value = prueba38;
            modal.querySelector(".modal-prueba39").value = prueba39;   

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
