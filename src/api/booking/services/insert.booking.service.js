/* eslint-disable max-lines-per-function */

'use strict';

const { add, format } = require('date-fns');
const { idChecker, tableNames, httpStatus, ResponseError } = require('../../../helpers');
const { insertBookingValidator } = require('../validations');
const bookingRepository = require('../../../repositories/booking.repository');
const userRepository = require('../../../repositories/user.repository');
const notificationServices = require('../../notification/services');
const userServices = require('../../user/services');
const publicationRepository = require('../../../repositories/publication.repository');
const typeNotifications = require('../../notification/helper/type.notification');

const { HTTP_CLIENT_NAME } = process.env;

async function insertBooking({ startDate, months, idPublication }, idUser) {
  await insertBookingValidator({ startDate, months, idPublication });
  const userHaveBooking = await bookingRepository.haveBooking(idUser, idPublication);
  if (!userHaveBooking) {
    const id = await idChecker(tableNames.BOOKING);
    const date = add(new Date(startDate), { months });
    const endDate = format(date, 'yyyy/MM/dd');
    const booking = {
      id,
      start_date: startDate,
      end_date: endDate,
      id_user_payer: idUser,
      id_publication: idPublication,
    };
    const existPublication = await publicationRepository.existsPublication(idPublication);

    if (existPublication) {
      await notificationServices.newNotification({
        type: typeNotifications.BOOKING,
        idUser,
      });
      const userEmail = await publicationRepository.findPublicationOwner(idPublication);

      await userServices.sendConfirmationEmail(
        userEmail,
        'YourPlace new request booking',
        '¡Somebody want yourplace!',
        '¡Please anwser him as soon as posible!',
        `${HTTP_CLIENT_NAME}/profile`,
        '¡Go to my profile!'
      );

      return await bookingRepository.insertBooking(booking);
    }

    throw new ResponseError(httpStatus.NOT_FOUND, 'THAT PUBLICATION DOESNT EXIST');
  }
  throw new ResponseError(
    httpStatus.CONFLICT,
    'THE USER ALREADY HAVE A BOOKING FOR THAT PUBLICATION'
  );
}

module.exports = insertBooking;
