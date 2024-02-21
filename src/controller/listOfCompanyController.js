import axios from 'axios';

export const getListOfCompany = async(req , res) =>{
    try{
        
        const { currency } = req.body;

        
        const response = await axios.get(`https://api.coingecko.com/api/v3/companies/public_treasury/${currency}`);
        const companies = response.data;

        
        res.status(200).send({ success : true ,message : "List of companies hold the currency" , companies });

    }

    catch(error){
        console.error('Error fetching companies:', error.message);
        res.status(500).send({success : false ,  message: 'Internal server error' });
    }
}