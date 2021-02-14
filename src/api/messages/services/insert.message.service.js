'use strict';
const { idChecker, tableNames } = require('../../../helpers');
const messageRepository = require('../../../repositories/messages.repository');
const schemaValidation = require('../validations/message.validator');
const notificationServices = require('../../notification/services');
const typeNotifications = require('../../notification/helper/type.notification');

async function insertMessage(messageBody, idUserSender) {
  await schemaValidation.messageValidation(messageBody);
  const { message, idUserReceiver } = messageBody;
  const idMessage = await idChecker(tableNames.MESSAGES);

  const messageEntity = {
    id: idMessage,
    message: message,
    id_user_sender: idUserSender,
    id_user_receiver: idUserReceiver,
  };

  await notificationServices.newNotification({
    type: typeNotifications.MESSAGE,
    idUser: idUserReceiver,
  });

  await messageRepository.insertMessage(messageEntity);
}

module.exports = insertMessage;
