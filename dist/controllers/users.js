const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P((resolve) => { resolve(value); }); }
  return new (P || (P = Promise))((resolve, reject) => {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
exports.updateUser = exports.getUser = exports.createUser = void 0;
const user_1 = __importDefault(require('../models/user'));

const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
  if (!req.body.user && typeof req.body.user.name !== 'string' && req.body.user.about !== 'string') {
    return res.status(400).send('Bad Request');
  }
  const user = new user_1.default({ name: req.body.user.name, about: req.body.user.about, avatar: req.body.user.avatar });
  yield user.save();
  return res.json(user);
});
exports.createUser = createUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.json(yield user_1.default.find({})); });
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
  if (typeof req.body.name !== 'string' && typeof req.body.about !== 'string') {
    return res.status(400).send('Bad Request');
  }
  yield user_1.default.findByIdAndUpdate(req.cookies.userId, { about: req.body.about, name: req.body.name });
  return res.send();
});
exports.updateUser = updateUser;
