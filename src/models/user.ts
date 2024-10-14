import mongoose, { Schema, Document } from 'mongoose';

export interface IUser {
  name: string;
  about: string;
  avatar: string;
}

// Define an interface for the user schema
type TUserModel = Document & IUser;

// Create a schema using the Schema class
const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  about: { type: String, required: true },
  avatar: { type: String, required: true },
});

// Use the schema to create a model
const User = mongoose.model<TUserModel>('User', UserSchema);

export default User;
