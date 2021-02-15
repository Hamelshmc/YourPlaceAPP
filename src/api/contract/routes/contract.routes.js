'use strict';

const contractRouter = require('express').Router();
const { auth, verified } = require('../../user/middleware/');
const contractControllers = require('../controller');

contractRouter
  .route('/:idBooking')
  .all(auth, verified)
  .post(async (request, response) => await contractControllers.createContract(request, response));

module.exports = contractRouter;
