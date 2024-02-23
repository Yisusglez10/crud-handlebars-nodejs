document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los elementos con la clase "btn-modal"
    const btnModalElements = document.querySelectorAll(".btn-modal-editar");

    // Escuchar clic en botón con clase "btn-modal"
    btnModalElements.forEach((btn) => {
        btn.addEventListener("click", function () {
            // Obtener los datos de la fila a través de los atributos de datos personalizados
            const idDatosAceites = btn.dataset.id;
            const pkHojaTecnica = btn.dataset.pk;
            const codigo = btn.dataset.codigo;
            const nombre = btn.dataset.nombre;
            const prueba1 = btn.dataset.prueba1;
            const prueba19 = btn.dataset.prueba19;
            const prueba20 = btn.dataset.prueba20;
            const prueba26 = btn.dataset.prueba26;
            const prueba37 = btn.dataset.prueba37;
            const prueba38 = btn.dataset.prueba38;
            const prueba39 = btn.dataset.prueba39;
            const prueba40 = btn.dataset.prueba40;
            const prueba41 = btn.dataset.prueba41;
            const prueba42 = btn.dataset.prueba42;
            const prueba43 = btn.dataset.prueba43;
            const prueba44 = btn.dataset.prueba44;
            const prueba45 = btn.dataset.prueba45;
            const prueba46 = btn.dataset.prueba46;
            const prueba47 = btn.dataset.prueba47;
            const prueba48 = btn.dataset.prueba48;
            const prueba49 = btn.dataset.prueba49;
            const prueba50 = btn.dataset.prueba50;
            const prueba51 = btn.dataset.prueba51;
            const prueba52 = btn.dataset.prueba52;
            const prueba53 = btn.dataset.prueba53;
            const prueba54 = btn.dataset.prueba54;
            const prueba55 = btn.dataset.prueba55;
            const prueba56 = btn.dataset.prueba56;
            const prueba57 = btn.dataset.prueba57;
            const prueba58 = btn.dataset.prueba58;
            const prueba59 = btn.dataset.prueba59;
            const prueba60 = btn.dataset.prueba60;
            const prueba61 = btn.dataset.prueba61;
            const prueba62 = btn.dataset.prueba62;
            const prueba63 = btn.dataset.prueba63;
            const prueba64 = btn.dataset.prueba64;

            // Cambiar valor del modal title
            document.querySelector(".modal-title-editar").textContent = pkHojaTecnica;

            const modal = document.getElementById("modalVisorEditar");
            // Buscar los campos de entrada por clase y asignarles los valores
            modal.querySelector(".modal-id").textContent = idDatosAceites;
            modal.querySelector(".modal-pk").value = pkHojaTecnica;
            modal.querySelector(".modal-codigo").value = codigo;
            modal.querySelector(".modal-nombre").value = nombre;
            modal.querySelector(".modal-prueba1").value = prueba1;
            modal.querySelector(".modal-prueba19").value = prueba19;
            modal.querySelector(".modal-prueba20").value = prueba20;
            modal.querySelector(".modal-prueba26").value = prueba26;
            modal.querySelector(".modal-prueba37").value = prueba37;
            modal.querySelector(".modal-prueba38").value = prueba38;
            modal.querySelector(".modal-prueba39").value = prueba39;
            modal.querySelector(".modal-prueba40").value = prueba40;
            modal.querySelector(".modal-prueba41").value = prueba41;
            modal.querySelector(".modal-prueba42").value = prueba42;
            modal.querySelector(".modal-prueba43").value = prueba43;
            modal.querySelector(".modal-prueba44").value = prueba44;
            modal.querySelector(".modal-prueba45").value = prueba45;
            modal.querySelector(".modal-prueba46").value = prueba46;
            modal.querySelector(".modal-prueba47").value = prueba47;
            modal.querySelector(".modal-prueba48").value = prueba48;
            modal.querySelector(".modal-prueba49").value = prueba49;
            modal.querySelector(".modal-prueba50").value = prueba50;
            modal.querySelector(".modal-prueba51").value = prueba51;
            modal.querySelector(".modal-prueba52").value = prueba52;
            modal.querySelector(".modal-prueba53").value = prueba53;
            modal.querySelector(".modal-prueba54").value = prueba54;
            modal.querySelector(".modal-prueba55").value = prueba55;
            modal.querySelector(".modal-prueba56").value = prueba56;
            modal.querySelector(".modal-prueba57").value = prueba57;
            modal.querySelector(".modal-prueba58").value = prueba58;
            modal.querySelector(".modal-prueba59").value = prueba59;
            modal.querySelector(".modal-prueba60").value = prueba60;
            modal.querySelector(".modal-prueba61").value = prueba61;
            modal.querySelector(".modal-prueba62").value = prueba62;
            modal.querySelector(".modal-prueba63").value = prueba63;
            modal.querySelector(".modal-prueba64").value = prueba64;       

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
