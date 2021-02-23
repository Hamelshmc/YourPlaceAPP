'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const publicationServices = require('../services');

async function createPublication(request, response) {
  const { pictures, publication_address: publicationAddress, publication } = request.body;
  const { id } = request.user;
  try {
    await publicationServices.createPublication(publication, publicationAddress, pictures, id);
    return response
      .status(httpStatus.CREATED)
      .send(new ResponseJson(httpStatus.CREATED, 'CREATED'));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = createPublication;
