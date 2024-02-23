document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los elementos con la clase "btn-modal"
    const btnModalElements = document.querySelectorAll(".btn-modal");

    // Escuchar clic en cada botón con clase "btn-modal"
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
            document.querySelector(".modal-title").textContent = pkHojaTecnica;

            const modal = document.getElementById("modalVisor");
            // Buscar los campos de entrada por clase y asignarles los valores
            // modal.querySelector(".modal-id").textContent = idInfoGeneralHT;
            modal.querySelector(".modal-pk").textContent = pkHojaTecnica;
            modal.querySelector(".modal-codigo").textContent = codigo;
            modal.querySelector(".modal-nombre").textContent = nombre;
            modal.querySelector(".modal-prueba3").textContent = prueba3;
            modal.querySelector(".modal-prueba4").textContent = prueba4;
            modal.querySelector(".modal-prueba5").textContent = prueba5;
            modal.querySelector(".modal-prueba2").textContent = prueba2;
            modal.querySelector(".modal-prueba30").textContent = prueba30;
            modal.querySelector(".modal-prueba20").textContent = prueba20;
            modal.querySelector(".modal-prueba41").textContent = prueba41;
            modal.querySelector(".modal-prueba43").textContent = prueba43;
            modal.querySelector(".modal-prueba9").textContent = prueba9;
            modal.querySelector(".modal-prueba44").textContent = prueba44;
            modal.querySelector(".modal-prueba46").textContent = prueba46;
            modal.querySelector(".modal-prueba7").textContent = prueba7;
            modal.querySelector(".modal-prueba54").textContent = prueba54;
            modal.querySelector(".modal-prueba19").textContent = prueba19;
            modal.querySelector(".modal-prueba49").textContent = prueba49;
            modal.querySelector(".modal-prueba51").textContent = prueba51;
            modal.querySelector(".modal-prueba32").textContent = prueba32;
            modal.querySelector(".modal-prueba33").textContent = prueba33;
            modal.querySelector(".modal-prueba65").textContent = prueba65;
            modal.querySelector(".modal-prueba31").textContent = prueba31;
            modal.querySelector(".modal-prueba66").textContent = prueba66;
            modal.querySelector(".modal-prueba34").textContent = prueba34;
            modal.querySelector(".modal-prueba67").textContent = prueba67;
            modal.querySelector(".modal-prueba68").textContent = prueba68;
            modal.querySelector(".modal-prueba37").textContent = prueba37;
            modal.querySelector(".modal-prueba63").textContent = prueba63;
            modal.querySelector(".modal-prueba26").textContent = prueba26;
            modal.querySelector(".modal-prueba36").textContent = prueba36;
            modal.querySelector(".modal-prueba38").textContent = prueba38;
            modal.querySelector(".modal-prueba39").textContent = prueba39;
          

        });
    });
});
