'use strict';

const Joi = require('joi');
const { httpStatus, ResponseError } = require('../../../helpers');

const dniPatternRexp = '^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$';

const userSchema = Joi.object({
  fullname: Joi.string(),
  dni: Joi.string().pattern(new RegExp(dniPatternRexp, 'i')),
  borndate: Joi.date(),
  password: Joi.string(),
  email: Joi.string().email().required(),
  picture: Joi.string(),
  background: Joi.string(),
  bio: Joi.string().max(180),
  telephone: Joi.string(),
});

const userValidation = async (user) => {
  try {
    return await userSchema.validateAsync(user);
  } catch (error) {
    throw new ResponseError(httpStatus.BAD_REQUEST, error.message);
  }
};

module.exports = userValidation;
