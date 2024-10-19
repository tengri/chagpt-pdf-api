import { ObjectId } from 'Mongoose';

declare namespace e {
    export interface Request {
        user?: {
            _id: ObjectId;
        }
    }
}

declare namespace Express {
    export interface Request {
        user?: {
            _id: ObjectId;
        }
    }
}
