'use strict';

const repositoryManager = require('./repository.manager');
const { queryBuilder, tableNames } = require('../helpers');

async function insertMessage(Message) {
  const { query, values } = await queryBuilder(tableNames.MESSAGES, Message);
  return await repositoryManager.executeQuery(query, values);
}

async function findMyTalks(idUser) {
  const query = `SELECT u.id, u.email, u.fullname, u.picture FROM messages m
  LEFT JOIN users u ON u.id = m.id_user_sender
  WHERE m.id_user_receiver = ? GROUP BY m.id_user_sender`;
  const id = [idUser];
  return await repositoryManager.executeQuery(query, id);
}

async function findOurTalk(sender, receiver) {
  const query = `
SELECT u.email AS user_sender,u.fullname AS fullname,u.picture AS picture, u.id AS id_user_sender, m.message , DATE_FORMAT( m.timestamp, '%m-%d-%Y  %T') as  timestamp, m.id as id_message
FROM  users u LEFT JOIN messages m ON m.id_user_sender = u.id  WHERE u.id = ? AND  m.id_user_receiver = ?
UNION
SELECT u.email AS user_sender,u.fullname AS fullname,u.picture AS picture,u.id AS id_user_sender,  m.message , DATE_FORMAT( m.timestamp, '%m-%d-%Y  %T') as  timestamp, m.id as id_message
FROM  users u LEFT JOIN messages m ON m.id_user_sender = u.id  WHERE u.id = ?  AND  m.id_user_receiver = ? ORDER BY timestamp;`;
  return await repositoryManager.executeQuery(query, [sender, receiver, receiver, sender]);
}

module.exports = {
  insertMessage,
  findMyTalks,
  findOurTalk,
};
