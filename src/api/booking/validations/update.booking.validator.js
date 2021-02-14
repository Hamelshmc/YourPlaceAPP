'use strict';

const Joi = require('joi');
const { httpStatus, ResponseError } = require('../../../helpers');

const updateBookingSchema = Joi.object({
  idBooking: Joi.string().min(36).max(36).required(),
  startDate: Joi.date().min('now').required(),
  months: Joi.number().min(1).max(12).required(),
});

const updateBookingValidation = async (booking) => {
  try {
    return await updateBookingSchema.validateAsync(booking);
  } catch (error) {
    throw new ResponseError(httpStatus.BAD_REQUEST, error.message);
  }
};

module.exports = updateBookingValidation;
