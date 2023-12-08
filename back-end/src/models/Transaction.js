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
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    userID : {
        type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id"
    },

  orderID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "order_id"
  },
  payementMeans : {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
   
  },
  transactionDate : {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: "transaction"
});

export default Transaction;
