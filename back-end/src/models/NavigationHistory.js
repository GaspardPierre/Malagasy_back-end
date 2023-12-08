import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";

class NavigationHistory extends Model {}

NavigationHistory.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field:"history_id"
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "User",
      key: "id", // La clé primaire de la table de l'utilisateur
    },
    field: "user_id", // Nom de la colonne dans la base de données
  },
  productID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Product", // Nom du modèle Sequelize pour le produit
      key: "id", // La clé primaire de la table du produit
    },
    field: "product_id", // Nom de la colonne dans la base de données
  },
  visitedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW // Date et heure de la visite par défaut à 'maintenant'
  }
}, { 
  sequelize, 
  modelName: "navigation_history",
  timestamps: false, 
  underscored: true 
});

export default NavigationHistory;
