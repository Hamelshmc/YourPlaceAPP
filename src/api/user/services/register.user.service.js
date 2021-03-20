'use strict';

const bcrypt = require('bcryptjs');
const {
  idChecker,
  tableNames,
  tableValue,
  ResponseError,
  httpStatus,
} = require('../../../helpers');
const schemaValidation = require('../validations');
const userAddressRepository = require('../../../repositories/userAddress.repository');
const userRepository = require('../../../repositories/user.repository');

async function insertUserAddress(id) {
  const address = { street: '', city: '', country: '', zipcode: 0 };
  const idAddress = await idChecker(tableNames.USER_ADDRESSES);
  const addressEntity = { id: idAddress, ...address, id_user: id };
  await userAddressRepository.insertUserAddress(addressEntity);
}

async function registerUser(user, code) {
  const { email, password } = user;

  await schemaValidation.loginUserValidation(user);

  const emailUserExist = await userRepository.valueExists(email, tableValue.EMAIL);

  if (emailUserExist) {
    throw new ResponseError(httpStatus.NOT_FOUND, 'THE EMAIL IS ALREADY REGISTERED');
  }

  const salt = await bcrypt.genSalt(15);
  const hashedPassword = await bcrypt.hash(password, salt);

  const id = await idChecker(tableNames.USER);
  const userToCreate = { id, email, password: hashedPassword };
  await userRepository.registerUser(userToCreate);
  await insertUserAddress(id);
  await userRepository.addVerificationCode(id, code);
  const [userdb] = await userRepository.findByEmail(email);

  if (!userdb) {
    throw new ResponseError(httpStatus.NOT_FOUND, 'ERROR SIGNING UP');
  }

  return userdb;
}

module.exports = registerUser;
