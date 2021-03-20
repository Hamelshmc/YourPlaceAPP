'use strict';

const repositoryManager = require('./repository.manager');
const { queryBuilder, tableNames, columnBuilder } = require('../helpers');

async function insertVisit(visit) {
  const { query, values } = await queryBuilder(tableNames.VISIT, visit);
  return await repositoryManager.executeQuery(query, values);
}

async function getVisityById(id) {
  const query = `SELECT * FROM ${tableNames.VISIT} WHERE id = ? LIMIT 1`;
  return await repositoryManager.executeQuery(query, [id]);
}

async function updateVisit(visit, id) {
  const { columnSet, values } = await columnBuilder(visit);
  const sql = `UPDATE ${tableNames.VISIT} SET ${columnSet} WHERE id = ?`;
  console.log({ sql });
  return await repositoryManager.executeQuery(sql, [...values, id]);
}

async function deleteVisit(id) {
  const query = `DELETE FROM ${tableNames.VISIT} WHERE id = ?`;
  return await repositoryManager.executeQuery(query, [id]);
}

async function visitExists(id) {
  const query = `SELECT * FROM ${tableNames.VISIT} WHERE id = ? LIMIT 1`;
  return await repositoryManager.valueExists(query, [id]);
}

async function haveVisit(idUser, idPublication) {
  const query = `SELECT * FROM ${tableNames.VISIT} v WHERE v.id_user_visitant = ? AND v.id_publication = ?;`;
  return await repositoryManager.valueExists(query, [idUser, idPublication]);
}

async function aceptVisit(idUser, idVisit) {
  const query = `UPDATE ${tableNames.VISIT} b LEFT JOIN ${tableNames.PUBLICATION} p ON p.id = b.id_publication SET b.acepted = 1 WHERE p.id_user = ? AND b.id = ?`;
  return await repositoryManager.valueExists(query, [idUser, idVisit]);
}

async function denyVisit(idUser, idVisit) {
  const query = `DELETE b FROM ${tableNames.VISIT} b LEFT JOIN ${tableNames.PUBLICATION} p ON b.id_publication = p.id WHERE p.id_user = ? AND b.id = ?`;
  return await repositoryManager.valueExists(query, [idUser, idVisit]);
}

module.exports = {
  aceptVisit,
  deleteVisit,
  denyVisit,
  getVisityById,
  insertVisit,
  updateVisit,
  visitExists,
  haveVisit,
};
