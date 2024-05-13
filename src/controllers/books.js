const getBooks = (request, response) => {
    //Get all Books
};

const getBook = (request, response) => {
    const {id_book} = request.params;
    response.status(200);
    response.send(`Book with id ${id_book}`);
};

const createBook = (request, response) => {
    //Create new Book
};

const updateBook = (request, response) => {
    //Update Book
};

const deleteBook = (request, response) => {
    //Delete Book
};

module.exports = { 
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}