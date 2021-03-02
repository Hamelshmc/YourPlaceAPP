import Joi from 'joi';

const registerSchema = Joi.object({
  emailRegister: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'es', 'org', 'dev', 'io'] },
    })
    .messages({
      'string.email': `The email should be a valid email`,
      'string.empty': `The email is not allowed to be empty`,
    }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages({
    'string.pattern.base': `The password should have 3 to 30 chars`,
    'string.empty': `The password is not allowed to be empty`,
  }),
  repeat_password: Joi.any().valid(Joi.ref('password')).messages({
    'any.only': `The passwords should match`,
    'string.empty': `The password is not allowed to be empty`,
  }),
});

export default registerSchema;
