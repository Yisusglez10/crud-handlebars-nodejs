const { response } = require("express");
const pool = require("../database");

const especialGrasasController = {};

especialGrasasController.selectEspecialGrasas = async (req, res = response) => {
  const query = "SELECT * FROM especial_grasas ORDER BY FK_HojaTecnicaEspecialGrasas ASC";

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(query);
    connection.release();

    res.render("especialGrasas", { data: rows });
  } catch (error) {
    console.error("Error al obtener los datos de la tabla: " + error);
    return res
      .status(500)
      .render("error", { message: "Error al obtener los datos de la tabla" });
  }
};

module.exports = especialGrasasController;
