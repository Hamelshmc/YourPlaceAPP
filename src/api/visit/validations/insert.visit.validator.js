'use strict';

const Joi = require('joi');
const { httpStatus, ResponseError } = require('../../../helpers');

const visitRegex = '^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$';

const insertVisitSchema = Joi.object({
  id: Joi.string().min(36).max(36).required(),
  visit_date: Joi.date().min('now').required(),
  visit_hour: Joi.string().pattern(new RegExp(visitRegex, 'm')).required(),
  acepted: Joi.boolean(),
  id_publication: Joi.string().min(36).max(36).required(),
  id_user_visitant: Joi.string().min(36).max(36).required(),
});

const visitValidation = async (user) => {
  try {
    return await insertVisitSchema.validateAsync(user);
  } catch (error) {
    throw new ResponseError(httpStatus.BAD_REQUEST, error.message);
  }
};

module.exports = visitValidation;
