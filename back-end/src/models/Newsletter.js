const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Newsletter extends Model {}

Newsletter.init({
    NewsletterID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  DateInscription: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.DATE
  }
}, { sequelize, modelName: "newsletter" });

module.exports = Newsletter;