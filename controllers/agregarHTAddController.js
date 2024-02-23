const { response } = require("express");
const pool = require("../database");
const path = require('path');
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

const fileFilter = (req, file, cb) => {
  const extname = path.extname(file.originalname);
  const allowedExtensions = ['.jpg', '.jpeg', '.png'];

  if (allowedExtensions.includes(extname.toLowerCase())) {
    return cb(null, true);
  } else {
    const error = new Error('Solo se permiten archivos de imagen (jpg, jpeg, png)');
    error.code = 'EXTENSION_ERROR'; // Puedes agregar un código para identificar el tipo de error
    return cb(error, false);
  }
};

// const upload = multer({ storage: storage });
const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

// const agregarHTAddController = {};
// agregarHTAddController.insertHT = async (req, res = response) => {
const insertHT = async (req, res = response) => {

  const {
    //CONTADOR DE DIVS PARA FOR DE INSERT DINÁMICOS
    divCounter,
    divCounterGrasas,
    divCounterOtros,

    //INFORMACIÓN GENERAL
    // agregarPK,
    agregarCategoria,
    agregarNombre,
    agregarSubtitulo,
    agregarDescripcion,
    agregarBeneficios,
    agregarAplicaciones,
    agregarColor,
    agregarTextura,
    agregarFormaAplicacion,
    agregarRevision,
    agregarExtra,
    agregarPropiedadesFisicas,
    agregarRecomendacionesMezcla,
    agregarPreparacionCompuesto,
    agregarCaracteristicas,
    agregarPreparacionSuperficie,

    //ICONOS
    bio,
    nsf,
    iso21469,
    halal,
    kosher,
    rodamientos,
    sistemasHidraulicos,
    turbinas,
    compresores,
    cajaEngranes,
    engranes,
    coronas,
    chumaceras,
    cojinetes,
    cadenas,
    cables,
    valvulas,
    coples,
    antiaferrante,
    torno,
    deformacion,
    troquelado,
    riel,
    transportadora,
    temperaturasExtremas,
    altasTemperaturas,
    bajasTemperaturas,
    altasCargas,
    altasVelocidades,
    altaContaminacion,
    lavadoAgua,
    ambientesQuimicos,
    vibracionImpacto,
    compatible,
    periodoLubricacion,
    barrenado,
    barrenadoProfundo,
    embutidoProfundo,
    estampado,
    laminado,
    roscado,
    fundicion,
    brocahdo,
    fresado,
    talladoEngranes,
    oem,
    extrusion,
    dieCasting,

    //PRESENTACIONES
    l1,
    l5,
    l19,
    l200,
    l1000,
    kg1,
    kg4,
    kg15,
    kg17,
    kg18,
    kg20,
    kg180,
    kg1000,
    ct4kg,
    spray,

    //DATOS ACEITES
    agregarIVP_DA,
    agregarNombre_DA,
    agregar1_DA,
    agregar2_DA,
    agregar3_DA,
    agregar4_DA,
    agregar5_DA,
    agregar6_DA,
    agregar7_DA,
    agregar8_DA,
    agregar9_DA,
    agregar10_DA,
    agregar11_DA,
    agregar12_DA,
    agregar13_DA,
    agregar14_DA,
    agregar15_DA,
    agregar16_DA,
    agregar17_DA,
    agregar18_DA,
    agregar19_DA,
    agregar20_DA,
    agregar21_DA,
    agregar22_DA,
    agregar23_DA,
    agregar24_DA,
    agregar25_DA,
    agregar26_DA,
    agregar27_DA,
    agregar28_DA,
    agregar29_DA,
    agregar30_DA,
    agregar31_DA,
    agregar32_DA,
    agregar33_DA,
    agregar34_DA,
    agregar35_DA,
    agregar36_DA,
    agregar37_DA,
    agregar38_DA,
    agregar39_DA,
    agregar43_DA,

    //DATOS GRASAS
    grasasAgregarIVP_DG,
    grasasAgregarNombre_DG,
    agregar1_DG,
    agregar19_DG,
    agregar20_DG,
    agregar26_DG,
    agregar37_DG,
    agregar38_DG,
    agregar39_DG,
    agregar40_DG,
    agregar41_DG,
    agregar42_DG,
    agregar43_DG,
    agregar44_DG,
    agregar45_DG,
    agregar46_DG,
    agregar47_DG,
    agregar48_DG,
    agregar49_DG,
    agregar50_DG,
    agregar51_DG,
    agregar52_DG,
    agregar53_DG,
    agregar54_DG,
    agregar55_DG,
    agregar56_DG,
    agregar57_DG,
    agregar58_DG,
    agregar59_DG,
    agregar60_DG,
    agregar61_DG,
    agregar62_DG,
    agregar63_DG,
    agregar64_DG,

    //DATOS OTROS
    agregarIVP_DO,
    agregarNombre_DO,
    agregar2_DO,
    agregar3_DO,
    agregar4_DO,
    agregar5_DO,
    agregar7_DO,
    agregar9_DO,
    agregar19_DO,
    agregar20_DO,
    agregar26_DO,
    agregar30_DO,
    agregar31_DO,
    agregar32_DO,
    agregar33_DO,
    agregar34_DO,
    agregar36_DO,
    agregar37_DO,
    agregar38_DO,
    agregar39_DO,
    agregar41_DO,
    agregar43_DO,
    agregar44_DO,
    agregar46_DO,
    agregar49_DO,
    agregar51_DO,
    agregar54_DO,
    agregar63_DO,
    agregar65_DO,
    agregar66_DO,
    agregar67_DO,
    agregar68_DO

  } = req.body;

  // var para poder reasignar la variable en caso de que meta espacios en Hoja Técnica
  var { agregarPK } = req.body;
  var agregarPK = agregarPK.trim();

  console.log("Valor Body", req.body);

  let connection;  // Definir connection fuera del bloque try
  try {
    // Accede al nombre del archivo subido a través de req.file
    // const nombreArchivoEspecialAceites = req.file.filename; 
    console.log("Iniciando inserción de datos...");
    connection = await pool.getConnection(); // Obtiene una conexión del pool
    console.log("Obtenida la conexión del pool.");

    await connection.beginTransaction(); // Inicia la transacción

    //TENGO QUE HACER VALIDAACION DE TODAS ALS TABLAS NO SOLO DE INFO GRAL? CREO ESTO ES PORQUE ESTOY BORRANDO SOLO LOS DATOS DE INFO GRAL HT Y NO DE TODAS
    const queryValidation = `
      SELECT PK_HojaTecnica FROM info_general_ht
      WHERE PK_HojaTecnica = ?`;
    const result = await connection.query(queryValidation, [agregarPK]);
    const numberOfRows = result[0].length;

    if (numberOfRows > 0) {
      // El valor ya existe, enviar una respuesta JSON con el error
      console.log("Resultados encontrados:", result.length);
      console.log("Valor duplicado encontrado en la validación.");
      // connection.release();

      return res.status(400).json({
        message: "Código de Hoja Técnica ya existe, intenta con otro",
      });
    }

    // Inicio If Aceite
    else if (agregarCategoria == "Aceite") {
      // INCIO QUERY INFOGENERAL
      const queryInfoGeneral = `
        INSERT INTO info_general_ht 
        (PK_HojaTecnica, categoria, nombre, subtitulo, descripcion, beneficios, aplicaciones, color, textura, formaDeAplicacion, 
        revision, extra, propiedadesFisicas, recomendacionesDeMezcla, preparacionDelCompuesto, caracteristicas, preparacionSuperficie) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const valuesInfoGral = [
        agregarPK,
        agregarCategoria,
        agregarNombre,
        agregarSubtitulo,
        agregarDescripcion,
        agregarBeneficios,
        agregarAplicaciones,
        agregarColor,
        agregarTextura,
        agregarFormaAplicacion,
        agregarRevision,
        agregarExtra,
        agregarPropiedadesFisicas,
        agregarRecomendacionesMezcla,
        agregarPreparacionCompuesto,
        agregarCaracteristicas,
        agregarPreparacionSuperficie,
      ];
      await connection.query(queryInfoGeneral, valuesInfoGral); // Ejecuta la consulta InfoGeneral
      // FINAL QUERY INFOGENERAL

      // INICIO QUERY ICONOS
      const queryIconos = `
        INSERT INTO iconos
        (FK_HojaTecnicaIconos, iconoBio, iconoNsf, iconoIso21469, iconoHalal, iconoKosher, iconoRodamientos, iconoSistemasHidraulicos, iconoTurbinas, iconoCompresores,
          iconoCajaDeEngranes, iconoEngranes, iconoCoronas, iconoChumaceras, iconoCojinetes, iconoCadenas, iconoCables, iconoValvulas, iconoCoples, iconoAntiaferrante,
          iconoTorno, iconoDeformacion, iconoTroquelado, iconoRiel, iconoTransportadora, iconoTemperaturasExtremas, iconoAltasTemperaturas, iconoBajasTemperaturas,
          iconoAltasCargas, iconoAltasVelocidades, iconoAltaContaminacion, iconoLavadoPorAgua, iconoAmbientesQuimicos, iconoVibracionEImpacto, iconoCompatible, 
          iconoPeriodoDeLubricacion, iconoBarrenado, iconoBarrenadoProfundo, iconoEmbutidoProfundo, iconoEstampado, iconoLaminado, iconoRoscado, iconoFundicion,
          iconoBrocahdo, iconoFresado, iconoTalladoDeEngranes, iconoOem, iconoExtrusion, iconoDieCastingAluminio)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const valuesIconos = [
        agregarPK,
        bio,
        nsf,
        iso21469,
        halal,
        kosher,
        rodamientos,
        sistemasHidraulicos,
        turbinas,
        compresores,
        cajaEngranes,
        engranes,
        coronas,
        chumaceras,
        cojinetes,
        cadenas,
        cables,
        valvulas,
        coples,
        antiaferrante,
        torno,
        deformacion,
        troquelado,
        riel,
        transportadora,
        temperaturasExtremas,
        altasTemperaturas,
        bajasTemperaturas,
        altasCargas,
        altasVelocidades,
        altaContaminacion,
        lavadoAgua,
        ambientesQuimicos,
        vibracionImpacto,
        compatible,
        periodoLubricacion,
        barrenado,
        barrenadoProfundo,
        embutidoProfundo,
        estampado,
        laminado,
        roscado,
        fundicion,
        brocahdo,
        fresado,
        talladoEngranes,
        oem,
        extrusion,
        dieCasting
      ];
      await connection.query(queryIconos, valuesIconos); // Ejecuta la consulta Iconos
      // FINAL QUERY ICONOS

      // INICIO QUERY PRESENTACIONES
      const queryPresentaciones = `
        INSERT INTO presentaciones
        (FK_HojaTecnicaPresentaciones, presentacion19L, presentacion200L, presentacion1L, presentacion18KG, presentacion180KG, presentacion1KG, presentacion4KG,
        presentacion15KG, presentacion17KG, presentacion20KG, presentacionCT4KG, presentacionSPRAY, presentacion5L, presentacion1000L, presentacion1000KG)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const valuesPresentaciones = [
        agregarPK,
        l19,
        l200,
        l1,
        kg18,
        kg180,
        kg1,
        kg4,
        kg15,
        kg17,
        kg20,
        ct4kg,
        spray,
        l5,
        l1000,
        kg1000,
      ];
      await connection.query(queryPresentaciones, valuesPresentaciones); // Ejecuta la consulta Presentaciones
      // FINAL QUERY PRESENTACIONES

      // INICIO QUERY DATOS ACEITES ESTATICO
      const queryDatosAceites = `
        INSERT INTO datos_aceites (FK_HojaTecnicaDatosAceites, codigoAceite, nombreAceite, prueba1, prueba2, prueba3, prueba4, prueba5, prueba6, prueba7, prueba8, 
        prueba9, prueba10, prueba11, prueba12, prueba13, prueba14, prueba15, prueba16, prueba17, prueba18, prueba19, prueba20, prueba43, prueba21, prueba22, prueba23, 
        prueba24, prueba25, prueba26, prueba27, prueba28, prueba29, prueba30, prueba31, prueba32, prueba33, prueba34, prueba35, prueba36, prueba37, prueba38, prueba39)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const valuesDatosAceites = [
        agregarPK,
        agregarIVP_DA,
        agregarNombre_DA,
        agregar1_DA,
        agregar2_DA,
        agregar3_DA,
        agregar4_DA,
        agregar5_DA,
        agregar6_DA,
        agregar7_DA,
        agregar8_DA,
        agregar9_DA,
        agregar10_DA,
        agregar11_DA,
        agregar12_DA,
        agregar13_DA,
        agregar14_DA,
        agregar15_DA,
        agregar16_DA,
        agregar17_DA,
        agregar18_DA,
        agregar19_DA,
        agregar20_DA,
        agregar43_DA,
        agregar21_DA,
        agregar22_DA,
        agregar23_DA,
        agregar24_DA,
        agregar25_DA,
        agregar26_DA,
        agregar27_DA,
        agregar28_DA,
        agregar29_DA,
        agregar30_DA,
        agregar31_DA,
        agregar32_DA,
        agregar33_DA,
        agregar34_DA,
        agregar35_DA,
        agregar36_DA,
        agregar37_DA,
        agregar38_DA,
        agregar39_DA,
      ];
      if (agregarIVP_DA == null || agregarIVP_DA == "") {
      } else {
        await connection.query(queryDatosAceites, valuesDatosAceites); // Datos Aceites div original
      }
      // FIN QUERY DATOS ACEITES ESTATICO

      // console.log("Valor obtenido del contador afuera del for: ", divCounter);

      // INCIO QUERY DATOS ACEITES DIANMICO
      for (let divNumber = 1; divNumber <= divCounter; divNumber++) {
        const dynamicValues = [
          req.body[`agregarPK`],
          req.body[`agregarIVP_DA_div${divNumber}`],
          req.body[`agregarNombre_DA_div${divNumber}`],
          req.body[`agregar1_DA_div${divNumber}`],
          req.body[`agregar2_DA_div${divNumber}`],
          req.body[`agregar3_DA_div${divNumber}`],
          req.body[`agregar4_DA_div${divNumber}`],
          req.body[`agregar5_DA_div${divNumber}`],
          req.body[`agregar6_DA_div${divNumber}`],
          req.body[`agregar7_DA_div${divNumber}`],
          req.body[`agregar8_DA_div${divNumber}`],
          req.body[`agregar9_DA_div${divNumber}`],
          req.body[`agregar10_DA_div${divNumber}`],
          req.body[`agregar11_DA_div${divNumber}`],
          req.body[`agregar12_DA_div${divNumber}`],
          req.body[`agregar13_DA_div${divNumber}`],
          req.body[`agregar14_DA_div${divNumber}`],
          req.body[`agregar15_DA_div${divNumber}`],
          req.body[`agregar16_DA_div${divNumber}`],
          req.body[`agregar17_DA_div${divNumber}`],
          req.body[`agregar18_DA_div${divNumber}`],
          req.body[`agregar19_DA_div${divNumber}`],
          req.body[`agregar20_DA_div${divNumber}`],
          req.body[`agregar21_DA_div${divNumber}`],
          req.body[`agregar22_DA_div${divNumber}`],
          req.body[`agregar23_DA_div${divNumber}`],
          req.body[`agregar24_DA_div${divNumber}`],
          req.body[`agregar25_DA_div${divNumber}`],
          req.body[`agregar26_DA_div${divNumber}`],
          req.body[`agregar27_DA_div${divNumber}`],
          req.body[`agregar28_DA_div${divNumber}`],
          req.body[`agregar29_DA_div${divNumber}`],
          req.body[`agregar30_DA_div${divNumber}`],
          req.body[`agregar31_DA_div${divNumber}`],
          req.body[`agregar32_DA_div${divNumber}`],
          req.body[`agregar33_DA_div${divNumber}`],
          req.body[`agregar34_DA_div${divNumber}`],
          req.body[`agregar35_DA_div${divNumber}`],
          req.body[`agregar36_DA_div${divNumber}`],
          req.body[`agregar37_DA_div${divNumber}`],
          req.body[`agregar38_DA_div${divNumber}`],
          req.body[`agregar39_DA_div${divNumber}`],
          req.body[`agregar43_DA_div${divNumber}`],
        ];
        // Construye la consulta de inserción dinámicamente
        const queryDatosAceitesFor = `
          INSERT INTO datos_aceites 
          (FK_HojaTecnicaDatosAceites, codigoAceite, nombreAceite, prueba1, prueba2, prueba3, prueba4, prueba5, prueba6, prueba7, prueba8, prueba9, prueba10, 
          prueba11, prueba12, prueba13, prueba14, prueba15, prueba16, prueba17, prueba18, prueba19, prueba20, prueba21, prueba22, prueba23, prueba24, prueba25, 
          prueba26, prueba27, prueba28, prueba29, prueba30, prueba31, prueba32, prueba33, prueba34, prueba35, prueba36, prueba37, prueba38, prueba39, prueba43) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        // Ejecuta la consulta de inserción inmediatamente
        await connection.query(queryDatosAceitesFor, dynamicValues);
        // Agrega logs para verificar los valores
        console.log(`Valores para divNumber ${divNumber}:`, dynamicValues);
        console.log(
          `Consulta para divNumber ${divNumber}:`,
          queryDatosAceitesFor
        );
      }
      // FIN QUERY DATOS ACEITES DINAMICO

      // INICIO QUERY ARCHIVOS ESPECIAL ACEITES
      const archivos = req.files; // Accede a la lista de archivos subidos
      for (const archivo of archivos) {
        const nombreArchivoEspecialAceites = archivo.filename;

        // Lógica de inserción para cada archivo
        const queryEspecialAceites = `
                  INSERT INTO especial_aceites
                  (FK_HojaTecnicaEspecialAceites, archivoEspecialAceite)
                  VALUES (?, ?)`;

        const valuesEspecialAceites = [agregarPK, nombreArchivoEspecialAceites];
        await connection.query(queryEspecialAceites, valuesEspecialAceites);
      }
      // Inserción exitosa
      return res.status(200).json({ message: "Inserción exitosa" });
      // FIN QUERY ARCHIVOS ESPECIAL ACEITES

    }//Fin del if select Aceite

    // Inicio If Grasa
    else if (agregarCategoria == "Grasa") {
      // INCIO QUERY INFOGENERAL
      const queryInfoGeneral = `
        INSERT INTO info_general_ht 
        (PK_HojaTecnica, categoria, nombre, subtitulo, descripcion, beneficios, aplicaciones, color, textura, formaDeAplicacion, 
        revision, extra, propiedadesFisicas, recomendacionesDeMezcla, preparacionDelCompuesto, caracteristicas, preparacionSuperficie) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const valuesInfoGral = [
        agregarPK,
        agregarCategoria,
        agregarNombre,
        agregarSubtitulo,
        agregarDescripcion,
        agregarBeneficios,
        agregarAplicaciones,
        agregarColor,
        agregarTextura,
        agregarFormaAplicacion,
        agregarRevision,
        agregarExtra,
        agregarPropiedadesFisicas,
        agregarRecomendacionesMezcla,
        agregarPreparacionCompuesto,
        agregarCaracteristicas,
        agregarPreparacionSuperficie,
      ];
      await connection.query(queryInfoGeneral, valuesInfoGral); // Ejecuta la consulta InfoGeneral
      // FINAL QUERY INFOGENERAL

      // INICIO QUERY ICONOS
      const queryIconos = `
        INSERT INTO iconos
        (FK_HojaTecnicaIconos, iconoBio, iconoNsf, iconoIso21469, iconoHalal, iconoKosher, iconoRodamientos, iconoSistemasHidraulicos, iconoTurbinas, iconoCompresores, 
        iconoCajaDeEngranes, iconoEngranes, iconoCoronas, iconoChumaceras, iconoCojinetes, iconoCadenas, iconoCables, iconoValvulas, iconoCoples, iconoAntiaferrante, 
        iconoTorno, iconoDeformacion, iconoTroquelado, iconoRiel, iconoTransportadora, iconoTemperaturasExtremas, iconoAltasTemperaturas, iconoBajasTemperaturas, iconoAltasCargas, 
        iconoAltasVelocidades, iconoAltaContaminacion, iconoLavadoPorAgua, iconoAmbientesQuimicos, iconoVibracionEImpacto, iconoCompatible, iconoPeriodoDeLubricacion, iconoBarrenado, 
        iconoBarrenadoProfundo, iconoEmbutidoProfundo, iconoEstampado, iconoLaminado, iconoRoscado, iconoFundicion, iconoBrocahdo, iconoFresado, iconoTalladoDeEngranes, iconoOem, 
        iconoExtrusion, iconoDieCastingAluminio)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const valuesIconos = [
        agregarPK,
        bio,
        nsf,
        iso21469,
        halal,
        kosher,
        rodamientos,
        sistemasHidraulicos,
        turbinas,
        compresores,
        cajaEngranes,
        engranes,
        coronas,
        chumaceras,
        cojinetes,
        cadenas,
        cables,
        valvulas,
        coples,
        antiaferrante,
        torno,
        deformacion,
        troquelado,
        riel,
        transportadora,
        temperaturasExtremas,
        altasTemperaturas,
        bajasTemperaturas,
        altasCargas,
        altasVelocidades,
        altaContaminacion,
        lavadoAgua,
        ambientesQuimicos,
        vibracionImpacto,
        compatible,
        periodoLubricacion,
        barrenado,
        barrenadoProfundo,
        embutidoProfundo,
        estampado,
        laminado,
        roscado,
        fundicion,
        brocahdo,
        fresado,
        talladoEngranes,
        oem,
        extrusion,
        dieCasting,
      ];
      await connection.query(queryIconos, valuesIconos); // Ejecuta la consulta Iconos
      // FINAL QUERY ICONOS

      // INICIO QUERY PRESENTACIONES
      const queryPresentaciones = `
        INSERT INTO presentaciones
        (FK_HojaTecnicaPresentaciones, presentacion19L, presentacion200L, presentacion1L, presentacion18KG, presentacion180KG, presentacion1KG, presentacion4KG,
        presentacion15KG, presentacion17KG, presentacion20KG, presentacionCT4KG, presentacionSPRAY, presentacion5L, presentacion1000L, presentacion1000KG)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const valuesPresentaciones = [
        agregarPK,
        l19,
        l200,
        l1,
        kg18,
        kg180,
        kg1,
        kg4,
        kg15,
        kg17,
        kg20,
        ct4kg,
        spray,
        l5,
        l1000,
        kg1000,
      ];
      await connection.query(queryPresentaciones, valuesPresentaciones); // Ejecuta la consulta Presentaciones
      // FINAL QUERY PRESENTACIONES

      // INICIO QUERY DATOS GRASAS ESTATICO
      const queryDatosGrasas = `
        INSERT INTO datos_grasas (FK_HojaTecnicaDatosGrasas, codigoGrasa, nombreGrasa, prueba1, prueba19, prueba20, prueba26, prueba37, prueba38, prueba39, prueba40, 
        prueba41, prueba42, prueba43, prueba44, prueba45, prueba46, prueba47, prueba48, prueba49, prueba50, prueba51, prueba52, prueba53, prueba54, prueba55, prueba56, 
        prueba57, prueba58, prueba59, prueba60, prueba61, prueba62, prueba63, prueba64)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const valuesDatosGrasas = [
        agregarPK,
        grasasAgregarIVP_DG,
        grasasAgregarNombre_DG,
        agregar1_DG,
        agregar19_DG,
        agregar20_DG,
        agregar26_DG,
        agregar37_DG,
        agregar38_DG,
        agregar39_DG,
        agregar40_DG,
        agregar41_DG,
        agregar42_DG,
        agregar43_DG,
        agregar44_DG,
        agregar45_DG,
        agregar46_DG,
        agregar47_DG,
        agregar48_DG,
        agregar49_DG,
        agregar50_DG,
        agregar51_DG,
        agregar52_DG,
        agregar53_DG,
        agregar54_DG,
        agregar55_DG,
        agregar56_DG,
        agregar57_DG,
        agregar58_DG,
        agregar59_DG,
        agregar60_DG,
        agregar61_DG,
        agregar62_DG,
        agregar63_DG,
        agregar64_DG,
      ];

      if (grasasAgregarIVP_DG == null || grasasAgregarIVP_DG == "") {
      } else {
      await connection.query(queryDatosGrasas, valuesDatosGrasas);
      }
      // FIN QUERY DATOS GRASAS ESTATICO

      // INCIO QUERY DATOS GRASAS DINAMICO
      for (let divNumber = 1; divNumber <= divCounterGrasas; divNumber++) {
        const dynamicValuesGrasas = [
          req.body[`agregarPK`],
          req.body[`grasasAgregarIVP_DG_div${divNumber}`],
          req.body[`grasasAgregarNombre_DG_div${divNumber}`],
          req.body[`agregar1_DG_div${divNumber}`],
          req.body[`agregar19_DG_div${divNumber}`],
          req.body[`agregar20_DG_div${divNumber}`],
          req.body[`agregar26_DG_div${divNumber}`],
          req.body[`agregar37_DG_div${divNumber}`],
          req.body[`agregar38_DG_div${divNumber}`],
          req.body[`agregar39_DG_div${divNumber}`],
          req.body[`agregar40_DG_div${divNumber}`],
          req.body[`agregar41_DG_div${divNumber}`],
          req.body[`agregar42_DG_div${divNumber}`],
          req.body[`agregar43_DG_div${divNumber}`],
          req.body[`agregar44_DG_div${divNumber}`],
          req.body[`agregar45_DG_div${divNumber}`],
          req.body[`agregar46_DG_div${divNumber}`],
          req.body[`agregar47_DG_div${divNumber}`],
          req.body[`agregar48_DG_div${divNumber}`],
          req.body[`agregar49_DG_div${divNumber}`],
          req.body[`agregar50_DG_div${divNumber}`],
          req.body[`agregar51_DG_div${divNumber}`],
          req.body[`agregar52_DG_div${divNumber}`],
          req.body[`agregar53_DG_div${divNumber}`],
          req.body[`agregar54_DG_div${divNumber}`],
          req.body[`agregar55_DG_div${divNumber}`],
          req.body[`agregar56_DG_div${divNumber}`],
          req.body[`agregar57_DG_div${divNumber}`],
          req.body[`agregar58_DG_div${divNumber}`],
          req.body[`agregar59_DG_div${divNumber}`],
          req.body[`agregar60_DG_div${divNumber}`],
          req.body[`agregar61_DG_div${divNumber}`],
          req.body[`agregar62_DG_div${divNumber}`],
          req.body[`agregar63_DG_div${divNumber}`],
          req.body[`agregar64_DG_div${divNumber}`],
        ];
        // Construye la consulta de inserción dinámicamente
        const queryDatosGrasasFor = `
          INSERT INTO datos_grasas (FK_HojaTecnicaDatosGrasas, codigoGrasa, nombreGrasa, prueba1, prueba19, prueba20, prueba26, prueba37, prueba38, prueba39, prueba40, 
            prueba41, prueba42, prueba43, prueba44, prueba45, prueba46, prueba47, prueba48, prueba49, prueba50, prueba51, prueba52, prueba53, prueba54, prueba55, prueba56, 
            prueba57, prueba58, prueba59, prueba60, prueba61, prueba62, prueba63, prueba64)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        // Ejecuta la consulta de inserción inmediatamente
        await connection.query(queryDatosGrasasFor, dynamicValuesGrasas);
        // Agrega logs para verificar los valores
        console.log(`Valores para divNumber ${divNumber}:`, dynamicValuesGrasas);
        console.log(
          `Consulta para divNumber ${divNumber}:`,
          queryDatosGrasasFor
        );
      }
      // FIN QUERY DATOS GRASAS DINAMICO

      // INICIO QUERY ARCHIVOS ESPECIAL GRASAS
      const archivosG = req.files; // Accede a la lista de archivos subidos
      for (const archivoG of archivosG) {
        const nombreArchivoEspecialGrasas = archivoG.filename;

        // Lógica de inserción para cada archivo
        const queryEspecialGrasas = `
                  INSERT INTO especial_grasas
                  (FK_HojaTecnicaEspecialGrasas, archivoEspecialGrasa)
                  VALUES (?, ?)`;

        const valuesEspecialGrasas = [agregarPK, nombreArchivoEspecialGrasas];
        await connection.query(queryEspecialGrasas, valuesEspecialGrasas);
      }
      // Inserción exitosa
      return res.status(200).json({ message: "Inserción exitosa" });
      // FIN QUERY ARCHIVOS ESPECIAL GRASAS

    }//Fin del if select Grasa

    else {
      // INCIO QUERY INFOGENERAL
      const queryInfoGeneral = `
        INSERT INTO info_general_ht 
        (PK_HojaTecnica, categoria, nombre, subtitulo, descripcion, beneficios, aplicaciones, color, textura, formaDeAplicacion, 
        revision, extra, propiedadesFisicas, recomendacionesDeMezcla, preparacionDelCompuesto, caracteristicas, preparacionSuperficie) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const valuesInfoGral = [
        agregarPK,
        agregarCategoria,
        agregarNombre,
        agregarSubtitulo,
        agregarDescripcion,
        agregarBeneficios,
        agregarAplicaciones,
        agregarColor,
        agregarTextura,
        agregarFormaAplicacion,
        agregarRevision,
        agregarExtra,
        agregarPropiedadesFisicas,
        agregarRecomendacionesMezcla,
        agregarPreparacionCompuesto,
        agregarCaracteristicas,
        agregarPreparacionSuperficie,
      ];
      await connection.query(queryInfoGeneral, valuesInfoGral); // Ejecuta la consulta InfoGeneral
      // FINAL QUERY INFOGENERAL

      // INICIO QUERY ICONOS
      const queryIconos = `
        INSERT INTO iconos
        (FK_HojaTecnicaIconos, iconoBio, iconoNsf, iconoIso21469, iconoHalal, iconoKosher, iconoRodamientos, iconoSistemasHidraulicos, iconoTurbinas, iconoCompresores, 
        iconoCajaDeEngranes, iconoEngranes, iconoCoronas, iconoChumaceras, iconoCojinetes, iconoCadenas, iconoCables, iconoValvulas, iconoCoples, iconoAntiaferrante, 
        iconoTorno, iconoDeformacion, iconoTroquelado, iconoRiel, iconoTransportadora, iconoTemperaturasExtremas, iconoAltasTemperaturas, iconoBajasTemperaturas, iconoAltasCargas, 
        iconoAltasVelocidades, iconoAltaContaminacion, iconoLavadoPorAgua, iconoAmbientesQuimicos, iconoVibracionEImpacto, iconoCompatible, iconoPeriodoDeLubricacion, iconoBarrenado, 
        iconoBarrenadoProfundo, iconoEmbutidoProfundo, iconoEstampado, iconoLaminado, iconoRoscado, iconoFundicion, iconoBrocahdo, iconoFresado, iconoTalladoDeEngranes, iconoOem, 
        iconoExtrusion, iconoDieCastingAluminio)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const valuesIconos = [
        agregarPK,
        bio,
        nsf,
        iso21469,
        halal,
        kosher,
        rodamientos,
        sistemasHidraulicos,
        turbinas,
        compresores,
        cajaEngranes,
        engranes,
        coronas,
        chumaceras,
        cojinetes,
        cadenas,
        cables,
        valvulas,
        coples,
        antiaferrante,
        torno,
        deformacion,
        troquelado,
        riel,
        transportadora,
        temperaturasExtremas,
        altasTemperaturas,
        bajasTemperaturas,
        altasCargas,
        altasVelocidades,
        altaContaminacion,
        lavadoAgua,
        ambientesQuimicos,
        vibracionImpacto,
        compatible,
        periodoLubricacion,
        barrenado,
        barrenadoProfundo,
        embutidoProfundo,
        estampado,
        laminado,
        roscado,
        fundicion,
        brocahdo,
        fresado,
        talladoEngranes,
        oem,
        extrusion,
        dieCasting,
      ];
      await connection.query(queryIconos, valuesIconos); // Ejecuta la consulta Iconos
      // FINAL QUERY ICONOS

      // INICIO QUERY PRESENTACIONES
      const queryPresentaciones = `
        INSERT INTO presentaciones
        (FK_HojaTecnicaPresentaciones, presentacion19L, presentacion200L, presentacion1L, presentacion18KG, presentacion180KG, presentacion1KG, presentacion4KG,
        presentacion15KG, presentacion17KG, presentacion20KG, presentacionCT4KG, presentacionSPRAY, presentacion5L, presentacion1000L, presentacion1000KG)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const valuesPresentaciones = [
        agregarPK,
        l19,
        l200,
        l1,
        kg18,
        kg180,
        kg1,
        kg4,
        kg15,
        kg17,
        kg20,
        ct4kg,
        spray,
        l5,
        l1000,
        kg1000,
      ];
      await connection.query(queryPresentaciones, valuesPresentaciones); // Ejecuta la consulta Presentaciones
      // FINAL QUERY PRESENTACIONES

      // INICIO QUERY DATOS OTROS ESTATICO
      const queryDatosOtros = `
        INSERT INTO datos_otros  (FK_HojaTecnicaDatosOtros, otroCodigo, otroNombre, prueba2, prueba3, prueba4, prueba5, prueba7, prueba9, prueba19, prueba20, 
        prueba26, prueba30, prueba31, prueba32, prueba33, prueba34, prueba36, prueba37, prueba38, prueba39, prueba41, prueba43, prueba44, prueba46, prueba49, prueba51, 
        prueba54, prueba63, prueba65, prueba66, prueba67, prueba68)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      const valuesDatosOtros = [
        agregarPK,
        agregarIVP_DO,
        agregarNombre_DO,
        agregar2_DO,
        agregar3_DO,
        agregar4_DO,
        agregar5_DO,
        agregar7_DO,
        agregar9_DO,
        agregar19_DO,
        agregar20_DO,
        agregar26_DO,
        agregar30_DO,
        agregar31_DO,
        agregar32_DO,
        agregar33_DO,
        agregar34_DO,
        agregar36_DO,
        agregar37_DO,
        agregar38_DO,
        agregar39_DO,
        agregar41_DO,
        agregar43_DO,
        agregar44_DO,
        agregar46_DO,
        agregar49_DO,
        agregar51_DO,
        agregar54_DO,
        agregar63_DO,
        agregar65_DO,
        agregar66_DO,
        agregar67_DO,
        agregar68_DO,
      ];

      if (agregarIVP_DO == null || agregarIVP_DO == "") {
      } else {
      await connection.query(queryDatosOtros, valuesDatosOtros);
      }
      // FIN QUERY DATOS OTROS ESTATICO

      // INCIO QUERY DATOS OTROS DINAMICO
      for (let divNumber = 1; divNumber <= divCounterOtros; divNumber++) {
        const dynamicValuesOtros = [
          req.body[`agregarPK`],
          req.body[`agregarIVP_DO_div${divNumber}`],
          req.body[`agregarNombre_DO_div${divNumber}`],
          req.body[`agregar2_DO_div${divNumber}`],
          req.body[`agregar3_DO_div${divNumber}`],
          req.body[`agregar4_DO_div${divNumber}`],
          req.body[`agregar5_DO_div${divNumber}`],
          req.body[`agregar7_DO_div${divNumber}`],
          req.body[`agregar9_DO_div${divNumber}`],
          req.body[`agregar19_DO_div${divNumber}`],
          req.body[`agregar20_DO_div${divNumber}`],
          req.body[`agregar26_DO_div${divNumber}`],
          req.body[`agregar30_DO_div${divNumber}`],
          req.body[`agregar31_DO_div${divNumber}`],
          req.body[`agregar32_DO_div${divNumber}`],
          req.body[`agregar33_DO_div${divNumber}`],
          req.body[`agregar34_DO_div${divNumber}`],
          req.body[`agregar36_DO_div${divNumber}`],
          req.body[`agregar37_DO_div${divNumber}`],
          req.body[`agregar38_DO_div${divNumber}`],
          req.body[`agregar39_DO_div${divNumber}`],
          req.body[`agregar41_DO_div${divNumber}`],
          req.body[`agregar43_DO_div${divNumber}`],
          req.body[`agregar44_DO_div${divNumber}`],
          req.body[`agregar46_DO_div${divNumber}`],
          req.body[`agregar49_DO_div${divNumber}`],
          req.body[`agregar51_DO_div${divNumber}`],
          req.body[`agregar54_DO_div${divNumber}`],
          req.body[`agregar63_DO_div${divNumber}`],
          req.body[`agregar65_DO_div${divNumber}`],
          req.body[`agregar66_DO_div${divNumber}`],
          req.body[`agregar67_DO_div${divNumber}`],
          req.body[`agregar68_DO_div${divNumber}`],
        ];
        // Construye la consulta de inserción dinámicamente
        const queryDatosOtrosFor = `
          INSERT INTO datos_otros (FK_HojaTecnicaDatosOtros, otroCodigo, otroNombre, prueba2, prueba3, prueba4, prueba5, prueba7, prueba9, prueba19, prueba20, 
            prueba26, prueba30, prueba31, prueba32, prueba33, prueba34, prueba36, prueba37, prueba38, prueba39, prueba41, prueba43, prueba44, prueba46, prueba49, prueba51, 
            prueba54, prueba63, prueba65, prueba66, prueba67, prueba68)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        // Ejecuta la consulta de inserción inmediatamente
        await connection.query(queryDatosOtrosFor, dynamicValuesOtros);
        // logs para verificar los valores
        console.log(`Valores para divNumber ${divNumber}:`, dynamicValuesOtros);
        console.log(
          `Consulta para divNumber ${divNumber}:`,
          queryDatosOtrosFor
        );
      }
      // FIN QUERY DATOS OTROS DINAMICO
      console.log("Datos insertados correctamente.");
      res.status(200).json({ message: "Inserción exitosa" }); //Manejar respuesta desde el back para que el front interprete el json
    }

  } catch (error) {
    // Si ocurre un error en alguna de las consultas, revierte la transacción
    await connection.rollback();
    console.error("Error al insertar los datos en la tabla:", error);
    return res.status(500).json({ message: "Ha ocurrido un error en el servidor" });

  } finally {
    if (connection) {
      await connection.commit();
      connection.release(); // Libera la conexión después de enviar la respuesta al cliente
    }
  }

};

// Exporta directamente las funciones
module.exports = {
  insertHT: insertHT,
  upload: upload.array('fileInput'), // Usa upload.array para manejar múltiples archivos , upload.single para uno solo
};