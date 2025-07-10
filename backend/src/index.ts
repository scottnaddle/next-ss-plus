
import express from 'express';
import cors from 'cors';
import './database';
import authRouter from './routes/auth';
import usersRouter from './routes/users';
import storesRouter from './routes/stores';
import learningRouter from './routes/learning';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/stores', storesRouter);
app.use('/api/learning', learningRouter);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(Number(port), '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
