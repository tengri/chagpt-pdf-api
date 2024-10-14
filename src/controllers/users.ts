import  {Request, Response} from 'express';

import User from '../models/user';
import {IUser} from '../types/user';

export const createUser =  async (req: Request<{user: IUser}>, res: Response) => {
    if (!req.body.user && typeof req.body.user.name !== 'string' && req.body.user.about !== 'string') {
      return res.status(400).send('Bad Request');
    }
    const user = new User({ name: req.body.user.name, about: req.body.user.about, avatar: req.body.user.avatar });
    await user.save();

    res.json(user);
  };
  

  export const getUser = async (req: Request, res: Response) => {
    res.json(await User.find({}));
}

export const updateUser = async (req: Request<{user: IUser}>, res: Response) => {
    if (typeof req.body.name !== 'string' && typeof req.body.about !== 'string') {
        return res.status(400).send('Bad Request');
    }
    await User.findByIdAndUpdate(req.cookies.userId, { about: req.body.about,  name: req.body.name });
    res.send();
}