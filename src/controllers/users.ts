import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/user';

import {
  BAD_REQUEST_MESSAGE, BAD_REQUEST_STATUS, WRONG_CREDENTIALS_MESSAGE, AUTH_SECRET,
} from '../constants';

export const createUser = async (req: Request<{user: IUser}>, res: Response) => {
  if (typeof req.body.name !== 'string' && req.body.about !== 'string') {
    return res.status(BAD_REQUEST_STATUS).send(BAD_REQUEST_MESSAGE);
  }
  const user = new User({ name: req.body.name, about: req.body.about, avatar: req.body.avatar || '' });
  await user.save();

  return res.json(user);
};

export const getUsers = async (req: Request, res: Response) => res.json({});

export const getMe = async (req: Request, res: Response) => {
  console.log('getMe');
  const { token } = req.cookies;
  console.log('token: ', token);
  const { _id } = jwt.verify(token, AUTH_SECRET) as { _id: string };
  console.log('_id: ', _id);
  const user = await User.findById(_id);
  console.log('user: ', user);
  res.json(user);
};

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
  return res.send({ avatar: req.body.avatar });
};

export const signUp = async (req: Request, res: Response) => {
  const { password, email } = req.body;
  const hash = await bcrypt.hash(password, 10);

  await User.create({
    email,
    password: hash,
  });

  return res.send({ email });
};

export const signIn = async (req: Request, res: Response) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user || !await bcrypt.compare(req.body.password, user.password)) {
    return res.status(BAD_REQUEST_STATUS).send(WRONG_CREDENTIALS_MESSAGE);
  }

  const token = jwt.sign(
    { _id: user._id },
    AUTH_SECRET,
    { expiresIn: '7d' },
  );
  res.cookie('token', token, { maxAge: 7 * 24 * 60 * 60, httpOnly: true });

  return res.send(user);
};
