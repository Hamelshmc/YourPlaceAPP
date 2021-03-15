'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const bookingServices = require('../services');

async function aceptBooking(request, response) {
  try {
    const { id: idUser } = request.user;
    const { id: idBooking } = request.params;
    await bookingServices.aceptBooking(idBooking, idUser);
    return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, 'Booking Acepted'));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = aceptBooking;
