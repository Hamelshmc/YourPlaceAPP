/* eslint-disable max-depth */
'use strict';

const { fromUnixTime } = require('date-fns');
const { idChecker, tableNames, ResponseError, httpStatus } = require('../../../helpers');
const { insertTransactionValidator } = require('../validations');
const transactionRepository = require('../../../repositories/transaction.repository');
const bookingRepository = require('../../../repositories/booking.repository');
const publicationRepository = require('../../../repositories/publication.repository');

const CURRENCY_CENTS = 100;
const notificationServices = require('../../notification/services');
const typeNotifications = require('../../notification/helper/type.notification');

async function createTransaction(timestamp, amount, success, idBooking, idUser) {
  await insertTransactionValidator({ timestamp, amount, success, idBooking });
  const idTransaction = await idChecker(tableNames.TRANSACTIONS);
  const [booking] = await bookingRepository.findBookingById(idBooking);
  const [publication] = await publicationRepository.findPublicationById(booking.id_publication);
  if (publication.id === booking.id_publication) {
    if (booking.id_user_payer === idUser) {
      const transaction = {
        id: idTransaction,
        timestamp: fromUnixTime(timestamp),
        amount: amount / CURRENCY_CENTS,
        success,
        id_booking: idBooking,
      };
      await notificationServices.newNotification({
        type: typeNotifications.PAYMENT,
        idUser,
      });
      await transactionRepository.createTransaction(transaction);
      if (success) {
        return await publicationRepository.updatePublication({ disabled: success }, publication.id);
      }
      throw new ResponseError(httpStatus.BAD_REQUEST, 'Not Complete transaction');
    }
    throw new ResponseError(httpStatus.FORBIDDEN, 'Not have permissions');
  }
  throw new ResponseError(
    httpStatus.UNAUTHORIZED,
    'Not exit relationship between booking and publication'
  );
}

module.exports = createTransaction;
