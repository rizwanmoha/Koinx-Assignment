import express from 'express';

const router = express.Router();

import {currencyExchange} from '../controller/CurrencyExchangeController.js';

router.post('/task2' , currencyExchange);

export default router;