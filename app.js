import express from 'express';
import cors from 'cors';

import showRouter from './routers/showRouter.js';

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
}));

app.use(express.json());
app.use(express.static('public', {
  extensions: ['html'],
}));

app.use('/shows', showRouter);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'movie-tracker api' });
});

export default app;