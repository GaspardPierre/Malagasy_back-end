const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Artist extends Model {}

Artist.init({
    ArtisteID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nom: {
    type : DataTypes.STRING,
    allowNull: false

  } ,

  Biographie: DataTypes.STRING,

  SiteWeb: DataTypes.STRING,
  PhotoProfil: DataTypes.STRING
}, { sequelize, modelName: "artist" });
    

module.exports = Artist;
