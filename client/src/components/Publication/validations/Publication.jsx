const Joi = require('joi');

const publicationSchema = Joi.object({
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
  availability_date: Joi.required(),
  street: Joi.string().max(200).required(),
  door: Joi.string().max(5).required(),
  floor: Joi.string().max(5).required(),
  city: Joi.string().max(50).required(),
  zipcode: Joi.number().positive().required(),
  files: Joi.required(),
});

export default publicationSchema;
