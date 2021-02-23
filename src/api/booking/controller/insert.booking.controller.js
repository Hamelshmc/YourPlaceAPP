'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const bookingServices = require('../services');

async function insertBooking(request, response) {
  try {
    const { id: idUser } = request.user;
    await bookingServices.insertBooking(request.body, idUser);
    return response
      .status(httpStatus.CREATED)
      .send(new ResponseJson(httpStatus.CREATED, 'Booking Inserted'));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = insertBooking;
