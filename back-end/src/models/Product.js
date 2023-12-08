import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";


class Product extends Model {}

Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "product_id"
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photoURL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    availableQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    artistID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "artist_id"
    },
    categoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field : "category_id"
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dimensions: DataTypes.STRING, 
    weight: DataTypes.FLOAT 
  }, { sequelize, modelName: "product" });

 export default Product;
  