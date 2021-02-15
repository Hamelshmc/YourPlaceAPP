'use strict';

const { httpStatus, ResponseError } = require('../../../helpers');
const publicationServices = require('../services/');

async function getPublicationSearch(request, response) {
  try {
    const { search = '', page = 0, limit = 10, ...filtros } = request.query;

    const parametros = { search, page, limit, ...filtros };

    const publications = await publicationServices.getPublicationSearch(parametros);
    return response.status(200).send(publications);
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = getPublicationSearch;
