'use strict';
const notificationRepository = require('../../../repositories/notification.repository');

async function removeNotification(idNotification) {
  return await notificationRepository.deleteNotification(idNotification);
}

module.exports = removeNotification;
