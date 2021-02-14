'use strict';

const { ResponseError, httpStatus } = require('../../../helpers');
const publicationRepository = require('../../../repositories/publication.repository');

async function getPublicationSearch(parametros) {
  let [...publication] = await publicationRepository.getPublicationSearch(parametros);

  publication = await publication.map(async (publication) => {
    const pics = await publicationRepository.findAllPicturesByPublicationId(publication.id);
    const pictures = pics.map((pic) => pic.url);
    return { ...publication, pictures: pictures };
  });

  return await Promise.all(publication).then((completed) => completed);
}

module.exports = getPublicationSearch;
