import mongoose, { Schema } from 'mongoose';
mongoose.set('runValidators', true);

const imageScheme = new Schema({
    name: { type: String, required: true },
    path: { type: String, required: true },
    gallery: { type: String, required: true},
    author: { type: String, required: true},
    width: { type: Number, required: true},
    height: { type: Number, required: true},
    meta: { type: Object },
    created: { type: Date, default : new Date() },
});

export default mongoose.models.image || mongoose.model('image', imageScheme);