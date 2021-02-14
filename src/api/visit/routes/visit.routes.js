'use strict';

const visitsRouter = require('express').Router();
const { auth, verified } = require('../../user/middleware');
const visitControllers = require('../controller');

visitsRouter
  .route('/')
  .all(auth, verified)
  .post(async (request, response) => await visitControllers.insertVisit(request, response))
  .put(async (request, response) => await visitControllers.updateVisit(request, response));

visitsRouter
  .route('/:id')
  .all(auth, verified)
  .get(async (request, response) => await visitControllers.getVisitById(request, response))
  .delete(async (request, response) => await visitControllers.deleteVisit(request, response));

module.exports = visitsRouter;
