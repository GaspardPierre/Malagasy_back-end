const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Artist extends Model {}

Artist.init({
    ArtisteID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field:"artist_id"
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
