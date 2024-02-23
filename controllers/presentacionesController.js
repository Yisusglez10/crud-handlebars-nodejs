const { response } = require("express");
const pool = require("../database");

const presentacionesController = {};

presentacionesController.selectPresentaciones = async (req, res = response) => {
  const query = "SELECT * FROM presentaciones ORDER BY FK_HojaTecnicaPresentaciones ASC";

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(query);
    connection.release();

    res.render("presentaciones", { data: rows });
  } catch (error) {
    console.error("Error al obtener los datos de la tabla: " + error);
    return res
      .status(500)
      .render("error", { message: "Error al obtener los datos de la tabla" });
  }
};

module.exports = presentacionesController;
