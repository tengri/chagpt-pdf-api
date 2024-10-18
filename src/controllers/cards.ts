import { NextFunction, Request, Response } from 'express';

import Card from '../models/card';
import {
  FORBIDDEN_MESSAGE, OK_MESSAGE, FORBIDDEN_STATUS, NOT_FOUND_MESSAGE, NOT_FOUND_STATUS,
} from '../constants';

export const createCard = async (req: Request, res: Response, next: NextFunction) => {
  const card = new Card({ name: req.body.name, link: req.body.link, owner: req.cookies.userId.toString() });

  try {
    await card.save();
  } catch (err) {
    next(err);
  }

  return res.send({ card });
};

export const deleteCard = async (req: Request, res: Response, next: NextFunction) => {
  const card = await Card.findById(req.params.cardId);
  if (!card) {
    return next({ status: NOT_FOUND_STATUS, message: NOT_FOUND_MESSAGE });
  }

  if (card.owner !== req.cookies.userId) {
    next({ status: FORBIDDEN_STATUS, message: FORBIDDEN_MESSAGE });
  }

  try {
    await Card.findByIdAndDelete(req.params.cardId);
  } catch (err) {
    return next(err);
  }

  return res.send({ message: OK_MESSAGE });
};

export const getCards = async (req: Request, res: Response) => res.send(await Card.find({ owner: req.cookies.userId }));

export const likeCard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const card = await Card.findById(req.params.cardId);
    if (!card) {
      return next({ status: NOT_FOUND_STATUS, message: NOT_FOUND_MESSAGE });
    }
    await Card.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: req.cookies.userId } }, { new: true });
  } catch (err) {
    return next(err);
  }
  return res.send({ message: OK_MESSAGE });
};

export const unlikeCard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const card = await Card.findById(req.params.cardId);
    if (!card) {
      return next({ status: NOT_FOUND_STATUS, message: NOT_FOUND_MESSAGE });
    }

    await Card.findByIdAndUpdate(req.params.cardId, { $pull: { likes: req.cookies.userId } }, { new: true });
  } catch (err) {
    next(err);
  }
  return res.send({ message: OK_MESSAGE });
};
