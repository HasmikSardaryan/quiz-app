const { Quiz } = require('../models');

const create_quiz = async (req, res) => {
  if (!req.body) {
    return res.status(400).send('Fill all of the fields');
  }

  const { name, description } = req.body;

  if (!name || !name.trim() || !description || !description.trim()) {
    return res.status(400).send('Fill all of the fields');
  }

  const found = await Quiz.findOne({ where: { name } });

  if (found) {
    return res.status(400).send('Please choose another name');
  }

  const newquiz = await Quiz.create({ name, description });
  return res.status(201).send(newquiz);
};

module.exports = { create_quiz };7