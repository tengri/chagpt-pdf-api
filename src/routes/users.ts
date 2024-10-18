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
  celebrate({ body: Joi.object().keys({ name: Joi.string().required(), about: Joi.string().required().min(2).max(30) }) }),
  updateUser,
);

usersRouter.get('/users/:userId', celebrate({ params: { userId: Joi.string().required().min(16).max(16) } }), getUserById);

usersRouter.patch(
  '/users/me/avatar',
  celebrate({ body: Joi.object().keys({ avatar: Joi.string().required().uri() }) }),
  updateUserAvatar,
);

export default usersRouter;
