'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    static associate(models) {
      Quiz.hasMany(models.Question, { foreignKey: 'quiz_id', as: 'questions' });
    }
  }
  Quiz.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Quiz',
    tableName: 'quizes'
  });
  return Quiz;
};