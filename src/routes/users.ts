import { Router } from 'express';
import User from '../models/user';

import { createUser, getUser, updateUser } from '../controllers/users';

const usersRouter = Router();

usersRouter.post('/users', createUser);

usersRouter.get('/users', getUser);

usersRouter.patch('/users/me', updateUser);

usersRouter.get('/users/:userId', async (req, res) => {
  res.json(await User.find({ _id: req.params.userId }));
});

usersRouter.patch('/users/me/avatar', async (req, res) => {
  User.findByIdAndUpdate(req.cookies.userId, { avatar: req.body.avatar });
  res.send();
});

export default usersRouter;
