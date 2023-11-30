const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Transaction extends Model {}

Transaction.init({
    TransactionID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
    Amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    UserID : {
        type: DataTypes.INTEGER,
      allowNull: false
    },

  OrderID: {
    type: DataTypes.INTEGER,
    allowNull: false
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