'use strict';

const repositoryManager = require('./repository.manager');
const { queryBuilder, tableNames } = require('../helpers');

async function createTransaction(transaction) {
  const { query, values } = await queryBuilder(tableNames.TRANSACTIONS, transaction);
  return await repositoryManager.executeQuery(query, values);
}

module.exports = {
  createTransaction,
};
