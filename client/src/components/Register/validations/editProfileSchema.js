import Joi from 'joi';

const editProfileSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'es', 'org', 'dev', 'io'] },
    })
    .messages({
      'string.email': `The email should be a valid email`,
      'string.empty': `The email is not allowed to be empty`,
    }),
  borndate: Joi.date().max(new Date()).required(),
  dni: Joi.string().min(9).max(9).required(),
  picture: Joi.any(),
  background: Joi.any(),
  telephone: Joi.string().min(9).max(9).required(),
});

export default editProfileSchema;
