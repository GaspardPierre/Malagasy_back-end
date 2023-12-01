const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Transaction extends Model {}

Transaction.init({
    TransactionID: {
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

module.exports = Transaction;