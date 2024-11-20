import express from 'express';
import productRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRoutes.js';

const app = express()

app.use(express.json())

app.use('/products', productRouter);
app.use('/cart', cartRouter);

app.listen(3000, () => console.log('Server running on port 3000'));