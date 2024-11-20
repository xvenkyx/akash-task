import { Router } from 'express';
const router = Router();
import getProducts from '../controllers/productController.js';

router.get('/', getProducts);

export default router;