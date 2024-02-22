import express from "express";

import { getTheCyptoCurrency } from "../controller/CryptoController.js";

const router = express.Router();

router.post("/task1", getTheCyptoCurrency);

export default router;
