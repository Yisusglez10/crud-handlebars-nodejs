const { response } = require("express");
const pool = require("../database");

iconosUpdateController = {};

iconosUpdateController.updateIconos = async (req, res = response) => {

    const {
        textareaID,
        textareaPK,
        bio,
        nsf,
        iso21469,
        halal,
        kosher,
        rodamientos,
        sistemasHidraulicos,
        turbinas,
        compresores,
        cajaEngranes,
        engranes,
        coronas,
        chumaceras,
        cojinetes,
        cadenas,
        cables,
        valvulas,
        coples,
        antiaferrante,
        torno,
        deformacion,
        troquelado,
        riel,
        transportadora,
        temperaturasExtremas,
        altasTemperaturas,
        bajasTemperaturas,
        altasCargas,
        altasVelocidades,
        altaContaminacion,
        lavadoAgua,
        ambientesQuimicos,
        vibracionImpacto,
        compatible,
        periodoLubricacion,
        barrenado,
        barrenadoProfundo,
        embutidoProfundo,
        estampado,
        laminado,
        roscado,
        fundicion,
        brocahdo,
        fresado,
        talladoEngranes,
        oem,
        extrusion,
        dieCasting

    } = req.body;

    const updateQuery = `UPDATE iconos SET iconoBio = ?, iconoNsf = ?, iconoIso21469 = ?,  iconoHalal = ?, iconoKosher = ?, iconoRodamientos = ?, iconoSistemasHidraulicos = ?, 
    iconoTurbinas = ?, iconoCompresores = ?, iconoCajaDeEngranes = ?, iconoEngranes = ?, iconoCoronas = ?, iconoChumaceras = ?, iconoCojinetes = ?, iconoCadenas = ?, iconoCables = ?, 
    iconoValvulas = ?, iconoCoples = ?, iconoAntiaferrante = ?, iconoTorno = ?, iconoDeformacion = ?, iconoTroquelado = ?, iconoRiel = ?, iconoTransportadora = ?, iconoTemperaturasExtremas = ?, 
    iconoAltasTemperaturas = ?, iconoBajasTemperaturas = ?, iconoAltasCargas = ?, iconoAltasVelocidades = ?, iconoAltaContaminacion = ?, iconoLavadoPorAgua = ?, iconoAmbientesQuimicos = ?, 
    iconoVibracionEImpacto = ?, iconoCompatible = ?, iconoPeriodoDeLubricacion = ?, iconoBarrenado = ?, iconoBarrenadoProfundo = ?, iconoEmbutidoProfundo = ?, iconoEstampado = ?, 
    iconoLaminado = ?, iconoRoscado = ?, iconoFundicion = ?, iconoBrocahdo = ?, iconoFresado = ?, iconoTalladoDeEngranes = ?, iconoOem = ?, 
    iconoExtrusion = ?, iconoDieCastingAluminio = ? WHERE idIconos = ?`;

    console.log("quety: ", updateQuery); 

    const values = [
        bio,
        nsf,
        iso21469,
        halal,
        kosher,
        rodamientos,
        sistemasHidraulicos,
        turbinas,
        compresores,
        cajaEngranes,
        engranes,
        coronas,
        chumaceras,
        cojinetes,
        cadenas,
        cables,
        valvulas,
        coples,
        antiaferrante,
        torno,
        deformacion,
        troquelado,
        riel,
        transportadora,
        temperaturasExtremas,
        altasTemperaturas,
        bajasTemperaturas,
        altasCargas,
        altasVelocidades,
        altaContaminacion,
        lavadoAgua,
        ambientesQuimicos,
        vibracionImpacto,
        compatible,
        periodoLubricacion,
        barrenado,
        barrenadoProfundo,
        embutidoProfundo,
        estampado,
        laminado,
        roscado,
        fundicion,
        brocahdo,
        fresado,
        talladoEngranes,
        oem,
        extrusion,
        dieCasting,
        textareaID
    ]

    console.log("Valores: ", values);

    try {
        const connection = await pool.getConnection();
        await connection.query(updateQuery, values);
        connection.release();

    } catch (error) {
        console.error("Error al realizar la actualización: " + error);
        return res
            .status(500)
            .render("error", { message: "Error al realizar la actualización" });
    }
}

module.exports = iconosUpdateController;