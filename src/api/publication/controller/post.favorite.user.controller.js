/* eslint-disable camelcase */

'use strict';

const publicationServices = require('../services');

const { httpStatus, ResponseError, ResponseJson } = require('../../../helpers');

async function postFavoritePublication(request, response) {
  const { id_publication, user: token } = request;
  const { id } = token;
  try {
    const setUser = await publicationServices.insertPublicationFavorite(id_publication, id);
    return response.status(httpStatus.CREATED).send(new ResponseJson(httpStatus.CREATED, setUser));
  } catch (error) {
    return response
      .status(error.status || 500)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = postFavoritePublication;
