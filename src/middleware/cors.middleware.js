const { ResponseError, httpStatus } = require('../helpers');
const whitelist = [
  'http://localhost:3000',
  'http://localhost:8080',
  'https://yourplaceapp.herokuapp.com',
  'https://yourplaceappdev.herokuapp.com',
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log('** Origin of request ' + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log('Origin acceptable');
      callback(null, true);
    } else {
      console.log('Origin rejected');
      callback(new ResponseError(httpStatus.BAD_REQUEST, 'Not allowed by CORS'));
    }
  },
};

module.exports = corsOptions;
