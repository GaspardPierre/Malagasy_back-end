const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Address extends Model {}

Adresse.init({
  AdresseID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users", 
      key: "UserID"
    }
  },
  Street: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true // Assure that street
    }
  },
  City: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  PostCode: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      is: /^[0-9a-zA-Z\-]+$/ // Regex pour un code postal standard
    }
  },
  Country: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}, { 
  sequelize, 
  modelName: "address",
  timestamps: false, // Pas de timestamps automatiques si non nécessaire
  underscored: true // Utilisation de snake_case pour les noms de colonnes
});

module.exports = Address;
