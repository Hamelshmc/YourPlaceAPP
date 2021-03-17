'use strict';

const repositoryManager = require('./repository.manager');
const { tableNames, columnBuilder, queryBuilder } = require('../helpers');

async function insertNotification(notification) {
  const { query, values } = await queryBuilder(tableNames.NOTIFICATIONS, notification);
  return await repositoryManager.executeQuery(query, values);
}
async function findAllNotification(idUser) {
  const query = `
  SELECT  id,DATE_FORMAT( timestamp, '%m-%d-%Y  %T') as timestamp,notification_type,seen,id_user
  FROM ${tableNames.NOTIFICATIONS} WHERE id_user = ? ORDER BY timestamp`;
  const value = [idUser];
  return await repositoryManager.executeQuery(query, value);
}

async function deleteNotification(idNotification) {
  const query = `DELETE FROM ${tableNames.NOTIFICATIONS} WHERE id = ?`;
  const value = [idNotification];
  return await repositoryManager.executeQuery(query, value);
}

async function existNotification(idNotification) {
  const query = `SELECT * FROM ${tableNames.NOTIFICATIONS} WHERE id = ?`;
  const value = [idNotification];
  return await repositoryManager.valueExists(query, value);
}

async function findNotificationCount(idUser) {
  const query = `
  SELECT COUNT(*) as notification_count FROM ${tableNames.NOTIFICATIONS} WHERE id_user = ?`;
  const value = [idUser];
  return await repositoryManager.executeQuery(query, value);
}

module.exports = {
  insertNotification,
  findAllNotification,
  findNotificationCount,
  deleteNotification,
  existNotification,
};
