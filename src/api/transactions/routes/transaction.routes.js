'use strict';

const transactionsRouter = require('express').Router();
const { auth, verified } = require('../../user/middleware');
const transactionControllers = require('../controller');

transactionsRouter
  .route('/:id')
  .all(auth, verified)
  .post(
    async (request, response) => await transactionControllers.insertTransaction(request, response)
  );

transactionsRouter
  .route('/create-payment-intent/:id')
  .all(auth, verified)
  .post(async (request, response) => await transactionControllers.createPayment(request, response));

module.exports = transactionsRouter;
