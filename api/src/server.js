import express, { json } from 'express';
import authRouter from './routes/authRoutes.js';
import { connectDb } from './config/database.js';

const app = express();
connectDb();
app.use(json());

app.use(authRouter);

app.listen(5000, () => {
  console.log('Server is running on ports 5000');
});