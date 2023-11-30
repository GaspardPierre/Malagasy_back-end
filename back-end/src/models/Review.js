const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Review extends Model {}

Review.init({
    ReviewID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Comment: DataTypes.STRING,
  ProductID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: "review"
});

module.exports = Review;