const Book = require('../models/book');


const getBooks = (request, response) => {
    return Book.find({}).then(
        (data)=>{ response.status(200).send(data)}
    ).catch(e => response.status(500).send(e.message));
};

const getBook = (request, response) => {
    const {id_book} = request.params;
    return Book.findById(id_book).then(
        (book)=>{ response.status(200).send(book)}
    ).catch(e => response.status(404).send(e.message));
};

const createBook = (request, response) => {
    return Book.create({ ...request.body}).then(
        (book)=>{ response.status(201).send(book)}
    ).catch(e => response.status(500).send(e.message));
};

const updateBook = (request, response) => {
    const {id_book} = request.params;
    return Book.findByIdAndUpdate(id_book,{ ...request.body}).then(
        (book)=>{ response.status(200).send(book)}
    ).catch(e => response.status(404).send(e.message));
};

const deleteBook = (request, response) => {
    const {id_book} = request.params;
    return Book.findByIdAndDelete(id_book).then(
        ()=>{ response.status(200).send('Success')}
    ).catch(e => response.status(404).send(e.message));
};

module.exports = { 
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}