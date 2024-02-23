document.addEventListener("DOMContentLoaded", function () {
     const opcionesSelect = document.getElementById("agregarCategoria");
     const dnoneAceites = document.querySelectorAll(".d-none.acordeonAceites");
     const dnoneGrasas = document.querySelectorAll(".d-none.acordeonGrasas");
     const dnoneOtros = document.querySelectorAll(".d-none.acordeonOtros");
     
     // Definir función para aplicar cambios según el valor
     function applyChanges(elementos, showCondition) {
          elementos.forEach((elemento) => {
               if (showCondition) {
                    elemento.classList.remove("d-none");
               } else {
                    elemento.classList.add("d-none");
               }
          });
     }

     opcionesSelect.addEventListener("change", function () {
          const value = opcionesSelect.options[opcionesSelect.selectedIndex].value;

          applyChanges(dnoneAceites, value === "Aceite");
          applyChanges(dnoneGrasas, value === "Grasa");
          applyChanges(dnoneOtros, value !== "Aceite" && value !== "Grasa");
     });
});
