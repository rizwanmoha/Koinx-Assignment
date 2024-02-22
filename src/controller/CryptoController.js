// import CryptocurrencyModel from "../models/currencySchema.js";
// import axios from 'axios';
import {updateCryptocurrencyData} from '../services/cryptoService.js';


export const getTheCyptoCurrency = async(req , res) =>{
    try {

      const result = await updateCryptocurrencyData();
      if (result.success) {
        return res.status(200).send({ success: true, message: 'Data inserted successfully.' });
      } else {
        return res.status(500).send({ success: false, message: result.message });
      }
        
        // const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
        // const cryptocurrencies = response.data;
        
        // await CryptocurrencyModel.deleteMany({}); 
        // await CryptocurrencyModel.insertMany(cryptocurrencies);
        // console.log('Cryptocurrency data updated successfully.');
        // return res.status(200).send({success : true , message: "Data  inserted"})
      } catch (error) {
        console.error('Error updating cryptocurrency data:', error.message);

        return res.status(500).send({success : false , message : ""})
      }


}

