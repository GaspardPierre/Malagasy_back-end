const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Stock extends Model {}

Stock.init({
  StockID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field:"stock_id"
  },
  ProductID: {
    type :DataTypes.INTEGER,
    allowNull: false,
    field:"product_id"
  },
  CurrentAmount: DataTypes.INTEGER,
  MinimunAMount: DataTypes.INTEGER
}, { sequelize, modelName: "stock" });

module.exports = Stock;

