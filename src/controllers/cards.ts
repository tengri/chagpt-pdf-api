import { Request, Response } from 'express';

import Card, { TCard } from '../models/card';
import { BAD_REQUEST_MESSAGE, BAD_REQUEST_STATUS } from '../constants';

export const createCard = async (req: Request<null, null, Pick<TCard, 'link' | 'name'>>, res: Response) => {
  const card = new Card({ name: req.body.name, link: req.body.link, owner: req.cookies.userId });
  console.log('card:', card);
  await card.save();
  return res.send({ card });
};

export const deleteCard = async (req: Request, res: Response) => {
  if (typeof req.params.cardId === 'string') {
    return res.status(BAD_REQUEST_STATUS).send(BAD_REQUEST_MESSAGE);
  }
  await Card.findByIdAndDelete(req.params.cardId);
  return res.send();
};

export const getCards = async (req: Request, res: Response) => res.send(await Card.find({}));

export const likeCard = async (req: Request, res: Response) => {
  if (typeof req.body.cardId !== 'string') {
    return res.status(BAD_REQUEST_STATUS).send(BAD_REQUEST_MESSAGE);
  }
  await Card.findByIdAndUpdate(req.body.cardId, { $addToSet: { likes: req.cookies.userId } }, { new: true });
  return res.send();
};

export const unlikeCard = async (req: Request, res: Response) => {
  if (typeof req.body.cardId !== 'string') {
    return res.status(BAD_REQUEST_STATUS).send(BAD_REQUEST_MESSAGE);
  }
  await Card.findByIdAndUpdate(req.body.cardId, { $pull: { likes: req.cookies.userId } }, { new: true });
  return res.send();
};
