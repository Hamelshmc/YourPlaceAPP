module.exports = {
  getAddressCoords: require('./get.address.coords.service'),
  createPublication: require('./create.publication.service'),
  insertPictures: require('./pictures.service'),
  updatePublication: require('./update.publication.service'),
  getPublicationById: require('./get.publication.by.id.service'),
  insertRatingByPublicationId: require('./insert.rating.by.publication.id.service'),
  getPublicationSearch: require('./search.publication.service'),
  uploadImagePublication: require('./upload.image.publication.service'),
  insertPublicationFavorite: require('./insert.publication.favorite'),
  removePublicationFavorite: require('./remove.publication.favorite'),
};
