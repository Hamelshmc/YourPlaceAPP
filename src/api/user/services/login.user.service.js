'use strict';
const { ResponseError, httpStatus } = require('../../../helpers');
const { tableValue } = require('../../../helpers');
const bcrypt = require('bcryptjs');
const schemaValidation = require('../validations');
const userRepository = require('../../../repositories/user.repository');

async function loginUser({ email, password }) {
  const userDestructuring = { email: email, password: password };
  await schemaValidation.loginUserValidation(userDestructuring);
  await userRepository.valueExists(email, tableValue.EMAIL);

  const [user] = await userRepository.findByEmail(email);

  if (!user) {
    throw new ResponseError(httpStatus.NOT_FOUND, 'User not found');
  }

  return await bcrypt.compare(password, user.password).then((res) => {
    if (res === true) {
      return user;
    }
    throw new ResponseError(httpStatus.BAD_REQUEST, 'MISMATCH EMAIL OR PASSWORD');
  });
}
module.exports = loginUser;
