const Joi = require('joi');

const messageSchema = Joi.string().min(1).max(180).required().messages({
  'string.empty': 'Message cant be void',
  'string.max': 'Message cant be larger than 180 characters',
  'string.min': 'Message cant be less than 1 characters',
});

export default messageSchema;
