document.addEventListener("DOMContentLoaded", function () {
    let divCounter = 0;

    function duplicarDiv() {
        divCounter++;
        const divToDuplicate = document.querySelector('.duplicarRow');
        const clonedDiv = divToDuplicate.cloneNode(true);

        // Establecer el contenido de los textarea en el elemento clonado como vacío
        const textareaElements = clonedDiv.querySelectorAll('textarea');
        textareaElements.forEach(textarea => {
            textarea.value = "";
        });

        actualizarIDsNombres(clonedDiv);
        document.getElementById("contenedorDivs").appendChild(clonedDiv);

        // Actualizar un campo oculto en el formulario con el valor de divCounter
        document.getElementById("divCounterInput").value = divCounter;
    }

    function actualizarIDsNombres(elemento) {
        const elementosConID = elemento.querySelectorAll('[id]');
        const elementosConName = elemento.querySelectorAll('[name]');

        elementosConID.forEach(el => {
            el.id = `${el.id}_div${divCounter}`;
            console.log('Nuevo ID:', el.id); // Agregar esta línea para imprimir el nuevo ID
        });

        elementosConName.forEach(el => {
            el.name = `${el.name}_div${divCounter}`;
            console.log('Nuevo NAME:', el.name); // Agregar esta línea para imprimir la nueva clase

        });
    }

    function borrarDiv() {
        if (divCounter > 0) {
            const lastDiv = document.querySelector('.duplicarRow:last-child');
            if (lastDiv) {
                lastDiv.parentNode.removeChild(lastDiv);
                divCounter--;
                // Actualizar el campo oculto con el nuevo valor de divCounter
                document.getElementById("divCounterInput").value = divCounter;
            }
        }
    }


    document.getElementById("agregarDiv").addEventListener("click", function () {
        duplicarDiv();
    });

    document.getElementById("borrarDiv").addEventListener("click", function () {
        borrarDiv();
    });


});
