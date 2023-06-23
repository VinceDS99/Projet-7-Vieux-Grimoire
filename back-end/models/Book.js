const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    imageUrl: { type: String, required: true },
    year: { type: Number, required: true },
    userId: { type: String, required: true },
    gender: { type: String, required: true },
    rating: { type: Number, required: true },
});

module.exports = mongoose.model('Book', bookSchema);