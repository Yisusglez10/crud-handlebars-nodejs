const { response } = require("express");
const pool = require("../database");

datosOtrosUpdateController = {};

datosOtrosUpdateController.updateDatosOtros = async (req, res = response) => {

    const {
        textareaID,
        textareaPK,
        textareaCodigo,
        textareaNombre,
        textareaPrueba3,
        textareaPrueba4,
        textareaPrueba5,
        textareaPrueba2,
        textareaPrueba30,
        textareaPrueba20,
        textareaPrueba41,
        textareaPrueba43,
        textareaPrueba9,
        textareaPrueba44,
        textareaPrueba46,
        textareaPrueba7,
        textareaPrueba54,
        textareaPrueba19,
        textareaPrueba49,
        textareaPrueba51,
        textareaPrueba32,
        textareaPrueba33,
        textareaPrueba65,
        textareaPrueba31,
        textareaPrueba66,
        textareaPrueba34,
        textareaPrueba67,
        textareaPrueba68,
        textareaPrueba37,
        textareaPrueba63,
        textareaPrueba26,
        textareaPrueba36,
        textareaPrueba38,
        textareaPrueba39
    } = req.body;

    const updateQuery = `UPDATE datos_otros SET otroCodigo = ?, otroNombre = ?, prueba3 = ?, prueba4 = ?, prueba5 = ?, prueba2 = ?, prueba30 = ?, prueba20 = ?, prueba41 = ?, 
    prueba43 = ?, prueba9 = ?, prueba44 = ?, prueba46 = ?, prueba7 = ?, prueba54 = ?, prueba19 = ?, prueba49 = ?, prueba51 = ?, prueba32 = ?, prueba33 = ?, prueba65 = ?, 
    prueba31 = ?, prueba66 = ?, prueba34 = ?, prueba67 = ?, prueba68 = ?, prueba37 = ?, prueba63 = ?, prueba26 = ?, prueba36 = ?, prueba38 = ? , prueba39 = ? WHERE idDatosOtros = ?`;

    const values = [
        textareaCodigo,
        textareaNombre,
        textareaPrueba3,
        textareaPrueba4,
        textareaPrueba5,
        textareaPrueba2,
        textareaPrueba30,
        textareaPrueba20,
        textareaPrueba41,
        textareaPrueba43,
        textareaPrueba9,
        textareaPrueba44,
        textareaPrueba46,
        textareaPrueba7,
        textareaPrueba54,
        textareaPrueba19,
        textareaPrueba49,
        textareaPrueba51,
        textareaPrueba32,
        textareaPrueba33,
        textareaPrueba65,
        textareaPrueba31,
        textareaPrueba66,
        textareaPrueba34,
        textareaPrueba67,
        textareaPrueba68,
        textareaPrueba37,
        textareaPrueba63,
        textareaPrueba26,
        textareaPrueba36,
        textareaPrueba38,
        textareaPrueba39,
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

module.exports = datosOtrosUpdateController;