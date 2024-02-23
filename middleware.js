
module.exports = {
    isAuthenticated: (req, res, next) => {
      if (req.session.loggedin) {
        // El usuario está autenticado, permite el acceso a la siguiente ruta
        next();
      } else {
        // El usuario no está autenticado, redirigir al login
        res.redirect('/login');
      }
    }
  };
