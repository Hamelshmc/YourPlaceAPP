'use strict';

const bookingRepository = require('../../../repositories/booking.repository');
const userRepository = require('../../../repositories/user.repository');
const userServices = require('../../user/services');
const { httpStatus, ResponseError } = require('../../../helpers');

const { HTTP_CLIENT_NAME } = process.env;

async function aceptBooking(idBooking, idUser) {
  const [booking] = await bookingRepository.findBookingById(idBooking);
  await bookingRepository.aceptBooking(idUser, idBooking);
  const [user] = await userRepository.findById(booking.id_user_payer);
  await userServices.sendConfirmationEmail(
    user.email,
    'YourPlace your booking has been acepted!',
    '¡Now you can continue the payment process!',
    '¡Please anwser him as soon as posible!',
    `${HTTP_CLIENT_NAME}/profile`,
    '¡Go to my profile!'
  );
}

module.exports = aceptBooking;
