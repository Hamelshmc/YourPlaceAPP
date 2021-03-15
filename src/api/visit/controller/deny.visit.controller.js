'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const visitServices = require('../services');

async function denyVisit(request, response) {
  try {
    const { id: idUser } = request.user;
    const { id: idBooking } = request.params;
    await visitServices.denyVisit(idBooking, idUser);
    return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, 'Booking denied'));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = denyVisit;
