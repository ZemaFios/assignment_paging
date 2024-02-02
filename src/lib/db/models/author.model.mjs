import mongoose, { Schema } from 'mongoose';
mongoose.set('runValidators', true);

const authorScheme = new Schema({
    author: { type: String,  required: true },
    gallery: { type: String,  required: true},
    folder: { type: String,  required: true},
    niceUrl: { type: String,  required: true},
    created: { type: Date, default : new Date() },
});

export default mongoose.models.author || mongoose.model('author', authorScheme);