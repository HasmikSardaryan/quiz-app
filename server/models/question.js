'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      Question.belongsTo(models.Quiz, {foreignKey: 'quiz_id', as: 'quiz'}); // question.quiz
      Question.hasMany(models.Option, { foreignKey: 'question_id', as: 'options' }); // question.options
    }
  }
  Question.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
    tableName: 'questions'
  });
  return Question;
};