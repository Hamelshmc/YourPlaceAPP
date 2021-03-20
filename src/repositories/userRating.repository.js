'use strict';

const repositoryManager = require('./repository.manager');
const { tableNames, columnBuilder, queryBuilder } = require('../helpers');

async function valueExists(idVoter, idVoted) {
  const query = `SELECT id_user_voter, id_user_voted FROM  ${tableNames.USER_RATING} WHERE id_user_voter = ? and id_user_voted = ? LIMIT 1`;
  const values = [idVoter, idVoted];
  return await repositoryManager.valueExists(query, values);
}

async function insertUserRating(rating) {
  const { query, values } = await queryBuilder(tableNames.USER_RATING, rating);
  return await repositoryManager.executeQuery(query, values);
}

async function updateUserRating(rating, id) {
  const { columnSet, values } = await columnBuilder(rating);
  const query = `UPDATE ${tableNames.USER_RATING} SET ${columnSet} WHERE id_user_voter = ?`;
  return await repositoryManager.executeQuery(query, [...values, id]);
}

module.exports = {
  insertUserRating,
  updateUserRating,
  valueExists,
};
