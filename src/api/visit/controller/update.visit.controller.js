'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const visitServices = require('../services');

async function updateVisit(request, response) {
  try {
    const { id, visit_date: visitDate, visit_hour: visitHour } = request.body;
    const { id: idUser } = request.user;

    await visitServices.updateVisit(id, visitDate, visitHour, idUser);

    return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, 'VISIT UPDATED'));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = updateVisit;
