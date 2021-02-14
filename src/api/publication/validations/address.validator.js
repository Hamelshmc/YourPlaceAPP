'use strict';

const Joi = require('joi');
const { httpStatus, ResponseError } = require('../../../helpers');

const addressSchema = Joi.object({
  id: Joi.string().required(),
  street: Joi.string().max(200).required(),
  door: Joi.string().max(5).required(),
  floor: Joi.string().max(5).required(),
  city: Joi.string().max(50).required(),
  country: Joi.string().max(50).required(),
  zipcode: Joi.number().positive().required(),
});

const validateAddress = async (user) => {
  try {
    return await addressSchema.validateAsync(user);
  } catch (error) {
    throw new ResponseError(httpStatus.BAD_REQUEST, error.message);
  }
};

module.exports = validateAddress;
