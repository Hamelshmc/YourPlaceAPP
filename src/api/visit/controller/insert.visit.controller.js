'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const visitServices = require('../services');

async function insertVisit(request, response) {
  try {
    const {
      visit_date: visitDate,
      visit_hour: visitHour,
      id_publication: idPublication,
    } = request.body;
    const idUser = request.user.id;

    await visitServices.insertVisit(visitDate, visitHour, idPublication, idUser);
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
