import axios from "axios";

import { companyValidationSchema } from "../validations/companyValidations.js";
import {getCompaniesByCurrency} from '../services/companyService.js';


export const getListOfCompany = async (req, res) => {
  try {
    const { error, value } = companyValidationSchema.validate(req.body);
    if (error) {
      console.error("Validation Failed", error.details[0].message);
      return res
        .status(400)
        .send({
          success: false,
          message: "Validation Failed",
          error: error.details[0].message,
        });
    }
    const { currency } = value;
    

    // const response = await axios.get(
    //   `https://api.coingecko.com/api/v3/companies/public_treasury/${currency}`
    // );
    // const companies = response.data;
    const result = await getCompaniesByCurrency(currency);
    if (result.success) {
      return res.status(200).send({ success: true, message: 'List of companies hold the currency', companies: result.companies });
    } else {
      return res.status(500).send({ success: false, message: result.message });
    }

   
    // res
    //   .status(200)
    //   .send({
    //     success: true,
    //     message: "List of companies hold the currency",
    //     companies,
    //   });
  } catch (error) {
    console.error("Error fetching companies:", error.message);
    return res.status(500).send({ success: false, message: "Internal server error" });
  }
};

// import redis from "redis";
// import { promisify } from "util";


// const redisClient = redis.createClient();

// const getAsync = promisify(redisClient.get).bind(redisClient);
// const setAsync = promisify(redisClient.set).bind(redisClient);
// const expireAsync = promisify(redisClient.expire).bind(redisClient);

 // await setAsync(currency, JSON.stringify(companies));
    // await expireAsync(currency, 24 * 60 * 60);
// const cachedData = await getAsync(currency);
    // if (cachedData) {
    //   console.log("Data found in Redis cache");
    //   return res
    //     .status(200)
    //     .send({
    //       success: true,
    //       message: "List of companies hold the currency",
    //       companies: JSON.parse(cachedData),
    //     });
    // }


