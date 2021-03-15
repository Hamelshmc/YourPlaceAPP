'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const bookingServices = require('../services');

async function denyBooking(request, response) {
  try {
    const { id: idUser } = request.user;
    const { id: idBooking } = request.params;
    await bookingServices.denyBooking(idBooking, idUser);
    return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, 'Booking denied'));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = denyBooking;
