'use strict';

const { ResponseError, httpStatus } = require('../../../helpers');
const publicationRepository = require('../../../repositories/notification.repository');

async function removePublicationFavorite(idPublication) {
  const existPublicationFavorite = await publicationRepository.existPublicationFavorite(
    idPublication
  );
  if (existPublicationFavorite) {
    await publicationRepository.deletePublication(idPublication);
  }
  throw new ResponseError(httpStatus.NOT_FOUND, 'Publication favorite NOT FOUND');
}

module.exports = removePublicationFavorite;
