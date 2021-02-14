const whitelist = [
  'http://localhost:3000',
  'http://localhost:8080',
  'https://yourplaceapp.herokuapp.com',
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log('** Origin of request ' + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log('Origin acceptable');
      callback(null, true);
    } else {
      console.log('Origin rejected');
      callback(new Error('Not allowed by CORS'));
    }
  },
};

module.exports = corsOptions;
