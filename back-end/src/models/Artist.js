const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Artist extends Model {}

Artist.init({
    ArtisteID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: {
    type : DataTypes.STRING,
    allowNull: false

  } ,

  Biography: DataTypes.STRING,

  WebSite: DataTypes.STRING,
  ProfilePhoto: DataTypes.STRING
}, { sequelize, modelName: "artist" });
    

module.exports = Artist;
