import express from 'express'
import viewsRouter from './routes/views';
import userRouter from './routes/user'

const app = express();

app.use(express.json());

app.use('/', viewsRouter);

app.use('/api/user/', userRouter);

app.listen(3000, () => console.log('Server started'));