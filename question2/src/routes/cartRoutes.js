import { Router } from 'express';
const router = Router();
import { addToCart, getCart } from '../controllers/cartController.js';

router.post('/', addToCart);
router.get('/', getCart);

export default router;
