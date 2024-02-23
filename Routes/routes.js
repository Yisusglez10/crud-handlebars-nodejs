const express = require('express');
const router = express.Router();
const middleware = require('../middleware');

//Controlador de datos
const authController = require('../controllers/authController');
// router.get('/logout', authController.logout);

//Editar Masivo
const editarMasivoController = require('../controllers/editarMasivoController');
const editarMasivoUpdateController = require('../controllers/editarMasivoUpdateController');
    //Versiones
const editarVersionUpdateController = require('../controllers/editarVersionUpdateController');

//Add Hoja técnica
const agregarHTController = require('../controllers/agregarHTController')
const agregarHTAddController = require('../controllers/agregarHTAddController');

//Info General 
const infoGeneralController = require('../controllers/infoGeneralController');
const infoGeneralUpdateController = require('../controllers/infoGeneralUpdateController');
const infoGeneralDeleteController = require('../controllers/infoGeneralDeleteController');

//Datos Aceites
const datosAceitesController = require('../controllers/datosAceitesController');
const datosAceitesUpdateController = require('../controllers/datosAceitesUpdateController');
const datosAceitesDeleteController = require('../controllers/datosAceitesDeleteController');

const datosAceitesAddController = require('../controllers/datosAceitesAddController');
const datosAceitesPostController = require('../controllers/datosAceitesPostController');

//Datos Grasas
const datosGrasasController = require('../controllers/datosGrasasController');
const datosGrasasUpdateController = require('../controllers/datosGrasasUpdateController');
const datosGrasasDeleteController = require('../controllers/datosGrasasDeleteController');

const datosGrasasAddController = require('../controllers/datosGrasasAddController');
const datosGrasasPostController = require('../controllers/datosGrasasPostController');

//Datos Otros
const datosOtrosController = require('../controllers/datosOtrosController');
const datosOtrosUpdateController = require('../controllers/datosOtrosUpdateController');
const datosOtrosDeleteController = require('../controllers/datosOtrosDeleteController');

const datosOtrosAddController = require('../controllers/datosOtrosAddController');
const datosOtrosPostController = require('../controllers/datosOtrosPostController');

//Iconos
const iconosController = require('../controllers/iconosController');
const iconosUpdateController = require('../controllers/iconosUpdateController');

//Presentaciones
const presentacionesController = require('../controllers/presentacionesController');
const presentacionesUpdateController = require('../controllers/presentacionesUpdateController');

//Especial Aceites
const especialAceitesController = require('../controllers/especialAceitesController');
const especialAceitesAddController = require('../controllers/especialAceitesAddController');
const especialAceitesPostController = require('../controllers/especialAceitesPostController');
const especialAceitesDeleteController = require('../controllers/especialAceitesDeleteController');

//Especial Grasas
const especialGrasasController = require('../controllers/especialGrasasController');
const especialGrasasAddController = require('../controllers/especialGrasasAddController');
const especialGrasasPostController = require('../controllers/especialGrasasPostController');
const especialGrasasDeleteController = require('../controllers/especialGrasasDeleteController');


// # MIDDLEWARE # de autenticación para todas las rutas debajo en este archivo 
router.use(middleware.isAuthenticated);

//Menu Principal
router.get('/', (req, res) => {
    if (req.session.loggedin) {
      res.render('menu', {
        login: true,
        name: req.session.user.username
      });
    } else {
      res.redirect('/login');
    }
  });

//Ruta Agregar Hoja Técnica
router.get('/agregarHT', agregarHTController.selectHT);
//Insertar HT
router.post('/agregarHTInsert', agregarHTAddController.upload, agregarHTAddController.insertHT);

//Editar Masivo
router.get('/editarMasivo', editarMasivoController.selectEditarMasivo);
router.post('/editarMasivoPost', editarMasivoUpdateController.updateEditarMasivo);
router.post('/editarVersionPost', editarVersionUpdateController.updateEditarVersion);

//RUTAS INFO GENERAL
router.get('/infoGeneral', infoGeneralController.selectInfoGeneral);
//Ruta para manejar la solicitud update desde el formulario del modal
router.post('/infoGeneralUpdate', infoGeneralUpdateController.updateInfoGeneral);
//Ruta para manejar la solicitud delete desde el formulario del modal
router.post('/infoGeneralDelete/:pk', infoGeneralDeleteController.deleteInfoGeneral);

//RUTAS DATOS ACEITES
router.get('/datosAceites', datosAceitesController.selectDatosAceites);
router.post('/datosAceitesUpdate', datosAceitesUpdateController.updateDatosAceites);
router.post('/datosAceitesDelete/:id', datosAceitesDeleteController.deleteDatosAceites);

router.get('/datosAceitesAdd', datosAceitesAddController.selectDatosAceitesAdd);
router.post('/datosAceitesPost', datosAceitesPostController.postDatosAceites);

//RUTAS DATOS GRASAS
router.get('/datosGrasas', datosGrasasController.selectDatosGrasas);
router.post('/datosGrasasUpdate', datosGrasasUpdateController.updateDatosGrasas);
router.post('/datosGrasasDelete/:id', datosGrasasDeleteController.deleteDatosGrasas);

router.get('/datosGrasasAdd', datosGrasasAddController.selectDatosGrasasAdd);
router.post('/datosGrasasPost', datosGrasasPostController.postDatosGrasas);

//RUTAS DATOS OTROS
router.get('/datosOtros', datosOtrosController.selectDatosOtros);
router.post('/datosOtrosUpdate', datosOtrosUpdateController.updateDatosOtros);
router.post('/datosOtrosDelete/:id', datosOtrosDeleteController.deleteDatosOtros);

router.get('/datosOtrosAdd', datosOtrosAddController.selectDatosOtrosAdd);
router.post('/datosOtrosPost', datosOtrosPostController.postDatosOtros);

//RUTAS ICONOS
router.get('/iconos', iconosController.selectIconos);
router.post('/iconosUpdate', iconosUpdateController.updateIconos);

//RUTAS PRESENTACIONES
router.get('/presentaciones', presentacionesController.selectPresentaciones);
router.post('/presentacionesUpdate', presentacionesUpdateController.updatePresentaciones);

//RUTAS ESPECIAL ACEITES
router.get('/especialAceites', especialAceitesController.selectEspecialAceites);
router.get('/especialAceitesAdd', especialAceitesAddController.selectEspecialAceitesAdd);
router.post('/especialAceitesPost', especialAceitesPostController.upload, especialAceitesPostController.postEspecialAceites);
router.post('/especialAceitesDelete/:id', especialAceitesDeleteController.deleteEspecialAceites);

//RUTAS ESPECIAL GRASAS
router.get('/especialGrasas', especialGrasasController.selectEspecialGrasas);
router.get('/especialGrasasAdd', especialGrasasAddController.selectEspecialGrasasAdd);
router.post('/especialGrasasPost', especialGrasasPostController.upload, especialGrasasPostController.postEspecialGrasas);
router.post('/especialGrasasDelete/:id', especialGrasasDeleteController.deleteEspecialGrasas);

module.exports = router;