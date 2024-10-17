import { Router } from 'express';

import { celebrate, Joi, Segments } from 'celebrate';
import {
  createCard, deleteCard, getCards, likeCard, unlikeCard,
} from '../controllers/cards';

const cardsRouter = Router();

cardsRouter.post(
  '/cards',
  createCard,
  celebrate({
    [Segments.BODY]: Joi.object().keys(
      {
        name: Joi.string().required(),
        link: Joi.string().required().uri(),
      },
    ),
  }),
);

cardsRouter.get('/cards', getCards);
cardsRouter.delete('/cards/:cardId', deleteCard);

cardsRouter.put('/cards/:cardId/likes', likeCard);
cardsRouter.delete('/cards/:cardId/likes', unlikeCard);

export default cardsRouter;
