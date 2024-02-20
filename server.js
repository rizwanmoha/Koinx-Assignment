import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDb from './src/config/db.js';
dotenv.config();



const app = express();




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