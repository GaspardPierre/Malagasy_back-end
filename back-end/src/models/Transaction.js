import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";

class Transaction extends Model {}

Transaction.init({
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "transaction_id"
  },
    Amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    UserID : {
        type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id"
    },

  OrderID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "order_id"
  },
  PayementMeans : {
    type: DataTypes.STRING,
  },
  Status: {
    type: DataTypes.STRING,
   
  },
  TransactionDate : {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: "transaction"
});

export default Transaction;
