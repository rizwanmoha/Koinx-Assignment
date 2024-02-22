import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {connectDb} from './src/config/db.js';
import listofCryptoCurrencies from './src/routes/listOfCryptocurrenciesRoute.js';
import getListOfCompany from './src/routes/listOfCompaniesroute.js';
import CurrencyExchnage from './src/routes/CurrencyExchangeRoute.js';
import bodyParser from 'body-parser';
dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


connectDb();
app.use('/list' ,listofCryptoCurrencies);
app.use('/company' ,getListOfCompany);
app.use('/exchange' ,CurrencyExchnage);

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});



app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});