import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

class Order extends Model {}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "order_id"
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "User", // Utilisez le nom du modèle Sequelize
      key: "id", // Référencez la clé primaire du modèle User
    },
    field: "user_id" // Nom de la colonne dans la base de données
  },
  orderDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  statut: {
    type: DataTypes.STRING,
    allowNull: false
  },
  totalOrder: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  addressLivraisonID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Address", // Utilisez le nom du modèle Sequelize
      key: "id", // Référencez la clé primaire du modèle Address
    },
    field: "address_id" // Nom de la colonne dans la base de données
  }
}, { sequelize, modelName: "order" });

export default Order;
