import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";

class Order extends Model {}

Order.init({
  OrderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field:"order_id"
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users", // Nom de la table dans la base de données
      key: "user_id",
      field: "user_id"

    }
  },
  OrderDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Statut: {
    type: DataTypes.STRING,
    allowNull: false
  },
  TotalOrder: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  AddressLivraisonID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "addresses", 
      key: "address_id",
      field: "address_id"
    }
  }
}, { sequelize, modelName: "order" });

export default Order;
