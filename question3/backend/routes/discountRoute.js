import express from 'express';
import { applyDiscount } from '../controllers/discountController.js';

const router = express.Router();

router.post('/apply-discount', applyDiscount);

export default router;