import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/user';

import {
  BAD_REQUEST_STATUS, WRONG_CREDENTIALS_MESSAGE, AUTH_SECRET,
  CONFLICT_STATUS,
  INTERNAL_ERROR_MESSAGE,
  INTERNAL_ERROR_STATUS,
} from '../constants';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    return res.send(users);
  } catch (err) {
    return res.send({ status: INTERNAL_ERROR_STATUS, message: INTERNAL_ERROR_MESSAGE });
  }
};

export const getMe = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.cookies.userId);
    return res.send(user);
  } catch (err) {
    return res.send({ status: INTERNAL_ERROR_STATUS, message: INTERNAL_ERROR_MESSAGE });
  }
};

export const updateUser = async (req: Request<{user: IUser}>, res: Response) => {
  try {
    const newUserData = await User.findOneAndUpdate(
      req.cookies.userId,
      { about: req.body.about, name: req.body.name },
      { new: true },
    );
    return res.send(newUserData);
  } catch (err) {
    return res.send({ status: INTERNAL_ERROR_STATUS, message: INTERNAL_ERROR_MESSAGE });
  }
};

export const getUserById = async (req: Request<{userId: string}>, res: Response) => res.send(await User.findById(req.params.userId));

export const updateUserAvatar = async (req: Request<{avatar: string}>, res: Response, next: NextFunction) => {
  try {
    await User.findByIdAndUpdate(req.cookies.userId, { avatar: req.body.avatar });
    return res.send({ avatar: req.body.avatar });
  } catch (err) {
    return next({ message: INTERNAL_ERROR_MESSAGE, status: INTERNAL_ERROR_STATUS });
  }
};

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const { password, email } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hash,
    });
    return res.send({ email });
  } catch (err) {
    if ((err instanceof Error) && err.message.startsWith('E11000')) {
      return next({ status: CONFLICT_STATUS, message: 'Email already exists' });
    }
  }
};

export const signIn = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');

    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
      return next({ status: BAD_REQUEST_STATUS, message: WRONG_CREDENTIALS_MESSAGE });
    }

    const token = await jwt.sign(
      { userId: user._id },
      AUTH_SECRET,
      { expiresIn: '7d' },
    );

    res.cookie('token', token, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });
    return res.send({ ...user, password: undefined });
  } catch (err) {
    return next({ status: INTERNAL_ERROR_STATUS, message: INTERNAL_ERROR_MESSAGE });
  }
};
