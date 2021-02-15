'use strict';

const { ResponseError, httpStatus } = require('../../../helpers');
const notificationRepository = require('../../../repositories/notification.repository');

async function removeNotification(idNotification) {
  const existNotification = await notificationRepository.existNotification(idNotification);
  if (existNotification) {
    await notificationRepository.deleteNotification(idNotification);
  }
  throw new ResponseError(httpStatus.NOT_FOUND, 'NOTIFICATION NOT FOUND');
}

module.exports = removeNotification;
