import { Request, Response } from 'express';

import Card, { TCard } from '../models/card';
import {
  BAD_REQUEST_MESSAGE, BAD_REQUEST_STATUS, FORBIDDEN_STATUS, NOT_FOUND_STATUS,
} from '../constants';

export const createCard = async (req: Request<null, null, Pick<TCard, 'link' | 'name'>>, res: Response) => {
  const card = new Card({ name: req.body.name, link: req.body.link, owner: req.cookies.userId.toString() });
  await card.save();
  return res.send({ card });
};

export const deleteCard = async (req: Request, res: Response) => {
  const card = await Card.findOne({ id: req.params.cardId });
  if (!card) {
    return res.status(NOT_FOUND_STATUS);
  }

  if (card.owner !== req.cookies.userId) {
    return res.status(FORBIDDEN_STATUS).send();
  }

  await Card.findByIdAndDelete(req.params.cardId);

  return res.send();
};

export const getCards = async (req: Request, res: Response) => res.send(await Card.find({ owner: req.cookies.userId }));

export const likeCard = async (req: Request, res: Response) => {
  if (typeof req.params.cardId !== 'string') {
    return res.status(BAD_REQUEST_STATUS).send(BAD_REQUEST_MESSAGE);
  }
  await Card.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: req.cookies.userId } }, { new: true });
  return res.send();
};

export const unlikeCard = async (req: Request, res: Response) => {
  if (typeof req.params.cardId !== 'string') {
    return res.status(BAD_REQUEST_STATUS).send(BAD_REQUEST_MESSAGE);
  }

  await Card.findByIdAndUpdate(req.params.cardId, { $pull: { likes: req.cookies.userId } }, { new: true });
  return res.send();
};
