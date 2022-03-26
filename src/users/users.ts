import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/login', (req: Request, res: Response) => {
  res.status(200).send('Login');
});

router.post('/register', (req: Request, res: Response) => {
  res.status(200).send('Register');
});

export { router };
