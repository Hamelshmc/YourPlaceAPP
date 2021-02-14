'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const visitServices = require('../services');

async function getVisitById(request, response) {
  try {
    const { id } = request.params;
    const visit = await visitServices.getVisitById(id);

    return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, visit));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = getVisitById;
