const { response } = require("express");
const pool = require("../database");

const especialAceitesController = {};

especialAceitesController.selectEspecialAceites = async (req, res = response) => {
  const query = "SELECT * FROM especial_aceites ORDER BY FK_HojaTecnicaEspecialAceites ASC";

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(query);
    connection.release();

    res.render("especialAceites", { data: rows });
  } catch (error) {
    console.error("Error al obtener los datos de la tabla: " + error);
    return res
      .status(500)
      .render("error", { message: "Error al obtener los datos de la tabla" });
  }
};

module.exports = especialAceitesController;
