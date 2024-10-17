import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import { errors } from 'celebrate';

import mongoose from 'mongoose';

import usersRouter from './routes/users';
import cardsRouter from './routes/cards';
import {
  INTERNAL_ERROR_MESSAGE,
  NOT_FOUND_STATUS,
  NOT_FOUND_MESSAGE,
  INTERNAL_ERROR_STATUS,
} from './constants';

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use(
//   cors({
//     origin: '*', // Allow only this origin
//     methods: ['GET', 'POST'], // Allow only these methods
//   }),
// );

// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.cookie("userId", "670c35337326d51040e1396e", {
//     maxAge: 900000,
//     httpOnly: true,
//   });
//   next();
// });

app.use(usersRouter);
app.use(cardsRouter);

app.get('*', (req: Request, res: Response) => res.status(NOT_FOUND_STATUS).send(NOT_FOUND_MESSAGE));

app.use(errors());
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
// const { message } = err;
// res.status(INTERNAL_ERROR_STATUS).json({
// message: message || INTERNAL_ERROR_MESSAGE,
// });
// });
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ message: 'На сервере произошла ошибка' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Clean up resources if needed
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  // Clean up resources if needed
});
