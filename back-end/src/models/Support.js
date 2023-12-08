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
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "User", // Utilisez le nom du modèle Sequelize
      key: "id", // Référencez la clé primaire du modèle User
    },
    field: "user_id", // Nom de la colonne dans la base de données
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  statutTicket: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Open",
    validate: {
      isIn: [["Open", "In progress", "closed"]] // Exemple de valeurs acceptées
    }
  },
  openAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  closingDate: {
    type: DataTypes.DATE
  }
}, { 
  sequelize, 
  modelName: "support",
  timestamps: false, 
  underscored: true 
});

export default Support;
