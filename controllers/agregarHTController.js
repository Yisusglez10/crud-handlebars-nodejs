const { response } = require("express");

const agregarHTController = {};

agregarHTController.selectHT = async (req, res = response) => {

  try {
    res.render("agregarHojaTecnica");
  } catch (error) {
    console.error("Error al obtener los datos de la tabla: " + error);
    return res
      .status(500)
      .render("error", { message: "Error al obtener los datos de la tabla" });
  }
};

module.exports = agregarHTController;