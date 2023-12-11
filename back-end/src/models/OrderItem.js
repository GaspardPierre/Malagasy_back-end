import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";

class OrderItem extends Model {}

OrderItem.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  orderID: {
    type: DataTypes.INTEGER,
    references: {
      model: "orders",
      key: "order_id"
      
    },
    field: "order_id"
  },
  productID: {
    type: DataTypes.INTEGER,
    references: {
      model:"products",
      key: "product_id"
    },
    field: "product_id"
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, { sequelize, modelName: "orderItem" });

export default OrderItem;

