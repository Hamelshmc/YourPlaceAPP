'use strict';

const { httpStatus, ResponseError } = require('../../../helpers');
const publicationServices = require('../services');

async function updatePublication(request, response) {
  const { publication, publication_address: publicationAddress } = request.body;
  try {
    await publicationServices.updatePublication(publication, publicationAddress, request.user.id);
    return response.status(httpStatus.OK).send(new ResponseJson(httpStatus.OK, 'UPDATED'));
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = updatePublication;
