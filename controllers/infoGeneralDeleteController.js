const { response } = require("express");
const pool = require("../database")

infoGeneralDeleteController = {};

infoGeneralDeleteController.deleteInfoGeneral = async (req, res = response) => {
  
  // const PK_HojaTecnica = req.body;
  const PK_HojaTecnica = req.params.pk;

  // console.log('Valor de PK_HojaTecnica:', PK_HojaTecnica);
  // Query para eliminar por pk
  const deleteQuery = 'DELETE FROM info_general_ht WHERE PK_HojaTecnica = ?';

  try {
    const connection = await pool.getConnection();
    // Ejecuta la consulta de eliminación pasando el pk como valor para el placeholder en el query
    await connection.query(deleteQuery, [PK_HojaTecnica]);
    // Libera la conexión de vuelta al pool
    connection.release();

    res.redirect("/infoGeneral"); // Redirige a la vista que muestra los datos actualizados

  } catch (error) {
    console.error('Error al realizar la eliminación: ' + error);
    return res.status(500).json({ error: 'Error al realizar la eliminación.' });
  }
}

module.exports = infoGeneralDeleteController;  

