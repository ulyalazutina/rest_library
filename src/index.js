const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const logMethodMiddleware = require('./middleware/logMethodMiddleware');
const logNotFoundMiddleware = require('./middleware/logNotFoundMiddleware');

dotenv.config();

const {
    PORT = 3000,
    API_URL = "http://127.0.0.1",
    MONGO_URL = 'mongodb://127.0.0.1:27017/beckend'
} = process.env;

mongoose.connect(MONGO_URL).then(()=>console.log('Connected mongo')).catch(error => handleError(error));

const app = express();

app.use(cors());
app.use(logMethodMiddleware);
app.use(bodyParser.json());

app.use(userRouter);
app.use(bookRouter);
app.use(logNotFoundMiddleware);

app.listen(PORT, () => {
    console.log(`Сервер запущен на ${API_URL}:${PORT}`);
})