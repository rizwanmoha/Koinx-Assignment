import CryptocurrencyModel from "../models/currencySchema.js";
import axios from "axios";

export const updateCryptocurrencyData = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/list"
    );
    const cryptocurrencies = response.data;

    await CryptocurrencyModel.deleteMany({});
    await CryptocurrencyModel.insertMany(cryptocurrencies);
    
    return {
      success: true,
      message: "Cryptocurrency data updated successfully.",
    };
  } catch (error) {
    
    return { success: false, message: "Error updating cryptocurrency data." };
  }
};
