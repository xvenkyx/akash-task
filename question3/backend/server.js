import express from 'express';
import discountRoute from './routes/discountRoute.js';
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json());

// Route handler
app.use('/', discountRoute);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});