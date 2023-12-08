import { Model, DataTypes } from "sequelize" ;
import sequelize from "../config/db.js";

class Favori extends Model {}

Favori.init({
    id: {
        type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field :"favori_id"
    },
    userId :{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_id"
    },
    dateAddition : DataTypes.DATE
},  { sequelize, modelName: "favori" });    

export default Favori;   