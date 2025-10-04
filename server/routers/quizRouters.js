const express = require('express');
const { create_quiz } = require('../controllers/quizControllers');

const quizRouter = express.Router();

quizRouter.post('/', create_quiz);
// quizRouter.post('/:id', get_quiz);

module.exports = quizRouter;
