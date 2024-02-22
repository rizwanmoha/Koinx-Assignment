import express from "express";

import { getListOfCompany } from "../controller/listOfCompanyController.js";

const router = express.Router();

router.post("/task3", getListOfCompany);

export default router;
