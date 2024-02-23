const { response } = require("express");
const pool = require("../database");

const datosGrasasController = {};

datosGrasasController.selectDatosGrasas = async (req, res = response) => {
  const query = "SELECT * FROM datos_grasas ORDER BY FK_HojaTecnicaDatosGrasas ASC";

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(query);
    connection.release();

    res.render("datosGrasas", { data: rows });
  } catch (error) {
    console.error("Error al obtener los datos de la tabla: " + error);
    return res
      .status(500)
      .render("error", { message: "Error al obtener los datos de la tabla" });
  }
};

module.exports = datosGrasasController;


