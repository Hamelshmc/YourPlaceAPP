'use strict';

const userRepository = require('../../../repositories/user.repository');

async function verifyUser(id) {
  return await userRepository.verifyUser(id);
}

module.exports = verifyUser;
