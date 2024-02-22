import axios from "axios";

export const getExchangeRate = async (fromCurrency, toCurrency, date) => {
  try {
    const fromCurrencyResponse = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${fromCurrency}/history?date=${date}`
    );
    const toCurrencyResponse = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${toCurrency}/history?date=${date}`
    );

    const fromCurrencyPrice =
      fromCurrencyResponse.data.market_data.current_price.usd;
    const toCurrencyPrice =
      toCurrencyResponse.data.market_data.current_price.usd;

    const exchangeRate = fromCurrencyPrice / toCurrencyPrice;
    return { success: true, exchangeRate };
  } catch (error) {
   
    return { success: false, message: "Error fetching exchange rate." };
  }
};
