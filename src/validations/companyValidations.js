import Joi from 'joi';

const companyValidationSchema = Joi.object({
    currency : Joi.string().required(),
})


export {companyValidationSchema};