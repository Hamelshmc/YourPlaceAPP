'use strict';

const { tableNames, idChecker } = require('../../../helpers');
const notificationRepository = require('../../../repositories/notification.repository');

async function getAllNotification(idUser) {
  const [...notification] = await notificationRepository.findAllNotification(idUser);
  return notification;
}

module.exports = getAllNotification;
