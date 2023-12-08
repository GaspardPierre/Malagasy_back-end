import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";

class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field:"categorie_id"
  },
  categorie: {
    type: DataTypes.STRING,
    allowNull: false

  },
  descriptionCategorie: DataTypes.STRING
}, { sequelize, modelName: "category" });

export default Category;