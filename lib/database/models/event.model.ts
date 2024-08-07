import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string; // Optional since not required in the schema
    location?: string; // Optional since not required in the schema
    createdAt: Date; // Optional since it has a default value
    imageUrl: string;
    startDateTime: Date; // Optional since it has a default value
    endDateTime: Date; // Optional since it has a default value
    price: string; // Optional since not required in the schema
    isFree: boolean; // Optional since it has a default value
    url: string; // Optional since not required in the schema
    category: {_id:string, name: string};
    organizer: {_id:string, firstName: string, lastName: string}
}

const EventSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String},
    location: { type: String},
    createdAt: {type: Date, default: Date.now},
    imageUrl: { type: String, required: true},
    startDateTime: { type: Date, default: Date.now},
    endDateTime: { type: Date, default: Date.now},
    price: { type: String},
    isFree: { type: Boolean, default: false},
    url: { type: String},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    organizer: {type: Schema.Types.ObjectId, ref: 'User'}
})

const Event = models.Event || model('Event', EventSchema);

export default Event;