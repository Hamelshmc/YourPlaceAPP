'use strict';

const { ResponseError, httpStatus } = require('../../../helpers');
const publicationRepository = require('../../../repositories/publication.repository');

async function getPublicationById(id) {
  const [publication] = await publicationRepository.findPublicationById(id);

  if (publication.length < 1) {
    throw new ResponseError(httpStatus.NOT_FOUND, 'PUBLICATION NOT FOUND');
  }

  const pics = await publicationRepository.findAllPicturesByPublicationId(id);
  const rating = await publicationRepository.findAllRatingByPublicationId(id);
  const picUrls = pics.map((pic) => pic.url);
  const publicationCopy = { ...publication, pictures: picUrls, rating };

  return publicationCopy;
}

module.exports = getPublicationById;
