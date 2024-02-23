const { response } = require("express");

const menuController = {};

menuController.selectMenu = async (req, res = response) => {

  try {
    res.render("menu");
  } catch (error) {
    console.error("Error al obtener los datos de la tabla: " + error);
    return res
      .status(500)
      .render("error", { message: "Error al obtener los datos de la tabla" });
  }
};

module.exports = menuController;