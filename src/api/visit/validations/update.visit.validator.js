'use strict';

const Joi = require('joi');
const { httpStatus, ResponseError } = require('../../../helpers');

const visitRegex = '^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$';

const updateVisitSchema = Joi.object({
  visitDate: Joi.date().required(),
  visitHour: Joi.string().pattern(new RegExp(visitRegex, 'm')).required(),
});

const visitValidation = async (user) => {
  try {
    return await updateVisitSchema.validateAsync(user);
  } catch (error) {
    throw new ResponseError(httpStatus.BAD_REQUEST, error.message);
  }
};

module.exports = visitValidation;
