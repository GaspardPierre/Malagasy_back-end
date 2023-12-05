import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

class Support extends Model {}

Support.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "ticket_id"
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "User", // Utilisez le nom du modèle Sequelize
      key: "id", // Référencez la clé primaire du modèle User
    },
    field: "user_id", // Nom de la colonne dans la base de données
  },
  Subject: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Message: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  StatutTicket: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Open",
    validate: {
      isIn: [["Open", "In progress", "closed"]] // Exemple de valeurs acceptées
    }
  },
  OpenAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  ClosingDate: {
    type: DataTypes.DATE
  }
}, { 
  sequelize, 
  modelName: "support",
  timestamps: false, 
  underscored: true 
});

export default Support;
