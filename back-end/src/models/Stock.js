import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";

class Stock extends Model {}

Stock.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field:"stock_id"
  },
  productID: {
    type :DataTypes.INTEGER,
    allowNull: false,
    field:"product_id"
  },
  currentAmount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  ,
  MinimunAMount: DataTypes.INTEGER
}, { sequelize, modelName: "stock" });

export default Stock;

