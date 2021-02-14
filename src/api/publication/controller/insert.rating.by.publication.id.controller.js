'use strict';

const { httpStatus, ResponseError } = require('../../../helpers');
const publicationServices = require('../services');

async function insertRatingByPublicationId(request, response) {
  try {
    const { id } = request.params;
    const { rating, comment } = request.body;
    const { id: idUser } = request.user;

    await publicationServices.insertRatingByPublicationId(id, rating, comment, idUser);

    return response.status(httpStatus.OK).send('RATED');
  } catch (error) {
    return response
      .status(error.status)
      .send(new ResponseError(error.status, error, error.message));
  }
}

module.exports = insertRatingByPublicationId;
