'use strict';

const { ResponseError, httpStatus } = require('../../../helpers');
const messageRepository = require('../../../repositories/messages.repository');

async function findOurTalk(idUser, idUserReceiver) {
  const [...messages] = await messageRepository.findOurTalk(idUser, idUserReceiver);

  if (messages.length === 0) {
    throw new ResponseError(httpStatus.NOT_FOUND, 'No hay mensajes');
  }

  return messages;
}

module.exports = findOurTalk;
