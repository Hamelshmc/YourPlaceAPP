'use strict';

const Joi = require('joi');
const { httpStatus, ResponseError } = require('../../../helpers');

const addressSchema = Joi.object({
  street: Joi.string().max(200).required(),
  city: Joi.string().max(50).required(),
  country: Joi.string().max(50).required(),
  zipcode: Joi.number().positive().required(),
});

const addressValidation = async (user) => {
  try {
    return await addressSchema.validateAsync(user);
  } catch (error) {
    throw new ResponseError(httpStatus.BAD_REQUEST, error.message);
  }
};

module.exports = addressValidation;
