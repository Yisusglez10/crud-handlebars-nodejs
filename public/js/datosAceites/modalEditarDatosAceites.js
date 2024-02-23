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
            const prueba2 = btn.dataset.prueba2;
            const prueba3 = btn.dataset.prueba3;
            const prueba4 = btn.dataset.prueba4;
            const prueba5 = btn.dataset.prueba5;
            const prueba6 = btn.dataset.prueba6;
            const prueba7 = btn.dataset.prueba7;
            const prueba8 = btn.dataset.prueba8;
            const prueba9 = btn.dataset.prueba9;
            const prueba10 = btn.dataset.prueba10;
            const prueba11 = btn.dataset.prueba11;
            const prueba12 = btn.dataset.prueba12;
            const prueba13 = btn.dataset.prueba13;
            const prueba14 = btn.dataset.prueba14;
            const prueba15 = btn.dataset.prueba15;
            const prueba16 = btn.dataset.prueba16;
            const prueba17 = btn.dataset.prueba17;
            const prueba18 = btn.dataset.prueba18;
            const prueba19 = btn.dataset.prueba19;
            const prueba20 = btn.dataset.prueba20;
            const prueba21 = btn.dataset.prueba21;
            const prueba22 = btn.dataset.prueba22;
            const prueba23 = btn.dataset.prueba23;
            const prueba24 = btn.dataset.prueba24;
            const prueba25 = btn.dataset.prueba25;
            const prueba26 = btn.dataset.prueba26;
            const prueba27 = btn.dataset.prueba27;
            const prueba28 = btn.dataset.prueba28;
            const prueba29 = btn.dataset.prueba29;
            const prueba30 = btn.dataset.prueba30;
            const prueba31 = btn.dataset.prueba31;
            const prueba32 = btn.dataset.prueba32;
            const prueba33 = btn.dataset.prueba33;
            const prueba34 = btn.dataset.prueba34;
            const prueba35 = btn.dataset.prueba35;
            const prueba36 = btn.dataset.prueba36;
            const prueba37 = btn.dataset.prueba37;
            const prueba38 = btn.dataset.prueba38;
            const prueba39 = btn.dataset.prueba39;
            const prueba43 = btn.dataset.prueba43;

            // Cambiar valor del modal title
            document.querySelector(".modal-title-editar").textContent = pkHojaTecnica;

            const modal = document.getElementById("modalVisorEditar");
            // Buscar los campos de entrada por clase y asignarles los valores
            modal.querySelector(".modal-id").textContent = idDatosAceites;
            modal.querySelector(".modal-pk").value = pkHojaTecnica;
            modal.querySelector(".modal-codigo").value = codigo;
            modal.querySelector(".modal-nombre").value = nombre;
            modal.querySelector(".modal-prueba1").value = prueba1;
            modal.querySelector(".modal-prueba2").value = prueba2;
            modal.querySelector(".modal-prueba3").value = prueba3;
            modal.querySelector(".modal-prueba4").value = prueba4;
            modal.querySelector(".modal-prueba5").value = prueba5;
            modal.querySelector(".modal-prueba6").value = prueba6;
            modal.querySelector(".modal-prueba7").value = prueba7;
            modal.querySelector(".modal-prueba8").value = prueba8;
            modal.querySelector(".modal-prueba9").value = prueba9;
            modal.querySelector(".modal-prueba10").value = prueba10;
            modal.querySelector(".modal-prueba11").value = prueba11;
            modal.querySelector(".modal-prueba12").value = prueba12;
            modal.querySelector(".modal-prueba13").value = prueba13;
            modal.querySelector(".modal-prueba14").value = prueba14;
            modal.querySelector(".modal-prueba15").value = prueba15;
            modal.querySelector(".modal-prueba16").value = prueba16;
            modal.querySelector(".modal-prueba17").value = prueba17;
            modal.querySelector(".modal-prueba18").value = prueba18;
            modal.querySelector(".modal-prueba19").value = prueba19;
            modal.querySelector(".modal-prueba20").value = prueba20;
            modal.querySelector(".modal-prueba21").value = prueba21;
            modal.querySelector(".modal-prueba22").value = prueba22;
            modal.querySelector(".modal-prueba23").value = prueba23;
            modal.querySelector(".modal-prueba24").value = prueba24;
            modal.querySelector(".modal-prueba25").value = prueba25;
            modal.querySelector(".modal-prueba26").value = prueba26;
            modal.querySelector(".modal-prueba27").value = prueba27;
            modal.querySelector(".modal-prueba28").value = prueba28;
            modal.querySelector(".modal-prueba29").value = prueba29;
            modal.querySelector(".modal-prueba30").value = prueba30;
            modal.querySelector(".modal-prueba31").value = prueba31;
            modal.querySelector(".modal-prueba32").value = prueba32;
            modal.querySelector(".modal-prueba33").value = prueba33;
            modal.querySelector(".modal-prueba34").value = prueba34;
            modal.querySelector(".modal-prueba35").value = prueba35;
            modal.querySelector(".modal-prueba36").value = prueba36;
            modal.querySelector(".modal-prueba37").value = prueba37;
            modal.querySelector(".modal-prueba38").value = prueba38;
            modal.querySelector(".modal-prueba39").value = prueba39;
            modal.querySelector(".modal-prueba43").value = prueba43;

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
