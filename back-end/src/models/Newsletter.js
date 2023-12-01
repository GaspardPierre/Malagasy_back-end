const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Newsletter extends Model {}

Newsletter.init({
    NewsletterID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field:"newsletter_id"
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  RegisterAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.DATE
  }
}, { sequelize, modelName: "newsletter" });

module.exports = Newsletter;