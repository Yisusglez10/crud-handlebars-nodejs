document.addEventListener("DOMContentLoaded", function () {
    let divCounterOtros = 0;

    function duplicarDiv() {
        divCounterOtros++;
        const divToDuplicate = document.querySelector('.duplicarRowDatosOtros'); //Div que se va a duplicar
        const clonedDiv = divToDuplicate.cloneNode(true);

        // Establecer el contenido de los textarea en el elemento clonado como vacío
        const textareaElements = clonedDiv.querySelectorAll('textarea');
        textareaElements.forEach(textarea => {
            textarea.value = "";
        });

        actualizarIDsNombres(clonedDiv);
        document.getElementById("contenedorDivsDatosOtros").appendChild(clonedDiv);

        // Actualizar un campo oculto en el formulario con el valor de divCounterOtros
        document.getElementById("divCounterInputOtros").value = divCounterOtros;
    }

    function actualizarIDsNombres(elemento) {
        const elementosConID = elemento.querySelectorAll('[id]');
        const elementosConName = elemento.querySelectorAll('[name]');

        elementosConID.forEach(el => {
            el.id = `${el.id}_div${divCounterOtros}`;
            console.log('Nuevo ID:', el.id); // Agregar esta línea para imprimir el nuevo ID
        });

        elementosConName.forEach(el => {
            el.name = `${el.name}_div${divCounterOtros}`;
            console.log('Nuevo NAME:', el.name); // Agregar esta línea para imprimir la nueva clase

        });
    }

    function borrarDiv() {
        if (divCounterOtros > 0) {
            const lastDiv = document.querySelector('.duplicarRowDatosOtros:last-child');
            if (lastDiv) {
                lastDiv.parentNode.removeChild(lastDiv);
                divCounterOtros--;
                // Actualizar el campo oculto con el nuevo valor de divCounterOtros
                document.getElementById("divCounterInputOtros").value = divCounterOtros;
            }
        }
    }


    document.getElementById("agregarDivDatosOtros").addEventListener("click", function () {
        duplicarDiv();
    });

    document.getElementById("borrarDivDatosOtros").addEventListener("click", function () {
        borrarDiv();
    });


});
