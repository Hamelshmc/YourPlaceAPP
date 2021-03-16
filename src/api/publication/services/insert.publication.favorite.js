'use strict';

const { httpStatus } = require('../../../helpers');
const ResponseError = require('../../../helpers/responseError.helper');
const publicationRepository = require('../../../repositories/publication.repository');
const { ratingValidator } = require('../validations');

async function insertPublicationFavorite(id, idUser) {
  const publication = {
    id_user: idUser,
    id_publication: id,
  };

  return await publicationRepository.insertFavoritePublication(publication);
}

module.exports = insertPublicationFavorite;
