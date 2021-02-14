'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const visitServices = require('../services');

async function deleteVisit(request, response) {
  try {
    const { id } = request.params;
    const { id: idUser } = request.user;
    await visitServices.deleteVisit(id, idUser);
    return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, 'VISIT DELETED'));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = deleteVisit;
