import {updateCryptocurrencyData} from '../services/cryptoService.js';


cron.schedule('0 * * * *', async () => {
    await updateCryptocurrencyData();
   
  });
