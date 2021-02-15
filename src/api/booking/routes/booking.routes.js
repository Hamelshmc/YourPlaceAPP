'use strict';

const bookingRouter = require('express').Router();
const { auth, verified } = require('../../user/middleware/');
const bookingControllers = require('../controller');

bookingRouter
  .route('/')
  .all(auth, verified)
  .post(async (request, response) => await bookingControllers.insertBooking(request, response))
  .put(async (request, response) => await bookingControllers.updateBooking(request, response));

bookingRouter
  .route('/:id')
  .all(auth, verified)
  .get(async (request, response) => await bookingControllers.getBookingById(request, response))
  .delete(async (request, response) => await bookingControllers.deleteBooking(request, response));

module.exports = bookingRouter;
