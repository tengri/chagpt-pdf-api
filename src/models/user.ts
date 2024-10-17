import mongoose, { Schema, Document } from 'mongoose';

export interface IUser {
  name: string;
  about: string;
  avatar: string;
  email: string;
  password: string;
}

// Define an interface for the user schema
type TUserModel = Document & IUser;

// Create a schema using the Schema class
const UserSchema: Schema = new Schema({
  name: { type: String, default: 'Жак-Ив Кусто' },
  about: { type: String, default: 'Исследователь' },
  avatar: {
    type: String,
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
  password: {
    type: String, required: true, select: false, unique: true,
  },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model<TUserModel>('users', UserSchema);

export default User;
