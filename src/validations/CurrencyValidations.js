import Joi from 'joi';

const isValidDateFormat = (value, helpers) => {
    if (!/^(\d{2})-(\d{2})-(\d{4})$/.test(value)) {
      return helpers.message('Invalid date format. Date must be in the format DD-MM-YYYY');
    }
    return value;
  };
  


const currencyExchangeValidationSchema = Joi.object({
    fromCurrency: Joi.string().required(),
    toCurrency: Joi.string().required(),
    date: Joi.string().custom(isValidDateFormat, 'custom date validation').required()
  });


  export {currencyExchangeValidationSchema}