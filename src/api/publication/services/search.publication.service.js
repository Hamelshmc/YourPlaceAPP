'use strict';

const { ResponseError, httpStatus } = require('../../../helpers');
const publicationRepository = require('../../../repositories/publication.repository');

async function getPublicationSearch(parametros) {
  let [...publication] = await publicationRepository.getPublicationSearch(parametros);

  publication = await publication.map(async (item) => {
    const pics = await publicationRepository.findAllPicturesByPublicationId(item.id);
    const pictures = pics.map((pic) => pic.url);
    return { ...item, pictures };
  });

  return await Promise.all(publication).then((completed) => completed);
}

module.exports = getPublicationSearch;
