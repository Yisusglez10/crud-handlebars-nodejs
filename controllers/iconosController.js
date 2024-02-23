const { response } = require("express");
const pool = require("../database");

const iconosController = {};

iconosController.selectIconos = async (req, res = response) => {
  const query = "SELECT * FROM iconos ORDER BY FK_HojaTecnicaIconos ASC";

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(query);
    connection.release();

    res.render("iconos", { data: rows });
  } catch (error) {
    console.error("Error al obtener los datos de la tabla: " + error);
    return res
      .status(500)
      .render("error", { message: "Error al obtener los datos de la tabla" });
  }
};

module.exports = iconosController;
