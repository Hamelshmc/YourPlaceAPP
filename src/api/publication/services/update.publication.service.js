'use strict';

const insertPictures = require('./pictures.service');
const publicationRepository = require('../../../repositories/publication.repository');
const { publicationValidator, publicationAddressValidator } = require('../validations');
const getAddressCoords = require('./get.address.coords.service');

async function updatePublication(publicationReq, address, idUser, pictures) {
  const publication = {
    id: publicationReq.id,
    ...publicationReq,
    id_user: idUser,
    id_publication_address: address.id,
  };

  await publicationValidator(publication);
  await publicationRepository.updatePublication(publication, publication.id);

  const { id: addressId, ...addressRest } = address;
  const { lat, long } = await getAddressCoords(addressRest.street, addressRest.zipcode);
  addressRest.latitude = lat;
  addressRest.longitude = long;

  await publicationAddressValidator(address);
  await publicationRepository.updatePublicationAddress(addressRest, addressId);
  await insertPictures(pictures, publicationReq.id);
}

module.exports = updatePublication;
