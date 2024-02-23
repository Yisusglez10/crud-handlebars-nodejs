const { response } = require("express");
const pool = require("../database");
const fs = require("fs");
const path = require("path");

especialGrasasDeleteController = {};

especialGrasasDeleteController.deleteEspecialGrasas = async (req, res = response) => {
  const idEspecialGrasas = req.params.id;

  // Obtén el nombre de los archivos vinculados a los registros antes de eliminarlos de la base de datos
  const getFilesQuery = 'SELECT archivoEspecialGrasa FROM especial_grasas WHERE idEspecialGrasas = ?';

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(getFilesQuery, [idEspecialGrasas]);

    // Elimina los archivos del sistema de archivos
    rows.forEach((row) => {
      const filePath = path.join(__dirname, '../public/uploads', row.archivoEspecialGrasa); //row.archivoEspecialAceite Esto debe coincidir con el nombre de la tabla que contiene el nombre del archivo
      fs.unlinkSync(filePath);
    });
    
    // Query para eliminar por pk
    const deleteQuery = 'DELETE FROM especial_grasas WHERE idEspecialGrasas = ?';

    // Ejecuta la consulta de eliminación pasando el pk como valor para el placeholder en el query
    await connection.query(deleteQuery, [idEspecialGrasas]);
    
    // Libera la conexión de vuelta al pool
    connection.release();

    res.redirect("/especialGrasas"); // Redirige a la vista que muestra los datos actualizados
  } catch (error) {
    console.error('Error al realizar la eliminación: ' + error);
    return res.status(500).json({ error: 'Error al realizar la eliminación.' });
  }
}

module.exports = especialGrasasDeleteController;

