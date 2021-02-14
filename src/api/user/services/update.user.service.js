'use strict';
const {
  ResponseError,
  httpStatus,
  idChecker,
  tableNames,
  tableValue,
} = require('../../../helpers');
const userAddressRepository = require('../../../repositories/userAddress.repository');
const userRepository = require('../../../repositories/user.repository');
const schemaValidation = require('../validations');

async function updateUser(user, address, id) {
  await schemaValidation.userValidation(user);
  await schemaValidation.addressValidation(address);
  const addressExist = await userAddressRepository.valueExists(id, tableValue.ID_USER);

  if (addressExist) {
    await userAddressRepository.updateUserAddress(address, id);
    return await userRepository.updateUser(user, id);
  }

  throw new ResponseError(httpStatus.BAD_REQUEST, `it was not updated`);
}

module.exports = updateUser;
