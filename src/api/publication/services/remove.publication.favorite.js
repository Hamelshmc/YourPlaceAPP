'use strict';

const { ResponseError, httpStatus } = require('../../../helpers');
const publicationRepository = require('../../../repositories/publication.repository');

async function removePublicationFavorite(idPublication) {
  try {
    await publicationRepository.deletePublication(idPublication);
  } catch (error) {
    throw new ResponseError(httpStatus.NOT_FOUND, 'Publication favorite NOT FOUND');
  }
}

module.exports = removePublicationFavorite;
