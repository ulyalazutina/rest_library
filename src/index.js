const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const loggerOne = require('./middleware/loggerOne');

dotenv.config();

const app = express();

const {
    PORT = 3000,
    API_URL = "http://127.0.0.1"
} = process.env;

app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.status(200);
    response.send("Hello, World!"); 
})

app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
    console.log(`Сервер запущен на ${API_URL}:${PORT}`);
})