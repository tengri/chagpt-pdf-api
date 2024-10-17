import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';

import {
  createUser, getUsers, getMe, updateUser, getUserById, updateUserAvatar, signUp, signIn,
} from '../controllers/users';

const usersRouter = Router();

usersRouter.get('/users/me', getMe);

usersRouter.post('/users', createUser);

usersRouter.get('/users', getUsers);

// usersRouter.patch('/users/me', updateUser);

usersRouter.get('/users/:userId', getUserById);

usersRouter.patch('/users/me/avatar', updateUserAvatar);

usersRouter.post('/signup', signUp, celebrate({
  body: Joi.object().keys({
    email: Joi.string().email(),
    password: Joi.string().required().min(6).max(30),
  }),
}));

usersRouter.post('/signin', signIn);

export default usersRouter;
