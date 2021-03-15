'use strict';

const bookingRepository = require('../../../repositories/booking.repository');
const { httpStatus, ResponseError } = require('../../../helpers');

async function aceptBooking(idBooking, idUser) {
  try {
    return await bookingRepository.aceptBooking(idUser, idBooking);
  } catch (error) {
    throw new ResponseError(httpStatus.BAD_REQUEST, error, error.message);
  }
}

module.exports = aceptBooking;
