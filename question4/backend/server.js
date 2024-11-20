import express from 'express';
import cors from 'cors'
import announcementRoutes from './routes/announcementRoutes.js';

const app = express();

app.use(express.json());
app.use(cors())

// Route handler for announcements
app.use('/api/announcements', announcementRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});