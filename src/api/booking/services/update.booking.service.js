'use strict';

const { add, format } = require('date-fns');
const { updateBookingValidator } = require('../validations');
const bookingRepository = require('../../../repositories/booking.repository');
const publicationRepository = require('../../../repositories/publication.repository');
const notificationServices = require('../../notification/services');
const userServices = require('../../user/services');
const typeNotifications = require('../../notification/helper/type.notification');
const { httpStatus, ResponseError } = require('../../../helpers');

const { HTTP_CLIENT_NAME } = process.env;

async function updateBooking({ startDate, months, idBooking }, idUser) {
  await updateBookingValidator({ startDate, months, idBooking });
  const [foundBooking] = await bookingRepository.findBookingById(idBooking);
  if (foundBooking) {
    if (foundBooking.id_user_payer === idUser) {
      const date = add(new Date(startDate), { months });
      const endDate = format(date, 'yyyy/MM/dd');
      const booking = {
        start_date: startDate,
        end_date: endDate,
      };

      await notificationServices.newNotification({
        type: typeNotifications.BOOKING,
        idUser,
      });

      const userEmail = await publicationRepository.findPublicationOwner(
        foundBooking.id_publication
      );

      await userServices.sendConfirmationEmail(
        userEmail,
        'YourPlace booking updated',
        '¡Somebody updated a booking!',
        '¡Please anwser him as soon as posible!',
        `${HTTP_CLIENT_NAME}/`,
        '¡Go to YourPlace!'
      );

      return await bookingRepository.updateBooking(booking, idBooking);
    }
    throw new ResponseError(
      httpStatus.FORBIDDEN,
      'You do NOT have PERMISSIONS to EDIT that BOOKING'
    );
  }
  throw new ResponseError(httpStatus.NOT_FOUND, 'NOT FOUND BOOKING');
}

module.exports = updateBooking;
