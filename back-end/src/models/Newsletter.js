import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";

class Newsletter extends Model {}

Newsletter.init({
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field:"newsletter_id"
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  registerAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.DATE
  }
}, { sequelize, modelName: "newsletter" });

export default Newsletter;