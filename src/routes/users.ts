import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';

import {
  getUsers, getMe, updateUser, getUserById, updateUserAvatar,
} from '../controllers/users';

const usersRouter = Router();

usersRouter.get('/users/me', getMe);

usersRouter.get('/users', getUsers);

usersRouter.patch(
  '/users/me',
  updateUser,
  celebrate({ body: Joi.object().keys({ name: Joi.string().required(), about: Joi.string().required() }) }),
);

usersRouter.get('/users/:userId', getUserById);

usersRouter.patch('/users/me/avatar', updateUserAvatar);

export default usersRouter;
