import express from 'express';

const router = express.Router();

import {getTheCyptoCurrency} from '../controller/CryptoController.js';

router.post('/task1' , getTheCyptoCurrency);

export default router;
