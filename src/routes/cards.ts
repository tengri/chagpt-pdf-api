import { Router } from 'express';

import {
  createCard, deleteCard, getCards, likeCard, unlikeCard,
} from '../controllers/cards';

const cardsRouter = Router();

cardsRouter.post('/cards', createCard);

cardsRouter.delete('/cards/:cardId', deleteCard);

cardsRouter.get('/cards', getCards);

cardsRouter.put('/cards/:cardId/likes');

cardsRouter.delete('/cards/:cardId', likeCard);

cardsRouter.delete('/cards/:cardId/likes', unlikeCard);

export default cardsRouter;
