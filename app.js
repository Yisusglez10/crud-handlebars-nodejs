const express = require('express');
const path = require('path');
const session = require('express-session');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Configuración de la plantilla de vistas
app.set('view engine', 'hbs');

//json test
app.use(express.json());
// Middleware para analizar el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true }));

// Var de session
app.use(session({
  secret: 'ZvWxPmCI1tcrdhz0yHTIgU6mVVc1MJuFc1IuWi0IKU5tSJtbs8EZOCSOPeQEXF9U',
  resave: true,
  saveUninitialized: true,
}));

// Base de datos
const pool = require("./database");

// Rutas
const loginController = require('./controllers/loginController');
app.get('/login', loginController.selectLogin);

// Autenticar
app.post('/auth', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Busca el usuario en la base de datos
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

    if (rows.length > 0) {
      // Compara la contraseña ingresada con la contraseña almacenada
      if (password === rows[0].password) {
        // Autenticación exitosa, guarda información del usuario en la sesión
        req.session.loggedin = true;
        req.session.user = {
          id: rows[0].id,
          username: rows[0].username,
        };
        res.redirect('/');
      }
      else {
        console.error('Credenciales incorrectas');;
        res.render('login', { error: 'Credenciales incorrectas' });
      }
    } else {
      console.error('Credenciales incorrectas');
      res.render('login', { error: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error en la autenticación:', error);
    res.render('login', { error: 'Error al procesar la solicitud' });
  }
});

//Logout
const authController = require('./controllers/authController');
app.get('/logout', authController.logout);

app.use(express.static(path.join(__dirname, 'public')));

// Rutas estáticas de Bootstrap
app.use('/bootstrap', express.static(path.join(__dirname, 'public', 'css')));
app.use('/bootstrap', express.static(path.join(__dirname, 'public', 'js')));

// Middleware para deshabilitar la caché
app.use((req, res, next) => {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});

// Usar el enrutador como middleware
const routes = require('./Routes/routes');
app.use(routes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).render('error', { message: 'No se insertó el dato o no se encontró la página' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en ${port}`);
});