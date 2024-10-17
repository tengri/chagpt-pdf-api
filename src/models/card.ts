import mongoose, { Schema, Document } from 'mongoose';

export type TCard = {
    name: string;
    link: string;
    owner: string;
    likes: string[];
    createdAt: Date;
}

type TCardModel = Document & TCard;

const CardSchema: Schema = new Schema({
  name:
    {
      type: String,
      required: true,
    },
  link: {
    type: String,
    required: true,
    validate: {
      // eslint-disable-next-line max-len
      validator: (v: string) => /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(v),
    },
  },
  owner: { type: Schema.Types.ObjectId, required: true },
  likes: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
});

const Card = mongoose.model<TCardModel>('Card', CardSchema);

export default Card;
