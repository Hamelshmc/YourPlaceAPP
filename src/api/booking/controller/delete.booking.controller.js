'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const bookingServices = require('../services');

async function deleteBooking(request, response) {
  try {
    const { id: idBooking } = request.params;
    const { id: idUser } = request.user;
    await bookingServices.deleteBooking(idBooking, idUser);
    return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, 'BOOKING DELETED'));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = deleteBooking;
