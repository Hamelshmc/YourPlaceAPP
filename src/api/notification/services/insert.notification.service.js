'use strict';

const { tableNames, idChecker } = require('../../../helpers');
const notificationRepository = require('../../../repositories/notification.repository');

async function newNotification({ type, idUser }) {
  const idNotification = await idChecker(tableNames.NOTIFICATIONS);
  const notification = {
    id: idNotification,
    id_user: idUser,
    notification_type: type,
    seen: true,
  };
  await notificationRepository.insertNotification(notification);
}

module.exports = newNotification;
