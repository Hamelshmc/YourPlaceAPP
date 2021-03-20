import Joi from 'joi';

const visitSchema = Joi.object({
  visit_date: Joi.date().messages({
    'date.empty': `Visit date is not allowed to be empty`,
  }),
  visit_hour: Joi.string().regex(new RegExp('^([0-9]{2}):([0-9]{2})$')).messages({
    'string.empty': `Visit hour is not allowed to be empty`,
    'string.regex': `Visit hour is not allowed to be on other format`,
  }),
});

export default visitSchema;
