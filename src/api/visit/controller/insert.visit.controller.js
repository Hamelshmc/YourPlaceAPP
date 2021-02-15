'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const visitServices = require('../services');

async function insertVisit(request, response) {
  try {
    const idUser = request.user.id;

    await visitServices.insertVisit(request.body, idUser);
    return response
      .status(httpStatus.CREATED)
      .send(new ResponseJson(httpStatus.CREATED, 'INSERTED VISIT'));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = insertVisit;
