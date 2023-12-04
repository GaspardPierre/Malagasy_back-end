import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";

class Review extends Model {}

Review.init({
    ReviewID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field:"review_id"
  },
  Rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Comment: DataTypes.STRING,
  ProductID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "product_id"
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: "review"
});

export default Review;