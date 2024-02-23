document.addEventListener("DOMContentLoaded", function () {
    let divCounterGrasas = 0;

    function duplicarDiv() {
        divCounterGrasas++;
        const divToDuplicate = document.querySelector('.duplicarRowDatosGrasas');
        const clonedDiv = divToDuplicate.cloneNode(true);

        // Establecer el contenido de los textarea en el elemento clonado como vacío
        const textareaElements = clonedDiv.querySelectorAll('textarea');
        textareaElements.forEach(textarea => {
            textarea.value = "";
        });

        actualizarIDsNombres(clonedDiv);
        document.getElementById("contenedorDivsDatosGrasas").appendChild(clonedDiv);

        // Actualizar un campo oculto en el formulario con el valor de divCounterGrasas
        document.getElementById("divCounterInputgGrasas").value = divCounterGrasas;
    }

    function actualizarIDsNombres(elemento) {
        const elementosConID = elemento.querySelectorAll('[id]');
        const elementosConName = elemento.querySelectorAll('[name]');

        elementosConID.forEach(el => {
            el.id = `${el.id}_div${divCounterGrasas}`;
            console.log('Nuevo ID:', el.id); // Agregar esta línea para imprimir el nuevo ID
        });

        elementosConName.forEach(el => {
            el.name = `${el.name}_div${divCounterGrasas}`;
            console.log('Nuevo NAME:', el.name); // Agregar esta línea para imprimir la nueva clase

        });
    }

    function borrarDiv() {
        if (divCounterGrasas > 0) {
            const lastDiv = document.querySelector('.duplicarRowDatosGrasas:last-child');
            if (lastDiv) {
                lastDiv.parentNode.removeChild(lastDiv);
                divCounterGrasas--;
                // Actualizar el campo oculto con el nuevo valor de divCounterGrasas
                document.getElementById("divCounterInputgGrasas").value = divCounterGrasas;
            }
        }
    }


    document.getElementById("agregarDivDatosGrasas").addEventListener("click", function () {
        duplicarDiv();
    });

    document.getElementById("borrarDivDatosGrasas").addEventListener("click", function () {
        borrarDiv();
    });


});
