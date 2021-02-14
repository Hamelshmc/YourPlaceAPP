'use strict';

const { add, format } = require('date-fns');
const { idChecker, tableNames, httpStatus, ResponseError } = require('../../../helpers');
const { insertBookingValidator } = require('../validations');
const bookingRepository = require('../../../repositories/booking.repository');
const notificationServices = require('../../notification/services');
const publicationRepository = require('../../../repositories/publication.repository');
const typeNotifications = require('../../notification/helper/type.notification');

async function insertBooking({ startDate, months, idPublication }, idUser) {
  await insertBookingValidator({ startDate, months, idPublication });
  const userHaveBooking = await bookingRepository.haveBooking(idUser);
  if (!userHaveBooking) {
    const id = await idChecker(tableNames.BOOKING);
    const date = add(new Date(startDate), { months: months });
    const endDate = format(date, 'yyyy/MM/dd');
    const booking = {
      id: id,
      start_date: startDate,
      end_date: endDate,
      id_user_payer: idUser,
      id_publication: idPublication,
    };
    const existPublication = await publicationRepository.existsPublication(idPublication);

    if (existPublication) {
      await notificationServices.newNotification({
        type: typeNotifications.BOOKING,
        idUser: idUser,
      });

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
