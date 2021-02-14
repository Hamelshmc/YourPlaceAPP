'use strict';

const repositoryManager = require('./repository.manager');
const { tableNames, columnBuilder, queryBuilder } = require('../helpers');

async function valueExists(value, tableValue) {
  const query = `SELECT ${tableValue} FROM  ${tableNames.USER_ADDRESSES} WHERE ${tableValue} = ? LIMIT 1`;
  const values = [value];
  return await repositoryManager.valueExists(query, values);
}

async function insertUserAddress(address) {
  const { query, values } = await queryBuilder(tableNames.USER_ADDRESSES, address);
  console.log('[INSERT]', address);
  return await repositoryManager.executeQuery(query, values);
}

async function updateUserAddress(address, id) {
  const { columnSet, values } = await columnBuilder(address);
  const query = `UPDATE ${tableNames.USER_ADDRESSES} SET ${columnSet} WHERE id_user = ?`;
  console.log('[UPDATE]', address);
  return await repositoryManager.executeQuery(query, [...values, id]);
}
module.exports = {
  insertUserAddress,
  updateUserAddress,
  valueExists,
};
