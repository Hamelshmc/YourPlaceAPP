'use strict';

const publicationRepository = require('../../../repositories/publication.repository');
const { idChecker, tableNames, ResponseError, httpStatus } = require('../../../helpers');

async function insertPictures(pictures, idPublication) {
  if (pictures && idPublication) {
    for (const pic of pictures) {
      const id = await idChecker(tableNames.PUBLICATION_PICTURES);
      await publicationRepository.insertPicture({ id, url: pic, id_publication: idPublication });
    }
  }
  throw new ResponseError(httpStatus.BAD_REQUEST, 'PICTURES OR ID NOT VALID');
}

module.exports = insertPictures;
