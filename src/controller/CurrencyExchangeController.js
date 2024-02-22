import { currencyExchangeValidationSchema } from "../validations/CurrencyValidations.js";

import { getExchangeRate } from "../services/exchangeService.js";

export const currencyExchange = async (req, res) => {
  try {
    const { error, value } = currencyExchangeValidationSchema.validate(
      req.body
    );
    if (error) {
      
      return res
        .status(400)
        .send({
          success: false,
          message: "Validation Failed",
          error: error.details[0].message,
        });
    }

    const { fromCurrency, toCurrency, date } = value;

    const result = await getExchangeRate(fromCurrency, toCurrency, date);
    if (result.success) {
      return res
        .status(200)
        .send({
          success: true,
          message: "Converted Price of one Currency to another",
          exchangeRate: result.exchangeRate,
        });
    } else {
      return res.status(500).send({ success: false, message: result.message });
    }
    
  } catch (error) {
   
    return res.status(500).send({ success: false, message: "Internal server error" });
  }
};
