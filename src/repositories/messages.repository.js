'use strict';

const repositoryManager = require('./repository.manager');
const { queryBuilder, tableNames } = require('../helpers');

async function insertMessage(Message) {
  const { query, values } = await queryBuilder(tableNames.MESSAGES, Message);
  return await repositoryManager.executeQuery(query, values);
}

async function findMyTalks(idUser) {
  const query = `SELECT m.id_user_receiver, u.email, u.fullname FROM users u
  LEFT JOIN messages m ON u.id = m.id_user_receiver
  WHERE m.id_user_sender = ? GROUP BY m.id_user_receiver`;
  const id = [idUser];
  return await repositoryManager.executeQuery(query, id);
}

async function findOurTalk(sender, receiver) {
  const query = `
SELECT u.email AS user_sender, m.message , m.timestamp
FROM  users u LEFT JOIN messages m ON m.id_user_sender = u.id  WHERE u.id = ? AND  m.id_user_receiver = ?
UNION
SELECT u.email AS user_sender, m.message , m.timestamp
FROM  users u LEFT JOIN messages m ON m.id_user_sender = u.id  WHERE u.id = ?  AND  m.id_user_receiver = ? ORDER BY timestamp;`;
  return await repositoryManager.executeQuery(query, [sender, receiver, receiver, sender]);
}

module.exports = {
  insertMessage,
  findMyTalks,
  findOurTalk,
};
