import express from "express";

import { currencyExchange } from "../controller/CurrencyExchangeController.js";

const router = express.Router();

router.post("/task2", currencyExchange);

export default router;
