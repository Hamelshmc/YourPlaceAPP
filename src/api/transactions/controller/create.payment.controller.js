'use strict';

const { httpStatus, ResponseError } = require('../../../helpers');
const transactionServices = require('../services');

async function createPayment(request, response) {
  try {
    const { id: idBooking } = request.params;
    const { id: idUser } = request.user;
    const paymentIntent = await transactionServices.createPayment(idBooking, idUser);
    return response.status(httpStatus.OK).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    return response
      .status(error.status || httpStatus.BAD_REQUEST)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = createPayment;
