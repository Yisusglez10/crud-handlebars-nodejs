document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los elementos con la clase "btn-modal"
    const datos = document.querySelectorAll(".btn-modal-editar");

    // Iterar sobre todos los botones
    datos.forEach((dato) => {
        // Agrega un evento clic a cada botón
        dato.addEventListener('click', function () {
            // Obtén los datos del botón
            const idIconos = dato.dataset.id;
            const pkHojaTecnica = dato.dataset.pk;
            const presentacion19l = dato.dataset.presentacion19l;
            const presentacion200l = dato.dataset.presentacion200l;
            const presentacion1l = dato.dataset.presentacion1l;
            const presentacion18kg = dato.dataset.presentacion18kg ; 
            const presentacion180kg = dato.dataset.presentacion180kg ; 
            const presentacion1kg = dato.dataset.presentacion1kg ; 
            const presentacion4kg = dato.dataset.presentacion4kg ; 
            const presentacion15kg = dato.dataset.presentacion15kg ; 
            const presentacion17kg = dato.dataset.presentacion17kg ; 
            const presentacion20kg = dato.dataset.presentacion20kg ; 
            const presentacionct4kg = dato.dataset.presentacionct4kg ; 
            const presentacionspray = dato.dataset.presentacionspray ; 
            const presentacion5l = dato.dataset.presentacion5l ; 
            const presentacion1000l = dato.dataset.presentacion1000l ; 
            const presentacion1000kg = dato.dataset.presentacion1000kg ; 
 
            // Cambiar valor del modal title
            document.querySelector(".modal-title-editar").textContent = pkHojaTecnica;

            const modal = document.getElementById("modalVisorEditar");

            modal.querySelector(".modal-id").value = idIconos;
            modal.querySelector(".modal-pk").value = pkHojaTecnica;

            // Obtener la casilla de verificación por su atributo 'name'
            const l1Checkbox = modal.querySelector('input[name="l1"]');
            l1Checkbox.checked = presentacion1l === '1';  // Configura el estado según el valor

            const l5Checkbox = modal.querySelector('input[name="l5"]');
            l5Checkbox.checked = presentacion5l === '1'; 

            const l19Checkbox = modal.querySelector('input[name="l19"]');
            l19Checkbox.checked = presentacion19l === '1';  

            const l200Checkbox = modal.querySelector('input[name="l200"]');
            l200Checkbox.checked = presentacion200l === '1';  

            const l1000Checkbox = modal.querySelector('input[name="l1000"]');
            l1000Checkbox.checked = presentacion1000l === '1'; 

            const kg1Checkbox = modal.querySelector('input[name="kg1"]');
            kg1Checkbox.checked = presentacion1kg === '1'; 

            const kg4Checkbox = modal.querySelector('input[name="kg4"]');
            kg4Checkbox.checked = presentacion4kg === '1';  

            const kg15Checkbox = modal.querySelector('input[name="kg15"]');
            kg15Checkbox.checked = presentacion15kg === '1';  

            const kg17Checkbox = modal.querySelector('input[name="kg17"]');
            kg17Checkbox.checked = presentacion17kg === '1'; 

            const kg18Checkbox = modal.querySelector('input[name="kg18"]');
            kg18Checkbox.checked = presentacion18kg === '1'; 

            const kg20Checkbox = modal.querySelector('input[name="kg20"]');
            kg20Checkbox.checked = presentacion20kg === '1';  

            const kg180Checkbox = modal.querySelector('input[name="kg180"]');
            kg180Checkbox.checked = presentacion180kg === '1';  

            const kg1000Checkbox = modal.querySelector('input[name="kg1000"]');
            kg1000Checkbox.checked = presentacion1000kg === '1'; 

            const ct4kgCheckbox = modal.querySelector('input[name="ct4kg"]');
            ct4kgCheckbox.checked = presentacionct4kg === '1'; 

            const sprayCheckbox = modal.querySelector('input[name="spray"]');
            sprayCheckbox.checked = presentacionspray === '1';  
        
        });
    });
});
