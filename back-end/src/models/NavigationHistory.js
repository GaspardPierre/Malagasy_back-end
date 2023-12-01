const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class NavigationHistory extends Model {}

NavigationHistory.init({
  HistoryID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field:"history_id"
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users", // Assurez-vous que ce nom correspond à votre table utilisateurs
      key: "user_id",
      field:"user_id",
    }
  },
  ProductID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "products", 
    }
  },
  VisitedAt: {
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

module.exports = NavigationHistory
