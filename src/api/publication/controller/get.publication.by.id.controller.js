'use strict';

const { httpStatus, ResponseError } = require('../../../helpers');
const publicationServices = require('../services');

async function getPublicationById(request, response) {
  const { id } = request.params;
  try {
    const data = await publicationServices.getPublicationById(id);
    return response.status(httpStatus.OK).send(data);
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = getPublicationById;
