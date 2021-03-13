import Joi from 'joi';

const editProfileSchema = Joi.object({
  fullname: Joi.string().required().messages({
    'string.empty': `The fullName is not allowed to be empty`,
  }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'es', 'org', 'dev', 'io'] },
    })
    .required()
    .messages({
      'string.email': `The email should be a valid email`,
      'string.empty': `The email is not allowed to be empty`,
    }),
  borndate: Joi.date().min(new Date('1910-12-31')).max(new Date('2003-12-31')).required().messages({
    'date.empty': `The borndate is not allowed to be empty`,
    'date.max': `You should be 18+`,
    'date.min': `Not too old?`,
  }),
  dni: Joi.string().min(9).max(9).required().messages({
    'string.empty': `The dni is not allowed to be empty`,
    'string.min': `The dni must have 8 numbers and 1 letter`,
    'string.max': `The dni must have 8 numbers and 1 letter`,
  }),
  bio: Joi.string().messages({
    'string.empty': `The biography is not allowed to be empty`,
  }),
  picture: Joi.any(),
  background: Joi.any(),
  telephone: Joi.string().min(9).max(9).required().messages({
    'string.empty': `The telephone is not allowed to be empty`,
    'string.min': `The telephone must have 9 numbers`,
    'string.max': `The telephone must have 9 numbers`,
  }),
  street: Joi.string().max(200).required().messages({
    'string.empty': `The street is not allowed to be empty`,
    'string.max': `200 characters max`,
  }),
  city: Joi.string().max(50).required().messages({
    'string.empty': `The city is not allowed to be empty`,
    'string.max': `50 characters max`,
  }),
  zipcode: Joi.number().positive().required().messages({
    'number.empty': `The zipcode is not allowed to be empty`,
  }),
});

export default editProfileSchema;
