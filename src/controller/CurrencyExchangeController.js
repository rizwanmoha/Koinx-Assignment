import axios from 'axios';
import {currencyExchangeValidationSchema} from '../validations/CurrencyValidations.js';
import {getExchangeRate} from '../services/exchangeService.js';
export const currencyExchange = async(req , res) =>{
    try{
        const { error, value } = currencyExchangeValidationSchema.validate(req.body);
        if (error) {
      console.error("Validation Failed", error.details[0].message);
      return res.status(400).send({ success: false, message: "Validation Failed", error: error.details[0].message });
    }


        const {fromCurrency , toCurrency , date} = value;
        // const fromCurrencyResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${fromCurrency}/history?date=${date}`);
        // const toCurrencyResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${toCurrency}/history?date=${date}`);

        // const fromCurrencyPrice = fromCurrencyResponse.data.market_data.current_price.usd;
        // const toCurrencyPrice = toCurrencyResponse.data.market_data.current_price.usd;
        
        
        // const exchangeRate = fromCurrencyPrice / toCurrencyPrice;

        const result = await getExchangeRate(fromCurrency, toCurrency, date);
    if (result.success) {
      return res.status(200).send({ success: true, message: "Converted Price of one Currency to another", exchangeRate: result.exchangeRate });
    } else {
      return res.status(500).send({ success: false, message: result.message });
    }
        return res.status(200).send({success: true , message : "Converted Price of one Currency to another" , exchangeRate})

    }
    catch(error){
        console.error('Error fetching companies:', error.message);
        res.status(500).send({success : false ,  message: 'Internal server error' });
    }



}