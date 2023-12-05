import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";

class NavigationHistory extends Model {}

NavigationHistory.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "history_id" // Nom de la colonne dans la base de données
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "User", 
      key: "id", // La clé primaire de la table de l'utilisateur
    },
    field: "user_id", // Nom de la colonne dans la base de données
  },
  ProductID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Product", // Nom du modèle Sequelize pour le produit
      key: "id", // La clé primaire de la table du produit
    },
    field: "product_id", // Nom de la colonne dans la base de données
  },
  VisitedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, { 
  sequelize, 
  modelName: "NavigationHistory", // Utilisez la casse Camel pour les noms de modèles
  timestamps: false,
  underscored: true 
});

export default NavigationHistory;
