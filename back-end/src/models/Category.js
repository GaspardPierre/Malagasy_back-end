const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Category extends Model {}

Category.init({
  CategorieID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field:"categorie_id"
  },
  NomCategorie: {
    type: DataTypes.STRING,
    allowNull: false

  },
  DescriptionCategorie: DataTypes.STRING
}, { sequelize, modelName: "category" });

module.exports = Category;