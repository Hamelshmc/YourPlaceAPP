/* eslint-disable no-shadow */
const { ResponseError, httpStatus } = require('../helpers');

const allowList = [
  'http://localhost:3000',
  'http://localhost:8080',
  'https://yourplaceapp.herokuapp.com',
  'https://yourplaceappdev.herokuapp.com',
  'https://yourplace-app-7a5v-dev.fl0.io',
];
// const corsOptions = {
//   origin: (origin, callback) => {
//     console.log(`** Origin of request ${origin}`);
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       console.log('Origin acceptable');
//       callback(null, true);
//     } else {
//       console.log('Origin rejected');
//       callback(new ResponseError(httpStatus.BAD_REQUEST, 'Not allowed by CORS'));
//     }
//   },
// };

const corsOptions = (req, callback) => {
  let corsOptions = {};
  if (allowList.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

module.exports = corsOptions;
