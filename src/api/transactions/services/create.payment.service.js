'use strict';

const { STRIPE_API_KEY } = process.env;
const stripe = require('stripe')(STRIPE_API_KEY);
const { ResponseError, httpStatus } = require('../../../helpers');
const calculatePayment = require('./calculate.payment.service');

async function createPayment(idBooking, idUser) {
  const result = await calculatePayment(idBooking, idUser);
  if (result) {
    return await stripe.paymentIntents.create({
      amount: result,
      currency: 'eur',
    });
  }
  throw new ResponseError(
    httpStatus.INTERNAL_SERVER_ERROR,
    'IT HAS NOT BEEN POSSIBLE TO CALCULATE THE TOTAL OF BOOKING'
  );
}

module.exports = createPayment;
