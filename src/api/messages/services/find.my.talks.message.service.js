'use strict';

const { ResponseError, httpStatus } = require('../../../helpers');
const messageRepository = require('../../../repositories/messages.repository');

async function findMyTalks(idUser) {
  const [...messages] = await messageRepository.findMyTalks(idUser);
  return messages;
}

module.exports = findMyTalks;
