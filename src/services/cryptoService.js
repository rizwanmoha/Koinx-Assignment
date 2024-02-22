import CryptocurrencyModel from "../models/currencySchema.js";
import axios from 'axios';

export const updateCryptocurrencyData = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
    const cryptocurrencies = response.data;
    
    await CryptocurrencyModel.deleteMany({}); 
    await CryptocurrencyModel.insertMany(cryptocurrencies);
    console.log('Cryptocurrency data updated successfully.');
    return { success: true, message: 'Cryptocurrency data updated successfully.' };
  } catch (error) {
    console.error('Error updating cryptocurrency data:', error.message);
    return { success: false, message: 'Error updating cryptocurrency data.' };
  }
};