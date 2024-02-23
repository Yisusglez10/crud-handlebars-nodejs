const { response } = require("express");
const pool = require("../database");

presentacionesUpdateController = {};

presentacionesUpdateController.updatePresentaciones = async (req, res = response) => {

    const {
        textareaID,
        textareaPK,
        l19,
        l200,
        l1,
        kg18,
        kg180,
        kg1,
        kg4,
        kg15,
        kg17,
        kg20,
        ct4kg,
        spray,
        l5,
        l1000,
        kg1000
        
    } = req.body;

    const updateQuery = `UPDATE presentaciones SET presentacion19L = ?, presentacion200L = ?, presentacion1L = ?,  presentacion18KG = ?, presentacion180KG = ?, presentacion1KG = ?, 
    presentacion4KG = ?, presentacion15KG = ?, presentacion17KG = ?, presentacion20KG = ?, presentacionCT4KG = ?, presentacionSPRAY = ?, presentacion5L = ?, presentacion1000L = ?, 
    presentacion1000KG = ? WHERE idPresentaciones = ?`;

    const values = [
        l19,
        l200,
        l1,
        kg18,
        kg180,
        kg1,
        kg4,
        kg15,
        kg17,
        kg20,
        ct4kg,
        spray,
        l5,
        l1000,
        kg1000,
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

module.exports = presentacionesUpdateController;