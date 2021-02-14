'use strict';

const bookingRepository = require('../../../repositories/booking.repository');
const { httpStatus, ResponseError } = require('../../../helpers');

async function deleteBooking(idBooking, idUser) {
  const [foundBooking] = await bookingRepository.findBookingById(idBooking);
  const [haveTransactions] = await bookingRepository.haveTransactions(idBooking);
  if (haveTransactions.count) {
    throw new ResponseError(httpStatus.CONFLICT, 'Cant delete this booking');
  }
  if (foundBooking) {
    if (foundBooking.id_user_payer === idUser) {
      return await bookingRepository.deleteBooking(idBooking);
    }
    throw new ResponseError(httpStatus.FORBIDDEN, 'Not permission delete');
  }

  throw new ResponseError(httpStatus.NOT_FOUND, 'Not found booking');
}

module.exports = deleteBooking;
