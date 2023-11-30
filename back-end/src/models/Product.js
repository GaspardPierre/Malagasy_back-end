const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Product extends Model {}

Product.init({
    ProduitID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Prix: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    QuantiteDisponible: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ArtisteID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CategorieID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DateCreation: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Dimensions: DataTypes.STRING, 
    Poids: DataTypes.FLOAT 
  }, { sequelize, modelName: "product" });

  module.exports = Product;
  