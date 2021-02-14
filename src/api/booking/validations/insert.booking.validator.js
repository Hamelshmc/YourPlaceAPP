'use strict';

const { min } = require('date-fns');
const Joi = require('joi');
const { httpStatus, ResponseError } = require('../../../helpers');

const insertBookingSchema = Joi.object({
  startDate: Joi.date().min('now').required(),
  months: Joi.number().min(1).max(12).required(),
  idPublication: Joi.string().min(36).max(36).required(),
});

const insertBookingValidation = async (booking) => {
  try {
    return await insertBookingSchema.validateAsync(booking);
  } catch (error) {
    throw new ResponseError(httpStatus.BAD_REQUEST, error.message);
  }
};

module.exports = insertBookingValidation;
