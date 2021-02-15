'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const bookingServices = require('../services/');

async function updateBooking(request, response) {
  try {
    const { id: idUser } = request.user;
    await bookingServices.updateBooking(request.body, idUser);
    return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, 'BOOKING UPDATED'));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = updateBooking;
