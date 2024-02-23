document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los elementos con la clase "btn-modal"
    const btnModalElements = document.querySelectorAll(".btn-modal");

    // Escuchar clic en cada botón con clase "btn-modal"
    btnModalElements.forEach((btn) => {
        btn.addEventListener("click", function () {
            // Obtener los datos de la fila a través de los atributos de datos personalizados
            const idDatosGrasas = btn.dataset.id;
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
            document.querySelector(".modal-title").textContent = pkHojaTecnica;

            const modal = document.getElementById("modalVisor");
            // Buscar los campos de entrada por clase y asignarles los valores
            // modal.querySelector(".modal-id").textContent = idInfoGeneralHT;
            modal.querySelector(".modal-pk").textContent = pkHojaTecnica;
            modal.querySelector(".modal-codigo").textContent = codigo;
            modal.querySelector(".modal-nombre").textContent = nombre;
            modal.querySelector(".modal-prueba1").textContent = prueba1;
            modal.querySelector(".modal-prueba19").textContent = prueba19;
            modal.querySelector(".modal-prueba20").textContent = prueba20;
            modal.querySelector(".modal-prueba26").textContent = prueba26;
            modal.querySelector(".modal-prueba37").textContent = prueba37;
            modal.querySelector(".modal-prueba38").textContent = prueba38;
            modal.querySelector(".modal-prueba39").textContent = prueba39;
            modal.querySelector(".modal-prueba40").textContent = prueba40;
            modal.querySelector(".modal-prueba41").textContent = prueba41;
            modal.querySelector(".modal-prueba42").textContent = prueba42;
            modal.querySelector(".modal-prueba43").textContent = prueba43;
            modal.querySelector(".modal-prueba44").textContent = prueba44;
            modal.querySelector(".modal-prueba45").textContent = prueba45;
            modal.querySelector(".modal-prueba46").textContent = prueba46;
            modal.querySelector(".modal-prueba47").textContent = prueba47;
            modal.querySelector(".modal-prueba48").textContent = prueba48;
            modal.querySelector(".modal-prueba49").textContent = prueba49;
            modal.querySelector(".modal-prueba50").textContent = prueba50;
            modal.querySelector(".modal-prueba51").textContent = prueba51;
            modal.querySelector(".modal-prueba52").textContent = prueba52;
            modal.querySelector(".modal-prueba53").textContent = prueba53;
            modal.querySelector(".modal-prueba54").textContent = prueba54;
            modal.querySelector(".modal-prueba55").textContent = prueba55;
            modal.querySelector(".modal-prueba56").textContent = prueba56;
            modal.querySelector(".modal-prueba57").textContent = prueba57;
            modal.querySelector(".modal-prueba58").textContent = prueba58;
            modal.querySelector(".modal-prueba59").textContent = prueba59;
            modal.querySelector(".modal-prueba60").textContent = prueba60;
            modal.querySelector(".modal-prueba61").textContent = prueba61;
            modal.querySelector(".modal-prueba62").textContent = prueba62;
            modal.querySelector(".modal-prueba63").textContent = prueba63;
            modal.querySelector(".modal-prueba64").textContent = prueba64;           

        });
    });
});
