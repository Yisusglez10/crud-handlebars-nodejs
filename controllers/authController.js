const pool = require("../database");

const authController = {};

authController.logout = (req, res) => {
    // Destruye la sesión para cerrar sesión
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al cerrar sesión');
      }
  
      res.redirect('/login'); // Redirige a la página de inicio de sesión después de cerrar sesión
    });
  };

module.exports = authController;
