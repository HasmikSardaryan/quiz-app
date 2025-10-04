const express = require('express');
const dotenv = require('dotenv');
require('./db.js')
const quizRouter = require('./routers/quizRouters');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // extended - handels nested objects/arrays
app.use('/quiz', quizRouter);


app.listen(3000, () => console.log('http://localhost:3000'))