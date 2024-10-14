import { Router } from 'express';

import {
  createUser, getUser, updateUser, getUserById, updateUserAvatar,
} from '../controllers/users';

const usersRouter = Router();

usersRouter.post('/users', createUser);

usersRouter.get('/users', getUser);

usersRouter.patch('/users/me', updateUser);

usersRouter.get('/users/:userId', getUserById);

usersRouter.patch('/users/me/avatar', updateUserAvatar);

export default usersRouter;
