const { response } = require("express");
const pool = require("../database");

datosOtrosPostController = {};

datosOtrosPostController.postDatosOtros = async (req, res = response) => {

    const {
        textareaID,
        textareaPK,
        textareaCodigo,
        textareaNombre,
        textareaPrueba2,
        textareaPrueba3,
        textareaPrueba4,
        textareaPrueba5,
        textareaPrueba7,
        textareaPrueba9,
        textareaPrueba19,
        textareaPrueba20,
        textareaPrueba26,
        textareaPrueba30,
        textareaPrueba31,
        textareaPrueba32,
        textareaPrueba33,
        textareaPrueba34,
        textareaPrueba36,
        textareaPrueba37,
        textareaPrueba38,
        textareaPrueba39,
        textareaPrueba41,
        textareaPrueba43,
        textareaPrueba44,
        textareaPrueba46,
        textareaPrueba49,
        textareaPrueba51,
        textareaPrueba54,
        textareaPrueba63,
        textareaPrueba65,
        textareaPrueba66,
        textareaPrueba67,
        textareaPrueba68,
    } = req.body;

    const queryInsert = `INSERT INTO datos_otros (FK_HojaTecnicaDatosOtros, otroCodigo, otroNombre, prueba2, prueba3, prueba4, prueba5, prueba7, prueba9, prueba19, 
    prueba20, prueba26, prueba30, prueba31, prueba32, prueba33, prueba34, prueba36, prueba37, prueba38, prueba39, prueba41, prueba43, prueba44, prueba46, 
    prueba49, prueba51, prueba54, prueba63, prueba65, prueba66, prueba67, prueba68) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
        textareaPK,
        textareaCodigo,
        textareaNombre,
        textareaPrueba2,
        textareaPrueba3,
        textareaPrueba4,
        textareaPrueba5,
        textareaPrueba7,
        textareaPrueba9,
        textareaPrueba19,
        textareaPrueba20,
        textareaPrueba26,
        textareaPrueba30,
        textareaPrueba31,
        textareaPrueba32,
        textareaPrueba33,
        textareaPrueba34,
        textareaPrueba36,
        textareaPrueba37,
        textareaPrueba38,
        textareaPrueba39,
        textareaPrueba41,
        textareaPrueba43,
        textareaPrueba44,
        textareaPrueba46,
        textareaPrueba49,
        textareaPrueba51,
        textareaPrueba54,
        textareaPrueba63,
        textareaPrueba65,
        textareaPrueba66,
        textareaPrueba67,
        textareaPrueba68,
    ]


    try {
        connection = await pool.getConnection();
        await connection.query(queryInsert, values);
        console.log('Datos insertados correctamente');
        // res.render('datosAceites');
        res.redirect('/datosOtros');
    } catch (error) {
        console.error("Error al insertar datos:", error);
        return res
            .status(500)
            .render("error", { message: "Error al insertar datos" });
    } finally {
        if (connection) {
            connection.release();
            console.log('Conexión liberada');
        }
    }
}

module.exports = datosOtrosPostController;