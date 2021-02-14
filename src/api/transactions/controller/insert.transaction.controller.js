'use strict';

const { httpStatus, ResponseError } = require('../../../helpers');
const transactionServices = require('../services');

async function insertTransaction(request, response) {
  try {
    const { id: idBooking } = request.params;
    const result = request.body;
    const { id: idUser } = request.user;
    await transactionServices.insertTransaction(result, idBooking, idUser);
    return response.status(httpStatus.OK).send('TRANSACTION COMPLETE');
  } catch (error) {
    return response
      .status(error.status || httpStatus.BAD_REQUEST)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = insertTransaction;
