import { Request, Response } from 'express';

import User, { IUser } from '../models/user';

import { BAD_REQUEST_MESSAGE, BAD_REQUEST_STATUS } from '../constants';

export const createUser = async (req: Request<{user: IUser}>, res: Response) => {
  if (typeof req.body.name !== 'string' && req.body.about !== 'string') {
    return res.status(BAD_REQUEST_STATUS).send(BAD_REQUEST_MESSAGE);
  }
  const user = new User({ name: req.body.name, about: req.body.about, avatar: req.body.avatar || '' });
  await user.save();

  return res.json(user);
};

export const getUser = async (req: Request, res: Response) => res.json(await User.find({}));

export const updateUser = async (req: Request<{user: IUser}>, res: Response) => {
  if (typeof req.body.name !== 'string' && typeof req.body.about !== 'string') {
    return res.status(BAD_REQUEST_STATUS).send(BAD_REQUEST_MESSAGE);
  }
  await User.findByIdAndUpdate(req.cookies.userId, { about: req.body.about, name: req.body.name });
  return res.send();
};

export const getUserById = async (req: Request<{userId: string}>, res: Response) => {
  if (typeof req.params.userId === 'string') {
    res.sendStatus(BAD_REQUEST_STATUS).send(BAD_REQUEST_MESSAGE);
  }
  return res.json(await User.find({ _id: req.params.userId }));
};

export const updateUserAvatar = async (req: Request<{avatar: string}>, res: Response) => {
  User.findByIdAndUpdate(req.cookies.userId, { avatar: req.body.avatar });
  res.send();
};
