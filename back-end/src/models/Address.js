import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

class Address extends Model {}

Address.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "address_id"
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "User", // Utilisez le nom du modèle Sequelize, pas le nom de la table
      key: "id", // Référencez la clé primaire du modèle User
    },
    field: "user_id" // Nom de la colonne dans la base de données
  },
  Street: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
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
  timestamps: false,
  underscored: true
});

export default Address;
