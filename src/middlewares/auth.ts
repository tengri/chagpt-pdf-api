import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { UNAUTHORIZED_MESSAGE, UNAUTHORIZED_STATUS, AUTH_SECRET } from '../constants';

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) {
    return next({ status: UNAUTHORIZED_STATUS, message: UNAUTHORIZED_MESSAGE });
  }

  const tokenData = await jwt.verify(token, AUTH_SECRET) as { userId: string };
  req.cookies.userId = tokenData.userId;

  return next();
};

export default auth;
