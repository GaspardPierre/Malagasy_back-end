import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";

class Review extends Model {}

Review.init({
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field:"review_id"
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comment: DataTypes.STRING,
  productID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "product_id"
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field:"user_id"
  }
}, {
  sequelize,
  modelName: "review"
});

export default Review;