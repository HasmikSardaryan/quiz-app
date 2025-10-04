'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    static associate(models) {
      Option.belongsTo(models.Question, {foreignKey: "question_id", as: 'question'});
    }
  }
  Option.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: DataTypes.STRING,
    is_correct: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Option',
    tableName: 'options'
  });
  return Option;
};