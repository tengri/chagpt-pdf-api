import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';

import {
  signUp, signIn,
} from '../controllers/users';

const authRouter = Router();

authRouter.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email(),
    password: Joi.string().required(),
  }),
}), signUp);

authRouter.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email(),
    password: Joi.string().required(),
  }),
}), signIn);

export default authRouter;
