const { response } = require("express");
const pool = require("../database")

datosOtrosDeleteController = {};

datosOtrosDeleteController.deleteDatosOtros = async (req, res = response) => {
  
  const idDatosOtros = req.params.id;

  // Query para eliminar por pk
  const deleteQuery = 'DELETE FROM datos_otros WHERE idDatosOtros = ?';

  console.log(deleteQuery);
  try {
    const connection = await pool.getConnection();
    // Ejecuta la consulta de eliminación pasando el pk como valor para el placeholder en el query
    await connection.query(deleteQuery, [idDatosOtros]);
    // Libera la conexión de vuelta al pool
    connection.release();

    res.redirect("/datosOtros"); // Redirige a la vista que muestra los datos actualizados
  } catch (error) {
    console.error('Error al realizar la eliminación: ' + error);
    return res.status(500).json({ error: 'Error al realizar la eliminación.' });
  }
}

module.exports = datosOtrosDeleteController;  

