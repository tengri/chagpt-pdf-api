import { NextFunction, Request, Response } from 'express';

import Card from '../models/card';
import {
  FORBIDDEN_MESSAGE, OK_MESSAGE, FORBIDDEN_STATUS, NOT_FOUND_MESSAGE, NOT_FOUND_STATUS,
  INTERNAL_ERROR_STATUS,
  INTERNAL_ERROR_MESSAGE,
} from '../constants';

export const createCard = async (req: Request, res: Response, next: NextFunction) => {
  const card = new Card({ name: req.body.name, link: req.body.link, owner: req.cookies.userId.toString() });

  try {
    await card.save();
    return res.send({ card });
  } catch (err) {
    return next({ status: INTERNAL_ERROR_STATUS, message: INTERNAL_ERROR_MESSAGE });
  }
};

export const deleteCard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const card = await Card.findById(req.params.cardId);

    if (!card) {
      return next({ status: NOT_FOUND_STATUS, message: NOT_FOUND_MESSAGE });
    }

    if (card.owner !== req.cookies.userId) {
      return next({ status: FORBIDDEN_STATUS, message: FORBIDDEN_MESSAGE });
    }

    await Card.findByIdAndDelete(req.params.cardId);
    return res.send({ message: OK_MESSAGE });
  } catch (err) {
    return next({ status: INTERNAL_ERROR_STATUS, message: INTERNAL_ERROR_MESSAGE });
  }
};

export const getCards = async (req: Request, res: Response) => {
  try {
    const cards = await Card.find({ owner: req.cookies.userId });
    return res.send({ cards });
  } catch (err) {
    return res.send({ status: INTERNAL_ERROR_STATUS, message: INTERNAL_ERROR_MESSAGE });
  }
};

export const likeCard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const card = await Card.findById(req.params.cardId);
    if (!card) {
      return next({ status: NOT_FOUND_STATUS, message: NOT_FOUND_MESSAGE });
    }
    await Card.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: req.cookies.userId } }, { new: true });
    return res.send({ message: OK_MESSAGE });
  } catch (err) {
    return next({ status: INTERNAL_ERROR_STATUS, message: INTERNAL_ERROR_MESSAGE });
  }
};

export const unlikeCard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const card = await Card.findById(req.params.cardId);
    if (!card) {
      return next({ status: NOT_FOUND_STATUS, message: NOT_FOUND_MESSAGE });
    }

    await Card.findByIdAndUpdate(req.params.cardId, { $pull: { likes: req.cookies.userId } }, { new: true });
    return res.send({ message: OK_MESSAGE });
  } catch (err) {
    return next({ status: INTERNAL_ERROR_STATUS, message: INTERNAL_ERROR_MESSAGE });
  }
};
