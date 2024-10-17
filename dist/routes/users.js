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
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const users_1 = require("../controllers/users");
const usersRouter = (0, express_1.Router)();
usersRouter.post('/users', users_1.createUser);
usersRouter.get('/users', users_1.getUser);
usersRouter.patch('/users/me', users_1.updateUser);
usersRouter.get('/users/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield user_1.default.find({ _id: req.params.userId }));
}));
usersRouter.patch('/users/me/avatar', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    user_1.default.findByIdAndUpdate(req.cookies.userId, { avatar: req.body.avatar });
    res.send();
}));
exports.default = usersRouter;
