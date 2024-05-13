const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLenght: 2
    }, 
    author: {
        type: String,
        required: true,
        minLenght: 2
    }, 
    release_year: {
        type: Number,
        required: true,
    }, 
});

module.exports = mongoose.model('book', bookSchema);
