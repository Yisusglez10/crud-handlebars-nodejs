const { response } = require("express");
const pool = require("../database");

const especialAceitesAddController = {};

especialAceitesAddController.selectEspecialAceitesAdd = async (req, res = response) => {
  const query = "SELECT * FROM info_general_ht";

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(query);
    connection.release();

    res.render("especialAceitesAdd", { data: rows });
  } catch (error) {
    console.error("Error al obtener los datos de la tabla: " + error);
    return res
      .status(500)
      .render("error", { message: "Error al obtener los datos de la tabla" });
  }
};

module.exports = especialAceitesAddController;
