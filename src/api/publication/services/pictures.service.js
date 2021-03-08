'use strict';

const publicationRepository = require('../../../repositories/publication.repository');
const { idChecker, tableNames, ResponseError, httpStatus } = require('../../../helpers');

async function insertPictures(pictures, idPublication) {
  if (pictures && idPublication) {
    const promises = pictures.map(async (pic) => {
      const id = await idChecker(tableNames.PUBLICATION_PICTURES);
      await publicationRepository.insertPicture({ id, url: pic, id_publication: idPublication });
    });
    await Promise.all(promises).then((completed) => completed);
  } else {
    throw new ResponseError(httpStatus.BAD_REQUEST, 'PICTURES OR ID NOT VALID');
  }
}

module.exports = insertPictures;
