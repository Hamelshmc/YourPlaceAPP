'use strict';

const { ResponseError, httpStatus } = require('../../../helpers');
const messageRepository = require('../../../repositories/messages.repository');

async function findOurTalk(idUser, idUserReceiver) {
  const [...messages] = await messageRepository.findOurTalk(idUser, idUserReceiver);
  return messages;
}

module.exports = findOurTalk;
