import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import mongoose from 'mongoose';

import usersRouter from './routes/users';
import cardsRouter from './routes/cards';
import { errorMessage500 } from './constants';


mongoose.connect('mongodb://127.0.0.1:27017/mestodb');


// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors({
    origin: '*', // Allow only this origin
    methods: ['GET', 'POST'], // Allow only these methods
  }));


app.use((req: Request, res: Response, next: NextFunction) => {
    res.cookie('userId', '670c35337326d51040e1396e', { maxAge: 900000, httpOnly: true });
    next();
}); 


app.use(usersRouter);
app.use(cardsRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    // если у ошибки нет статуса, выставляем 500
    const { message } = err;
    
  return res
    .status(500)
    .send({
    // проверяем статус и выставляем сообщение в зависимости от него
    message: message || errorMessage500,
    });
}); 

app.listen(PORT, () => {
    // Если всё работает, консоль покажет, какой порт приложение слушает
    console.log(`App listening on port ${PORT}`)
});