'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const visitServices = require('../services');

async function aceptVisit(request, response) {
  try {
    const { id: idUser } = request.user;
    const { id: idVisit } = request.params;
    await visitServices.aceptVisit(idVisit, idUser);
    return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, 'Booking Acepted'));
  } catch (error) {
    return response
      .status(error.status || 500)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = aceptVisit;
