
import {updateCryptocurrencyData} from '../services/cryptoService.js';


export const getTheCyptoCurrency = async(req , res) =>{
    try {

      const result = await updateCryptocurrencyData();
      if (result.success) {
        return res.status(200).send({ success: true, message: 'Data inserted successfully.' });
      } else {
        return res.status(500).send({ success: false, message: result.message });
      }
        
        
      } catch (error) {
       

        return res.status(500).send({success : false , message : ""})
      }


}

