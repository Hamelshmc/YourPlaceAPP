'use strict';

const Joi = require('joi');
const { httpStatus, ResponseError } = require('../../../helpers');

const publicationSchema = Joi.object({
  id: Joi.string().required(),
  area: Joi.number().integer().positive().required(),
  rooms: Joi.number().min(1).max(5).required(),
  bathrooms: Joi.number().min(1).max(5).integer().positive().required(),
  garage: Joi.boolean(),
  elevator: Joi.boolean(),
  furnished: Joi.boolean(),
  parking: Joi.boolean(),
  pets: Joi.boolean(),
  garden: Joi.boolean(),
  pool: Joi.boolean(),
  terrace: Joi.boolean(),
  storage_room: Joi.boolean(),
  heating: Joi.string().valid('gas', 'electrical'),
  publication_type: Joi.string().valid('flat', 'house').required(),
  deposit: Joi.number().precision(2),
  price: Joi.number().precision(2).positive().required(),
  availability_date: Joi.date().required(),
  id_user: Joi.string().required(),
  id_publication_address: Joi.string().required(),
});

const validatePublication = async (publication) => {
  try {
    return await publicationSchema.validateAsync(publication);
  } catch (error) {
    throw new ResponseError(httpStatus.BAD_REQUEST, error.message);
  }
};

module.exports = validatePublication;
