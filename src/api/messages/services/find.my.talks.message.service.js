'use strict';

const { ResponseError, httpStatus } = require('../../../helpers');
const messageRepository = require('../../../repositories/messages.repository');

async function findMyTalks(idUser) {
  const [...messages] = await messageRepository.findMyTalks(idUser);

  if (messages.length === 0) {
    throw new ResponseError(httpStatus.NOT_FOUND, 'YOU DONT HAVE MESSAGES');
  }

  return messages;
}

module.exports = findMyTalks;
