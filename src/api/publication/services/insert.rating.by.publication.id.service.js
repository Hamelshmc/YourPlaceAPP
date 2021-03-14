'use strict';

const { httpStatus } = require('../../../helpers');
const ResponseError = require('../../../helpers/responseError.helper');
const publicationRepository = require('../../../repositories/publication.repository');
const { ratingValidator } = require('../validations');

async function insertRatingByPublicationId(id, ratingParam, commentParam, idUser) {
  const rating = {
    rating: ratingParam,
    comment: commentParam,
    id_publication: id,
    id_user_voter: idUser,
  };
  await ratingValidator(rating);
  

  return await publicationRepository.insertRating(rating);
}

module.exports = insertRatingByPublicationId;
