document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los elementos con la clase "btn-modal"
    const btnModalElements = document.querySelectorAll(".btn-modal");

    // Escuchar clic en cada botón con clase "btn-modal"
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
            document.querySelector(".modal-title").textContent = pkHojaTecnica;

            const modal = document.getElementById("modalVisor");
            // Buscar los campos de entrada por clase y asignarles los valores
            // modal.querySelector(".modal-id").textContent = idInfoGeneralHT;
            modal.querySelector(".modal-pk").textContent = pkHojaTecnica;
            modal.querySelector(".modal-categoria").textContent = categoria;
            modal.querySelector(".modal-nombre").textContent = nombre;
            modal.querySelector(".modal-subtitulo").textContent = subtitulo;
            modal.querySelector(".modal-descripcion").textContent = descripcion;
            modal.querySelector(".modal-beneficios").textContent = beneficios;
            modal.querySelector(".modal-aplicaciones").textContent = aplicaciones;
            modal.querySelector(".modal-color").textContent = color;
            modal.querySelector(".modal-textura").textContent = textura;
            modal.querySelector(".modal-forma").textContent = forma;
            modal.querySelector(".modal-revision").textContent = revision;
            modal.querySelector(".modal-extra").textContent = extra;
            modal.querySelector(".modal-propiedades").textContent = propiedades;
            modal.querySelector(".modal-recomendaciones").textContent = recomendaciones;
            modal.querySelector(".modal-compuesto").textContent = compuesto;
            modal.querySelector(".modal-caracteristicas").textContent = caracteristicas;
            modal.querySelector(".modal-superficie").textContent = superficie;

        });
    });
});
