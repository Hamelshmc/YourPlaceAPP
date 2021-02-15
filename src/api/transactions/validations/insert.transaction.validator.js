'use strict';

const Joi = require('joi');
const { httpStatus, ResponseError } = require('../../../helpers');

const insertTransactionSchema = Joi.object({
  timestamp: Joi.date().required(),
  amount: Joi.number().required(),
  success: Joi.boolean().required(),
  id_booking: Joi.string().required(),
});

const insertTransactionValidation = async (transaction) => {
  try {
    return await insertTransactionSchema.validateAsync(transaction);
  } catch (error) {
    throw new ResponseError(httpStatus.BAD_REQUEST, error.message);
  }
};

module.exports = insertTransactionValidation;
