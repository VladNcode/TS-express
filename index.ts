import express, { Request, Response, NextFunction } from 'express';
import { router as userRouter } from './users/users';

const app = express();
const port = process!.env.PORT || 3000;

app.use(express.json({}));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Time', new Date().toLocaleTimeString());
  next();
});

app.get('/hello/', () => {
  throw new Error('Error!!!');
});

app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response) => {
  console.log(err.message);
  res.status(400).send({
    status: 'failure',
    error: err.message,
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});
