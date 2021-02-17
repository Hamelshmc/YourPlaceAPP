'use strict';

const { v4 } = require('uuid');
const repositoryManager = require('../repositories/repository.manager');

async function getValidId(tableName) {
  const id = v4();
  const query = `SELECT * FROM ${tableName} WHERE id = ?`;
  const data = await repositoryManager.executeQuery(query, [id]);
  return !data.length > 0 ? id : await getValidId(tableName);
}

module.exports = getValidId;
