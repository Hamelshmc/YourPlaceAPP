'use strict';

const Joi = require('joi');
const { httpStatus, ResponseError } = require('../../../helpers');

const messageSchema = Joi.object({
  message: Joi.string().max(200).required(),
  idUserReceiver: Joi.string().required(),
});

const messageValidation = async (message) => {
  try {
    return await messageSchema.validateAsync(message);
  } catch (error) {
    throw new ResponseError(httpStatus.BAD_REQUEST, error.message);
  }
};

module.exports = { messageValidation };
