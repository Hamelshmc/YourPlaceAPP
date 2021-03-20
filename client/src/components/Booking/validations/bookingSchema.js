import Joi from 'joi';

const bookingSchema = Joi.object({
  startDate: Joi.date().messages({
    'date.empty': `Start date is not allowed to be empty`,
  }),
  months: Joi.number().min(1).max(12).required().messages({
    'number.empty': `Months is not allowed to be empty`,
    'number.min': `Months is not allowed to be < 1`,
    'number.max': `Months is not allowed to be > 12 for the moment`,
  }),
});

export default bookingSchema;
