const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class NavigationHistory extends Model {}

NavigationHistory.init({
  HistoriqueID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users", // Assurez-vous que ce nom correspond à votre table utilisateurs
      key: "UserID"
    }
  },
  ProduitID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "product", 
    }
  },
  DateVisite: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW // Date et heure de la visite par défaut à 'maintenant'
  }
}, { 
  sequelize, 
  modelName: 'navigation_history',
  timestamps: false, 
  underscored: true 
});

module.exports = NavigationHistory
