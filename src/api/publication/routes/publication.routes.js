'use strict';

const publicationsRouter = require('express').Router();
const publicationControllers = require('../controller');
const { auth, verified } = require('../../user/middleware');
const cache = require('../../../middleware/cache.middleware');
const { cacheTime } = require('../../../helpers');

publicationsRouter
  .route('/image')
  .post(async (request, response) =>
    publicationControllers.uploadImagePublication(request, response)
  );

publicationsRouter
  .route('/')
  .get(
    cache(cacheTime.ONE_HOUR),
    async (request, response) =>
      await publicationControllers.getPublicationSearch(request, response)
  )
  .all(auth, verified)
  .post(
    async (request, response) => await publicationControllers.createPublication(request, response)
  )
  .put(
    async (request, response) => await publicationControllers.updatePublication(request, response)
  );

publicationsRouter
  .route('/:id')
  .get(
    async (request, response) => await publicationControllers.getPublicationById(request, response)
  );

publicationsRouter
  .route('/:id/ratings')
  .all(auth, verified)
  .post(
    async (request, response) =>
      await publicationControllers.insertRatingByPublicationId(request, response)
  );

module.exports = publicationsRouter;
