'use strict';

const publicationRepository = require('../../../repositories/publication.repository');

async function getPublicationById(id) {
  const [publication] = await publicationRepository.findPublicationById(id);

  if (publication.length < 1) {
    throw new Error('NO SE HAN PODIDO OBTENER LOS DATOS DE LA PUBLICACION CON ID:', id);
  }

  const pics = await publicationRepository.findAllPicturesByPublicationId(id);
  const picUrls = pics.map((pic) => pic.url);
  const publicationCopy = { ...publication, pictures: picUrls };

  return publicationCopy;
}

module.exports = getPublicationById;
