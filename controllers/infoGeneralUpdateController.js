const { response } = require("express");
const pool = require("../database");

infoGeneralUpdateController = {};

infoGeneralUpdateController.updateInfoGeneral = async (req, res = response) => {
  const {
    textareaID,
    textareaPK,
    textareaCategoria,
    textareaNombre,
    textareaSubtitulo,
    textareaDescripcion,
    textareaBeneficios,
    textareaAplicaciones,
    textareaColor,
    textareaTextura,
    textareaFormaAplicacion,
    textareaRevision,
    textareaExtra,
    textareaPropiedadesFisicas,
    textareaRecomendacionesMezcla,
    textareaPreparacionCompuesto,
    textareaCaracteristicas,
    textareaPreparacionSuperficie
  } = req.body;

  const updateQuery = `UPDATE info_general_ht SET categoria = ?, nombre = ?, subtitulo = ?, descripcion = ?, beneficios = ?, aplicaciones = ?, color = ?, textura = ?, 
  formaDeAplicacion = ?, revision = ?, extra = ?, propiedadesFisicas = ?, recomendacionesDeMezcla = ?, preparacionDelCompuesto = ?, caracteristicas = ?, 
  preparacionSuperficie = ? WHERE idInfoGeneralHT = ?`;

  const values = [textareaCategoria, textareaNombre, textareaSubtitulo, textareaDescripcion, textareaBeneficios, textareaAplicaciones, textareaColor, textareaTextura,
    textareaFormaAplicacion, textareaRevision, textareaExtra, textareaPropiedadesFisicas, textareaRecomendacionesMezcla, textareaPreparacionCompuesto, textareaCaracteristicas,
    textareaPreparacionSuperficie, textareaID];

  try {
    const connection = await pool.getConnection();
    await connection.query(updateQuery, values);
    connection.release();

  } catch (error) {
    console.error("Error al realizar la actualización: " + error);
    return res
      .status(500)
      .render("error", { message: "Error al realizar la actualización" });
  }
}

module.exports = infoGeneralUpdateController;

