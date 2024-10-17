"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unlikeCard = exports.likeCard = exports.getCards = exports.deleteCard = exports.createCard = void 0;
const card_1 = __importDefault(require("../models/card"));
const constants_1 = require("../constants");
const createCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = new card_1.default({ name: req.body.name, link: req.body.link, owner: req.cookies.userId });
    yield post.save();
    return res.send();
});
exports.createCard = createCard;
const deleteCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof req.params.cardId === 'string') {
        return res.status(400).send(constants_1.errorMessage400);
    }
    yield card_1.default.findByIdAndDelete(req.params.cardId);
    return res.send();
});
exports.deleteCard = deleteCard;
const getCards = (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.send(yield card_1.default.find({})); });
exports.getCards = getCards;
const likeCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof req.body.cardId !== 'string') {
        return res.status(400).send(constants_1.errorMessage400);
    }
    yield card_1.default.findByIdAndUpdate(req.body.cardId, { $addToSet: { likes: req.cookies.userId } }, { new: true });
    return res.send();
});
exports.likeCard = likeCard;
const unlikeCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof req.body.cardId !== 'string') {
        return res.status(400).send(constants_1.errorMessage400);
    }
    yield card_1.default.findByIdAndUpdate(req.body.cardId, { $pull: { likes: req.cookies.userId } }, { new: true });
    return res.send();
});
exports.unlikeCard = unlikeCard;
