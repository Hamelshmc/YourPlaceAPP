'use strict';

const publicationRepository = require('../../../repositories/publication.repository');
const { publicationValidator, publicationAddressValidator } = require('../validations');
const getAddressCoords = require('./get.address.coords.service');

async function updatePublication(publicationReq, address, idUser) {
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
}

module.exports = updatePublication;
