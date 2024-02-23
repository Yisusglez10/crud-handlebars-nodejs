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
            const iconobio = dato.dataset.iconobio;
            const icononsf = dato.dataset.icononsf;
            const iconoiso21469 = dato.dataset.iconoiso21469;
            const iconohalal = dato.dataset.iconohalal ; 
            const iconokosher = dato.dataset.iconokosher ; 
            const iconorodamientos = dato.dataset.iconorodamientos ; 
            const iconosistemashidraulicos = dato.dataset.iconosistemashidraulicos ; 
            const iconoturbinas = dato.dataset.iconoturbinas ; 
            const iconocompresores = dato.dataset.iconocompresores ; 
            const iconocajadeengranes = dato.dataset.iconocajadeengranes ; 
            const iconoengranes = dato.dataset.iconoengranes ; 
            const iconocoronas = dato.dataset.iconocoronas ; 
            const iconochumaceras = dato.dataset.iconochumaceras ; 
            const iconocojinetes = dato.dataset.iconocojinetes ; 
            const iconocadenas = dato.dataset.iconocadenas ; 
            const iconocables = dato.dataset.iconocables ; 
            const iconovalvulas = dato.dataset.iconovalvulas ; 
            const iconocoples = dato.dataset.iconocoples ; 
            const iconoantiaferrante = dato.dataset.iconoantiaferrante ; 
            const iconotorno = dato.dataset.iconotorno ; 
            const iconodeformacion = dato.dataset.iconodeformacion ; 
            const iconotroquelado = dato.dataset.iconotroquelado ; 
            const iconoriel = dato.dataset.iconoriel ; 
            const iconotransportadora = dato.dataset.iconotransportadora ; 
            const iconotemperaturasextremas = dato.dataset.iconotemperaturasextremas ; 
            const iconoaltastemperaturas = dato.dataset.iconoaltastemperaturas ; 
            const iconobajastemperaturas = dato.dataset.iconobajastemperaturas ; 
            const iconoaltascargas = dato.dataset.iconoaltascargas ; 
            const iconoaltasvelocidades = dato.dataset.iconoaltasvelocidades ; 
            const iconoaltacontaminacion = dato.dataset.iconoaltacontaminacion ; 
            const iconolavadoporagua = dato.dataset.iconolavadoporagua ; 
            const iconoambientesquimicos = dato.dataset.iconoambientesquimicos ; 
            const iconovibracioneimpacto = dato.dataset.iconovibracioneimpacto ; 
            const iconocompatible = dato.dataset.iconocompatible ; 
            const iconoperiodoeelubricacion = dato.dataset.iconoperiodoeelubricacion ; 
            const iconobarrenado = dato.dataset.iconobarrenado ; 
            const iconobarrenadoprofundo = dato.dataset.iconobarrenadoprofundo ; 
            const iconoembutidoprofundo = dato.dataset.iconoembutidoprofundo ; 
            const iconoestampado = dato.dataset.iconoestampado ; 
            const iconolaminado = dato.dataset.iconolaminado ; 
            const iconoroscado = dato.dataset.iconoroscado ; 
            const iconofundicion = dato.dataset.iconofundicion ; 
            const iconobrocahdo = dato.dataset.iconobrocahdo ; 
            const iconofresado = dato.dataset.iconofresado ; 
            const iconotalladodeengranes = dato.dataset.iconotalladodeengranes ; 
            const iconooem = dato.dataset.iconooem ; 
            const iconoextrusion = dato.dataset.iconoextrusion ; 
            const iconodiecastingaluminio = dato.dataset.iconodiecastingaluminio ; 

            // Cambiar valor del modal title
            document.querySelector(".modal-title-editar").textContent = pkHojaTecnica;

            const modal = document.getElementById("modalVisorEditar");

            modal.querySelector(".modal-id").value = idIconos;
            modal.querySelector(".modal-pk").value = pkHojaTecnica;

            // Obtener la casilla de verificación por su atributo 'name'
            const bioCheckbox = modal.querySelector('input[name="bio"]');
            bioCheckbox.checked = iconobio === '1';  // Configura el estado según el valor

            const nsfCheckbox = modal.querySelector('input[name="nsf"]');
            nsfCheckbox.checked = icononsf === '1'; 

            const iso21469Checkbox = modal.querySelector('input[name="iso21469"]');
            iso21469Checkbox.checked = iconoiso21469 === '1';  

            const halalCheckbox = modal.querySelector('input[name="halal"]');
            halalCheckbox.checked = iconohalal === '1';  

            const kosherCheckbox = modal.querySelector('input[name="kosher"]');
            kosherCheckbox.checked = iconokosher === '1'; 

            const rodamientosCheckbox = modal.querySelector('input[name="rodamientos"]');
            rodamientosCheckbox.checked = iconorodamientos === '1'; 

            const sistemasHidraulicosCheckbox = modal.querySelector('input[name="sistemasHidraulicos"]');
            sistemasHidraulicosCheckbox.checked = iconosistemashidraulicos === '1';  

            const turbinasCheckbox = modal.querySelector('input[name="turbinas"]');
            turbinasCheckbox.checked = iconoturbinas === '1';  

            const compresoresCheckbox = modal.querySelector('input[name="compresores"]');
            compresoresCheckbox.checked = iconocompresores === '1'; 

            const cajaEngranesCheckbox = modal.querySelector('input[name="cajaEngranes"]');
            cajaEngranesCheckbox.checked = iconocajadeengranes === '1'; 

            const engranesCheckbox = modal.querySelector('input[name="engranes"]');
            engranesCheckbox.checked = iconoengranes === '1';  

            const coronasCheckbox = modal.querySelector('input[name="coronas"]');
            coronasCheckbox.checked = iconocoronas === '1';  

            const chumacerasCheckbox = modal.querySelector('input[name="chumaceras"]');
            chumacerasCheckbox.checked = iconochumaceras === '1'; 

            const cojinetesCheckbox = modal.querySelector('input[name="cojinetes"]');
            cojinetesCheckbox.checked = iconocojinetes === '1'; 

            const cadenasCheckbox = modal.querySelector('input[name="cadenas"]');
            cadenasCheckbox.checked = iconocadenas === '1';  

            const cablesCheckbox = modal.querySelector('input[name="cables"]');
            cablesCheckbox.checked = iconocables === '1';  

            const valvulasCheckbox = modal.querySelector('input[name="valvulas"]');
            valvulasCheckbox.checked = iconovalvulas === '1'; 

            const coplesCheckbox = modal.querySelector('input[name="coples"]');
            coplesCheckbox.checked = iconocoples === '1'; 

            const antiaferranteCheckbox = modal.querySelector('input[name="antiaferrante"]');
            antiaferranteCheckbox.checked = iconoantiaferrante === '1';  

            const tornoCheckbox = modal.querySelector('input[name="torno"]');
            tornoCheckbox.checked = iconotorno === '1';  

            const deformacionCheckbox = modal.querySelector('input[name="deformacion"]');
            deformacionCheckbox.checked = iconodeformacion === '1'; 

            const troqueladoCheckbox = modal.querySelector('input[name="troquelado"]');
            troqueladoCheckbox.checked = iconotroquelado === '1'; 

            const rielCheckbox = modal.querySelector('input[name="riel"]');
            rielCheckbox.checked = iconoriel === '1';  

            const transportadoraCheckbox = modal.querySelector('input[name="transportadora"]');
            transportadoraCheckbox.checked = iconotransportadora === '1';  

            const temperaturasExtremasCheckbox = modal.querySelector('input[name="temperaturasExtremas"]');
            temperaturasExtremasCheckbox.checked = iconotemperaturasextremas === '1'; 

            const altasTemperaturasCheckbox = modal.querySelector('input[name="altasTemperaturas"]');
            altasTemperaturasCheckbox.checked = iconoaltastemperaturas === '1'; 

            const bajasTemperaturasCheckbox = modal.querySelector('input[name="bajasTemperaturas"]');
            bajasTemperaturasCheckbox.checked = iconobajastemperaturas === '1'; 

            const altasCargasCheckbox = modal.querySelector('input[name="altasCargas"]');
            altasCargasCheckbox.checked = iconoaltascargas === '1'; 

            const altasVelocidadesCheckbox = modal.querySelector('input[name="altasVelocidades"]');
            altasVelocidadesCheckbox.checked = iconoaltasvelocidades === '1'; 

            const altaContaminacionCheckbox = modal.querySelector('input[name="altaContaminacion"]');
            altaContaminacionCheckbox.checked = iconoaltacontaminacion === '1'; 

            const lavadoAguaCheckbox = modal.querySelector('input[name="lavadoAgua"]');
            lavadoAguaCheckbox.checked = iconolavadoporagua === '1'; 

            const ambientesQuimicosCheckbox = modal.querySelector('input[name="ambientesQuimicos"]');
            ambientesQuimicosCheckbox.checked = iconoambientesquimicos === '1'; 

            const vibracionImpactoCheckbox = modal.querySelector('input[name="vibracionImpacto"]');
            vibracionImpactoCheckbox.checked = iconovibracioneimpacto === '1'; 

            const compatibleCheckbox = modal.querySelector('input[name="compatible"]');
            compatibleCheckbox.checked = iconocompatible === '1'; 

            const periodoLubricacionCheckbox = modal.querySelector('input[name="periodoLubricacion"]');
            periodoLubricacionCheckbox.checked = iconoperiodoeelubricacion === '1'; 

            const barrenadoCheckbox = modal.querySelector('input[name="barrenado"]');
            barrenadoCheckbox.checked = iconobarrenado === '1'; 

            const barrenadoProfundoCheckbox = modal.querySelector('input[name="barrenadoProfundo"]');
            barrenadoProfundoCheckbox.checked = iconobarrenadoprofundo === '1'; 

            const embutidoProfundoCheckbox = modal.querySelector('input[name="embutidoProfundo"]');
            embutidoProfundoCheckbox.checked = iconoembutidoprofundo === '1'; 

            const estampadoCheckbox = modal.querySelector('input[name="estampado"]');
            estampadoCheckbox.checked = iconoestampado === '1'; 

            const laminadoCheckbox = modal.querySelector('input[name="laminado"]');
            laminadoCheckbox.checked = iconolaminado === '1'; 

            const roscadoCheckbox = modal.querySelector('input[name="roscado"]');
            roscadoCheckbox.checked = iconoroscado === '1'; 

            const fundicionCheckbox = modal.querySelector('input[name="fundicion"]');
            fundicionCheckbox.checked = iconofundicion === '1'; 

            const brocahdoCheckbox = modal.querySelector('input[name="brocahdo"]');
            brocahdoCheckbox.checked = iconobrocahdo === '1'; 

            const fresadoCheckbox = modal.querySelector('input[name="fresado"]');
            fresadoCheckbox.checked = iconofresado === '1'; 

            const talladoEngranesCheckbox = modal.querySelector('input[name="talladoEngranes"]');
            talladoEngranesCheckbox.checked = iconotalladodeengranes === '1'; 

            const oemCheckbox = modal.querySelector('input[name="oem"]');
            oemCheckbox.checked = iconooem === '1'; 

            const extrusionCheckbox = modal.querySelector('input[name="extrusion"]');
            extrusionCheckbox.checked = iconoextrusion === '1'; 

            const dieCastingCheckbox = modal.querySelector('input[name="dieCasting"]');
            dieCastingCheckbox.checked = iconodiecastingaluminio === '1'; 
        
        });
    });
});
