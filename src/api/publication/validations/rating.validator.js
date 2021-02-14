'use strict';

const Joi = require('joi');
const { httpStatus, ResponseError } = require('../../../helpers');

const ratingSchema = Joi.object({
  rating: Joi.number().positive().min(0).max(5).required(),
  comment: Joi.string().max(200).required(),
  id_publication: Joi.string().required(),
  id_user_voter: Joi.string().required(),
});

const validateRating = async (rating) => {
  try {
    return await ratingSchema.validateAsync(rating);
  } catch (error) {
    throw new ResponseError(httpStatus.BAD_REQUEST, error.message);
  }
};

module.exports = validateRating;
