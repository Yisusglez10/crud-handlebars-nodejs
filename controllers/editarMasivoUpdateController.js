const { response } = require("express");
const pool = require("../database");

editarMasivoUpdateController = {};

editarMasivoUpdateController.updateEditarMasivo = async (req, res = response) => {
    let connection;

    try {

        const {
            agregarPK,
            agregarCategoria,
            pruebaForm,
            nuevoDato
        } = req.body;

        console.log("Request Body Values:", {
            agregarPK,
            agregarCategoria,
            pruebaForm,
            nuevoDato
        });

        connection = await pool.getConnection(); // Obtiene una conexión del pool

        await connection.beginTransaction(); // Inicia la transacción

        try {
            let updateQuery, values;

            if (agregarCategoria === 'Aceite') {
                updateQuery = `UPDATE datos_aceites SET ${pruebaForm} = ? WHERE FK_HojaTecnicaDatosAceites = ?`;
            } else if (agregarCategoria === 'Grasa') {
                updateQuery = `UPDATE datos_grasas SET ${pruebaForm} = ? WHERE FK_HojaTecnicaDatosGrasas = ?`;
            } else {
                updateQuery = `UPDATE datos_otros SET ${pruebaForm} = ? WHERE FK_HojaTecnicaDatosOtros = ?`;
            }

            values = [
                nuevoDato,
                agregarPK,
            ];

            console.log('Query', updateQuery);

            // Realiza la operación de actualización en la base de datos utilizando updateQuery y values
            await connection.query(updateQuery, values);
            await connection.commit(); // Confirma la transacción si todo es exitoso
            // res.status(200).json({ success: true, message: "Datos actualizados correctamente" });
            res.redirect("/editarMasivo");
        } catch (error) {
            // Si ocurre un error en alguna de las consultas, revierte la transacción
            await connection.rollback();
            console.error("Error al insertar los datos en la tabla:", error);
            // res.status(500).json({ error: true, message: "Ha ocurrido un error en el servidor" })
            res.redirect("error");

        }
    } catch (error) {
        console.error("Error al insertar los datos en la tabla: ", error);
        // res.status(500).json({ error: true, message: "Ha ocurrido un error en el servidor" });
        res.redirect("error");

    }
    finally {
        if (connection) {
            connection.release(); // Libera la conexión de vuelta al pool
        }
    }

}

module.exports = editarMasivoUpdateController;