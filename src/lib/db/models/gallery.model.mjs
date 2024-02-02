import mongoose, { Schema } from 'mongoose';
mongoose.set('runValidators', true);

const galleryScheme = new Schema({
    name: { type: String,  required: true, unique: true },
    year: { type: Number,  required: true},
    created: { type: Date, default : new Date() },
});

export default mongoose.models.gallery || mongoose.model('gallery', galleryScheme);