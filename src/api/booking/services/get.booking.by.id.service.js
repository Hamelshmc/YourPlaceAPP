'use strict';

const bookingRepository = require('../../../repositories/booking.repository');
const { httpStatus, ResponseError } = require('../../../helpers');

async function getBookingById(idBooking) {
  if (idBooking) {
    const [booking] = await bookingRepository.findBookingById(idBooking);
    if (booking) {
      return booking;
    }
    throw new ResponseError(httpStatus.NOT_FOUND, 'Not found booking');
  }
  throw new ResponseError(httpStatus.NOT_FOUND, 'Not valid ID');
}

module.exports = getBookingById;
