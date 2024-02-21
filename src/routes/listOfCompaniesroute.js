import express from 'express';

const router = express.Router();

import {getListOfCompany} from '../controller/listOfCompanyController.js';

router.post('/task3' , getListOfCompany);

export default router;