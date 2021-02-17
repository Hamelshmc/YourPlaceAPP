'use strict';

const publicationRepository = require('../../../repositories/publication.repository');
const { idChecker, tableNames } = require('../../../helpers');

async function insertPictures(pictures, idPublication) {
  for (const pic of pictures) {
    const id = await idChecker(tableNames.PUBLICATION_PICTURES);
    await publicationRepository.insertPicture({ id, url: pic, id_publication: idPublication });
  }
}

module.exports = insertPictures;
