import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";

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
  CurrentAmount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  ,
  MinimunAMount: DataTypes.INTEGER
}, { sequelize, modelName: "stock" });

export default Stock;

