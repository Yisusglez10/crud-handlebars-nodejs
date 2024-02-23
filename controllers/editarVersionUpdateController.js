const { response } = require("express");
const pool = require("../database");

editarVersionUpdateController = {};

editarVersionUpdateController.updateEditarVersion = async (req, res = response) => {
    let connection;

    try {

        const {
            nuevaVersion
        } = req.body;

        console.log("Request Body Values:", {
            nuevaVersion
        });

        connection = await pool.getConnection(); // Obtiene una conexión del pool

        await connection.beginTransaction(); // Inicia la transacción

        try {

            let updateQuery, values;

            updateQuery = `UPDATE info_general_ht SET revision = ?`;

            values = [
                nuevaVersion
            ];

            // Realiza la operación de actualización en la base de datos utilizando updateQuery y values
            await connection.query(updateQuery, values);
            await connection.commit(); // Confirma la transacción si todo es exitoso
            res.redirect("/editarMasivo");


        } catch (error) {
            await connection.rollback();
            console.error("Error al insertar los datos en la tabla:", error);
            res.redirect("error");
        }

    } catch (error) {
        console.error("Error al insertar los datos en la tabla: ", error);
        res.redirect("error");
    }
    finally {
        if (connection) {
            connection.release(); // Libera la conexión de vuelta al pool
        }
    }

}

module.exports = editarVersionUpdateController;
