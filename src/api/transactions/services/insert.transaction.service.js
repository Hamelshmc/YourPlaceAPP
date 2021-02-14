'use strict';

const createTransaction = require('./create.transaction.service');
const { ResponseError, httpStatus } = require('../../../helpers');

async function insertTransaction(transactionData, idBooking, idUser) {
  if (transactionData.paymentIntent) {
    await createTransaction(
      transactionData.paymentIntent.created,
      transactionData.paymentIntent.amount,
      true,
      idBooking,
      idUser
    );
  }

  await createTransaction(
    transactionData.error.payment_intent.created,
    transactionData.error.payment_intent.amount,
    false,
    idBooking,
    idUser
  );
  throw new ResponseError(httpStatus.BAD_REQUEST, transactionData.error.message);
}

module.exports = insertTransaction;
