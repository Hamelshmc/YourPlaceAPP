'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const bookingServices = require('../services');

async function getBookingById(request, response) {
  try {
    const { id: idBooking } = request.params;
    const booking = await bookingServices.getBookingById(idBooking);
    return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, booking));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = getBookingById;
