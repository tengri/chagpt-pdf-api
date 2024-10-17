import { Router } from 'express';

import {
  createCard, deleteCard, getCards, likeCard, unlikeCard,
} from '../controllers/cards';

const cardsRouter = Router();

// cardsRouter.post('/cards', createCard, ersRouter.post('/signup', signUp,
// y: Joi.object().keys({
// mail: Joi.string().email(),
// assword: Joi.string().required(
// }),
// )
// );
//

cardsRouter.delete('/cards/:cardId', deleteCard);

cardsRouter.get('/cards', getCards);

cardsRouter.delete('/cards/:cardId', deleteCard);

cardsRouter.put('/cards/:cardId/likes', likeCard);

cardsRouter.delete('/cards/:cardId/likes', unlikeCard);

export default cardsRouter;
