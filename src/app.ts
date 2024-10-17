import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import { errors } from 'celebrate';

import mongoose from 'mongoose';

import usersRouter from './routes/users';
import cardsRouter from './routes/cards';
import authRouter from './routes/auth';

import requestLogger from './middlewares/requestLogger';
import errorLogger from './middlewares/errorLogger';
import auth from './middlewares/auth';

import {
  INTERNAL_ERROR_MESSAGE,
  NOT_FOUND_STATUS,
  NOT_FOUND_MESSAGE,
  INTERNAL_ERROR_STATUS,
} from './constants';

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

const { PORT = 3000 } = process.env;

const app = express();

app.use(requestLogger);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(authRouter);
app.use(auth);

app.use(usersRouter);
app.use(cardsRouter);

app.use(
  '*',
  (req: Request, res: Response, next: NextFunction) => next({ status: NOT_FOUND_MESSAGE, message: NOT_FOUND_MESSAGE }),
);

app.use(errors());
app.use(errorLogger);

app.use((err: Error & {status: number; message: string}, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || INTERNAL_ERROR_STATUS).send({ message: err.message || INTERNAL_ERROR_MESSAGE });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
