import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";

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

export default Category;