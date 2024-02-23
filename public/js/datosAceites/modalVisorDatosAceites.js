document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los elementos con la clase "btn-modal"
    const btnModalElements = document.querySelectorAll(".btn-modal");

    // Escuchar clic en cada botón con clase "btn-modal"
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
            document.querySelector(".modal-title").textContent = pkHojaTecnica;

            const modal = document.getElementById("modalVisor");
            // Buscar los campos de entrada por clase y asignarles los valores
            // modal.querySelector(".modal-id").textContent = idInfoGeneralHT;
            modal.querySelector(".modal-pk").textContent = pkHojaTecnica;
            modal.querySelector(".modal-codigo").textContent = codigo;
            modal.querySelector(".modal-nombre").textContent = nombre;
            modal.querySelector(".modal-prueba1").textContent = prueba1;
            modal.querySelector(".modal-prueba2").textContent = prueba2;
            modal.querySelector(".modal-prueba3").textContent = prueba3;
            modal.querySelector(".modal-prueba4").textContent = prueba4;
            modal.querySelector(".modal-prueba5").textContent = prueba5;
            modal.querySelector(".modal-prueba6").textContent = prueba6;
            modal.querySelector(".modal-prueba7").textContent = prueba7;
            modal.querySelector(".modal-prueba8").textContent = prueba8;
            modal.querySelector(".modal-prueba9").textContent = prueba9;
            modal.querySelector(".modal-prueba10").textContent = prueba10;
            modal.querySelector(".modal-prueba11").textContent = prueba11;
            modal.querySelector(".modal-prueba12").textContent = prueba12;
            modal.querySelector(".modal-prueba13").textContent = prueba13;
            modal.querySelector(".modal-prueba14").textContent = prueba14;
            modal.querySelector(".modal-prueba15").textContent = prueba15;
            modal.querySelector(".modal-prueba16").textContent = prueba16;
            modal.querySelector(".modal-prueba17").textContent = prueba17;
            modal.querySelector(".modal-prueba18").textContent = prueba18;
            modal.querySelector(".modal-prueba19").textContent = prueba19;
            modal.querySelector(".modal-prueba20").textContent = prueba20;
            modal.querySelector(".modal-prueba21").textContent = prueba21;
            modal.querySelector(".modal-prueba22").textContent = prueba22;
            modal.querySelector(".modal-prueba23").textContent = prueba23;
            modal.querySelector(".modal-prueba24").textContent = prueba24;
            modal.querySelector(".modal-prueba25").textContent = prueba25;
            modal.querySelector(".modal-prueba26").textContent = prueba26;
            modal.querySelector(".modal-prueba27").textContent = prueba27;
            modal.querySelector(".modal-prueba28").textContent = prueba28;
            modal.querySelector(".modal-prueba29").textContent = prueba29;
            modal.querySelector(".modal-prueba30").textContent = prueba30;
            modal.querySelector(".modal-prueba31").textContent = prueba31;
            modal.querySelector(".modal-prueba32").textContent = prueba32;
            modal.querySelector(".modal-prueba33").textContent = prueba33;
            modal.querySelector(".modal-prueba34").textContent = prueba34;
            modal.querySelector(".modal-prueba35").textContent = prueba35;
            modal.querySelector(".modal-prueba36").textContent = prueba36;
            modal.querySelector(".modal-prueba37").textContent = prueba37;
            modal.querySelector(".modal-prueba38").textContent = prueba38;
            modal.querySelector(".modal-prueba39").textContent = prueba39;
            modal.querySelector(".modal-prueba43").textContent = prueba43;
           

        });
    });
});
