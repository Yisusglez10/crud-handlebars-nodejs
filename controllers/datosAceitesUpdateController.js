const { response } = require("express");
const pool = require("../database");

datosAceitesUpdateController = {};

datosAceitesUpdateController.updateDatosAceites = async (req, res = response) => {

    const {
        textareaID,
        textareaPK,
        textareaCodigo,
        textareaNombre,
        textareaPrueba1,
        textareaPrueba2,
        textareaPrueba3,
        textareaPrueba4,
        textareaPrueba5,
        textareaPrueba6,
        textareaPrueba7,
        textareaPrueba8,
        textareaPrueba9,
        textareaPrueba10,
        textareaPrueba11,
        textareaPrueba12,
        textareaPrueba13,
        textareaPrueba14,
        textareaPrueba15,
        textareaPrueba16,
        textareaPrueba17,
        textareaPrueba18,
        textareaPrueba19,
        textareaPrueba20,
        textareaPrueba21,
        textareaPrueba22,
        textareaPrueba23,
        textareaPrueba24,
        textareaPrueba25,
        textareaPrueba26,
        textareaPrueba27,
        textareaPrueba28,
        textareaPrueba29,
        textareaPrueba30,
        textareaPrueba31,
        textareaPrueba32,
        textareaPrueba33,
        textareaPrueba34,
        textareaPrueba35,
        textareaPrueba36,
        textareaPrueba37,
        textareaPrueba38,
        textareaPrueba39,
        textareaPrueba43,
    } = req.body;

    const updateQuery = `UPDATE datos_aceites SET codigoAceite = ?, nombreAceite = ?, prueba1 = ?,  prueba2 = ?, prueba3 = ?, prueba4 = ?, prueba5 = ?, 
    prueba6 = ?, prueba7 = ?, prueba8 = ?, prueba9 = ?, prueba10 = ?, prueba11 = ?, prueba12 = ?, prueba13 = ?, prueba14 = ?, prueba15 = ?, 
    prueba16 = ?, prueba17 = ?, prueba18 = ?, prueba19 = ?, prueba20 = ?, prueba21 = ?, prueba22 = ?, prueba23 = ?, prueba24 = ?, prueba25 = ?, 
    prueba26 = ?, prueba27 = ?, prueba28 = ?, prueba29 = ?, prueba30 = ?, prueba31 = ?, prueba32 = ?, prueba33 = ?, prueba34 = ?, prueba35 = ?, 
    prueba36 = ?, prueba37 = ?, prueba38 = ?, prueba39 = ?, prueba43 = ? WHERE idDatosAceites = ?`;

    const values = [
        textareaCodigo,
        textareaNombre,
        textareaPrueba1,
        textareaPrueba2,
        textareaPrueba3,
        textareaPrueba4,
        textareaPrueba5,
        textareaPrueba6,
        textareaPrueba7,
        textareaPrueba8,
        textareaPrueba9,
        textareaPrueba10,
        textareaPrueba11,
        textareaPrueba12,
        textareaPrueba13,
        textareaPrueba14,
        textareaPrueba15,
        textareaPrueba16,
        textareaPrueba17,
        textareaPrueba18,
        textareaPrueba19,
        textareaPrueba20,
        textareaPrueba21,
        textareaPrueba22,
        textareaPrueba23,
        textareaPrueba24,
        textareaPrueba25,
        textareaPrueba26,
        textareaPrueba27,
        textareaPrueba28,
        textareaPrueba29,
        textareaPrueba30,
        textareaPrueba31,
        textareaPrueba32,
        textareaPrueba33,
        textareaPrueba34,
        textareaPrueba35,
        textareaPrueba36,
        textareaPrueba37,
        textareaPrueba38,
        textareaPrueba39,
        textareaPrueba43,
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

module.exports = datosAceitesUpdateController;