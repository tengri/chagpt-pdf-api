"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = __importDefault(require("./routes/users"));
const cards_1 = __importDefault(require("./routes/cards"));
mongoose_1.default.connect('mongodb://127.0.0.1:27017/mestodb');
// Слушаем 3000 порт
const { PORT = 3000 } = process.env;
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('public'));
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST'], // Allow only these methods
}));
app.use((req, res, next) => {
    res.cookie('userId', '670c35337326d51040e1396e', { maxAge: 900000, httpOnly: true });
    next();
});
app.use(users_1.default);
app.use(cards_1.default);
app.listen(PORT, () => {
    // Если всё работает, консоль покажет, какой порт приложение слушает
    console.log(`App listening on port ${PORT}`);
});
