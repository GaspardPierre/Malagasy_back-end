import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";


class Product extends Model {}

Product.init({
    ProductID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "product_id"
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
    ArtistID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "artist_id"
    },
    CategoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field : "category_id"
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Dimensions: DataTypes.STRING, 
    Weight: DataTypes.FLOAT 
  }, { sequelize, modelName: "product" });

 export default Product;
  