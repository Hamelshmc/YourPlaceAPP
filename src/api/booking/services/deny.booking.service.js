'use strict';

const userRepository = require('../../../repositories/user.repository');
const bookingRepository = require('../../../repositories/booking.repository');
const userServices = require('../../user/services');
const { httpStatus, ResponseError } = require('../../../helpers');

const { HTTP_CLIENT_NAME } = process.env;

async function denyBooking(idBooking, idUser) {
  try {
    const [booking] = await bookingRepository.findBookingById(idBooking);
    await bookingRepository.denyBooking(idUser, idBooking);
    const [user] = await userRepository.findById(booking.id_user_payer);
    await userServices.sendConfirmationEmail(
      user.email,
      'YourPlace your booking has been denied!',
      '¡Continue looking for yourplace!',
      '¡Try contacting other lessors!',
      `${HTTP_CLIENT_NAME}/`,
      '¡Go to YourPlace!'
    );
  } catch (error) {
    throw new ResponseError(httpStatus.BAD_REQUEST, error, error.message);
  }
}

module.exports = denyBooking;
