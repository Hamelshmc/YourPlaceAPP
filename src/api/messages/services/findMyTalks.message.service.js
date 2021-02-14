'use strict';
const { ResponseError, httpStatus } = require('../../../helpers');
const messageRepository = require('../../../repositories/messages.repository');

async function findMyTalks(idUser) {
  const [...messages] = await messageRepository.findMyTalks(idUser);

  if (messages.length === 0) throw new ResponseError(httpStatus.NOT_FOUND, 'No hay mensajes');

  return messages;
}

module.exports = findMyTalks;
