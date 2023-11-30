const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Product extends Model {}

Product.init({
    ProduitID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    AvailableQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ArtisteID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Dimensions: DataTypes.STRING, 
    Poids: DataTypes.FLOAT 
  }, { sequelize, modelName: "product" });

  module.exports = Product;
  