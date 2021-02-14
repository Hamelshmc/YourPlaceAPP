'use strict';

const bookingRepository = require('../../../repositories/booking.repository');
const publicationRepository = require('../../../repositories/publication.repository');
const { differenceInMonths } = require('date-fns');
const CURRENCY_CENTS = 100;

async function calculatePayment(idBooking, idUser) {
  if (idBooking) {
    const [booking] = await bookingRepository.findBookingById(idBooking);
    console.log({ idUser }, booking.id_user_payer);
    if (booking.id_user_payer === idUser && booking.acepted) {
      const [publication] = await publicationRepository.findPublicationById(booking.id_publication);
      const months = differenceInMonths(booking.end_date, booking.start_date);
      let result = 0;
      return months
        ? (result = (publication.price * months + publication.deposit) * CURRENCY_CENTS)
        : (result = publication.price * CURRENCY_CENTS);
    }
    throw new Error('NO TIENES PERMISO PARA EJECUTAR ESTE PAGO');
  }
  throw new Error('IMPOSIBLE ACCEDER AL PAGO');
}

module.exports = calculatePayment;
