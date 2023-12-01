const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class User extends Model {}

User.init({
  UserID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "user_id"
  },
  Email:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  PasswordHash: {
   type :  DataTypes.STRING,
   allowNull: false,

  } ,
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  FirstName: {
    type : DataTypes.STRING,
    allowNull: false,
  }, 
  RegisterAt: {
    type: DataTypes.DATE,
    allowNull: false

  },
  
  LastConnexion: {
    type: DataTypes.DATE,
    allowNull: true

  },

  
  StatutCompte: {

    type: DataTypes.STRING,
    allowNull: false

  } ,
  
  Role: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { sequelize, modelName: "user" });

module.exports = User;
