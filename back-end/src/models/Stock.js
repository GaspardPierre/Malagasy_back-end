const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Stock extends Model {}

Stock.init({
  StockID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ProduitID: {
    type :DataTypes.INTEGER,
    allowNull: false,
  },
  CurrentAmount: DataTypes.INTEGER,
  MinimunAMount: DataTypes.INTEGER
}, { sequelize, modelName: "stock" });

module.exports = Stock;

