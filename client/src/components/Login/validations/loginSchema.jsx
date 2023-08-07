import Joi from 'joi';

const loginSchema = Joi.object({
  emailLogin: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'es', 'org', 'dev', 'io'] },
    })
    .messages({
      'string.email': `The email should be a valid email`,
      'string.empty': `The email is not allowed to be empty`,
    }),
  passwordLogin: Joi.string().min(3).max(30).required().messages({
    'string.min': `The password length must be at least 3 characters long`,
    'string.max': `The password length must be less than or equal to 30 characters`,
    'string.empty': `The password is not allowed to be empty`,
  }),
});

export default loginSchema;
