import { Router } from 'express';

import { celebrate, Joi, Segments } from 'celebrate';
import {
  createCard, deleteCard, getCards, likeCard, unlikeCard,
} from '../controllers/cards';

const cardsRouter = Router();

cardsRouter.post(
  '/cards',
  celebrate({
    [Segments.BODY]: Joi.object().keys(
      {
        name: Joi.string().required().min(2).max(30),
        link: Joi.string().required().uri(),
      },
    ),
  }),
  createCard,

);

cardsRouter.get('/cards', getCards);
cardsRouter.delete(
  '/cards/:cardId',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys(
      {
        cardId: Joi.string().required(),
      },
    ),
  }),
  deleteCard,
);

cardsRouter.put(
  '/cards/:cardId/likes',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys(
      {
        cardId: Joi.string().required(),
      },
    ),
  }),
  likeCard,
);
cardsRouter.delete('/cards/:cardId/likes', celebrate({
  [Segments.PARAMS]: Joi.object().keys(
    {
      cardId: Joi.string().required(),
    },
  ),
}), unlikeCard);

export default cardsRouter;
