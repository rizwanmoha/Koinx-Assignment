import CryptocurrencyModel from "../models/currencySchema.js";
import axios from 'axios';

export const getTheCyptoCurrency = async(req , res) =>{
    try {
        
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
        const cryptocurrencies = response.data;
        console.log(response);
        console.log(cryptocurrencies);
        await CryptocurrencyModel.deleteMany({}); 
        await CryptocurrencyModel.insertMany(cryptocurrencies);
        console.log('Cryptocurrency data updated successfully.');
        return res.status(200).send({success : true , message: "Data  inserted"})
      } catch (error) {
        console.error('Error updating cryptocurrency data:', error.message);

        return res.status(500).send({success : false , message : ""})
      }


}

// module.exports = {getTheCyptoCurrency}