'use strict';

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');
const publicationServices = require('../services');

async function deleteFavoritePublication(request, response) {
  try {
    const { id } = request.params;
    await publicationServices.removePublicationFavorite(id);
    return response
      .status(httpStatus.OK)
      .send(new ResponseJson(httpStatus.OK, 'Publication Favorite DELETED'));
  } catch (error) {
    return response
      .status(error.status || 500)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = deleteFavoritePublication;
