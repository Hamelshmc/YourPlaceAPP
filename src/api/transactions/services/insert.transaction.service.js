'use strict';

const createTransaction = require('./create.transaction.service');
const { ResponseError, httpStatus } = require('../../../helpers');

async function insertTransaction(transactionData, idBooking, idUser) {
  const { paymentIntent, error } = transactionData;

  if (paymentIntent) {
    return await createTransaction(
      paymentIntent.created,
      paymentIntent.amount,
      true,
      idBooking,
      idUser
    );
  }
  if (error) {
    await createTransaction(
      error.payment_intent.created,
      error.payment_intent.amount,
      false,
      idBooking,
      idUser
    );
    throw new ResponseError(httpStatus.BAD_REQUEST, paymentIntent.error.message);
  }
  throw new ResponseError(httpStatus.BAD_REQUEST, 'TRANSACTION WITHOUT DATA');
}

module.exports = insertTransaction;
