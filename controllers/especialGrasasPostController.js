const { response } = require("express");
const pool = require("../database");
const multer = require('multer');

// Configuración de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    const nombreUnico = Date.now() + '-' + file.originalname;
    cb(null, nombreUnico);
  }
});

const upload = multer({ storage: storage });

const postEspecialGrasas = async (req, res = response) => {
  let connection;

  try {
    console.log("Iniciando inserción de datos...");
    connection = await pool.getConnection(); // Obtiene una conexión del pool
    console.log("Obtenida la conexión del pool.");

    await connection.beginTransaction(); // Inicia la transacción

    const archivos = req.files; // Accede a la lista de archivos subidos

    // Verifica si hay archivos antes de realizar la lógica de inserción
    if (!archivos || archivos.length === 0) {
      throw new Error("No se proporcionaron archivos para la inserción.");
    }

    const { agregarPK } = req.body; // Extrae agregarPK de req.body

    // Itera sobre cada archivo y realiza la lógica de inserción
    for (const archivo of archivos) {
      const nombreArchivoEspecialGrasas = archivo.filename;

      // Lógica de inserción para cada archivo
      const queryEspecialGrasas = `
        INSERT INTO especial_grasas
        (FK_HojaTecnicaEspecialGrasas, archivoEspecialGrasa)
        VALUES (?, ?)`;

      const valuesEspecialGrasas = [agregarPK, nombreArchivoEspecialGrasas];

      await connection.query(queryEspecialGrasas, valuesEspecialGrasas);
    }

    await connection.commit(); // Si ambas consultas se ejecutan con éxito, confirma la transacción
    console.log("Datos insertados correctamente.");
    // res.status(200).json({ message: "Inserción exitosa" });
    res.redirect('/especialGrasas');
  } catch (error) {
    if (connection) {
      await connection.rollback();
      console.error("Error al insertar datos:", error);
      // res.status(500).render("error", { message: "Error al insertar datos" });
    res.redirect('/especialGrasas');
    }
  } finally {
    if (connection) {
      connection.release(); // Libera la conexión
      console.log('Conexión liberada');
    }
  }
};

module.exports = {
  postEspecialGrasas: postEspecialGrasas,
  upload: upload.array('fileInput'),
};
