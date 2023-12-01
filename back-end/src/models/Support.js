const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Support extends Model {}

Support.init({
  TicketID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "ticket_id"
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users", 
      key: "user_id",
      field: "user_id",
    }
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

module.exports = Support;
