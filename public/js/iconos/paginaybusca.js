// Variables globales
var paginaActual = 1;
var filasPorPagina = 10;
var table = document.getElementById("tablaDatos");
var tbody = table.getElementsByTagName("tbody")[0];
var tr = tbody.getElementsByTagName("tr");
var datosFiltrados = [];

// Obtener los elementos del DOM una sola vez
var perPageSelect = document.getElementById("perPageSelect");
var inputBusqueda = document.getElementById("inputBusqueda");
var paginationInfoElement = document.getElementById("paginationInfo");
var paginationButtons = document.getElementById("paginationButtons");

function mostrarTextoRegistros() {
  var inicio = (paginaActual - 1) * filasPorPagina + 1;
  var fin = Math.min(inicio + filasPorPagina - 1, datosFiltrados.length);
  var totalRegistros = datosFiltrados.length;

  // Generar el texto para mostrar los registros o el mensaje si no hay registros
  var texto;

  if (totalRegistros === 0) {
    // No se encontraron registros
    texto = "No se han encontrado registros.";
  } else {
    // Se encontraron registros, mostrar la información de paginación
    texto = `Mostrando registros del ${inicio} al ${fin} de un total de ${totalRegistros} registros.`;
  }

  // Actualizar el contenido del elemento con ID "paginationInfo"
  var paginationInfoElement = document.getElementById("paginationInfo");
  paginationInfoElement.textContent = texto;
}

function mostrarBotonesPaginacion() {
  var paginationButtons = document.getElementById("paginationButtons");
  var ultimaPagina = Math.ceil(datosFiltrados.length / filasPorPagina);
  var paginationHTML = "";
  var ellipsis = '<span class="paginacion-ellipsis">...</span>';

  // Función para agregar un botón de página
  function agregarBotonPagina(numero) {
    if (numero === paginaActual) {
      paginationHTML += '<button class="paginacion-active">' + numero + '</button>';
    } else {
      paginationHTML += '<button class="custom-page-link" onclick="irAPagina(' + numero + ')">' + numero + '</button>';
    }
  }

  // Botón "Anterior" deshabilitado si estamos en la página 1
  if (paginaActual > 1) {
    paginationHTML += '<button class="custom-navigation-button" onclick="irAPaginaAnterior()"> << </button>';
  } else {
    paginationHTML += '<button class="custom-navigation-button" disabled> << </button>';
  }

  // Botones de páginas
  if (paginaActual > 3) {
    agregarBotonPagina(1);
    paginationHTML += ellipsis;
  }

  var minPageToShow = Math.max(1, paginaActual - 2);
  var maxPageToShow = Math.min(paginaActual + 2, ultimaPagina);

  for (var i = minPageToShow; i <= maxPageToShow; i++) {
    agregarBotonPagina(i);
  }

  if (paginaActual < ultimaPagina - 2) {
    paginationHTML += ellipsis;
    agregarBotonPagina(ultimaPagina);
  }

  // Botón "Siguiente" deshabilitado si estamos en la última página
  if (paginaActual < ultimaPagina) {
    paginationHTML += '<button class="custom-navigation-button" onclick="irAPaginaSiguiente()"> >> </button>';
  } else {
    paginationHTML += '<button class="custom-navigation-button" disabled> >> </button>';
  }

  paginationButtons.innerHTML = paginationHTML;

  // Llamamos a la función para mostrar el texto de los registros
  mostrarTextoRegistros();
}

function mostrarPagina(pagina) {
  var inicio = (pagina - 1) * filasPorPagina;
  var fin = inicio + filasPorPagina;

  // Iterar sobre los elementos filtrados y mostrar u ocultar según la página actual
  for (var i = 0; i < datosFiltrados.length; i++) {
    if (i >= inicio && i < fin) {
      datosFiltrados[i].style.display = "";
    } else {
      datosFiltrados[i].style.display = "none";
    }
  }
  mostrarBotonesPaginacion();
}

// Ejecutar el código después de que la página se haya cargado completamente
document.addEventListener("DOMContentLoaded", function () {
  mostrarBotonesPaginacion();
});

// Función para cambiar la cantidad de filas por página
function cambiarFilasPorPagina() {
  var selectedValue = parseInt(perPageSelect.value, 10);
  var previousRowsPerPage = filasPorPagina;

  filasPorPagina = selectedValue;

  // Ajustar la página actual para mantener el mismo ítem visible
  var firstVisibleIndex = (paginaActual - 1) * previousRowsPerPage;
  paginaActual = Math.floor(firstVisibleIndex / filasPorPagina) + 1;

  mostrarPagina(paginaActual);
  // Aplicar estilos de filas alternadas después de cambiar el número de filas por página
  aplicarEstilosFilasAlternadas();
}

// Función para ir a una página específica
function irAPagina(pagina) {
  paginaActual = pagina;
  mostrarPagina(paginaActual);
  aplicarEstilosFilasAlternadas(); // Llamada a la función para aplicar estilos de filas alternadas después de cambiar de página
}

// Función para ir a la página anterior
function irAPaginaAnterior() {
  if (paginaActual > 1) {
    irAPagina(paginaActual - 1);
  }
}

// Función para ir a la página siguiente
function irAPaginaSiguiente() {
  var ultimaPagina = Math.ceil(datosFiltrados.length / filasPorPagina);

  if (paginaActual < ultimaPagina) {
    irAPagina(paginaActual + 1);
  }
}

function aplicarEstilosFilasAlternadas() {
  // Obtener todas las filas de la tabla que están visibles según la paginación y la búsqueda
  var filasVisibles = [];
  for (var i = 0; i < datosFiltrados.length; i++) {
    if (datosFiltrados[i].style.display !== "none") {
      filasVisibles.push(datosFiltrados[i]);
    }
  }

  // Iterar sobre las filas visibles y aplicar los estilos de fondo adecuados
  for (var i = 0; i < filasVisibles.length; i++) {

    // Obtener el índice real de la fila
    var rowIndex = (paginaActual - 1) * filasPorPagina + i;

    // Agregar la clase "fila-par" o "fila-impar" según el índice de la fila
    if (rowIndex % 2 === 0) {
      filasVisibles[i].classList.add("fila-par");
      filasVisibles[i].classList.remove("fila-impar");
    } else {
      filasVisibles[i].classList.add("fila-impar");
      filasVisibles[i].classList.remove("fila-par");
    }
  }
}

// Función para realizar la búsqueda con debounce
function buscarConDebounce() {
  clearTimeout(buscarConDebounce.timeout);
  buscarConDebounce.timeout = setTimeout(function () {
    buscar();
    aplicarEstilosFilasAlternadas(); // Llamada a la función para aplicar estilos a las filas alternadas después de la búsqueda
  }, 500); // Cambiar el valor de 500 a la cantidad de milisegundos deseada para el tiempo de espera
}

// Función para realizar la búsqueda
function buscar() {
  var filter, i, td, txtValue;
  filter = inputBusqueda.value.toUpperCase();
  datosFiltrados = [];

  // Iterar sobre todas las filas de datos y realizar la búsqueda
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    var found = false;

    // Iterar sobre las celdas de la fila actual y buscar el texto ingresado
    for (var j = 1; j < td.length; j++) { // Comienza desde el segundo td porque no quiero que busque por ID (Si quiero desde el primer td es j=0)
      if (td[j]) {
        txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          found = true;
          break;
        }
      }
    }

    // Mostrar u ocultar la fila según el resultado de la búsqueda
    if (found) {
      datosFiltrados.push(tr[i]);
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }

  // Reiniciar la paginación a la primera página cuando se realiza una búsqueda
  paginaActual = 1;
  mostrarPagina(paginaActual);
}

// Agregar un event listener al input para escuchar el evento "keyup" en lugar de "input"
inputBusqueda.addEventListener("keyup", function () {
  buscarConDebounce();
});

// Agregar los eventos a los elementos del DOM
perPageSelect.addEventListener("change", cambiarFilasPorPagina);
document.getElementById("prevButton").addEventListener("click", irAPaginaAnterior);
document.getElementById("nextButton").addEventListener("click", irAPaginaSiguiente);

// Realizar la búsqueda inicial al cargar la página
buscar();
aplicarEstilosFilasAlternadas();
