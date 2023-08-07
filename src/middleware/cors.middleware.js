/* eslint-disable no-shadow */
const { ResponseError, httpStatus } = require('../helpers');

// Define la lista de orígenes permitidos
const allowList = [
  'http://localhost:3000',
  'http://localhost:8080',
  'https://yourplaceapp.herokuapp.com',
  'https://yourplaceappdev.herokuapp.com',
  'https://yourplace-app-7a5v-dev.fl0.io',
  'https://yourplace-app.vercel.app',
];

/**
 * Middleware CORS
 * @param req - La solicitud entrante
 * @param callback - La función de retrollamada que se ejecutará después de comprobar la solicitud
 */
const corsOptions = (req, callback) => {
  let corsOptions = {};
  // Asegúrate de que exista el encabezado 'Origin'
  if (req.header('Origin')) {
    // Si el 'Origin' está en la lista de permitidos, habilita CORS para esta solicitud
    if (allowList.includes(req.header('Origin'))) {
      corsOptions = { origin: true };
    } else {
      // De lo contrario, deshabilita CORS para esta solicitud
      corsOptions = { origin: false };
    }
  } else {
    // Si el encabezado 'Origin' no existe, deshabilita CORS para esta solicitud
    corsOptions = { origin: false };
  }

  // La función de retrollamada espera dos parámetros: error y opciones
  callback(null, corsOptions);
};

module.exports = corsOptions;
