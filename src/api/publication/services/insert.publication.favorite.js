'use strict';

const { httpStatus } = require('../../../helpers');
const ResponseError = require('../../../helpers/responseError.helper');
const publicationRepository = require('../../../repositories/publication.repository');

async function insertPublicationFavorite(id, idUser) {
  const publication = {
    id_publication: id,
    id_user: idUser,
  };

  return await publicationRepository.insertFavoritePublication(publication);
}

module.exports = insertPublicationFavorite;
