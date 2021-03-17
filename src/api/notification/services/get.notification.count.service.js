'use strict';

const { tableNames, idChecker } = require('../../../helpers');
const notificationRepository = require('../../../repositories/notification.repository');

async function getNotificationCount(idUser) {
  if (idUser) {
    return await notificationRepository.findNotificationCount(idUser);
  }
  return 0;
}

module.exports = getNotificationCount;
