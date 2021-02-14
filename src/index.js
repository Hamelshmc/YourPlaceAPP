const { httpStatus, ResponseError } = require('./helpers');

const compression = require('compression');
const cors = require('cors');
const errorMiddleware = require('./middleware/error.middleware');
const express = require('express');

const bookingsRouter = require('./api/booking/routes/booking.routes');
const contractsRouter = require('./api/contract/routes/contract.routes');
const messageRouter = require('./api/messages/routes/message.routes');
const notificationRouter = require('./api/notification/routes/notification.routes');
const publicationsRouter = require('./api/publication/routes/publication.routes');
const transactionsRouter = require('./api/transactions/routes/transaction.routes');
const userRouter = require('./api/user/routes/user.routes');
const visitsRouter = require('./api/visit/routes/visit.routes');

const app = express();

app.use(compression());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
// # Do the same for the following code. Your main server file that is.
//  MIDDLEWARE
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
app.use(cors(corsOptions));

app.use('/api/v1/bookings', bookingsRouter);
app.use('/api/v1/contracts', contractsRouter);
app.use('/api/v1/messages', messageRouter);
app.use('/api/v1/notification', notificationRouter);
app.use('/api/v1/publications', publicationsRouter);
app.use('/api/v1/transactions', transactionsRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/visits', visitsRouter);

//  Serve client react instead of backend
//  Add the follwing code to your server file on the backend
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Endpoint Not Found
app.all('/api/v1/', (req, res, next) => {
  const err = new ResponseError(httpStatus.NOT_FOUND, 'Endpoint Not Found');
  next(err);
});

// Error middleware
app.use(errorMiddleware);

module.exports = app;
