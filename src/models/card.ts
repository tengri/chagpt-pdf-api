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
    name: { type: String, required: true },
    link: { type: String, required: true },
    owner: { type: String, required: true },
    likes: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now },
});


// Use the schema to create a model
const Card = mongoose.model<TCardModel>('Card', CardSchema);

export default Card;