module.exports = {
  createPublication: require('./create.publication.controller'),
  getPublicationById: require('./get.publication.by.id.controller'),
  getPublicationSearch: require('./search.publication.controller'),
  insertRatingByPublicationId: require('./insert.rating.by.publication.id.controller'),
  updatePublication: require('./update.publication.controller'),
  uploadImagePublication: require('./upload.image.publication.controller'),
  postFavoritePublication: require('./post.favorite.user.controller'),
  deleteFavoritePublication: require('./delete.favorite.user.controller'),
};
