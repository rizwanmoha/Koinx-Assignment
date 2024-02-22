import axios from 'axios';

export const getCompaniesByCurrency = async (currency) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/companies/public_treasury/${currency}`);
    const companies = response.data;
    return { success: true, companies };
  } catch (error) {
    console.error('Error fetching companies:', error.message);
    return { success: false, message: 'Error fetching companies.' };
  }
};