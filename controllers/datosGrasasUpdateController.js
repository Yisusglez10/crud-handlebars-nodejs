const { response } = require("express");
const pool = require("../database");

datosGrasasUpdateController = {};

datosGrasasUpdateController.updateDatosGrasas = async (req, res = response) => {

    const {
        textareaID,
        textareaPK,
        textareaCodigo,
        textareaNombre,
        textareaPrueba1,
        textareaPrueba19,
        textareaPrueba20,
        textareaPrueba26,
        textareaPrueba37,
        textareaPrueba38,
        textareaPrueba39,
        textareaPrueba40,
        textareaPrueba41,
        textareaPrueba42,
        textareaPrueba43,
        textareaPrueba44,
        textareaPrueba45,
        textareaPrueba46,
        textareaPrueba47,
        textareaPrueba48,
        textareaPrueba49,
        textareaPrueba50,
        textareaPrueba51,
        textareaPrueba52,
        textareaPrueba53,
        textareaPrueba54,
        textareaPrueba55,
        textareaPrueba56,
        textareaPrueba57,
        textareaPrueba58,
        textareaPrueba59,
        textareaPrueba60,
        textareaPrueba61,
        textareaPrueba62,
        textareaPrueba63,
        textareaPrueba64
    } = req.body;

    const updateQuery = `UPDATE datos_grasas SET codigoGrasa = ?, nombreGrasa = ?, prueba1 = ?,  prueba19 = ?, prueba20 = ?, prueba26 = ?, prueba37 = ?, 
    prueba38 = ?, prueba39 = ?, prueba40 = ?, prueba41 = ?, prueba42 = ?, prueba43 = ?, prueba44 = ?, prueba45 = ?, prueba46 = ?, prueba47 = ?, 
    prueba48 = ?, prueba49 = ?, prueba50 = ?, prueba51 = ?, prueba52 = ?, prueba53 = ?, prueba54 = ?, prueba55 = ?, prueba56 = ?, prueba57 = ?, 
    prueba58 = ?, prueba59 = ?, prueba60 = ?, prueba61 = ?, prueba62 = ?, prueba63 = ?, prueba64 = ? WHERE idDatosGrasas = ?`;

    const values = [
        textareaCodigo,
        textareaNombre,
        textareaPrueba1,
        textareaPrueba19,
        textareaPrueba20,
        textareaPrueba26,
        textareaPrueba37,
        textareaPrueba38,
        textareaPrueba39,
        textareaPrueba40,
        textareaPrueba41,
        textareaPrueba42,
        textareaPrueba43,
        textareaPrueba44,
        textareaPrueba45,
        textareaPrueba46,
        textareaPrueba47,
        textareaPrueba48,
        textareaPrueba49,
        textareaPrueba50,
        textareaPrueba51,
        textareaPrueba52,
        textareaPrueba53,
        textareaPrueba54,
        textareaPrueba55,
        textareaPrueba56,
        textareaPrueba57,
        textareaPrueba58,
        textareaPrueba59,
        textareaPrueba60,
        textareaPrueba61,
        textareaPrueba62,
        textareaPrueba63,
        textareaPrueba64,
        textareaID
    ]

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

module.exports = datosGrasasUpdateController;