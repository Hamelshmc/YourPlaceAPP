'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const transactionServices = require('../services');

async function insertTransaction(request, response) {
  try {
    const { id: idBooking } = request.params;
    const result = request.body;
    const { id: idUser } = request.user;
    await transactionServices.insertTransaction(result, idBooking, idUser);
    return response
      .status(httpStatus.CREATED)
      .send(new ResponseJson(httpStatus.CREATED, 'TRANSACTION COMPLETED'));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = insertTransaction;
