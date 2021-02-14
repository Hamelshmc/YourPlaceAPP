'use strict';

const Joi = require('joi');
const { httpStatus, ResponseError } = require('../../../helpers');

const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginUserValidation = async (user) => {
  try {
    return await loginUserSchema.validateAsync(user);
  } catch (error) {
    throw new ResponseError(httpStatus.BAD_REQUEST, error.message);
  }
};

module.exports = loginUserValidation;
