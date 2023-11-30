const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Order extends Model {}

Order.init({
  CommandeID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users", // Nom de la table dans la base de données
      key: "UserID"
    }
  },
  DateCommande: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Statut: {
    type: DataTypes.STRING,
    allowNull: false
  },
  TotalCommande: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  AdresseLivraisonID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "adresses", 
      key: "AdresseID"
    }
  }
}, { sequelize, modelName: "order" });

module.exports = Order;
