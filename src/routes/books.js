const router = require('express').Router();

const { getBooks, getBook, createBook, deleteBook, updateBook } = require('../controllers/books')

router.get('/books', getBooks);
router.get('/books/:id_book', getBook);
router.post('/books', createBook);
router.delete('/books/:id_book', deleteBook);
router.patch('/books/:id_book', updateBook);

module.exports = router;
