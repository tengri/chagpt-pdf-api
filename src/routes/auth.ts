import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';

import {
  signUp, signIn,
} from '../controllers/users';

const authRouter = Router();

authRouter.post('/signup', signUp, celebrate({
  body: Joi.object().keys({
    email: Joi.string().email(),
    password: Joi.string().required().min(6).max(30),
  }),
}));

authRouter.post('/signin', signIn, celebrate({
  body: Joi.object().keys({
    email: Joi.string().email(),
    password: Joi.string().required().min(6).max(30),
  }),
}));

export default authRouter;
