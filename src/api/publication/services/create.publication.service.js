'use strict';

const { idChecker, tableNames } = require('../../../helpers');
const getAddressCoords = require('./get.address.coords.service');
const insertPictures = require('./pictures.service');
const publicationRepository = require('../../../repositories/publication.repository');
const schemaValidator = require('../validations');

async function createPublication(publicationReq, publicationAddress, pictures, idUser) {
  const { street, door, floor, city, country, zipcode } = publicationAddress;
  const id = await idChecker(tableNames.PUBLICATION_ADDRESSES);
  const address = {
    id,
    street,
    door,
    floor,
    city,
    country,
    zipcode,
  };
  await schemaValidator.publicationAddressValidator(address);
  const { lat, long } = await getAddressCoords(street, zipcode);
  address.latitude = lat;
  address.longitude = long;
  const idPublication = await idChecker(tableNames.PUBLICATION);
  const publication = {
    id: idPublication,
    ...publicationReq,
    id_user: idUser,
    id_publication_address: address.id,
  };
  await schemaValidator.publicationValidator(publication);
  await publicationRepository.createPublicationAddress(address);
  await publicationRepository.createPublication(publication);
  await insertPictures(pictures, idPublication);
}

module.exports = createPublication;
