'use strict';

/* eslint-disable no-return-assign */

const { differenceInMonths } = require('date-fns');
const { ResponseError, httpStatus } = require('../../../helpers');
const bookingRepository = require('../../../repositories/booking.repository');
const publicationRepository = require('../../../repositories/publication.repository');

const CURRENCY_CENTS = 100;

async function calculatePayment(idBooking, idUser) {
  if (idBooking) {
    const [booking] = await bookingRepository.findBookingById(idBooking);
    if (booking.id_user_payer === idUser && booking.acepted) {
      const [publication] = await publicationRepository.findPublicationById(booking.id_publication);
      const months = differenceInMonths(booking.end_date, booking.start_date);
      let result = 0;
      return months
        ? (result = (publication.price * months + publication.deposit) * CURRENCY_CENTS)
        : (result = publication.price * CURRENCY_CENTS);
    }
    throw new ResponseError(httpStatus.UNAUTHORIZED, 'YOU DONT HAVE PERMISSIONS');
  }
  throw new ResponseError(httpStatus.CONFLICT, 'PAYMENT CANT BE DONE');
}

module.exports = calculatePayment;
